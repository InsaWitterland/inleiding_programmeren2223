console.log("test")

var namen = ["Anouk","Priscilla","Enrique","Lizzy"]

var pElement = document.querySelector(".naam");

var knopje = document.querySelector(".knop");





function toonRandomNaam() {
    var randomGetal = Math.random()* namen.length;
    console.log(namen.length)
   
    randomGetal = Math.floor(randomGetal);

    console.log(randomGetal)

    pElement.textContent = namen [randomGetal]; 
}

knopje.addEventListener("click", toonRandomNaam, false);