document.addEventListener('DOMContentLoaded', () => {
    try {
        const navLinks = document.querySelectorAll('.nav-link');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (navLinks && navbarCollapse) {
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navbarCollapse.classList.contains('show')) {
                        try {
                            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                                toggle: false
                            });
                            bsCollapse.hide();
                        } catch (error) {
                            console.error("Erreur lors de la fermeture de la navbar:", error);
                        }
                    }
                });
            });
        } else {
            console.error("Éléments .nav-link ou .navbar-collapse non trouvés.");
        }
    } catch (error) {
        console.error("Erreur lors de l'initialisation de navbar.js:", error);
    }
});