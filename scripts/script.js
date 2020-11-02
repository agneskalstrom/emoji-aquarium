const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const w = canvas.width;
const h = canvas.height;

const fish = [
        "🐟",
        "🐬",
        "🐡",
        "🐙",
        "🐠",
        "🐳",
        "🦀",
        "🦐",
        "🦈",
        "🦑",
        "🦞"
        ];

const button = document.getElementById("button");
button.addEventListener("click", generateFish);

setInterval (function () {
    ctx.clearRect(0, 0, w, h);
}, 10);


function generateFish() {
    let randFish = Math.floor(Math.random() * fish.length);
    let size = Math.floor((Math.random() * 150) + 20);
    let speed = Math.random() * 2;
    let x = event.clientX;
    let y = event.clientY;
    let xp = speed;

    function addFish() {
        ctx.beginPath();
        ctx.font = "" + size + "px sans-serif";
        ctx.fillText(fish[randFish], x, y);
    }

    function moveFish() {
        addFish();
        if(x + xp > w - size || x + xp  < 0) {
            xp = -xp;
        }
        x += xp;
        requestAnimationFrame(moveFish);
    }
    requestAnimationFrame(moveFish);
}