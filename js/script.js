// Language dictionaries
const dict = {
    'am': {
        'nav_home': 'መነሻ',
        'nav_auctions': 'ጨረታዎች',
        'nav_faq': 'ተደጋግመው የሚጠየቁ ጥያቄዎች',
        'nav_contact': 'ያግኙን',
        'nav_login': 'ግባ / ተመዝገብ',
        'title_auctions': 'የቀረቡ ጨረታዎች',
        'title_faq': 'ተደጋግመው የሚጠየቁ ጥያቄዎች',
        'subtitle_faq': 'ስለ Joobira ጨረታ እና ክፍያ መረጃዎችን እዚህ ያገኛሉ',
        'btn_bid': 'የጨረታ ዋጋ ያቅርቡ',
        'lbl_current_bid': 'የአሁኑ ዋጋ',
        'lbl_bids': 'የጨረታ ብዛት',
        'currency': 'ብር',
        'time_format': (d, h, m, s) => `${d}ቀን : ${h}ሰ : ${m}ደ : ${s}ሴ`,
        'search_placeholder': 'በጨረታ መፈለግ...',
        'footer_about': 'ስለ እኛ',
        'footer_terms': 'ደንብና ግዴታዎች',
        'footer_privacy': 'የግላዊነት ፖሊሲ',
        'footer_desc': 'Joobiraa (ጁቢራ) አዳዲስ እቃዎችን በርካሽ ዋጋ የሚያገኙበት ትልቁ የጨረታ መድረክ።',
        
        'title_winners': 'የአሸናፊዎች ማዕከለ-ስዕላት (Winners Gallery)',
        'desc_winners': 'እውነተኛ አሸናፊዎች እና የጨረታ ውጤቶች',
        'title_impact': 'የማህበረሰብ ተፅእኖ (Community Impact)',
        'desc_impact': 'ከእያንዳንዱ ጨረታ 20% ለማህበረሰቡ ድጋፍ ይውላል',
        'lbl_winner': 'አሸናፊ (Winner)',
        'lbl_winning_bid': 'ያሸነፈበት ዋጋ',
        'lbl_donated': 'እስከ አሁን የተለገሰው (ETB)',
        'lbl_target': 'የሩብ ዓመቱ ግብ (Target): 640,000 ETB'
    },
    'en': {
        'nav_home': 'Home',
        'nav_auctions': 'Auctions',
        'nav_faq': 'FAQ',
        'nav_contact': 'Contact Us',
        'nav_login': 'Login / Register',
        'title_auctions': 'Live Auctions',
        'title_faq': 'Frequently Asked Questions',
        'subtitle_faq': 'Find information about Joobira auctions and payments here',
        'btn_bid': 'Place Bid',
        'lbl_current_bid': 'Current Bid',
        'lbl_bids': 'Total Bids',
        'currency': 'ETB',
        'time_format': (d, h, m, s) => `${d}d : ${h}h : ${m}m : ${s}s`,
        'search_placeholder': 'Search auctions...',
        'footer_about': 'About Us',
        'footer_terms': 'Terms & Conditions',
        'footer_privacy': 'Privacy Policy',
        'footer_desc': 'Joobiraa is the largest auction platform where you can find brand new items at low prices.',

        'title_winners': 'Winners Gallery',
        'desc_winners': 'Real people, real items, real winning bids',
        'title_impact': 'Community Impact',
        'desc_impact': '20% of every bid service fee goes directly to community support',
        'lbl_winner': 'Winner',
        'lbl_winning_bid': 'Winning Bid',
        'lbl_donated': 'Contributed to date (ETB)',
        'lbl_target': 'Quarter Target: 640,000 ETB'
    },
    'om': {
        'nav_home': 'Mana',
        'nav_auctions': 'Caalbaasii',
        'nav_faq': 'Gaaffiilee',
        'nav_contact': 'Nu Qunnamaa',
        'nav_login': 'Seenaa / Galmaa\'aa',
        'title_auctions': 'Caalbaasiiwwan Ammaa',
        'title_faq': 'Gaaffiilee Yeroo Baay\'ee Gaafataman',
        'subtitle_faq': 'Odeeffannoo waa\'ee Joobiraa fi kaffaltii asitti argattu',
        'btn_bid': 'Gatii Dhiheessi',
        'lbl_current_bid': 'Gatii Ammaa',
        'lbl_bids': 'Baay\'ina Caalbaasii',
        'currency': 'ETB',
        'time_format': (d, h, m, s) => `${d}g : ${h}s : ${m}d : ${s}s`,
        'search_placeholder': 'Caalbaasii barbaadi...',
        'footer_about': 'Waa\'ee Keenya',
        'footer_terms': 'Seerota fi Haalawwan',
        'footer_privacy': 'Imaammata Mateenyaa',
        'footer_desc': 'Joobiraa iddoo caalbaasii guddaa meeshaalee haaraa gatii rakashaan itti argattaniidha.',
        
        'title_winners': 'Galaarii Mo\'attootaa',
        'desc_winners': 'Namoota dhugaa, meeshaalee dhugaa, gatii mo\'ate',
        'title_impact': 'Dhiibbaa Hawaasaa',
        'desc_impact': 'Kaffaltii tajaajilaa caalbaasii irraa 20% kallattiin deeggarsa hawaasaaf oola',
        'lbl_winner': 'Mo\'ataa',
        'lbl_winning_bid': 'Gatii Mo\'ate',
        'lbl_donated': 'Hanga ammaatti kan arjoomame (ETB)',
        'lbl_target': 'Kaayyoo Kurmaanaa: 640,000 ETB'
    }
};

const langs = ['en', 'am', 'om'];
const langLabels = {'en': 'EN', 'am': 'አማ', 'om': 'OR'};
let currentLang = localStorage.getItem("lang") || "om"; let currentLangIndex = langs.indexOf(currentLang);

function changeLanguage(lang) {
    currentLang = lang;
    currentLangIndex = langs.indexOf(lang);
    updateTranslations();
    document.documentElement.lang = currentLang; localStorage.setItem("lang", currentLang);
    const dropdown = document.getElementById('langDropdown');
    if(dropdown && dropdown.value !== lang) {
        dropdown.value = lang;
    }
}

function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[currentLang][key]) {
            el.textContent = dict[currentLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[currentLang][key]) {
            el.placeholder = dict[currentLang][key];
        }
    });

    document.querySelectorAll('.currency-lbl').forEach(el => {
        el.textContent = dict[currentLang]['currency'];
    });

    // Special multiple span elements
    document.querySelectorAll('[data-am][data-en]').forEach(el => {
        const omText = el.getAttribute('data-om');
        if(currentLang === 'am') {
            el.textContent = el.getAttribute('data-am');
        } else if(currentLang === 'en') {
            el.textContent = el.getAttribute('data-en');
        } else if(currentLang === 'om') {
            el.textContent = omText || el.getAttribute('data-en'); // fallback to en if om missing
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateTranslations();
    
    // Set initial label on load
    const dropdown = document.getElementById('langDropdown');
    if(dropdown) {
        dropdown.value = currentLang;
    }

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if(otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    const minuses = document.querySelectorAll('.bid-minus');
    const pluses = document.querySelectorAll('.bid-plus');

    minuses.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.parentElement.querySelector('.bid-input');
            let val = parseInt(input.value) || 1;
            if(val > 1) input.value = val - 1;
        });
    });

    pluses.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.parentElement.querySelector('.bid-input');
            let val = parseInt(input.value) || 1;
            input.value = val + 1;
        });
    });
});

