const images = [
    "1000358869.jpg",
    "1000016125.jpg",
    "1000000087.jpg",
    "1000000129.jpg",
    "1000027745.jpg",
    "1000046683.jpg",
    "1000046670.jpg",
    "1000103059.png",
    "1000228386.jpg",
    "1000359333.jpg",
    "1000359337.jpg"
];

let currentImageIndex = 0;
const slideshowContainer = document.querySelector(".slideshow-container");

function startSlideshow() {
    images.forEach((image, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = `Foto ${index + 1}`;
        if (index === 0) {
            imgElement.classList.add("active");
        }
        slideshowContainer.appendChild(imgElement);
    });

    setInterval(() => {
        const currentImage = slideshowContainer.children[currentImageIndex];
        currentImage.classList.remove("active");

        currentImageIndex = (currentImageIndex + 1) % images.length;
        const nextImage = slideshowContainer.children[currentImageIndex];
        nextImage.classList.add("active");
    }, 3000); // Muda a imagem a cada 3 segundos
}

// Contagem regressiva
const countdownElement = document.getElementById("countdown");
const targetDate = new Date("2025-11-26T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Nosso aniversário de 3 anos chegou!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Chama a função imediatamente para evitar atraso inicial

// Corações flutuantes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.width = `${Math.random() * 20 + 10}px`;
    heart.style.height = heart.style.width;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, parseFloat(heart.style.animationDuration) * 1000);
}

setInterval(createHeart, 300); // Cria um novo coração a cada 300ms

// Música de fundo
const music = document.getElementById("background-music");
const playPauseButton = document.getElementById("play-pause-button");

playPauseButton.addEventListener("click", () => {
    if (music.paused) {
        music.play().then(() => {
            playPauseButton.textContent = "⏸️ Parar";
        }).catch(() => {
            alert("Adicione o arquivo 'os-anjos-cantam.mp3' na pasta do projeto para ouvir a música!");
        });
    } else {
        music.pause();
        playPauseButton.textContent = "🎵 Play";
    }
});

// Inicia o slideshow quando a página carrega
window.onload = startSlideshow;


