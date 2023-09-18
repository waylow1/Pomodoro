let workMin = 0;
let workSec = 10;

let  minWork = workMin ; 
let secWork = workSec;

let breakMin = 0;
let breakSec = 10;

let minBreak = breakMin;
let secBreak = breakSec;



let timerInterval;
let timerIntervalPause;

let label = document.querySelectorAll("p");
let boutonLancer = document.getElementById('lancer');
let boutonRedem = document.getElementById('redem');

function load() {
    document.getElementById("chrono").innerHTML = `${affichage(workMin)} : ${affichage(workSec)}`;
    boutonRedem.style.display = 'none';  
}

function affichage(chrono) {
    let temps = chrono.toString();
    if (temps.length < 2) {
        temps = '0' + temps;
    }
    return temps;
}




function travail() {
    label[0].style.color="lightgoldenrodyellow";
    label[1].style.color="whitesmoke";
    document.getElementById("chrono").innerHTML = `${affichage(workMin)} : ${affichage(workSec)}`;
    if (workMin != 0 || workSec!=0) {
        if (workSec > 0) {
            workSec--;
        }
        else{
            workSec = 59;
            workMin--;
        }
    }
    else{
        document.body.style.backgroundColor="Green";
        clearInterval(timerInterval);
        label[0].style.color="whitesmoke";
        label[1].style.color="lightgoldenrodyellow";

        breakMin=minBreak;
        breakSec=secBreak;

        timerIntervalPause = setInterval(pause,1000);
    } 
}

function pause(){
    document.getElementById("chrono").innerHTML = `${affichage(breakMin)} : ${affichage(breakSec)}`;
    if (breakMin != 0 || breakSec!=0) {
        if (breakSec > 0) {
            breakSec--;
        }
        else{
            breakSec = 59;
            breakMin--;
        }
    }
    else{
        document.body.style.backgroundColor="rgb(255,99,71)";
        clearInterval(timerIntervalPause);
        label[0].style.color="lightgoldenrodyellow";
        label[1].style.color="whitesmoke";

        
        workMin=minWork;
        workSec=secWork;

        timerInterval = setInterval(travail,1000);
        }
}


function run() {
        boutonLancer.style.display = 'none';
        boutonRedem.style.display = 'block';
        timerInterval = setInterval(travail, 1000);
}

function redem() {
   location.reload();
}

document.addEventListener("DOMContentLoaded", load);
