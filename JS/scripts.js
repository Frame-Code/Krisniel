const d = document;

function createHeart() {
  const heart = d.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗 💗 💗🐩 🐢";

  //Generate a position for the heart and add it to the DOM in that random position
  const xPos = Math.random() * window.innerWidth;
  heart.style.left = `${xPos}px`;

  d.querySelector(".hearts-container").appendChild(heart);
}

function stopAnimation(intervalID) {
    const heartsContainer = d.querySelector(".hearts-container");
    heartsContainer.style.animation = "floatUpDisappearing 2s linear forwards";
    setTimeout(() => {
        heartsContainer.remove(); 
    }, 2000);
    clearInterval(intervalID);
}

d.getElementById("btnShow").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  let timeToStop = 4000;
  let intervalID = setInterval(createHeart, 100);
  setTimeout(() => {
    stopAnimation(intervalID);
  }, timeToStop);

  // Show the message after the hearts stop floating
  setTimeout(() => {
    document.querySelector(".love-message").style.display = "block";
  }, timeToStop);
});
