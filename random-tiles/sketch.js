
//Mario Dcunha
//Inspired by Anni Albers

var start=0, x=0, y=0, i=0;
var tileSize = 100;
var gap = 0, space = 1, colour = 0;

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
	space = tileSize + gap;

	if(start==1 && y<windowHeight)
	{
		x = x + space * direction;
		drawTile(x, y, tileSize);

		if(x < windowWidth && direction > 0)
		{
			direction = 1;
				
		}
		else if(x >= windowWidth || x < 0)
		{
			direction = direction * -1;
			y = y + space;	
		}
		
		i++;		
	}

	 // frameRate(1);
	 console.log(i);

}

function drawTile(x, y, s)
{
	
	fill(random(2), r, g, b);
	rect(x, y, s, s);

	triangleX = [x, x+s, x+s]; 
	triangleY = [y, y+s, y+s]; 

	triangleX = shuffle(triangleX);
	triangleY = shuffle(triangleY);

	fill(r-90, g-90, b-90);
	triangle(triangleX[Math.floor(random(3))], triangleY[0], triangleX[1], triangleY[1], triangleX[2], triangleY[2]);
	// console.log(triangleArrayX[Math.floor(random(2))]);
}



function mouseClicked()
{
	start = 1;
	i = 0;
	background(255);
	x = 0;
	y = 0;
	direction = 1;

	r = Math.floor(random(255));
	g = Math.floor(random(255));
	b = Math.floor(random(255));

	drawTile(x, y, tileSize);
}



function keyTyped()
{

  if(key == " ")
  {
    gap++;
  }
  
  if(key == "b" || key == 'B')
  {
	gap--;
  }

}










