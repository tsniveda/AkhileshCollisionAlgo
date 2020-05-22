var fixedRect, movingRect;

function setup() {
  createCanvas(800,600);

  fixedRect = createSprite(200, 200, 100, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite( 100, 100, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background("black");  

  movingRect.x = mouseX; 
  movingRect.y = mouseY;

  console.log ( movingRect.x - fixedRect.x );

  if( movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else { 
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}