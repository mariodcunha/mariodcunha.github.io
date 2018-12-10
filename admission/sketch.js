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
var trigger=0;

function preload() 
{

  openSound = loadSound('champagnePop.mp3');
  // closedSound = loadSound('sound/champagnePop.mp3');
}

function setup() 
{

  createCanvas(window.innerWidth, window.innerHeight);
  pos = createVector(mouseX, mouseY);

  closedImage = loadImage("closed.jpg");
  openImage = loadImage("open.jpg");

  console.log(window.innerHeight);
  
}



function draw() 
{

  background(51);

  if(trigger==0)
    image(closedImage, window.innerWidth/10,0, window.innerWidth-window.innerWidth/5, window.innerHeight);
  else
    image(openImage, window.innerWidth/10,0, window.innerWidth-window.innerWidth/5, window.innerHeight);

  console.log(trigger);

  xll = 0.63 * window.innerWidth;
  xhl = 0.68 * window.innerWidth;

  yll = 0.42 * window.innerHeight;
  yhl = 0.58 * window.innerHeight;

  console.log(xll);
  console.log(mouseX);

  if(mouseX < xhl && mouseX > xll && mouseY > yll && mouseY < yhl)
  {
    trigger=1;
    // playSound();
  }
  else
  {
    trigger=0;
  }

}


function playSound()
{
    if(trigger==1)
    {
      // openSound.play(0, 1, 1, 0, 2);
      // openSound.stop(0);
    }

}




