
//Mario Dcunha

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


var myTurtle, turtleX, turtleY;

var change=10;

var mySide = 500, mode=0;

var ptouchIsDown;
var pmouseIsPressed;

function setup() 
{
    createCanvas(window.innerWidth, window.innerHeight);
    myTurtle = new Turtle();
    background(50);
    mode=0;
    myTurtle.penUp();

    ptouchIsDown = touchIsDown;
    pmouseIsPressed = mouseIsPressed;
}

function draw() 
{
    // background(RandomNoise(255),RandomNoise(255),RandomNoise(255),RandomNoise(255));

    noFill();
    // stroke(255, 255, 255, random(change));
    stroke(255);
    strokeWeight(change/2);
    myTurtle.penUp();


if (ptouchIsDown && touchIsDown){
    stroke(255, 0, 0);
    line(touchX, touchY, ptouchX, ptouchY);
  }
  if (pmouseIsPressed && mouseIsPressed){
    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

    if(mode==1)
        myTurtle.penDown();
    
    myTurtle.moveTo(mouseX,mouseY);    


    // noLoop();
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
    // if(pixelate<0 || pixelate<minimum)
    //     pixelate=minimum;
    // else if(pixelate>800)
    //     pixelate=800;
  draw();

}





function mouseDragged() 
{
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // return false;

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


function touchMoved() 
{
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // return false;

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

// function mouseMoved()
// {
//     myTurtle.turtleX = mouseX;
//     myTurtle.turtleY = mouseY;

// }





























