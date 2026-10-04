// =========================================================
// Joobiraa — shared UI: i18n, theme, header/footer, modals,
// favorites, session, payment. Page scripts build on this.
// =========================================================

const dict = {
    om: {
        lbl_code: 'Lakk. caalbaasii', copied: 'garagalfameera',
        time_format: (d, h, m, s) => `${d}g : ${h}s : ${m}d : ${s}s`,
        nav_home: 'Mana', nav_auctions: 'Caalbaasii', nav_winners: "Mo'attoota", nav_mybids: 'Caalbaasii Koo',
        nav_faq: 'Gaaffiilee', nav_account: 'Herrega', nav_signin: 'Seeni', nav_contact: 'Nu Qunnamaa',
        footer_about: "Waa'ee Keenya", footer_terms: 'Seerota fi Haalawwan', footer_privacy: 'Imaammata Iccitii',
        footer_desc: "Meeshaa haaraa gatii xiqqaan mo'adhu.",
        footer_location: 'Finfinnee, Itoophiyaa',

        hero_title: "Gatii <em>Xiqqaan</em> Mo'adhaa", hero_desc: "Qarshii 1 irraa jalqabee meeshaalee haaraa mo'adhaa.",
        title_auctions: 'Caalbaasiiwwan Ammaa', subtitle_auctions: "Gatii xiqqaa fi adda ta'e dhiheessuun mo'adhaa!",
        title_faq: "Gaaffiilee Yeroo Baay'ee Gaafataman", subtitle_faq: "Odeeffannoo waa'ee Joobiraa fi kaffaltii asitti argattu",
        btn_bid: 'Gatii Dhiheessi', lbl_current_bid: 'Gatii Ammaa', lbl_bids: 'Dorgomtoota', stat_views: 'Ilaalcha', currency: 'ETB',
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
        name_title: 'Maqaa kee galchi', name_sub: "Lakkoofsi kee mirkanaa'eera. Yoo mo'atte, maqaan kee galaarii mo'attootaa irratti mul'ata.",
        name_label: 'Maqaa guutuu', name_ph: 'Fkn. Caaltuu Fayyisaa', name_continue: 'Itti fufi', err_name: 'Maqaa kee galchi', verified: "Mirkanaa'eera",
        signin_needed_acc: 'Herrega kee ilaaluuf seeni', acc_bids: 'Caalbaasii', acc_settings: "Qindaa'ina", acc_language: 'Afaan',
        acc_theme: 'Haala', acc_history: 'Seenaa kaffaltii', acc_help: 'Gargaarsa', hist_empty: 'Ammaaf kaffaltiin hin jiru',
        hist_bid: n => `Caalbaasii ETB ${n}`, hist_item: 'Kaffaltii meeshaa',
        pay_failed: 'Kaffaltiin hin xumuramne', pay_failed_d: "Maallaqni sirraa hin muramne, caalbaasiin kees hin galmoofne. Irra deebi'ii yaali.",
        pay_failed_win: "Maallaqni sirraa hin muramne. Irra deebi'ii yaali.",
        pay_retry: "Irra deebi'ii yaali", pay_change: 'Mala kaffaltii jijjiiri',
        pay_nonrefund: "Kaffaltiin caalbaasii hin deebi'u.", pay_receipt: 'Lakk. nagahee', pay_amount: 'Hanga', pay_via: 'Karaa',
        err_min_bid: 'Gatiin xiqqaan ETB 1.00 dha', err_phone: 'Lakkoofsa bilbilaa sirrii galchi (9XXXXXXXX)',

        login_title: "Seeni ykn galmaa'i", login_sub: 'Lakkoofsa bilbila keetiif koodii yeroo tokkoo ni ergina.',
        login_phone: 'Lakkoofsa bilbilaa', login_send: 'Koodii mirkaneessaa ergi',
        agree_policy: '<a href="privacy.html">Imaammata Iccitii</a> nan fudhadha.', err_agree: 'Maaloo imaammata iccitii fudhadhu',
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
        theme_dark: 'Haala dukkanaa', theme_light: 'Haala ifaa',
        upcoming: 'Dhufaa jiru', starts_in: 'Kan jalqabu', opens_soon: 'Dhiyootti banama', btn_results: "Bu'aa ilaali",
        upcoming_note: 'Caalbaasiin yeroon kun yommuu dhumu banama.', you: 'Ati',
        title_all_auctions: 'Caalbaasiiwwan Hunda', desc_all_auctions: "Kan amma jiru, kan dhufu fi kan xumurame",
        bid_history: 'Seenaa caalbaasii', h_total: 'Caalbaasii waliigalaa', h_repeated: "Kan irra deebi'ame", h_unique: "Kan adda ta'e",
        h_amount: 'Hanga', unique_yes: 'Adda', unique_no: 'Adda miti', show_less: 'Xiqqeessi',
        show_more: n => `Dabalata agarsiisi (${n} hafe)`, back: 'Duubatti', nav_menu: 'Baafata',
        install_title: 'Appii Joobiraa buufadhu', install_sub: 'Saffisaan banama, intarneetii laafaa irrattis ni hojjata',
        install_btn: 'Buufadhu', install_ios: 'Share <i class="fa-solid fa-arrow-up-from-bracket"></i> tuqiitii "Add to Home Screen" filadhu', install_menu: 'Appii buufadhu'
    },
    am: {
        lbl_code: 'የጨረታ ቁጥር', copied: 'ተቀድቷል',
        time_format: (d, h, m, s) => `${d}ቀን : ${h}ሰ : ${m}ደ : ${s}ሴ`,
        nav_home: 'መነሻ', nav_auctions: 'ጨረታዎች', nav_winners: 'አሸናፊዎች', nav_mybids: 'የኔ ጨረታዎች',
        nav_faq: 'ጥያቄዎች', nav_account: 'መለያ', nav_signin: 'ይግቡ', nav_contact: 'ያግኙን',
        footer_about: 'ስለ እኛ', footer_terms: 'ደንብና ግዴታዎች', footer_privacy: 'የግላዊነት ፖሊሲ',
        footer_desc: 'አዳዲስ እቃዎችን በአነስተኛ ዋጋ ያሸንፉ።',
        footer_location: 'አዲስ አበባ፣ ኢትዮጵያ',

        hero_title: 'በአነስተኛ ዋጋ <em>አሸንፉ</em>', hero_desc: 'ከ1 ብር ጀምሮ አዳዲስ እቃዎችን ያሸንፉ።',
        title_auctions: 'የቀረቡ ጨረታዎች', subtitle_auctions: 'ዝቅተኛ እና ልዩ ዋጋ በማቅረብ ያሸንፉ!',
        title_faq: 'ተደጋግመው የሚጠየቁ ጥያቄዎች', subtitle_faq: 'ስለ Joobiraa ጨረታ እና ክፍያ መረጃዎችን እዚህ ያገኛሉ',
        btn_bid: 'የጨረታ ዋጋ ያቅርቡ', lbl_current_bid: 'የአሁኑ ዋጋ', lbl_bids: 'ተጫራቾች', stat_views: 'ዕይታ', currency: 'ብር',
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
        name_title: 'ስምዎን ያስገቡ', name_sub: 'ስልክ ቁጥርዎ ተረጋግጧል። ካሸነፉ ስምዎ በአሸናፊዎች ዝርዝር ላይ ይታያል።',
        name_label: 'ሙሉ ስም', name_ph: 'ለምሳሌ፡ አበበ ከበደ', name_continue: 'ቀጥል', err_name: 'እባክዎ ስምዎን ያስገቡ', verified: 'ተረጋግጧል',
        signin_needed_acc: 'መለያዎን ለማየት ይግቡ', acc_bids: 'ጨረታዎች', acc_settings: 'ቅንብሮች', acc_language: 'ቋንቋ',
        acc_theme: 'ገጽታ', acc_history: 'የክፍያ ታሪክ', acc_help: 'እገዛ', hist_empty: 'እስካሁን ምንም ክፍያ የለም',
        hist_bid: n => `ጨረታ ${n} ብር`, hist_item: 'የእቃ ክፍያ',
        pay_failed: 'ክፍያው አልተጠናቀቀም', pay_failed_d: 'ምንም ገንዘብ አልተቆረጠም፣ ጨረታዎም አልተመዘገበም። እባክዎ እንደገና ይሞክሩ።',
        pay_failed_win: 'ምንም ገንዘብ አልተቆረጠም። እባክዎ እንደገና ይሞክሩ።',
        pay_retry: 'እንደገና ይሞክሩ', pay_change: 'የክፍያ መንገድ ይቀይሩ',
        pay_nonrefund: 'የጨረታ ክፍያ ተመላሽ አይደረግም።', pay_receipt: 'የደረሰኝ ቁጥር', pay_amount: 'መጠን', pay_via: 'በ',
        err_min_bid: 'ዝቅተኛው ዋጋ 1.00 ብር ነው', err_phone: 'ትክክለኛ ስልክ ቁጥር ያስገቡ (9XXXXXXXX)',

        login_title: 'ይግቡ ወይም ይመዝገቡ', login_sub: 'ወደ ስልክዎ የአንድ ጊዜ ኮድ እንልካለን።',
        login_phone: 'ስልክ ቁጥር', login_send: 'የማረጋገጫ ኮድ ላክ',
        agree_policy: '<a href="privacy.html">የግላዊነት ፖሊሲውን</a> እስማማለሁ።', err_agree: 'እባክዎ በግላዊነት ፖሊሲው ይስማሙ',
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
        theme_dark: 'ጨለማ ገጽታ', theme_light: 'ብሩህ ገጽታ',
        upcoming: 'የሚመጡ', starts_in: 'የሚጀምረው በ', opens_soon: 'በቅርቡ ይከፈታል', btn_results: 'ውጤቱን ይመልከቱ',
        upcoming_note: 'ቆጠራው ሲያልቅ ጨረታው ይከፈታል።', you: 'እርስዎ',
        title_all_auctions: 'ሁሉም ጨረታዎች', desc_all_auctions: 'ቀጥታ፣ የሚመጡ እና የተጠናቀቁ ጨረታዎች',
        bid_history: 'የጨረታ ታሪክ', h_total: 'ጠቅላላ ጨረታዎች', h_repeated: 'ተደጋጋሚ ጨረታዎች', h_unique: 'ልዩ ጨረታዎች',
        h_amount: 'መጠን', unique_yes: 'ልዩ', unique_no: 'ልዩ አይደለም', show_less: 'አሳንስ',
        show_more: n => `ተጨማሪ አሳይ (${n} ቀሪ)`, back: 'ተመለስ', nav_menu: 'ምናሌ',
        install_title: 'የJoobiraa መተግበሪያ ይጫኑ', install_sub: 'በፍጥነት ይከፈታል፣ በደካማ ኢንተርኔትም ይሰራል',
        install_btn: 'ጫን', install_ios: 'Share <i class="fa-solid fa-arrow-up-from-bracket"></i> ተጭነው "Add to Home Screen" ይምረጡ', install_menu: 'መተግበሪያውን ይጫኑ'
    },
    en: {
        lbl_code: 'Auction no.', copied: 'copied',
        time_format: (d, h, m, s) => `${d}d : ${h}h : ${m}m : ${s}s`,
        nav_home: 'Home', nav_auctions: 'Auctions', nav_winners: 'Winners', nav_mybids: 'My Bids',
        nav_faq: 'FAQ', nav_account: 'Account', nav_signin: 'Sign in', nav_contact: 'Contact Us',
        footer_about: 'About Us', footer_terms: 'Terms & Conditions', footer_privacy: 'Privacy Policy',
        footer_desc: 'Win brand-new items at the lowest price.',
        footer_location: 'Addis Ababa, Ethiopia',

        hero_title: 'Bid Less, <em>Win Big</em>', hero_desc: 'Win brand-new items starting from 1 ETB.',
        title_auctions: 'Live Auctions', subtitle_auctions: 'Bid lowest, be unique, and win!',
        title_faq: 'Frequently Asked Questions', subtitle_faq: 'Find information about Joobiraa auctions and payments here',
        btn_bid: 'Place Bid', lbl_current_bid: 'Current Bid', lbl_bids: 'Bidders', stat_views: 'Views', currency: 'ETB',
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
        name_title: 'Type your name', name_sub: 'Your number is verified. If you win, this name is shown on the winners list.',
        name_label: 'Full name', name_ph: 'e.g. Abebe Kebede', name_continue: 'Continue', err_name: 'Please enter your name', verified: 'Verified',
        signin_needed_acc: 'Sign in to see your account', acc_bids: 'Bids', acc_settings: 'Settings', acc_language: 'Language',
        acc_theme: 'Appearance', acc_history: 'Payment history', acc_help: 'Help', hist_empty: 'No payments yet',
        hist_bid: n => `Bid ${n} ETB`, hist_item: 'Item payment',
        pay_failed: 'Payment not completed', pay_failed_d: 'No money was taken and your bid was not placed. Please try again.',
        pay_failed_win: 'No money was taken. Please try again.',
        pay_retry: 'Try again', pay_change: 'Change payment method',
        pay_nonrefund: 'Bid payments are non-refundable.', pay_receipt: 'Receipt no.', pay_amount: 'Amount', pay_via: 'Paid with',
        err_min_bid: 'Minimum bid is 1.00 ETB', err_phone: 'Enter a valid phone number (9XXXXXXXX)',

        login_title: 'Sign in or create account', login_sub: "We'll send a one-time code to your phone.",
        login_phone: 'Phone number', login_send: 'Send verification code',
        agree_policy: 'I agree to the <a href="privacy.html">Privacy Policy</a>.', err_agree: 'Please agree to the Privacy Policy',
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
        theme_dark: 'Dark mode', theme_light: 'Light mode',
        upcoming: 'Upcoming', starts_in: 'Starts in', opens_soon: 'Opens soon', btn_results: 'View results',
        upcoming_note: 'Bidding opens when the countdown ends.', you: 'You',
        title_all_auctions: 'All Auctions', desc_all_auctions: 'Live, upcoming and closed auctions',
        bid_history: 'Bid history', h_total: 'Total bids', h_repeated: 'Repeated bids', h_unique: 'Unique bids',
        h_amount: 'Amount', unique_yes: 'Unique', unique_no: 'Not unique', show_less: 'Show less',
        show_more: n => `Show more (${n} left)`, back: 'Back', nav_menu: 'Menu',
        install_title: 'Install the Joobiraa app', install_sub: 'Opens faster and works on weak internet',
        install_btn: 'Install', install_ios: 'Tap Share <i class="fa-solid fa-arrow-up-from-bracket"></i> then "Add to Home Screen"', install_menu: 'Install app'
    }
};

