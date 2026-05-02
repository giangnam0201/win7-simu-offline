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
    const base = (function() {
        let p = window.location.pathname;
        if (!p.endsWith('/')) p = p.substring(0, p.lastIndexOf('/') + 1);
        if (!p.endsWith('/')) p += '/';
        return window.location.origin + p;
    })();
    
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        let urlStr = typeof url === 'string' ? url : (url instanceof URL ? url.href : '');
        
        // Mock Firebase Installations / Analytics responses
        if (urlStr.includes('firebaseinstallations.googleapis.com') || urlStr.includes('firebase.googleapis.com')) {
            const mockResponse = {
                fid: "offline-fid",
                refreshToken: "offline-ref-token",
                authToken: {
                    token: "offline-auth-token",
                    expiresIn: "3600s"
                },
                measurementId: "G-OFFLINE"
            };
            return Promise.resolve(new Response(JSON.stringify(mockResponse), { 
                status: 200, 
                headers: {'Content-Type': 'application/json'} 
            }));
        }

        // Block other trackers
        if (urlStr.includes('google-analytics.com') || urlStr.includes('googletagmanager.com') || urlStr.includes('app-measurement.com') || urlStr.includes('gamedistribution.com')) {
            return Promise.resolve(new Response(JSON.stringify({}), { status: 200 }));
        }

        let finalUrl = url;
        if (urlStr.startsWith('/') && !urlStr.startsWith('//')) {
            finalUrl = base + urlStr.substring(1);
        } else if (urlStr.startsWith(window.location.origin + '/') && !urlStr.startsWith(base)) {
            // Fix absolute URLs pointing to domain root instead of repo root
            finalUrl = base + urlStr.substring(window.location.origin.length + 1);
        } else if (urlStr.startsWith('file:///C:/draco/')) {
            // Fix hardcoded draco root paths
            finalUrl = base + 'draco/' + urlStr.substring(17);
        } else if (urlStr.endsWith('297f276f116cda1ea6303d70fda91f2c.glb')) {
            // Redirect GLB to assets folder
            finalUrl = base + 'assets/297f276f116cda1ea6303d70fda91f2c.glb';
        }

        return originalFetch(finalUrl, options);
    };

    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
        let finalUrl = url;
        if (typeof url === 'string') {
            if (url.startsWith('/') && !url.startsWith('//')) {
                finalUrl = base + url.substring(1);
            } else if (url.startsWith(window.location.origin + '/') && !url.startsWith(base)) {
                finalUrl = base + url.substring(window.location.origin.length + 1);
            } else if (url.startsWith('file:///C:/draco/')) {
                finalUrl = base + 'draco/' + url.substring(17);
            } else if (url.endsWith('297f276f116cda1ea6303d70fda91f2c.glb')) {
                finalUrl = base + 'assets/297f276f116cda1ea6303d70fda91f2c.glb';
            }
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
