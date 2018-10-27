
//Mario Dcunha
//Inspired by Whitney Museum, Soli Lewitt

var start=0, x=0, y=0, i=0;
var tileSize = 80;
var gap = 0.1, space = 1, colour = 0;

var dir = [-1, 1];

var direction = 1;

var triangleX = []; 
var triangleY = [];
var array = [];

var tileColor=0, arcColor=0;

var r, g, b;



function setup() 
{
    createCanvas(windowWidth, windowHeight);
    // noLoop();
    noStroke();
    // rectMode(CENTER);
    mouseClicked();

}


function draw() 
{
	
	space = tileSize;

	for(i=0;i<windowHeight/(tileSize/3); i++)
	{	
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
	}


}



function drawTile(x, y, s)
{
	var arcSegments = [0, HALF_PI, PI, PI+HALF_PI];
	
	fill(255,192,203);
	rect(x, y, s+10, s+10);

	stroke(219,112,147);
	strokeWeight(4);
	arcStart = arcSegments[randomInt((arcSegments.length)/1)];

	arc(x, y, s*2,s*2, arcStart, arcStart+HALF_PI);

	noStroke();

	// triangleX = [x, x+s, x+s]; 
	// triangleY = [y, y+s, y+s]; 

	// triangleX = shuffle(triangleX);
	// triangleY = shuffle(triangleY);
	// fill(r-90, g-90, b-90);
	// triangle(triangleX[Math.floor(random(3))], triangleY[0], triangleX[1], triangleY[1], triangleX[2], triangleY[2]);
	// console.log(triangleArrayX[Math.floor(random(2))]);
}



function mouseClicked()
{
	background(255,192,203);
	tileColor = random(0,255);

	arcColor = tileColor - 255;
	if(arcColor < 0)
		arcColor = arcColor * -1;

	start = 1;
	i = 0;
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
  mouseClicked();

}



function randomInt(n)
{
  return Math.floor(random(0,n));
}





