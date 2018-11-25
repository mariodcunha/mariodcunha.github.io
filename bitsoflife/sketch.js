let pos;
var diameter = 50;
let speed = 0.99;
let colorRight;
let colorMiddle;
let colorLeft;
let mic;
let vol;
let soundx;
let obstacles = [];
var Freezer1;

class Obstacle 
{
  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
  }

  move() {
    let velX = (noise(millis() * 0.001 + this.id * 500) - 0.5) * 10;
    let velY = (noise(millis() * 0.001 + this.id * 10000) - 0.5) * 10;

    this.x += velX;
    this.y += velY;
    this.d = 20;
  }

  show() {
    noStroke();
    fill(191, 117, 226);
    ellipse(this.x, this.y, this.d);
  }

  isInvisible() {
    if (this.x < 0 || this.x > windowWidth || this.y < 0 || this.y > windowHeight)
      return true;
  }

  resetPos() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
  }

  touch(x, y, d) {
    if (dist(this.x, this.y, x, y) < (this.d + d) / 2)
      return true;
  }
}



class Freezer
{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //this.id = id;
  }

  show() {
    noStroke();
    fill(191, 117, 255);
    rect(this.x, this.y, this.d*2);
  }

  isInvisible() {
    if (this.x < 0 || this.x > windowWidth || this.y < 0 || this.y > windowHeight)
      return true;
  }

  resetPos() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
  }

  touch(x, y, d) {
    if (dist(this.x, this.y, x, y) < (this.d + d) / 2)
      return true;
  }
}

function setup() {

  mouseX = windowWidth/2;
  mouseY = windowHeight/2;
  // put setup code here
  mic = new p5.AudioIn();
  mic.start();

  createCanvas(windowWidth, windowHeight);
  pos = createVector(mouseX, mouseY);
  noCursor();
  colorRight = color(222, 30, 30);
  colorLeft = color(126, 227, 212);
  colorMiddle = color(253, 228, 9);
  background(255);

  //obstacles
  for (let i = 0; i < 4; i++)
  {
    //let x = 10 + 30 * i;
    obstacles[i] = new Obstacle(random(0, windowWidth), random(0, windowHeight), i);
  }
  
  Freezer1 = new Freezer(random(0, windowWidth), random(0, windowHeight));


  main = loadImage("main.png");

  
}




let amt;

function draw() 
{

  amt = map(pos.x, 0, windowWidth, -1.0, 1.0, true);
  let bgColor;
  if (pos.x > windowWidth / 2) {
    bgColor = lerpColor(colorMiddle, colorRight, amt);

  } else {
    bgColor = lerpColor(colorMiddle, colorLeft, -amt);
  }

  bgColor.setAlpha(30);
  fill(bgColor);
  rect(0, 0, windowWidth, windowHeight);
  // background(bgColor, 10);

  let targetPos = createVector(mouseX, mouseY);
  pos.x = targetPos.x * (1 - speed) + pos.x * speed;
  pos.y = targetPos.y * (1 - speed) + pos.y * speed;




  //mic---
  vol = mic.getLevel();
  soundx = map(vol, 0, 1, 1, 100);

  fill(255);
  noStroke();
  // ellipse(pos.x, pos.y, diameter+soundx);
  image(main, pos.x, pos.y, 500,364);



  //freezer
    Freezer1.show();
    if (Freezer1.isInvisible())
      Freezer1.resetPos();

    if (Freezer1.touch(pos.x, pos.y, diameter)) 
    {
      diameter -= 1;
      // window.location.reload(false);
    }
  

}

function keyPressed() {
  //console.log("obj");
  if (key == " ") {
    pos.x = windowWidth / 2;
    pos.y = windowHeight / 2;
  }
}