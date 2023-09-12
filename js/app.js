let tempsInitial = 25;
let tempsPause = 5;
let secondePause = 0;
let secondeInitial = 0;

let label = document.querySelectorAll("p");
let boutonLancer = document.getElementById('lancer');
let boutonRedem = document.getElementById('redem');

boutonRedem.style.display = 'none';

function affichage(chrono){
    let temps = chrono.toString();
    if(temps.length<2){
        temps = '0'+temps;
    }
    return temps;
}

function test(){
    if (!(tempsInitial <=0)) {
        if (!(secondeInitial <=0)) {
            document.getElementById("chrono").innerHTML = `${affichage(tempsInitial)} : ${affichage(secondeInitial)}`;
            secondeInitial--;
        }
        if(secondeInitial==0){
            secondeInitial = 59;
            tempsInitial--;
        } 
    }
    pause=true;
}

function lancer() {

    let pause = false;

    boutonLancer.style.display = 'none';
    boutonRedem.style.display = 'block';

    label[0].style.color = "lightgoldenrodyellow";

    setInterval(test,1000);

    if (pause==true){
        label[0].style.color = "whitesmoke";
        label[1].style.color = "lightgoldenrodyellow";
    }
    
}

function redem() {
    boutonRedem.style.display = 'none';
    boutonLancer.style.display = 'block'
}

function load(){
    location.reload();
}


