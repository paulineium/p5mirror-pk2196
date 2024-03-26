let pic;

function preload () {
  pic = loadImage('')
}

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(220);
  
  imageMode(CENTER)
  image (pic, 0, 0, pic.width, pic.height);
  
  let rightHalf = pic.get(pic.width/2, 0, pic.width/2, pic.height);
  image(rightHalf, 50, 50)
}