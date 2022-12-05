console.log("test")

var kistEl = document.querySelector("img");
var knop = document.querySelector("button");

function openen(){
    kistEl.src = "/Huiswerk/Les 3/BouwstenenEvents/img/chest4_open.gif"
}

knop.addEventListener("click", openen);
