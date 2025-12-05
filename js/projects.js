// JavaScript spécifique à la page projets
document.addEventListener('DOMContentLoaded', () => {
    // Animation des cartes de projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Animation spécifique pour la carte galerie géométrique
    const galleryCard = document.querySelector('.gallery-card-geometric');
    if (galleryCard) {
        galleryCard.style.animationDelay = '0.9s';
        
        // Animation aléatoire des formes au chargement
        const shapes = galleryCard.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            setTimeout(() => {
                shape.style.transition = 'all 0.8s ease';
                if (index === 0) {
                    shape.style.transform = 'rotate(15deg) scale(1.1)';
                } else if (index === 1) {
                    shape.style.transform = 'rotate(-10deg) scale(1.05)';
                } else {
                    shape.style.transform = 'rotate(5deg) scale(1.08)';
                }
            }, 500 + (index * 200));
            
            // Retour à la position initiale après l'animation
            setTimeout(() => {
                shape.style.transform = 'rotate(0deg) scale(1)';
            }, 1500 + (index * 200));
        });
    }

    // ✅ CORRECTION : Initialisation de la lightbox avec délai pour s'assurer que le DOM est prêt
    setTimeout(() => {
        initializeLightbox();
    }, 100);
});

// ✅ Fonction améliorée pour initialiser la lightbox avec gestion complète des événements
function initializeLightbox() {
    const projectLightbox = document.getElementById('project-lightbox');
    const projectLightboxImg = document.getElementById('project-lightbox-img');
    const projectLightboxClose = document.getElementById('project-lightbox-close');

    // Vérifier que tous les éléments nécessaires existent
    if (!projectLightbox || !projectLightboxImg || !projectLightboxClose) {
        console.warn('⚠️ Lightbox elements not found. Skipping lightbox initialization.');
        return;
    }

    console.log('✅ Lightbox elements found, initializing...');

    // ✅ Fonction pour ouvrir la lightbox
    function openLightbox(imgElement) {
        if (!imgElement || !imgElement.src) {
            console.error('❌ Invalid image element');
            return;
        }
        
        console.log('🖼️ Opening lightbox with image:', imgElement.src);
        projectLightboxImg.src = imgElement.src;
        projectLightboxImg.alt = imgElement.alt || 'Image du projet';
        projectLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // ✅ Fonction pour fermer la lightbox
    function closeProjectLightbox() {
        console.log('❌ Closing lightbox');
        projectLightbox.classList.remove('active');
        document.body.style.overflow = '';
        // Réinitialiser la source de l'image après fermeture
        setTimeout(() => {
            projectLightboxImg.src = '';
        }, 300);
    }

    // ✅ CORRECTION PRINCIPALE : Gestionnaire d'événements avec phase de capture pour les images secondaires
    const secondaryImages = document.querySelectorAll('.secondary-image-item img');
    console.log(`📸 Found ${secondaryImages.length} secondary images`);
    
    secondaryImages.forEach((img, index) => {
        // Forcer le curseur pointer sur chaque image
        img.style.cursor = 'pointer';
        
        // ✅ Utiliser la phase de capture (true) pour s'assurer que l'événement est intercepté avant la propagation
        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log(`🎯 Secondary image ${index + 1} clicked:`, this.src);
            openLightbox(this);
        }, true); // ⚡ Phase de capture = true
    });

    // ✅ Gestionnaire pour les images principales de la galerie média
    const mainGalleryImages = document.querySelectorAll('.media-gallery > img');
    console.log(`🖼️ Found ${mainGalleryImages.length} main gallery images`);
    
    mainGalleryImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log(`🎯 Main gallery image ${index + 1} clicked:`, this.src);
            openLightbox(this);
        }, true); // ⚡ Phase de capture = true
    });

    // ✅ Gestionnaire délégué comme solution de secours (backup)
    document.addEventListener('click', function(e) {
        // Vérifier si le clic provient d'une image de galerie (secondaire ou principale)
        const clickedImg = e.target.closest('.secondary-image-item img, .media-gallery > img');
        if (clickedImg) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('🔄 Image clicked via delegation (backup):', clickedImg.src);
            openLightbox(clickedImg);
        }
    }, true); // ⚡ Phase de capture = true

    // ✅ Fermer avec le bouton X
    projectLightboxClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeProjectLightbox();
    });
    
    // ✅ Fermer en cliquant sur le fond noir (en dehors de l'image)
    projectLightbox.addEventListener('click', function(e) {
        if (e.target === projectLightbox) {
            closeProjectLightbox();
        }
    });

    // ✅ Fermer avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectLightbox.classList.contains('active')) {
            closeProjectLightbox();
        }
    });

    // ✅ Empêcher la fermeture en cliquant sur l'image elle-même
    projectLightboxImg.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // ✅ Empêcher la fermeture en cliquant sur le conteneur de l'image
    const lightboxContent = document.querySelector('.project-lightbox-content');
    if (lightboxContent) {
        lightboxContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    console.log('✅ Lightbox initialized successfully with event capture mode');
}