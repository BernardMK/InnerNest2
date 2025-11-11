// preferences.js - Enhanced Universal Preferences Manager for InnerNest
// Handles theme and language preferences with smooth transitions and accessibility

/**
 * Cookie Manager - Secure cookie operations with enhanced features
 */
class CookieManager {
    /**
     * Set a cookie with expiration and security options
     * @param {string} name - Cookie name
     * @param {string} value - Cookie value
     * @param {number} days - Days until expiration (default: 365)
     */
    static setCookie(name, value, days = 365) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
    }

    /**
     * Get a cookie value
     * @param {string} name - Cookie name
     * @returns {string|null} Cookie value or null if not found
     */
    static getCookie(name) {
        const nameEQ = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length);
            }
        }
        return null;
    }

    /**
     * Delete a cookie
     * @param {string} name - Cookie name
     */
    static deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }

    /**
     * Check if a cookie exists
     * @param {string} name - Cookie name
     * @returns {boolean}
     */
    static hasCookie(name) {
        return this.getCookie(name) !== null;
    }

    /**
     * Get all InnerNest cookies
     * @returns {Object} Object with all preference cookies
     */
    static getAllPreferences() {
        return {
            theme: this.getCookie('innerNestTheme'),
            language: this.getCookie('innerNestLanguage'),
            timestamp: this.getCookie('innerNestTimestamp')
        };
    }
}

/**
 * Enhanced Universal Preferences Manager
 */
class UniversalPreferencesManager {
    constructor() {
        this.THEME_COOKIE = 'innerNestTheme';
        this.LANGUAGE_COOKIE = 'innerNestLanguage';
        this.TIMESTAMP_COOKIE = 'innerNestTimestamp';
        this.theme = this.getThemePreference();
        this.language = this.getLanguagePreference();
        this.transitionDuration = 300; // ms for smooth transitions
        
        this.init();
    }

