var button = document.querySelector(".random-button");

button.addEventListener("mouseover", function() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var randomX = Math.floor(Math.random() * (screenWidth - button.offsetWidth));
    var randomY = Math.floor(Math.random() * (screenHeight - button.offsetHeight));

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});