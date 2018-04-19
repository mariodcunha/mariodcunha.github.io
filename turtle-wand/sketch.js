
//Mario Dcunha

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


var myTurtle, turtleX, turtleY;

var change=10;

var mySide = 500, mode=0;

var bgColor=50, strokeColor=255;


function preload() 
{
  soundFormats('wav', 'mp3');
  
  ding = loadSound('ding.mp3');
}


function setup() 
{
    createCanvas(window.innerWidth, window.innerHeight);
    myTurtle = new Turtle();
    background(50);
    mode=0;
    myTurtle.penUp();

    // ding.play();
    // ding.amp(1.0);

}

function draw() 
{

    background(bgColor);

    noFill();
    stroke(strokeColor);
    strokeWeight(4);
    myTurtle.penUp();

    myTurtle.moveTo(innerWidth/2, innerHeight/2+100);
    myTurtle.turnTo(-90);
    drawBranch(100);

     if(keyIsDown(LEFT_ARROW))
    {
      change = change-0.1;
      console.log(change);
    }
    else if(keyIsDown(RIGHT_ARROW))
    {
      change = change+0.1;
      console.log(change);
    }

    if((change>44.9 && change<45.1) || (change>51.4 && change<51.5) || 
        (change>60.0 && change<60.2) || (change>71.8 && change<72.0) ||
        (change>89.8 && change<90.0) || (change>102.6 && change<102.90) ||
        (change>119.9 && change<120.0) || (change>134.81 && change<135.0) ||
        (change>143.8 && change<144.10) || (change>154.2 && change<154.3) ||
        (change>179.8 && change<180.0))
    {
        dingEffect();
    }
    else
    {        
        bgColor=50;
        strokeColor=255;
        ding.stop();
    }

}

function dingEffect()
{
    // ding.play();
    // ding.amp(1.0);
    bgColor=255;
    strokeColor=50;
    
}


function drawBranch(length) 
{

    if (length < 10) 
    {
        return;
    }

    myTurtle.moveForward(200);

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












