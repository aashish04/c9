var box;

var box1
function setup() {
  createCanvas(400,400);
 
}

function draw() 
{
   background(150);
fill ("red")
   box = createSprite(200,200,30,30);

   box1= createSprite (200,300,35,35)  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




