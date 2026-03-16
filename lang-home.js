// Home page specific language content
window.addEventListener('languageChanged', function(e) {
    const lang = e.detail.language;
    
    // Update all elements with lang-content class
    document.querySelectorAll('.lang-content').forEach(element => {
        const content = element.getAttribute(`data-lang-${lang}`);
        if (content) {
            element.innerHTML = content;
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = localStorage.getItem('language') || 'en';
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLang } }));
});