// ---------- Strings for notifications, charity, legal, offline/404, notify-me ----------
Object.assign(dict.om, {
    nav_notifs: 'Beeksisa', notif_markall: 'Hunda dubbisi', notif_today: "Har'a", notif_earlier: 'Kanaan dura',
    notif_empty: 'Beeksisni hin jiru', signin_needed_notif: 'Beeksisa ilaaluuf seeni',
    n_ending_t: 'Dhiyootti xumurama', n_ending: (n, h) => `${n} sa'aatii ${h} keessatti xumurama.`,
    n_won_t: "Mo'atteetta!", n_won: n => `${n} mo'atteetta. Gareen keenya si bilbila.`,
    n_paid_t: 'Kaffaltiin galeera', n_paid: (a, r) => `ETB ${a} · Lakk. nagahee ${r}`,
    n_open_t: 'Caalbaasiin banameera', n_open: n => `${n} amma dorgommiif banameera.`,
    n_lost_t: 'Caalbaasiin xumurame', n_lost: n => `${n} xumurameera. Kan biraa yaali!`,
    notify_me: 'Na beeksisi', notify_on: 'Ni beeksifna', notify_toast: 'Yeroo banamu SMS siif ergina',
    winner_contact: "Gareen keenya sa'aatii 24 keessatti si bilbila: eenyummaa kee mirkaneessuu fi meeshaa itti fudhattu qindeessuuf.",
    imp_more: "Bal'inaan ilaali", imp_quarter: 'Kurmaana kana', imp_target: 'Kaayyoo kurmaanaa', imp_how_t: 'Akkamitti herregama?',
    imp_how_d: 'Caalbaasii hunda irraa kaffaltii tajaajilaa 20% ofumaan deeggarsa hawaasaaf qooddama.',
    imp_example: 'Fkn. caalbaasii ETB 75 → ETB 15 hawaasaaf', imp_given: 'Deeggarsa kenname', imp_updated: "Kan haaromfame: har'a",
    legal_note: "Barreeffamni kun fakkeenya; barreeffamni dhumaa abukaatoo irraa dhufa.", legal_updated: "Kan haaromfame: Onkoloolessa 2026",
    off_title: 'Interneetiin hin jiru', off_desc: "Walqunnamtii kee mirkaneessiitii irra deebi'ii yaali.",
    nf_title: 'Fuulli hin argamne', nf_desc: 'Liinkiin kun hin hojjatu ykn fuulli haqameera.'
});
Object.assign(dict.am, {
    nav_notifs: 'ማሳወቂያዎች', notif_markall: 'ሁሉም ተነቧል', notif_today: 'ዛሬ', notif_earlier: 'ቀደም ብሎ',
    notif_empty: 'ማሳወቂያ የለም', signin_needed_notif: 'ማሳወቂያዎችን ለማየት ይግቡ',
    n_ending_t: 'በቅርቡ ያበቃል', n_ending: (n, h) => `${n} በ${h} ሰዓት ውስጥ ያበቃል።`,
    n_won_t: 'አሸንፈዋል!', n_won: n => `${n} አሸንፈዋል። ቡድናችን ይደውልልዎታል።`,
    n_paid_t: 'ክፍያ ተቀብለናል', n_paid: (a, r) => `${a} ብር · ደረሰኝ ${r}`,
    n_open_t: 'ጨረታው ተከፍቷል', n_open: n => `${n} አሁን ለጨረታ ክፍት ነው።`,
    n_lost_t: 'ጨረታው ተጠናቋል', n_lost: n => `${n} ተጠናቋል። ሌላ ይሞክሩ!`,
    notify_me: 'አሳውቁኝ', notify_on: 'እናሳውቅዎታለን', notify_toast: 'ሲከፈት በኤስኤምኤስ እናሳውቅዎታለን',
    winner_contact: 'ቡድናችን መታወቂያዎን ለማረጋገጥና እቃውን የሚረከቡበትን ለማመቻቸት በ24 ሰዓት ውስጥ ይደውልልዎታል።',
    imp_more: 'ዝርዝር ይመልከቱ', imp_quarter: 'በዚህ ሩብ ዓመት', imp_target: 'የሩብ ዓመት ግብ', imp_how_t: 'እንዴት ይሰላል?',
    imp_how_d: 'ከእያንዳንዱ ጨረታ የአገልግሎት ክፍያ 20% በራስ-ሰር ለማኅበረሰብ ድጋፍ ይመደባል።',
    imp_example: 'ለምሳሌ፡ የ75 ብር ጨረታ → 15 ብር ለማኅበረሰብ', imp_given: 'የተሰጡ ድጋፎች', imp_updated: 'የተዘመነው፡ ዛሬ',
    legal_note: 'ይህ ጽሑፍ ናሙና ነው፤ የመጨረሻው ጽሑፍ ከሕግ ባለሙያ ይመጣል።', legal_updated: 'የተዘመነው፡ ጥቅምት 2026',
    off_title: 'ኢንተርኔት የለም', off_desc: 'ግንኙነትዎን አረጋግጠው እንደገና ይሞክሩ።',
    nf_title: 'ገጹ አልተገኘም', nf_desc: 'ይህ ሊንክ አይሰራም ወይም ገጹ ተወግዷል።'
});
Object.assign(dict.en, {
    nav_notifs: 'Notifications', notif_markall: 'Mark all read', notif_today: 'Today', notif_earlier: 'Earlier',
    notif_empty: 'No notifications yet', signin_needed_notif: 'Sign in to see your notifications',
    n_ending_t: 'Ending soon', n_ending: (n, h) => `${n} ends in ${h} hours.`,
    n_won_t: 'You won!', n_won: n => `You won the ${n}. Our team will call you.`,
    n_paid_t: 'Payment received', n_paid: (a, r) => `${a} ETB · Receipt ${r}`,
    n_open_t: 'Bidding is open', n_open: n => `${n} is now open for bids.`,
    n_lost_t: 'Auction ended', n_lost: n => `${n} has ended. Try another one!`,
    notify_me: 'Notify me', notify_on: "We'll notify you", notify_toast: "We'll SMS you when bidding opens",
    winner_contact: 'Our team will call you within 24 hours to check your ID and arrange pickup or delivery.',
    imp_more: 'See details', imp_quarter: 'This quarter', imp_target: 'Quarterly target', imp_how_t: 'How is it calculated?',
    imp_how_d: '20% of every bid service fee is set aside automatically for community support.',
    imp_example: 'Example: a 75 ETB bid → 15 ETB to the community', imp_given: 'Support given', imp_updated: 'Updated: today',
    legal_note: 'Sample text — the final wording will come from the lawyer.', legal_updated: 'Last updated: October 2026',
    off_title: "You're offline", off_desc: 'Check your connection and try again.',
    nf_title: 'Page not found', nf_desc: "This link doesn't work or the page was removed."
});

