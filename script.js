let fontIndex = 0;

function fetchAndShowQuote() {
  const fonts = ["Barriecito", "Sora", "Matangi", "Roboto", "Lobster", "Montserrat", "Indie Flower"];
  fetch("randomQuotes.php")
    .then((res) => res.text())
    .then((data) => {
      const quoteContainer = document.getElementById("quote-container");
      quoteContainer.innerText = data;
      quoteContainer.style.display = "block";
      quoteContainer.style.fontFamily = `"${fonts[fontIndex]}", sans-serif`;
      quoteContainer.classList.add("fade-in");
      setTimeout(() => quoteContainer.classList.remove("fade-in"), 1000);
      fontIndex = (fontIndex + 1) % fonts.length;
    })
    .catch((err) => {
      console.error("AJAX Error:", err);
      alert("Ajax Error");
    });
}

document.getElementById("fetchData").addEventListener("click", fetchAndShowQuote);

