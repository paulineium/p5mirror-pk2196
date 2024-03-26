let stars = [];
let lines = [];
let zassign = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < width * 0.22; i++) {
    stars.push(new Constellation());
  }
}

function draw() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle();
    stars[i].display();
  }

if (zassign == 1) {
  let size = 10;
  stroke(205);
  line(200, 400, 250, 350);
  ellipse(200, 400, size);
  ellipse(250, 350, size);
  line(210, 300, 250, 350);
  ellipse(210, 300, size);
  line(300, 270, 210, 300);
  ellipse(300, 270, size);
  line(340, 300, 300, 270);
  ellipse(340, 300, size);
  line(320, 330, 340, 300);
  ellipse(320, 330, size);
  line(315, 380, 320, 330);
  ellipse(315, 380, size);
  line(370, 330, 340, 300);
  ellipse(370, 330, size);
  line(390, 370, 370, 330);
  ellipse(390, 370, size);
}
}

function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}