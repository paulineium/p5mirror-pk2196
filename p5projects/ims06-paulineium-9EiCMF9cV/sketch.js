// The sketch creates an animated graphics display where two images are combined in a tiling process, with each tile's content and size determined by sine wave functions

// I'm using p5.Graphics to draw into an off-screen graphics buffer (ref. https://p5js.org/reference/#/p5/createGraphics)

let pg, pg2, buffer;
let img, img2;
let sans;

// Load data
function preload() {
  img = loadImage("2.jpg");
  img2 = loadImage("3.jpeg");
  sans = loadFont("StretchPro.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  
  // Graphic buffers created to store rendering content separately from the main canvas
  pg = createGraphics(586, 810);
  pg2 = createGraphics(586, 810);
  buffer = createGraphics(586, 810);
}

function draw() {
  background(0);
  // Drawing in separate buffers
  drawPg();
  drawPg2();

  buffer.background(241, 241, 241);
  
  // Obtaining from original images to break into tiles
  let i1 = pg.get();
  let i2 = pg2.get();

  let tilesX = pg.width / 6;
  let tilesY = pg.height / 6;
  let tileW = pg.width / tilesX;
  let tileH = pg.height / tilesY;

  buffer.noStroke();
  
  // Stores sine wave values that are mapped to each tile
  let waves = [];

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      waves.push(sin(radians(frameCount * 3 + x * 0.3 + y * 0.3)));
    }
  }

  let idx = 0;

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      let c1 = i1.get(int(x * tileW), int(y * tileH));
      let c2 = i2.get(int(x * tileW), int(y * tileH));
      let wave = map(waves[idx++], -1, 1, 0, 1);
      let c3 = lerpColor(color(c1), color(c2), wave);
      let bri = brightness(c3);

      let sizeW = map(bri, 0, 255, tileW, 0);
      let sizeH = map(bri, 0, 255, tileH, 0);

      buffer.fill(48, 93, 191);
      buffer.rect(x * tileW, y * tileH, sizeW * 1.2, sizeH * 1.2);
    }
  }

  imageMode(CENTER);
  image(buffer, width / 2, height / 2);
}

function drawPg() {
  pg.background(17, 17, 17);
  pg.imageMode(CENTER);
  
  // Display image
  pg.push();
  pg.translate(pg.width / 2, pg.height / 2);
  let wave1 = map(sin(radians(frameCount)), -1, 1, 0.8, 0.5);
  pg.scale(wave1);
  pg.image(img, 0, 0);
  pg.pop();

  pg.textFont(sans);
  pg.textAlign(CENTER, CENTER);
  pg.textSize(450);
  pg.fill(0);
  
 // Text style
  let txt = "JO";
  let wave2 = map(tan(radians(frameCount)), -1, 1, -100, 100);
  pg.push();
  pg.translate(pg.width / 2 + wave2, pg.height / 2 - 40);
  pg.text(txt, 0, 0);
  pg.pop();
}

function drawPg2() {
  pg2.background(17, 17, 17);
  pg2.imageMode(CENTER);
  
  // Display image
  pg2.push();
  pg2.translate(pg2.width / 2, pg2.height / 2);
  let wave1 = map(sin(radians(frameCount)), -1, 1, 0.5, 0.7);
  pg2.scale(wave1);
  pg2.image(img2, 0, 0);
  pg2.pop();
  
  // Text style
  pg2.textFont(sans);
  pg2.textAlign(CENTER, CENTER);
  pg2.textSize(450);
  pg2.fill(255, 0, 0);
  
  // Display text
  let txt = "ZU";
  let wave2 = map(tan(radians(frameCount)), -1, 1, -100, 100);
  pg2.push();
  pg2.translate(pg2.width / 2 - wave2, pg2.height / 2 - 40);
  pg2.text(txt, 0, 0);
  pg2.pop();
}

// Fullscreen
function keyPressed() {
  if (key === 'f' || key === 'F') {
    let fs = fullscreen();
    fullscreen(!fs);
    resizeCanvas(windowWidth, windowHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
