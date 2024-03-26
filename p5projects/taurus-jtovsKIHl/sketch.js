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
  line(200, 200, 240, 305);
  ellipse(200, 200, size);
  ellipse(240, 305, size);
  line(280, 320, 240, 305);
  ellipse(280, 320, size);
  line(300, 290, 280, 320);
  ellipse(300, 290, size);
  line(280, 280, 300, 290);
  ellipse(280, 280, size); 
  line(290, 260, 280, 280);
  ellipse(290, 260, size); 
  line(280, 230, 290, 260);
  ellipse(280, 230, size); 
  line(310, 380, 280, 320);
  ellipse(310, 380, size);
  line(330, 410, 310, 380);
  ellipse(330, 410, size);
}
}

function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}