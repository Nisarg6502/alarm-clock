var hou = document.getElementById("hours"); //getting the ids of hours, mins and secs
var min = document.getElementById("minutes");
var sec = document.getElementById("second");
var Hours; //defining global variables
var Minutes;
var Seconds;
//sets a time interval to repeat. 
//fUNCTION for the Clock
setInterval(() => {
    let d = new Date(); //creating a variable to get the Time
    let h = d.getHours(); //creating a variable to get hours and so on..
    let m = d.getMinutes();
    let s = d.getSeconds();
    Hours = 30 * h + m / 2 + s / 120; //calculating
    Minutes = 6 * m + s / 10;
    Seconds = 6 * s;
    m = checkTime(m); //calling function
    s = checkTime(s);
    h = checkTime(h);
    document.getElementById("display1").innerHTML = h.toString(); //displaying output
    document.getElementById("display2").innerHTML = m.toString(); //displaying output
    document.getElementById("display3").innerHTML = s.toString(); //displaying output
    // var i = 0;
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    hou.style.transform = `rotate(${Hours}deg)`; //rotates the hands from the centre but we used bottom in css
    min.style.transform = `rotate(${Minutes}deg)`;
    sec.style.transform = `rotate(${Seconds}deg)`;
}, 1000); //time interval 1000ms
//Setting the alarm
function setAlarm() {
    let h = document.getElementById("h"); //getting input values of hour and ...
    let m = document.getElementById("m");
    let s = document.getElementById("s");
    let h1 = parseFloat(h.value); //converting the input values from string to float
    let m1 = parseFloat(m.value);
    let s1 = parseFloat(s.value);
    var timer = document.getElementById("time").valueAsNumber; //getting input of time element and
    // console.log(timer/1000);
    // console.log(new Date().getTime())
    const interval = setInterval(function () {
        var curTime = (new Date().getHours()) * 3600 + (new Date().getMinutes()) * 60 + new Date().getSeconds();
        // console.log(curTime)
        var duration = (timer / 1000 - curTime);
        console.log(duration);
        var calc = (h1 * 3600) + (m1 * 60) + (s1);
        console.log(curTime);
        console.log(calc);
        if (duration == 0 || (calc - curTime) == 0) {
            document.querySelector("audio").play(); //plays audio
            clearInterval(interval);
        }
    }, 1000);
    var rHours = new Date().getHours();
    var rMinutes = new Date().getMinutes();
    var rSeconds = new Date().getMinutes();
}
//# sourceMappingURL=clock.js.map