    /**
     * Initialize preferences on page load
     */
    init() {
        // Apply saved preferences immediately (before DOM loads to prevent flashing)
        this.applyThemeImmediate();
        this.saveTimestamp();
        
        // Wait for DOM to be ready for other operations
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupPreferences());
        } else {
            this.setupPreferences();
        }
    }

    /**
     * Setup all preference-related functionality
     */
    setupPreferences() {
        this.applyTheme(this.theme, false); // false = don't show notification
        this.applyLanguage(this.language, false);
        this.setupThemeToggle();
        this.setupLanguageToggle();
        this.addTransitionStyles();
        this.setupAccessibility();
        this.setupKeyboardShortcuts();
        this.logPreferences();
    }

    /**
     * Get saved theme preference with system preference fallback
     * @returns {string} 'dark' or 'light'
     */
    getThemePreference() {
        const saved = CookieManager.getCookie(this.THEME_COOKIE);
        if (saved === 'dark' || saved === 'light') {
            return saved;
        }
        
        // Check system preference if no saved preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }

    /**
     * Get saved language preference with browser language fallback
     * @returns {string} 'en' or 'es'
     */
    getLanguagePreference() {
        const saved = CookieManager.getCookie(this.LANGUAGE_COOKIE);
        if (saved === 'en' || saved === 'es') {
            return saved;
        }
        
        // Check browser language if no saved preference
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('es')) {
            return 'es';
        }
        
        return 'en';
    }

    /**
     * Apply theme immediately (before DOM loads) to prevent flash
     */
    applyThemeImmediate() {
        if (this.theme === 'dark') {
            document.documentElement.classList.add('dark-mode');
            if (document.body) {
                document.body.classList.add('dark-mode');
            }
        } else {
            document.documentElement.classList.remove('dark-mode');
            if (document.body) {
                document.body.classList.remove('dark-mode');
            }
        }
    }

    /**
     * Apply theme to the page with smooth transition
     * @param {string} theme - 'dark' or 'light'
     * @param {boolean} showNotification - Whether to show notification
     */
    applyTheme(theme, showNotification = true) {
        const isDark = theme === 'dark';
        
        // Add transition class for smooth change
        document.body.classList.add('theme-transitioning');
        
        // Apply or remove dark mode
        if (isDark) {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
            document.body.classList.remove('dark-mode');
        }
        
        // Update ALL theme toggle buttons on the page
        const themeToggles = document.querySelectorAll('.theme-toggle, #themeToggle');
        themeToggles.forEach(toggle => {
            toggle.innerHTML = isDark ? '☀️' : '🌙';
            toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            
            // Add animation class
            toggle.classList.add('toggle-animate');
            setTimeout(() => toggle.classList.remove('toggle-animate'), 300);
        });
        
        // Force a reflow to ensure styles are recalculated
        void document.body.offsetHeight;
        
        // Remove transition class after animation
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, this.transitionDuration);
        
        // Save preference
        CookieManager.setCookie(this.THEME_COOKIE, theme);
        this.theme = theme;
        this.saveTimestamp();
        
        // Trigger custom event for other scripts to listen
        this.triggerEvent('themeChanged', { theme });
        
        if (showNotification) {
            this.showNotification(
                isDark ? '🌙 Dark mode enabled' : '☀️ Light mode enabled',
                isDark ? '🌙 Modo oscuro activado' : '☀️ Modo claro activado'
            );
        }
    }

    /**
     * Apply language to the page
     * @param {string} language - 'en' or 'es'
     * @param {boolean} showNotification - Whether to show notification
     */
    applyLanguage(language, showNotification = true) {
        // Update language buttons with smooth transition
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.dataset.lang === language;
            btn.classList.toggle('active', isActive);
            
            // Add pulse animation to active button
            if (isActive && showNotification) {
                btn.classList.add('lang-pulse');
                setTimeout(() => btn.classList.remove('lang-pulse'), 600);
            }
        });
        
        // Update html lang attribute for accessibility
        document.documentElement.lang = language;
        
        // Save preference
        CookieManager.setCookie(this.LANGUAGE_COOKIE, language);
        this.language = language;
        this.saveTimestamp();
        
        // Trigger language manager if it exists
        if (window.languageManager) {
            window.languageManager.currentLanguage = language;
            window.languageManager.translatePage();
        }
        
        // Trigger custom event
        this.triggerEvent('languageChanged', { language });
        
        if (showNotification) {
            this.showNotification(
                language === 'en' ? '🇺🇸 Language changed to English' : '🇪🇸 Idioma cambiado a Español',
                language === 'en' ? '🇺🇸 Language changed to English' : '🇪🇸 Idioma cambiado a Español'
            );
        }
    }

    /**
     * Setup theme toggle functionality with enhanced UX
     */
    setupThemeToggle() {
        const themeToggles = document.querySelectorAll('.theme-toggle, #themeToggle');
        
        themeToggles.forEach(toggle => {
            // Remove existing listeners by cloning
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);
            
            // Add click listener
            newToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const newTheme = this.theme === 'dark' ? 'light' : 'dark';
                this.applyTheme(newTheme, true);
            });
            
            // Add hover effect
            newToggle.addEventListener('mouseenter', () => {
                newToggle.style.transform = 'scale(1.1) rotate(10deg)';
            });
            
            newToggle.addEventListener('mouseleave', () => {
                newToggle.style.transform = 'scale(1) rotate(0deg)';
            });
            
            // Set initial state with accessibility
            newToggle.innerHTML = this.theme === 'dark' ? '☀️' : '🌙';
            newToggle.setAttribute('role', 'button');
            newToggle.setAttribute('tabindex', '0');
        });
    }

    /**
     * Setup language toggle functionality with enhanced UX
     */
    setupLanguageToggle() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            // Remove existing listeners by cloning
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            // Add click listener
            newBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const newLang = e.target.dataset.lang;
                if (newLang && newLang !== this.language) {
                    this.applyLanguage(newLang, true);
                }
            });
            
            // Add keyboard support
            newBtn.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    newBtn.click();
                }
            });
            
            // Accessibility attributes
            newBtn.setAttribute('role', 'button');
            newBtn.setAttribute('tabindex', '0');
            newBtn.setAttribute('aria-pressed', newBtn.dataset.lang === this.language ? 'true' : 'false');
        });
    }

    /**
     * Add smooth transition styles
     */
    addTransitionStyles() {
        if (!document.getElementById('preference-transitions')) {
            const styles = document.createElement('style');
            styles.id = 'preference-transitions';
            styles.textContent = `
                /* Smooth theme transitions */
                body.theme-transitioning,
                body.theme-transitioning * {
                    transition: background-color 0.3s ease, 
                                color 0.3s ease, 
                                border-color 0.3s ease,
                                box-shadow 0.3s ease !important;
                }
                
                /* Toggle button animations */
                .theme-toggle, #themeToggle {
                    transition: transform 0.2s ease, opacity 0.2s ease;
                    cursor: pointer;
                }
                
                .theme-toggle.toggle-animate {
                    animation: toggleBounce 0.3s ease;
                }
                
                @keyframes toggleBounce {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    50% { transform: scale(1.2) rotate(180deg); }
                }
                
                /* Language button pulse */
                .lang-btn.lang-pulse {
                    animation: langPulse 0.6s ease;
                }
                
                @keyframes langPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                
                /* Language button styles */
                .lang-btn {
                    transition: all 0.2s ease;
                    cursor: pointer;
                }
                
                .lang-btn:hover {
                    transform: translateY(-2px);
                }
                
                .lang-btn:active {
                    transform: translateY(0);
                }
            `;
            document.head.appendChild(styles);
        }
    }

    /**
     * Setup accessibility features
     */
    setupAccessibility() {
        // Announce theme changes to screen readers
        const announcer = document.createElement('div');
        announcer.id = 'preference-announcer';
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        document.body.appendChild(announcer);
    }

    /**
     * Setup keyboard shortcuts
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Alt + T = Toggle theme
            if (e.altKey && e.key.toLowerCase() === 't') {
                e.preventDefault();
                const newTheme = this.theme === 'dark' ? 'light' : 'dark';
                this.applyTheme(newTheme, true);
            }
            
            // Alt + L = Toggle language
            if (e.altKey && e.key.toLowerCase() === 'l') {
                e.preventDefault();
                const newLang = this.language === 'en' ? 'es' : 'en';
                this.applyLanguage(newLang, true);
            }
        });
    }

    /**
     * Show enhanced notification message
     * @param {string} messageEn - English message
     * @param {string} messageEs - Spanish message
     */
    showNotification(messageEn, messageEs) {
        // Remove existing notification
        const existing = document.querySelector('.preference-notification');
        if (existing) {
            existing.remove();
        }

        const message = this.language === 'en' ? messageEn : messageEs;
        
        const notification = document.createElement('div');
        notification.className = 'preference-notification';
        notification.setAttribute('role', 'status');
        notification.setAttribute('aria-live', 'polite');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #6BA292, #588377);
            color: white;
            padding: 15px 25px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(107, 162, 146, 0.4);
            z-index: 10000;
            font-weight: 600;
            font-size: 14px;
            animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
            max-width: 300px;
            text-align: center;
            backdrop-filter: blur(10px);
            cursor: pointer;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                <span>${message}</span>
            </div>
        `;
        
        // Click to dismiss
        notification.addEventListener('click', () => {
            notification.style.animation = 'fadeOut 0.2s ease';
            setTimeout(() => notification.remove(), 200);
        });
        
        // Add animation styles if not already present
        if (!document.getElementById('preference-animations')) {
            const animStyles = document.createElement('style');
            animStyles.id = 'preference-animations';
            animStyles.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes fadeOut {
                    to {
                        opacity: 0;
                        transform: translateX(400px);
                    }
                }
                
                /* Responsive notification */
                @media (max-width: 768px) {
                    .preference-notification {
                        top: 80px !important;
                        right: 15px !important;
                        left: 15px !important;
                        max-width: calc(100vw - 30px) !important;
                        padding: 12px 20px !important;
                        font-size: 13px !important;
                    }
                }
                
                /* Hover effect */
                .preference-notification:hover {
                    box-shadow: 0 12px 32px rgba(107, 162, 146, 0.6);
                    transform: translateY(-2px);
                }
            `;
            document.head.appendChild(animStyles);
        }
        
        document.body.appendChild(notification);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 3000);
    }

    /**
     * Save timestamp of last preference change
     */
    saveTimestamp() {
        const timestamp = new Date().toISOString();
        CookieManager.setCookie(this.TIMESTAMP_COOKIE, timestamp);
    }

    /**
     * Trigger custom events for other scripts
     */
    triggerEvent(eventName, detail) {
        const event = new CustomEvent(eventName, { detail });
        window.dispatchEvent(event);
    }

    /**
     * Log current preferences to console with style
     */
    logPreferences() {
        console.log('%c🎨 InnerNest Preferences', 'color: #6BA292; font-weight: bold; font-size: 16px;');
        console.log('%c  Theme:', 'color: #588377; font-weight: bold;', this.theme);
        console.log('%c  Language:', 'color: #588377; font-weight: bold;', this.language);
        console.log('%c  Cookies:', 'color: #588377; font-weight: bold;', 
            `${CookieManager.hasCookie(this.THEME_COOKIE) ? '✓' : '✗'} Theme, ${CookieManager.hasCookie(this.LANGUAGE_COOKIE) ? '✓' : '✗'} Language`);
        console.log('%c  Keyboard Shortcuts:', 'color: #588377; font-weight: bold;', 'Alt+T (theme), Alt+L (language)');
    }

    /**
     * Reset all preferences to defaults
     */
    resetPreferences() {
        CookieManager.deleteCookie(this.THEME_COOKIE);
        CookieManager.deleteCookie(this.LANGUAGE_COOKIE);
        CookieManager.deleteCookie(this.TIMESTAMP_COOKIE);
        this.theme = 'light';
        this.language = 'en';
        this.applyTheme(this.theme, true);
        this.applyLanguage(this.language, true);
        console.log('✨ Preferences reset to defaults');
    }

    /**
     * Get current preferences as object
     * @returns {Object} Current preferences
     */
    getPreferences() {
        return {
            theme: this.theme,
            language: this.language,
            themeCookie: CookieManager.getCookie(this.THEME_COOKIE),
            languageCookie: CookieManager.getCookie(this.LANGUAGE_COOKIE),
            lastUpdated: CookieManager.getCookie(this.TIMESTAMP_COOKIE),
            systemPreference: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
            browserLanguage: navigator.language || navigator.userLanguage
        };
    }

    /**
     * Export preferences as JSON
     * @returns {string} JSON string of preferences
     */
    exportPreferences() {
        return JSON.stringify(this.getPreferences(), null, 2);
    }

    /**
     * Import preferences from JSON
     * @param {string} jsonString - JSON string of preferences
     */
    importPreferences(jsonString) {
        try {
            const prefs = JSON.parse(jsonString);
            if (prefs.theme) this.applyTheme(prefs.theme, true);
            if (prefs.language) this.applyLanguage(prefs.language, true);
            console.log('✓ Preferences imported successfully');
        } catch (e) {
            console.error('✗ Failed to import preferences:', e);
        }
    }
}

