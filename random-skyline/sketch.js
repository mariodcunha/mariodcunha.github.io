
//Mario Dcunha
//Inspired by New York City


var start=0, x=0, y=800, i=0;
var tileSizeX = 100, tileSizeY = 100;
var gap = 1, space = 1, colour = 0, winColour = 0;

var dir = [-1, 1];

var direction = 1;

var triangleX = []; 
var triangleY = [];
var array = [];

var r, g, b;



function setup() 
{
    createCanvas(windowWidth, windowHeight);
    // noLoop();
    noStroke();
    
}


function draw() 
{
	tileSizeX = Math.floor(random(100))+50;
	tileSizeY = Math.floor(random(50))+50;

	for(y=windowHeight; y > random(500); y = y-tileSizeY)
	{
		drawTile(x, y, tileSizeX, tileSizeY);
	}
	drawRoof(x, y+(tileSizeY/2), tileSizeX, tileSizeY/2);

	space = tileSizeX + dir[Math.floor(random(2))] * (Math.floor(random(20))+1);
	x = x + space;
	colour = Math.floor(random(250));

	if(colour < 130)
		winColour = Math.floor(random(131,255));
	else
		winColour = Math.floor(random(131));
	

}

function drawTile(x, y, w, h)
{
	
	fill(random(2), colour);
	rect(x, y, w, h);	

	fill(winColour);
	rect(x+(w/8), 			y+(h/8),	 	w/4, h/4);
	rect(x+((w*5)/8),		y+(h/8),		w/4, h/4);
	rect(x+(w/8),			y+((h*5)/8),	w/4, h/4);
	rect(x+((w*5)/8),		y+((h*5)/8),	w/4, h/4);
}

function drawRoof(x, y, w, h)
{
	fill(random(2), colour);
	rect(x, y, w, h);

	if(Math.floor(random(2)))
		triangle(x, y, x+w, y, x+(w/2), y-h);
}


function mouseClicked()
{
	background(Math.floor(random(250)+50));
	colour = Math.floor(random(255));
	winColour = Math.floor(random(255));

	start = 1; i = 0; 
	x = 0; y = windowHeight;

	drawTile(x, y, tileSizeX, tileSizeY);
	console.log(colour + "  " + colour%50);
}


function keyTyped()
{
  mouseClicked();
}










