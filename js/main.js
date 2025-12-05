// Navigation et fonctionnalités communes
console.log('Portfolio chargé avec succès!');

// Gestion du scroll de la navbar
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Animation des éléments au scroll
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

// Observer les cartes de projets et éléments de timeline
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });

    // Gestion du bouton de langue
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            languageManager.toggleLanguage();
        });
    }
});