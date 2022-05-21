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
    bird.src = "img/b-right.svg";

    } 
    if(event.key == "ArrowLeft"){
    count -= 50;
    bird.style.left = count + "px";
    bird.src = "img/b-left.svg";

    }
    if(event.key == "ArrowUp"){
    count += 50;
    bird.style.bottom = count + "px";
    bird.src = "img/b-up.svg";

    }
    if(event.key == "ArrowDown"){
    count -= 50;
    bird.style.bottom = count + "px";
    bird.src = "img/b-down.svg";
    }
})



