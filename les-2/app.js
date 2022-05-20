//Oefening angry-birds
const bird = document.querySelector(".bird");
let count = 0;

bird.addEventListener("click", function(){
    count += 50;

    //aan de bird class word styling toegevoegd
    //de styling is left 50px
    bird.style.left = count + "px";


})

window.addEventListener("keydown", function(event){
    //aan de bird class word styling toegevoegd
    //de styling is left 50px
    if(event.key == "ArrowRight"){
    count += 50;
    bird.style.left = count + "px";

    } 
    if(event.key == "ArrowLeft"){
    count -= 50;
    bird.style.left = count + "px";

    }
    if(event.key == "ArrowUp"){
    count += 50;
    bird.style.bottom = count + "px";

    }
    if(event.key == "ArrowDown"){
    count += 50;
    bird.style.top = count + "px";
    }
})

