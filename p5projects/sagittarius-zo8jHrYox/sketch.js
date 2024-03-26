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
  line(150, 100, 210, 150);
  ellipse(150, 100, size);
  ellipse(210, 150, size);
  line(200, 190, 210, 150);
  ellipse(200, 190, size);
  line(160, 170, 200, 190);
  ellipse(160, 170, size);
  line(130, 200, 160, 170);
  ellipse(130, 200, size);
  line(150, 230, 130, 200);
  ellipse(150, 230, size);
  line(150, 270, 150, 230);
  ellipse(150, 270, size);
  line(180, 250, 150, 270);
  ellipse(180, 250, size);
  line(180, 290, 150, 270);
  ellipse(180, 290, size);
  line(230, 220, 200, 190);
  ellipse(230, 220, size);
  line(260, 180, 230, 220);
  ellipse(260, 180, size);
  line(270, 130, 260, 180);
  ellipse(270, 130, size);
  line(280, 230, 260, 180);
  ellipse(280, 230, size);
  line(260, 260, 280, 230);
  ellipse(260, 260, size);
  line(280, 290, 260, 260);
  ellipse(280, 290, size);
  line(320, 250, 280, 230);
  ellipse(320, 250, size);
  line(350, 250, 320, 250);
  ellipse(350, 250, size);
}
}

function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}