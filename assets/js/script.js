// Tootips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('#quienes-somos', {
    duration: 2500,
    delay: 300
});

// Cambio de color al navbar:

// Añade un evento de escucha para el evento de scroll
window.addEventListener('scroll', function() {
  // Obtiene la altura del scroll actual
  const scrollPosition = window.scrollY;

  // Obtiene el navbar por su ID
  const navbar = document.getElementById('naavbarr');

  // Si la posición del scroll es mayor a 50px, cambia el color
  if (scrollPosition > 400) {
    navbar.classList.add('navbar-color-change');
  } else {
    navbar.classList.remove('navbar-color-change');
  }
});

// Para prevenir que la página suba al presionar el botón
document.querySelector('.btn[data-bs-toggle="popover"]').addEventListener('click', function(e) {
  e.preventDefault();
});

// Para oculpar popover luego de un tiempo
$(document).ready(function(){
  $('[data-bs-toggle="popover"]').popover().on('shown.bs.popover', function(){
    var _this = this;
    setTimeout(function(){
      $(_this).popover('hide');
    }, 1600);
  });
});