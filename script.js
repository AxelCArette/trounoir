const particlesContainer = document.getElementById("particles-container");

    // Fonction pour créer une particule avec des positions de départ aléatoires et un intervalle d'apparition basé sur la distance
    function createParticle(orbitClass, distance) {
      const particle = document.createElement("div");
      particle.classList.add("particle", orbitClass);

      // Position aléatoire autour du trou noir
      const angle = Math.random() * 360;
      const startX = distance * Math.cos(angle);  // Position X initiale
      const startY = distance * Math.sin(angle);  // Position Y initiale

      particle.style.setProperty('--start-x', `${startX}px`);
      particle.style.setProperty('--start-y', `${startY}px`);

      // Positionner la particule au centre du conteneur
      particle.style.left = "50%";
      particle.style.top = "50%";
      
      // Taille et couleur aléatoires
      const size = Math.random() * 2 + 2; // Taille entre 2px et 4px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      particle.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

      particlesContainer.appendChild(particle);

      // Appliquer l'animation qui fait se déplacer la particule vers le centre
      setTimeout(() => {
        particle.style.animation = `${orbitClass} 10s linear infinite`;
      }, 10);

      // Supprimer la particule après son cycle
      setTimeout(() => {
        particle.remove();
      }, 10000);  // Durée de l'animation, ajustée pour laisser plus de temps pour l'effet
    }

    // Fonction pour créer des particules avec un espacement plus large à mesure qu'on s'éloigne
    function generateParticles() {
      const distances = [80, 150, 220, 300, 380, 460, 540, 620, 700, 780];
      const intervals = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

      distances.forEach((distance, index) => {
        setInterval(() => createParticle(`orbit${index + 1}`, distance), intervals[index]);
      });
    }

    // Lancer la génération des particules
    generateParticles();

    