// Production Configuration for Moungiri Store Website
const CONFIG = {
    // Environment
    ENVIRONMENT: 'production',
    
    // Security Settings
    SECURITY: {
        SESSION_DURATION: 2 * 60 * 60 * 1000, // 2 hours
        MAX_LOGIN_ATTEMPTS: 3,
        LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes
        INACTIVITY_TIMEOUT: 30 * 60 * 1000, // 30 minutes
        AUTO_SAVE_INTERVAL: 5 * 60 * 1000, // 5 minutes
    },
    
    // Business Information
    BUSINESS: {
        NAME: 'Moungiri Store',
        OWNER: 'Mayur Sanjay Bhalerao',
        PHONE: '+919561152330',
        EMAIL: 'mayurbhalerao530@gmail.com',
        ADDRESS: {
            STREET: 'Takli-Dhamori Road',
            AREA: 'Rawande',
            CITY: 'Kopargaon',
            STATE: 'Maharashtra',
            PINCODE: '423601',
            COUNTRY: 'India'
        },
        HOURS: {
            OPEN: '07:00',
            CLOSE: '21:00',
            DAYS: 'Monday - Sunday'
        },
        SOCIAL: {
            FACEBOOK: 'https://www.facebook.com/share/1AqqVti5He/',
            INSTAGRAM: 'https://www.instagram.com/mohan_giri_kirana_shop?igsh=MTN6OWQwN29sbGNkZA%3D%3D&utm_source=qr'
        }
    },
    
    // Website Settings
    WEBSITE: {
        DOMAIN: 'moungiristore.com',
        TITLE: 'Moungiri Store - Best Grocery Shop in Rawande, Kopargaon',
        DESCRIPTION: 'Your trusted neighborhood kirana store in Rawande, Kopargaon. Fresh groceries, daily essentials & household items. 5 years of quality service.',
        KEYWORDS: 'kirana store rawande, grocery shop kopargaon, moungiri store, daily essentials, fresh groceries',
        ANALYTICS_ID: '', // Add Google Analytics ID when available
        GOOGLE_MAPS_API: '' // Add Google Maps API key when available
    },
    
    // Features
    FEATURES: {
        VISITOR_COUNTER: true,
        THEME_TOGGLE: true,
        BACK_TO_TOP: true,
        PRELOADER: true,
        AUTO_BACKUP: true,
        KEYBOARD_SHORTCUTS: true,
        SESSION_TIMER: true
    },
    
    // Performance
    PERFORMANCE: {
        IMAGE_LAZY_LOADING: true,
        PRECONNECT_DOMAINS: [
            'https://fonts.googleapis.com',
            'https://images.unsplash.com',
            'https://maps.google.com'
        ]
    },
    
    // Admin Credentials (In production, move to secure server-side storage)
    ADMIN: {
        USERNAME: 'mayurbhalerao',
        // Password: BK@Store2024#Secure (hashed)
        PASSWORD_HASH: 'a8f5f167f44f4964e6c998dee827110c'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}