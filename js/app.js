let tempsInitial = 25;
let tempsPause = 5;

let label = document.querySelectorAll("p");
let boutonLancer = document.getElementById('lancer');
let boutonRedem = document.getElementById('redem');

boutonRedem.style.display='none';

function lancer(){
    boutonLancer.style.display='none';
    boutonRedem.style.display='block' 
    label[0].style.color="red";
}

function redem(){
    boutonRedem.style.display='none';
    boutonLancer.style.display='block'
    label[1].style.color="red"

}