const LANGS = [
    { id: 'om', code: 'OM', name: 'Afaan Oromoo', locale: 'om-ET' },
    { id: 'am', code: 'አማ', name: 'አማርኛ', locale: 'am-ET' },
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
// Public views never show a full number: 09******75
function maskPhone(p) { return `0${p.slice(0, 1)}******${p.slice(-2)}`; }
function winnerName(a) { return a.winner.name === 'me' ? t('you') : a.winner.name; }
function fmtPhone(p) { return `+251 ${p.slice(0, 2)} ${p.slice(2, 5)} ${p.slice(5)}`; }
function fmtDate(ms) {
    const locale = LANGS.find(l => l.id === currentLang).locale;
    const opts = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    try { return new Date(ms).toLocaleString(locale, opts); } catch (e) { return new Date(ms).toLocaleString('en-GB', opts); }
}

// ---------- session / favorites / bids (localStorage stand-ins for the API) ----------
const session = {
    user() { return store.json('jb_user'); },
    signIn(phone, name) {
        store.set('jb_user', JSON.stringify({ phone, name }));
        if (name) store.set('jb_names', JSON.stringify({ ...session.names(), [phone]: name }));
        myBids.seedDemo();
    },
    signOut() { store.remove('jb_user'); },
    // Demo stand-in for "does this phone already have an account?"
    names() { return store.json('jb_names') || {}; }
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
// Demo notifications (the API will send these); read state kept on the device
const notifs = {
    all() { return typeof DEMO_NOTIFS === 'undefined' ? [] : DEMO_NOTIFS; },
    readIds() { return store.json('jb_notif_read') || []; },
    unread() { return session.user() ? notifs.all().filter(n => !notifs.readIds().includes(n.id)).length : 0; },
    markAll() { store.set('jb_notif_read', JSON.stringify(notifs.all().map(n => n.id))); }
};
// "Notify me" for upcoming auctions
const reminders = {
    all() { return store.json('jb_notify') || []; },
    has(id) { return reminders.all().includes(id); },
    toggle(id) {
        const list = reminders.all();
        const i = list.indexOf(id);
        i === -1 ? list.push(id) : list.splice(i, 1);
        store.set('jb_notify', JSON.stringify(list));
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
        store.set('jb_bids', JSON.stringify(DEMO_MY_BIDS.map((b, i) => ({ ...b, ref: receiptRef(), at: now - (i + 1) * 3600e3 }))));
    },
    add(id, amount, ref) {
        const list = myBids.all();
        list.unshift({ id, amount, ref, at: Date.now() });
        store.set('jb_bids', JSON.stringify(list));
    },
    paid() { return store.json('jb_paid') || []; },
    markPaid(id, ref) {
        store.set('jb_paid', JSON.stringify([...myBids.paid(), id]));
        store.set('jb_receipts', JSON.stringify({ ...myBids.receipts(), [id]: ref }));
    },
    receipts() { return store.json('jb_receipts') || {}; }
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
    const menuLink = (href, icon, key, id) =>
        `<a href="${href}" class="${page === id ? 'active' : ''}"><i class="fa-solid ${icon}"></i><span data-i18n="${key}"></span></a>`;
    const navLink = (href, key, id) => `<li><a href="${href}" class="${page === id ? 'active' : ''}" data-i18n="${key}"></a></li>`;
    const header = qs('#site-header');
    if (header) header.outerHTML = `
    <header class="site-header">
        <div class="container header-inner">
            <a href="index.html" class="brand" aria-label="Joobiraa home">JOO<span>BIRAA</span></a>
            <ul class="desktop-nav">
                ${navLink('index.html', 'nav_home', 'home')}
                ${navLink('auctions.html', 'nav_auctions', 'auctions')}
                ${navLink('winners.html', 'nav_winners', 'winners')}
                ${navLink('my-bids.html', 'nav_mybids', 'mybids')}
                ${navLink('faq.html', 'nav_faq', 'faq')}
            </ul>
            <div class="header-actions">
                <button type="button" class="install-pill hidden" data-action="install">
                    <img src="assets/icons/icon-192.png" alt="" width="18" height="18"><span data-i18n="install_btn"></span>
                </button>
                <div class="lang-menu">
                    <button class="lang-pill" type="button" aria-haspopup="listbox" aria-label="Language">
                        <i class="fa-solid fa-globe"></i><span class="code">OM</span><i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <ul class="lang-list" role="listbox">
                        ${LANGS.map(l => `<li><button type="button" data-lang="${l.id}" title="${l.name}" aria-label="${l.name}">${l.code}</button></li>`).join('')}
                    </ul>
                </div>
                <button class="icon-btn theme-btn" type="button" data-action="theme" aria-label="Toggle dark mode"><i data-theme-icon class="fa-solid fa-moon"></i></button>
                <a href="notifications.html" class="icon-btn bell" aria-label="Notifications"><i class="fa-regular fa-bell"></i>${notifs.unread() ? `<span class="bell-dot">${notifs.unread()}</span>` : ''}</a>
                <a href="login.html" class="btn-signin"><i class="fa-solid fa-mobile-screen"></i><span data-i18n="nav_signin"></span></a>
                <a href="account.html" class="avatar" aria-label="Account"><i class="fa-solid fa-user"></i></a>
                <button class="icon-btn menu-btn" type="button" data-action="menu" aria-expanded="false" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
        <nav class="mobile-menu" aria-label="Menu">
            ${menuLink('index.html', 'fa-house', 'nav_home', 'home')}
            ${menuLink('auctions.html', 'fa-store', 'nav_auctions', 'auctions')}
            ${menuLink('winners.html', 'fa-trophy', 'nav_winners', 'winners')}
            ${menuLink('my-bids.html', 'fa-gavel', 'nav_mybids', 'mybids')}
            ${menuLink('impact.html', 'fa-hand-holding-heart', 'title_impact', 'impact')}
            ${menuLink('faq.html', 'fa-circle-question', 'nav_faq', 'faq')}
            <a href="#" class="menu-theme" data-action="theme"><i data-theme-icon class="fa-solid fa-moon"></i><span data-theme-label></span></a>
            <a href="#" class="install-link hidden" data-action="install"><i class="fa-solid fa-download"></i><span data-i18n="install_menu"></span></a>
        </nav>
    </header>`;

    // Inner pages get a back link above the title
    const head = qs('.page-head');
    if (head && page !== 'home') head.insertAdjacentHTML('afterbegin',
        `<a href="index.html" class="back-link" data-action="back"><i class="fa-solid fa-arrow-left"></i> <span data-i18n="back"></span></a>`);

    const tab = (href, icon, key, id, action) =>
        `<a href="${href}" class="${page === id ? 'active' : ''}" ${action ? `data-action="${action}"` : ''}><i class="fa-solid ${icon}"></i><span data-i18n="${key}"></span></a>`;
    document.body.insertAdjacentHTML('beforeend', `
    <nav class="bottom-nav" aria-label="Main">
        ${tab('index.html', 'fa-house', 'nav_home', 'home')}
        ${tab('auctions.html', 'fa-store', 'nav_auctions', 'auctions')}
        ${tab('winners.html', 'fa-trophy', 'nav_winners', 'winners')}
        ${tab('my-bids.html', 'fa-gavel', 'nav_mybids', 'mybids')}
        ${session.user()
            ? tab('account.html', 'fa-user', 'nav_account', 'account')
            : tab('login.html', 'fa-right-to-bracket', 'nav_signin', 'login')}
    </nav>
    <div class="floating-buttons">
        <a href="tel:0912120330" class="float-btn phone-float" aria-label="Call us"><i class="fa-solid fa-phone"></i></a>
        <a href="https://t.me/+251912120330" class="float-btn telegram-float" target="_blank" rel="noopener" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>
    </div>
    <div class="toast" role="status" aria-live="polite"></div>`);

    const footer = qs('#site-footer');
    if (footer) footer.outerHTML = `
    <footer class="site-footer">
        <div class="container footer-grid">
            <div class="footer-brand">
                <a href="index.html" class="brand">JOO<span>BIRAA</span></a>
                <p data-i18n="footer_desc"></p>
            </div>
            <nav class="footer-nav" aria-label="Footer">
                <a href="index.html" data-i18n="nav_home"></a>
                <a href="auctions.html" data-i18n="nav_auctions"></a>
                <a href="my-bids.html" data-i18n="nav_mybids"></a>
            </nav>
            <div class="footer-side">
                <div class="footer-contact">
                    <a href="tel:0912120330"><i class="fa-solid fa-phone"></i> 0912120330</a>
                    <a href="mailto:joobiraa219@gmail.com"><i class="fa-solid fa-envelope"></i> joobiraa219@gmail.com</a>
                </div>
                <div class="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://t.me/+251912120330" target="_blank" rel="noopener" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>
                </div>
            </div>
        </div>
        <div class="container footer-bottom">
            <span>&copy; 2026 Joobiraa</span>
            <span class="footer-legal"><a href="terms.html" data-i18n="footer_terms"></a> · <a href="privacy.html" data-i18n="footer_privacy"></a></span>
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
                <p class="field-hint"><i class="fa-solid fa-circle-info"></i> ${t('min_bid')}</p>
            </div>` : ''}
            <div class="field">
                <span class="field-label">${t('pay_method')}</span>
                <div class="pay-methods">
                    <button type="button" class="pay-method telebirr" data-method="telebirr">
                        <span class="logo"><img src="assets/pay/telebirr.webp" alt="" width="48" height="27"></span><span>Telebirr<small>${t('pay_telebirr_sub')}</small></span>
                    </button>
                    <button type="button" class="pay-method cbe" data-method="cbe">
                        <span class="logo"><img src="assets/pay/cbe.webp" alt="" width="36" height="36" class="app-icon"></span><span>CBE Birr<small>${t('pay_cbe_sub')}</small></span>
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
            ${isBid ? `<p class="hint"><i class="fa-solid fa-ban"></i>${t('pay_nonrefund')}</p>` : ''}
        </div>
        <div data-pay-step="processing" class="pay-result hidden">
            <div class="spinner"></div>
            <h3>${t('pay_processing')}</h3>
            <p>${t('pay_processing_d')}</p>
        </div>
        <div data-pay-step="success" class="pay-result hidden">
            <div class="big-icon"><i class="fa-solid fa-check"></i></div>
            <h3>${t(isBid ? 'pay_success_bid' : 'pay_success_win')}</h3>
            <dl class="receipt">
                <div><dt>${t('pay_amount')}</dt><dd>${chargeTxt} ${cur}</dd></div>
                <div><dt>${t('pay_via')}</dt><dd data-paid-via></dd></div>
                <div><dt>${t('pay_receipt')}</dt><dd class="ref" data-receipt></dd></div>
            </dl>
            <p>${t('pay_success_d')}</p>
            ${isBid ? `<button type="button" class="btn btn-outline btn-block" data-pay-again>${t('btn_bid_again')}</button>` : ''}
        </div>
        <div data-pay-step="failed" class="pay-result failed hidden">
            <div class="big-icon"><i class="fa-solid fa-xmark"></i></div>
            <h3>${t('pay_failed')}</h3>
            <p>${t(isBid ? 'pay_failed_d' : 'pay_failed_win')}</p>
            <button type="button" class="btn btn-gold btn-block" data-pay-retry><i class="fa-solid fa-rotate-right"></i> ${t('pay_retry')}</button>
            <button type="button" class="btn btn-outline btn-block" style="margin-top:10px" data-pay-change>${t('pay_change')}</button>
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
        pay(bidAmount);
    });

    const show = step => qsa('[data-pay-step]', root).forEach(el => el.classList.toggle('hidden', el.dataset.payStep !== step));
    // Simulated USSD/app approval. DEMO: a phone number ending in 00 fails, to show the "not completed" screen.
    // The real app only shows success after the server has verified the payment with Chapa.
    const pay = bidAmount => {
        show('processing');
        setTimeout(() => {
            if (phoneInput.value.endsWith('00')) { show('failed'); return; }
            const ref = receiptRef();
            qs('[data-paid-via]', root).textContent = method === 'cbe' ? 'CBE Birr' : 'Telebirr';
            qs('[data-receipt]', root).textContent = ref;
            show('success');
            if (isBid) { myBids.add(auction.id, bidAmount, ref); auction.bids++; }
            else myBids.markPaid(auction.id, ref);
            if (onDone) onDone();
        }, 1800);
    };
    qs('[data-pay-retry]', root).addEventListener('click', () => qs('[data-pay-confirm]', root).click());
    qs('[data-pay-change]', root).addEventListener('click', () => show('form'));
    const again = qs('[data-pay-again]', root);
    if (again) again.addEventListener('click', () => renderPayForm(root, { auction, kind, onDone }));
}

