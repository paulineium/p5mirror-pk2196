let serial;

function setup() {
  
  serial = new p5.SerialPort();
  serial.open("/dev/tty.usbmodem14201");
  serial.on('data', gotData);
  
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function gotData() {
  let inString = serial.readLine();
  println(inString);
}

