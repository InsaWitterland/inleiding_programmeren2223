console.log("test")

var lamp = document.querySelector("img");

console.log(lamp)

function aan(){
    lamp.src = "/Huiswerk/Les 4/Lampje Bouwstenen/img/bulb_on.jpg"
}

lamp.addEventListener("click", aan);