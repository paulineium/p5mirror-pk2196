let img;
let button;
function preload() {
  img = loadImage('frenchie.jpeg');
}

function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
  
  button = createButton('do not click on me!');
  button.position(240, 30);
  button.size(100, 50);
  button.mousePressed(caption);
  
function caption() {
  button = createButton('seriously do not');
  button.position(240, 30);
  button.size(100, 50);
  button.mousePressed(caption2)
}

function caption2(){
  button = createButton('I told you not to do it..');
  button.position(240, 30);
  button.size(100, 50);
  button.mousePressed(frenchie)
}
  
function frenchie(){
  image(img, 50, 150);
  button = createButton('you did it! Enjoy looking at a frenchie');
  button.position(240, 30);
  button.size(190,100);
}
}