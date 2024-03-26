function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  
  fill(255, 0, 0);
  stroke(0, 0, 255);
  strokeWeight(5);
  ellipseMode(CORNER);
  ellipse(200, 200, mouseY, mouseX);
  
  noFill();
  rect(200, 200, 100, 200);
}