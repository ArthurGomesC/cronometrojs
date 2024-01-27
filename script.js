const minutess= document.querySelector('#minutes')
const secondss = document.querySelector('#seconds')
const milisecondss = document.querySelector('#miliseconds')
const startbtn = document.querySelector('#startbtn')
const resumebtn = document.querySelector('#resumebtn')
const pausebtn = document.querySelector('#pausebtn')
const resetbtn = document.querySelector('#resetbtn')

let interval;
let minutes = 0;
let seconds= 0;
let miliseconds = 0;
let paused = false;

startbtn.addEventListener('click', starttime);
pausebtn.addEventListener('click', pausetime)
resumebtn.addEventListener('click', resumetime)
resetbtn.addEventListener('click', resettime)

function starttime() {
    interval = setInterval(() => {
        if(!paused) {
           miliseconds += 10;

           if (miliseconds === 1000) {
            seconds++;
            miliseconds = 0;
           }
           if (seconds === 60) {
            minutes++;
            seconds = 0;
           }

            minutess.textContent = padleftmin(minutes);
            secondss.textContent = padleftsec(seconds);
            milisecondss.textContent = padleftmili(miliseconds);
        }
    }, 10)

    startbtn.style.display = 'none';
    pausebtn.style.display = 'block';
}

function pausetime() {
    paused = true;
    pausebtn.style.display = 'none';
    resumebtn.style.display = 'block';
}

function resumetime() {
    paused = false;
    resumebtn.style.display = 'none';
    pausebtn.style.display = 'block';    
}

function resettime() {
    clearInterval(interval)
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutess.innerHTML = '00';
    secondss.innerHTML = '00';
    milisecondss.innerHTML = '000';

    startbtn.style.display = 'block'
    pausebtn.style.display = 'none'
    resumebtn.style.display = 'none'
}

function padleftmin(minutes) {
    return minutes < 10 ? '0' + minutes : minutes;
}

function padleftsec(seconds) {
    return seconds < 10 ? '0' + seconds : seconds;
}

function padleftmili(miliseconds) {
    return miliseconds < 100 ? '0' + miliseconds : miliseconds;
