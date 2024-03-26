var button; 
var dataString;
var url ='https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
var apiKey = '&api-key=WGQTtbn7lEgUAImPBFECslHURoY6Gk4L';

function setup() {
  createCanvas(900, 900);
  background(128, 206, 207);
  noStroke();
  fill(0);
  textSize(20);
  text("Type one word from a movie's name",230,150);
  textSize(15);
  input = createInput();
  button = createButton('search');
  button.position(370,230);
  input.position(320,200);
  button.mousePressed(returnData);
}

function returnData() {
  var search = input.value();
  dataString = url + search + apiKey;
  loadJSON(dataString, gotData); 
}

function gotData(data) {
  print(data.results[2].summary_short);
}