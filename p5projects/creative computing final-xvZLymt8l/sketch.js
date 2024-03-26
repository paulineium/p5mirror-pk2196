//background
let stars = [];
let lines = [];
//buttons
let button;
let monthbutton;
let daybutton;
let monthcount = 0; 
let daycount = 0;
//zassign
let zassign = 0;
//gif 
var gif_loadImg;

function preload() {
gif_loadImg = loadImage("zodiac.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //buttons
  monthbutton = createButton('month');
  monthbutton.mouseClicked(addMonth);
  monthbutton.position(100, 200);
  daybutton = createButton('day');
  daybutton.mouseClicked(addDay);
  daybutton.position(500, 200);
  button = createButton('submit');
  button.position(300, 200);
  button.mousePressed(zodiacpick);
  button.style('font-size', '20px');
  button.style('background-color', color(102, 178, 225));
  monthbutton.style('background-color', color(102, 178, 225));
  daybutton.style('background-color', color(102, 178, 225));
  
  //background
  for (let i = 0; i < width * 0.22; i++) {
    stars.push(new Constellation());
  }
}

function draw() {
 //background
   for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle();
    stars[i].display();
   }
  
  image(gif_loadImg,0,0);
  textAlign(LEFT);
  fill(153, 204, 255); textSize(23); text(monthcount,117,170); 
  fill(153, 204, 255); textSize(23); text(daycount,510,170);
  textAlign(CENTER);
  if (zassign==0) {
text('input',745,200);text('your',745,250);text('birthday',745,300);}
}
console.log(zassign);

