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
  line(200, 250, 300, 260);
  ellipse(200, 250, size);
  ellipse(300, 260, size);
  line(280, 300, 300, 260);
  ellipse(280, 300, size);
  line(250, 350, 280, 300);
  ellipse(250, 350, size);
  line(350, 220, 300, 260);
  ellipse(350, 220, size);
  line(420, 120, 350, 220);
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