// On attend que le DOM soit chargé avant de sélectionner les éléments
document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  const colorCode = document.getElementById("color-code");

  // Génère une couleur hexadécimale aléatoire, ex : "#A3F01C"
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Au clic : nouvelle couleur de fond pour la boîte
  changeColorBtn.addEventListener("click", function () {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
  });
});
