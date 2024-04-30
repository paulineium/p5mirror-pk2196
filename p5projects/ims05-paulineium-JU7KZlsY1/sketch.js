let imgs = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"]; // Array of image paths
let img;
let imgIndex = 0; // To track current image
let tilesX = 10; // Start with initial tilesX count
let animating = true; // Flag to animate tiles
let timeSwitch = 5000; // Time interval to switch images (5 seconds)
let lastSwitch = 0; // Timestamp of last image switch

function setup() {
  createCanvas(windowWidth, windowHeight); 
  loadNewImage();
}

function draw() {
  background('#f1f1f1'); // Refresh background each frame
  fill('#111111'); // Set fill color
  noStroke(); // No borders on shapes

  if (img) {
    // Aspect ratio calculations
    let imgRatio = img.height / img.width; // Image aspect ratio
    let canvasRatio = height / width; // Canvas aspect ratio
    let tilesY = tilesX * imgRatio; // Number of tiles in Y direction
    let tileSize = width / tilesX; // Tile size

    let scaleFactor = min(width / img.width, height / img.height); // Scale factor to fit the image within the canvas
    let scaledWidth = img.width * scaleFactor;
    let scaledHeight = img.height * scaleFactor;

    let xOffset = (width - scaledWidth) / 2; // X offset to center the image
    let yOffset = (height - scaledHeight) / 2; // Y offset to center the image

    // Check if time to switch image
    if (millis() - lastSwitch > timeSwitch) {
      lastSwitch = millis();
      imgIndex = (imgIndex + 1) % imgs.length; // Cycle through images
      loadNewImage(); // Load new image
    }

    // Loop through image pixels and draw rectangles
    for (let y = 0; y < scaledHeight; y += tileSize) {
      for (let x = 0; x < scaledWidth; x += tileSize) {
        let c = img.get(x / scaleFactor, y / scaleFactor); // Get color from image pixel
        let b = map(brightness(c), 0, 255, 1, 0); // Map brightness to a scale
        push(); // Save current drawing state
        translate(x + xOffset, y + yOffset); // Move coordinate system to tile
        rect(0, 0, b * tileSize, b * tileSize); // Draw rectangle scaled by brightness
        pop(); // Restore original drawing state
      }
    }
    
    // Increment tilesX smoothly over time to animate tiles
    tilesX += 0.1;
    if (tilesX > 100) tilesX = 10; // Reset tilesX when it exceeds 100
  }
}

function loadNewImage() {
  img = loadImage(imgs[imgIndex]); // Load image from array
}

// Fullscreen toggle
function keyPressed() {
  if (key === 'F') {
    let fs = fullscreen();
    fullscreen(!fs); // Toggle fullscreen mode
    resizeCanvas(windowWidth, windowHeight); // Resize canvas to new dimensions
  }
}
