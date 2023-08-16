var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

document.addEventListener("DOMContentLoaded", function() {
  // Obter o elemento de áudio
  var audioPlayer = document.getElementById("audioPlayer");

  // Verificar se o navegador suporta a tag de áudio e a reprodução automática
  if (audioPlayer && audioPlayer.canPlayType && audioPlayer.play) {
    // Tocar a música automaticamente (pode não funcionar em todos os navegadores)
    audioPlayer.play();
  }
});
