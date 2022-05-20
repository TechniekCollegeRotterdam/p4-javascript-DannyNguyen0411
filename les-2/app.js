//Oefening angry-birds
const bird = document.querySelector(".bird");
let count = 0;

bird.addEventListener("click", function(){
    count += 50;

    //aan de bird class word styling toegevoegd
    //de styling is left 50px
    bird.style.left = count + "px";


})

