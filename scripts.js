document.addEventListener("DOMContentLoaded", () => {
  // AOS initialization
  AOS.init();

  // GSAP Animations
  gsap.from("#home h1", { duration: 2, y: -50, opacity: 0, ease: "bounce" });

  // Anime.js Animations
  anime({
    targets: "#features",
    translateY: [-100, 0],
    duration: 1500,
    easing: "easeOutExpo",
  });

  // ScrollReveal Animations
  ScrollReveal().reveal("#use-cases", {
    duration: 2000,
    origin: "bottom",
    distance: "100px",
  });

  // Lottie Animations
  lottie.loadAnimation({
    container: document.querySelector("#home"), // animasyonun yükleneceği element
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "path/to/animation.json", // Lottie animasyon dosyası
  });

  // Velocity.js Animations
  Velocity(document.querySelector("#contact"), "transition.slideUpIn", {
    duration: 1500,
  });
});
