// Demo data for the design prototype. In the real app this comes from the API.
// `endsIn` is seconds from page load; `images` is the 3-photo gallery for the detail page.
// NOTE: gallery photos reuse the main product shot until real multi-angle photos exist.

const IMG = 'assets/images/';

const CATEGORIES = [
    { id: 'all',       icon: 'fa-border-all',      am: 'ሁሉም',          en: 'All',         om: 'Hunda' },
    { id: 'phones',    icon: 'fa-mobile-screen',   am: 'ስልኮች',         en: 'Phones',      om: 'Bilbilaa' },
    { id: 'computers', icon: 'fa-laptop',          am: 'ኮምፒውተሮች',     en: 'Computers',   om: 'Kompiitara' },
    { id: 'home',      icon: 'fa-house-chimney',   am: 'የቤት እቃዎች',     en: 'Home',        om: 'Meeshaa Manaa' },
    { id: 'vehicles',  icon: 'fa-bicycle',         am: 'ተሽከርካሪዎች',     en: 'Vehicles',    om: 'Konkolaataa' }
];

const AUCTIONS = [
    {
        id: 's26', cat: 'phones', status: 'live', endsIn: 15 * 86400 + 13 * 3600 + 4 * 60,
        name: { am: 'ሳምሰንግ ጋላክሲ S26 አልትራ', en: 'Samsung Galaxy S26 Ultra', om: 'Samsung Galaxy S26 Ultra' },
        images: [IMG + 'images (1).jpeg', IMG + 'images (1).jpeg', IMG + 'images (1).jpeg'],
        price: 75, bids: 223, views: 9200,
        desc: {
            am: 'አዲስ፣ ያልተከፈተ ሳምሰንግ ጋላክሲ S26 አልትራ ከS Pen ጋር። የ1 ዓመት ዋስትና ያለው።',
            en: 'Brand new, sealed Samsung Galaxy S26 Ultra with S Pen. Comes with a 1-year official warranty.',
            om: 'Samsung Galaxy S26 Ultra haaraa, hin banamne, S Pen waliin. Wabii waggaa 1 qaba.'
        },
        specs: [
            ['spec_brand', 'Samsung'], ['spec_model', 'Galaxy S26 Ultra'], ['spec_storage', '512 GB'],
            ['spec_ram', '12 GB'], ['spec_display', '6.9" Dynamic AMOLED 2X'], ['spec_camera', '200 MP'],
            ['spec_battery', '5,000 mAh'], ['spec_condition', 'cond_new'], ['spec_warranty', '12 months']
        ]
    },
    {
        id: 'ebike', cat: 'vehicles', status: 'live', endsIn: 14 * 86400 + 13 * 3600 + 4 * 60,
        name: { am: 'B26 ኤሌክትሪክ ብስክሌት', en: 'B26 Electric Fat-Tire Bike', om: 'B26 Biskiliitii Elektirikii' },
        images: [IMG + 'images (2).jpeg', IMG + 'images (2).jpeg', IMG + 'images (2).jpeg'],
        price: 120, bids: 221, views: 8500,
        desc: {
            am: 'በአንድ ቻርጅ እስከ 40 ኪ.ሜ የሚጓዝ ኤሌክትሪክ ብስክሌት። ለከተማ እና ለጠጠር መንገድ ተስማሚ።',
            en: 'Fat-tire electric bike with up to 40 km range per charge. Built for city streets and gravel roads.',
            om: 'Biskiliitii elektirikii chaarjii tokkoon hanga km 40 deemu. Karaa magaalaa fi koronyaaf mijataa.'
        },
        specs: [
            ['spec_brand', 'B26'], ['spec_motor', '750 W'], ['spec_range', '40 km'],
            ['spec_battery', '48 V / 13 Ah'], ['spec_speed', '35 km/h'], ['spec_condition', 'cond_new'], ['spec_warranty', '6 months']
        ]
    },
    {
        id: 'lgwasher', cat: 'home', status: 'live', endsIn: 13 * 86400 + 13 * 3600 + 4 * 60,
        name: { am: 'አልጂ የልብስ ማጠቢያ ማሽን 18 ኪ.ግ', en: 'LG TwinTub Washing Machine 18kg', om: 'LG Maashinii Uffata Miiccuu 18kg' },
        images: [IMG + 'images (3).jpeg', IMG + 'images (3).jpeg', IMG + 'images (3).jpeg'],
        price: 45, bids: 222, views: 7500,
        desc: {
            am: 'ባለ ሁለት ገንዳ ከፊል-አውቶማቲክ ማጠቢያ ማሽን። ማጠብ እና ማድረቅ በአንድ ጊዜ።',
            en: 'Semi-automatic twin-tub washer. Wash and spin-dry at the same time.',
            om: 'Maashinii miiccuu boolla lamaa, walakkaa ofumaan hojjatu. Miiccuu fi gogsuu yeroo tokkotti.'
        },
        specs: [
            ['spec_brand', 'LG'], ['spec_model', 'P2061RWPT'], ['spec_capacity', '18 kg'],
            ['spec_type', 'Twin tub'], ['spec_condition', 'cond_new'], ['spec_warranty', '24 months']
        ]
    },
    {
        id: 'dell', cat: 'computers', status: 'live', endsIn: 2 * 86400 + 5 * 3600 + 30 * 60,
        name: { am: 'ዴል ላፕቶፕ ኮር i7', en: 'Dell Laptop Core i7', om: 'Dell Laptop Core i7' },
        images: [IMG + 'images.jpeg', IMG + 'images.jpeg', IMG + 'images.jpeg'],
        price: 60, bids: 142, views: 6100,
        desc: {
            am: 'ለሥራ እና ለትምህርት የሚሆን ፈጣን ዴል ላፕቶፕ።',
            en: 'Fast Dell laptop for work and study.',
            om: 'Laptop Dell saffisaa hojii fi barnootaaf.'
        },
        specs: [
            ['spec_brand', 'Dell'], ['spec_cpu', 'Intel Core i7 (13th gen)'], ['spec_ram', '16 GB'],
            ['spec_storage', '512 GB SSD'], ['spec_display', '15.6" FHD'], ['spec_condition', 'cond_new'], ['spec_warranty', '12 months']
        ]
    },
    {
        id: 'iphone17', cat: 'phones', status: 'live', endsIn: 6 * 3600 + 12 * 60,
        name: { am: 'አይፎን 17 ፕሮ ማክስ', en: 'iPhone 17 Pro Max', om: 'iPhone 17 Pro Max' },
        images: [IMG + 'images (4).jpeg', IMG + 'images (4).jpeg', IMG + 'images (4).jpeg'],
        price: 90, bids: 310, views: 12400,
        desc: {
            am: 'አዲስ አይፎን 17 ፕሮ ማክስ፣ 256GB።',
            en: 'Brand new iPhone 17 Pro Max, 256GB.',
            om: 'iPhone 17 Pro Max haaraa, 256GB.'
        },
        specs: [
            ['spec_brand', 'Apple'], ['spec_model', 'iPhone 17 Pro Max'], ['spec_storage', '256 GB'],
            ['spec_display', '6.9" OLED'], ['spec_condition', 'cond_new'], ['spec_warranty', '12 months']
        ]
    },

    // ---- Upcoming (bidding opens when `startsIn` runs out) ----
    {
        id: 'tv65', cat: 'home', status: 'upcoming', startsIn: 1 * 86400 + 4 * 3600,
        name: { am: 'ሳምሰንግ 65" ስማርት ቲቪ', en: 'Samsung 65" Smart TV', om: 'Samsung 65" Smart TV' },
        images: [IMG + 'images (3).jpeg', IMG + 'images (3).jpeg', IMG + 'images (3).jpeg'],
        price: 80, bids: 0, views: 2100,
        desc: { am: 'በቅርቡ የሚጀምር ጨረታ።', en: 'Auction starting soon.', om: 'Caalbaasii dhiyootti jalqabu.' },
        specs: [['spec_brand', 'Samsung'], ['spec_display', '65" 4K UHD'], ['spec_condition', 'cond_new']]
    },
    {
        id: 'ps5', cat: 'computers', status: 'upcoming', startsIn: 3 * 86400 + 9 * 3600,
        name: { am: 'ፕሌይስቴሽን 5', en: 'PlayStation 5 Slim', om: 'PlayStation 5 Slim' },
        images: [IMG + 'images.jpeg', IMG + 'images.jpeg', IMG + 'images.jpeg'],
        price: 70, bids: 0, views: 1800,
        desc: { am: 'በቅርቡ የሚጀምር ጨረታ።', en: 'Auction starting soon.', om: 'Caalbaasii dhiyootti jalqabu.' },
        specs: [['spec_brand', 'Sony'], ['spec_storage', '1 TB'], ['spec_condition', 'cond_new']]
    },

    // ---- Ended auctions (winners gallery + My Bids history) ----
    {
        id: 'w-s26', cat: 'phones', status: 'ended', winner: { name: 'Fikru', bid: 7.38, phone: '911482375' },
        name: { am: 'ሳምሰንግ ጋላክሲ S26', en: 'Samsung Galaxy S26', om: 'Samsung Galaxy S26' },
        images: [IMG + 'images (1).jpeg', IMG + 'images (1).jpeg', IMG + 'images (1).jpeg'],
        price: 75, bids: 4980, views: 15000,
        desc: { am: 'የተጠናቀቀ ጨረታ።', en: 'Completed auction.', om: 'Caalbaasii xumurame.' },
        specs: [['spec_brand', 'Samsung'], ['spec_storage', '256 GB'], ['spec_condition', 'cond_new']]
    },
    {
        id: 'w-ebike', cat: 'vehicles', status: 'ended', winner: { name: 'Tsega', bid: 4.17, phone: '922617066' },
        name: { am: 'ኤሌክትሪክ ብስክሌት', en: 'Electric Bike', om: 'Biskiliitii Elektirikii' },
        images: [IMG + 'images (2).jpeg', IMG + 'images (2).jpeg', IMG + 'images (2).jpeg'],
        price: 120, bids: 3020, views: 9800,
        desc: { am: 'የተጠናቀቀ ጨረታ።', en: 'Completed auction.', om: 'Caalbaasii xumurame.' },
        specs: [['spec_brand', 'B26'], ['spec_range', '40 km'], ['spec_condition', 'cond_new']]
    },
    {
        id: 'w-washer', cat: 'home', status: 'ended', winner: { name: 'Yadeta', bid: 9.16, phone: '713390496' },
        name: { am: 'አልጂ ማጠቢያ ማሽን', en: 'LG Washer', om: 'LG Maashinii Uffata Miiccuu' },
        images: [IMG + 'images (3).jpeg', IMG + 'images (3).jpeg', IMG + 'images (3).jpeg'],
        price: 45, bids: 4410, views: 8800,
        desc: { am: 'የተጠናቀቀ ጨረታ።', en: 'Completed auction.', om: 'Caalbaasii xumurame.' },
        specs: [['spec_brand', 'LG'], ['spec_capacity', '18 kg'], ['spec_condition', 'cond_new']]
    },
    {
        id: 'w-iphone', cat: 'phones', status: 'ended', winner: { name: 'Dawit', bid: 4.84, phone: '944105812' },
        name: { am: 'አይፎን 17', en: 'iPhone 17 Pro Max', om: 'iPhone 17' },
        images: [IMG + 'images (4).jpeg', IMG + 'images (4).jpeg', IMG + 'images (4).jpeg'],
        price: 90, bids: 6120, views: 17000,
        desc: { am: 'የተጠናቀቀ ጨረታ።', en: 'Completed auction.', om: 'Caalbaasii xumurame.' },
        specs: [['spec_brand', 'Apple'], ['spec_storage', '256 GB'], ['spec_condition', 'cond_new']]
    },
    // Won by the signed-in demo user — drives the "Pay now" flow in My Bids
    {
        id: 'm-dell', cat: 'computers', status: 'ended', winner: { name: 'me', bid: 3.42, phone: '912345678' },
        name: { am: 'ዴል ላፕቶፕ ኮር i5', en: 'Dell Laptop Core i5', om: 'Dell Laptop Core i5' },
        images: [IMG + 'images.jpeg', IMG + 'images.jpeg', IMG + 'images.jpeg'],
        price: 60, bids: 1880, views: 5200,
        desc: { am: 'የተጠናቀቀ ጨረታ።', en: 'Completed auction.', om: 'Caalbaasii xumurame.' },
        specs: [['spec_brand', 'Dell'], ['spec_cpu', 'Intel Core i5'], ['spec_condition', 'cond_new']]
    }
];

