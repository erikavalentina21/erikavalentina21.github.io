 /* Fuente: https://www.youtube.com/watch?v=dvtDGyftss0&ab_channel=CodingArtist */
window.onload = function() {
  var botonArriba = document.getElementById('botonArriba');

  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          botonArriba.style.display = "block";
      } else {
          botonArriba.style.display = "none";
      }
  };

  botonArriba.onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  };
};

function botonPulsado(boton) {
    if (boton instanceof HTMLButtonElement) {
        const destino = boton.dataset.destino;
        if (destino) {
            window.open(destino, '_blank');
        } else {
            alert("No se ha especificado un destino.");
        }
    } else {
        alert("El elemento no es un botón.");
    }
}



/* Boton para resetear/borrar cuestionario */
function reset(){
    document.getElementsById("miform").reset();
    }