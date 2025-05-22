const drone = document.getElementById('drone');
const droneSound = document.getElementById('droneSound');
let currentSection = '';

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id !== currentSection) {
      currentSection = entry.target.id;
      flyDrone();
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

function flyDrone() {
  // Começa fora da tela (lado esquerdo)
  drone.style.transition = 'none';
  drone.style.left = '-150px';

  // Após 100ms, drone voa até o lado direito da tela e toca o som
  setTimeout(() => {
    drone.style.transition = 'left 2s ease-in-out';
    drone.style.left = '110%';
    droneSound.currentTime = 0;
    droneSound.play();
  }, 100);
}
