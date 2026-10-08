let seconds = 0;
let minutes = 0;
let hours = 0;

let timer;

let display = document.getElementById("display");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");


start.addEventListener("click", function () {

    timer = setInterval(function () {

        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }

        display.innerText =
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

    }, 1000);

});


stop.addEventListener("click", function () {

    clearInterval(timer);

});


reset.addEventListener("click", function () {

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    display.innerText = "00:00:00";

});
