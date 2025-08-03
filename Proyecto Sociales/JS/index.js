// Verificar si ya se ha mostrado el mensaje antes

// Mostrar el mensaje de pantalla completa
document.getElementById('mensaje').style.display = 'flex';

// Ocultar el contenido principal temporalmente
document.querySelector('.contenedor').style.opacity = '0';


// Configurar el botón de cerrar
document.getElementById('cerrar').addEventListener('click', function() {
  // Ocultar el mensaje
  document.getElementById('mensaje').style.display = 'none';
  // Mostrar el contenido principal
  document.querySelector('.contenedor').style.opacity = '1';
  // Marcar como visto en localStorage
  //localStorage.setItem('mensajePantallaCompletaVisto', 'true');
});