// Demo receipt number; the real one is the Chapa reference for the payment
function receiptRef() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// ---------- Cards ----------
function favButton(id) {
    const on = favs.has(id);
    return `<button type="button" class="fav-btn ${on ? 'active' : ''}" data-fav="${id}" aria-pressed="${on}" aria-label="${t('lbl_fav')}">
        <i class="fa-${on ? 'solid' : 'regular'} fa-heart"></i></button>`;
}

// The amount box is exactly as wide as the number, so "1.00 ETB" sits centred between − and +
function bidWidth(v) { return `${Math.max(String(v).length, 1) + 0.3}ch`; }
function fitBid(input) { input.style.width = bidWidth(input.value); }
function bidStepper(value = '1.00') {
    return `<div class="bid-stepper">
        <button type="button" data-step="-0.01" aria-label="-0.01"><i class="fa-solid fa-minus"></i></button>
        <label class="bid-field"><input class="bid-input" type="text" inputmode="decimal" value="${value}" style="width:${bidWidth(value)}" aria-label="${t('lbl_bid_amount')}"><span class="unit">${t('currency')}</span></label>
        <button type="button" data-step="0.01" aria-label="+0.01"><i class="fa-solid fa-plus"></i></button>
    </div>`;
}

function auctionCard(a) {
    const href = `bid.html?id=${a.id}`;
    const ended = a.status === 'ended';
    const badge = {
        live: `<span class="badge badge-live"><i class="fa-solid fa-gavel"></i> ${t('live')}</span>`,
        upcoming: `<span class="badge badge-upcoming"><i class="fa-regular fa-clock"></i> ${t('upcoming')}</span>`,
        ended: `<span class="badge badge-ended"><i class="fa-solid fa-flag-checkered"></i> ${t('ended')}</span>`
    }[a.status];
    const bottom = {
        live: () => `${timerBoxes(a.endsAt, 'card-timer')}
        ${bidStepper()}
        <button type="button" class="btn btn-gold btn-block" data-bid="${a.id}">${t('btn_bid')}</button>`,
        upcoming: () => `<div class="card-timer-label">${t('starts_in')}</div>${timerBoxes(a.startsAt, 'card-timer upcoming')}
        ${notifyButton(a.id)}`,
        ended: () => `<div class="winner-strip card-winner"><i class="fa-solid fa-trophy"></i> ${t('lbl_winner')}: <strong>${winnerName(a)}</strong> <span class="masked">${maskPhone(a.winner.phone)}</span></div>
        <a href="${href}" class="btn btn-outline btn-block">${t('btn_results')}</a>`
    }[a.status]();
    return `
    <article class="auction-card" data-bid-scope>
        <div class="card-top">${badge}</div>
        <div class="card-media">
            <a href="${href}"><img class="card-img ph" src="${a.images[0]}" alt="${L(a.name)}" loading="lazy"></a>
            ${favButton(a.id)}
        </div>
        <a class="card-title" href="${href}">${L(a.name)}</a>
        <div class="card-stats">
            <div class="stat-item">
                <span class="stat-label">${t(ended ? 'lbl_winning_bid' : 'lbl_current_bid')}</span>
                <span class="stat-value price">${fmtETB(ended ? a.winner.bid : a.price)} <small>${t('currency')}</small></span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('lbl_bids')}</span>
                <span class="stat-value count"><i class="fa-solid fa-users"></i> ${compact(a.bids)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('stat_views')}</span>
                <span class="stat-value views"><i class="fa-regular fa-eye"></i> ${compact(a.views)}</span>
            </div>
        </div>
        ${bottom}
    </article>`;
}