// Seeded into localStorage on first sign-in so My Bids has something to show
const DEMO_MY_BIDS = [
    { id: 's26', amount: 7.12 }, { id: 's26', amount: 12.05 }, { id: 's26', amount: 19.40 },
    { id: 'iphone17', amount: 3.33 },
    { id: 'w-ebike', amount: 6.10 }, { id: 'w-ebike', amount: 8.75 },
    { id: 'm-dell', amount: 3.42 }, { id: 'm-dell', amount: 5.90 }
];

const PAGE_LOADED_AT = Date.now();
AUCTIONS.forEach((a, i) => {
    if (a.status === 'live') a.endsAt = PAGE_LOADED_AT + a.endsIn * 1000;
    if (a.status === 'upcoming') a.startsAt = PAGE_LOADED_AT + a.startsIn * 1000;
    a.code = String(i + 1).padStart(2, '0'); // auction number — the API will supply this
});

function getAuction(id) { return AUCTIONS.find(a => a.id === id); }

// Demo bid history for an ended auction (the API will return the real one).
// Every amount below the winning bid was picked by 2+ people, so the winner's amount
// is the lowest one picked only once. Seeded by id so it is the same on every visit.
function bidHistory(a) {
    if (a._history) return a._history;
    let seed = [...a.id].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
    const rand = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32;
    const phone = () => '9' + String(Math.floor(rand() * 1e8)).padStart(8, '0');
    const rows = [];
    const winCents = Math.round(a.winner.bid * 100);
    const below = winCents - 100;
    const avg = Math.max(2.2, (a.bids * 0.85) / Math.max(1, below));
    let used = 1;
    for (let c = 100; c < winCents; c++) {
        const n = 2 + Math.floor(rand() * (avg - 2) * 2);
        rows.push({ amount: c / 100, n });
        used += n;
    }
    rows.push({ amount: a.winner.bid, n: 1, winner: true });
    for (let c = winCents + 1; used < a.bids; c++) {
        const n = Math.min(a.bids - used, rand() < 0.45 ? 1 : 2 + Math.floor(rand() * 4));
        rows.push({ amount: c / 100, n });
        used += n;
    }
    rows.forEach(r => { r.phones = r.winner ? [a.winner.phone] : Array.from({ length: r.n }, phone); });
    const unique = rows.filter(r => r.n === 1).length;
    return (a._history = { rows, total: used, unique, repeated: used - unique });
}
