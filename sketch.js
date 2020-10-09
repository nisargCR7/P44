var player,form,game;
var gameState=0;
var database;
var playerCount=0;
var img1,img2,img3,room1;
var seconds=0
var minutes=0
var Questions=[]

function preload(){
img1=loadImage('images/screen 1.jpg');
img2=loadImage('images/screen 2.jpg');
img3=loadImage('images/screen 3.jpg');
room1=loadImage('images/Room-1.jpg');

}


function setup() {
 createCanvas(displayWidth,displayHeight)
 database = firebase.database();
 game = new Game()
 game.start()
 game.getState()
 
 setInterval(timeIt, 1000);

}




function  draw() {
document.body.style.overflow = "hidden";

if(gameState === 1){
  game.start2();
}

if(gameState === 2){
  game.start3();
  seconds=0
}

if(gameState === 3){
  clear();
  game.play();

} 

if(seconds===60){
  minutes=minutes+1
  seconds=0

}

drawSprites() 
}



function timeIt(){
  seconds=seconds+1
  
}
