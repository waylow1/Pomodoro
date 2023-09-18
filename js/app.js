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
    console.log(min);
    if (min.includes("e") || (min.includes("E"))) {
        alert("Nous n'acceptons pas les écritures scientifiques");
    }
    let charSpliter = min.split(".");
    min = charSpliter[0];
    let sec = charSpliter[1];

    if (sec === undefined) {
        workMin = min;
        workSec = 0;
    }
    else {
        workMin = min;
        workSec = sec * 6;
    }
    minWork = workMin;
    secWork = workSec;
    updateLocalStorage();

};

//The function that allow us to use the information we collected about the chosen break time.

inputBreak.onchange = function () {
    let min2 = inputBreak.value;
    let charSpliter2 = min2.split(".");
    min2 = charSpliter2[0];
    let sec2 = charSpliter2[1];

    if (sec2 === undefined) {
        breakMin = min2;
        breakSec = 0;
    }
    else {
        breakMin = min2;
        breakSec = sec2 * 6;
    }
    minBreak = breakMin;
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
    console.log(savedBreakTime + savedWorkTime);
    if (savedWorkTime) {
        inputWork.value = savedWorkTime;
        let min4 = inputWork.value;
        let charSpliter4 = min4.split(".");
        min4 = charSpliter4[0];
        let sec4 = charSpliter4[1];
    
        if (sec4 === undefined) {
            workMin = min4;
            workSec = 0;
        }
        else {
            workMin = min4;
            workSec = sec4 * 6;
        }
        minWork = workMin;
        secWork = workSec;

    }

    if (savedBreakTime) {
        inputBreak.value = savedBreakTime;
        let min3 = inputWork.value;
        let charSpliter3 = min3.split(".");
        min3 = charSpliter3[0];
        let sec3 = charSpliter3[1];

        if (sec3 === undefined) {
            breakMin = min3;
            breakSec = 0;
        }
        else {
            breakMin = min3;
            breakSec = sec3 * 6;
        }
        minBreak = breakMin;
        secBreak = breakSec;
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

        timerIntervalbreak = setInterval(breaks, 1000);
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
