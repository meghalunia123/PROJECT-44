var player ;
var ground;
var invisibleGround;

function preload(){
}

function setup() {
	createCanvas(400,400);
	player = createSprite(200,380,20,50);
	player.scale = 1.5;
	player.x = 50;
	

	ground = createSprite(200,380,400,20);
	ground.x = ground.width /2;

	invisibleGround = createSprite(200,385,400,5);
	invisibleGround.visible = false;


}


function draw() {
  background(255,255,255);

  ground.velocityX = -6;

  if (ground.x < 0){
	ground.x = ground.width/2;
  }

  player.collide(invisibleGround);
  
  drawSprites();
 
}



