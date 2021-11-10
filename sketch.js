var track, trackIm, boyAn, boy, ib1, ib2;
function preload(){
  //pre-load images
  trackIm = loadImage("path.png");

  boyAn = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "Jake5.png");
  
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  track = createSprite(200, 200);
  track.addImage("hsdgvshb", trackIm);
  track.scale = 1.2;
  track.velocityY = 4;

  boy = createSprite(200, 300);
  boy.addAnimation("ghhf", boyAn);
  boy.scale = 1;

  ib1 = createSprite(0, 200, 100, 500);
  ib1.visible = false;

  ib2 = createSprite(400, 200, 100, 500);
  ib2.visible = false;
}

function draw() {
  background(0);

  boy.x = mouseX;

  if (track.y > 400) {
    track.y = height/2;
  }

  boy.collide(ib1);
  boy.collide(ib2);

  drawSprites();
}
