
//Mario Dcunha

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


var myTurtle, turtleX, turtleY;

var mySide = 500, mode=0;



var osc;

function setup() 
{
    createCanvas(window.innerWidth, window.innerHeight);
    myTurtle = new Turtle();
    background(50);
    mode=0;
    up();

    // myOscillator = new p5.Oscillator('sine');
    // myOscillator.amp(10); // set amplitude
    // myOscillator.freq(340); // set frequency

    // myOscillator.start();

    osc = new p5.Oscillator();
      osc.setType('sine');
      osc.freq(240);
      osc.amp(10);
      osc.start();

}



function draw() 
{

    noFill();
    stroke(255);
    strokeWeight(2);
    myTurtle.penUp();

    osc.amp(change); // set amplitude
    osc.freq(change*100); // set frequency


    // myTurtle.moveTo(width/2, height/2-100);
    getTurtlePosition(myTurtle);
    down();

    drawCircle();
    
    if(keyIsDown(LEFT_ARROW))
    {
        change = change + 2;
    }
    else if(keyIsDown(RIGHT_ARROW))
    {
        change = change - 2;
    }


    // noLoop();
}


function up()
{
    myTurtle.penUp();
}

function down()
{
    myTurtle.penDown();
}


var circleSize=2, circlePart=1, change=0.5;

function drawCircle()
{
    // strokeWeight(randomInt(1,3));
    // stroke(255,randomInt(10,255));
    for (var i = 0; i < (72/circlePart); i++) 
    {
        myTurtle.moveForward(circleSize);
        myTurtle.turnLeft(change);
        
        //dashed
        // if(i%2==0)
        //     turtle.penUp();
        // else
        //     turtle.penDown();

    }
}




function mouseWheel(event)
{
    change += event.delta;
    // draw();
    // console.log(change*2);
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
  // draw();

}






function mouseClicked()
{
    up(); 
    myTurtle.moveTo(mouseX,mouseY);
    
    down();
    drawCircle();

}



























