// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Button click event listener
    document.getElementById('alertButton').addEventListener('click', function() {
        // Show an alert when clicked
        alert("You just activated the chicken magic! 🐔✨");

        // Change the button text after click
        this.innerText = "You activated the magic! 🐔";
        this.style.backgroundColor = "#ff3300";
    });
});