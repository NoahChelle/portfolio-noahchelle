document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
    initThemeEffects();
});

function initLightbox() {
    const lightbox = document.getElementById('project-lightbox');
    const lightboxImg = document.getElementById('project-lightbox-img');
    const closeBtn = document.getElementById('project-lightbox-close');

    if (!lightbox) return;

    // Ouvrir la lightbox
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName === 'IMG' && (
            target.closest('.media-gallery') || 
            target.closest('.secondary-image-item')
        )) {
            lightboxImg.src = target.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    // Fermer au clic sur la croix
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeLightbox();
        });
    }

    // Fermer au clic sur le fond noir
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Fermer avec la touche Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { lightboxImg.src = ''; }, 300);
    }
}

function initThemeEffects() {
    const bodyClass = document.body.className;
    let symbol = "";
    if (bodyClass.includes('theme-proton')) symbol = "✦";
    else if (bodyClass.includes('theme-banana')) symbol = "🍌";
    else if (bodyClass.includes('theme-balmo')) symbol = "🫧";
    else if (bodyClass.includes('theme-mario')) symbol = "🚩";
    else if (bodyClass.includes('theme-dance')) symbol = "✨";
    else if (bodyClass.includes('theme-bigbag')) symbol = "●";

    if (symbol) createParticles(symbol);
}

function createParticles(symbol) {
    const container = document.createElement('div');
    container.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;overflow:hidden;";
    document.body.appendChild(container);

    for (let i = 0; i < 12; i++) {
        const p = document.createElement('span');
        p.innerText = symbol;
        p.style.cssText = `position:absolute;color:var(--accent);opacity:0.2;font-size:${15+Math.random()*20}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation:float ${8+Math.random()*12}s infinite linear;`;
        container.appendChild(p);
    }

    const style = document.createElement('style');
    style.innerHTML = "@keyframes float { 0% { transform: translateY(10vh) rotate(0deg); opacity: 0; } 20% { opacity: 0.3; } 100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; } }";
    document.head.appendChild(style);
}