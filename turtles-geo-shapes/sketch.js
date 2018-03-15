
//Mario Dcunha

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


var myTurtle, turtleX, turtleY;

var change=20;

var mySide = 500;

function setup() 
{
    createCanvas(window.innerWidth, window.innerHeight);
    myTurtle = new Turtle();
}

function draw() 
{
    background(RandomNoise(255),RandomNoise(255),RandomNoise(255),RandomNoise(255));

    noFill();
    stroke(255, 255, 255, random(change));
    strokeWeight(RandomNoise(change/30));


    // move to starting position (without drawing)
    myTurtle.penUp();
    myTurtle.moveTo(width/2, height/2);

    // put the pen down to draw
    myTurtle.penDown();

    // draw the triangle
    for (var i = 0; i < change; i++) {
        myTurtle.moveForward(300);
        myTurtle.turnRight(change);
    }

    myTurtle.penDown();
    moveTo(turtleX,turtleY);    

    noLoop();
}


function drawTriangle(turtle)
{
    // stroke(random(255),random(255),random(255));
    for (var i = 0; i < 3; i++) 
    {
        myTurtle.moveForward(mySide);
        myTurtle.turnLeft(120);
    }
}


function drawPentagon(turtle)
{
    for (var i = 0; i < 5; i++) 
    {
        myTurtle.moveForward(mySide);
        myTurtle.turnRight(72);
    }
}


function drawHexagon(turtle)
{
    for (var i = 0; i < 6; i++) 
    {
        myTurtle.moveForward(mySide);
        myTurtle.turnRight(60);
    }
}


function drawOctagon(turtle)
{
    for (var i = 0; i < 8; i++) 
    {
        myTurtle.moveForward(mySide);
        myTurtle.turnRight(45);
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


function makeGrid(gridSize)
{
    getTurtlePosition(myTurtle);
     for (var y = turtleY; y < gridSize; y+=mySide*2) 
    {
        for (var x = turtleX; x < gridSize; x+=mySide*2)
        {
            // myTurtle.moveTo(noise(x)*random(2,200),y);
            myTurtle.moveTo(x,y);
            myTurtle.penDown();
            drawPentagon(myTurtle);   
            myTurtle.penUp();         
        }
    }
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






function mouseWheel(event)
{
    change += event.delta;
    draw();
}





function mouseMoved()
{
    myTurtle.turtleX = mouseX;
    myTurtle.turtleY = mouseY;

}





























