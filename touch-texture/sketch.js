
//Mario Dcunha

var myColor, x, y;

var numberSquares=100;

var smallDistance=10, largeDistance=300;

var lrange=5, hrange=20;

var Squares= [];

var fromColor, toColor, chosenColor, colorMake=0;

var square=0, tri=0, circle=1, mode=0, e=0, grid=0, invi=0, disco=0, sparkle=0;

var something=0, focus=5;

var side = 40;

var indices = [];

var m, n, l, p, q;



function Square(x, y, side)
{
  this.x = x;
  this.y = y;
  this.side = side;
  
  // this.amtColor = amtColor;
  // this.angle = angle;

  // this.radius = this.diameter/2; 

  this.rangeXL = this.x;
  this.rangeXH = this.x + side;

  this.rangeYL = this.y;
  this.rangeYH = this.y + side;
}



function setup() 
{
  canvas = createCanvas(window.innerHeight+200, window.innerHeight);
  labelSetup();

  noStroke();

  createSquares();

  // angleMode(RADIANS);
  rectMode(CORNER);
}



function createSquares()
{
  var i=0, row=0, col=0; sy=50;


  for(row = 0; row < 10; row++)
  {
    for(col = 0, sx = randomInt(20,100); col < 10; col++, i++) 
    {
        Squares[i] = new Square(sx, sy, randomInt(20,50));

        sx = sx + randomInt(50,70);
    }
    sy = sy + randomInt(50,70);
  }

}



function draw() 
{
    // Squares[2].diameter += 1 + something;
    colorMode(RGB);
    background(50);

    rectMode(CORNER);
    
    drawSquares();
    // fromColor = color(255, 80, 0);
    // toColor = color(255, 0, 150);

    // noLoop();  
    // setFrameRate(frameRate);
}




function drawSquares()
{

    let nowX, nowY, nowSide;
    let j;

    for (i=0; i < Squares.length; i++) 
    {
      fill(255);
      drawShape(Squares[i].x, Squares[i].y, Squares[i].side);
    }


    for (i=0; i < Squares.length; i++) 
    {
      if(i==m && m>10 && m<90)
      {
        indices = [m, m-1, m+1,m-10,m+10];
      }
      else if(m<10 && m >0)
      {
        indices = [m, m-1, m+1,m+10];
      }
      else if(m<1)
      {
        indices = [m, m+1, m+10];
      }
      else if(m>90 && m<99)
      {
        indices = [m, m-10, m-1, m+1];
      }
      else if(m>=99)
      {
        indices = [m, m-1, m-10];
      }


      for(j=0; j < indices.length; j++)
        {
            nowX = Squares[indices[j]].x; nowY = Squares[indices[j]].y; nowSide = Squares[indices[j]].side / 4;

            fill(50);
            drawShape(nowX, nowY, Squares[indices[j]].side+2);

            if(invi==0)
            {
              if(colorMake==0)
              {
                fill(255,250);
                drawShape(nowX, nowY, nowSide*0.32*11);
              }
              else if(colorMake==1)
              {
                var redColor = map(mouseX, 0, window.innerHeight, 1,255);
                var greenColor = map(mouseY, 0, window.innerHeight, 1,255);
                var blueColor = map(mouseX*mouseY, 0, window.innerHeight, 1,255);
                fill(redColor, blueColor, greenColor);
                drawShape(nowX, nowY, nowSide*0.32*11);
              }
              else if(disco==1)
              {
                fill(random(100,255), random(100,255), random(100,255));
                drawShape(nowX, nowY, nowSide*0.32*11*10);
                // console.log(noise(2)*11);                
              }
              else if(sparkle==1)
              { 
                var tempColor = random(255);
                fill(tempColor, tempColor, tempColor);
                drawShape(nowX, nowY, nowSide*0.32*11*noise(1));
              }

            }
        }
    
    }

}



