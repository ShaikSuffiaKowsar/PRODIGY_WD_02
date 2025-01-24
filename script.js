let timer;
let seconds = 0;
let isRunning = false;
let lapCounter = 1;

const startPauseButton = document.getElementById("startPauseButton");
const resetButton = document.getElementById("resetButton");
const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

startPauseButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        startPauseButton.textContent = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        startPauseButton.textContent = "Pause";
    }
    isRunning = !isRunning;
});

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    display.textContent = formatTime(seconds);
    startPauseButton.textContent = "Start";
    lapList.innerHTML = "";
    lapCounter = 1;
});

function updateTime() {
    seconds++;
    display.textContent = formatTime(seconds);
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}
