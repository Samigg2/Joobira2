// =========================================================
// Joobiraa — shared UI: i18n, theme, header/footer, modals,
// favorites, session, payment. Page scripts build on this.
// =========================================================

const dict = {
    om: {
        time_format: (d, h, m, s) => `${d}g : ${h}s : ${m}d : ${s}s`, lbl_views: 'ilaalcha', lbl_bidders: 'dorgomtoota',
        nav_home: 'Mana', nav_auctions: 'Caalbaasii', nav_winners: "Mo'attoota", nav_mybids: 'Caalbaasii Koo',
        nav_faq: 'Gaaffiilee', nav_account: 'Herrega', nav_signin: 'Seeni', nav_contact: 'Nu Qunnamaa',
        footer_about: "Waa'ee Keenya", footer_terms: 'Seerota fi Haalawwan', footer_privacy: 'Imaammata Iccitii',
        footer_desc: "Joobiraa iddoo caalbaasii meeshaalee haaraa gatii xiqqaan itti mo'attaniidha.",
        footer_location: 'Finfinnee, Itoophiyaa',

        hero_title: "Gatii <em>Xiqqaan</em> Mo'adhaa", hero_desc: "Qarshii 1 irraa jalqabee meeshaalee haaraa mo'adhaa.",
        title_auctions: 'Caalbaasiiwwan Ammaa', subtitle_auctions: "Gatii xiqqaa fi adda ta'e dhiheessuun mo'adhaa!",
        title_faq: "Gaaffiilee Yeroo Baay'ee Gaafataman", subtitle_faq: "Odeeffannoo waa'ee Joobiraa fi kaffaltii asitti argattu",
        btn_bid: 'Gatii Dhiheessi', lbl_current_bid: 'Gatii Ammaa', lbl_bids: "Baay'ina Caalbaasii", currency: 'ETB',
        live: 'Amma', ended: 'Xumurame',
        bids_count: n => `caalbaasii ${n}`, results: n => `Caalbaasii ${n}`,
        search_placeholder: 'Caalbaasii barbaadi...',
        sort_ending: 'Dhiyootti xumuramu', sort_popular: 'Beekamoo', sort_price: 'Gatii xiqqaa',
        no_results: 'Caalbaasiin argame hin jiru',
        market_title: 'Amma kallattiin', view_all: 'Hunda ilaali', col_item: 'Meeshaa', lbl_ends_in: 'Kan xumuramu',
        stat_donated: 'Arjoomame (ETB)', min_bid_lbl: 'Gatii ka\'umsaa',

        title_winners: "Galaarii Mo'attootaa", desc_winners: "Namoota dhugaa, meeshaalee dhugaa, gatii mo'ate",
        title_impact: 'Dhiibbaa Hawaasaa', desc_impact: 'Kaffaltii tajaajilaa caalbaasii irraa 20% deeggarsa hawaasaaf oola',
        lbl_winner: "Mo'ataa", lbl_winning_bid: "Gatii Mo'ate", lbl_donated: 'Hanga ammaatti kan arjoomame (ETB)',
        lbl_target: 'Kaayyoo Kurmaanaa: 640,000 ETB',

        how_title: 'Akkamitti hojjata?',
        how_s1_t: 'Bilbilaan seeni', how_s1_d: 'Koodii yeroo tokkoo SMS dhaan siif ergamu galchi.',
        how_s2_t: "Gatii xiqqaa fi adda ta'e filadhu", how_s2_d: 'Caalbaasiin tokko gatii ammaa kaffalchiisa. Qarshii 1 irraa jalqabee hanga namni biraa hin filanne galchi. Telebirr ykn CBE Birr n kaffali.',
        how_s3_t: "Yeroon yommuu dhumu mo'adhu", how_s3_d: "Caalbaasiin yommuu xumuramu gatii xiqqaa fi adda ta'e mo'ata.",
        how_cta_signin: 'Bilbilaan seenii jalqabi', how_cta_browse: 'Caalbaasiiwwan ilaali', how_more: 'Gaaffiilee dabalataa',

        not_found: 'Caalbaasiin hin argamne', all_auctions: 'Caalbaasii hunda',
        lbl_description: 'Ibsa', lbl_specs: 'Amaloota', time_remaining: 'Yeroo hafe', ends_on: d => `kan xumuramu ${d}`,
        d_days: 'Guyyaa', d_hours: "Sa'a", d_mins: 'Daq', d_secs: 'Sek', min_bid: 'Gatii xiqqaa: ETB 1.00',
        sign_in_to_bid: 'Dorgomuuf seeni',
        bid_cta_out: p => `Caalbaasii dhiheessuuf seeni — caalbaasii tokkoof <strong>ETB ${p}</strong>.`,
        bid_cta_in: p => `Caalbaasiin tokko <strong>ETB ${p}</strong> kaffalchiisa.`,
        winner_banner: (n, b) => `${n} ETB ${b} n mo'ate`, winner_you: "Ati mo'atteetta!",
        fav_added: 'Jaallatamoo keessatti dabalame', fav_removed: 'Jaallatamoo keessaa haqame', lbl_fav: 'Jaallatamaa',

        spec_brand: 'Maqaa', spec_model: 'Moodela', spec_storage: 'Kuusaa', spec_ram: 'RAM', spec_display: 'Iskiriinii',
        spec_camera: 'Kaameraa', spec_battery: 'Baatirii', spec_condition: 'Haala', spec_warranty: 'Wabii',
        spec_motor: 'Mootora', spec_range: 'Fageenya', spec_speed: 'Saffisa olaanaa', spec_capacity: 'Dandeettii',
        spec_type: 'Gosa', spec_cpu: 'Piroseesara', cond_new: 'Haaraa (hin banamne)',

        pay_title_bid: 'Caalbaasii dhiheessi', pay_title_win: 'Meeshaa keetiif kaffali', pay_kind_bid: 'Caalbaasii', pay_kind_win: "Meeshaa mo'ate",
        lbl_bid_amount: 'Hanga caalbaasii keetii',
        bid_amount_hint: "Hanga xiqqaa fi adda ta'e mo'ata. Xiqqaate ETB 1.00, saantimni ni hayyamama.",
        pay_method: 'Mala kaffaltii', pay_phone_telebirr: 'Lakkoofsa bilbilaa Telebirr', pay_phone_cbe: 'Lakkoofsa bilbilaa CBE Birr',
        pay_telebirr_sub: 'Maallaqa moobaayilaa', pay_cbe_sub: 'Baankii Daldalaa',
        pay_bid_price: 'Gatii ammaa (caalbaasii tokkoof)', pay_winning_bid: "Gatii mo'ate", pay_total: 'Waliigala',
        pay_confirm: a => `ETB ${a} kaffali`, pay_hint: 'Lakkoofsa icciitii kee akka galchituuf bilbila kee irratti gaaffiin siif dhufa.',
        pay_processing: 'Kaffaltiin hojjatamaa jira...', pay_processing_d: 'Gaaffii bilbila kee irratti dhufe mirkaneessi',
        pay_success_bid: 'Caalbaasiin kee galeera!', pay_success_win: 'Kaffaltiin xumurameera!',
        pay_success_d: 'Nagaheen SMS dhaan siif ergameera.', pay_done: 'Tole',
        err_min_bid: 'Gatiin xiqqaan ETB 1.00 dha', err_phone: 'Lakkoofsa bilbilaa sirrii galchi (9XXXXXXXX)',

        login_title: "Seeni ykn galmaa'i", login_sub: 'Lakkoofsa bilbila keetiif koodii yeroo tokkoo ni ergina.',
        login_phone: 'Lakkoofsa bilbilaa', login_send: 'Koodii mirkaneessaa ergi',
        agree_policy: '<a href="#">Imaammata Iccitii</a> nan fudhadha.', err_agree: 'Maaloo imaammata iccitii fudhadhu',
        otp_title: 'Koodii galchi', otp_sub: p => `Koodii lakkoofsa 6 <strong>${p}</strong> tti ergame galchi`,
        otp_verify: 'Mirkaneessii seeni', otp_resend: "Koodii irra deebi'ii ergi", otp_resend_in: s => `Sekondii ${s} booda`,
        otp_change: 'Lakkoofsa jijjiiri', otp_err: 'Koodii lakkoofsa 6 guutuu galchi',
        back_home: "Gara fuula jalqabaatti deebi'i", signed_in: 'Seenteetta', signout: "Ba'i",
        signin_required: 'Caalbaasii dhiheessuuf dura seeni',

        mybids_title: 'Caalbaasii Koo', mybids_sub: "Gatii dhiheessite, kan mo'atte fi jaallatamoo",
        tab_active: 'Amma', tab_won: "Kan mo'adhe", tab_lost: 'Darban', tab_favs: 'Jaallatamoo',
        status_live: 'Amma', status_won: "Mo'atte", status_lost: "Hin mo'anne", status_paid: 'Kaffalameera',
        lbl_your_bids: 'Gatii kee', btn_pay_now: 'Amma kaffali', btn_view: 'Ilaali', btn_bid_again: "Irra deebi'ii dhiheessi",
        empty_active: 'Caalbaasii ammaa hin qabdu', empty_won: "Ammaaf hin mo'anne", empty_lost: 'Caalbaasii darbe hin jiru',
        empty_favs: 'Jaallatamaan hin jiru — ❤ tuqi', signin_needed: 'Caalbaasii kee ilaaluuf seeni',
        signin_needed_d: 'Lakkoofsa bilbilaatiin sekondii muraasatti seeni.', account_phone: 'Lakkoofsa bilbilaa',
        theme_dark: 'Haala dukkanaa', theme_light: 'Haala ifaa'
    },
    am: {
        time_format: (d, h, m, s) => `${d}ቀን : ${h}ሰ : ${m}ደ : ${s}ሴ`, lbl_views: 'ዕይታ', lbl_bidders: 'ተጫራቾች',
        nav_home: 'መነሻ', nav_auctions: 'ጨረታዎች', nav_winners: 'አሸናፊዎች', nav_mybids: 'የኔ ጨረታዎች',
        nav_faq: 'ጥያቄዎች', nav_account: 'መለያ', nav_signin: 'ይግቡ', nav_contact: 'ያግኙን',
        footer_about: 'ስለ እኛ', footer_terms: 'ደንብና ግዴታዎች', footer_privacy: 'የግላዊነት ፖሊሲ',
        footer_desc: 'Joobiraa (ጁቢራ) አዳዲስ እቃዎችን በርካሽ ዋጋ የሚያገኙበት የጨረታ መድረክ።',
        footer_location: 'አዲስ አበባ፣ ኢትዮጵያ',

        hero_title: 'በአነስተኛ ዋጋ <em>አሸንፉ</em>', hero_desc: 'ከ1 ብር ጀምሮ አዳዲስ እቃዎችን ያሸንፉ።',
        title_auctions: 'የቀረቡ ጨረታዎች', subtitle_auctions: 'ዝቅተኛ እና ልዩ ዋጋ በማቅረብ ያሸንፉ!',
        title_faq: 'ተደጋግመው የሚጠየቁ ጥያቄዎች', subtitle_faq: 'ስለ Joobiraa ጨረታ እና ክፍያ መረጃዎችን እዚህ ያገኛሉ',
        btn_bid: 'የጨረታ ዋጋ ያቅርቡ', lbl_current_bid: 'የአሁኑ ዋጋ', lbl_bids: 'የጨረታ ብዛት', currency: 'ብር',
        live: 'ቀጥታ', ended: 'ተጠናቋል',
        bids_count: n => `${n} ጨረታዎች`, results: n => `${n} ጨረታዎች`,
        search_placeholder: 'ጨረታ ይፈልጉ...',
        sort_ending: 'በቅርቡ የሚያልቁ', sort_popular: 'ተወዳጅ', sort_price: 'ዝቅተኛ ዋጋ',
        no_results: 'ምንም ጨረታ አልተገኘም',
        market_title: 'አሁን ቀጥታ', view_all: 'ሁሉንም ይመልከቱ', col_item: 'እቃ', lbl_ends_in: 'የሚያልቀው በ',
        stat_donated: 'የተለገሰ (ብር)', min_bid_lbl: 'መነሻ ዋጋ',

        title_winners: 'የአሸናፊዎች ማዕከል', desc_winners: 'እውነተኛ አሸናፊዎች እና የጨረታ ውጤቶች',
        title_impact: 'የማህበረሰብ ተፅእኖ', desc_impact: 'ከእያንዳንዱ ጨረታ የአገልግሎት ክፍያ 20% ለማህበረሰቡ ድጋፍ ይውላል',
        lbl_winner: 'አሸናፊ', lbl_winning_bid: 'ያሸነፈበት ዋጋ', lbl_donated: 'እስከ አሁን የተለገሰው (ብር)',
        lbl_target: 'የሩብ ዓመቱ ግብ: 640,000 ብር',

        how_title: 'እንዴት ይሰራል?',
        how_s1_t: 'በስልክ ቁጥር ይግቡ', how_s1_d: 'በኤስኤምኤስ የሚመጣውን የአንድ ጊዜ ኮድ ያስገቡ።',
        how_s2_t: 'ዝቅተኛ እና ልዩ ዋጋ ይምረጡ', how_s2_d: 'እያንዳንዱ ጨረታ የአሁኑን ዋጋ ያስከፍላል። ከ1 ብር ጀምሮ ማንም ያልመረጠውን መጠን ያስገቡ፤ በቴሌብር ወይም በሲቢኢ ብር ይክፈሉ።',
        how_s3_t: 'ሰዓቱ ሲያልቅ ያሸንፉ', how_s3_d: 'ጨረታው ሲጠናቀቅ ዝቅተኛው እና ልዩ የሆነው ዋጋ ያሸንፋል።',
        how_cta_signin: 'በስልክ ይግቡ እና ይጀምሩ', how_cta_browse: 'ጨረታዎችን ይመልከቱ', how_more: 'ተጨማሪ ጥያቄዎች',

        not_found: 'ጨረታው አልተገኘም', all_auctions: 'ሁሉም ጨረታዎች',
        lbl_description: 'መግለጫ', lbl_specs: 'ዝርዝር መረጃ', time_remaining: 'የቀረው ጊዜ', ends_on: d => `የሚያበቃው ${d}`,
        d_days: 'ቀን', d_hours: 'ሰዓት', d_mins: 'ደቂቃ', d_secs: 'ሴኮንድ', min_bid: 'ዝቅተኛ ጨረታ: 1.00 ብር',
        sign_in_to_bid: 'ለመጫረት ይግቡ',
        bid_cta_out: p => `ለመጫረት ይግቡ — በአንድ ጨረታ <strong>${p} ብር</strong>።`,
        bid_cta_in: p => `እያንዳንዱ ጨረታ <strong>${p} ብር</strong> ያስከፍላል።`,
        winner_banner: (n, b) => `${n} በ ${b} ብር አሸንፏል`, winner_you: 'እርስዎ አሸንፈዋል!',
        fav_added: 'ወደ ተወዳጆች ተጨምሯል', fav_removed: 'ከተወዳጆች ተወግዷል', lbl_fav: 'ተወዳጅ',

        spec_brand: 'ብራንድ', spec_model: 'ሞዴል', spec_storage: 'ማከማቻ', spec_ram: 'ራም', spec_display: 'ስክሪን',
        spec_camera: 'ካሜራ', spec_battery: 'ባትሪ', spec_condition: 'ሁኔታ', spec_warranty: 'ዋስትና',
        spec_motor: 'ሞተር', spec_range: 'የጉዞ ርቀት', spec_speed: 'ከፍተኛ ፍጥነት', spec_capacity: 'አቅም',
        spec_type: 'ዓይነት', spec_cpu: 'ፕሮሰሰር', cond_new: 'አዲስ (ያልተከፈተ)',

        pay_title_bid: 'ጨረታ ያቅርቡ', pay_title_win: 'ክፍያ ይፈጽሙ', pay_kind_bid: 'ጨረታ', pay_kind_win: 'ያሸነፉት እቃ',
        lbl_bid_amount: 'የጨረታ መጠንዎ',
        bid_amount_hint: 'ዝቅተኛው እና ልዩ የሆነው መጠን ያሸንፋል። ቢያንስ 1.00 ብር፤ ሳንቲም ይፈቀዳል።',
        pay_method: 'የክፍያ መንገድ', pay_phone_telebirr: 'የቴሌብር ስልክ ቁጥር', pay_phone_cbe: 'የሲቢኢ ብር ስልክ ቁጥር',
        pay_telebirr_sub: 'ሞባይል ገንዘብ', pay_cbe_sub: 'የኢትዮጵያ ንግድ ባንክ',
        pay_bid_price: 'የአሁኑ ዋጋ (በአንድ ጨረታ)', pay_winning_bid: 'ያሸነፉበት ዋጋ', pay_total: 'ጠቅላላ',
        pay_confirm: a => `${a} ብር ይክፈሉ`, pay_hint: 'የሚስጥር ቁጥርዎን እንዲያስገቡ በስልክዎ ጥያቄ ይደርስዎታል።',
        pay_processing: 'ክፍያ በሂደት ላይ...', pay_processing_d: 'በስልክዎ ላይ የደረሰውን ጥያቄ ያረጋግጡ',
        pay_success_bid: 'ጨረታዎ ገብቷል!', pay_success_win: 'ክፍያው ተጠናቋል!',
        pay_success_d: 'ደረሰኝ በኤስኤምኤስ ተልኳል።', pay_done: 'እሺ',
        err_min_bid: 'ዝቅተኛው ዋጋ 1.00 ብር ነው', err_phone: 'ትክክለኛ ስልክ ቁጥር ያስገቡ (9XXXXXXXX)',

        login_title: 'ይግቡ ወይም ይመዝገቡ', login_sub: 'ወደ ስልክዎ የአንድ ጊዜ ኮድ እንልካለን።',
        login_phone: 'ስልክ ቁጥር', login_send: 'የማረጋገጫ ኮድ ላክ',
        agree_policy: '<a href="#">የግላዊነት ፖሊሲውን</a> እስማማለሁ።', err_agree: 'እባክዎ በግላዊነት ፖሊሲው ይስማሙ',
        otp_title: 'ኮዱን ያስገቡ', otp_sub: p => `ወደ <strong>${p}</strong> የተላከውን ባለ 6 አሃዝ ኮድ ያስገቡ`,
        otp_verify: 'አረጋግጥ እና ግባ', otp_resend: 'ኮድ እንደገና ላክ', otp_resend_in: s => `እንደገና መላክ በ ${s}ሴ`,
        otp_change: 'ቁጥር ቀይር', otp_err: 'ሙሉ ባለ 6 አሃዝ ኮድ ያስገቡ',
        back_home: 'ወደ መነሻ ገጽ ተመለስ', signed_in: 'በተሳካ ሁኔታ ገብተዋል', signout: 'ውጣ',
        signin_required: 'ለመጫረት መጀመሪያ ይግቡ',

        mybids_title: 'የኔ ጨረታዎች', mybids_sub: 'ያቀረቧቸው ዋጋዎች፣ ያሸነፏቸው እና ተወዳጆች',
        tab_active: 'ቀጥታ', tab_won: 'ያሸነፍኩት', tab_lost: 'ያለፉ', tab_favs: 'ተወዳጆች',
        status_live: 'ቀጥታ', status_won: 'አሸንፈዋል', status_lost: 'አላሸነፉም', status_paid: 'ተከፍሏል',
        lbl_your_bids: 'የእርስዎ ዋጋዎች', btn_pay_now: 'አሁን ይክፈሉ', btn_view: 'ይመልከቱ', btn_bid_again: 'እንደገና ይጫረቱ',
        empty_active: 'ቀጥታ ጨረታ የለዎትም', empty_won: 'እስካሁን ያሸነፉት የለም', empty_lost: 'ያለፈ ጨረታ የለም',
        empty_favs: 'ተወዳጅ ያልመረጡት የለም — ❤ን ይጫኑ', signin_needed: 'ጨረታዎችዎን ለማየት ይግቡ',
        signin_needed_d: 'በስልክ ቁጥርዎ በሰከንዶች ውስጥ ይግቡ።', account_phone: 'ስልክ ቁጥር',
        theme_dark: 'ጨለማ ገጽታ', theme_light: 'ብሩህ ገጽታ'
    },
    en: {
        time_format: (d, h, m, s) => `${d}d : ${h}h : ${m}m : ${s}s`, lbl_views: 'views', lbl_bidders: 'bidders',
        nav_home: 'Home', nav_auctions: 'Auctions', nav_winners: 'Winners', nav_mybids: 'My Bids',
        nav_faq: 'FAQ', nav_account: 'Account', nav_signin: 'Sign in', nav_contact: 'Contact Us',
        footer_about: 'About Us', footer_terms: 'Terms & Conditions', footer_privacy: 'Privacy Policy',
        footer_desc: 'Joobiraa is the auction platform where you win brand-new items at low prices.',
        footer_location: 'Addis Ababa, Ethiopia',

        hero_title: 'Bid <em>Less</em>, Win <em>Big</em>', hero_desc: 'Win brand-new items starting from 1 ETB.',
        title_auctions: 'Live Auctions', subtitle_auctions: 'Bid lowest, be unique, and win!',
        title_faq: 'Frequently Asked Questions', subtitle_faq: 'Find information about Joobiraa auctions and payments here',
        btn_bid: 'Place Bid', lbl_current_bid: 'Current Bid', lbl_bids: 'Total Bids', currency: 'ETB',
        live: 'Live', ended: 'Ended',
        bids_count: n => `${n} bids`, results: n => `${n} auctions`,
        search_placeholder: 'Search auctions...',
        sort_ending: 'Ending soon', sort_popular: 'Most popular', sort_price: 'Lowest price',
        no_results: 'No auctions match your search',
        market_title: 'Live now', view_all: 'View all', col_item: 'Item', lbl_ends_in: 'Ends in',
        stat_donated: 'Donated (ETB)', min_bid_lbl: 'Min bid',

        title_winners: 'Winners Gallery', desc_winners: 'Real people, real items, real winning bids',
        title_impact: 'Community Impact', desc_impact: '20% of every bid service fee goes directly to community support',
        lbl_winner: 'Winner', lbl_winning_bid: 'Winning Bid', lbl_donated: 'Contributed to date (ETB)',
        lbl_target: 'Quarter target: 640,000 ETB',

        how_title: 'How it works',
        how_s1_t: 'Sign in with your phone', how_s1_d: 'We text you a one-time code to sign in.',
        how_s2_t: 'Pick the lowest unique bid', how_s2_d: 'Each bid costs the current bid price. Enter an amount from 1 ETB that nobody else picked, and pay with Telebirr or CBE Birr.',
        how_s3_t: 'Win when the timer ends', how_s3_d: 'When the auction closes, the lowest bid that is unique wins the item.',
        how_cta_signin: 'Sign in with phone to start', how_cta_browse: 'Browse auctions', how_more: 'More questions',

        not_found: 'Auction not found', all_auctions: 'All auctions',
        lbl_description: 'Description', lbl_specs: 'Specifications', time_remaining: 'Time remaining', ends_on: d => `ends ${d}`,
        d_days: 'Days', d_hours: 'Hrs', d_mins: 'Min', d_secs: 'Sec', min_bid: 'Minimum bid: 1.00 ETB',
        sign_in_to_bid: 'Sign in to bid',
        bid_cta_out: p => `Sign in to place bids — <strong>${p} ETB</strong> per bid.`,
        bid_cta_in: p => `Each bid costs <strong>${p} ETB</strong>.`,
        winner_banner: (n, b) => `${n} won with ${b} ETB`, winner_you: 'You won this auction!',
        fav_added: 'Added to favorites', fav_removed: 'Removed from favorites', lbl_fav: 'Favorite',

        spec_brand: 'Brand', spec_model: 'Model', spec_storage: 'Storage', spec_ram: 'RAM', spec_display: 'Display',
        spec_camera: 'Camera', spec_battery: 'Battery', spec_condition: 'Condition', spec_warranty: 'Warranty',
        spec_motor: 'Motor', spec_range: 'Range', spec_speed: 'Top speed', spec_capacity: 'Capacity',
        spec_type: 'Type', spec_cpu: 'Processor', cond_new: 'Brand new (sealed)',

        pay_title_bid: 'Place your bid', pay_title_win: 'Pay for your item', pay_kind_bid: 'Bid', pay_kind_win: 'Won item',
        lbl_bid_amount: 'Your bid amount',
        bid_amount_hint: 'The lowest unique amount wins. Minimum 1.00 ETB, cents allowed.',
        pay_method: 'Payment method', pay_phone_telebirr: 'Telebirr phone number', pay_phone_cbe: 'CBE Birr phone number',
        pay_telebirr_sub: 'Mobile money', pay_cbe_sub: 'Commercial Bank',
        pay_bid_price: 'Current bid (per bid)', pay_winning_bid: 'Winning bid', pay_total: 'Total',
        pay_confirm: a => `Pay ${a} ETB`, pay_hint: 'You will get a prompt on your phone to enter your PIN.',
        pay_processing: 'Processing payment...', pay_processing_d: 'Approve the prompt on your phone',
        pay_success_bid: 'Your bid is in!', pay_success_win: 'Payment complete!',
        pay_success_d: 'A receipt was sent to you by SMS.', pay_done: 'Done',
        err_min_bid: 'Minimum bid is 1.00 ETB', err_phone: 'Enter a valid phone number (9XXXXXXXX)',

        login_title: 'Sign in or create account', login_sub: "We'll send a one-time code to your phone.",
        login_phone: 'Phone number', login_send: 'Send verification code',
        agree_policy: 'I agree to the <a href="#">Privacy Policy</a>.', err_agree: 'Please agree to the Privacy Policy',
        otp_title: 'Enter the code', otp_sub: p => `Enter the 6-digit code sent to <strong>${p}</strong>`,
        otp_verify: 'Verify & sign in', otp_resend: 'Resend code', otp_resend_in: s => `Resend in ${s}s`,
        otp_change: 'Change number', otp_err: 'Enter the full 6-digit code',
        back_home: 'Back to homepage', signed_in: 'Signed in', signout: 'Sign out',
        signin_required: 'Sign in first to place a bid',

        mybids_title: 'My Bids', mybids_sub: 'Your bids, wins and favorites',
        tab_active: 'Active', tab_won: 'Won', tab_lost: 'Past', tab_favs: 'Favorites',
        status_live: 'Live', status_won: 'Won', status_lost: 'Not won', status_paid: 'Paid',
        lbl_your_bids: 'Your bids', btn_pay_now: 'Pay now', btn_view: 'View', btn_bid_again: 'Bid again',
        empty_active: 'You have no active bids', empty_won: 'No wins yet — keep bidding!', empty_lost: 'No past auctions',
        empty_favs: 'No favorites yet — tap the ❤ on any auction', signin_needed: 'Sign in to see your bids',
        signin_needed_d: 'It takes seconds with your phone number.', account_phone: 'Phone number',
        theme_dark: 'Dark mode', theme_light: 'Light mode'
    }
};

