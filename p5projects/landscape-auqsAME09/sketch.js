let serial;
let latestData = 0;

function setup() {
  serial = new p5.SerialPort();
  serial.open("/dev/tty.usbmodem14201");
  serial.on('data',gotData);
  
  createCanvas(400, 400);
}

function draw() {
  background(255,113,181);
  
 //sun
  noStroke();
  fill(255, 255, 0);
  ellipse(latestData, 55, 100, 100);
  //hills
  ellipseMode(CORNER);
  noStroke();
  fill(63,128,70);
  ellipse(-12,300,300,250);
  ellipseMode(CORNER);            
  fill(204,235,197);
  stroke(30,245,30);
  ellipse(200,300,250,250);
  //cloud 
  fill(255,255,2550);
  noStroke();
  ellipse(50,50,60,50);
  ellipse(80,40,60,50);
  ellipse(130,50,60,50);
  ellipse(70,70,60,50);
  ellipse(110,65,60,50);
}

function gotData(){
  let inString = serial.readLine();
  trim(inString);
  if(!inString) return;
  latestData = int(inString);
  print(latestData);
  //print(instring);
}
