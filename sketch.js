
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  // createCanvas(600, 600);
  
  var survivalTime=0;
  
  
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  console.log(ground.x)

  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
 
}


function draw() {
  
  background("maroon ");
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.7;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  stroke("red");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("red");
  textSize(20);
  fill("green");
  survivalTime=Math.round(frameCount/70); 
  text("Survival Time: "+ survivalTime, 100,50);

}

function spawnFood() {
  //code for creating food 
  if (frameCount % 60 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -6;
    banana.lifetime = 280;
    monkey.depth = banana.depth + 
    banana.addImage(bananaImage);
    banana.scale=0.05;
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount%100 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -7;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    obstacle.lifetime = 280;
    obstaclesGroup.add(obstacle);
  }
}





