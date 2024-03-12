var randomNumber1 = Math.floor(Math.random()*6) +1;
var randImage1 = "dice"+randomNumber1+".png";
var randImageSource1 = "images/"+randImage1;

var imgSrc1 = document.querySelectorAll("img")[0];
imgSrc1.setAttribute("src",randImageSource1);

var randomNumber2 = Math.floor(Math.random()*6) +1;
var randImage2 = "dice"+randomNumber2+".png";
var randImageSource2 = "images/"+randImage2;

var imgSrc2 = document.querySelectorAll("img")[1];
imgSrc2.setAttribute("src",randImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🚩Player 1 Won";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 Won🚩";
    
}else{
    document.querySelector("h1").innerHTML= "🕊️Draw";
}
