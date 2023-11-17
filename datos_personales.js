var timeout;

function startShake() {
  var container = document.getElementById("container");
  container.classList.add("shake-animation");

  clearTimeout(timeout);
  timeout = setTimeout(stopShake, 3000); // Detiene la agitación después de 3 segundos (3000 milisegundos)
}

function stopShake() {
  var container = document.getElementById("container");
  container.classList.remove("shake-animation");
}