// Countdown as 4 boxes (days / hours / mins / secs) — detail page and cards
function timerBoxes(ends, cls = '') {
    return `
    <div class="detail-timer-box ${cls}" data-ends="${ends}" data-style="boxes">
        <div><strong data-t="d">--</strong><small>${t('d_days')}</small></div>
        <div><strong data-t="h">--</strong><small>${t('d_hours')}</small></div>
        <div><strong data-t="m">--</strong><small>${t('d_mins')}</small></div>
        <div><strong data-t="s">--</strong><small>${t('d_secs')}</small></div>
    </div>`;
}

function notifyButton(id) {
    const on = reminders.has(id);
    return `<button type="button" class="btn btn-block ${on ? 'btn-notify-on' : 'btn-outline'}" data-notify="${id}" aria-pressed="${on}">
        <i class="fa-${on ? 'solid fa-bell' : 'regular fa-bell'}"></i> ${t(on ? 'notify_on' : 'notify_me')}${on ? ' <i class="fa-solid fa-check"></i>' : ''}</button>`;
}

// Winners gallery card: the winner is shown by masked phone, never the full number
function winnerCard(a) {
    return `
    <a class="winner-card" href="bid.html?id=${a.id}">
        <div class="winner-trophy"><i class="fa-solid fa-trophy"></i></div>
        <img class="ph" src="${a.images[0]}" alt="${L(a.name)}" loading="lazy">
        <p class="winner-item">${L(a.name)}</p>
        <div class="winner-name">${winnerName(a)}</div>
        <div class="winner-phone masked">${maskPhone(a.winner.phone)}</div>
        <div class="winner-bid">${fmtETB(a.winner.bid)} ${t('currency')}</div>
    </a>`;
}

