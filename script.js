const screens = document.querySelectorAll(".screen");
const hearts = document.getElementById("hearts");

let current = 0;

function nextScreen() {
    screens[current].classList.remove("active");

    current++;

    if (current < screens.length) {
        screens[current].classList.add("active");
    }
}

// Падающие сердечки
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 400);