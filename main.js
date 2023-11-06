

let stopButton = document.getElementById("stopButton")
let stopLight = document.getElementById("stopLight")

stopButton.addEventListener("click", ()=>{
    stopLight.style.backgroundColor = "rgb(247,0,0)";
    slowLight.style.backgroundColor = "black";
    goLight.style.backgroundColor = "black";

})

let slowButton = document.getElementById("slowButton")
let slowLight = document.getElementById("slowLight")

slowButton.addEventListener("click", ()=>{
    slowLight.style.backgroundColor = "rgb(247,247,0)";
    stopLight.style.backgroundColor = "black";
    goLight.style.backgroundColor = "black";
})

let goButton = document.getElementById("goButton")
let goLight = document.getElementById("goLight")

goButton.addEventListener("click", ()=>{
    goLight.style.backgroundColor = "rgb(0,247,0)";
    stopLight.style.backgroundColor = "black";
    slowLight.style.backgroundColor = "black";
})