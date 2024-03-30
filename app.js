let input = document.querySelector("input");
let btn = document.querySelector("btn");
let img = document.querySelector("img");
let p1 = document.querySelector("p1");
let p2 = document.querySelector("p2");
let p3 = document.querySelector("p3");
let p4 = document.querySelector("p4");
let p5 = document.querySelector("p5");
let p6 = document.querySelector("p6");
let p7 = document.querySelector("p7");



function searchMovie(){
    const API_KEY = "c3dcf548";
    fetch(`https://www.omdbapi.com/?t=${input.value}&apikey=${API_KEY}`)
    .then (function(response){
return response.json();
    })

    .then (function(data){
        console.log(data);

       p1.innerText = data.Poster;
       p2.innerText = data.Title;
       p3.innerText = data.Genre;
       p4.innerText = data.Year;
       p5.innerText = data.Plot;
       p6.innerText = data.Director;
       p7.innerText = data.Actors;

})}