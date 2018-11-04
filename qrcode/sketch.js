
//Mario Dcunha

var myColor, x, y;

var numberSquares=100;

var smallDistance=10, largeDistance=300;

var lrange=5, hrange=20;

var Squares = [];

var fromColor, toColor, chosenColor;

var square=0, tri=0, circle=1, mode=0, e=0, grid=0;

var something=0;

var gridLimit = window.innerHeight;

var qrcodeColors = [0,255];

var divisor = 16;

var xPoints = [0];
var yPoints = [0];

var factor = (gridLimit / divisor)+0.1;
var globalSqSize = factor;

var count = 0; var newCount=0;



function Square(x, y, sqColor)
{
  this.x = x;
  this.y = y;
  this.sqColor = sqColor;
}



function setup() 
{
  canvas = createCanvas(window.innerHeight, window.innerHeight);
  labelSetup();
  noStroke();

  rectMode(CORNER);  
  createGrid();
}


function draw() 
{
    background(qrcodeColors[1]);
    drawSquares();

    // noLoop();  
}




function createGrid()
{

    for(let i=0; i<divisor-1; i++)
    {
      xPoints[i+1] = xPoints[i] + factor;
      yPoints[i+1] = yPoints[i] + factor;
    }

    createSquares();
}



function createSquares()
{
    for(let j=0; j<(divisor); j++)
    {
        for(let i=0; i<(divisor); i++, count++)
        {
          Squares[count] = new Square(xPoints[i], yPoints[j], qrcodeColors[randomInt(0,2)]);
        }
    }

}



function drawSquares()
{
  let i=0;

    for(let count=0; count<Squares.length; count++)
    {
      fill(Squares[count].sqColor);
      rect(Squares[count].x, Squares[count].y, factor+0.1, factor+0.1);
    }

}


function mouseClicked(event) 
{

  createGrid();
  draw();

}



function central(value)
{
  return (randomInt(100,value-100)+randomInt(100,value-100))/2;
}



function mouseWheel(event) 
{
    divisor += event.delta/1000;

    console.log(divisor);

    createGrid();
    draw();


    // if(newCount<Squares.length)
    // {
    //   let randomSquare = randomInt(0,Squares.length);
    //   if(Squares[randomSquare].color == 255)
    //   {
    //       Squares[randomSquare].color = 200;
    //       draw();
    //       // fill(Squares[randomSquare].sqColor);
    //       // rect(Squares[randomSquare].x, Squares[randomSquare].y, factor+0.1, factor+0.1);
    //   }
    //   else
    //   {
    //     newCount += event.delta;
    //   }

    // }
}


function keyPressed()
{

  if(keyCode == ENTER || keyCode == RETURN)
  {
      save('myCanvas.jpg');
  }

  draw();

}


function labelSetup() 
{
    canvas.parent('container');

     var outerControls = createDiv('');
    outerControls.id("outerControls");

    var controlLabel = createDiv('');
    // controlLabel.html(
    //   "<b>CONTROL TOGGLES</b><br><br>"+
    //   "<b>CLICK DOT</b>&nbsp;&nbsp;&nbsp;Release a Color<br>"+
    //   "<b>SPACEBAR</b>&nbsp;&nbsp;&nbsp;paint / shuffle / auto-color<br>"+
    //   "<b>[ A ]  : AUTO-COLOR</b>&nbsp;&nbsp;&nbsp;direct<br>"+
    //   "<b>[ E ]  : ERASER</b>&nbsp;&nbsp;&nbsp;on clicked color<br>"+
    //   "<b>[ T ]  : TRIANGLE</b>&nbsp;&nbsp;&nbsp;<br>"+
    //   "<b>[ S ]  : SQUARES</b>&nbsp;&nbsp;&nbsp;<br>"+
    //   "<b>[ D ]  : Squares</b>&nbsp;&nbsp;&nbsp;<br>"+
    //   "<b>SCROLL</b>&nbsp;&nbsp;to multiply Squares<br>"+
    //   "<b>ENTER</b>&nbsp;&nbsp;to download art<br><br><br>"+
    //   "<div id='download' onClick='downloadArt()'><b>Download Artwork</b></div><br>");
    controlLabel.parent('outerControls');
}


function randomInt(l, h) 
{
  return Math.floor(random(l, h));
}



function RandomNoise(lowLimit, highLimit)
{

  return noise(lowLimit/2,highLimit/2)*random(lowLimit/2,highLimit/2);
 
}




function downloadArt()
{
    save('myCanvas.jpg');
    console.log("asd");

}


