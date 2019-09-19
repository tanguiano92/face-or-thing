class Bone {
  constructor(_xPos, _yPos, _rotation, _size){ 
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
    
    }
  display() {
   // bone color
  fill(227, 226, 222);
  noStroke();
   // bone drawing
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation); 
  scale(this.size);
  rect(-110, -60, 20, 100);
  fill(227, 226, 222);
  noStroke();
  circle(-90, -65, 25);
  fill(227, 226, 222);
  noStroke();
  circle(-110, 45, 25);
  fill(227, 226, 222);
  noStroke();
  circle(-110, -65, 25);
  fill(227, 226, 222);
  noStroke();
  circle(-90, 45, 25);
  pop();
  
  }
  
  move(){
    //this.angle++ is shorthand for this.angle = this.angle + 1;
    this.rotation++;
    
    if (this.yPos <= height * 1.3){
  // this.yPos = this.yPos + 2;
  // shorthand below is +=   
    this.yPos += 2;
    } else if (this.yPos > height){
    this.yPos = -height * .08;
    }
 }
  
}




//function drawBone(xPos, yPos, rotation){
   // bone color
  //fill(227, 226, 222);
  //noStroke();
   // bone drawing
  //push();
  //translate(xPos, yPos);
  //rotate(angleBone); 
  //rect(-110, -60, 20, 100);
  //fill(227, 226, 222);
  //noStroke();
  //circle(-90, -65, 25);
  //fill(227, 226, 222);
  //noStroke();
  //circle(-110, 45, 25);
  //fill(227, 226, 222);
  //noStroke();
  //circle(-110, -65, 25);
  //fill(227, 226, 222);
  //noStroke();
  //circle(-90, 45, 25);
  //pop();
//}
