const playerNameInput = document.getElementById("playerName");
const buttonsDiv = document.getElementById("buttons");

playerNameInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const playerName = playerNameInput.value.trim();
    if (playerName.length > 0) {
      const nameInputDiv = document.getElementById("nameInput");
      nameInputDiv.style.display = "none";

      buttonsDiv.innerHTML = `<p>Are you ready to begin, ${playerName}?<p>
        <button id="yesBtn">YES</button>
        <button id="noBtn">NO</button>`;
      const playBtn = document.getElementById("yesBtn");
      const optionsBtn = document.getElementById("noBtn");

      playBtn.addEventListener("click", function() {
        const url = '/corridors.html';
        const data = { playerName: playerName };
        fetch('/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        .then(response => {
          console.log(response);
          window.location.href = url;
        })
        .catch(error => {
          console.error(error);
        });
      });
      
      optionsBtn.addEventListener("click", function() {
        window.location.href = "/home.html";
      });
    }
  }
});