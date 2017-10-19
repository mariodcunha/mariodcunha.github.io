
//Mario Dcunha
//p5 Quiz

var screen=800;

var circleX = screen/4, circleY=screen/4;
var squareX = screen/2, squareY=0;

var dir=1, dy3=1;
var r=50;

var x1,y1,x2,y2,x3,y3;
var dx1,dy1,dx2,dy2,dx3,dy3;

var x1limitUp, x1limitDown, y1limitUp, y1limitDown;
var x2limitUp, x2limitDown, y2limitUp, y2limitDown;
var x3limitUp, x3limitDown, y3limitUp, y3limitDown;

x1limitUp=0; x1limitDown=screen/8; x1=x1limitDown;
y1limitUp=screen-(screen/8); y1limitDown=screen; y1=y1limitUp;

x2limitUp=(screen/8*3); x2limitDown=screen/2; x2=x2limitUp;
y2limitUp=screen-(screen/8); y2limitDown=screen; y2=y2limitUp;

x3=screen/4;
y3limitUp=screen/2; y3limitDown=screen/4*3; y3=y3limitDown;


var circleLimit = screen/2;

var randomR,randomG,randomB;
var factor = 10, factorT=factor/5;



function setup() 
{
  createCanvas(screen,screen);
  randomColours();
}


function draw() 
{
	background(0);
	strokeWeight(0);

  	
	if(r<=circleLimit && r<=50)
	{
		dir = 1;
		randomColours();
	}
	if(r>=circleLimit)
	{
		dir = -1
	 	randomColours();
	}

	//x1 y1
	if(x1<=x1limitUp)
		dx1 = 1;
	if(x1>=x1limitDown)
		dx1 = -1;

	if(y1<=y1limitUp)
		dy1 = 1;
	if(y1>=y1limitDown)
		dy1 = -1;


	//x2 y2
	if(x2<=x2limitUp)
		dx2 = 1;
	if(x2>=x2limitDown)
		dx2 = -1;

	if(y2<=y2limitUp)
		dy2 = 1;
	if(y2>=y2limitDown)
		dy2 = -1;


	//x3 y3	
	if(y3<=y3limitUp)
		dy3 = 1;

	if(y3>=y3limitDown)
		dy3 = -1;


	r = r + (factor*dir);
	y3 = y3 + ((factorT+2)*dy3);
	
	x1 = x1 + (factorT*dx1);
	y1 = y1 + (factorT*dy1);

	x2 = x2 + (factorT*dx2);
	y2 = y2 + (factorT*dy2);

		
	ellipse(circleX, circleY,r,r);
	rect(squareX, squareY,r,r);

	triangle(x1, y1, x2, y2, x3, y3);

	console.log(dx1);

	// if(mouseIsPressed)
	// {
	// 	fill(randomR,randomG,randomB);
	// }
	// else
	// 	fill(255,0,0);
}


function randomColours()
{
	randomR = Math.floor(Math.random()*255);
	randomG = Math.floor(Math.random()*255);
	randomB = Math.floor(Math.random()*255);
	fill(randomR,randomG,randomB);
}



function triChange(point,limitUp,limitDown)
{
	var dirTri;

	if(point<=limitUp)
		dirTri = 1;

	if(point>=limitDown)
		dirTri = -1;

	//console.log(dirTri);
	return dirTri;
}






