const playerNameInput = document.getElementById("playerName");
const buttonsDiv = document.getElementById("buttons");

playerNameInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") { // Check if Enter key is pressed
    const playerName = playerNameInput.value.trim();
    if (playerName.length > 0) { // Check if player name is not empty
      const nameInputDiv = document.getElementById("nameInput");
      nameInputDiv.style.display = "none"; // hide the name input div
      
      buttonsDiv.innerHTML = `<p>Are you ready to begin, ${playerName}?<p>
        <button id="yesBtn">YES</button>
        <button id="noBtn">NO</button>`;
      const playBtn = document.getElementById("yesBtn");
      const optionsBtn = document.getElementById("noBtn");

      // Add click event listeners to the buttons
      playBtn.addEventListener("click", function() {
        window.location.href = "corridors.html?name=" + playerName;
      });

      optionsBtn.addEventListener("click", function() {
        window.location.href = "home.html?name=" + playerName;
      });
    }
  }
});
