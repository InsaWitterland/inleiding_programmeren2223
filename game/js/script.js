//Progress bars
var healthbar = document.querySelector(".healthbar");
var happinessbar = document.querySelector(".happinessbar");
var socialbar = document.querySelector(".socialbar");

//4 Possible buttons + sleep forever
var mom = document.querySelector(".mom");
var cat = document.querySelector(".cat");
var cookie = document.querySelector(".cookie");
var game = document.querySelector(".game");
var sleep4Ever = document.querySelector("h1");

//Selected in var for CSS changes
var body = document.querySelector(".main");
var section = document.querySelector(".bye");
var gameOver = document.querySelector(".gameOver");

//Audio ======================================================================+
var yell = new Audio("/game/audio/yell.mp3");
var meow = new Audio("../game/audio/meow.mp3");
var eating = new Audio("../game/audio/eating.mp3");
var mario = new Audio("../game/audio/mario.mp3");
//https://youtu.be/Fiaf796kieI Minecraft eating sound effect
//https://youtu.be/6G-k4zxou7Y Super Mario Bros. - Mushroom Sound Effect
//https://youtu.be/OVchVwc68qs Mom Sound Effect
//https://youtu.be/uLB1ZeRgl_k Meow Sound Effect
//============================================================================+

//The 5 button Eventlisteners!!
mom.addEventListener("click", momClick, false);
cat.addEventListener("click", catClick, false);
cookie.addEventListener("click", cookieClick, false);
game.addEventListener("click", gameClick, false);
sleep4Ever.addEventListener("click", quit, false);


//Start values of actions================================================_
var health = 20;
var happiness = 20;
var social = 20;

//The 4 button functions!!
function momClick(){
    health += 10;
    social += 10; 
    happiness -= 10;

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    yell.play();
    place();
    width();
}

function catClick(){
    social += 10;
    health -= 10;

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    meow.play();
    place();
    width();
}

function cookieClick(){
    happiness += 10;
    health -= 10;
    

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    eating.play();
    place();
    width();
}

function gameClick(){
    happiness += 10;
    social -= 10;

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    mario.play();
    place();
    width();
}

function quit(){
    health -= 10;
    social -= 10;
    happiness -= 10;

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");
    place();
    width();
}

//For the backgrounds/ game over~!!`=======================================
//If else explaination of backgroundstages..
// There are a total of 4 backgrounds, so 3 changes. The total score is 100-ish. So 1/3 33% change per thingy
// gameover= ( 0 = x ) 
// stage 1 (start)= ( 0 < x > 33 )
// stage 2 = ( 33 <= x > 66 )
// stage 3 = ( 66 <= x > 100  )
// Win = ( 100 = x )
function place() {
    if ((health <= 0) || (happiness <= 0) || (social <= 0)){
        console.log("gameOver");
        section.classList.add("hidden");
        gameOver.classList.add("visible");
    }
    else if((health >= 100) && (happiness >= 100) && (social >= 100)){
        console.log("happy ending, you got up");
        document.body.classList.add("background_wrapper3");
        section.classList.add("hidden");
    }
    else if((health >= 66) && (happiness >= 66 ) && (social >= 66)){
        console.log("Stage 3");
        document.body.classList.remove("background_wrapper3");
        document.body.classList.add("background_wrapper2");
    }
    else if((health >= 33) && (happiness >= 33) && (social >=33)){
        console.log("Stage 2");
        document.body.classList.remove("background_wrapper2");
        document.body.classList.add("background_wrapper1");
    }
    else{
        console.log("Stage 1");
        document.body.classList.remove("background_wrapper1", "background_wrapper2", "background_wrapper3");
    }
}

function width() {
   if (health >= 100){
    healthbar.classList.add("state10");
}
else if(health == 90){
    healthbar.classList.add("state9");
    healthbar.classList.remove("state10");
}
else if(health == 80){
    healthbar.classList.add("state8");
    healthbar.classList.remove("state9");
}
else if(health == 70){
    healthbar.classList.add("state7");
    healthbar.classList.remove("state8");
}
else if(health == 60){
    healthbar.classList.add("state6");
    healthbar.classList.remove("state7");
}
else if(health == 50){
    healthbar.classList.add("state5");
    healthbar.classList.remove("state6");
}
else if(health == 40){
    healthbar.classList.add("state4");
    healthbar.classList.remove("state5");
}
else if(health == 30){
    healthbar.classList.add("state3");
    healthbar.classList.remove("state4");
}
else if(health == 20){
    healthbar.classList.add("state2");
    healthbar.classList.remove("state3");
}
else if(health == 10){
    healthbar.classList.add("state1");
    healthbar.classList.remove("state2");
    healthbar.classList.remove("hidden");
}
else{
    healthbar.classList.add("hidden");
}


if (happiness >= 100){
    happinessbar.classList.add("state10");
}
else if(happiness == 90){
    happinessbar.classList.add("state9");
    happinessbar.classList.remove("state10");
}
else if(happiness == 80){
    happinessbar.classList.add("state8");
    happinessbar.classList.remove("state9");
}
else if(happiness == 70){
    happinessbar.classList.add("state7");
    happinessbar.classList.remove("state8");
}
else if(happiness == 60){
    happinessbar.classList.add("state6");
    happinessbar.classList.remove("state7");
}
else if(happiness == 50){
    happinessbar.classList.add("state5");
    happinessbar.classList.remove("state6");
}
else if(happiness == 40){
    happinessbar.classList.add("state4");
    happinessbar.classList.remove("state5");
}
else if(happiness == 30){
    happinessbar.classList.add("state3");
    happinessbar.classList.remove("state4");
}
else if(happiness == 20){
    happinessbar.classList.add("state2");
    happinessbar.classList.remove("state3");
}
else if(happiness == 10){
    happinessbar.classList.add("state1");
    happinessbar.classList.remove("state2");
    happinessbar.classList.remove("hidden");
}
else{
    happinessbar.classList.add("hidden");
}

if (social >= 100){
    socialbar.classList.add("state10");
}
else if(social == 90){
    socialbar.classList.add("state9");
    socialbar.classList.remove("state10");
}
else if(social == 80){
    socialbar.classList.add("state8");
    socialbar.classList.remove("state9");
}
else if(social == 70){
    socialbar.classList.add("state7");
    socialbar.classList.remove("state8");
}
else if(social == 60){
    socialbar.classList.add("state6");
    socialbar.classList.remove("state7");
}
else if(social == 50){
    socialbar.classList.add("state5");
    socialbar.classList.remove("state6");
}
else if(social == 40){
    socialbar.classList.add("state4");
    socialbar.classList.remove("state5");
}
else if(social == 30){
    socialbar.classList.add("state3");
    socialbar.classList.remove("state4");
}
else if(social == 20){
    socialbar.classList.add("state2");
    socialbar.classList.remove("state3");
}
else if(social == 10){
    socialbar.classList.add("state1");
    socialbar.classList.remove("state2");
    socialbar.classList.remove("hidden");
}
else{
    socialbar.classList.add("hidden");
}
}

//=============================================================================
// NOTES TO SELF!!!
//How do I get the healthbar more goed?


