'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let countDown = 10;
let billboard;
let firingButton = document.querySelector("#firing-button");
let rocket = document.querySelector("#rocket");
let countClick = 0;
let timeOut;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
document.addEventListener("DOMContentLoaded", function (){

    billboard = document.querySelector("span");
    firingButton = document.querySelector("#firing-button");
    updateDisplay();
    
    // Evenement de clique sur le bouton. 
    firingButton.addEventListener('click', function (){
        if (countClick === 0)
        {
            timeOut = setTimeout(updateChrono, 1000);
            //ajouter le bouton disabled
            firingButton.classList.add("disabled");
            ++countClick;
            // firingButton.removeEventListener;
            
            //Ajoute le changement de phase de la fusée au clique du bouton
            document.getElementById("rocket").src="images/rocket2.gif";
            
        } else {
            return;
        }
    })
})




//chrono degressif jusqu'a 0 et bloquer
function updateChrono()
{
    timeOut = setTimeout(updateChrono, 1000);
    billboard = document.querySelector("span");
    
    billboard.innerText = countDown;
    if (countDown === 0) 
    {
        // et doit appliquer la nouvelle image de la fusée
        document.getElementById("rocket").src="images/rocket3.gif";
        rocket.classList.add(".tookOff");
        clearTimeout(timeOut);
        return;
    }
    --countDown;
    
    updateDisplay();
}



//update le display dès le lancement du site
function updateDisplay(){
    // billboard = document.querySelector("#billboard");
    billboard = document.querySelector("span");
    billboard.innerText = countDown;
}

/************************************************************************************/
/* ********************************  **********************************/
/************************************************************************************/


/*random stars
let bg = document.querySelector("body");

setInterval(() => {
    let n = Math.floor(Math.random()*(99+1));
    let h = Math.floor(Math.random()*(99-1+1)+1);
    let w = Math.floor(Math.random()*(99-1+1)+1);
    bg[n].style.top =`${h}%`
    bg[n].style.left =`${w}%`
}, 150) */