/**
 * Enhanced Language Manager Integration
 */
if (typeof LanguageManager !== 'undefined') {
    const originalInit = LanguageManager.prototype.init;
    LanguageManager.prototype.init = function() {
        if (window.preferencesManager) {
            this.currentLanguage = window.preferencesManager.language;
        }
        originalInit.call(this);
    };

    const originalChangeLanguage = LanguageManager.prototype.changeLanguage;
    LanguageManager.prototype.changeLanguage = function(lang) {
        originalChangeLanguage.call(this, lang);
        if (window.preferencesManager) {
            window.preferencesManager.applyLanguage(lang, false);
        }
    };
}

// Initialize preferences manager immediately (even before DOM loads)
window.preferencesManager = new UniversalPreferencesManager();

// Expose enhanced utility functions
window.resetPreferences = () => window.preferencesManager.resetPreferences();
window.getPreferences = () => window.preferencesManager.getPreferences();
window.showPreferences = () => console.table(window.preferencesManager.getPreferences());
window.exportPreferences = () => {
    const json = window.preferencesManager.exportPreferences();
    console.log(json);
    return json;
};
window.importPreferences = (json) => window.preferencesManager.importPreferences(json);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CookieManager, UniversalPreferencesManager };
}

// Stylish console messages
console.log('%c🍪 Enhanced Preferences Manager Loaded', 'background: linear-gradient(135deg, #6BA292, #588377); color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold;');
console.log('%c💡 Keyboard Shortcuts:', 'color: #6BA292; font-weight: bold;');
console.log('   Alt+T - Toggle theme');
console.log('   Alt+L - Toggle language');
console.log('%c💡 Console Commands:', 'color: #6BA292; font-weight: bold;');
console.log('   resetPreferences()  - Reset to defaults');
console.log('   showPreferences()   - View current settings');
console.log('   exportPreferences() - Export as JSON');
console.log('   importPreferences(json) - Import from JSON');