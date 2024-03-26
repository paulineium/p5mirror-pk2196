let questions = [  "What's on your mind right now?",  "What are you feeling at the moment?",  "What do you aspire to achieve?",];
let quotes = [  "Believe you can and you're halfway there.",  "Don't watch the clock; do what it does. Keep going.",  "You are never too old to set another goal or to dream a new dream.",  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",  "Start where you are. Use what you have. Do what you can.",];

let userResponses = [];
let questionIndex = 0;
let backgroundImage;

function preload() {
  backgroundImage = loadImage("image.png");
}

function setup() {
  createCanvas(600, 400);
  textSize(20);
  textAlign(CENTER);

  background(backgroundImage);
  displayQuestion();
}

function draw() {
}

function keyPressed() {
  if (keyCode === ENTER) {
    let inputVal = document.getElementById("input").value;
    userResponses.push(inputVal);
    document.getElementById("input").value = "";

    if (questionIndex < questions.length - 1) {
      questionIndex++;
      clear(); // clear the previous question and input field
      background(backgroundImage); // redraw the background image
      displayQuestion(); // display the next question
    } else {
      let quote = quotes[floor(random(quotes.length))];
      console.log(`${quote}`);
      // 
      //
      noLoop();
    }
  }
}


function displayQuestion() {
  textFont("Arial");
  textSize(20);
  fill(255);
  stroke(0);
  strokeWeight(2);
  background(backgroundImage);
  text(questions[questionIndex], width/2, height/2.5);
  let input = createInput();
  input.style("display", "block");
  input.style("margin", "auto");
  input.style("text-align", "center");
  input.style("font-size", "20px");
  input.id("input");
  input.position((width - input.width) / 2, height/2);
}
