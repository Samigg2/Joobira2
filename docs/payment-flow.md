# Joobiraa — Pay-per-Bid Payment Flow (Phase 1)

**Decision:** Phase 1 uses **pay-per-bid through Chapa**, with no wallet. Every bid is its own Chapa payment.
**Golden rule:** a bid is saved **only after our server confirms with Chapa that the payment succeeded**. Never trust the user's browser.

> This changes **SRS FR-6 / FR-7** (the wallet). Get the client's written approval before development (SRS Section 9).

---

## 1. Why pay-per-bid
- **Easy to build:** no wallet, balance or ledger to maintain.
- **Easy to protect:** no money is stored in our system, so there is nothing to steal.
- **Easy to manage:** one bid = one Chapa receipt. Payments are **non-refundable**, so there are no refunds.
- **Trade-off:** the user enters their PIN for every bid. If users complain, add a wallet in Phase 2.

---

## 2. Step-by-step flow

1. **User picks a bid amount** (e.g. 4.17 ETB) on the auction page and taps **Pay**.
2. **Our server checks first:**
   - the user is signed in
   - the auction is still live
   - the bid amount is valid (minimum 1.00 ETB, at most 2 decimals)
3. **Our server creates a payment record** with:
   - a unique transaction reference (`tx_ref`) that we generate
   - user, auction, bid amount, the **price to charge** (the auction's current bid / bid fee, taken from our database, never from the browser)
   - status **`awaiting_payment`**
4. **Our server asks Chapa to start the payment** (Chapa "Initialize Transaction"), sending the amount, `tx_ref`, the user's phone, our callback URL and our return URL.
5. **The user gets the Chapa prompt** (Telebirr / CBE Birr / Awash Birr) and **enters their PIN**.
6. **Chapa tells our server it's done** in three ways: it calls our callback URL, sends a webhook event, and redirects the user back to our return URL.
7. **Our server verifies with Chapa directly** ("Verify Transaction" using our `tx_ref`) and checks **all** of these:
   - Chapa says the status is **success**
   - the **amount** equals what *we* recorded in step 3
   - the **currency** is ETB
   - the `tx_ref` is **ours** and has **not been used before**
8. **Only if every check passes:**
   - the payment record becomes **`paid`**
   - the **bid is saved** and counted in the auction
   - the user sees **"Your bid is in!"**
9. **If any check fails:** the payment becomes **`failed`**, no bid is saved, and the user sees **"Payment not completed, try again"**.

---

## 3. Payment statuses

| Status | Meaning | Bid counted? |
|---|---|---|
| `awaiting_payment` | Created, user hasn't entered PIN yet | No |
| `paid` | Verified with Chapa, all checks passed | **Yes** |
| `failed` | Declined, wrong amount, or verification failed | No |
| `expired` | No confirmation within **~2 minutes** | No |

---

## 4. Anti-fake rules (must-have)

1. **Never trust the browser.** A "payment successful" page, URL or message from the user's side means nothing until **our server** verifies with Chapa.
2. **Always re-check with Chapa's Verify API**, even when a webhook arrives. Chapa's own docs recommend this.
3. **Check the webhook signature.** Chapa sends `x-chapa-signature`, an HMAC SHA256 of the event payload signed with our secret key. Reject anything that doesn't match.
4. **Compare the amount** with what *our database* says the bid costs. Someone could try to pay 1 ETB for a 75 ETB bid.
5. **Use each `tx_ref` once.** Chapa may send the same event more than once. The second time, do nothing (idempotent).
6. **The price comes from our database**, never from the page or the request.
7. **Chapa secret key stays on the server only.** Never put it in website code, the app or Git. Use separate test and live keys.
8. **Rate-limit** the bid and payment endpoints, and the login/OTP endpoints (SRS NFR-3).
9. **Log everything.** Every payment attempt, verification result and rejected event goes into an audit log (SRS FR-5 / NFR-6).
10. **HTTPS everywhere** (SRS NFR-3).

---

## 5. Edge cases

| Situation | What happens |
|---|---|
| User ignores the PIN prompt | After ~2 min the payment becomes `expired`. User sees "Payment not completed, try again" |
| Wrong PIN / payment declined | Chapa reports failure, so the payment is `failed` and no bid is saved |
| User closes the page after paying | Chapa's webhook still reaches our server, which verifies it and saves the bid. User sees it in **My Bids** |
| Same webhook arrives twice | The `tx_ref` is already `paid`, so it is ignored |
| Payment confirmed **after the auction closed** | **Decision needed:** stop accepting new payments ~2 min before the end so this never happens, or count the bid by the time payment *started* |
| Auction cancelled by the platform | Payments are non-refundable, **but the client must confirm** this is legal and written in the Terms |

---

## 6. What the user sees (design)

1. Bid amount box → payment method (Telebirr / CBE Birr / Awash Birr) → phone number → **total** (current bid price) → **Pay**
2. **"Waiting for payment… enter your PIN on your phone"** (spinner)
3. Then one of two results:
   - ✅ **"Your bid is in!"** plus the receipt reference
   - ❌ **"Payment not completed, try again"**
4. A small line next to the Pay button: **"Payments are non-refundable."**

**Design to-do:**
- [ ] Add **Awash Birr** as a third method
- [ ] Add the **"Payment not completed, try again"** state
- [ ] Add the **"Non-refundable"** note
- [ ] Show the Chapa **receipt reference** on the success screen and in My Bids

---

## 7. Data to store per payment
User · auction · bid amount · amount charged · currency · our `tx_ref` · Chapa reference · payment method · status · created time · verified time · full Chapa verify response (for disputes)

---

## 8. Open questions for the client
1. Approve **pay-per-bid instead of the wallet** (FR-6 / FR-7 change) **in writing**.
2. Confirm the **non-refundable** policy, including when the platform cancels an auction.
3. Cut-off: stop new payments **how many minutes** before an auction ends?
4. Chapa **fees** per transaction, and who pays them (the client per SRS Section 2.5).
5. Chapa **merchant account** approved, with live keys ready (SRS Section 2.5).

---

## 9. Chapa reference (from developer.chapa.co)
- **Initialize:** `POST https://api.chapa.co/v1/transaction/initialize` with the secret key as a Bearer token. Requires amount, currency, email, `tx_ref`, callback URL and return URL; phone is optional. Returns a `checkout_url`.
- **Verify:** `GET https://api.chapa.co/v1/transaction/verify/<tx_ref>` with the secret key.
- **Webhook events:** `charge.success`, `charge.failed/cancelled`, `charge.refunded`, `charge.reversed`.
- **Webhook signature:** `x-chapa-signature` = HMAC SHA256 of the payload with our secret key.
- **To confirm with Chapa:** whether the **direct-charge (phone PIN prompt without the Chapa checkout page)** option is available on the client's account, and whether `email` is mandatory (our users sign up with phone only).