const LANGS = [
    { id: 'om', code: 'OM', name: 'Afaan Oromoo', locale: 'om-ET' },
    { id: 'am', code: 'AM', name: 'አማርኛ', locale: 'am-ET' },
    { id: 'en', code: 'EN', name: 'English', locale: 'en-GB' }
];

let currentLang = LANGS.some(l => l.id === store.get('lang')) ? store.get('lang') : 'om';

// ---------- tiny helpers ----------
function t(key) { return (dict[currentLang] && dict[currentLang][key]) ?? dict.en[key] ?? key; }
function L(obj) { return obj ? (obj[currentLang] || obj.en) : ''; }
function fmtETB(n) { return Number(n).toFixed(2); }
function compact(n) { return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : String(n); }
function qs(sel, root = document) { return root.querySelector(sel); }
function qsa(sel, root = document) { return [...root.querySelectorAll(sel)]; }
function pad(n) { return String(n).padStart(2, '0'); }
function fmtPhone(p) { return `+251 ${p.slice(0, 2)} ${p.slice(2, 5)} ${p.slice(5)}`; }
function fmtDate(ms) {
    const locale = LANGS.find(l => l.id === currentLang).locale;
    const opts = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    try { return new Date(ms).toLocaleString(locale, opts); } catch (e) { return new Date(ms).toLocaleString('en-GB', opts); }
}

