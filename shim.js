(function() {
    console.log("Win7 Simu Offline Shims Active");
    
    // 1. Mock Firebase
    const noop = () => {};
    const promiseNoop = () => Promise.resolve({});
    
    const firebaseMock = {
        initializeApp: function() {
            return {
                analytics: () => ({ 
                    logEvent: noop, 
                    setCurrentScreen: noop,
                    setUserId: noop,
                    setUserProperties: noop
                }),
                installations: () => ({ 
                    getId: () => Promise.resolve("offline-id"), 
                    getToken: () => Promise.resolve({ token: "offline-token" }),
                    delete: promiseNoop
                }),
                auth: () => ({ 
                    onAuthStateChanged: (cb) => { setTimeout(() => cb(null), 0); }, 
                    signInAnonymously: promiseNoop,
                    currentUser: null
                }),
                firestore: () => ({ 
                    settings: noop, 
                    enablePersistence: promiseNoop, 
                    collection: () => ({ 
                        doc: () => ({ 
                            onSnapshot: (cb) => { setTimeout(() => cb({ data: () => ({}) }), 0); }, 
                            get: promiseNoop,
                            set: promiseNoop,
                            update: promiseNoop
                        }) 
                    }) 
                }),
                performance: () => ({ trace: () => ({ start: noop, stop: noop }) }),
                remoteConfig: () => ({ 
                    fetchAndActivate: promiseNoop, 
                    getValue: () => ({ asString: () => "", asBoolean: () => false, asNumber: () => 0 }),
                    activate: promiseNoop,
                    ensureInitialized: promiseNoop
                }),
                messaging: () => ({ onMessage: noop, requestPermission: promiseNoop, getToken: () => Promise.resolve("offline-token") }),
                storage: () => ({ ref: () => ({ child: () => ({ getDownloadURL: () => Promise.resolve("") }) }) }),
            };
        },
        apps: []
    };
    
    if (!window.firebase) window.firebase = firebaseMock;
    
    // 2. Mock GTag and other tracking
    window.gtag = window.gtag || noop;
    window.dataLayer = window.dataLayer || [];
    
    // 3. Mock Ads
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push = noop;
    window.adsbygoogle.loaded = true;
    
    // 4. Force onLine to true
    try {
        Object.defineProperty(navigator, 'onLine', { get: () => true });
    } catch(e) {}

    // 5. Global Error Suppressor for some specific annoying errors
    const originalConsoleError = console.error;
    console.error = function() {
        const msg = arguments[0];
        if (typeof msg === 'string' && (
            msg.includes('firebase') || 
            msg.includes('googleapis') || 
            msg.includes('Analytics') ||
            msg.includes('Installations')
        )) {
            return;
        }
        return originalConsoleError.apply(console, arguments);
    };

    // 6. Patch fetch and XHR to handle root-relative paths and block external APIs
    const base = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        let finalUrl = url;
        if (typeof url === 'string') {
            // Block googleapis calls and other trackers
            if (url.includes('googleapis.com') || url.includes('google-analytics.com') || url.includes('googletagmanager.com') || url.includes('app-measurement.com')) {
                return Promise.resolve(new Response(JSON.stringify({}), { 
                    status: 200, 
                    headers: {'Content-Type': 'application/json'} 
                }));
            }
            // Handle root-relative paths for local assets
            if (url.startsWith('/') && !url.startsWith('//')) {
                finalUrl = base + url.substring(1);
            }
        }
        return originalFetch(finalUrl, options);
    };

    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
        let finalUrl = url;
        if (typeof url === 'string' && url.startsWith('/') && !url.startsWith('//')) {
            finalUrl = base + url.substring(1);
        }
        return originalOpen.call(this, method, finalUrl, ...args);
    };

    // 7. Mock Capacitor
    const capacitorMock = {
        isNative: false,
        getPlatform: () => "web",
        isPluginAvailable: () => true,
        convertFileSrc: (e) => e,
        registerPlugin: (name, implementations) => {
            const proxy = new Proxy({}, {
                get: (target, prop) => {
                    if (prop === 'addListener') return () => ({ remove: noop });
                    if (prop === 'getToken') return () => Promise.resolve({ token: "offline-token" });
                    return () => Promise.resolve({});
                }
            });
            return proxy;
        },
        Plugins: {}
    };
    if (!window.Capacitor) window.Capacitor = capacitorMock;

    // 8. Override LocalStorage to ensure premium/no-ads
    try {
        localStorage.setItem('win7simu_showAds', 'false');
        localStorage.setItem('win7simu_unlockedThemes', '["all"]');
        // Some apps use 'vuex' key for the whole state
        let vuexState = localStorage.getItem('vuex');
        if (vuexState) {
            try {
                let state = JSON.parse(vuexState);
                state.showAds = false;
                state.unlockedThemes = ["all"];
                localStorage.setItem('vuex', JSON.stringify(state));
            } catch(e) {}
        }
    } catch(e) {}
})();
