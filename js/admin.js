// =========================================================
// Joobiraa admin — chrome (sidebar + top bar), roles, helpers.
// Loaded after script.js; reuses t, L, fmtETB, store, toast, openModal...
// =========================================================

const ROOT = '../';
const img = src => ROOT + src;

Object.assign(dict.om, {
    a_nav_overview: 'Waliigala',
    a_st_ready: "Fudhachuuf qophaa'e", a_schedule_pickup: 'Guyyaa fudhannaa qabadhu', a_mark_picked: 'Fudhateera jedhi', a_pickup: 'Fudhannaa',
    a_pickup_at: "Guyyaa fi sa'aa", a_handed_by: 'Kan kenne', a_id_checked_box: "Eenyummaa (ID) mo'ataa mirkaneesseera", a_not_scheduled: 'Hin qabamne',
    a_id_required: 'Dura ID mirkaneessi', a_scheduled_f: d => `Qabame: ${d}`, a_id_ok: "ID mirkanaa'e",
    a_bars: 'Sarara', a_line: 'Toora', a_by_category: 'Caalbaasii ramaddiin', a_success_rate: "Kaffaltii milkaa'e", a_busy_hours: "Sa'aatii caalbaasiin baay'atu",
    a_activity: 'Sochii dhiyoo', a_peak: h => `Baay'ina: ${h}`, a_ago_m: n => `daqiiqaa ${n} dura`, a_ago_h: n => `sa'aatii ${n} dura`, a_ago_d: n => `guyyaa ${n} dura`,
    act_bid: (p, n) => `${p} ${n} irratti dorgome`, act_item: (w, n) => `${w} ${n} kaffale`, act_user: n => `${n} galmaa'e`,
    act_failed: (p, n) => `Kaffaltiin hin milkoofne · ${p} · ${n}`, act_won: (w, n) => `${w} ${n} mo'ate`, a_nav_users: 'Fayyadamtoota', a_nav_payments: 'Kaffaltiiwwan', a_nav_reports: 'Gabaasa',
    a_view_site: 'Marsariitii ilaali', a_role_owner: 'Abbaa qabeenyaa', a_role_staff: 'Hojjetaa', a_role_demo: 'Gahee (fakkeenya)',
    a_owner_only: 'Abbaa qabeenyaa qofa', a_no_access: 'Fuula kana abbaan qabeenyaa qofatu arga.',
    a_login_title: 'Seensa bulchiinsaa', a_login_sub: 'Hojjettoota Joobiraa qofaaf', a_email: 'Imeelii ykn bilbila', a_password: 'Jecha icciitii',
    a_otp_sub: 'Koodii bilbila keetti ergame galchi', a_forgot: 'Jecha icciitii dagatte?', a_remember: 'Meeshaa kana guyyaa 30 yaadadhu', a_forgot_toast: "Jecha icciitii haaromsuuf abbaa qabeenyaa qunnami", a_login_head: "Caalbaasii, mo'attootaa fi kaffaltii iddoo tokkotti bulchi", a_feat1: 'Caalbaasii uumi fi hordofi', a_feat2: "Mo'attoota bilbiliitii mirkaneessi", a_feat3: 'Kaffaltii fi gabaasa ilaali', a_secure_note: "Seensi kun jecha icciitii fi koodii SMS'n eegama", a_code_sent: p => `Koodiin lakk. ${p} tti ergameera`, a_err_login: 'Imeelii fi jecha icciitii galchi',
    a_revenue_today: "Galii har'aa", a_bids_today: "Caalbaasii har'aa", a_live: 'Caalbaasii amma jiru', a_new_users: 'Fayyadamtoota haaraa',
    a_to_call: 'Kan bilbilamu', a_charity: 'Deeggarsa hawaasaa', a_vs_yesterday: 'kaleessa irra', a_revenue_chart: 'Galii guyyaa (ETB)', a_bids_chart: 'Caalbaasii guyyaa',
    a_7d: 'Guyyaa 7', a_30d: 'Guyyaa 30', a_90d: 'Guyyaa 90', a_waiting_call: "Mo'attoota bilbila eegan", a_nothing: 'Homtuu hin jiru',
    a_new_auction: 'Caalbaasii haaraa', a_draft: 'Qophii', a_all: 'Hunda', a_col_cat: 'Ramaddii', a_col_price: 'Gatii caalbaasii',
    a_col_start: 'Jalqaba', a_col_end: 'Xumura', a_col_status: 'Haala', a_edit: 'Gulaali', a_search: 'Barbaadi...',
    a_edit_title: 'Caalbaasii gulaali', a_basic: "Odeeffannoo bu'uuraa", a_name: 'Maqaa meeshaa', a_schedule: 'Yeroo',
    a_photos: 'Suuraawwan (3)', a_photo_hint: "Suuraan jalqabaa kaardii irratti mul'ata", a_upload: "Suuraa fe'i", a_add_row: 'Sarara dabali',
    a_spec_name: 'Amala', a_spec_value: 'Gatii', a_preview: "Akka mul'atu", a_save_draft: "Qophiin olkaa'i", a_publish: 'Maxxansi',
    a_saved: "Olkaa'ameera", a_published: 'Maxxanfameera', a_lang_missing: 'Maqaa afaan hundaan guuti', a_err_price: 'Gatii sirrii galchi',
    a_revenue: 'Galii', a_bid_log: 'Galmee caalbaasii', a_col_time: 'Yeroo', a_end_now: 'Amma xumuri', a_cancel: 'Caalbaasii haqi',
    a_cancel_reason: 'Sababa', a_cancel_note: "Caalbaasiin yoo haqame, kaffaltiin hundi ni deebi'a.", a_confirm: 'Mirkaneessi', a_close: 'Cufi',
    a_cancelled: 'Haqameera', a_ended_now: 'Xumurameera', a_live_hidden: "Gatiiwwan dorgommii yeroo caalbaasiin xumuramu mul'atu.",
    a_st_won: "Mo'ate", a_st_called: 'Bilbilame', a_st_id: "Eenyummaan mirkanaa'e", a_st_picked: 'Fudhateera', a_notes: 'Yaadannoo',
    a_call: 'Bilbili', a_unpaid: 'Hin kaffalamne', a_days_left: n => `Kaffaluuf guyyaa ${n} hafe`, a_mark: s => `→ ${s}`, a_done: 'Xumurame',
    a_joined: "Kan galmaa'e", a_total_paid: 'Kan kaffale', a_active: 'Hojii irra', a_blocked: 'Dhorkame', a_block: 'Dhorki', a_unblock: 'Dhorkaa kaasi',
    a_type: 'Gosa', a_type_bid: 'Caalbaasii', a_st_success: "Milkaa'e", a_st_failed: 'Kufe', a_st_pending: 'Eegaa jira', a_export: 'CSV baasi',
    a_daily: 'Guyyaan', a_weekly: 'Torbaniin', a_monthly: "Ji'aan", a_per_auction: 'Caalbaasii tokkoon', a_charity_month: "Deeggarsa hawaasaa (ji'aan)",
    a_period: 'Yeroo', a_show_table: 'Gabatee', a_show_chart: 'Chaartii', a_admins: 'Bulchitoota', a_add_admin: 'Bulchaa dabali', a_role: 'Gahee',
    a_charity_pct: 'Harka deeggarsa hawaasaa (%)', a_save: "Olkaa'i", a_general: 'Waliigalaa', a_last_login: 'Seensa dhumaa',
    a_staff_note: 'Hojjettoonni kaffaltii, gabaasa fi bulchitoota hin argan.', a_users_count: n => `Fayyadamtoota ${n}`, a_bids_n: n => `caalbaasii ${n}`
});
Object.assign(dict.am, {
    a_nav_overview: 'አጠቃላይ',
    a_st_ready: 'ለመረከብ ዝግጁ', a_schedule_pickup: 'የመረከቢያ ቀን ያስይዙ', a_mark_picked: 'እንደተረከበ ምልክት አድርግ', a_pickup: 'መረከብ',
    a_pickup_at: 'ቀንና ሰዓት', a_handed_by: 'ያስረከበው', a_id_checked_box: 'የአሸናፊውን መታወቂያ አረጋግጫለሁ', a_not_scheduled: 'አልተያዘም',
    a_id_required: 'መጀመሪያ መታወቂያውን ያረጋግጡ', a_scheduled_f: d => `ተይዟል፡ ${d}`, a_id_ok: 'መታወቂያ ተረጋግጧል',
    a_bars: 'አምድ', a_line: 'መስመር', a_by_category: 'ጨረታዎች በምድብ', a_success_rate: 'የተሳካ ክፍያ', a_busy_hours: 'ጨረታ የሚበዛበት ሰዓት',
    a_activity: 'የቅርብ ጊዜ እንቅስቃሴ', a_peak: h => `ከፍተኛ፡ ${h}`, a_ago_m: n => `ከ${n} ደቂቃ በፊት`, a_ago_h: n => `ከ${n} ሰዓት በፊት`, a_ago_d: n => `ከ${n} ቀን በፊት`,
    act_bid: (p, n) => `${p} በ${n} ላይ ተጫርቷል`, act_item: (w, n) => `${w} ለ${n} ከፍሏል`, act_user: n => `${n} ተመዝግቧል`,
    act_failed: (p, n) => `ክፍያ አልተሳካም · ${p} · ${n}`, act_won: (w, n) => `${w} ${n} አሸንፏል`, a_nav_users: 'ተጠቃሚዎች', a_nav_payments: 'ክፍያዎች', a_nav_reports: 'ሪፖርቶች',
    a_view_site: 'ድረ-ገጹን ይመልከቱ', a_role_owner: 'ባለቤት', a_role_staff: 'ሰራተኛ', a_role_demo: 'ሚና (ናሙና)',
    a_owner_only: 'ለባለቤት ብቻ', a_no_access: 'ይህን ገጽ ባለቤቱ ብቻ ነው የሚያየው።',
    a_login_title: 'የአስተዳዳሪ መግቢያ', a_login_sub: 'ለJoobiraa ሰራተኞች ብቻ', a_email: 'ኢሜይል ወይም ስልክ', a_password: 'የይለፍ ቃል',
    a_otp_sub: 'ወደ ስልክዎ የተላከውን ኮድ ያስገቡ', a_forgot: 'የይለፍ ቃል ረሱ?', a_remember: 'ይህን መሳሪያ ለ30 ቀን አስታውስ', a_forgot_toast: 'የይለፍ ቃልዎን ለማደስ ባለቤቱን ያነጋግሩ', a_login_head: 'ጨረታዎችን፣ አሸናፊዎችንና ክፍያዎችን በአንድ ቦታ ያስተዳድሩ', a_feat1: 'ጨረታ ይፍጠሩና ይከታተሉ', a_feat2: 'አሸናፊዎችን ይደውሉና ያረጋግጡ', a_feat3: 'ክፍያዎችንና ሪፖርቶችን ይመልከቱ', a_secure_note: 'ይህ መግቢያ በይለፍ ቃልና በኤስኤምኤስ ኮድ የተጠበቀ ነው', a_code_sent: p => `ኮዱ ወደ ${p} ተልኳል`, a_err_login: 'ኢሜይልና የይለፍ ቃል ያስገቡ',
    a_revenue_today: 'የዛሬ ገቢ', a_bids_today: 'የዛሬ ጨረታዎች', a_live: 'ቀጥታ ጨረታዎች', a_new_users: 'አዲስ ተጠቃሚዎች',
    a_to_call: 'የሚደወልላቸው', a_charity: 'የማኅበረሰብ ድጋፍ', a_vs_yesterday: 'ከትናንት', a_revenue_chart: 'የዕለት ገቢ (ብር)', a_bids_chart: 'የዕለት ጨረታዎች',
    a_7d: '7 ቀን', a_30d: '30 ቀን', a_90d: '90 ቀን', a_waiting_call: 'ጥሪ የሚጠብቁ አሸናፊዎች', a_nothing: 'ምንም የለም',
    a_new_auction: 'አዲስ ጨረታ', a_draft: 'ረቂቅ', a_all: 'ሁሉም', a_col_cat: 'ምድብ', a_col_price: 'የጨረታ ዋጋ',
    a_col_start: 'መጀመሪያ', a_col_end: 'መጨረሻ', a_col_status: 'ሁኔታ', a_edit: 'አስተካክል', a_search: 'ይፈልጉ...',
    a_edit_title: 'ጨረታ አስተካክል', a_basic: 'መሰረታዊ መረጃ', a_name: 'የእቃው ስም', a_schedule: 'ጊዜ',
    a_photos: 'ፎቶዎች (3)', a_photo_hint: 'የመጀመሪያው ፎቶ በካርዱ ላይ ይታያል', a_upload: 'ፎቶ ይጫኑ', a_add_row: 'ረድፍ ጨምር',
    a_spec_name: 'መለያ', a_spec_value: 'እሴት', a_preview: 'ቅድመ እይታ', a_save_draft: 'እንደ ረቂቅ አስቀምጥ', a_publish: 'አትም',
    a_saved: 'ተቀምጧል', a_published: 'ታትሟል', a_lang_missing: 'ስሙን በሁሉም ቋንቋዎች ይሙሉ', a_err_price: 'ትክክለኛ ዋጋ ያስገቡ',
    a_revenue: 'ገቢ', a_bid_log: 'የጨረታ መዝገብ', a_col_time: 'ሰዓት', a_end_now: 'አሁን አጠናቅቅ', a_cancel: 'ጨረታውን ሰርዝ',
    a_cancel_reason: 'ምክንያት', a_cancel_note: 'ጨረታው ከተሰረዘ ሁሉም ክፍያዎች ተመላሽ ይደረጋሉ።', a_confirm: 'አረጋግጥ', a_close: 'ዝጋ',
    a_cancelled: 'ተሰርዟል', a_ended_now: 'ተጠናቋል', a_live_hidden: 'የጨረታ ዋጋዎች ጨረታው ሲያልቅ ይታያሉ።',
    a_st_won: 'አሸነፈ', a_st_called: 'ተደውሏል', a_st_id: 'መታወቂያ ተረጋግጧል', a_st_picked: 'ተረክቧል', a_notes: 'ማስታወሻ',
    a_call: 'ደውል', a_unpaid: 'አልተከፈለም', a_days_left: n => `ለመክፈል ${n} ቀን ቀርቷል`, a_mark: s => `→ ${s}`, a_done: 'ተጠናቋል',
    a_joined: 'የተመዘገበው', a_total_paid: 'የከፈለው', a_active: 'ንቁ', a_blocked: 'ታግዷል', a_block: 'አግድ', a_unblock: 'እገዳ አንሳ',
    a_type: 'ዓይነት', a_type_bid: 'ጨረታ', a_st_success: 'ተሳክቷል', a_st_failed: 'አልተሳካም', a_st_pending: 'በመጠባበቅ ላይ', a_export: 'CSV አውርድ',
    a_daily: 'በቀን', a_weekly: 'በሳምንት', a_monthly: 'በወር', a_per_auction: 'በጨረታ', a_charity_month: 'የማኅበረሰብ ድጋፍ (በወር)',
    a_period: 'ጊዜ', a_show_table: 'ሰንጠረዥ', a_show_chart: 'ቻርት', a_admins: 'አስተዳዳሪዎች', a_add_admin: 'አስተዳዳሪ ጨምር', a_role: 'ሚና',
    a_charity_pct: 'የማኅበረሰብ ድጋፍ መቶኛ (%)', a_save: 'አስቀምጥ', a_general: 'አጠቃላይ', a_last_login: 'የመጨረሻ መግቢያ',
    a_staff_note: 'ሰራተኞች ክፍያዎችን፣ ሪፖርቶችንና አስተዳዳሪዎችን አያዩም።', a_users_count: n => `${n} ተጠቃሚዎች`, a_bids_n: n => `${n} ጨረታዎች`
});
Object.assign(dict.en, {
    a_nav_overview: 'Overview',
    a_st_ready: 'Ready for pickup', a_schedule_pickup: 'Schedule pickup', a_mark_picked: 'Mark picked up', a_pickup: 'Pickup',
    a_pickup_at: 'Date and time', a_handed_by: 'Handed over by', a_id_checked_box: "I checked the winner's ID", a_not_scheduled: 'Not scheduled',
    a_id_required: 'Check the ID first', a_scheduled_f: d => `Scheduled: ${d}`, a_id_ok: 'ID checked',
    a_bars: 'Bars', a_line: 'Line', a_by_category: 'Bids by category', a_success_rate: 'Payment success', a_busy_hours: 'Busiest hours',
    a_activity: 'Recent activity', a_peak: h => `Peak: ${h}`, a_ago_m: n => `${n} min ago`, a_ago_h: n => `${n} h ago`, a_ago_d: n => `${n} d ago`,
    act_bid: (p, n) => `${p} bid on ${n}`, act_item: (w, n) => `${w} paid for ${n}`, act_user: n => `${n} joined`,
    act_failed: (p, n) => `Payment failed · ${p} · ${n}`, act_won: (w, n) => `${w} won ${n}`, a_nav_users: 'Users', a_nav_payments: 'Payments', a_nav_reports: 'Reports',
    a_view_site: 'View site', a_role_owner: 'Owner', a_role_staff: 'Staff', a_role_demo: 'Role (demo)',
    a_owner_only: 'Owner only', a_no_access: 'Only the owner can see this page.',
    a_login_title: 'Admin sign in', a_login_sub: 'For Joobiraa staff only', a_email: 'Email or phone', a_password: 'Password',
    a_otp_sub: 'Enter the code sent to your phone', a_forgot: 'Forgot password?', a_remember: 'Remember this device for 30 days', a_forgot_toast: 'Ask the owner to reset your password', a_login_head: 'Manage auctions, winners and payments in one place', a_feat1: 'Create and track auctions', a_feat2: 'Call and verify winners', a_feat3: 'See payments and reports', a_secure_note: 'Protected by password and SMS code', a_code_sent: p => `Code sent to ${p}`, a_err_login: 'Enter your email and password',
    a_revenue_today: 'Revenue today', a_bids_today: 'Bids today', a_live: 'Live auctions', a_new_users: 'New users',
    a_to_call: 'Winners to call', a_charity: 'Charity total', a_vs_yesterday: 'vs yesterday', a_revenue_chart: 'Daily revenue (ETB)', a_bids_chart: 'Daily bids',
    a_7d: '7 days', a_30d: '30 days', a_90d: '90 days', a_waiting_call: 'Winners waiting for a call', a_nothing: 'Nothing here',
    a_new_auction: 'New auction', a_draft: 'Draft', a_all: 'All', a_col_cat: 'Category', a_col_price: 'Bid price',
    a_col_start: 'Start', a_col_end: 'End', a_col_status: 'Status', a_edit: 'Edit', a_search: 'Search...',
    a_edit_title: 'Edit auction', a_basic: 'Basic info', a_name: 'Item name', a_schedule: 'Schedule',
    a_photos: 'Photos (3)', a_photo_hint: 'The first photo is shown on the card', a_upload: 'Upload photo', a_add_row: 'Add row',
    a_spec_name: 'Spec', a_spec_value: 'Value', a_preview: 'Preview', a_save_draft: 'Save draft', a_publish: 'Publish',
    a_saved: 'Saved', a_published: 'Published', a_lang_missing: 'Fill in the name in all 3 languages', a_err_price: 'Enter a valid price',
    a_revenue: 'Revenue', a_bid_log: 'Bid log', a_col_time: 'Time', a_end_now: 'End now', a_cancel: 'Cancel auction',
    a_cancel_reason: 'Reason', a_cancel_note: 'If an auction is cancelled, all bid payments are refunded.', a_confirm: 'Confirm', a_close: 'Close',
    a_cancelled: 'Cancelled', a_ended_now: 'Ended', a_live_hidden: 'Bid amounts are shown when the auction ends.',
    a_st_won: 'Won', a_st_called: 'Called', a_st_id: 'ID checked', a_st_picked: 'Picked up', a_notes: 'Notes',
    a_call: 'Call', a_unpaid: 'Not paid', a_days_left: n => `${n} days left to pay`, a_mark: s => `Mark: ${s}`, a_done: 'Done',
    a_joined: 'Joined', a_total_paid: 'Total paid', a_active: 'Active', a_blocked: 'Blocked', a_block: 'Block', a_unblock: 'Unblock',
    a_type: 'Type', a_type_bid: 'Bid', a_st_success: 'Success', a_st_failed: 'Failed', a_st_pending: 'Pending', a_export: 'Export CSV',
    a_daily: 'Daily', a_weekly: 'Weekly', a_monthly: 'Monthly', a_per_auction: 'By auction', a_charity_month: 'Charity per month',
    a_period: 'Period', a_show_table: 'Table', a_show_chart: 'Chart', a_admins: 'Admin accounts', a_add_admin: 'Add admin', a_role: 'Role',
    a_charity_pct: 'Charity share (%)', a_save: 'Save', a_general: 'General', a_last_login: 'Last login',
    a_staff_note: 'Staff cannot see payments, reports or admin accounts.', a_users_count: n => `${n} users`, a_bids_n: n => `${n} bids`
});

