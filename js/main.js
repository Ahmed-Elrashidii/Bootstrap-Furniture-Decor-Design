window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
      loader.classList.add("hidden");

      setTimeout(() => {
        loader.style.display = "none"; 
        mainContent.style.display = "block"; 
      }, 500); 
    }, 500);
  });