// Winner block: crown, name, masked phone and the winning amount — detail page and bid history
function winnerBox(a, cls = '') {
    return `
    <div class="h-winner ${cls}">
        <span class="crown"><i class="fa-solid fa-crown"></i></span>
        <div class="who">
            <small>${t(a.winner.name === 'me' ? 'winner_you' : 'lbl_winner')}</small>
            <strong>${winnerName(a)}</strong>
            <span class="masked"><i class="fa-solid fa-phone"></i> ${maskPhone(a.winner.phone)}</span>
        </div>
        <div class="h-winner-bid"><small>${t('lbl_winning_bid')}</small>${fmtETB(a.winner.bid)} <span>${t('currency')}</span></div>
    </div>`;
}

// ---------- Bid history (ended auctions, inside a closed-by-default box) ----------
const HISTORY_PAGE = 15;
const CHIPS_SHOWN = 6;
function historyHTML(a, shown = HISTORY_PAGE) {
    const h = bidHistory(a);
    const stat = (v, k, cls = '') => `<div class="h-stat"><strong class="${cls}">${v}</strong><span>${t(k)}</span></div>`;
    const chip = p => `<span class="phone-chip">${maskPhone(p)}</span>`;
    const rows = h.rows.slice(0, shown).map(r => {
        const more = r.phones.length - CHIPS_SHOWN;
        const icon = r.winner ? 'fa-crown' : r.n === 1 ? 'fa-circle-check' : 'fa-circle-xmark';
        const label = r.winner ? t('lbl_winner') : t(r.n === 1 ? 'unique_yes' : 'unique_no');
        return `
        <li class="h-row ${r.winner ? 'is-winner' : ''}">
            <div class="h-row-top">
                <span class="h-amount">${fmtETB(r.amount)} <small>${t('currency')}</small></span>
                <span class="h-count"><i class="fa-solid fa-users"></i> ${r.n}</span>
                <span class="h-unique ${r.n === 1 ? 'yes' : 'no'}"><i class="fa-solid ${icon}"></i> ${label}</span>
            </div>
            <div class="h-phones">
                ${r.phones.slice(0, CHIPS_SHOWN).map(chip).join('')}
                ${more > 0 ? `<span class="h-phones-more hidden">${r.phones.slice(CHIPS_SHOWN).map(chip).join('')}</span><button type="button" class="phone-chip more" data-more-phones data-label="+${more}">+${more}</button>` : ''}
            </div>
        </li>`;
    }).join('');
    const left = h.rows.length - shown;
    return `
        <div class="h-stats">
            ${stat(h.total.toLocaleString('en'), 'h_total')}
            ${stat(h.repeated.toLocaleString('en'), 'h_repeated')}
            ${stat(h.unique, 'h_unique')}
            ${stat(fmtETB(a.winner.bid), 'lbl_winning_bid', 'win')}
        </div>
        ${winnerBox(a)}
        <ol class="h-list">${rows}</ol>
        ${left > 0 ? `<button type="button" class="btn btn-outline btn-block" data-history-more="${shown + HISTORY_PAGE}">${t('show_more')(left.toLocaleString('en'))}</button>` : ''}`;
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
    const header = qs('.site-header');
    if (header && header.classList.contains('menu-open') && !e.target.closest('.mobile-menu, .menu-btn')) qs('.menu-btn').click();

    const action = e.target.closest('[data-action]');
    if (action) {
        const a = action.dataset.action;
        if (a === 'theme') { e.preventDefault(); setTheme(currentTheme() === 'dark' ? 'light' : 'dark'); applyTranslations(); }
        if (a === 'signout') { session.signOut(); location.href = 'index.html'; }
        if (a === 'install') { e.preventDefault(); installApp(); }
        if (a === 'menu') {
            const open = qs('.site-header').classList.toggle('menu-open');
            action.setAttribute('aria-expanded', open);
            action.querySelector('i').className = `fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`;
        }
        if (a === 'back') {
            // Go back if we came from inside the site, otherwise to the link's own target
            e.preventDefault();
            const internal = document.referrer && new URL(document.referrer).host === location.host && history.length > 1;
            if (internal) history.back(); else location.href = action.getAttribute('href');
        }
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

    // Pointer taps are handled on pointerdown (with hold-to-repeat); this covers keyboard presses
    const step = e.target.closest('[data-step]');
    if (step) { if (e.detail === 0) stepBid(step); return; }

    const notify = e.target.closest('[data-notify]');
    if (notify) {
        if (!session.user()) { store.set('jb_toast', t('signin_required')); location.href = 'login.html?next=' + encodeURIComponent(location.pathname.split('/').pop() + location.search); return; }
        const on = reminders.toggle(notify.dataset.notify);
        qsa(`[data-notify="${notify.dataset.notify}"]`).forEach(b => { b.outerHTML = notifyButton(notify.dataset.notify); });
        if (on) toast(t('notify_toast'));
        return;
    }

    const morePhones = e.target.closest('[data-more-phones]');
    if (morePhones) {
        const open = morePhones.previousElementSibling.classList.toggle('hidden') === false;
        morePhones.textContent = open ? t('show_less') : morePhones.dataset.label;
        return;
    }

    // Card "Place bid" goes to the detail page, where payment happens
    const bid = e.target.closest('[data-bid]');
    if (bid) {
        const input = qs('.bid-input', bid.closest('[data-bid-scope]'));
        location.href = `bid.html?id=${bid.dataset.bid}&amount=${encodeURIComponent(input ? input.value : '1.00')}#pay`;
    }
});

