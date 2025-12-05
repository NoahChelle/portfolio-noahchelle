// Système de gestion de la langue
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('portfolio-lang') || 'fr';
        this.init();
    }

    init() {
        this.updateLanguageButton();
        this.translatePage();
        this.updateCVLinks(); // Nouvelle méthode pour mettre à jour les liens CV
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('portfolio-lang', this.currentLang);
        this.updateLanguageButton();
        this.translatePage();
        this.updateCVLinks(); // Mettre à jour les liens CV après changement de langue
    }

    updateLanguageButton() {
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            langBtn.textContent = this.currentLang === 'fr' ? 'EN' : 'FR';
            langBtn.title = this.currentLang === 'fr' ? 'Switch to English' : 'Passer en Français';
        }
    }

    // NOUVELLE MÉTHODE : Mettre à jour les liens CV
    updateCVLinks() {
        const cvLinks = document.querySelectorAll('.cv-download-link');
        const cvLinksNav = document.querySelectorAll('.cv-btn');
        
        const cvUrl = this.currentLang === 'fr' 
            ? 'docs/CV_Noah_Chelle_FR.pdf' 
            : 'docs/CV_Noah_Chelle_EN.pdf';
        
        const cvText = this.currentLang === 'fr' 
            ? 'Télécharger CV' 
            : 'Download CV';

        // Mettre à jour tous les liens CV
        cvLinks.forEach(link => {
            link.href = cvUrl;
            link.download = cvUrl.split('/').pop();
        });

        // Mettre à jour les boutons CV dans la navigation
        cvLinksNav.forEach(btn => {
            btn.href = cvUrl;
            btn.download = cvUrl.split('/').pop();
            // Le texte est géré par data-translate
        });
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[this.currentLang] && translations[this.currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[this.currentLang][key];
                } else {
                    // UTILISER innerHTML AU LIEU DE textContent POUR PRÉSERVER LES BALISES HTML
                    element.innerHTML = translations[this.currentLang][key];
                }
            }
        });

        // Mettre à jour les titres des pages
        this.updatePageTitle();
        // Mettre à jour les liens CV après la traduction
        this.updateCVLinks();
    }

    updatePageTitle() {
        const pageTitles = {
            'index.html': {
                'fr': 'Portfolio - Noah Chelle',
                'en': 'Portfolio - Noah Chelle'
            },
            'projects.html': {
                'fr': 'Projets - Portfolio Noah Chelle',
                'en': 'Projects - Noah Chelle Portfolio'
            },
            'skills.html': {
                'fr': 'Compétences - Portfolio Noah Chelle',
                'en': 'Skills - Noah Chelle Portfolio'
            },
            'contact.html': {
                'fr': 'Contact - Portfolio Noah Chelle',
                'en': 'Contact - Noah Chelle Portfolio'
            }
        };

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (pageTitles[currentPage] && pageTitles[currentPage][this.currentLang]) {
            document.title = pageTitles[currentPage][this.currentLang];
        }
    }

    getCurrentLang() {
        return this.currentLang;
    }
}

// Initialiser le gestionnaire de langue
const languageManager = new LanguageManager();