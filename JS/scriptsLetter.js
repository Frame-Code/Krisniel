d = document;

d.querySelector(".btnShow").addEventListener("click", function (e) {
  let music = d.querySelector(".music");
  if (music.paused) {
    music.play();
  }
  setTimeout(() => {
    d.querySelector(".btnShow").style.animation = "fadeInOut 3s ease-in-out 1";
    setTimeout(() => {
      d.querySelector(".btnShow").style.display = "none";
      d.querySelector(".happy-valentines").style.display = "block";
    }, 1000);
  }, 1000);
});

d.querySelector(".valentines-day-card").addEventListener("click", function (e) {
  if (window.matchMedia("(max-width: 768px)").matches) {
    d.querySelector(".text").innerHTML =
      "You're the best thing that ever happened to me!";
    d.querySelector(".text").style.fontSize = "24px";
    d.querySelector(".text").style.width = "304px";
    d.querySelector(".text").style.left = "35px";
  }
});

d.querySelector(".valentines-day-card").addEventListener(
  "dblclick",
  function (e) {
    if (window.matchMedia("(max-width: 768px)").matches) {
      d.querySelector(".text").innerHTML = "Happy Valentine's Day!";
      d.querySelector(".text").style.fontSize = "28px";
      d.querySelector(".text").style.width = "304px";
      d.querySelector(".text").style.left = "35px";
    }
  }
);
