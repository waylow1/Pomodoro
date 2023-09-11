let tempsInitial = 24;
let tempsPause = 5;
let secondeInitial=59;

let label = document.querySelectorAll("p");
let boutonLancer = document.getElementById('lancer');
let boutonRedem = document.getElementById('redem');

boutonRedem.style.display='none';


function lancer(){
    boutonLancer.style.display='none';
    boutonRedem.style.display='block' 
    label[0].style.color="lightgoldenrodyellow";

    while(!(tempsInitial==0)){
        while(secondeInitial!=0){
            secondeInitial--;
            document.getElementById("chrono").innerHTML=`${tempsInitial} : ${secondeInitial}`;
            console.log(`${tempsInitial} : ${secondeInitial}`);
        }
        secondeInitial=59;
        tempsInitial--;
    }

    label[0].style.color="whitesmoke";
    label[1].style.color="lightgoldenrodyellow";
}

function redem(){
    boutonRedem.style.display='none';
    boutonLancer.style.display='block'
}


