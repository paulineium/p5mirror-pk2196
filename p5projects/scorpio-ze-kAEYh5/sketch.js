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
  line(200, 200, 160, 250);
  ellipse(200, 200, size);
  ellipse(160, 250, size);
  line(210, 280, 160, 250);
  ellipse(210, 280, size);
  line(290, 240, 210, 280);
  ellipse(290, 240, size);
  line(260, 200, 290, 240);
  ellipse(260, 200, size);
  line(300, 170, 260, 200);
  ellipse(300, 170, size);
  line(340, 140, 300, 170);
  ellipse(340, 140, size);
  line(350, 100, 340, 140);
  ellipse(350, 100, size);
  line(350, 100, 340, 140);
  ellipse(350, 100, size);
  line(390, 100, 340, 140);
  ellipse(390, 100, size);
  line(420, 120, 340, 140);
  ellipse(420, 120, size);
}
}

function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}