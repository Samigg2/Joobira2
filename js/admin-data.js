// Demo data for the admin prototype. In the real app all of this comes from the API.
// Built on AUCTIONS / bidHistory() from data.js; seeded so it looks the same on every visit.

let admSeed = 20261004;
const admRand = () => (admSeed = (admSeed * 1664525 + 1013904223) >>> 0) / 2 ** 32;
const admPick = list => list[Math.floor(admRand() * list.length)];
const admPhone = () => admPick(['9', '9', '9', '7']) + String(Math.floor(admRand() * 1e8)).padStart(8, '0');
const admRef = () => Array.from({ length: 10 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.floor(admRand() * 32)]).join('');
const DAY = 86400e3;

// A draft auction exists only in the admin
AUCTIONS.push({
    id: 'd-fridge', cat: 'home', status: 'draft', price: 55, bids: 0, views: 0,
    name: { am: 'ሳምሰንግ ፍሪጅ 300 ሊትር', en: 'Samsung Fridge 300L', om: 'Samsung Firijii 300L' },
    images: [IMG + 'images (3).jpeg', IMG + 'images (3).jpeg', IMG + 'images (3).jpeg'],
    desc: { am: 'ረቂቅ', en: 'Draft', om: 'Qophii' },
    specs: [['spec_brand', 'Samsung'], ['spec_capacity', '300 L'], ['spec_condition', 'cond_new']],
    code: String(AUCTIONS.length + 1).padStart(2, '0'), startsIn: 5 * 86400
});
// Start/end times for every auction (live: started days ago; ended: finished days ago)
AUCTIONS.forEach((a, i) => {
    if (a.status === 'live') { a.startsAt = a.endsAt - 21 * DAY; }
    if (a.status === 'upcoming') { a.endsAt = a.startsAt + 14 * DAY; }
    if (a.status === 'ended') { a.endsAt = PAGE_LOADED_AT - ({ 'w-s26': 16, 'w-ebike': 9, 'w-washer': 7, 'w-iphone': 1, 'm-dell': 2 }[a.id] || 10) * DAY; a.startsAt = a.endsAt - 21 * DAY; }
    if (a.status === 'draft') { a.startsAt = PAGE_LOADED_AT + a.startsIn * 1000; a.endsAt = a.startsAt + 14 * DAY; }
});

const ADMIN_ACCOUNTS = [
    { name: 'Samuel G.', email: 'owner@joobiraa.et', phone: '912120330', role: 'owner', lastLogin: PAGE_LOADED_AT - 10 * 60e3 },
    { name: 'Meron T.', email: 'meron@joobiraa.et', phone: '911458210', role: 'staff', lastLogin: PAGE_LOADED_AT - 3 * 3600e3 },
    { name: 'Chala B.', email: 'chala@joobiraa.et', phone: '922310774', role: 'staff', lastLogin: PAGE_LOADED_AT - 2 * DAY }
];

const ADM_NAMES = ['Fikru Alemu', 'Tsega Haile', 'Yadeta Gudina', 'Dawit Bekele', 'Caaltuu Fayyisaa', 'Lensa Tadesse', 'Abebe Kebede',
    'Meron Assefa', 'Gemechu Dida', 'Hana Girma', 'Bontu Tolosa', 'Almaz Worku', 'Tolera Negash', 'Selam Mekonnen', 'Chala Bayisa',
    'Mahlet Desta', 'Obsa Lemma', 'Rahel Yohannes', 'Biniam Tesfaye', 'Hawi Abdi', 'Yonas Getachew', 'Sifan Gemeda', 'Eden Solomon', 'Kedir Ahmed'];