// ---------- admin session (demo) ----------
const admin = {
    user() { return store.json('jb_admin'); },
    signIn(name) { store.set('jb_admin', JSON.stringify({ name, role: admin.role() })); },
    signOut() { store.remove('jb_admin'); },
    role() { return store.get('jb_admin_role') || 'owner'; },
    setRole(r) { store.set('jb_admin_role', r); },
    isOwner() { return admin.role() === 'owner'; }
};

// Demo state that should survive a reload
const admState = {
    steps() { return { ...ADMIN_WINNER_STEPS, ...(store.json('jb_adm_steps') || {}) }; },
    setStep(id, s) { store.set('jb_adm_steps', JSON.stringify({ ...(store.json('jb_adm_steps') || {}), [id]: s })); },
    notes() { return { ...ADMIN_WINNER_NOTES, ...(store.json('jb_adm_notes') || {}) }; },
    pickup(id) { return { ...(ADMIN_PICKUPS[id] || {}), ...((store.json('jb_adm_pickups') || {})[id] || {}) }; },
    setPickup(id, data) { const all = store.json('jb_adm_pickups') || {}; all[id] = { ...(all[id] || {}), ...data }; store.set('jb_adm_pickups', JSON.stringify(all)); },
    setNote(id, n) { store.set('jb_adm_notes', JSON.stringify({ ...(store.json('jb_adm_notes') || {}), [id]: n })); },
    blocked(u) { const b = store.json('jb_adm_blocked'); return b ? b.includes(u.id) : u.blocked; },
    setBlocked(u, on) {
        const list = store.json('jb_adm_blocked') || ADMIN_USERS.filter(x => x.blocked).map(x => x.id);
        store.set('jb_adm_blocked', JSON.stringify(on ? [...new Set([...list, u.id])] : list.filter(id => id !== u.id)));
    }
};

