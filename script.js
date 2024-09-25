const image = document.querySelector('.image');
const counter = document.querySelector('.counter');
let count = 0;
image.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    const audio = new Audio(randomNumber === 1 ? 'kept.mp3' : 'sound.mp3'); 
    audio.play();
    count++;
    counter.textContent = count;
});
