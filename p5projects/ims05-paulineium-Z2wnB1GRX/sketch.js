let img; // Declare image

function setup() {
  createCanvas(400, 580); // Setup canvas
  background('#f1f1f1'); // Background color
  img = loadImage("bw2.jpg"); // Load image
}

function draw() {
  background('#f1f1f1'); // Refresh background each frame
  fill('#111111'); // Set fill color
  noStroke(); // No borders on shapes
  let ratio = height / width; // Aspect ratio of canvas
  let tilesX = map(mouseX, 0, width, 10, 100); // Number of tiles, dependent on mouseX
  let tilesY = ratio * tilesX;
  let tileSize = width / tilesX; // Size of each tile

  // Loop through image pixels and draw rectangles
  for (let y = 0; y < img.height; y += tileSize) {
    for (let x = 0; x < img.width; x += tileSize) {
      let c = img.get(x, y); // Get color from image pixel
      let b = map(brightness(c), 0, 255, 1, 0); // Map brightness to a scale
      push(); // Save current drawing state
      translate(x, y); // Move coordinate system to tile
      rect(0, 0, b * tileSize, b * tileSize); // Draw rectangle scaled by brightness
      pop(); // Restore original drawing state
    }
  }
}
