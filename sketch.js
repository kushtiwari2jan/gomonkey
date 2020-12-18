var monkey , monkey_running, ground
var banana ,bananaImage, obstacle1,bananaGroup
var FoodGroup,obstacle, obstacleGroup
var score1
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstace1 = loadImage("obstacle.png");
 
}



function setup() {
  monkey= createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running)
  ground=createSprite(350,380,1550,20);
  ground.velocityX=-4
  monkey.scale=0.2
 
bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
    createCanvas(800, 400);
 background("yellow")
  
  
  text("survival time: "+ score1, 500,50);
  text("score: "+ score, 50,50);
  
  if(gameState === PLAY){
   score = score + Math.round(getFrameRate()/60);
monkey.collide(ground);
 if(keyDown("space")&& monkey.y >= 180) {
        monkey.velocityY = -12;
  if(bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();
   score=score+1 
  }
   
   
     
     }
     if(monkey.isTouching(obstacleGroup)){
     
     gameState=END
       }
    
    
    
    
    
    
    monkey.velocityY =  monkey.velocityY + 0.8
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  spawnbanana()
  spawnObstacles()
   drawSprites();
}
 

  else if (gameState === END) {
   ground.velocityX = 0;
      monkey.velocityY = 0
  
  
  
  
  } 

}
  
  
  
function spawnObstacles(){
    if (frameCount % 150 === 0){
   var obstacle = createSprite(600,340,10,40);
      obstacle.velocityX=-6;
      obstacle.scale=0.2;

   obstacle.addImage( obstace1);
        obstacleGroup.add(obstacle);
      
      obstacle.lifetime=120 
   
    }
      
      
     
  }
   
     
function spawnbanana(){
    if (frameCount % 150 === 0){
   var banana = createSprite(600,200,10,40);
      banana.velocityX=-6;
      banana.scale=0.2;

   banana.addImage(bananaImage);
        bananaGroup.add(banana);
      
      banana.lifetime=120 
   
    }
      
   

}




