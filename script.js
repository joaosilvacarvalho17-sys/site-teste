let button = document.getElementById("notifyButton");
let height = window.innerHeight; - 50;
let width = window.innerWidth; - 50;

button.addEventListener("mouseover", function() {
        button.style.position = "absolute";
        button.style.top = Math.floor(Math.random() * height) + "px";
        button.style.left = Math.floor(Math.random() * width) + "px";
})