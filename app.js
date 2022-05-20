////manier 1
// let name;
// let country;
// let p = document.getElementById("output");

// const nameChanged = function(event){
//    name = event.target.value;
//    changeInput();
// }

// const countryChange = function(event){
//     country = event.target.value;
//     changeInput();
//  }

//  const changeInput = function(){
//    const text = `Je heet ${name} en je komt uit ${country}`;
//    p.textContent = text;
//  } 

////manier 2
// let button = document.querySelector("button");

// button.addEventListener("click", funtion(){
// console.log("geklikt");
// });
let name;
let country;
let p = document.getElementById("output");

let nameChanged = document.querySelector("#nameChanged");
let countryChanged = document.querySelector("#countryChanged");


nameChanged.addEventListener("change", function(){
   name = event.target.value;
   changeInput();
})

countryChanged.addEventListener("change", function(){
   country = event.target.value;
   changeInput();
})

const changeInput = function(){
   const text = `Je heet ${name} en je komt uit ${country} en je crewmate is ${}`;
   p.textContent = text;
}



 

