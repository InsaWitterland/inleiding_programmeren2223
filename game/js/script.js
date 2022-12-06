console.log("Doet ie het?")

var healthbar = document.querySelector(".healthbar");
var happinessbar = document.querySelector(".happinessbar");
var socialbar = document.querySelector(".socialbar");

var mom = document.querySelector(".mom");
var cat = document.querySelector(".cat");
var cookie = document.querySelector(".cookie");
var game = document.querySelector(".game");
var body = document.querySelector("body");

function hogeWaarde() {
    body.classList.toggle("background_wrapper");
}

mom.addEventListener("click", hogeWaarde, false);

function testbar() {
    healthbar.style.width = "30em";
}

cat.addEventListener("click", testbar, false);

/*Hoe selecteer ik mijn background img in de css?


Notice that when setting the CSS styles using the style property you have to write the CSS properties in camelcase. 
Instead of using a dash - to separate the words you will have to write in 
capitals the first letter of each word. (backgroundColor, fontSize)
Bron: https://alvarotrigo.com/blog/change-css-javascript/
https://sebhastian.com/javascript-change-background-image/


*/
/*
"/game/img/background2.svg"
"url(/game/img/background2.svg)"
"url("/game/img/background2.svg")"

*/
