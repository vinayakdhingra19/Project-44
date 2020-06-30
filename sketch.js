var robot1,robot1Img;
var backgroundImg;
var robot2,robot2Img;

function preload(){
  robot1Img = loadImage("Robot.png");  
  backgroundImg = loadImage("background.png"); 
  robot2Img = loadImage("Robot2.png");
  
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    robot1 = createSprite(80,height - 100,50,50)
    robot1.addImage("robot1",robot1Img);
    robot1.scale = 0.4;

    robot2 = createSprite(80,height - 550,50,50);
    robot2.addImage("robot2",robot2Img);
    robot2.scale = 0.4;

    
  }
function draw(){
    background(backgroundImg);

    
    
    
    
  
    drawSprites();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    robot1.x = robot1.x + 10;
  }
  else if(keyCode === LEFT_ARROW){
    robot1.x = robot1.x - 10;
  }
  else if(keyCode === UP_ARROW){
    robot1.y = robot1.y - 10;
  }
  else if(keyCode === DOWN_ARROW){
    robot1.y = robot1.y + 10;
  }

  else if(keyCode === 87){
    robot2.y = robot2.y - 10;
  }
  else if(keyCode === 83){
    robot2.y = robot2.y + 10;
  }
  else if(keyCode === 65){
    robot2.x = robot2.x - 10;
  }
  else if(keyCode === 68){
    robot2.x = robot2.x + 10;
  }


}