var ball,img,paddle,ballImage,paddleImage;
//preload
function preload() {
  ballImage=loadImage("ball.png");
  paddleImage=loadImage("paddle.png");
}
//create ball,paddle 
function setup() {
  createCanvas(400, 400);
  
  ball=createSprite(50,200,20,20);
  ball.addImage("ball" , ballImage);
  ball.velocityX=9;
 ball.velocityY=-9;
  ball.velocityY=+9;
  
  paddle=createSprite(380,200,20,20);
  paddle.addImage("paddle" , paddleImage);
}
//edges,velocity for paddle
function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
   ball.bounceOff(paddle);
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     paddle.y=paddle.y-10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+10;
  }
  
  drawSprites();
  
}

function randomVelocity()
{}
