var experiences = document.querySelector("#ancreExp");
var formation = document.querySelector("#ancreFormation");
var interets = document.querySelector("#ancreInteret");
var button = document.querySelectorAll("button");
let img = document.querySelector("img");

function chevron(){
    if (img.src === "images/chevron-up-solid.svg")
    {
        img.src = "images/chevron-down-solid.svg";
    }else img.src = "images/chevron-up-solid.svg";
}


for(var i = 0;i < button.length-1;i++) {
    button[i].addEventListener("click", chevron);
}