let lapbtn = document.querySelector("#lap")
let stopbtn = document.querySelector("#stop")
let resetbtn = document.querySelector("#reset")
let startbtn = document.querySelector("#start")
let resumebtn = document.querySelector("#resume")
let display = document.querySelector(".timer")
let milisec = 0;
let sec = 0;
let minu = 0;
let timer = null;
let lapcounter = 1;
let table = document.querySelector(".tables")
let no = document.querySelector(".number");
const laps = document.querySelector("#laps ")
const hide = (btn) => {
  btn.style.display = "none";
}

const show = (btn) => {
  btn.style.display = "inline-block";
}
hide(stopbtn);
hide(resetbtn);
hide(resumebtn);
hide(laps)
lapbtn.disabled = true;

startbtn.addEventListener("click", () => {
  hide(startbtn);
  show(stopbtn);
  lapbtn.disabled = false;
  if (timer !== null) return;
  timer = setInterval(stratclock, 10);
});

stopbtn.addEventListener("click", () => {
  hide(stopbtn);
  show(resumebtn);
  hide(lapbtn);
  show(resetbtn);
  clearInterval(timer);
  timer = null;
});

resumebtn.addEventListener("click", () => {
  hide(resetbtn);
  show(lapbtn);
  hide(resumebtn);
  show(stopbtn)
  if (timer !== null) return;
  timer = setInterval(stratclock, 10);
});
resetbtn.addEventListener("click", () => {
  hide(resetbtn);
  show(startbtn);
  hide(resumebtn);
  show(lapbtn);
  timer = null;
  milisec = 0;
  sec = 0;
  minu = 0
  display.innerText = `00:00:00`
  lapbtn.disabled = true
  laps.innerHTML = "<h4>LAPS<h4>"
  hide(laps)
});

lapbtn.addEventListener("click",() => {
  let lapTime = display.innerText;
  const lap = document.createElement("div") ;//for 00:00:00 of lAP
  lap.innerText = `Lap ${lapcounter}: ${lapTime} ` ;
  laps.appendChild(lap);
  show(laps)
  lapcounter++
});

const stratclock = () => {
  milisec++;
  if (milisec === 100) {
    milisec = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      minu++
    }
  }
  let ms = milisec < 10 ? "0" + milisec : milisec;
  let s = sec < 10 ? "0" + sec : sec;
  let m = minu < 10 ? "0" + minu : minu;
  display.innerText = `${m}:${s}:${ms}`
};


