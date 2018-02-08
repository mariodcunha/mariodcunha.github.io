
var circles = [];

var bgColor = 255;

function setup()
{
	createCanvas(windowWidth, windowHeight);
}

function draw()
{
	background(bgColor);
	noStroke();
	circles.push(new circle());

	for(var i = circles.length-1; i >= 0; i--)
	{
		circles[i].update();
		circles[i].display();
		
		// if(circles[i].isDead())
		// 	circles.splice(i,1)
	}
	
}

var circle = function()
{
	this.pos = {x: mouseX, y: mouseY},
	this.speed = {x: random(-1,1), y: random(-1,5)},
	this.accel = {x:random(-0.1,0.1), y: 0.025},
	this.color = {r:random(0,255), g: random(0,255), b: random(0,255)},
	this.size = random(100)+10;

	this.update = function()
	{
		this.pos.x += this.speed.x;
		this.pos.y += this.speed.y;
		this.speed.x += this.accel.x;
		this.speed.y += this.accel.y;
	}

	this.display = function()
	{
		random(random(bgColor)+random(50));
		fill(random(255),random(255),random(255));
		ellipse(this.pos.x,this.pos.y,this.size,this.size);
	}

	this.isDead = function()
	{
		console.log(this.pos)
		return (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height)
	}

}


function mouseClicked()
{
  bgColor = random(255);
}