function mouseMoved(event) 
{
//   var posX, posY, posRadius, posColor, posRangeXL, posRrangeXH, posRangeYL, posRangeYH;

  console.log(mouseX);

  for (let i=0; i < Squares.length; i++) 
  {
    
    posX = Squares[i].x; 
    posY = Squares[i].y;

    Squares[i].rangeXL = posX;
    Squares[i].rangeXH = posX + side;

    Squares[i].rangeYL = posY;
    Squares[i].rangeYH = posY + side;

    posRangeXL = Squares[i].rangeXL;
    posRangeXH = Squares[i].rangeXH;

    posRangeYL = Squares[i].rangeYL;
    posRangeYH = Squares[i].rangeYH;

    if((mouseX >= posRangeXL && mouseX <= posRangeXH) && (mouseY >= posRangeYL && mouseY <= posRangeYH))
        m = i;   
  }

}









// function mouseWheel(event) 
// {
//   // let previous = numberSquares;

//   // // something += event.delta;
 
//   // if(Squares.length > 0)
//   // {
//   //   numberSquares += event.delta-1;
//   // }
//   // else if(Squares.length == 0 && event.delta < 0)
//   // { 
//   //   numberSquares = 0;
//   // }
//   // else if (numberSquares < 0)
//   // {
//   //   numberSquares = 0;
//   // }
//   // else
//   // {
//   //   numberSquares += event.delta-1;
//   // }

//   // if(numberSquares < previous)
//   // {
//   //     for (i=numberSquares; i < previous; i++) 
//   //     {
//   //        Squares.pop();
//   //     }       
//   // }
//   // else if(numberSquares > previous)
//   // {
//   //     createSquares(previous, numberSquares);
//   // }

//   draw();

// }






function keyPressed()
{
  if(key == " ")
  {
    if(mode==0)
      mode=1;
    else if(mode==1)
      mode=2;
    else if(mode==2)
      mode=3;
    else
      mode=0;
  }
   if(key == "I" || key == "i")
  {
      if(invi==0)
        invi = 1;
      else 
        invi = 0;
  }

   if(key == "t" || key == "T")
  {
      if(tri==0)
      {
        tri=1; circle=0; square=0;
      }
  }


   if(key == "s" || key == "S")
  {
      if(square==0)
      {
        tri=0; circle=0; square=1;
      }
  }

  if(key == "c" || key == "C")
  {
      if(circle==0)
      {
        tri=0; circle=1; square=0;
      }

  }

  if(key == "p" || key == "P")
  {
      if(colorMake==0)
      {
        colorMake=1;
      }
      else 
      {
        colorMake=0;
      }

  }

  if(key == "R" || key == "r")
  {
      if(disco==0)
      {
        disco=1;
      }
      else 
      {
        disco=0;
      }

  }
  draw();

}


function labelSetup() 
{

    canvas.parent('container');

     var outerControls = createDiv('');
    outerControls.id("outerControls");

    var controlLabel = createDiv('');
    controlLabel.html(
      "<b>CONTROL TOGGLES</b><br><br>"+
      "<b>[ T ]  : TRIANGLE</b>&nbsp;&nbsp;&nbsp;<br>"+
      "<b>[ S ]  : SQUARES</b>&nbsp;&nbsp;&nbsp;<br>"+
      "<b>[ C ]  : CIRCLES</b>&nbsp;&nbsp;&nbsp;<br>"+
      "<b>[ P ]  : PAINT</b>&nbsp;&nbsp;&nbsp;<br>"+
      "<b>[ I ]  : INVISIBLE</b>&nbsp;&nbsp;&nbsp;<br>");
      // "<b>[ R ]  : RANDOM</b>&nbsp;&nbsp;&nbsp;<br>"+
      // "<b>[ G ]  : TWINKLE</b>&nbsp;&nbsp;&nbsp;<br>");

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


function drawShape(x, y, d)
{
  let rx, ry, r;

  r = d/2;
  rx = x-r;
  ry = y-r;

  if(circle==1)
  {
    square=0; tri=0;
    ellipse(x, y, d, d);
  }
  else if(square==1)
  {
    circle=0; tri=0;
    rect(rx, ry, d, d);
  }
  else if(tri==1)
  {

    //working on rotate each triangle
    // var deg = mouseX; var rad = radians(deg);
    // push();
    // // translate(rx+r, ry+d);

    // let a = map(mouseX, 1, width, 1, 360);
    // // console.log(a);
    // // rotate(-a);

    // // circle=0; square=0;
    // // triangle(rx, ry+d, rx+r, ry, rx+d, ry+d);
    triangle(rx, ry+d, rx+r, ry, rx+d, ry+d);
    // pop();
  }

}