if(zassign == 1) {
  //capricorn
  let size = 10;
  stroke(205);
  line(200, 400, 250, 350);
  ellipse(200, 400, size);
  ellipse(250, 350, size);
  line(330, 320, 250, 350);
  ellipse(330, 320, size);
  line(350, 230, 330, 320);
  ellipse(350, 230, size);
  line(380, 400, 350, 230);
  ellipse(380, 400, size);
  line(360, 420, 380, 400);
  ellipse(360, 420, size);
  line(340, 410, 360, 420);
  ellipse(340, 410, size);
  line(300, 430, 340, 410);
  ellipse(300, 430, size);
  line(200, 400, 300, 430);
}
if(zassign == 2) {
  //aquarius
  let size = 10;
  stroke(205);
  line(200, 400, 250, 350);
  ellipse(200, 400, size);
  ellipse(250, 350, size);
  line(210, 300, 250, 350);
  ellipse(210, 300, size);
  line(300, 270, 210, 300);
  ellipse(300, 270, size);
  line(340, 300, 300, 270);
  ellipse(340, 300, size);
  line(320, 330, 340, 300);
  ellipse(320, 330, size);
  line(315, 380, 320, 330);
  ellipse(315, 380, size);
  line(370, 330, 340, 300);
  ellipse(370, 330, size);
  line(390, 370, 370, 330);
  ellipse(390, 370, size);
}
if(zassign == 3) {
  //pisces
  let size = 10;
  stroke(205);
  line(200, 500, 250, 530);
  ellipse(200, 500, size);
  ellipse(250, 530, size);
  line(270, 500, 250, 530);
  ellipse(270, 500, size);
  line(350, 510, 270, 500);
  ellipse(350, 510, size);
  line(380, 520, 350, 510);
  ellipse(380, 520, size);
  line(350, 430, 380, 520);
  ellipse(350, 430, size);
  line(340, 330, 350, 430);
  ellipse(340, 330, size);
  line(360, 300, 340, 330);
  ellipse(360, 300, size);
  line(330, 280, 360, 300);
  ellipse(330, 280, size);
  line(310, 310, 330, 280);
  ellipse(310, 310, size);
  line(340, 330, 310, 310);
}
if(zassign == 4) {
  //aries
  let size = 10;
  stroke(205);
  line(200, 300, 350, 305);
  ellipse(200, 300, size);
  ellipse(350, 305, size);
  line(390, 330, 350, 305);
  ellipse(390, 330, size);
  line(410, 360, 390, 330);
  ellipse(410, 360, size);
}
if(zassign == 5) {
  //taurus
  let size = 10;
  stroke(205);
  line(200, 200, 240, 305);
  ellipse(200, 200, size);
  ellipse(240, 305, size);
  line(280, 320, 240, 305);
  ellipse(280, 320, size);
  line(300, 290, 280, 320);
  ellipse(300, 290, size);
  line(280, 280, 300, 290);
  ellipse(280, 280, size); 
  line(290, 260, 280, 280);
  ellipse(290, 260, size); 
  line(280, 230, 290, 260);
  ellipse(280, 230, size); 
  line(310, 380, 280, 320);
  ellipse(310, 380, size);
  line(330, 410, 310, 380);
  ellipse(330, 410, size);
}
if(zassign == 6) {
  //gemini
  let size = 10;
  stroke(205);
  line(200, 200, 260, 210);
  ellipse(200, 200, size);
  ellipse(260, 210, size);
  line(290, 160, 260, 210);
  ellipse(290, 160, size);
  line(230, 250, 260, 210);
  ellipse(230, 250, size);
  line(200, 280, 230, 250);
  ellipse(200, 280, size);
  line(150, 250, 200, 280);
  ellipse(150, 250, size);
  line(180, 320, 200, 280);
  ellipse(180, 320, size);
  line(270, 320, 200, 280);
  ellipse(270, 320, size);
  line(270, 390, 270, 320);
  ellipse(270, 390, size);
  line(400, 410, 270, 390);
  ellipse(400, 410, size);
  line(320, 320, 270, 320);
  ellipse(320, 320, size);
  line(400, 340, 320, 320);
  ellipse(400, 340, size);
  line(370, 250, 260, 210);
  ellipse(370, 250, size);
  line(430, 280, 370, 250);
  ellipse(430, 280, size);
  line(430, 250, 370, 250);
  ellipse(430, 250, size);
}
if(zassign == 7) {
  //cancer
  let size = 10;
  stroke(205);
  line(200, 250, 300, 260);
  ellipse(200, 250, size);
  ellipse(300, 260, size);
  line(280, 300, 300, 260);
  ellipse(280, 300, size);
  line(250, 350, 280, 300);
  ellipse(250, 350, size);
  line(350, 220, 300, 260);
  ellipse(350, 220, size);
  line(420, 120, 350, 220);
  ellipse(420, 120, size);
}
if(zassign == 8) {
  //leo
  let size = 10;
  stroke(205);
  line(200, 450, 230, 390);
  ellipse(200, 450, size);
  ellipse(230, 390, size);
  line(320, 370, 230, 390);
  ellipse(320, 370, size);
  line(300, 350, 320, 370);
  ellipse(300, 350, size);
  line(340, 280, 300, 350);
  ellipse(340, 280, size);
  line(360, 300, 340, 280);
  ellipse(360, 300, size);
  line(350, 390, 320, 370);
  ellipse(350, 390, size);
  line(360, 450, 350, 390);
  ellipse(360, 450, size);
  line(200, 450, 360, 450);
}
if(zassign == 9) {
  //virgo
  let size = 10;
  stroke(205);
  line(200, 450, 240, 400);
  ellipse(200, 450, size);
  ellipse(240, 400, size);
  line(280, 390, 240, 400);
  ellipse(280, 390, size);
  line(300, 410, 280, 390);
  ellipse(300, 410, size);
  line(300, 460, 300, 410);
  ellipse(300, 460, size);
  line(340, 380, 300, 410);
  ellipse(340, 380, size);
  line(310, 350, 280, 390);
  ellipse(310, 350, size);
  line(340, 380, 310, 350);
  line(380, 385, 340, 380);
  ellipse(380, 385, size);
  line(390, 330, 380, 385);
  ellipse(390, 330, size);
  line(320, 320, 310, 350);
  ellipse(320, 320, size);
  line(340, 330, 320, 320);
  ellipse(340, 330, size);
  line(345, 310, 340, 330);
  ellipse(345, 310, size);
}
if(zassign == 10) {
  //libra
  let size = 10;
  stroke(205);
  line(200, 200, 230, 230);
  ellipse(200, 200, size);
  ellipse(230, 230, size);
  line(260, 230, 230, 230);
  ellipse(260, 230, size);
  line(300, 180, 260, 230);
  ellipse(300, 180, size);
  line(320, 350, 300, 180);
  ellipse(320, 350, size);
  line(260, 360, 320, 350);
  ellipse(260, 360, size);
  line(260, 360, 320, 350);
  ellipse(260, 360, size);
  line(260, 380, 260, 360);
  ellipse(260, 380, size);
  line(400, 250, 320, 350);
  ellipse(400, 250, size);
  line(400, 250, 300, 180);
}
if(zassign == 11) {
  //scorpio
  let size = 10;
  stroke(205);
  line(200, 200, 160, 250);
  ellipse(200, 200, size);
  ellipse(160, 250, size);
  line(210, 280, 160, 250);
  ellipse(210, 280, size);
  line(290, 240, 210, 280);
  ellipse(290, 240, size);
  line(260, 200, 290, 240);
  ellipse(260, 200, size);
  line(300, 170, 260, 200);
  ellipse(300, 170, size);
  line(340, 140, 300, 170);
  ellipse(340, 140, size);
  line(350, 100, 340, 140);
  ellipse(350, 100, size);
  line(350, 100, 340, 140);
  ellipse(350, 100, size);
  line(390, 100, 340, 140);
  ellipse(390, 100, size);
  line(420, 120, 340, 140);
  ellipse(420, 120, size);
}
if(zassign == 12) {
  //sagittarius
  let size = 10;
  stroke(205);
  line(150, 100, 210, 150);
  ellipse(150, 100, size);
  ellipse(210, 150, size);
  line(200, 190, 210, 150);
  ellipse(200, 190, size);
  line(160, 170, 200, 190);
  ellipse(160, 170, size);
  line(130, 200, 160, 170);
  ellipse(130, 200, size);
  line(150, 230, 130, 200);
  ellipse(150, 230, size);
  line(150, 270, 150, 230);
  ellipse(150, 270, size);
  line(180, 250, 150, 270);
  ellipse(180, 250, size);
  line(180, 290, 150, 270);
  ellipse(180, 290, size);
  line(230, 220, 200, 190);
  ellipse(230, 220, size);
  line(260, 180, 230, 220);
  ellipse(260, 180, size);
  line(270, 130, 260, 180);
  ellipse(270, 130, size);
  line(280, 230, 260, 180);
  ellipse(280, 230, size);
  line(260, 260, 280, 230);
  ellipse(260, 260, size);
  line(280, 290, 260, 260);
  ellipse(280, 290, size);
  line(320, 250, 280, 230);
  ellipse(320, 250, size);
  line(350, 250, 320, 250);
  ellipse(350, 250, size);
}

