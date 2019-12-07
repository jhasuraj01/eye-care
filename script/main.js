//global variables
var min, sec, total_sec, tog = null;
const val = .1;
var music;
// event listener
window.addEventListener('load', init);

function init() {
    total_sec = val * 60;
    min = document.getElementById('min');
    sec = document.getElementById('sec');
    music = new Audio('sound/music.mp3');
    show_time();
}

//to start and stop the timer
function start_timer() {
    let btn = document.getElementsByTagName('button')[0];
    if (tog == null) {
        tog = setInterval(() => {
            total_sec--;
            show_time();
        }, 1000);
        btn.innerText = 'Stop';
    } else {
        clearInterval(tog);
        total_sec = val * 60;
        show_time();
        tog = null;
        btn.innerText = 'Start';
        if (document.getElementById('vibrate').checked) {
            window.navigator.vibrate(0);
        }
        if (document.getElementById('sound').checked) {
            music.pause();
            music.currentTime = 0;
        }
    }
}

// to display remaining time
function show_time() {

    if (total_sec % 60 < 10) {
        sec.innerText = '0' + total_sec % 60;
    } else {
        sec.innerText = total_sec % 60;
    }

    //for minutes
    if (Math.floor(total_sec / 60) < 10) {
        min.innerText = '0' + Math.floor(total_sec / 60);
    } else {
        min.innerText = Math.floor(total_sec / 60);
    }
    if (total_sec <= 0) {
        clearInterval(tog);
        min.innerText = '00';
        sec.innerText = '00';
        if (document.getElementById('vibrate').checked) {
            window.navigator.vibrate([800, 300, 800, 300, 800, 300, 800, 300, 800]);
        }
        if (document.getElementById('sound').checked) {
            music.play();
        }

    }
}

//to open setting and close it
function sett() {
    let sett = document.getElementsByTagName('section')[0];
    sett.classList.toggle('open');
}
