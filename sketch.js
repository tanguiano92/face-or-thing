backgroundColor = 0;

let pupilX;
let pupilY;

'use strict'

var mic;

let micLevel;

// let angleBone = 15;

let angleLeftArm = 10

let bamYes = false;

let bones = [];

function setup() {
  createCanvas(400, 400);
  
   mic = new p5.AudioIn()
  mic.start();
   for (let i = 0; i <= 25; i ++){
   bones[i] = new Bone(random(1, 10) * width * .1, random(1, 10) * width * .1, random(360), random(10) * .2);
   }
  
  console.log(bones);
  
  
}

function draw() {
  
  
  
   background(backgroundColor);
  fill(113, 103, 219);
   circle(300, 200, 100);

  
   pupilX = mouseX;
  pupilY = mouseY;
  
  
   if (mouseX < 100) {
    pupilX = 100;
  } else if (mouseX > 125) {
    pupilX = 125;
  }

  // same deal with pupilY

  if (mouseY < 125) {
    pupilY = 125;
  } else if (mouseY > 145) {
    pupilY = 145;
  }
  
   angleMode(DEGREES);
  
   console.log("mic level" + mic.getLevel());
  
  
  // angleBone = map(mic.getLevel(), 0, 1, 345, 369);
  
 // drawBone(145, 100, 30);
  
 //  drawBone(135, 185, 0);
  
 for (i = 0; i < bones.length; i++){
 bones[i].display();
   bones[i].move();
 }
  
  drawGhostieBody();
  
  drawLeftArm(angleLeftArm);
  
  drawRightArm();
  
  drawSkullMask(0);
  
  drawEyes();
  
   drawPupilX(pupilX + -15, pupilY + -15);
  
  drawPupilY(pupilX + -15, pupilY + -15);
  
  if (bamYes == true){
  circle(width/2, height/2, 100);
  }
   }
   
   function mousePressed(){
  // if the position of the mouse is inside this region
  // then do this
   
   if (mouseX > width * 0.1 && mouseX < width * 0.2 && mouseY > height * 0.3 && height * 0.1){
      console.log("mouse beep in here");
     angleLeftArm = -angleLeftArm;
     } else if (mouseX < width * .2 || mouseX > width * .8){
     bamYes = !bamYes;
     console.log("mouse beep in here");
       
        if (mouseX >= 50 && mouseX <= 150 && mouseY <= 250 && mouseY >= 150) {
    // console.log("in here!");
    backgroundColor = 100;
  } else {
    // console.log("outta here");
    backgroundColor = 0;
  }
  
  
  if (dist(mouseX, mouseY, 300, 200) <= 50){
    backgroundColor = 155, 153, 168;
  }
}
     }

 
function drawGhostieBody() {
  // head
  fill(255, 255, 255);
  stroke(255, 255, 255);
  circle(185, 120, 205);

  // body
  fill(255, 255, 255);
  stroke(255, 255, 255);
  square(85, 140, 200);
}

function drawLeftArm(){
   angleMode(DEGREES);
  
  // left arm
  push();
  translate(120, 160);
  rotate(angleLeftArm);
  ellipse(-10, 10, 150, 40);
  pop();
}

function drawRightArm(){
angleMode(DEGREES);
  // right arm
  push();
  translate(250,160);
  rotate(30);
  ellipse(15, 10, 150, 40);
  pop();
}

function drawSkullMask() {
 
  // skull mask
  fill(200);
  stroke(200);
  circle(185, 115, 155);
  fill(200);
  stroke(200);
  square(150, 135, 70);
  
  
  // left nostril
  fill(0, 0, 0);
  stroke(0, 0, 0);
  circle(180, 155, 5);
  
  // right nostril
  fill(0, 0, 0);
  stroke(0, 0, 0);
  circle(190, 155, 5);
  
   // left cheek
  fill(200);
  stroke(200);
  circle(135, 150, 45);
  
   // right cheek
  fill(200);
  stroke(200);
  circle(235, 150, 45);
}

function drawEyes(){
   // left eye
  fill(0, 0, 0);
  circle(150, 125, 60);
  
  // right eye
  fill(0, 0, 0);
  circle(220, 125, 60);
}

function drawPupilX(xPos, yPos){
  // left pupil
  fill(104, 83, 237);
  stroke(104, 83, 237);
  angleMode(DEGREES);
  push();
  translate(0, 0);
  circle(xPos + 50, yPos, 20);
  pop();
}

  function drawPupilY(xPos, yPos){
 // right pupil
  fill(116, 12, 125);
  stroke(104, 83, 237);
  push();
  translate(0, 0);
  circle(xPos + 115, yPos, 20);
  pop();
  }