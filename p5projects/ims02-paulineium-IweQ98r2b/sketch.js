function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(30);

  // Create fullscreen toggle button
  let fsButton = createButton('Toggle Fullscreen');
  fsButton.position(20, 20);
  fsButton.mousePressed(toggleFullscreen);
}

function draw() {
  background(20, 20, 25, 25); // Slightly transparent

  // Moving shapes
  for (let i = 0; i < 5; i++) {
    drawMovingShape(i);
  }
}

let shapes = [
  { x: 100, y: 100, size: 60, xspeed: 2, yspeed: 3.5, color: [255, 204, 0] },
  { x: 200, y: 200, size: 80, xspeed: 3, yspeed: 2.5, color: [0, 204, 255] },
  { x: 300, y: 300, size: 50, xspeed: 2.5, yspeed: 3, color: [255, 0, 204] },
  { x: 400, y: 400, size: 70, xspeed: 3.5, yspeed: 2, color: [204, 255, 0] },
  { x: 500, y: 100, size: 90, xspeed: 2, yspeed: 2.5, color: [0, 255, 204] }
];

function drawMovingShape(index) {
  let shape = shapes[index];
  
  fill(shape.color);
  ellipse(shape.x, shape.y, shape.size, shape.size);
  
  // Move the shape
  shape.x += shape.xspeed;
  shape.y += shape.yspeed;
  
  // Check for canvas boundaries and reverse speed direction if needed
  if (shape.x > width - shape.size / 2 || shape.x < shape.size / 2) {
    shape.xspeed *= -1;
    shape.color = [random(255), random(255), random(255)]; // Change color on bounce
  }
  if (shape.y > height - shape.size / 2 || shape.y < shape.size / 2) {
    shape.yspeed *= -1;
    shape.color = [random(255), random(255), random(255)]; // Change color on bounce
  }
}

function toggleFullscreen() {
  let fs = fullscreen();
  fullscreen(!fs);
}
