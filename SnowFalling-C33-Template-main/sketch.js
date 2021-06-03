var girl;
var girlImage;
var backgroundImg;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

function preload(){
  girlImage = loadImage("girl.png") 
  backgroundImg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  girl = createSprite(400, 200, 50, 50);
  girl.addImage(girlImage)
}
function draw() {
  background(backgroundImg);  
  drawSprites();
}