document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
});

function initLightbox() {
    // Création HTML de la Lightbox si elle n'existe pas dans le HTML
    if (!document.getElementById('project-lightbox')) {
        const lightboxHTML = `
            <div id="project-lightbox" class="project-lightbox">
                <button id="project-lightbox-close" class="project-lightbox-close">&times;</button>
                <div class="project-lightbox-content">
                    <img id="project-lightbox-img" src="" alt="Agrandissement">
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    const lightbox = document.getElementById('project-lightbox');
    const lightboxImg = document.getElementById('project-lightbox-img');
    const closeBtn = document.getElementById('project-lightbox-close');

    // --- DÉLÉGATION D'ÉVÉNEMENT (La méthode propre) ---
    // On écoute les clics sur tout le document, mais on ne réagit que si c'est une image ciblée
    document.addEventListener('click', (e) => {
        const target = e.target;

        // Si on clique sur une image qui doit s'ouvrir (classe spécifique ou dans une galerie)
        if (target.tagName === 'IMG' && (
            target.closest('.media-gallery') || 
            target.closest('.secondary-image-item') ||
            target.classList.contains('zoomable')
        )) {
            e.preventDefault();
            openLightbox(target.src, target.alt);
        }

        // Si on clique sur le fond noir de la lightbox (pour fermer)
        if (target === lightbox) {
            closeLightbox();
        }
    });

    // Fermeture bouton
    closeBtn.addEventListener('click', closeLightbox);

    // Fermeture Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || 'Projet';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloque le scroll
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { lightboxImg.src = ''; }, 300); // Nettoyage après anim
    }
}