let popcorns = []; 

function setup() {
  createCanvas(255);
  for (let i = 0; i < 50; i++) {
    popcorns.push(new Popcorn());
  }
}

function draw() {
  background(151, 21, 0);
  for (let i = 0; i < popcorns.length; i++) {
    popcorns[i].move();
    popcorns[i].display();
  }
}

class Popcorn {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 7;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
