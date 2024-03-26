//link to the original: https://editor.p5js.org/YuanHau/sketches/ByvYWs9yM

var angle; // Angle for rotation
var slider;

function setup() {
  createCanvas(500, 500);
  slider = createSlider(0, 2 * PI, PI / 4, 0.01);
  slider.position(10, height);
}

function draw() {
  background(220);
  // Update angle variable with slider value
  angle = slider.value();
  // Move origin to the center bottom of the canvas
  translate(width/2, height);
  // Call branch function with initial length of 100
  branch(100);
}

function branch(len) {
  // Draw a line from current position upwards
  line(0, 0, 0, -len);
  // Move to the end of the line
  translate(0, -len);
  // Check if length is greater than 10 to continue recursion
  if (len > 10) {
    // Save
    push();
    // Rotate to the right based on angle
    rotate(angle);
    // Recursively call branch function with shorter length
    branch(len * 0.75);
    // Go back to the previous state
    pop();
    // Save
    push();
    // Rotate to the left based on angle
    rotate(-angle);
    // Recursively call branch function with shorter length
    branch(len * 0.75);
    // Go back to the previous state
    pop();  
  }
}
