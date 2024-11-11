let [seconds, minutes, hours] = [0, 0, 0];
let timer = document.getElementById("timer");
let time = null;

function watch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  timer.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function start() {
  if (time != null) {
    clearInterval(time);
  }
  time = setInterval(watch, 1000);
}

function stop() {
  clearInterval(time);
}

function reset() {
  clearInterval(time);
  [seconds, minutes, hours] = [0, 0, 0];

  timer.innerHTML = "00:00:00";
}
