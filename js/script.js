// ----------------------------------------------
// ✅ PARTICLES CONFIG
// ----------------------------------------------

// Config base para HERO (partículas blancas)
const particlesConfigHero = {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 6, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": false } // Desactivamos repulse
    }
  },
  "retina_detect": true
};

// Config para OVERLAY (partículas negras)
const particlesConfigOverlay = JSON.parse(JSON.stringify(particlesConfigHero));
particlesConfigOverlay.particles.color.value = "#000000";
particlesConfigOverlay.particles.line_linked.color = "#000000";

// Inicializa partículas HERO al cargar
particlesJS('particles-js', particlesConfigHero);

// Bandera para saber si ya cargaste partículas del overlay
let particlesOverlayLoaded = false;

// ----------------------------------------------
// ✅ INFORMACIÓN DE CADA SECCIÓN
// ----------------------------------------------

// TODAS TUS SECCIONES ORIGINALES COMPLETAS
const info = {
  nombre: {
    title: "LIMMINÉ",
    text: `
      <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
        <img src="images/LOGO.png" alt="LIMMINÉ Logo" style="max-width: 50%; height: auto; display: block; margin-bottom: 20px;">
        <p style="max-width: 800px; line-height: 1.6;">
          LIMMINÉ is a casual fashion brand that represents simplicity and style. Our name reflects our essence: simple, attractive, and full of character. Each piece is designed for people who want a clean, modern, and versatile look that adapts to any moment.
        </p>
      </div>
    `
  },

 presentacion: {
  title: "Presentation and Philosophy",
  text: `
    <h3>Who are we at Limminé?</h3>
    <p>At Limminé, we carefully select high-quality, minimalist clothing that combines comfort, elegance, and simplicity — pieces chosen to adapt to your lifestyle and express your individuality in a subtle yet powerful way.</p>
    
    <p>Welcome to Limminé. A world where fashion meets simplicity.</p>

    <h3>Our Philosophy</h3>
    <div style="display: flex; align-items: flex-start; gap: 20px;">
      <img src="https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg" alt="Our Philosophy" style="width: 200px; height: auto; object-fit: cover; border-radius: 8px;">
      <p>At Limminé, we believe in the power of simplicity. Our philosophy is based on the idea that less is more: less excess, more authenticity. We are inspired by clean lines, neutral tones, and shapes that flow naturally.</p>
    </div>
    <p>Each Limminé piece is chosen to be timeless, offering lasting style and comfort — selected for real life, not passing trends, and meant to help you express yourself every day.</p>
  `
},

  socios: {
  title: "Partners & Company Type",
  text: `
    <span style="position: relative; display: block;">
      <img src="images/Reunión empresarial en oficina moderna.png"
        alt="Decorativo"
        style="
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          pointer-events: none;
        ">
    </span>
    <p><strong>Legal Name:</strong><br>LIMMINÉ LTDA.</p>
    <p><strong>Partners:</strong><br>Andrés Santiago Pereira Sánchez<br>Ángel Daniel González Clavijo<br>Juan José Cuadrado Monterrosa<br>Juan Felipe Medina Zawadzky</p>
    <p><strong>Company Type:</strong><br>Limited Liability Company (LTDA)</p>
    <p>LIMMINÉ LTDA. is a Limited Liability Company formed by four partners who jointly participate in the management, operation, and development of the brand.</p>
  `
},

  objetivos: {
  title: "Goals, Mission & Vision",
  text: `
    <p>🌟 <strong>Vision</strong><br>To be recognized in the future as a casual clothing brand that redefines simplicity and elegance, offering timeless pieces for people who value authenticity, comfort, and clean design. LIMMINÉ aims to grow steadily, first building a strong local presence and then expanding to new markets, while always staying true to its minimalist essence.</p>
    <p>🎯 <strong>Mission</strong><br>To carefully select and offer high-quality casual clothing with simple, clean, and versatile designs that fit different lifestyles. At LIMMINÉ, we work with trusted suppliers, responsible practices, and a constant focus on customer satisfaction, inspiring trust and authenticity in every piece we offer.</p>
    <p>✅ <strong>General Objective</strong><br>To position LIMMINÉ as a well-known casual clothing brand recognized for its clean design, quality, and authenticity, strengthening its presence in the market by curating timeless pieces that meet the needs and tastes of its customers, while always maintaining responsible practices and sustainable growth.</p>
  `
},


  proveedores: {
    title: "Suppliers and Customers",
    text: `
      <h3>🌿 About Our Suppliers and Customers</h3>
<p>At LIMMINÉ LTDA., we believe that strong relationships with our suppliers and customers are key to our growth and success. We work closely with trusted suppliers who share our values of quality, responsibility, and attention to every detail. We carefully select high-quality garments and products to offer our customers comfortable, durable, and timeless options.</p>

<ul>
  <li>Adidas</li>
  <li>Converse</li>
  <li>Vans</li>
  <li>Hugo</li>
</ul>

<p>Our customers are at the center of everything we do. We aim to offer them casual clothing that makes them feel authentic and confident in their everyday life. We listen to their needs, value their feedback, and build long-lasting connections based on trust and satisfaction.</p>
<hr style="border: none; border-top: 1px solid #ccc; margin: 40px 0;">
<p>By working together with reliable suppliers and understanding our customers, we make sure that every piece from LIMMINÉ reflects our commitment to clean design, quality, and sustainability.</p>
`
  },

  productos: {
    title: "Products",
    text: `
      <!-- SHOES CAROUSEL -->
<div class="carousel">
  <h3>Shoes</h3>
  <div class="carousel-slide-wrapper">
    <div class="carousel-track">
      <div class="carousel-slide"><img src="images/shoes 1.png" alt="Shoe 1"></div>
      <div class="carousel-slide"><img src="images/shoes 2.jpg" alt="Shoe 2"></div>
      <div class="carousel-slide"><img src="images/shoes 3.jpg" alt="Shoe 3"></div>
    </div>
    <button class="carousel-btn prev" onclick="plusSlides(-1, 0)">&#10094;</button>
    <button class="carousel-btn next" onclick="plusSlides(1, 0)">&#10095;</button>
  </div>
</div>

<!-- SHIRTS CAROUSEL -->
<div class="carousel">
  <h3>Shirts</h3>
  <div class="carousel-slide-wrapper">
    <div class="carousel-track">
      <div class="carousel-slide"><img src="images/shirt 1.png" alt="Shirt 1"></div>
      <div class="carousel-slide"><img src="images/shirt 2.jpg" alt="Shirt 2"></div>
      <div class="carousel-slide"><img src="images/shirt 3.jpg" alt="Shirt 3"></div>
    </div>
    <button class="carousel-btn prev" onclick="plusSlides(-1, 1)">&#10094;</button>
    <button class="carousel-btn next" onclick="plusSlides(1, 1)">&#10095;</button>
  </div>
</div>

<!-- HOODIES CAROUSEL -->
<div class="carousel">
  <h3>Hoodies</h3>
  <div class="carousel-slide-wrapper">
    <div class="carousel-track">
      <div class="carousel-slide"><img src="images/hoddie 1.jpg" alt="Hoodie 1"></div>
      <div class="carousel-slide"><img src="images/hoddie 2.jpg" alt="Hoodie 2"></div>
      <div class="carousel-slide"><img src="images/hoddie 3.jpg" alt="Hoodie 3"></div>
    </div>
    <button class="carousel-btn prev" onclick="plusSlides(-1, 2)">&#10094;</button>
    <button class="carousel-btn next" onclick="plusSlides(1, 2)">&#10095;</button>
  </div>
</div>
    `
  },

  proyectos: {
  title: "Projects",
  text: `
<h3>LIMMINÉ</h3>
<p>LIMMINÉ is a growing project focused on carefully selecting high-quality, minimalist clothing that combines modern style with comfort and durability. Each piece is chosen to support personal style and confidence through timeless simplicity.</p>

<h3>Internal Projects</h3>
<p>At LIMMINÉ LTDA., we want our way of working to reflect who we are: a united, committed team aligned with our values. We aim to surround ourselves with suppliers who share our vision of quality and trust, so that every garment that reaches our customers speaks well of us and the work we do together.</p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 40px 0;">
<p><em>Together, LIMMINÉ and its internal projects form one clear purpose: to offer simple, timeless fashion that creates a positive impact — for the people who wear it, the people who choose it, and the world around us.</em></p>
  `
},


  ubicacion: {
    title: "Location & Contact",
    text: `
      <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
        <div style="flex: 1 1 350px; min-width: 280px;">
          <h3>📍 Find Us Here</h3>
          <p>Welcome to <strong>LIMMINÉ</strong> — your destination for clean, timeless fashion! 👕✨<br><br>
          Our headquarters is in the heart of Bogotá, Colombia 🇨🇴.<br>
          📌 Address: Diagonal 25c sur #3-91 Bogotá, Colombia<br>
          📧 Email: limmine.0725@gmail.com<br>
          📞 Phone: +57 322  353 0837</p>
        </div>
        <div style="flex: 1 1 350px; min-width: 280px; border-radius: 8px; overflow: hidden;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.5711076381256!2d-74.09366999558043!3d4.569261685912379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1751940507378!5m2!1ses!2sco" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    `
  }
};


