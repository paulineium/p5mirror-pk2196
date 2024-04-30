let particles = [];
let numParticles = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
  
  // Fullscreen toggle button
  let fsButton = createButton('Toggle Fullscreen');
  fsButton.position(10, 10);
  fsButton.mousePressed(toggleFullscreen);
}

function draw() {
  setGradient(0, 0, width, height, color(200, 60, 60), color(280, 60, 100), "Y");
  
  particles.forEach(p => {
    p.update();
    p.edges();
    p.show();
  });
}

function toggleFullscreen() {
  let fs = fullscreen();
  fullscreen(!fs);
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 4;
    this.lifetime = 255;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.x > width - this.r || this.pos.x < this.r) {
      this.vel.x *= -1;
    }
    if (this.pos.y > height - this.r || this.pos.y < this.r) {
      this.vel.y *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifetime -= 2;
  }

  show() {
    noStroke();
    fill(255, this.lifetime);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === "Y") {  // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
