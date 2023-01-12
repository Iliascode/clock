const elHour = document.getElementById("hours");
const elMinutes = document.getElementById("minutes");
const elSeconds = document.getElementById("seconds");
const elampm = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
if(h > 12) {
    h = h - 12;
    ampm = "PM";
}
h = h < 10 ? "0" + h:h;
m = m < 10 ? "0" + m:m;
s = s < 10 ? "0" + s:s;
elHour.innerText = h;
elMinutes.innerText = m;
elSeconds.innerText = s;

setTimeout(() => {
    updateClock()
}, 1000)
}
updateClock();
