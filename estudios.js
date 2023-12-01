// Obtén el botón y el texto desplegable utilizando su ID
const button = document.getElementById('myButton');
const text = document.getElementById('text');

// Agrega un evento de clic al botón
button.addEventListener('click', function() {
  // Verifica si el texto está oculto o visible
  if (text.style.display === 'none') {
    // Muestra el texto desplegable
    text.style.display = 'block';
  } else {
    // Oculta el texto desplegable
    text.style.display = 'none';

  }
});
