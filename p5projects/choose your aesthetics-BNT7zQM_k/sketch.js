let button;
let images = [];

function preload() {
  
  images[1] = loadImage("assets/darkacademia.jpg");
  images[2] = loadImage("assets/cottagecore.jpg");
  images[3] = loadImage("assets/lightacademia.jpg");
}

function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
  
  button = createButton('dark academia');
  button.position(230, 150);
  button.size(200, 70);
  button.mousePressed(DA);
  
  function DA() {
  image(images[1], 50, 150);
}
  button = createButton('cottagecore');
  button.position(230, 250);
  button.size(200, 70);
  button.mousePressed(CC);
  
  function CC() {
  image(images[2], 50, 150);
}

  button = createButton('light academia');
  button.position(230, 350);
  button.size(200, 70);
  button.mousePressed(LA);
}

function LA() {
  image(images[3], 50, 150);
}

function draw() {
  textSize(32);
  text('choose your aesthetic:', 160, 100);
  fill(0);
}
