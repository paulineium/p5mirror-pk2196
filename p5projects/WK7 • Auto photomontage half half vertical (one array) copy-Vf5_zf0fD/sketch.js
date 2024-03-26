/*
Experimental Photography
Interactive Media Arts @ NYU
Ellen Nickles

NOTE: After uploading pics to the left, 
File > Save to access them in your sketch

In this example, image sizes match Canvas
width and height
*/

let total = 12;
let pics = [];
let randomizeButton;
let saveButton;

function preload() {
  // does the total match the amount uploaded?
  for (let i = 0; i < total; i++) {
    // do the file extensions match those uploaded?
    pics.push(loadImage(`images/${i}.jpg`));
  }
}

function setup() {
  createCanvas(512, 512);
  background(220);
  // create buttons
  randomizeButton = createButton("randomize");
  randomizeButton.mousePressed(randomize);
  saveButton = createButton("save");
  saveButton.mousePressed(savePic);
}

function draw() {}

function randomize() {
  // shuffle the array
  let shuffledpics = shuffle(pics);
  
  // get the first image
  let left = shuffledpics[0];
  // draw it on the canvas
  image(left, 0, 0, left.width, left.height);

  // get the second image
  let right = shuffledpics[1];
  // get the pixels on the right half of that image
  let rightHalf = right.get(right.width / 2, 0, right.width / 2, right.height);
  // draw those pixels on the canvas
  image(rightHalf, width / 2, 0);
}

function savePic() {
  saveCanvas();
}