// ----------------------------------------------
// ✅ ELEMENTOS Y SELECTORES CLAVE
// ----------------------------------------------

const links = document.querySelectorAll('#indice a');
const overlay = document.getElementById('content-overlay');
const contentData = document.getElementById('content-data');
const closeBtn = document.getElementById('close-btn');

const cornerLogo = document.getElementById('corner-logo');
const videoOverlay = document.getElementById('video-overlay');
const videoElement = document.getElementById('local-video');
const closeVideoBtn = document.getElementById('close-video-btn');

// ----------------------------------------------
// ✅ OVERLAY LOGIC
// ----------------------------------------------

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    if (info[target]) {
      contentData.innerHTML = `<h2>${info[target].title}</h2><div class="text-box">${info[target].text}</div>`;
      overlay.classList.add('show');
      document.body.classList.add('no-scroll');

      // Inicializa partículas solo 1 vez
      if (!particlesOverlayLoaded) {
        particlesJS('particles-overlay', particlesConfigOverlay);
        particlesOverlayLoaded = true;
      }

      // Si es productos, activa carruseles
      if (target === 'productos') {
        setTimeout(initCarousels, 50);
      }

      stopAutoScroll(); // ✅ Detiene scroll
    }
  });
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
  document.body.classList.remove('no-scroll');
  startAutoScroll(); // ✅ Reanuda scroll
});

