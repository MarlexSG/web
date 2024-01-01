document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    var navList = document.querySelector('.nav-list');

    // Toggle menu
    mobileMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        var isClickInside = mobileMenu.contains(event.target) || navList.contains(event.target);

        if (!isClickInside) {
            navList.classList.remove('show');
        }
    });
});
var botonMostrarInfo = document.getElementById('boton-mostrar-info');
  var infoAdicional = document.getElementById('informacion-adicional');

  // Mostrar información adicional al hacer clic en el botón
  botonMostrarInfo.addEventListener('click', function (event) {
    event.stopPropagation(); // Evitar que el clic en el botón propague al documento
    infoAdicional.style.display = (infoAdicional.style.display === 'none' || infoAdicional.style.display === '') ? 'block' : 'none';
  });

  // Ocultar información adicional al hacer clic fuera de la casilla
  document.addEventListener('click', function () {
    infoAdicional.style.display = 'none';
  });

  // Evitar que el clic en la información adicional propague al documento
  infoAdicional.addEventListener('click', function (event) {
    event.stopPropagation();
  });