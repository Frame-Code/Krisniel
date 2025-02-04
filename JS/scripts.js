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

function showLastMessage() {
  if(window.matchMedia("(max-width: 768px)").matches) {
    let collage = d.querySelector(".collage");
    let imgCollage = d.querySelector(".imgCollage");
    let textCollage = d.querySelector(".textCollage");
    collage.style.display = "flex";
    setTimeout( () => {
      imgCollage.style.animation = "fadeOut 3s forwards";
    }, 5000);
    setTimeout( () => {
      imgCollage.style.display = "none";
      collage.style.display = "flex";
      collage.style.flexDirection = "column"
      collage.style.alignItems = "center";
      collage.style.justifyContent = "center";
      collage.style.height = "70%";
      collage.style.gap = "20px";
      collage.style.top = "50%";
      textCollage.style.fontSize = "14px";
      textCollage.style.display = "flex";
      textCollage.style.marginLeft = "300px";
      textCollage.style.marginTop = "409px";
      textCollage.style.width = "100%";
      textCollage.style.animation = "fadeIn 2s forwards";
    }, 7000);
  } else {
    d.querySelector(".collage").style.display = "flex";
  }
}

d.querySelector(".btnShow").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  let timeToStop = 3000;
  let intervalID = setInterval(createHeart, 90);
  setTimeout(() => {
    stopAnimation(intervalID);
  }, timeToStop);

  // Show the message after the hearts stop floating
  setTimeout(() => {
    d.querySelector(".love-message").style.display = "block";
    d.querySelector(".love-message").style.top = "35%";
    d.querySelector(".formDayMet").style.display = "block"; 
  }, timeToStop);
});

d.querySelector(".btnFollow1").addEventListener("click", function (e) {
  e.preventDefault();
 
  let dayMet = d.querySelector(".inputDayMet").value;
  if (dayMet == "25") {
    d.querySelector(".messageErrorOrCorrect1").innerHTML =
      "<br/>Correct! 🎉🎉🎉";
    setTimeout(() => {
      d.querySelector(".formDayMet").style.display = "none";
      d.querySelector(".formDayAnniversary").style.display = "block";
    }, 1500);
  } else {
    d.querySelector(".messageErrorOrCorrect1").innerHTML = "<br/>Incorrect! 😒😒😒";
  }
});

d.querySelector(".btnFollow2").addEventListener("click", function (e) {
  e.preventDefault();

  let dayAnniversary = d.querySelector(".inputDayAnniversary").value;
  if (dayAnniversary == "25") {
    d.querySelector(".messageErrorOrCorrect2").innerHTML =
      "<br/>Correct! 🎉🎉🎉";
    setTimeout(() => {
      d.querySelector(".formDayAnniversary").style.display = "none";
      d.querySelector(".formDayKiss").style.display = "block";
    }, 1500);
  } else {
    d.querySelector(".messageErrorOrCorrect2").innerHTML = "<br/>Incorrect! 😒😒😒";
  }
});

d.querySelector(".btnFollow3").addEventListener("click", function (e) {
  e.preventDefault();

  let dayKiss = d.querySelector(".inputDayKiss").value;
  if (dayKiss == "02" || dayKiss == "2") {
    d.querySelector(".messageErrorOrCorrect3").innerHTML =
      "<br/>Correct! 🎉🎉🎉";
    setTimeout(() => {
      d.querySelector(".formDayKiss").style.display = "none";
      d.querySelector(".love-message").style.display = "none";
      showLastMessage();
    }, 1500);
  } else {
    d.querySelector(".messageErrorOrCorrect3").innerHTML = "<br/>Incorrect! 😒😒😒";
  }
});