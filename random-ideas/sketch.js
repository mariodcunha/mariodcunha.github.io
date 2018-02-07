
//Mario Dcunha
//Random Ideas, literally

var W=1200, H=600, buffer=10;

var bulbs = [];	
var i=1;

function setup() 
{
  createCanvas(W,H);

  background(200);
  strokeWeight(1);

  bulbImage = loadImage("assets/lightbulb.png");

  bulbs.length = 0;

  face = createVideo('assets/face.mp4');
  face.hide();
face.loop();
}



function bulb() 
{
  this.x = random(W)+buffer;
  this.y = random(H)+buffer;
  
  this.width = random(90)+30;
  this.height = random(120)+30;

  this.speed = random(5)+0.5;

  this.move = function() 
  {
    this.y = this.y + this.speed;
  };

  
  this.display = function() 
  {
    image(bulbImage, this.x, this.y, this.width, this.height);

  };

}


function draw() 
{
	background(221, 214, 212);
	

	bulbs.push(new bulb());

	for (i=0; i<bulbs.length; i++)
	{
	    bulbs[i].move();
	    // tint(random(), 255, 231, 53);
	    bulbs[i].display();
	}

	// tint(0);
	image(face, W/2-250, H-300, 550, 300);

}









