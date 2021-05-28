const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg;
var childImg;
var child;

var snow=[];

function preload(){
   backgroundImg=loadImage("snow1.jpg");
   childImg=loadImage("child.jpg");
}

function setup() {
  createCanvas(800,400);

  child=createSprite(400, 200, 50, 100);
  child.addImage(childImg);
  child.scale=0.2;
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  
  if(frameCount%60===0){
    var x= new Snow(random(width/2-10,width/2+10),10,10);
    snow.push(x);
    console.log(x);
  }
  for (var i = 0; i < snow.length; i++) {
    snow[i].display();   
  }

  drawSprites();
}