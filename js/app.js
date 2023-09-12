let tempsInitial = 25;
let tempsPause = 5;
let secondePause = 0;
let secondeInitial = 0;
let pause = false;
let timerInterval;

let label = document.querySelectorAll("p");
let boutonLancer = document.getElementById('lancer');
let boutonRedem = document.getElementById('redem');

function load() {
    document.getElementById("chrono").innerHTML = `${affichage(tempsInitial)} : ${affichage(secondeInitial)}`;
    boutonRedem.style.display = 'none';
}

function affichage(chrono) {
    let temps = chrono.toString();
    if (temps.length < 2) {
        temps = '0' + temps;
    }
    return temps;
}

function test() {
    if (!(tempsInitial <= 0)) {
        if (!(secondeInitial <= 0)) {
            document.getElementById("chrono").innerHTML = `${affichage(tempsInitial)} : ${affichage(secondeInitial)}`;
            secondeInitial--;
        }
        if (secondeInitial == 0) {
            secondeInitial = 59;
            tempsInitial--;
        }
    }
    if (pause) {
        label[0].style.color = "whitesmoke";
        label[1].style.color = "lightgoldenrodyellow";
    }
}

function lancer() {
    pause = false;
    boutonLancer.style.display = 'none';
    boutonRedem.style.display = 'block';
    label[0].style.color = "lightgoldenrodyellow";

    timerInterval = setInterval(test,1000);
    if (tempsInitial <= 0 && secondeInitial <= 0) {
        clearInterval(timerInterval); 
    }

}

function redem() {
    clearInterval(timerInterval);
    boutonRedem.style.display = 'none';
    boutonLancer.style.display = 'block';
    tempsInitial = 25;
    tempsPause = 5;
    secondePause = 0;
    secondeInitial = 0;
    document.getElementById("chrono").innerHTML = `${affichage(tempsInitial)} : ${affichage(secondeInitial)}`;
    label[0].style.color = "whitesmoke";
    pause = false;
}

document.addEventListener("DOMContentLoaded", load);
