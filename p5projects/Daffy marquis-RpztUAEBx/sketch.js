let movieReview;

function preload () {
  movieReview = loadJSON("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=WGQTtbn7lEgUAImPBFECslHURoY6Gk4L");
}

function setup() {
  createCanvas(400, 400);
  print(movieReview.results[2].summary_short);
}


function draw() {
  background(220);
}