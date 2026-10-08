let seconds = 0;
let minutes = 0;
let hours = 0;

let timer;
let running = false

let display = document.getElementById("display");

let start = document.getElementById("start");
// let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let lap = document.getElementById("laps");

let laplist = document.getElementById("list");
let lapCount = 0;

start.addEventListener("click", function () {
  if (running == false) {
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
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
    }, 1000);

    running = true;
    start.innerText = "pause";
  }

      else{
        clearInterval(timer)
        running = false;
        start.innerText = "start"
      }
});

lap.addEventListener("click",function(){

    if(running == true){
        lapCount ++ 

        let li = document.createElement("li")

        li.innerText=
        "lap" + lapCount +" - " + 
        String(hours).padStart(2,"0") + ":" +
        String(minutes).padStart(2,"0") + ":"+
        String(seconds).padStart(2,"0");

        laplist.appendChild(li)
    }

});

reset.addEventListener("click",function(){

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    running = false;
    lapCount = 0

    display.innerText = "𝟎𝟎:𝟎𝟎:𝟎𝟎"
    start.innerText = "Start"

    laplist.innerHTML= ""
})