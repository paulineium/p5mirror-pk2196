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
  line(200, 450, 240, 400);
  ellipse(200, 450, size);
  ellipse(240, 400, size);
  line(280, 390, 240, 400);
  ellipse(280, 390, size);
  line(300, 410, 280, 390);
  ellipse(300, 410, size);
  line(300, 460, 300, 410);
  ellipse(300, 460, size);
  line(340, 380, 300, 410);
  ellipse(340, 380, size);
  line(310, 350, 280, 390);
  ellipse(310, 350, size);
  line(340, 380, 310, 350);
  line(380, 385, 340, 380);
  ellipse(380, 385, size);
  line(390, 330, 380, 385);
  ellipse(390, 330, size);
  line(320, 320, 310, 350);
  ellipse(320, 320, size);
  line(340, 330, 320, 320);
  ellipse(340, 330, size);
  line(345, 310, 340, 330);
  ellipse(345, 310, size);
}
}

function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}