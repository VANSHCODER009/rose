const petalsContainer = document.getElementById("petals-container");

function createPetal() {
  const petal = document.createElement("img");
  petal.src = "https://cdn-icons-png.flaticon.com/512/415/415733.png";
  petal.className = "petal";

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (4 + Math.random() * 4) + "s";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 8000);
}

setInterval(createPetal, 400);

function giveRose() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    alert("Please enter a name 🌹");
  } else {
    alert("🌹 Rose given to " + name + "!");
  }
}
