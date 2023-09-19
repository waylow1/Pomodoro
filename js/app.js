//Declaring the variables we need.

let workMin = 25;
let workSec = 0;

let minWork = workMin;
let secWork = workSec;

let breakMin = 5;
let breakSec = 0;

let minBreak = breakMin;
let secBreak = breakSec;



let timerInterval;
let timerIntervalBreak;

// Retrieve ids needed to link buttons and paragraphs to the code.

let label = document.querySelectorAll("p");
let runButton = document.getElementById('running');
let resetButton = document.getElementById('redem');



//This is where we retrieve the user's entries for the choice of working hours and breaks.

let inputWork = document.getElementById("workTimeInput");
let inputBreak = document.getElementById('breakTimeInput');

//The function that allow us to use the information we collected about the chosen work time.

inputWork.onchange = function () {
    let min = inputWork.value;
    if (/^(?:[1-9]|[1-5][0-9]|60)$/.test(min)) {
        workMin = min;
        minWork = workMin;
        workSec = 0;
    }
    else {
        alert("Erreur lors de la saisie le chiffre est trop grand ou comporte des décimaux");
        workMin = 25;
        minWork = workMin;
        workSec = 0;
    }

    secWork = workSec;
    updateLocalStorage();

};

//The function that allow us to use the information we collected about the chosen break time.

inputBreak.onchange = function () {
    let min2 = inputBreak.value;
    if (/^(?:[1-9]|[1-5][0-9]|60)$/.test(min2)) {
        breakMin = min2;
        minBreak = breakMin;
        breakSec = 0;
    }
    else {
        alert("Erreur lors de la saisie le chiffre est trop grand ou comporte des décimaux");
        breakMin = 5;
        minBreak = breakMin;
        breakSec = 0;
    }
    secBreak = breakSec;
    updateLocalStorage();
};


//Here is what happens each time the page is loaded, we will see below that we use it with the DOMContentLoaded.
function load() {
    document.getElementById("chrono").innerHTML = `${affichage(workMin)} : ${affichage(workSec)}`;
    resetButton.style.display = 'none';
}

function updateLocalStorage() {
    localStorage.setItem('workTime', inputWork.value);
    localStorage.setItem('breakTime', inputBreak.value);
}

function loadFromLocalStorage() {
    const savedWorkTime = localStorage.getItem('workTime');
    const savedBreakTime = localStorage.getItem('breakTime');
    if (savedWorkTime) {
        if(savedWorkTime>60){
            inputWork.value = 25;
        }
        else{
            inputWork.value=savedWorkTime;
        }
        workMin = inputWork.value;
        minWork = inputWork.value;
    }

    if (savedBreakTime) {
        if(savedBreakTime>60){
            inputBreak.value = 25;
        }
        else{
            inputBreak.value = savedBreakTime;
        }
        inputBreak.value = savedBreakTime;
        breakMin = inputBreak.value;
        minBreak = inputBreak.value;
    }
}



function affichage(chrono) {
    let temps = chrono.toString();
    if (temps.length < 2) {
        temps = '0' + temps;
    }
    return temps;
}


//This is the function that is been dedicated to reducing the working time.

function work() {
    label[0].style.color = "lightgoldenrodyellow";
    label[1].style.color = "whitesmoke";
    document.getElementById("chrono").innerHTML = `${affichage(workMin)} : ${affichage(workSec)}`;
    if (workMin != 0 || workSec != 0) {
        if (workSec > 0) {
            workSec--;
        }
        else {
            workSec = 59;
            workMin--;
        }
    }
    else {
        document.body.style.backgroundColor = "Green";
        clearInterval(timerInterval);
        label[0].style.color = "whitesmoke";
        label[1].style.color = "lightgoldenrodyellow";

        breakMin = minBreak;
        breakSec = secBreak;

        timerIntervalBreak = setInterval(breaks, 1000);
    }
}

//This is the function that is been dedicated to reducing the break time.

function breaks() {
    document.getElementById("chrono").innerHTML = `${affichage(breakMin)} : ${affichage(breakSec)}`;
    if (breakMin != 0 || breakSec != 0) {
        if (breakSec > 0) {
            breakSec--;
        }
        else {
            breakSec = 59;
            breakMin--;
        }
    }
    else {
        document.body.style.backgroundColor = "rgb(255,99,71)";
        clearInterval(timerIntervalbreak);
        label[0].style.color = "lightgoldenrodyellow";
        label[1].style.color = "whitesmoke";


        workMin = minWork;
        workSec = secWork;

        timerInterval = setInterval(work, 1000);
    }
}


//This is the function that is started when the run button is clicked, it makes the button run disappear and show the resetButton.

function run() {
    var audio = new Audio('audio/time_to_work.wav');
    audio.play();
    runButton.style.display = 'none';
    resetButton.style.display = 'block';
    timerInterval = setInterval(work, 1000);
}


//This function works when we click on the button reset, it reloads the entire page.
function redem() {
    location.reload();
}


//As mentioned above, every time we load, we call the loads functions.
document.addEventListener("DOMContentLoaded", function () {
    loadFromLocalStorage();
    load();
});
