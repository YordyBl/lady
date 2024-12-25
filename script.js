document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.createElement("audio");
  audioPlayer.id = "audio-player";
  audioPlayer.src = "./sound/jb.mp3";
  audioPlayer.autoplay = true;
  audioPlayer.loop = true;
  audioPlayer.preload = "auto";
  audioPlayer.muted = true; // Inicialmente silenciado
  document.body.appendChild(audioPlayer); // Agregar al DOM

  // Botón de reproducción
  const playButton = document.getElementById("play-button");

  playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer.muted = false;
      audioPlayer.play()
        .then(() => console.log("Reproducción iniciada"))
        .catch((error) => console.error("Error al reproducir audio:", error));
    } else {
      audioPlayer.pause();
      console.log("Audio pausado");
    }
  });

  // Objeto de puertas y sus imágenes de regalo
  const puertas = {
    // 1: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 2: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 3: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 4: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 5: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 6: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 7: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 8: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 9: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 10: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 11: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 12: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 13: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 14: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 15: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 16: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 17: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 18: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    // 19: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    25: { disponible: "./img/regalo/1.gif", noDisponible: "./img/regalo/0.gif" },
    26: { disponible: "./img/regalo/2.gif", noDisponible: "./img/regalo/0.gif" },
    27: { disponible: "./img/regalo/3.gif", noDisponible: "./img/regalo/0.gif" },
    28: { disponible: "./img/regalo/4.gif", noDisponible: "./img/regalo/0.gif" },
    29: { disponible: "./img/regalo/5.gif", noDisponible: "./img/regalo/0.gif" },
    30: {disponible: "./img/regalo/6.gif", noDisponible: "./img/regalo/0.gif"},
    31: {disponible: "./img/regalo/7.gif", noDisponible: "./img/regalo/0.gif" }
  };

  const modal = document.getElementById("modal-regalo");
  const modalImg = document.getElementById("regalo-img");
  const closeModal = document.getElementsByClassName("close")[0];
  const today = new Date();
  const diaActual = today.getDate();
  const mesActual = today.getMonth() + 1; // Los meses empiezan desde 0, por eso sumamos 1

  // Función para abrir el modal y mostrar la imagen correspondiente
  function abrirModal(imagen) {
    modalImg.src = imagen;
    modal.style.display = "flex";
  }

  // Cerrar el modal
  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  // Cerrar el modal si se hace clic fuera del contenido
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Controlar las puertas según la fecha
  for (let i = 1; i <= 24; i++) {
    const puerta = document.getElementById("puerta-" + i);
    const puertaDia = puerta.getAttribute("data-dia");

    // Si la fecha del día actual es mayor o igual que el día de la puerta, mostrar la imagen del regalo
    if (mesActual === 12 && diaActual >= puertaDia) {
      puerta.addEventListener("click", function (e) {
        e.preventDefault(); // Evitar que se abra un enlace
        abrirModal(puertas[puertaDia].disponible); // Abre el lightbox con la imagen del regalo
      });
    } else {
      puerta.addEventListener("click", function (e) {
        e.preventDefault(); // Evitar que se abra un enlace
        abrirModal(puertas[puertaDia].noDisponible); // Abre el lightbox con la imagen de "no disponible"
      });
    }
  }
  
});
