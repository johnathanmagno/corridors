const startInput = document.getElementById("1st");

startInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {  // Check if Enter key is pressed
    if (startInput.value.toLowerCase() === "left") {  // Check if the input value is "left"
      window.location.href = "/forest.html";  // Redirect to forest.html
    } else if (startInput.value.toLowerCase() === "right") {  // Check if the input value is "right"
      window.location.href = "/caves.html";  // Redirect to caves.html
    }
  }
});

