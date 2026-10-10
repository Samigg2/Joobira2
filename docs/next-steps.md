# Joobiraa — design status and recommendations for later

Last updated: October 2026. This file collects what is done, what is left, and the decisions and ideas we agreed on, so nothing is lost before the coding phase (Vue/Nuxt).

Related: [payment-flow.md](payment-flow.md), the pay-per-bid plan and the server checks against fake payments.

---

## 1. Where the design is

**The design is basically complete (~95%).** Public site and admin dashboard are both designed; only the final polish pass is left.

### Done (public site)
- Home (hero, live auctions preview, winners preview, how it works, community impact)
- Auctions page: Live / Upcoming / Closed tabs, search, sort, categories
- Winners page with name and masked phone (09******75)
- Auction detail: photo gallery, countdown, payment form, description and specs, bid history, winner box
- Login: phone → OTP → name (new accounts only), privacy checkbox
- My Bids, Account / profile (settings, payment history with receipts), Notifications
- Payment states: processing, success with receipt, failed with "Try again"
- Charity page (20%), FAQ, Terms, Privacy, offline page, 404
- 3 languages (Oromo default, Amharic, English), light and dark mode, mobile-first
- Installable app (PWA) with the eagle icon

---

## Remaining features — full checklist

### A. Design (still to draw)
- [x] Admin login
- [x] Admin overview (revenue, bids, live auctions, winners to call, charity total)
- [x] Admin auctions list (draft / upcoming / live / ended)
- [x] Admin create / edit auction (3 languages, category, bid price, times, specs, 3 photos)
- [x] Admin auction detail with full bid log
- [x] Admin winners list (Won → Paid → Called → ID checked → Picked up — pickup only for now)
- [x] Admin users (search, view bids and payments, block / unblock)
- [x] Admin payments and reports (Chapa references, revenue, charity amount)
- [x] Admin settings (contact, charity %, admin accounts) and owner / staff roles

Admin design lives in `admin/` (open `admin/login.html`; any password and any 6-digit code work in the demo). Staff cannot see revenue, payments, reports or admin accounts; live bid amounts are hidden from everyone until the auction ends.
- [ ] "1 day left" sample notification in the notifications list
- [ ] Final polish pass on every page (phone + desktop, 3 languages, light + dark)

### B. Coding phase (designed, needs the real app / server)
- [ ] Phone sign-in with real SMS OTP; new-account detection for the name step
- [ ] Auctions, bids and winners from the database (API)
- [ ] Lowest-unique-bid engine that picks the winner automatically when the timer ends (FR-9)
- [ ] Chapa payments with server verification (initialize, webhook, verify — see payment-flow.md)
- [ ] Payment failed / try again from the real Chapa result
- [ ] Receipts = Chapa reference, stored per payment
- [ ] Bid history / audit log from real bids (FR-5)
- [ ] Notifications sending: SMS + push (FR-8), including 1 day / 1 hour left, you won, notify me
- [ ] "Notify me" reminders saved on the server and sent when bidding opens
- [ ] Favourites, My Bids and Account data saved on the server
- [ ] Charity total calculated from the payments ledger, 20% of bid fees (FR-16)
- [ ] Product photo upload and CDN (Cloudflare R2, FR-14)
- [ ] Countdown timers synced to server time
- [ ] Service worker that never caches bids, payments or timers
- [ ] Self-hosted fonts and icons
- [ ] Real Terms and Privacy pages in 3 languages

