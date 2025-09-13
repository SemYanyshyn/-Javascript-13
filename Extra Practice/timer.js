function update() {
  let timer = document.getElementById("clock");
  let data = new Date();
  let hours = data.getHours();
  let minutes = data.getMinutes();
  let sec = data.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }
  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".sec").textContent = sec;
}

let timerId;

function clockStart() {
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }
}

function clockStop() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

document.querySelector(".start").addEventListener("click", clockStart);
document.querySelector(".stop").addEventListener("click", clockStop);
