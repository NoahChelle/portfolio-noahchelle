// JavaScript pour la galerie
document.addEventListener('DOMContentLoaded', () => {
    // Éléments de la lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTool = document.getElementById('lightbox-tool');
    const lightboxClose = document.getElementById('lightbox-close');

    // Ouvrir la lightbox au clic sur une image
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            
            // Cacher les outils dans la lightbox
            lightboxTool.style.display = 'none';
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Fonction pour fermer la lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Fermer avec le bouton X
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Fermer en cliquant en dehors de l'image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Animation d'apparition au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Appliquer l'animation à chaque élément
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(item);
    });

    // Gestion des images manquantes
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.log('Image non trouvée:', this.alt);
        });
    });

    console.log('Galerie chargée !');
});