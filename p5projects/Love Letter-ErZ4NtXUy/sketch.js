var serial;
let currentPage = 1,
  numberOfPages = 2,
  mouseIsClicked = false,
  button;
let latestData = "waiting for data";
let submit;

var button2;
var dataString;
var player;

function setup() {
  createCanvas(500, 500);
  serial = new p5.SerialPort();
  tree = loadImage("assets/tree.png");

  textAlign(CENTER);
  textSize(30);
  noStroke();
  fill("#ff7fac");
  input = createInput();
  input1 = createInput();
  input2 = createInput();
  input3 = createInput();
  input4 = createInput();

  button = createButton("Send");

  button.position(222, 445);
  button.mousePressed(printButtonPressed);
  button.style("background-color", "#ff7fac");
  button.style("color", "white");
  button.style("border", "none");


  fontt = loadFont("assets/Italianno-Regular.ttf");

  //Arduino

 serial.list();
 serial.open('/dev/tty.usbmodem142201');

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);
}

function draw() {
  background("#ffdaeb");

  switch (currentPage) {
    case 1:
      drawPage(currentPage);
      button2 = "Start";
      input.hide();
      input1.hide();
      input2.hide();
      input3.hide();
      input4.hide();
      //button.hide();
      customButton(245, 370, 80);
      button.hide();
      break;

    case 2:
      drawPage(currentPage);
      break;
  }

  mouseIsClicked = false;
}

function customButton(x, y, r) {
  push();
  noStroke();
  fill("#ff7fac");
  ellipse(x, y, r);
  fill("white");
  textSize(19);
  text(button2, x, y + 5);
  pop();

  if (dist(mouseX, mouseY, x, y) < r / 2 && mouseIsClicked) {
    if (currentPage >= numberOfPages) {
      currentPage = 1;
    } else {
      currentPage++;
    }
  }
}

function drawPage(page) {
  switch (page) {
    case 1:
      push();
      image(tree, 0, 0);
      tree.resize(width * 1.01, height * 1.01);
      fill("#ff7fac");
      textFont(fontt, 45);
      text("Compose a love letter", width / 2, height * 0.35);
      pop();
      break;

    case 2:
      background("#ffe6f1");
      push();
      fill("#ff7fac");
      textSize(40);
      textFont(fontt);
      text("FIll in the gaps:", 240, 85);

      textSize(28);

      text("1. Your sweetheart's name", 240, 155);
      text("2. Time of day (eg. afternoon)", 240, 215);
      text("3. 3 adjectives", 240, 275);
      text("4. Body part", 240, 335);
      text("5. Your name", 240, 395);
      textSize(25);
      button.show();
      button.style("background-color", "#ff7fac");
      button.style("color", "white");

      input.position(170, 166);
      input.show();
      input1.position(170, 226);
      input1.show();
      input2.position(170, 286);
      input2.show();
      input3.position(170, 346);
      input3.show();
      input4.position(170, 406);
      input4.show();

      pop();
      break;
  }
}

function mouseClicked() {
  mouseIsClicked = true;
}

//Arduino

function serverConnected() {
  print("We are connected!");
}

// Got the list of ports
function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

// Connected to our serial device
function gotOpen() {
  print("Serial Port is open!");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

// Ut oh, here is an error, let's log it
function gotError(theerror) {
  print(theerror);
}

// There is data available to work with from the serial port
function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 console.log(currentString);
 latestData = currentString;
}

function printButtonPressed() {
  var player = new Obituary(
    input.value(),
    input1.value(),
    input2.value(),
    input3.value(),
    input4.value()
  );
  print(input.value());
  var ghost = player.generate_obituary();
  print(ghost);
  //serial.write(obit);
  serial.write(ghost);
  console.log(ghost);
}

class Obituary {
  constructor(q1, q2, q3, q4, q5) {
    this.q1 = q1;
    this.q2 = q2;
    this.q3 = q3;
    this.q4 = q4;
    this.q5 = q5;
  }
  generate_obituary() {
    let obit =
      "Dear " +
      this.q1 +
      ", \n I woke up this " +
      this.q2 +
      " and immediately felt ecstatic at the very thought of you. " +
      "I cannnot begin to name all the words that come to mind when thinking of your character: " +
      this.q3 +
      ". Indeed, these are all about you. Every time you hold my " +
      this.q4 +
      " I just can't help but long for the moment to last forever. Every second of the day I am dreaming of the next time I am lucky enough to witness your beautiful self. \n Always yours, " +
      this.q5;
    return obit;
  }
}