// The phone menu closes by itself once the page starts scrolling
window.addEventListener('scroll', () => {
    const header = qs('.site-header');
    if (header && header.classList.contains('menu-open')) qs('.menu-btn').click();
}, { passive: true });

// +/- change the bid by 0.01; holding the button keeps going and speeds up
function stepBid(btn) {
    const input = qs('.bid-input', btn.closest('.bid-stepper'));
    const cents = Math.round((parseFloat(input.value) || 1) * 100) + Math.round(Number(btn.dataset.step) * 100);
    input.value = fmtETB(Math.max(100, cents) / 100);
    fitBid(input);
}
let stepTimer;
const stopStep = () => clearTimeout(stepTimer);
document.addEventListener('pointerdown', e => {
    const btn = e.target.closest('[data-step]');
    if (!btn || e.button > 0) return;
    e.preventDefault();
    stepBid(btn);
    let delay = 400;
    const repeat = () => { stepBid(btn); delay = Math.max(30, delay * 0.85); stepTimer = setTimeout(repeat, delay); };
    stepTimer = setTimeout(repeat, delay);
    btn.addEventListener('pointerleave', stopStep, { once: true });
});
['pointerup', 'pointercancel'].forEach(ev => document.addEventListener(ev, stopStep));
window.addEventListener('blur', stopStep);

