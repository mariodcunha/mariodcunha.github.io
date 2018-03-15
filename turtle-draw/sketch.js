
//Mario Dcunha

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


var myTurtle, turtleX, turtleY;

var change=10;

var mySide = 500, mode=0;

function setup() 
{
    createCanvas(window.innerWidth, window.innerHeight);
    myTurtle = new Turtle();
    background(50);
    mode=0;
    myTurtle.penUp();
}

function draw() 
{

    noFill();
    stroke(255);
    strokeWeight(change/2);
    myTurtle.penUp();

    if(mode==1)
        myTurtle.penDown();
    
    myTurtle.moveTo(mouseX,mouseY);    

}


function drawTriangle(turtle)
{
    for (var i = 0; i < 3; i++) 
    {
        myTurtle.moveForward(mySide);
        myTurtle.turnLeft(120);
    }
}

function drawCircle(turtle)
{
    for (var i = 0; i < 80; i++) 
    {
        myTurtle.moveForward(10);
        myTurtle.turnLeft(5);
        
        //dashed
        // if(i%2==0)
        //     turtle.penUp();
        // else
        //     turtle.penDown();

    }
}


function getTurtlePosition(turtle)
{

    turtleX = turtle.x;
    turtleY = turtle.y;
}




function randomInt(n) 
{
  return Math.floor(random(n));
}


function randomInt(l, h) 
{
  return Math.floor(random(l, h));
}


function RandomNoise(argument)
{

  return noise(argument)*randomInt(argument);
  // return noise(argument);
 
}

function RandomNoise(lowLimit, highLimit)
{

  return noise(lowLimit,highLimit)*random(lowLimit,highLimit);
 
}




function keyPressed()
{
    if(keyCode == ENTER || keyCode == RETURN)
  {
      save('myCanvas.jpg');
  }

    if(keyCode == LEFT_ARROW)
    {
      change--;
    }
    else if(keyCode == RIGHT_ARROW)
    {
      change++;
    }

  draw();

}




function mouseWheel(event)
{
    change += event.delta;
    draw();
}



function mouseClicked()
{
    if(mode == 0)
    {
      mode=1;
      myTurtle.penDown();
    }
    else if(mode == 1)
    {
        mode=0;
        myTurtle.penUp();
    }

}






















