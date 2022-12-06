console.log("Doet ie het?")

var healthbar = document.querySelector(".healthbar");
var happinessbar = document.querySelector(".happinessbar");
var socialbar = document.querySelector(".socialbar");

var mom = document.querySelector(".mom");
var cat = document.querySelector(".cat");
var cookie = document.querySelector(".cookie");
var game = document.querySelector(".game");

var beginWaarde = 0;
var body = document.querySelector("body");

function hogeWaarde() {
    healthbar.classList.add("healthbar_state1");
}

mom.addEventListener("click", hogeWaarde, false);

function clickCat() {
    beginWaarde = 1; 
    console.log(beginWaarde);
}

cat.addEventListener("click", clickCat, false);

if(beginWaarde>=1){
    healthbar.classList.add("healthbar_state1");
}
