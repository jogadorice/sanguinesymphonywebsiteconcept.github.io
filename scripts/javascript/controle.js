const remote = document.getElementById("remote");
let mx = innerWidth / 2, my = innerHeight / 2;
let x = mx, y = my, rot = 0;

function invenciblebounceanimation() {
    x += (mx - x) * 0.15;  y += (my - y) * 0.15; rot += ((mx - x) * 0.1 - rot) * 0.15;
    remote.style.transform = `translate(${x}px,${y}px) rotate(${rot}deg)`;
    requestAnimationFrame(invenciblebounceanimation);
}

invenciblebounceanimation();
document.addEventListener("mousemove", e => {mx = e.clientX; my = e.clientY;});