let a = 150;
let direction = 1;
x = 1.85 // upper mouth radian
y = 0.2 // lower mouth radian
speed = 0.01 // speed of mouth opening & closing

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(6,77,135);
  
  //body
  noStroke();
  fill(255, 255, 0);
  ellipse(70, 55, 100, 100);
  
  //mouth
  noStroke();
  fill(6,77,135);
  if (x >= 2 || x <= 1.8) {
    speed = speed*(-1) 
  }
  arc(70, 50, 200, 200, 
      (x+=speed)*PI, (y-=speed)*PI, PIE);
  
  //eye
  noStroke();
  fill(0);
  ellipse(70, 30, 15, 15);
  
  fill(255,165,0);
  ellipse(a,45,20,20);
  a = a + direction;
  
}