const ADMIN_USERS = ADM_NAMES.map((name, i) => {
    const bids = Math.floor(admRand() * 60) + 1;
    return {
        id: 'u' + (i + 1), name, phone: admPhone(),
        joined: PAGE_LOADED_AT - Math.floor(admRand() * 120 + 1) * DAY,
        bids, wins: 0, paid: bids * admPick([45, 60, 75, 90, 120]),
        blocked: i === 7 || i === 18
    };
});
// Winners from AUCTIONS are users too
AUCTIONS.filter(a => a.status === 'ended').forEach((a, i) => {
    const u = ADMIN_USERS.find(x => x.name.startsWith(a.winner.name)) || ADMIN_USERS[i];
    if (a.winner.name === 'me') { u.name = 'Caaltuu Fayyisaa'; }
    u.phone = a.winner.phone; u.wins += 1; u.paid += Math.round(a.winner.bid);
    a.winner.user = u.id; a.winner.fullName = u.name;
});

// Payments: mostly bid payments over the last 7 days, plus item payments by winners
const ADMIN_PAYMENTS = [];
const live = AUCTIONS.filter(a => a.status === 'live');
for (let i = 0; i < 64; i++) {
    const a = admPick(live), u = admPick(ADMIN_USERS);
    const r = admRand();
    ADMIN_PAYMENTS.push({
        id: 'p' + i, at: PAGE_LOADED_AT - Math.floor(admRand() * 7 * DAY), user: u.id, auction: a.id, type: 'bid',
        amount: a.price, method: admRand() < 0.7 ? 'telebirr' : 'cbe', ref: admRef(),
        status: r < 0.86 ? 'success' : r < 0.95 ? 'failed' : 'pending'
    });
}
AUCTIONS.filter(a => a.status === 'ended' && a.winner.name !== 'me').forEach((a, i) => {
    ADMIN_PAYMENTS.push({ id: 'pi' + i, at: a.endsAt + 5 * 3600e3, user: a.winner.user, auction: a.id, type: 'item',
        amount: a.winner.bid, method: 'telebirr', ref: admRef(), status: 'success' });
});
ADMIN_PAYMENTS.sort((x, y) => y.at - x.at);

// Daily revenue for the last 90 days (oldest first), in ETB
const ADMIN_REVENUE = Array.from({ length: 90 }, (_, i) => {
    const day = PAGE_LOADED_AT - (89 - i) * DAY;
    const weekend = [0, 6].includes(new Date(day).getDay());
    const trend = 9000 + i * 120;
    const bids = Math.round((trend * (weekend ? 1.3 : 1) * (0.75 + admRand() * 0.5)) / 75);
    return { day, bids, revenue: bids * 75 };
});

// Winner status: 0 Not paid, 1 Ready for pickup (paid), 2 Picked up
const ADMIN_WINNER_STEPS = { 'w-s26': 2, 'w-ebike': 1, 'w-washer': 1, 'w-iphone': 1, 'm-dell': 0 };
// Pickup details: scheduled time after the call; handover time, staff and ID check when picked up
const ADMIN_PICKUPS = {
    'w-s26': { scheduled: PAGE_LOADED_AT - 13 * DAY, at: PAGE_LOADED_AT - 13 * DAY + 2 * 3600e3, by: 'Meron T.', idChecked: true },
    'w-ebike': { scheduled: PAGE_LOADED_AT + 2 * DAY },
    'w-washer': { scheduled: PAGE_LOADED_AT + 4 * 3600e3 }
};

// Bids per hour of the day (for the "busiest hours" chart)
const ADMIN_HOURS = Array.from({ length: 24 }, (_, h) => {
    const base = h < 6 ? 0.15 : h < 9 ? 0.5 : h < 12 ? 0.8 : h < 17 ? 0.7 : h < 19 ? 1 : h < 23 ? 1.5 : 0.6;
    return { hour: h, bids: Math.round(base * (60 + admRand() * 30)) };
});
const ADMIN_WINNER_NOTES = { 'w-ebike': 'Comes Saturday morning with Kebele ID.', 'w-washer': 'Called twice, answered on 2nd call.' };
