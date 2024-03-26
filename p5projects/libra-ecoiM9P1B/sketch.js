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
  line(200, 200, 230, 230);
  ellipse(200, 200, size);
  ellipse(230, 230, size);
  line(260, 230, 230, 230);
  ellipse(260, 230, size);
  line(300, 180, 260, 230);
  ellipse(300, 180, size);
  line(320, 350, 300, 180);
  ellipse(320, 350, size);
  line(260, 360, 320, 350);
  ellipse(260, 360, size);
  line(260, 360, 320, 350);
  ellipse(260, 360, size);
  line(260, 380, 260, 360);
  ellipse(260, 380, size);
  line(400, 250, 320, 350);
  ellipse(400, 250, size);
  line(400, 250, 300, 180);
}
}

function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}