(function(){
    "use strict";
    const heading = document.getElementById("heading")
const intro = document.getElementById("containerp")
const theValue = document.getElementById("convert")
const answer = document.getElementById("answer")
let conversionType = "miles";

document.addEventListener("keydown",(event)=>{
    let key = event.code;
    if (key === "KeyK"){
        conversionType = "kilometers";
        heading.innerText = "Kilometers to Miles Converter";
        intro.innerText = "Type in a number of kilometers and click the button to convert the distance to miles."; 
    }else if (key === "KeyM"){
        conversionType = "miles";
        heading.innerText = "Miles to Kilometers Converter";
        intro.innerText = "Type in a number of miles and click the button to convert the distance to kilometers.";
    }
});

theValue.addEventListener("submit", (event)=>{
    event.preventDefault();
    const distance = parseFloat(document.getElementById("distance").value)
    if (distance){
        if(conversionType === "kilometers"){
            const converted = (distance * 0.621371).toFixed(3);
            answer.innerHTML = `${distance} kilometers converts to ${converted}`;
        }else if(conversionType === "miles"){
            const converted = (distance * 1.60934).toFixed(3);
            answer.innerHTML = `${distance} miles converts to ${converted} kilometers`;
        }
    }else{
        alert("Please enter a distance value");
    }
});
})();

    
