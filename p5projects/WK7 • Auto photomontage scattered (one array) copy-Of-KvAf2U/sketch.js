/*
Experimental Photography
Interactive Media Arts @ NYU
Ellen Nickles

NOTE: After uploading images to the left, 
File > Save to access them in your sketch
*/

let pics = [];
let totalImages = 8;

function preload() {
  // does the total match the amount uploaded?
  for (let i = 0; i < totalImages; i++) {
    pics.push(loadImage(`images/${i}.png`));
  }
  // console.log(pics);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  for (let pic of pics) {
    // Options to consider:
    // add transparency
    // tint(255, random(255))

    // rotate images
    // play with scale

    let x = random(0, width - pic.width);
    let y = random(0, height - pic.height);
    image(pic, x, y);
  }
}

function draw() {}

function mousePressed() {
  saveCanvas();
}
