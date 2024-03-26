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
  line(330, 320, 250, 350);
  ellipse(330, 320, size);
  line(350, 230, 330, 320);
  ellipse(350, 230, size);
  line(380, 400, 350, 230);
  ellipse(380, 400, size);
  line(360, 420, 380, 400);
  ellipse(360, 420, size);
  line(340, 410, 360, 420);
  ellipse(340, 410, size);
  line(300, 430, 340, 410);
  ellipse(300, 430, size);
  line(200, 400, 300, 430);
}
}

function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}