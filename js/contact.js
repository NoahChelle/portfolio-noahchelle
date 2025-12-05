

// JavaScript spécifique à la page contact avec Formspree
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.querySelector('.form-success');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Désactiver le bouton pendant l'envoi
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Envoi en cours...';
            submitButton.style.opacity = '0.6';
            
            const formData = new FormData(contactForm);
            
            try {
                // Remplacez 'VOTRE_FORM_ID' par votre ID Formspree
                const response = await fetch('https://formspree.io/f/xdkqdlpn', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Succès
                    formSuccess.style.display = 'block';
                    contactForm.reset();
                    
                    // Masquer le message après 5 secondes
                    setTimeout(() => {
                        formSuccess.style.display = 'none';
                    }, 5000);
                } else {
                    // Erreur du serveur
                    const data = await response.json();
                    if (data.errors) {
                        alert('Erreur lors de l\'envoi : ' + data.errors.map(error => error.message).join(', '));
                    } else {
                        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
                    }
                }
            } catch (error) {
                // Erreur réseau
                console.error('Erreur:', error);
                alert('Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.');
            } finally {
                // Réactiver le bouton
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                submitButton.style.opacity = '1';
            }
        });
    }
});