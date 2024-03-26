let size = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(1);
}

// mouseX - current 
// pmouseX - last time 
// movedX = abs(mouseX - pmouseX)

function draw() {
  //background(220);
  
  //if (mouseIsPressed) {
  
  size = (movedX + movedY);
  fill(0);
  //circle(mouseX, mouseY, size);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

  
//function mousePressed