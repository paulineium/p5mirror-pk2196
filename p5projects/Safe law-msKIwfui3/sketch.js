let img;

function setup() {
  createCanvas(900, 900, WEBGL);
  img = loadImage("portrait.jpg", function(img) {
    img.resize(900, 900);
  });
}

function draw() {
  background(241);
  noStroke();
  // sphereDetail(3); // Commented out to check if the rest of the sketch works.
  let tiles = 150;
  let tileSize = width / tiles;
  rotateY(radians(frameCount));
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      let c = img.get(int(x * tileSize), int(y * tileSize));
      let b = map(brightness(c), 0, 255, 1, 0);
      let z = map(b, 0, 1, -100, 100);
      push();
      translate(x * tileSize - width / 2, y * tileSize - height / 2, z);
      fill(c);
      sphere(tileSize * b * 0.8);
      pop();
    }
  }
}

function brightness(c) {
  return (red(c) + green(c) + blue(c)) / 3;
}

function radians(degrees) {
  return degrees * (PI / 180);
}
