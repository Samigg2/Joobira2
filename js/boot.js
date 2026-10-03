// Loaded in <head> so the theme is applied before first paint (no light/dark flash).
// `store` wraps localStorage because it can throw in private mode or when blocked.
const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } },
    remove(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } },
    json(k) { try { return JSON.parse(store.get(k)); } catch (e) { return null; } }
};

(function () {
    const saved = store.get('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = saved || (prefersDark ? 'dark' : 'light');
    if (store.get('jb_user')) document.documentElement.classList.add('signed-in');
})();
