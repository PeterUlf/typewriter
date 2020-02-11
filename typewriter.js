"use strict";
window.addEventListener("load", start);

let theText ="";
const typeArea = document.querySelectorAll(".typewritten");



// let typewrittens;


const typekey1 = document.querySelector("#typekey1");
const typekey2 = document.querySelector("#typekey2");
const typespace = document.querySelector("#typespace");
const typelast = document.querySelector("#typelast");
const typereturn = document.querySelector("#typereturn");


let sound;
let i=0;
let e=0;



function start(){
   
    typeArea.forEach(element => {
        element.dataset.text = element.textContent;
        element.textContent = "";
    });
    // typeArea[e].textContent ="";
  start2();

}



function start2(){
    theText = typeArea[e].dataset.text;
    console.log("e ", e);
    theText = theText.split('');
    setTimeout(typing, 1000);
}

function typing(){
    console.log("typing");
   
    typeArea[e].textContent += theText[i];
let timeToNextLetter=Math.random()*100+200;
    
    if (i < theText.length-1){
        i++;
        setTimeout(typing, timeToNextLetter);
    } else if (e < typeArea.length-1){
        e++;
        i=0;
        start2();
    } else{
        console.log("lort");
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