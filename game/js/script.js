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
var main = document.querySelector(".main");
var section = document.querySelector(".bye");
var gameOver = document.querySelector(".gameOver");

//Audio ======================================================================+
var yell = new Audio("audio/yell.mp3");
var meow = new Audio("audio/meow.mp3");
var eating = new Audio("audio/eating.mp3");
var mario = new Audio("audio/mario.mp3");
var pixelSound = new Audio("audio/gameOver.mp3");
//https://youtu.be/Fiaf796kieI Minecraft eating sound effect
//https://youtu.be/6G-k4zxou7Y Super Mario Bros. - Mushroom Sound Effect
//https://youtu.be/OVchVwc68qs Mom Sound Effect
//https://youtu.be/uLB1ZeRgl_k Meow Sound Effect
//https://youtu.be/NN_8vfN0HP4 Game over Sound Effect
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
    bar();
}

function catClick(){
    social += 10;
    health -= 10;

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    meow.play();
    place();
    bar();
}

function cookieClick(){
    happiness += 10;
    health -= 10;

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    eating.play();
    place();
    bar();
}

function gameClick(){
    happiness += 10;
    social -= 10;

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    mario.play();
    place();
    bar();
}

function quit(){
    health -= 10;
    social -= 10;
    happiness -= 10;

    console.log(health, "health");
    console.log(happiness, "happiness");
    console.log(social, "social");

    place();
    bar();
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
        pixelSound.play();
    }
    else if((health >= 100) && (happiness >= 100) && (social >= 100)){
        console.log("happy ending, you got up");
        main.classList.add("background_wrapper3");
        section.classList.add("hidden");
    }
    else if((health >= 66) && (happiness >= 66 ) && (social >= 66)){
        console.log("Stage 3");
        main.classList.remove("background_wrapper3");
        main.classList.add("background_wrapper2");
    }
    else if((health >= 33) && (happiness >= 33) && (social >=33)){
        console.log("Stage 2");
        main.classList.remove("background_wrapper2");
        main.classList.add("background_wrapper1");
    }
    else{
        console.log("Stage 1");
        main.classList.remove("background_wrapper1", "background_wrapper2", "background_wrapper3");
    }
}

function bar(){
    healthbar.value = health;
    happinessbar.value = happiness;
    socialbar.value = social;
}
