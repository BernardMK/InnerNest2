// preferences.js - Universal Cookie-based Preferences Manager for InnerNest
// This file handles theme and language preferences across all pages

/**
 * Cookie Manager - Handles all cookie operations
 */
class CookieManager {
    /**
     * Set a cookie with expiration
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
}

/**
 * Universal Preferences Manager - Handles theme and language preferences
 */
class UniversalPreferencesManager {
    constructor() {
        this.THEME_COOKIE = 'innerNestTheme';
        this.LANGUAGE_COOKIE = 'innerNestLanguage';
        this.theme = this.getThemePreference();
        this.language = this.getLanguagePreference();
        
        this.init();
    }

    /**
     * Initialize preferences on page load
     */
    init() {
        // Apply saved preferences immediately (before DOM loads to prevent flashing)
        this.applyThemeImmediate();
        
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
        this.logPreferences();
    }

    /**
     * Get saved theme preference
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
     * Get saved language preference
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
        }
    }

    /**
     * Apply theme to the page
     * @param {string} theme - 'dark' or 'light'
     * @param {boolean} showNotification - Whether to show notification
     */
    applyTheme(theme, showNotification = true) {
        const isDark = theme === 'dark';
        
        // Properly apply or remove dark mode
        if (isDark) {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode');
        } else {
            // Remove dark mode completely for light theme
            document.documentElement.classList.remove('dark-mode');
            document.body.classList.remove('dark-mode');
        }
        
        // Update ALL theme toggle buttons on the page
        const themeToggles = document.querySelectorAll('.theme-toggle, #themeToggle');
        themeToggles.forEach(toggle => {
            toggle.innerHTML = isDark ? '☀️' : '🌙';
            toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        });
        
        // Force a reflow to ensure styles are recalculated
        void document.body.offsetHeight;
        
        // Save preference
        CookieManager.setCookie(this.THEME_COOKIE, theme);
        this.theme = theme;
        
        if (showNotification) {
            this.showNotification(
                isDark ? 'Dark mode enabled' : 'Light mode enabled',
                isDark ? 'Modo oscuro activado' : 'Modo claro activado'
            );
        }
    }

    /**
     * Apply language to the page
     * @param {string} language - 'en' or 'es'
     * @param {boolean} showNotification - Whether to show notification
     */
    applyLanguage(language, showNotification = true) {
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === language);
        });
        
        // Update html lang attribute
        document.documentElement.lang = language;
        
        // Save preference
        CookieManager.setCookie(this.LANGUAGE_COOKIE, language);
        this.language = language;
        
        // Trigger language manager if it exists
        if (window.languageManager) {
            window.languageManager.currentLanguage = language;
            window.languageManager.translatePage();
        }
        
        if (showNotification) {
            this.showNotification(
                'Language changed to English',
                'Idioma cambiado a Español'
            );
        }
    }

    /**
     * Setup theme toggle functionality
     */
    setupThemeToggle() {
        // Find all theme toggle buttons
        const themeToggles = document.querySelectorAll('.theme-toggle, #themeToggle');
        
        themeToggles.forEach(toggle => {
            // Remove existing listeners by cloning
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);
            
            // Add new listener
            newToggle.addEventListener('click', () => {
                const newTheme = this.theme === 'dark' ? 'light' : 'dark';
                this.applyTheme(newTheme, true);
            });
            
            // Set initial state
            newToggle.innerHTML = this.theme === 'dark' ? '☀️' : '🌙';
        });
    }

    /**
     * Setup language toggle functionality
     */
    setupLanguageToggle() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            // Remove existing listeners by cloning
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            // Add new listener
            newBtn.addEventListener('click', (e) => {
                const newLang = e.target.dataset.lang;
                if (newLang !== this.language) {
                    this.applyLanguage(newLang, true);
                }
            });
        });
    }

    /**
     * Show notification message
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
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 20px;">${this.theme === 'dark' ? '🌙' : '☀️'}</span>
                <span>${message}</span>
            </div>
        `;
        
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
                        max-width: calc(100vw - 30px) !important;
                        padding: 12px 20px !important;
                        font-size: 13px !important;
                    }
                }
            `;
            document.head.appendChild(animStyles);
        }
        
        document.body.appendChild(notification);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 3000);
    }

    /**
     * Log current preferences to console
     */
    logPreferences() {
        console.log('🎨 InnerNest Preferences:');
        console.log(`  Theme: ${this.theme}`);
        console.log(`  Language: ${this.language}`);
        console.log(`  Cookies: ${CookieManager.hasCookie(this.THEME_COOKIE) ? '✓' : '✗'} Theme, ${CookieManager.hasCookie(this.LANGUAGE_COOKIE) ? '✓' : '✗'} Language`);
    }

    /**
     * Reset all preferences to defaults
     */
    resetPreferences() {
        CookieManager.deleteCookie(this.THEME_COOKIE);
        CookieManager.deleteCookie(this.LANGUAGE_COOKIE);
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
            languageCookie: CookieManager.getCookie(this.LANGUAGE_COOKIE)
        };
    }
}

/**
 * Enhanced Language Manager with Cookie Integration
 */
if (typeof LanguageManager !== 'undefined') {
    // Extend the existing LanguageManager to use preferences
    const originalInit = LanguageManager.prototype.init;
    LanguageManager.prototype.init = function() {
        // Use preference manager's language if available
        if (window.preferencesManager) {
            this.currentLanguage = window.preferencesManager.language;
        }
        originalInit.call(this);
    };

    const originalChangeLanguage = LanguageManager.prototype.changeLanguage;
    LanguageManager.prototype.changeLanguage = function(lang) {
        originalChangeLanguage.call(this, lang);
        // Update preferences manager
        if (window.preferencesManager) {
            window.preferencesManager.applyLanguage(lang, false);
        }
    };
}

// Initialize preferences manager immediately (even before DOM loads)
window.preferencesManager = new UniversalPreferencesManager();

// Expose utility functions for debugging
window.resetPreferences = () => window.preferencesManager.resetPreferences();
window.getPreferences = () => window.preferencesManager.getPreferences();
window.showPreferences = () => console.table(window.preferencesManager.getPreferences());

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CookieManager, UniversalPreferencesManager };
}

console.log('🍪 Universal Preferences Manager loaded');
console.log('💡 Type resetPreferences() to reset all preferences');
console.log('💡 Type showPreferences() to view current preferences');