/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

document.getElementById("btnComenzar").addEventListener("click", comenzarJuego);

let numero;

function comenzarJuego() {
  // número aleatorio entre 1 y 100
  numero = Math.floor(Math.random() * 100) + 1;

  //sección del juego
  document.getElementById("juego").style.display = "block";

  // Agregar el evento click al botón de enviar
  document
    .getElementById("btnEnviar")
    .addEventListener("click", verificarAdivinanza);
}

function verificarAdivinanza() {
  //número ingresado por el usuario
  const numeroUsuario = parseInt(document.getElementById("numeroInput").value);

  if (isNaN(numeroUsuario)) {
    alert("Por favor, ingrese un número válido.");
    return;
  }

  // Verificar si adivino el número
  if (numeroUsuario === numero) {
    alert("¡Felicidades! ¡Adivinaste el número!");
    finalizarJuego();
  } else {
    // Informar si su número es mayor o menor
    const mensaje = numeroUsuario < numero ? "El número es mayor." : "El número es menor.";
    alert(mensaje);
  }
}

function finalizarJuego() {
  // Reiniciar el juego
  document.getElementById("juego").style.display = "none";
  document.getElementById("numeroInput").value = "";
}
