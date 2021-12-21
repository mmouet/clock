// INSTRUCTIONS 
// Build a clock using JavaScript.
// Display the hours, minutes, and seconds.
// The clock should run by itself. (Hint: look at JavaScript setInterval function)


setInterval(displayTime, 1000);

function displayTime() {
  const time = new Date();
  document.getElementById("clock").innerHTML = time.toLocaleTimeString();
}