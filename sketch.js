  var sprite;


function setup() {
  createCanvas(400,400);
  sprite=createSprite(200,200,15,15);
}

function draw() 
{
  background("blueviolet");
  if (keyDown("w")){
    sprite.velocityY=-15;
  
  }
  if (keyDown("s")){
    sprite.velocityY=15;
  
  }
  if (keyDown("a")){
    sprite.velocityX=-15;
  
  }
  if (keyDown("d")){
    sprite.velocityX=15;
  
  }


  drawSprites();

}




