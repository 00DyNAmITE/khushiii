// Moves the 'No' button to a random position
function moveNoButton() {
    const noBtn = document.getElementById("noBtn");
    const x = Math.floor(Math.random() * window.innerWidth - 100);
    const y = Math.floor(Math.random() * window.innerHeight - 50);
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }
  
  // Redirects to the surprise page
  function redirectToSurprise() {
    window.location.href = "surprise.html";
  }
  