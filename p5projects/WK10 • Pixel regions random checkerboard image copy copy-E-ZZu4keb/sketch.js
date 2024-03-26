/*
Image credit:
Frida Kahlo by Guillermo Kahlo
https://commons.wikimedia.org/wiki/File:Frida_Kahlo,_by_Guillermo_Kahlo.jpg
*/

let num = 0;
let pic;
let amount = 5;
let cellSize;
let regions = [];

function preload() {
  pic = loadImage("kahlo.jpg");
}

function setup() {
  createCanvas(pic.width, pic.height);
  let button = createButton("Snap");
  button.mousePressed(takePic);

  image(pic, 0, 0);

  cellSize = width / amount;

  for (let x = 0; x < width; x += cellSize) {
    for (let y = 0; y < height; y += cellSize) {
      // show the grid
      // noFill()
      // square(x, y, cellSize);
      let pixelInfo = pic.get(x, y, cellSize, cellSize);
      regions.push(new picRegion(pixelInfo));
    }
  }
}

function draw() {}

function mousePressed() {
  for (let x = 0; x < amount; x++) {
    for (let y = 0; y < amount; y++) {
      if (
        mouseX > x * cellSize &&
        mouseX < (x + 1) * cellSize &&
        mouseY > y * cellSize &&
        mouseY < (y + 1) * cellSize
      ) {
        let num = int(random(regions.length));
        image(regions[num].region, x * cellSize, y * cellSize);
      }
    }
  }
}

class picRegion {
  constructor(px) {
    this.region = px;
  }
}

function takePic() {
  num++;
  saveCanvas(`pic${num}.png`);
}
