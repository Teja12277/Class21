var fixedrect, movingrect

var ob1,ob2,ob3,ob4
function setup() {
  createCanvas(1200,800);
 fixedrect = createSprite(600,400,50,80)
 fixedrect.shapeColor = "green"
 movingrect = createSprite(400,200, 80,50)
 movingrect.shapeColor = "green"
ob1 = createSprite(100,100,50,50)
ob1.shapeColor = "green";
ob2 = createSprite(200,100,50,50)
ob2.shapeColor = "green";
ob3 = createSprite(300,100,50,50)
ob3.shapeColor = "green";
ob4 = createSprite(400,100,50,50)
ob4.shapeColor = "green";
ob1.velocityY = 5
ob1.velocityX = -5
}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
  if(isTouching(fixedrect, movingrect)){
    movingrect.shapeColor = "yellow"
    fixedrect.shapeColor = "yellow"
  }else{
    movingrect.shapeColor = "green"
    fixedrect.shapeColor = "green"
  }
  
  bounceOff(ob1,movingrect)
  drawSprites();
}

