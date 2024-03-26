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
  line(200, 500, 250, 530);
  ellipse(200, 500, size);
  ellipse(250, 530, size);
  line(270, 500, 250, 530);
  ellipse(270, 500, size);
  line(350, 510, 270, 500);
  ellipse(350, 510, size);
  line(380, 520, 350, 510);
  ellipse(380, 520, size);
  line(350, 430, 380, 520);
  ellipse(350, 430, size);
  line(340, 330, 350, 430);
  ellipse(340, 330, size);
  line(360, 300, 340, 330);
  ellipse(360, 300, size);
  line(330, 280, 360, 300);
  ellipse(330, 280, size);
  line(310, 310, 330, 280);
  ellipse(310, 310, size);
  line(340, 330, 310, 310);
}
}

function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}