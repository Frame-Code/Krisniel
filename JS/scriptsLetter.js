const d = document;
let textLetter = d.querySelector(".text");

verifyClassList();

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
  if (window.matchMedia("(max-width: 500px)").matches) {
    textLetter.innerHTML =
      "You're the best thing that ever happened to me!";
    textLetter.style.fontSize = "24px";
    textLetter.style.width = "304px";
    textLetter.style.left = "35px";
  }
});


d.querySelector(".valentines-day-card").addEventListener(
  "dblclick",
  function (e) {
    if (window.matchMedia("(max-width: 500px)").matches) {
      textLetter.innerHTML = "Happy Valentine's Day!";
      textLetter.style.fontSize = "28px";
      textLetter.style.width = "304px";
      textLetter.style.left = "35px";
    }
  }
);

function verifyClassList() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    textLetter.classList.add("disabled-hover");
  }
}

