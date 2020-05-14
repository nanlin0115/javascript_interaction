//Half Calculation
var halfButton = document.getElementById("half-button");
var inputNum = document.getElementById("half-input");

halfButton.addEventListener("click", halfNumber);

function halfNumber() {
  alert(inputNum.value/2);
  console.log("Half of " + inputNum.value+ " is " + inputNum.value/2+ ".");
}

//Fortune telling
var fortuneButton = document.getElementById("fortune-button");
var inputFortune = document.getElementById("fortune-input");
var fortuneLst = [" Nothing is so much to be feared as fear.", "All things are difficult before they are easy.",
 "The real kindness comes from within you.", "You don’t need strength to let go of something. What you really need is understanding.", 
 "If you want the rainbow, you have to tolerate the rain.", "Fear is interest paid on a debt you may not owe.","Hardly anyone knows how much is gained by ignoring the future.",
"The usefulness of a cup is in its emptiness."];
var font_fam = ["Comfortaa", "Cookie", "Kaushan Script", "Press Start 2P", "Roboto"]

var outputIndex;

var currentOutput = document.getElementById("fortune-output");


fortuneButton.addEventListener("click", fortune);

function fortune() {
  outputIndex = Math.floor(Math.random() * fortuneLst.length);
  currentOutput.innerHTML = inputFortune.value + ": " + fortuneLst[outputIndex];
}

//restyle
currentOutput.addEventListener("click", restyle);
function restyle() {
  currentOutput.style.fontFamily = font_fam[Math.floor(Math.random()*font_fam.length)];
  currentOutput.style.color = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
  currentOutput.style.fontSize =Math.round(Math.random()*100)+"px";
  currentOutput.style.textShadow = "0px 0px " + Math.round(Math.random()*-10) + "px "+"rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
}