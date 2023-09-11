let tempsInitial = 25;
let tempsPause = 5;
let secondeInitial=0;

let label = document.querySelectorAll("p");
let boutonLancer = document.getElementById('lancer');
let boutonRedem = document.getElementById('redem');

boutonRedem.style.display='none';


document.getElementById("chrono").innerHTML=`${tempsInitial}:${secondeInitial}`;


function lancer(){
    boutonLancer.style.display='none';
    boutonRedem.style.display='block' 
    label[0].style.color="lightgoldenrodyellow";
    while(tempsInitial!=0){
        for(secondeInitial=60;secondeInitial!=0;secondeInitial--){
            if(i==0){
                tempsInitial--;
            }
            document.getElementById("chrono").innerHTML=`${tempsInitial} : ${secondeInitial}`;
         }
    }
    label[0].style.color="whitesmoke";
    label[1].style.color="lightgoldenrodyellow";
}

function redem(){
    boutonRedem.style.display='none';
    boutonLancer.style.display='block'
    label[1].style.color="lightgoldenrodyellow"
}