// List photos show a shimmer until they arrive (class "ph"); errors stop the shimmer too
['load', 'error'].forEach(ev => document.addEventListener(ev, e => {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('ph')) e.target.classList.add('loaded');
}, true));

// Keep bid inputs to a valid money format
document.addEventListener('input', e => {
    if (!e.target.classList || !e.target.classList.contains('bid-input')) return;
    let v = e.target.value.replace(/[^\d.]/g, '');
    const [int, ...rest] = v.split('.');
    if (rest.length) v = int + '.' + rest.join('').slice(0, 2);
    e.target.value = v;
    fitBid(e.target);
});
document.addEventListener('focusout', e => {
    if (e.target.classList && e.target.classList.contains('bid-input')) {
        const v = parseFloat(e.target.value);
        e.target.value = fmtETB(isNaN(v) || v < 1 ? 1 : v);
        fitBid(e.target);
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

// ---------- Install as an app (PWA) ----------
// Android/desktop Chrome fire `beforeinstallprompt`; iPhone Safari has no prompt, so we show how to add it by hand.
let installEvent = null;
let installIOS = false;
const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;

// Small "Install" pill in the header — sits in the bar, never covers the page
function showInstall({ ios = false } = {}) {
    installIOS = ios;
    qsa('.install-pill, .install-link').forEach(el => el.classList.remove('hidden'));
}

async function installApp() {
    // iPhone: no prompt exists, so explain the two taps
    if (installIOS) {
        openModal(`${modalHead(t('install_title'))}<p class="install-how"><img src="assets/icons/icon-192.png" alt="" width="40" height="40"> ${t('install_ios')}</p>`);
        return;
    }
    if (!installEvent) return;
    installEvent.prompt();
    await installEvent.userChoice;
    installEvent = null;
    qsa('.install-pill, .install-link').forEach(el => el.classList.add('hidden'));
}

function initInstall() {
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js');
    if (isStandalone()) return;
    window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvent = e; showInstall(); });
    window.addEventListener('appinstalled', () => { qsa('.install-pill, .install-link').forEach(el => el.classList.add('hidden')); toast('✓ Joobiraa'); });
    if (isIOS()) showInstall({ ios: true });
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
    initInstall();
});
