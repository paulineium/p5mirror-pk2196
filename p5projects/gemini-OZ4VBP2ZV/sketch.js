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
  line(200, 200, 260, 210);
  ellipse(200, 200, size);
  ellipse(260, 210, size);
  line(290, 160, 260, 210);
  ellipse(290, 160, size);
  line(230, 250, 260, 210);
  ellipse(230, 250, size);
  line(200, 280, 230, 250);
  ellipse(200, 280, size);
  line(150, 250, 200, 280);
  ellipse(150, 250, size);
  line(180, 320, 200, 280);
  ellipse(180, 320, size);
  line(270, 320, 200, 280);
  ellipse(270, 320, size);
  line(270, 390, 270, 320);
  ellipse(270, 390, size);
  line(400, 410, 270, 390);
  ellipse(400, 410, size);
  line(320, 320, 270, 320);
  ellipse(320, 320, size);
  line(400, 340, 320, 320);
  ellipse(400, 340, size);
  line(370, 250, 260, 210);
  ellipse(370, 250, size);
  line(430, 280, 370, 250);
  ellipse(430, 280, size);
  line(430, 250, 370, 250);
  ellipse(430, 250, size);
}
}

function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}