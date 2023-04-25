const startInput = document.getElementById("start");

startInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {  // Check if Enter key is pressed
    if (startInput.value.toLowerCase() === "start") {  // Check if the input value is "start"
      window.location.href = "start.html";  // Redirect to corridors.html
    }
  }
});

