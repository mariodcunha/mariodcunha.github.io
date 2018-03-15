
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

    background(50);

    noFill();
    stroke(255);
    strokeWeight(4);
    myTurtle.penUp();

    myTurtle.moveTo(innerWidth/2, innerHeight/2+100);
    myTurtle.turnTo(-90);
    drawBranch(100);

     if(keyIsDown(LEFT_ARROW))
    {
      change = change-0.1;
    }
    else if(keyIsDown(RIGHT_ARROW))
    {
      change = change+0.1;
    }
}


function drawBranch(length) 
{

    if (length < 10) 
    {
        return;
    }

    myTurtle.moveForward(300);

    myTurtle.penDown();
    myTurtle.pushState();
    myTurtle.turnLeft(change);
    drawBranch(length * 0.75);
    myTurtle.popState();
}



function keyPressed()
{
    if(keyCode == ENTER || keyCode == RETURN)
  {
      save('myCanvas.jpg');
  }
}



function mouseWheel(event)
{
    change += event.delta;
    draw();
}












