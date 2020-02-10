"use strict";
window.addEventListener("load", start);

let theText ="";
const typeArea = document.querySelector(".typewritten");
const typekey1 = document.querySelector("#typekey1");
const typekey2 = document.querySelector("#typekey2");
const typespace = document.querySelector("#typespace");
const typelast = document.querySelector("#typelast");
const typereturn = document.querySelector("#typereturn");





let sound;
let i=0;

function start(){
    console.log("start");

    theText = typeArea.textContent;
    theText= theText.split('');
    console.log("theText", theText );
    typeArea.textContent ="";
   setTimeout(typing, 1000);

}

function typing(){
    console.log("typing");
    typeArea.textContent += theText[i];
let timeToNextLetter=Math.random()*100+200;
    
    if (i < theText.length-1){
        i++;
        setTimeout(typing, timeToNextLetter);
    }
    playSound();
}

function playSound(){
    if (theText[i] === " ") {
        sound = typespace;
    } else {
        if (Math.random > 0.5) {
            sound = typekey1;
        } else {
            sound = typekey2;
        }

    }

    sound.currentTime = 0;
    sound.play();
}