// JavaScript spécifique à la page compétences
document.addEventListener('DOMContentLoaded', () => {
    // Animation des cartes de compétences (émojis)
    const skillCardsEmoji = document.querySelectorAll('.skill-card-emoji');
    skillCardsEmoji.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
    
    // Animation des cartes de langages (texte)
    const skillCardsText = document.querySelectorAll('.skill-card-text');
    skillCardsText.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
    
    // Animation des cartes d'outils (logos)
    const skillCardsLogo = document.querySelectorAll('.skill-card-logo');
    skillCardsLogo.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
});