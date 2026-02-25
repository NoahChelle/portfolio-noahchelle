
// 1. Navigation Scrolled
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// 2. Observer d'apparition (Fade In)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // On arrête d'observer une fois apparu
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne tous les éléments à animer
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .skill-card-emoji, .skill-card-text, .skill-card-logo, .title-block');
    
    animatedElements.forEach((el, index) => {
        // Ajout d'un délai progressif si ce sont des cartes de compétences
        if(el.className.includes('skill')) {
            el.style.transitionDelay = `${(index % 3) * 0.1}s`;
        }
        observer.observe(el);
    });

    // Gestion langue
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', () => languageManager.toggleLanguage());
});

// 3. CURSEUR PERSONNALISÉ (Optimisé pour la performance)
const cursorDot = document.createElement('div');
const cursorOutline = document.createElement('div');
cursorDot.className = 'cursor-dot';
cursorOutline.className = 'cursor-outline';
document.body.append(cursorDot, cursorOutline);

// Position de la souris
let mouseX = 0;
let mouseY = 0;
// Position actuelle du cercle (pour le lerp/lissage)
let outlineX = 0;
let outlineY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Le point suit instantanément
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});

// Boucle d'animation fluide
function animateCursor() {
    // Interpolation linéaire (Lerp) pour le retard fluide
    outlineX += (mouseX - outlineX) * 0.15; // 0.15 = vitesse de suivi
    outlineY += (mouseY - outlineY) * 0.15;

    cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Effet Hover Magnétique
const interactables = document.querySelectorAll('a, button, .project-card, input, .avatar');

interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.transform += ' scale(2)'; // Agrandissement
        cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        cursorOutline.style.borderColor = 'transparent';
    });
    
    el.addEventListener('mouseleave', () => {
        // Le scale sera réinitialisé par la boucle animateCursor via le transform
        cursorOutline.style.backgroundColor = 'transparent';
        cursorOutline.style.borderColor = 'var(--text-main)';
        cursorOutline.style.width = '40px'; // Reset explicite si besoin CSS
        cursorOutline.style.height = '40px';
    });
});

/* ========================================
   TRANSITION RIDEAU - CIBLÉE PROJETS UNIQUEMENT
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. On installe le rideau HTML (invisible au départ)
    const curtain = document.createElement('div');
    curtain.className = 'page-transition-curtain';
    // Style de base pour assurer le centrage du texte injecté
    curtain.style.display = 'flex';
    curtain.style.justifyContent = 'center';
    curtain.style.alignItems = 'center';
    
    curtain.innerHTML = '<h1 class="transition-text"></h1>';
    document.body.appendChild(curtain);
    
    const textEl = curtain.querySelector('.transition-text');
    // Forcer le centrage du texte à l'intérieur de la balise H1
    textEl.style.textAlign = 'center';
    textEl.style.width = '90%';
    textEl.style.margin = '0 auto';

    // 2. CIBLAGE PRÉCIS : On ne prend que les liens DANS la grille de projets
    const projectLinks = document.querySelectorAll('.project-card a');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = this.getAttribute('target');
            
            if (href && !href.startsWith('#') && !href.includes('mailto') && target !== '_blank') {
                
                e.preventDefault(); 
                
                let title = "PROJET";
                const card = this.closest('.project-card');
                
                if (card) {
                    const h3 = card.querySelector('h3');
                    if (h3) {
                        title = h3.innerText;
                        
                        // Ajustement de la taille selon la longueur pour éviter le débordement
                        if (title.length > 15) {
                            textEl.style.fontSize = "6vw"; 
                            textEl.style.whiteSpace = "normal"; 
                        } else {
                            textEl.style.fontSize = "8vw"; 
                            textEl.style.whiteSpace = "nowrap";
                        }
                    }
                }

                // On lance l'animation
                textEl.innerText = title;
                curtain.classList.add('active');

                // On change de page après 800ms
                setTimeout(() => {
                    window.location.href = href;
                }, 800);
            }
        });
    });
});

// Réinitialise le rideau si on utilise le bouton "Précédent" du navigateur
window.addEventListener('pageshow', () => {
    const curtain = document.querySelector('.page-transition-curtain');
    if (curtain) curtain.classList.remove('active');
});