//whateva
function mousePressed() {
  zassign++;
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].starClick(mouseX, mouseY);
   stars[i].lineDraw();
  }
}

 function addMonth() {
  if (monthcount < 12) {monthcount++}
  else {monthcount = 0}
  fill(155,177,217); rect(50,30,50,50);
  fill(255); textSize(23); text(monthcount,50,30); 
}

function addDay() {
  if (daycount < 31) {daycount++}
  else {daycount = 0}
  fill(155,177,217); rect(350,30,50,50);
  fill(255); textSize(23); text(daycount,350,30); 
}

//the function that determines which zodiac sign should be the output based on birthday
function zodiacpick() {
cbs = 0;
if(monthcount==1) {if(daycount<=19) {zassign=1}else {zassign=2}}
if(monthcount==2) {if(daycount<=18) {zassign=2}else {zassign=3}}
if(monthcount==3) {if(daycount<=20) {zassign=3}else {zassign=4}} 
if(monthcount==4) {if(daycount<=19) {zassign=4}else {zassign=5}} 
if(monthcount==5) {if(daycount<=20) {zassign=5}else {zassign=6}} 
if(monthcount==6) {if(daycount<=20) {zassign=6}else {zassign=7}} 
if(monthcount==7) {if(daycount<=22) {zassign=7}else {zassign=8}} 
if(monthcount==8) {if(daycount<=22) {zassign=8}else {zassign=9}} 
if(monthcount==9) {if(daycount<=22) {zassign=9}else {zassign=10}} 
if(monthcount==10) {if(daycount<=22) {zassign=10}else {zassign=11}} 
if(monthcount==11) {if(daycount<=21) {zassign=11}else {zassign=12}} 
if(monthcount==12) {if(daycount<=21) {zassign=12}else {zassign=1}}
}