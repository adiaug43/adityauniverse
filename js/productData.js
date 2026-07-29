        document.addEventListener("DOMContentLoaded", () => {
  // Website ki saari images ko select karein
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("error", function () {
      // Jab image load na ho, tab default image set karein
      this.src = "./assets/thumbnail/kits/loading.gif"; // Yahan apni default image ka URL/path dein
    });
  });
});
