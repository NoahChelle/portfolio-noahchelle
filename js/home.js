document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.querySelector('.avatar');
    
    // Effet Glitch / Distortion au clic (plus "Art" que la rotation simple)
    if (avatar) {
        avatar.addEventListener('click', () => {
            avatar.style.filter = 'grayscale(0%) contrast(1.5) hue-rotate(90deg)';
            avatar.style.transform = 'scale(0.95) skewX(5deg)';
            
            setTimeout(() => {
                avatar.style.filter = '';
                avatar.style.transform = '';
            }, 300);
        });
    }
});