// ----------------------------------------------
// ✅ VIDEO LOGIC
// ----------------------------------------------

cornerLogo.addEventListener('click', e => {
  e.preventDefault();
  videoElement.src = "images/VIDEO.mp4";
  videoElement.play();
  videoOverlay.classList.add('show');
  stopAutoScroll(); // Opcional: detiene scroll cuando hay video
});

closeVideoBtn.addEventListener('click', () => {
  videoOverlay.classList.remove('show');
  videoElement.pause();
  videoElement.currentTime = 0;
  startAutoScroll(); // Reanuda scroll al cerrar video
});

// ----------------------------------------------
// ✅ CARRUSELES
// ----------------------------------------------

let slideIndex = [0, 0, 0];

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let slides = document.querySelectorAll(`.carousel:nth-of-type(${no + 1}) .carousel-track .carousel-slide`);
  if (n >= slides.length) slideIndex[no] = 0;
  if (n < 0) slideIndex[no] = slides.length - 1;
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex[no]].style.display = "block";
}

function initCarousels() {
  for (let i = 0; i < slideIndex.length; i++) {
    showSlides(slideIndex[i], i);
  }
}

initCarousels(); // Si quieres iniciar al cargar

// ----------------------------------------------
// ✅ AUTO SCROLL INFINITO
// ----------------------------------------------

let autoScrollInterval = null;

function startAutoScroll() {
  stopAutoScroll(); // Limpia intervalos previos
  autoScrollInterval = setInterval(() => {
    window.scrollBy(0, 1); // Scroll de 1px
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      window.scrollTo({ top: 0 });
    }
  }, 30); // Velocidad del scroll
}

function stopAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
}

// ✅ Empieza scroll cuando carga la página
startAutoScroll();

