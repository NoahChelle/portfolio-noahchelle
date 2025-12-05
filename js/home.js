// JavaScript spécifique à la page d'accueil
document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('click', () => {
            avatar.style.transform = 'scale(1.05) rotate(360deg)';
            setTimeout(() => {
                avatar.style.transform = '';
            }, 500);
        });
    }
});