### C. Later (grow when needed)
- [ ] In-app winner ID upload and claim screen (when many winners a week or delivery outside Addis)
- [ ] Delivery option and tracking for winners
- [ ] Awash Birr or other payment methods (if the client wants)
- [ ] Wallet / prepaid credits (only if the client still wants it; currently replaced by pay-per-bid)
- [ ] Play Store listing through a TWA (check Google's real-money contest policy first)
- [ ] Telegram Mini App from the same web code
- [ ] Native app (only if the business grows big and needs it)

---

## 2. What is left in the design

### 2.1 Admin dashboard (required — SRS FR-10)
Desktop-first, still usable on a phone. Mostly tables and forms.

| Screen | What it needs |
|---|---|
| Admin login | Separate from user login; email/phone + password + OTP |
| Overview | Revenue today, bids today, live auctions, winners to call, charity total (20%) |
| Auctions list | Status filter (draft / upcoming / live / ended), search, create button |
| Create / edit auction | Name in 3 languages, category, bid price, start and end time, description and specs, 3 photos (FR-14) |
| Auction detail | Full bid log (FR-5), the winner, number of bidders, revenue |
| Winners | Status per winner: Won → Paid → Called → ID checked → Delivered, plus notes and the phone to call |
| Users | Search by phone or name, see their bids and payments, block / unblock |
| Payments and reports | Every payment with Chapa reference and status; daily / monthly revenue; charity amount |

### 2.2 Final polish pass (small)
Go through every page together on phone and desktop, in all 3 languages and both themes, and fix anything that does not match before handing over to coding.

---

## 3. Before launch (not design work)
- [ ] Real product photos (the current ones are placeholders)
- [ ] Real Joobiraa logo; the eagle icon is a placeholder that matches the colours
- [ ] Final Terms and Privacy text from a lawyer, in Oromo, Amharic and English (current text is a sample, English only)
- [ ] **Client's written change request: pay-per-bid instead of the wallet** (changes SRS FR-6 / FR-7)
- [ ] Client agreement that winner ID checks are manual in Phase 1 (FR-17)
- [ ] Self-host the icon font and the fonts (the CDN was slow in testing, about 6 seconds)
- [ ] Official Telebirr and CBE Birr logo files from Chapa or the banks (current ones come from Wikipedia and the App Store)

---

## 4. Decisions we made (and why)

### PWA, not a Play Store app (for now)
- Small download, no store review, updates instantly, one codebase.
- **The Play Store may treat paid bidding for prizes as "real-money contests"**, which need Google's approval and may not be allowed in Ethiopia. A PWA does not need Google's permission.
- **Later, if a store listing is wanted:** wrap the same site as a **TWA** (Trusted Web Activity) with Bubblewrap or PWABuilder. It needs `/.well-known/assetlinks.json` on the site and a $25 Google Play account, and it still goes through Play review (check the policy first).
- **Native app:** only if the business grows big and needs things the browser can't do.
- **Worth trying:** a **Telegram Mini App** from the same web code. Telegram is very popular in Ethiopia.

### Pay per bid, no wallet
Each bid is paid through Chapa at the auction's bid price; nothing is stored in a wallet. Easier to build and to protect. Full plan in [payment-flow.md](payment-flow.md).

### Winner claim: manual first, grow later
1. The winner pays the winning amount in the app.
2. The team sees them in the admin Winners list and calls within 24 hours.
3. At pickup the winner shows a national / Kebele ID. **The name must match the name typed at sign-up** and the phone must match the account.
4. Hand over the item; with permission, take a photo for the Winners page.
5. No payment or answer within 7 days → the item goes to the next lowest unique bid (already in the Terms).

**Build the in-app ID upload later**, when there are many winners a week or delivery starts outside Addis Ababa.

### Colours
Navy + gold + red (red only for urgency: Live badge, timers, errors). No green, orange, purple or blue in the UI; payment brands show their colours only in their logos.

---

## 5. Notifications — how they should be sent (coding phase, SRS FR-8)
The design shows sample messages only. The server sends the real ones.

| Event | SMS | Push / in-app |
|---|---|---|
| You won! | ✅ | ✅ |
| Item payment received, team will call | ✅ | ✅ |
| Upcoming auction you asked about is now open ("Notify me") | ✅ | ✅ |
| Auction you bid on: 1 day left | — | ✅ |
| Auction you bid on: 1 hour left | optional | ✅ |
| Bid placed + receipt | — (Chapa sends one) | ✅ |
| Auction ended, you didn't win | — | ✅ |

- **SMS** reaches everyone but costs money per message: keep it for important events.
- **Push** is free but only works if the app is installed and notifications are allowed (iPhone: installed app only).

---

## 6. Demo-only behaviour to replace when coding
These exist only so the prototype can be clicked through. Do not copy them into the real app.

| Prototype | Real app |
|---|---|
| Any 6-digit OTP signs you in | Server sends and checks the SMS code |
| Names remembered per phone in the browser | Server says whether the account is new |
| Phone number ending in **00** makes payment fail | Real result from Chapa, verified on the server |
| Receipt numbers are random | Chapa reference / our tx_ref |
| Bids, favourites, payments, notifications in localStorage | Database via the API |
| Bid history is generated | Real bid log from the database |
| Charity total and support list are fixed numbers | Calculated from the payments ledger (20% of bid fees) |
| Auction numbers 01, 02… from list order | Supplied by the API |

---

## 7. Coding-phase notes
- The service worker must **never cache API responses** (bids, payments, timers).
- Only show "payment success" after the **server has verified the payment with Chapa** (see payment-flow.md).
- Countdown timers must use **server time**, not the phone's clock.
- Keep images small (WebP, lazy-loaded); most users are on slow mobile data.
- Keep the 3-language dictionary structure (om / am / en) and Oromo as the default.
