const btnEchange = document.getElementById("btnEchange");

window.addEventListener("resize", () => {
  // Vérifiez la largeur de l'écran
  if (window.innerWidth >= 1440) {
    // Changez le texte du bouton
    btnEchange.textContent =
      "Nous pouvons échanger sur la réglementation RGPD et mettre en place des solutions adaptées à votre situation";
  } else {
    // Revert to original button text if less than 1440px
    btnEchange.textContent = "Échangeons nous";
  }
});