// Auctions created in the demo editor are kept on this device and merged in
(store.json('jb_adm_auctions') || []).forEach(a => { if (!getAuction(a.id)) AUCTIONS.push(a); });

const STEP_KEYS = ['a_unpaid', 'a_st_ready', 'a_st_picked'];
const userById = id => ADMIN_USERS.find(u => u.id === id);
// Paid winners without a pickup time yet are the ones to call
const winnersToCall = () => AUCTIONS.filter(a => a.status === 'ended' && admState.steps()[a.id] === 1 && !admState.pickup(a.id).scheduled);
const statusLabel = s => t({ draft: 'a_draft', upcoming: 'upcoming', live: 'live', ended: 'ended', cancelled: 'a_cancelled' }[s]);
const pill = (cls, text) => `<span class="pill ${cls}">${text}</span>`;
const fmtDay = ms => { try { return new Date(ms).toLocaleDateString(LANGS.find(l => l.id === currentLang).locale, { month: 'short', day: 'numeric' }); } catch (e) { return new Date(ms).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' }); } };
const num = v => Math.round(v).toLocaleString('en');

// ---------- chrome ----------
function renderAdminChrome() {
    const page = document.body.dataset.page;
    if (page === 'login') { document.body.insertAdjacentHTML('beforeend', '<div class="toast" role="status" aria-live="polite"></div>'); return; }
    if (!admin.user()) { location.replace('login.html'); return; }
    const owner = admin.isOwner();
    const toCall = winnersToCall().length;
    const link = (href, icon, key, id, ownerOnly) => (ownerOnly && !owner) ? '' :
        `<a href="${href}" class="${page === id ? 'active' : ''}"><i class="fa-solid ${icon}"></i><span data-i18n="${key}"></span>${id === 'winners' && toCall ? `<b class="nav-badge">${toCall}</b>` : ''}</a>`;
    const main = qs('#page');
    const wrap = document.createElement('div');
    wrap.className = 'adm';
    wrap.innerHTML = `
    <aside class="adm-side" id="admSide">
        <a href="index.html" class="adm-brand"><span class="brand">JOO<span>BIRAA</span></span><small>Admin</small></a>
        <nav class="adm-nav">
            ${link('index.html', 'fa-chart-line', 'a_nav_overview', 'overview')}
            ${link('auctions.html', 'fa-gavel', 'nav_auctions', 'auctions')}
            ${link('winners.html', 'fa-trophy', 'nav_winners', 'winners')}
            ${link('users.html', 'fa-users', 'a_nav_users', 'users')}
            ${link('payments.html', 'fa-receipt', 'a_nav_payments', 'payments', true)}
            ${link('reports.html', 'fa-chart-column', 'a_nav_reports', 'reports', true)}
            ${link('settings.html', 'fa-gear', 'acc_settings', 'settings')}
        </nav>
        <div class="adm-side-foot">
            <small data-i18n="a_role_demo"></small>
            <div class="segmented dark">
                <button type="button" class="${owner ? 'active' : ''}" data-role="owner" data-i18n="a_role_owner"></button>
                <button type="button" class="${owner ? '' : 'active'}" data-role="staff" data-i18n="a_role_staff"></button>
            </div>
            <a href="${ROOT}index.html" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> <span data-i18n="a_view_site"></span></a>
            <a href="#" data-adm-logout><i class="fa-solid fa-right-from-bracket"></i> <span data-i18n="signout"></span></a>
        </div>
    </aside>
    <div class="adm-scrim" data-adm-menu></div>
    <div class="adm-body">
        <header class="adm-top">
            <button type="button" class="icon-btn adm-menu-btn" data-adm-menu aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
            <h1 class="adm-title">${document.body.dataset.title ? `<span data-i18n="${document.body.dataset.title}"></span>` : ''}</h1>
            <div class="header-actions">
                <div class="lang-menu">
                    <button class="lang-pill" type="button" aria-haspopup="listbox" aria-label="Language">
                        <i class="fa-solid fa-globe"></i><span class="code">OM</span><i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <ul class="lang-list" role="listbox">
                        ${LANGS.map(l => `<li><button type="button" data-lang="${l.id}" title="${l.name}">${l.code}</button></li>`).join('')}
                    </ul>
                </div>
                <button class="icon-btn" type="button" data-action="theme" aria-label="Toggle dark mode"><i data-theme-icon class="fa-solid fa-moon"></i></button>
                <span class="adm-user"><span class="adm-avatar">${admin.user().name[0]}</span><span class="who"><strong>${admin.user().name}</strong><small data-i18n="${owner ? 'a_role_owner' : 'a_role_staff'}"></small></span></span>
            </div>
        </header>
        <main class="adm-main"></main>
    </div>
    <div class="toast" role="status" aria-live="polite"></div>`;
    document.body.prepend(wrap);
    qs('.adm-main').appendChild(main);
    setTheme(currentTheme());

    // Owner-only pages: staff see a short message instead
    if (document.body.dataset.ownerOnly !== undefined && !owner) {
        main.innerHTML = '<div class="empty-state"><i class="fa-solid fa-lock"></i><span data-i18n="a_no_access"></span></div>';
        window.initPage = undefined;
    }
}

document.addEventListener('click', e => {
    if (e.target.closest('[data-adm-menu]')) { document.body.classList.toggle('adm-menu-open'); return; }
    const role = e.target.closest('[data-role]');
    if (role) { admin.setRole(role.dataset.role); location.reload(); return; }
    if (e.target.closest('[data-adm-logout]')) { e.preventDefault(); admin.signOut(); location.href = 'login.html'; }
});

// ---------- table helpers ----------
// cols: [{ key, label, cell(row), cls, sort(row) }]; responsive: cells carry data-label for the phone card view
function tableHTML(cols, rows, { empty = t('a_nothing'), sortKey, sortDir = 1, rowAttr } = {}) {
    if (!rows.length) return `<div class="empty-state"><i class="fa-regular fa-folder-open"></i>${empty}</div>`;
    return `
    <div class="tbl-wrap"><table class="tbl">
        <thead><tr>${cols.map(c => `<th class="${c.cls || ''}" ${c.sort ? `data-sort="${c.key}" aria-sort="${sortKey === c.key ? (sortDir > 0 ? 'ascending' : 'descending') : 'none'}"` : ''}>
            ${c.label}${c.sort ? ` <i class="fa-solid ${sortKey === c.key ? (sortDir > 0 ? 'fa-sort-up' : 'fa-sort-down') : 'fa-sort'}"></i>` : ''}</th>`).join('')}</tr></thead>
        <tbody>${rows.map(r => `<tr ${rowAttr ? rowAttr(r) : ''}>${cols.map(c => `<td class="${c.cls || ''}" data-label="${c.label}">${c.cell(r)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
}
function sortRows(rows, cols, key, dir) {
    const col = cols.find(c => c.key === key);
    if (!col || !col.sort) return rows;
    return rows.slice().sort((a, b) => { const x = col.sort(a), y = col.sort(b); return (x > y ? 1 : x < y ? -1 : 0) * dir; });
}
function pagerHTML(page, total, per) {
    const pages = Math.ceil(total / per);
    if (pages <= 1) return '';
    return `<div class="pager"><span>${page * per + 1}–${Math.min(total, (page + 1) * per)} / ${total}</span>
        <button type="button" class="icon-btn" data-page="${page - 1}" ${page === 0 ? 'disabled' : ''} aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
        <button type="button" class="icon-btn" data-page="${page + 1}" ${page >= pages - 1 ? 'disabled' : ''} aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button></div>`;
}
function downloadCSV(name, header, rows) {
    const esc = v => `"${String(v).replace(/"/g, '""')}"`;
    const csv = [header, ...rows].map(r => r.map(esc).join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }));
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

// ---------- bar chart (single series, inline SVG) ----------
// One gold hue (validated per theme), 4px rounded tops, hairline grid, max bar labelled, hover tooltip per bar.
function barChart(el, data, { value = d => d.value, label = d => d.label, fmt = num, tip = d => `${label(d)}: ${fmt(value(d))}` } = {}) {
    const W = Math.max(280, el.clientWidth), H = 220, pad = { t: 22, r: 8, b: 26, l: 44 };
    const max = Math.max(...data.map(value)) || 1;
    const step = niceStep(max / 3), top = Math.ceil(max / step) * step;
    const iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;
    const band = iw / data.length, bw = Math.min(24, Math.max(2, band - 2));
    const y = v => pad.t + ih - (v / top) * ih;
    const maxIdx = data.findIndex(d => value(d) === max);
    const every = Math.ceil(data.length / 7);
    let svg = `<svg width="${W}" height="${H}" role="img" aria-label="${el.dataset.label || ''}">`;
    for (let v = 0; v <= top; v += step) {
        svg += `<line x1="${pad.l}" x2="${W - pad.r}" y1="${y(v)}" y2="${y(v)}" class="grid"/><text x="${pad.l - 6}" y="${y(v) + 4}" class="axis" text-anchor="end">${compact(v)}</text>`;
    }
    data.forEach((d, i) => {
        const x = pad.l + i * band + (band - bw) / 2, v = value(d), h = Math.max(0, ih - (y(v) - pad.t)), r = Math.min(4, bw / 2, h);
        const yt = y(v);
        svg += `<g class="bar" data-tip="${tip(d)}">
            <rect x="${pad.l + i * band}" y="${pad.t}" width="${band}" height="${ih}" class="hit"/>
            <path d="M${x},${pad.t + ih} V${yt + r} Q${x},${yt} ${x + r},${yt} H${x + bw - r} Q${x + bw},${yt} ${x + bw},${yt + r} V${pad.t + ih} Z" class="mark"/></g>`;
        if (i % every === 0) svg += `<text x="${x + bw / 2}" y="${H - 8}" class="axis" text-anchor="middle">${label(d)}</text>`;
        if (i === maxIdx) svg += `<text x="${x + bw / 2}" y="${yt - 6}" class="max-label" text-anchor="middle">${compact(v)}</text>`;
    });
    el.innerHTML = svg + `</svg><div class="chart-tip" hidden></div>`;
    const tipEl = qs('.chart-tip', el);
    qsa('.bar', el).forEach(g => {
        g.addEventListener('pointerenter', () => {
            g.classList.add('on');
            tipEl.textContent = g.dataset.tip; tipEl.hidden = false;
            const r = qs('.mark', g).getBoundingClientRect(), box = el.getBoundingClientRect();
            tipEl.style.left = Math.min(box.width - tipEl.offsetWidth, Math.max(0, r.left - box.left + r.width / 2 - tipEl.offsetWidth / 2)) + 'px';
            tipEl.style.top = Math.max(0, r.top - box.top - 34) + 'px';
        });
        g.addEventListener('pointerleave', () => { g.classList.remove('on'); tipEl.hidden = true; });
    });
}
// Line chart (single series): 2px line, 10% area wash, end dot with surface ring, crosshair + tooltip
function lineChart(el, data, { value = d => d.value, label = d => d.label, tip = d => `${label(d)}: ${num(value(d))}` } = {}) {
    const W = Math.max(280, el.clientWidth), H = 220, pad = { t: 22, r: 12, b: 26, l: 44 };
    const max = Math.max(...data.map(value)) || 1;
    const step = niceStep(max / 3), top = Math.ceil(max / step) * step;
    const iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;
    const x = i => pad.l + (data.length === 1 ? iw / 2 : (i / (data.length - 1)) * iw);
    const y = v => pad.t + ih - (v / top) * ih;
    const pts = data.map((d, i) => [x(i), y(value(d))]);
    const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
    const every = Math.ceil(data.length / 7);
    const maxIdx = data.findIndex(d => value(d) === max);
    let svg = `<svg width="${W}" height="${H}" role="img" aria-label="${el.dataset.label || ''}">`;
    for (let v = 0; v <= top; v += step) svg += `<line x1="${pad.l}" x2="${W - pad.r}" y1="${y(v)}" y2="${y(v)}" class="grid"/><text x="${pad.l - 6}" y="${y(v) + 4}" class="axis" text-anchor="end">${compact(v)}</text>`;
    data.forEach((d, i) => { if (i % every === 0) svg += `<text x="${x(i)}" y="${H - 8}" class="axis" text-anchor="middle">${label(d)}</text>`; });
    svg += `<path d="${line} L${x(data.length - 1)},${pad.t + ih} L${x(0)},${pad.t + ih} Z" class="area"/><path d="${line}" class="line"/>`;
    svg += `<text x="${pts[maxIdx][0]}" y="${pts[maxIdx][1] - 10}" class="max-label" text-anchor="middle">${compact(max)}</text>`;
    const last = pts[pts.length - 1];
    svg += `<circle cx="${last[0]}" cy="${last[1]}" r="4" class="dot"/>`;
    svg += `<line class="cross" y1="${pad.t}" y2="${pad.t + ih}" x1="0" x2="0" visibility="hidden"/><circle class="dot" r="5" visibility="hidden" data-hover/>`;
    svg += `<rect x="${pad.l}" y="${pad.t}" width="${iw}" height="${ih}" class="hit" data-hit/>`;
    el.innerHTML = svg + `</svg><div class="chart-tip" hidden></div>`;
    const tipEl = qs('.chart-tip', el), cross = qs('.cross', el), hd = qs('[data-hover]', el), hit = qs('[data-hit]', el);
    hit.addEventListener('pointermove', e => {
        const r = hit.getBoundingClientRect();
        const i = Math.max(0, Math.min(data.length - 1, Math.round(((e.clientX - r.left) / r.width) * (data.length - 1))));
        const [px, py] = pts[i];
        cross.setAttribute('x1', px); cross.setAttribute('x2', px); cross.setAttribute('visibility', 'visible');
        hd.setAttribute('cx', px); hd.setAttribute('cy', py); hd.setAttribute('visibility', 'visible');
        tipEl.textContent = tip(data[i]); tipEl.hidden = false;
        tipEl.style.left = Math.min(W - tipEl.offsetWidth, Math.max(0, px - tipEl.offsetWidth / 2)) + 'px';
        tipEl.style.top = Math.max(0, py - 40) + 'px';
    });
    hit.addEventListener('pointerleave', () => { cross.setAttribute('visibility', 'hidden'); hd.setAttribute('visibility', 'hidden'); tipEl.hidden = true; });
}

// Horizontal bars as plain HTML (one hue; labels and values in text colours)
function hbarsHTML(items, fmt = num) {
    const max = Math.max(...items.map(i => i.value)) || 1;
    return `<ul class="hbars">${items.map(i => `
        <li><span class="hb-label">${i.label}</span><span class="hb-track"><span class="hb-bar" style="width:${Math.max(2, i.value / max * 100)}%"></span></span>
        <span class="hb-val">${fmt(i.value)}${i.sub ? ` <small>${i.sub}</small>` : ''}</span></li>`).join('')}</ul>`;
}

function timeAgo(ms) {
    const m = Math.max(1, Math.round((Date.now() - ms) / 60e3));
    return m < 60 ? t('a_ago_m')(m) : m < 1440 ? t('a_ago_h')(Math.round(m / 60)) : t('a_ago_d')(Math.round(m / 1440));
}

function niceStep(raw) {
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    return [1, 2, 2.5, 5, 10].map(m => m * p).find(s => s >= raw);
}
