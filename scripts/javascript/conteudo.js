const container = document.getElementById("mediaContainer");
const media = ["assets/videos/cocytus1.mp4", "assets/videos/cocytus2.mp4", "assets/videos/ascensionteaser.mp4", "assets/videos/bang.mov", "assets/images/dumped.gif", "assets/videos/seal.mov", "assets/images/sonic.jpg", "assets/images/ok.png", "assets/images/ketchup.jpg", "assets/images/house.jpg", "assets/images/yumers.png", "assets/images/fat.jpg", "assets/images/served.png", "assets/images/fat2.jpg", "assets/images/kiss.png"];
const noises = ["assets/sounds/noise1.wav", "assets/sounds/noise2.wav",  "assets/sounds/noise3.wav"];

const clique = new Audio("assets/sounds/switch.wav");
let mudar = true; let mudanca = -1; let barulheira = null;

function statica() {
    const staticImg = document.getElementById("static"); staticImg.style.transition = "none"; staticImg.style.opacity = "1";
    setTimeout(() => {staticImg.style.transition = "opacity 0.7s ease"; staticImg.style.opacity = "0"; }, 30);
}

function escolher() {
    let indice; do {indice = Math.floor(Math.random() * media.length);} while (indice === mudanca && media.length > 1);
    mudanca = indice; return media[indice];
}

function conteudos() {
    if (barulheira) {barulheira.pause(); barulheira.currentTime = 0;}
    const file = noises[Math.floor(Math.random() * noises.length)];
    barulheira = new Audio(file); barulheira.loop = true; barulheira.volume = 0.5; barulheira.play();
}

function escolhido(force = false) {
    if (!mudar && !force) return;
    mudar = false; statica();
    conteudos(); clique.currentTime = 0; clique.play();

    const file = escolher();
    if (file.match(/\.(mp4|webm|mov|ogg)$/i)) {container.innerHTML = `<video id="currentVideo" autoplay playsinline disablepictureinpicture disableremoteplayback><source src="${file}"></video>`;
        const video = document.getElementById("currentVideo"); video.addEventListener("ended", () => {escolhido(true);});
    } else {
        container.innerHTML = `<img src="${file}" alt="">`;
    }
    setTimeout(() => {mudar = true;}, 1000);
}

document.addEventListener("click", () => {escolhido();});