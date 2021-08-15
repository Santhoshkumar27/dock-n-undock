var spaceCraft,iss;
var sc1,sc2,sc3,sc4,issimg,bg;

function preload(){
  sc1=loadImage("spacecraft1.png");
  sc2=loadImage("spacecraft2.png");
  sc3=loadImage("spacecraft3.png");
  sc4=loadImage("spacecraft4.png");

  issimg=loadImage("iss.png");
  bg=loadImage("spacebg.jpg");

}
function setup() {
  createCanvas(800,400);
   spaceCraft =createSprite(600, 300, 50, 50);
  spaceCraft.addImage(sc1);
  spaceCraft.scale=0.150;
  




   iss =createSprite(400, 150, 50, 50);
  iss.addImage(issimg);
  iss.scale=0.8;



  
}

function draw() {
  background(bg);
 
 if(spaceCraft.y <=(iss.y+60) && spaceCraft.x <=(iss.x-15)) {
   hasDocked = true;
   textSize(25);
  fill("white")
   text("Docking Successfull",200,300);
   spaceCraft.velocityX=0;
   spaceCraft.velocityY=0;
   spaceCraft.addAnimation("22",sc1);
   spaceCraft.changeAnimation("22");
   spaceCraft.x=spaceCraft.x+0;
   spaceCraft.y=spaceCraft.y+0;
 }

 keyPressed();
  drawSprites();
}
function keyPressed
(){
  if(keyDown("UP_ARROW")){
    spaceCraft.velocityY =-1;
    spaceCraft.addAnimation("11",sc2);
    spaceCraft.changeAnimation("11");
  }
   if(keyDown("DOWN_ARROW")){
    spaceCraft.velocityY= +1;
    spaceCraft.addAnimation("22",sc1);
    spaceCraft.changeAnimation("22");
  }
   if(keyDown("LEFT_ARROW")){
    spaceCraft.velocityX =-1;
    spaceCraft.addAnimation("33",sc3);
    spaceCraft.changeAnimation("33");
  }
   if(keyDown("RIGHT_ARROW")){
    spaceCraft.velocityX= +1;
    spaceCraft.addAnimation("44",sc4);
    spaceCraft.changeAnimation("44");


}
}