// ---------- session / favorites / bids (localStorage stand-ins for the API) ----------
const session = {
    user() { return store.json('jb_user'); },
    signIn(phone) {
        store.set('jb_user', JSON.stringify({ phone }));
        myBids.seedDemo();
    },
    signOut() { store.remove('jb_user'); }
};
const favs = {
    all() { return store.json('jb_favs') || []; },
    has(id) { return favs.all().includes(id); },
    toggle(id) {
        const list = favs.all();
        const i = list.indexOf(id);
        i === -1 ? list.push(id) : list.splice(i, 1);
        store.set('jb_favs', JSON.stringify(list));
        return i === -1;
    }
};
const myBids = {
    all() {
        if (session.user()) myBids.seedDemo();
        return store.json('jb_bids') || [];
    },
    // Demo only: give a signed-in user some history so My Bids isn't empty
    seedDemo() {
        if (store.get('jb_bids')) return;
        const now = Date.now();
        store.set('jb_bids', JSON.stringify(DEMO_MY_BIDS.map((b, i) => ({ ...b, at: now - (i + 1) * 3600e3 }))));
    },
    add(id, amount) {
        const list = myBids.all();
        list.unshift({ id, amount, at: Date.now() });
        store.set('jb_bids', JSON.stringify(list));
    },
    paid() { return store.json('jb_paid') || []; },
    markPaid(id) { store.set('jb_paid', JSON.stringify([...myBids.paid(), id])); }
};

