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
  line(200, 450, 230, 390);
  ellipse(200, 450, size);
  ellipse(230, 390, size);
  line(320, 370, 230, 390);
  ellipse(320, 370, size);
  line(300, 350, 320, 370);
  ellipse(300, 350, size);
  line(340, 280, 300, 350);
  ellipse(340, 280, size);
  line(360, 300, 340, 280);
  ellipse(360, 300, size);
  line(350, 390, 320, 370);
  ellipse(350, 390, size);
  line(360, 450, 350, 390);
  ellipse(360, 450, size);
  line(200, 450, 360, 450);
}
}

function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}