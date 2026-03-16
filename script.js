// Language Translations
const translations = {
    en: {
        nav: {
            home: "Home",
            research: "Research",
            blogs: "Blogs",
            opinions: "Opinions",
            cv: "CV"
        }
    },
    zh: {
        nav: {
            home: "主页",
            research: "研究",
            blogs: "博客",
            opinions: "观点",
            cv: "简历"
        }
    },
    ja: {
        nav: {
            home: "ホーム",
            research: "研究",
            blogs: "ブログ",
            opinions: "意見",
            cv: "履歴書"
        }
    }
};

// Get current page name from URL
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    return page === 'index' ? 'home' : page;
}

// Get stored language or default to English
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Set language and update UI
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update navigation text
    const currentLang = translations[lang];
    document.querySelectorAll('nav a').forEach((link, index) => {
        const keys = Object.keys(currentLang.nav);
        if (index < keys.length) {
            link.textContent = currentLang.nav[keys[index]];
        }
    });
    
    // Update page-specific content
    updatePageContent(lang);
    
    // Dispatch custom event for page-specific handlers
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Update content based on current page
function updatePageContent(lang) {
    const page = getCurrentPage();
    const contentElements = document.querySelectorAll('[data-lang-key]');
    
    contentElements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const content = getNestedProperty(translations[lang], key);
        if (content) {
            element.textContent = content;
        }
    });
}

// Helper function to get nested object property
function getNestedProperty(obj, path) {
    return path.split('.').reduce((prev, curr) => prev?.[curr], obj);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section, .research-item, .post-item').forEach(el => {
        observer.observe(el);
    });
});
