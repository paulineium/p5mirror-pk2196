let img;

function preload () {
  img = loadImage("assets/wow.jpg")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse (50,50,50,50);
  //tint(128, 0, 0, mouseX);
  image(img, 0, 0, width, height);
  filter(INVERT);
    image(img, width/2, 0, width, height);
  //noTint();
}