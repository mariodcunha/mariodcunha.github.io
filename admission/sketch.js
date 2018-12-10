let pos;
var diameter = 50;
let speed = 0.99;
let colorRight;
let colorMiddle;
let colorLeft;
let vol;
let soundx;

var closedImage, openImage;
var xll, xhl, yll, yhl;
var trigger=0, sound=0;

function preload() 
{

  openSound = loadSound('openDoor.mp3');
  closedSound = loadSound('closeDoor.mp3');
  closedImage = loadImage("closed.jpg");
  openImage = loadImage("open.jpg");

}

function setup() 
{

  createCanvas(window.innerWidth, window.innerHeight);
  pos = createVector(mouseX, mouseY);

  console.log(window.innerHeight);

}



function draw() 
{

  background(51);

  if(trigger==0)
    image(closedImage, window.innerWidth/10, 0, window.innerWidth-window.innerWidth/5, window.innerHeight);
  else
    image(openImage, window.innerWidth/10, 0, window.innerWidth-window.innerWidth/5, window.innerHeight);

  xll = 0.62 * window.innerWidth;
  xhl = 0.66 * window.innerWidth;

  yll = 0.43 * window.innerHeight;
  yhl = 0.57 * window.innerHeight;

  
  fill(150);
  textSize(10);
  // textFont('Georgia');
  // text('Georgia', 12, 30);
  text('Font: Ultimate Serial Heavy', window.innerWidth/30, window.innerHeight-window.innerHeight/20);
}


function mouseClicked() 
{
  if(mouseX < xhl && mouseX > xll && mouseY > yll && mouseY < yhl)
  {
      if(trigger==0)
      {
          trigger=1;
          openSound.play();
      }
      else
      {
        trigger=0;
        closedSound.play();
      }
  }

  draw();
}



