function setup() {
  createCanvas(520, 520);
}

function draw() {
  background(207, 185, 151);
  
  //hair
  noStroke()
  fill(87, 65, 47);
  arc(260, 260, 300, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  
  //face 
  noStroke()
  fill(247, 221, 212);
  ellipse(260, 255, 210, 260);
  
  //bangs
  noStroke()
  fill(87, 65, 47);
  arc(270, 150, 250, 90, 0, PI + QUARTER_PI, CHORD);
  
  
  //brows
  fill(89, 68, 57);
  arc(213,225,50,14,3,.06);
  arc(310,225,50,14,3,.06);
  fill(213, 196, 161);
  line(30, 20, 85, 75);
  
  //eyes
  strokeWeight(1);
  fill(100, 148, 49);
  ellipse(210, 260, 28, 25);
  ellipse(310, 260, 28, 25);

  //eyeballs
  noStroke()
  fill(255);
  ellipse(207, 252, 8, 8);
  ellipse(306, 252, 8, 8);

  //nose
  fill(213, 166, 124)
  triangle(260, 270, 270, 300, 250, 300);
  
  //mouth
  fill(228, 131, 151);
  arc(260, 325, 55, 30, 0, PI);
  
  //piercing
  stroke(227, 227, 227);
  fill(115, 115, 115);
  arc(250, 295, 10, 15, .75, 5);
  
  
}