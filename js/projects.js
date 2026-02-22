document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
});

function initLightbox() {
    const lightbox = document.getElementById('project-lightbox');
    const lightboxImg = document.getElementById('project-lightbox-img');
    const closeBtn = document.getElementById('project-lightbox-close');

    if (!lightbox || !lightboxImg) return;

    // Détecte les clics sur les images dans les galeries
    document.addEventListener('click', (e) => {
        const target = e.target;
        
        // Vérifie si c'est une image dans la galerie principale ou secondaire
        const isGalleryImg = target.tagName === 'IMG' && (
            target.closest('.media-gallery') || 
            target.closest('.secondary-image-item')
        );

        if (isGalleryImg) {
            lightboxImg.src = target.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Bloque le scroll
        }
    });

    // Fermeture de la lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { lightboxImg.src = ''; }, 300);
    };

    if (closeBtn) closeBtn.onclick = closeLightbox;
    lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });
}