let circles = []; 
let r;
let g;
let b;
let a;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 50; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(r, g, b, a);
  
  r = random(255); 
  g = random(100,200); 
  b = random(100); 
  a = random(200,255); 
  
  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(5, 70);
    this.speed = 7;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    noStroke();
    fill(r, g, b, a);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}