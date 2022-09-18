// get current time & update every second
setInterval(getTime = () => {
    let time = new Date();

    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    rotateHand(hour, minutes, seconds);
}, 1000);

let hourHand = document.querySelector('.hour-hand');
let minHand = document.querySelector('.min-hand');
let secHand = document.querySelector('.second-hand');

// rotate hands based on degrees
rotateHand = (h, m, s) => {
    hourHand.style.transformOrigin = '100%';
    hourHand.style.transform = `rotate(${(h * 15) + 45}deg)`;

    minHand.style.transformOrigin = '100%';
    minHand.style.transform = `rotate(${(m * 6) + 90}deg)`;

    secHand.style.transformOrigin = '100%';
    secHand.style.transform = `rotate(${(s * 6) + 90}deg)`;
}