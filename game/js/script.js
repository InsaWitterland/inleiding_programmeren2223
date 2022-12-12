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
var yell = new Audio("../game/audio/yell.mp3");
var meow = new Audio("../game/audio/meow.mp3");
var eating = new Audio("../game/audio/eating.mp3");
var mario = new Audio("../game/audio/mario.mp3");
//https://youtu.be/Fiaf796kieI Minecraft eating sound effect
//https://youtu.be/6G-k4zxou7Y Super Mario Bros. - Mushroom Sound Effect
//https://youtu.be/OVchVwc68qs Mom Sound Effect
//https://youtu.be/uLB1ZeRgl_k Meow Sound Effect
//============================================================================+


//Start values of actions================================================_
var health = 25;
var happiness = 10;
var social = 10;

//If else explaination of backgroundstages..
// gameover= ( 0 = x ) 
// stage 1 (start)= ( 0 < x > 33 )
// stage 2 = ( 33 <= x > 66 )
// stage 3 = ( 66 <= x > 100  )
// Win = ( 100 = x )

//The 4 button functions!!
function momClick(){
    health += 15;
    social += 5;
    happiness -= 5; 

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    if ((health <= 0) || (happiness <= 0) || (social <= 0)){
        console.log("gameOver");
        section.classList.add("hidden");
        gameOver.classList.add("visible");
    }
    else if((health >= 33 && health < 66) && (happiness >= 33 && happiness < 66) && (social >=33 && social < 66)){
        console.log("Stage 2");
        yell.play();
        document.body.classList.add("background_wrapper1");
    }
    else if((health >= 66 && health < 100) && (happiness >= 66 && happiness) < 100 && (social >= 66 && social < 100)){
        console.log("Stage 3");
        yell.play();
        document.body.classList.add("background_wrapper2");
    }
    else if((health >= 100) && (happiness >= 100) && (social >= 100)){
        console.log("happy ending, you got up");
        document.body.classList.add("background_wrapper3");
        section.classList.add("hidden");
    }
    else{
        console.log("Nothing");
        yell.play();
    }
}

function catClick(){
    social += 15;
    health -= 10;

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    if ((health <= 0) || (happiness <= 0) || (social <= 0)){
        console.log("gameOver");
        section.classList.add("hidden");
        gameOver.classList.add("visible");
    }
    else if((health >= 33 && health < 66) && (happiness >= 33 && happiness < 66) && (social >=33 && social < 66)){
        console.log("Stage 2");
        meow.play();
        document.body.classList.add("background_wrapper1");
    }
    else if((health >= 66 && health < 100) && (happiness >= 66 && happiness) < 100 && (social >= 66 && social < 100)){
        console.log("Stage 3");
        meow.play();
        document.body.classList.add("background_wrapper2");
    }
    else if((health >= 100) && (happiness >= 100) && (social >= 100)){
        console.log("happy ending, you got up");
        document.body.classList.add("background_wrapper3");
        section.classList.add("hidden");
    }
    else{
        console.log("Nothing");
        meow.play();
    }
}

function cookieClick(){
    happiness += 15;
    health -= 10;
    

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    if ((health <= 0) || (happiness <= 0) || (social <= 0)){
        console.log("gameOver");
        section.classList.add("hidden");
        gameOver.classList.add("visible");
    }
    else if((health >= 33 && health < 66) && (happiness >= 33 && happiness < 66) && (social >=33 && social < 66)){
        console.log("Stage 2");
        eating.play();
        document.body.classList.add("background_wrapper1");
    }
    else if((health >= 66 && health < 100) && (happiness >= 66 && happiness) < 100 && (social >= 66 && social < 100)){
        console.log("Stage 3");
        eating.play();
        document.body.classList.add("background_wrapper2");
    }
    else if((health >= 100) && (happiness >= 100) && (social >= 100)){
        console.log("happy ending, you got up");
        document.body.classList.add("background_wrapper3");
        section.classList.add("hidden");
    }
    else{
        eating.play();
        console.log("Nothing");
    }
}

function gameClick(){
    happiness += 15;
    social -= 5;

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    if ((health <= 0) || (happiness <= 0) || (social <= 0)){
        console.log("gameOver");
        section.classList.add("hidden");
        gameOver.classList.add("visible");
    }
    else if((health >= 33 && health < 66) && (happiness >= 33 && happiness < 66) && (social >=33 && social < 66)){
        console.log("Stage 2");
        mario.play();
        document.body.classList.add("background_wrapper1");
    }
    else if((health >= 66 && health < 100) && (happiness >= 66 && happiness) < 100 && (social >= 66 && social < 100)){
        console.log("Stage 3");
        mario.play();
        document.body.classList.add("background_wrapper2");
    }
    else if((health >= 100) && (happiness >= 100) && (social >= 100)){
        console.log("happy ending, you got up");
        document.body.classList.add("background_wrapper3");
        section.classList.add("hidden");
    }
    else{
        console.log("Nothing");
        mario.play();
    }
}



//The 4 button Eventlisteners!!
mom.addEventListener("click", momClick, false);
cat.addEventListener("click", catClick, false);
cookie.addEventListener("click", cookieClick, false);
game.addEventListener("click", gameClick, false);



//Small test on conditions Sleep4Ever===================================================
function quit(){
    health -= 10;
    social -= 10;
    happiness -= 10;

    if ((health <= 0) || (happiness <= 0) || (social <= 0)){
        console.log("gameOver");
        section.classList.add("hidden");
        gameOver.classList.add("visible");
    }
    else{
        console.log("Nothing");
    }
    console.log(health, "healthpoints");
    console.log(social, "social points");
    console.log(happiness, "happiness points");

}
sleep4Ever.addEventListener("click", quit, false);

//=============================================================================
// NOTES TO SELF!!!
//Background change
//    document.body.classList.add("background_wrapper1");

//Where do I put the if else if I want it continually checking the states? So not in the function?
//How do I get the healthbar more precise? Instead of css classes..
//audio error?
//Why is the bg switching to stage 1?