// ---------- theme ----------
function currentTheme() { return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'; }
function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    store.set('theme', theme);
    qsa('[data-theme-icon]').forEach(i => { i.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'; });
}

// ---------- language ----------
function changeLanguage(lang) {
    currentLang = lang;
    store.set('lang', lang);
    applyTranslations();
}

function applyTranslations() {
    document.documentElement.lang = currentLang;
    qsa('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    qsa('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    qsa('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    qsa('[data-am]').forEach(el => { el.textContent = el.getAttribute('data-' + currentLang) || el.dataset.en; });
    qsa('.currency-lbl').forEach(el => { el.textContent = t('currency'); });
    const lang = LANGS.find(l => l.id === currentLang);
    qsa('.lang-pill .code').forEach(el => { el.textContent = lang.code; });
    qsa('.lang-list button').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
    qsa('[data-theme-label]').forEach(el => { el.textContent = currentTheme() === 'dark' ? t('theme_light') : t('theme_dark'); });
    tickTimers();
    document.dispatchEvent(new Event('langchange'));
}

// ---------- shared chrome (header, bottom nav, footer) ----------
function renderChrome() {
    const page = document.body.dataset.page;
    const navLink = (href, key, id) => `<li><a href="${href}" class="${page === id ? 'active' : ''}" data-i18n="${key}"></a></li>`;
    const header = qs('#site-header');
    if (header) header.outerHTML = `
    <header class="site-header">
        <div class="container header-inner">
            <a href="index.html" class="brand" aria-label="Joobiraa home">JOO<span>BIRAA</span></a>
            <ul class="desktop-nav">
                ${navLink('index.html', 'nav_home', 'home')}
                ${navLink('index.html#auctions', 'nav_auctions', 'auctions')}
                ${navLink('index.html#winners', 'nav_winners', 'winners')}
                ${navLink('my-bids.html', 'nav_mybids', 'mybids')}
                ${navLink('faq.html', 'nav_faq', 'faq')}
            </ul>
            <div class="header-actions">
                <div class="lang-menu">
                    <button class="lang-pill" type="button" aria-haspopup="listbox" aria-label="Language">
                        <i class="fa-solid fa-globe"></i><span class="code">OM</span><i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <ul class="lang-list" role="listbox">
                        ${LANGS.map(l => `<li><button type="button" data-lang="${l.id}"><span class="code">${l.code}</span>${l.name}<i class="fa-solid fa-check"></i></button></li>`).join('')}
                    </ul>
                </div>
                <button class="icon-btn" type="button" data-action="theme" aria-label="Toggle dark mode"><i data-theme-icon class="fa-solid fa-moon"></i></button>
                <a href="login.html" class="btn-signin"><i class="fa-solid fa-mobile-screen"></i><span data-i18n="nav_signin"></span></a>
                <a href="#" class="avatar" data-action="account" aria-label="Account"><i class="fa-solid fa-user"></i></a>
            </div>
        </div>
    </header>`;

    const tab = (href, icon, key, id, action) =>
        `<a href="${href}" class="${page === id ? 'active' : ''}" ${action ? `data-action="${action}"` : ''}><i class="fa-solid ${icon}"></i><span data-i18n="${key}"></span></a>`;
    document.body.insertAdjacentHTML('beforeend', `
    <nav class="bottom-nav" aria-label="Main">
        ${tab('index.html', 'fa-house', 'nav_home', 'home')}
        ${tab('my-bids.html', 'fa-gavel', 'nav_mybids', 'mybids')}
        ${tab('faq.html', 'fa-circle-question', 'nav_faq', 'faq')}
        ${session.user()
            ? tab('#', 'fa-user', 'nav_account', 'account', 'account')
            : tab('login.html', 'fa-right-to-bracket', 'nav_signin', 'login')}
    </nav>
    <div class="floating-buttons">
        <a href="tel:0910443972" class="float-btn phone-float" aria-label="Call us"><i class="fa-solid fa-phone"></i></a>
        <a href="https://t.me/+251910443972" class="float-btn telegram-float" target="_blank" rel="noopener" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>
    </div>
    <div class="toast" role="status" aria-live="polite"></div>`);

    const footer = qs('#site-footer');
    if (footer) footer.outerHTML = `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="index.html" class="brand">JOO<span>BIRAA</span></a>
                    <p data-i18n="footer_desc"></p>
                    <div class="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://t.me/+251910443972" target="_blank" rel="noopener" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h4 data-i18n="nav_contact"></h4>
                    <ul>
                        <li><a href="tel:0910443972"><i class="fa-solid fa-phone"></i> 0910443972</a></li>
                        <li><a href="mailto:support@joobiraa.et"><i class="fa-solid fa-envelope"></i> support@joobiraa.et</a></li>
                        <li><a href="#"><i class="fa-solid fa-location-dot"></i> <span data-i18n="footer_location"></span></a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4 data-i18n="footer_about"></h4>
                    <ul>
                        <li><a href="index.html#auctions" data-i18n="nav_auctions"></a></li>
                        <li><a href="faq.html" data-i18n="nav_faq"></a></li>
                        <li><a href="#" data-i18n="footer_terms"></a></li>
                        <li><a href="#" data-i18n="footer_privacy"></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">&copy; 2026 Joobiraa. All rights reserved.</div>
        </div>
    </footer>`;

    document.documentElement.classList.toggle('signed-in', !!session.user());
    setTheme(currentTheme());
}

// ---------- toast ----------
let toastTimer;
function toast(msg) {
    const el = qs('.toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

// ---------- modal ----------
function openModal(innerHTML, { onClose } = {}) {
    closeModal();
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `<div class="modal-sheet" role="dialog" aria-modal="true"><div class="sheet-handle"></div>${innerHTML}</div>`;
    modal.addEventListener('click', e => {
        if (e.target === modal || e.target.closest('[data-close]')) closeModal();
    });
    modal._onClose = onClose;
    document.body.appendChild(modal);
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => modal.classList.add('open'));
    return modal.querySelector('.modal-sheet');
}
function closeModal() {
    const modal = qs('.modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    if (modal._onClose) modal._onClose();
    setTimeout(() => modal.remove(), 200);
}
function modalHead(title) {
    return `<div class="modal-head"><h3>${title}</h3><button class="modal-close" data-close aria-label="Close"><i class="fa-solid fa-xmark"></i></button></div>`;
}

// ---------- How it works (listed steps, no popup) ----------
function howItWorksHTML() {
    const step = n => `
        <li class="how-step">
            <div class="step-num">${n}</div>
            <div><h3>${t(`how_s${n}_t`)}</h3><p>${t(`how_s${n}_d`)}</p></div>
        </li>`;
    return `<ol class="how-list">${step(1)}${step(2)}${step(3)}</ol>`;
}

// ---------- Account sheet ----------
function openAccount() {
    const user = session.user();
    if (!user) { location.href = 'login.html'; return; }
    openModal(`
        ${modalHead(t('nav_account'))}
        <div class="pay-summary">
            <div><div class="kind">${t('account_phone')}</div><div class="name">${fmtPhone(user.phone)}</div></div>
        </div>
        <a href="my-bids.html" class="btn btn-outline btn-block"><i class="fa-solid fa-gavel"></i> ${t('nav_mybids')}</a>
        <button class="btn btn-outline btn-block" style="margin-top:10px" data-action="theme"><i data-theme-icon class="fa-solid fa-moon"></i> <span data-theme-label></span></button>
        <button class="btn btn-dark btn-block" style="margin-top:10px" data-action="signout"><i class="fa-solid fa-right-from-bracket"></i> ${t('signout')}</button>`);
    setTheme(currentTheme());
    applyTranslations();
}

// ---------- Payment (inline on the detail page, no popup) ----------
// kind 'bid': user picks a secret bid amount and pays the auction's current bid price.
// kind 'win': the winner pays the winning amount for the item.
function renderPayForm(root, { auction, kind, amount, onDone }) {
    const user = session.user();
    let method = store.get('jb_paymethod') || 'telebirr';
    const isBid = kind === 'bid';
    const charge = isBid ? auction.price : auction.winner.bid;
    const chargeTxt = fmtETB(charge);
    const cur = t('currency');
    const startAmount = amount >= 1 ? fmtETB(amount) : '1.00';

    root.innerHTML = `
        <div data-pay-step="form">
            ${isBid ? `
            <div class="field">
                <label class="field-label">${t('lbl_bid_amount')}</label>
                ${bidStepper(startAmount)}
                <p class="field-hint">${t('bid_amount_hint')}</p>
            </div>` : ''}
            <div class="field">
                <span class="field-label">${t('pay_method')}</span>
                <div class="pay-methods">
                    <button type="button" class="pay-method telebirr" data-method="telebirr">
                        <span class="logo">tele<br>birr</span><span>Telebirr<small>${t('pay_telebirr_sub')}</small></span>
                    </button>
                    <button type="button" class="pay-method cbe" data-method="cbe">
                        <span class="logo">CBE</span><span>CBE Birr<small>${t('pay_cbe_sub')}</small></span>
                    </button>
                </div>
            </div>
            <label class="field-label" data-phone-label></label>
            <div class="phone-input">
                <span class="prefix">+251</span>
                <input type="tel" inputmode="numeric" maxlength="9" value="${user ? user.phone : ''}" placeholder="9XXXXXXXX" autocomplete="tel-national" data-pay-phone>
            </div>
            <div class="form-error" data-pay-error></div>
            <button type="button" class="btn btn-gold btn-block" data-pay-confirm>
                ${user ? `<i class="fa-solid fa-lock"></i> ${t('pay_confirm')(chargeTxt)}` : `<i class="fa-solid fa-mobile-screen"></i> ${t('sign_in_to_bid')}`}
            </button>
            <p class="hint"><i class="fa-solid fa-circle-info"></i>${t('pay_hint')}</p>
        </div>
        <div data-pay-step="processing" class="pay-result hidden">
            <div class="spinner"></div>
            <h3>${t('pay_processing')}</h3>
            <p>${t('pay_processing_d')}</p>
        </div>
        <div data-pay-step="success" class="pay-result hidden">
            <div class="big-icon"><i class="fa-solid fa-check"></i></div>
            <h3>${t(isBid ? 'pay_success_bid' : 'pay_success_win')}</h3>
            <p><strong>${chargeTxt} ${cur}</strong> · <span data-paid-via></span><br>${t('pay_success_d')}</p>
            ${isBid ? `<button type="button" class="btn btn-outline btn-block" data-pay-again>${t('btn_bid_again')}</button>` : ''}
        </div>`;

    const err = qs('[data-pay-error]', root);
    const selectMethod = m => {
        method = m;
        qsa('.pay-method', root).forEach(b => b.classList.toggle('active', b.dataset.method === m));
        qs('[data-phone-label]', root).textContent = t(m === 'cbe' ? 'pay_phone_cbe' : 'pay_phone_telebirr');
    };
    selectMethod(method);
    qsa('.pay-method', root).forEach(b => b.addEventListener('click', () => selectMethod(b.dataset.method)));

    const amountInput = qs('.bid-input', root);
    if (amountInput) amountInput.addEventListener('input', () => { err.textContent = ''; });

    const phoneInput = qs('[data-pay-phone]', root);
    phoneInput.addEventListener('input', () => { phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 9); err.textContent = ''; });

    qs('[data-pay-confirm]', root).addEventListener('click', () => {
        if (!session.user()) {
            store.set('jb_toast', t('signin_required'));
            const amt = amountInput ? `&amount=${encodeURIComponent(amountInput.value)}` : '';
            location.href = 'login.html?next=' + encodeURIComponent(`bid.html?id=${auction.id}${amt}`);
            return;
        }
        const bidAmount = amountInput ? Math.round(parseFloat(amountInput.value) * 100) / 100 : null;
        if (amountInput && !(bidAmount >= 1)) { err.textContent = t('err_min_bid'); return; }
        if (!/^[79]\d{8}$/.test(phoneInput.value)) { err.textContent = t('err_phone'); return; }
        store.set('jb_paymethod', method);
        const show = step => qsa('[data-pay-step]', root).forEach(el => el.classList.toggle('hidden', el.dataset.payStep !== step));
        show('processing');
        // Simulated USSD/app push approval
        setTimeout(() => {
            qs('[data-paid-via]', root).textContent = method === 'cbe' ? 'CBE Birr' : 'Telebirr';
            show('success');
            if (isBid) { myBids.add(auction.id, bidAmount); auction.bids++; }
            else myBids.markPaid(auction.id);
            if (onDone) onDone();
        }, 1800);
    });
    const again = qs('[data-pay-again]', root);
    if (again) again.addEventListener('click', () => renderPayForm(root, { auction, kind, onDone }));
}

// ---------- Cards ----------
function favButton(id) {
    const on = favs.has(id);
    return `<button type="button" class="fav-btn ${on ? 'active' : ''}" data-fav="${id}" aria-pressed="${on}" aria-label="${t('lbl_fav')}">
        <i class="fa-${on ? 'solid' : 'regular'} fa-heart"></i></button>`;
}

function bidStepper(value = '1.00') {
    return `<div class="bid-stepper">
        <button type="button" data-step="-1" aria-label="-1"><i class="fa-solid fa-minus"></i></button>
        <label class="bid-field"><input class="bid-input" type="text" inputmode="decimal" value="${value}" aria-label="${t('lbl_bid_amount')}"><span class="unit">${t('currency')}</span></label>
        <button type="button" data-step="1" aria-label="+1"><i class="fa-solid fa-plus"></i></button>
    </div>`;
}

function auctionCard(a) {
    const href = `bid.html?id=${a.id}`;
    return `
    <article class="auction-card" data-bid-scope>
        <div class="card-top">
            <span class="badge badge-live"><i class="fa-solid fa-gavel"></i> ${t('live')}</span>
            <span class="badge-views"><i class="fa-regular fa-eye"></i> ${compact(a.views)}</span>
        </div>
        <div class="card-media">
            <a href="${href}"><img class="card-img" src="${a.images[0]}" alt="${L(a.name)}" loading="lazy"></a>
            ${favButton(a.id)}
        </div>
        <a class="card-title" href="${href}">${L(a.name)}</a>
        <div class="card-stats">
            <div class="stat-item">
                <span class="stat-label">${t('lbl_current_bid')}</span>
                <span class="stat-value price">${fmtETB(a.price)} <small>${t('currency')}</small></span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('lbl_bids')}</span>
                <span class="stat-value count"><i class="fa-solid fa-tag"></i> ${a.bids}</span>
            </div>
        </div>
        <div class="timer" data-ends="${a.endsAt}"></div>
        ${bidStepper()}
        <button type="button" class="btn btn-gold btn-block" data-bid="${a.id}">${t('btn_bid')}</button>
    </article>`;
}

// ---------- Timers ----------
function splitTime(ms) {
    const s = Math.max(0, Math.floor(ms / 1000));
    return { d: Math.floor(s / 86400), h: pad(Math.floor(s / 3600) % 24), m: pad(Math.floor(s / 60) % 60), s: pad(s % 60), done: s === 0 };
}
function tickTimers() {
    const now = Date.now();
    qsa('[data-ends]').forEach(el => {
        const p = splitTime(+el.dataset.ends - now);
        if (el.dataset.style === 'boxes') {
            ['d', 'h', 'm', 's'].forEach(k => { const n = qs(`[data-t="${k}"]`, el); if (n) n.textContent = k === 'd' ? pad(p.d) : p[k]; });
        } else {
            el.textContent = p.done ? t('ended') : t('time_format')(p.d, p.h, p.m, p.s);
            el.classList.toggle('ended', p.done);
        }
    });
}

// ---------- Global event delegation ----------
document.addEventListener('click', e => {
    const langBtn = e.target.closest('.lang-pill');
    const menu = qs('.lang-menu');
    if (langBtn) { menu.classList.toggle('open'); return; }
    const pick = e.target.closest('.lang-list button');
    if (pick) { changeLanguage(pick.dataset.lang); menu.classList.remove('open'); return; }
    if (menu && !e.target.closest('.lang-menu')) menu.classList.remove('open');

    const action = e.target.closest('[data-action]');
    if (action) {
        const a = action.dataset.action;
        if (a === 'theme') { setTheme(currentTheme() === 'dark' ? 'light' : 'dark'); applyTranslations(); }
        if (a === 'account') { e.preventDefault(); openAccount(); }
        if (a === 'signout') { session.signOut(); location.href = 'index.html'; }
        return;
    }

    const fav = e.target.closest('[data-fav]');
    if (fav) {
        e.preventDefault();
        const on = favs.toggle(fav.dataset.fav);
        qsa(`[data-fav="${fav.dataset.fav}"]`).forEach(b => {
            b.classList.toggle('active', on);
            b.setAttribute('aria-pressed', on);
            b.querySelector('i').className = `fa-${on ? 'solid' : 'regular'} fa-heart`;
        });
        toast(t(on ? 'fav_added' : 'fav_removed'));
        document.dispatchEvent(new Event('favsupdated'));
        return;
    }

    const step = e.target.closest('[data-step]');
    if (step) {
        const input = qs('.bid-input', step.closest('.bid-stepper'));
        const v = (parseFloat(input.value) || 1) + Number(step.dataset.step);
        input.value = fmtETB(Math.max(1, v));
        return;
    }

    // Card "Place bid" goes to the detail page, where payment happens
    const bid = e.target.closest('[data-bid]');
    if (bid) {
        const input = qs('.bid-input', bid.closest('[data-bid-scope]'));
        location.href = `bid.html?id=${bid.dataset.bid}&amount=${encodeURIComponent(input ? input.value : '1.00')}#pay`;
    }
});

// Keep bid inputs to a valid money format
document.addEventListener('input', e => {
    if (!e.target.classList || !e.target.classList.contains('bid-input')) return;
    let v = e.target.value.replace(/[^\d.]/g, '');
    const [int, ...rest] = v.split('.');
    if (rest.length) v = int + '.' + rest.join('').slice(0, 2);
    e.target.value = v;
});
document.addEventListener('focusout', e => {
    if (e.target.classList && e.target.classList.contains('bid-input')) {
        const v = parseFloat(e.target.value);
        e.target.value = fmtETB(isNaN(v) || v < 1 ? 1 : v);
    }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ---------- FAQ accordion ----------
function initFaq() {
    qsa('.faq-question').forEach(q => q.addEventListener('click', () => {
        const item = q.parentElement;
        qsa('.faq-item').forEach(o => { if (o !== item) o.classList.remove('active'); });
        item.classList.toggle('active');
    }));
}

// ---------- boot ----------
document.addEventListener('DOMContentLoaded', () => {
    renderChrome();
    initFaq();
    if (typeof initPage === 'function') initPage();
    applyTranslations();
    const pending = store.get('jb_toast');
    if (pending) { store.remove('jb_toast'); setTimeout(() => toast(pending), 300); }
    setInterval(tickTimers, 1000);
});
