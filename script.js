document.addEventListener('DOMContentLoaded', function() {
    // Effet sur le bouton CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Menu Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

   let projectsData = []; // ✅ on utilise let

    // Fonction asynchrone
    async function appel() {
      try {
        const response = await fetch('./projet.json');
        projectsData = await response.json();
        console.log(projectsData);

        // ✅ Ici tu es sûr d'avoir tes données
        const projetsGrid = document.querySelector('.projets-grid');
        if (projetsGrid) {
            projectsData.forEach(projet => {
                const projetCarte = document.createElement('div');
                projetCarte.classList.add('projet-carte');

                projetCarte.innerHTML = `
                    <img src="${projet.image}" alt="${projet.title}">
                    <h3>${projet.title}</h3>
                    <p>${projet.description}</p>
                `;

                projetsGrid.appendChild(projetCarte);
            });
        }
      } catch (error) {
        console.error("Erreur lors du chargement des projets :", error);
      }
    }
    
    appel(); // ✅ on appelle la fonction
});