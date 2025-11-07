// Scroll suave
document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});

// Inicializa el carrusel automático
const ferxxoCarousel = document.getElementById('ferxxoCarousel');
if (ferxxoCarousel) {
  new bootstrap.Carousel(ferxxoCarousel, {
    interval: 3000,
    ride: 'carousel',
    pause: false,
    touch: true,
    wrap: true
  });
}
// ===== CAMBIO AUTOMÁTICO ENTRE FERCHO / FEID / SALOMÓN =====
const ferxxoNames = [
  { text: "FERXXO 💚", color: "#00ff66", font: "'Poppins', sans-serif" },
  { text: "FEID 💛", color: "#ffee00", font: "'Bebas Neue', sans-serif" },
  { text: "SALOMÓN ❤️", color: "#dd1992ff", font: "'Audiowide', cursive" }
];

let index = 0;

function changeFerxxo() {
  const name = document.getElementById("ferxxo-name");
  if (name) {
    const current = ferxxoNames[index];
    name.textContent = current.text;
    name.style.color = current.color;
    name.style.fontFamily = current.font;
    name.style.textShadow = `0 0 10px ${current.color}, 0 0 25px ${current.color}`;
    index = (index + 1) % ferxxoNames.length;
  }
}

// Cambia cada 3 segundos
setInterval(changeFerxxo, 3000);

// 💫 Hace que la barra cambie cuando bajas
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-bg");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

