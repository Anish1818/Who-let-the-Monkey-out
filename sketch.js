
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var groundImage,ground;
var invisibleGround;
var survivalTime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  groundImage=loadImage("Ground.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
ground=createSprite(0,0,600,600);
ground.scale=2.5;
ground.velocityX=-4;
ground.addImage(groundImage);
monkey=createSprite(100,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.2;
invisibleGround=createSprite(200,380,400,40);
invisibleGround.visible=false
survivalTime=0;
foodGroup=new Group();
obstacleGroup=new Group();
}


function draw() {
background("white");


fill("white");
text("Score:"+score,500,50);
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameRate())
text("Survival Time:"+survivalTime,100,50) 


if(ground.x<0){
ground.x=ground.width/2;
}
monkey.collide(invisibleGround);
if(keyDown("space")){
monkey.velocityY=-10;
}
monkey.velocityY=monkey.velocityY+0.5;

bananas();
obstacles();
if(foodGroup.isTouching(monkey)){
foodGroup.destroyEach();
}
if(obstacleGroup.isTouching(monkey)){
obstacleGroup.setVelocityXEach(0);
foodGroup.setVelocityXEach(0);
foodGroup.destroyEach();
}
drawSprites();
  
}
function bananas(){
if(frameCount%80==0){
banana=createSprite(600,250,40,10);
banana.addImage(bananaImage);
banana.y=Math.round(random(120,200));
banana.velocityX=-4;
banana.lifetime=300;
banana.scale=0.1;
foodGroup.add(banana);
}
}
function obstacles(){
if(frameCount%300==0){
obstacle=createSprite(300,285,10,40);
obstacle.velocityX=-6
obstacle.addImage(obstacleImage);
obstacle.scale=0.3
obstacle.lifetime=200;
obstacleGroup.add(obstacle);
  
}
}




