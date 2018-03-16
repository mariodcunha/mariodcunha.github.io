
//Mario Dcunha

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


var myTurtle, turtleX, turtleY;

var mySide = 500, mode=0, change=1;




function setup() 
{
    createCanvas(window.innerWidth, window.innerHeight);
    myTurtle = new Turtle();
    
    noFill();
    background(255,0,0);
    up();
}

// var circleSize=1, circlePart=1, change=1;


function draw() 
{
    background(255,0,0);
    stroke(0); strokeWeight(12); up();
    // stroke(250); strokeWeight(9); up();

    myTurtle.moveTo(width/2+RandomNoise(change), height/2-100+RandomNoise(change));
    down();

    tpush();
    
    //small head
    for (var i = 0; i < 60; i++) 
    {
        if(i>17)
            down();
        else
            up();
        move(2); left(4.7);
    }

    //left faceline
    tpush(); 
        right(60);
        for (var i = 0; i < 20; i++) 
        {
            move(3); left(3);
        }
    tpop();


    up(); left(79); move(49); down();

    //right faceline
    tpush();
    right(45);
    for (var i = 0; i < 20; i++) 
    {
        move(3); right(3);
    }
    tpop();

    //body belly
    tpush();    
        up(); right(180); move(24); left(90); move(112); 
        getTurtlePosition(myTurtle);
        ellipse(turtleX,turtleY,120,150);
        // strokeWeight(5);
        // for(i=0;i<6;i++)
        //     ellipse(turtleX,turtleY,120-(i*20),150-(i*20));
        // strokeWeight(15);
    tpop();
    

    // fin
    tpush();
        left(50); move(30); left(70); move(10); move(24+(change/randomInt(1,4)));
    tpop();

    // R1
    tpush();
        up(); right(45); move(10); down();
        left(75); move(20); 
        right(20+(change/randomInt(1,4))); move(40); left(80); move(60); left(30); move(40); right(30); move(20);
    tpop();

    // R2
    tpush();
        up(); move(10); down(); right(75); move(10); down();
        left(75); move(20); 
        right(20+(change/randomInt(1,4))); move(40); left(80+(change/randomInt(1,4))); move(60); left(30); move(40); right(30); move(20);
    tpop();

    up(); right(55); move(30); down();
    // R3
    tpush();
        left(30+(change/randomInt(1,4))); move(20); right(20+(change/randomInt(5,9))); move(80); right(30); move(80); left(20+(change/randomInt(1,4))); move(30);
    tpop();

    // R4
    tpush();
        left(10+(change/randomInt(5,9))); move(20); right(20); move(80); right(30+(change/randomInt(1,4))); move(80); left(20); move(30);
    tpop();

    up(); right(125); move(87); down();

    // L3
    tpush();
        left(25+(change/randomInt(5,9))); move(20); left(20+(change/randomInt(5,9))); move(80); left(30); move(80); right(20+(change/randomInt(1,4))); move(30);
    tpop();

    // L4
    tpush();
        left(45+(change/randomInt(5,9))); move(20); left(20+(change/randomInt(1,9))); move(80); left(30); move(80); right(20+(change/randomInt(1,3))); move(30);
    tpop();

    up(); right(120); move(15); down();

    // L2
    tpush();
        left(115); move(20); 
        left(30+(change/randomInt(1,4))); move(40); right(80); move(60); right(30); move(40); left(30); move(20);
    tpop();

    up(); right(10); move(7); down();

    // L1
    tpush();
        left(105); 
        move(10)*randomInt(10); 
        left(20+(change/randomInt(1,4))); move(40); right(80); move(60); right(30); move(40); left(30); move(20);
    tpop();

    // other fin
    tpush();
        up(); move(10); down();
        left(90); move(30)+random(300); right(70); move(10)+random(300); move(24+(change/randomInt(1,4)));
    tpop();
    tpop();

    up();
    myTurtle.moveTo(window.innerWidth/2, window.innerHeight/2-100);
    
    noLoop();
    // setFrameRate(5);

}





function up()
{
    myTurtle.penUp();
}

function down()
{
    myTurtle.penDown();
}

function move(a)
{
    // myTurtle.moveForward(noise(a));
    myTurtle.moveForward(a);
}

function right(a) 
{
    myTurtle.turnRight(a);
}


function left(a) 
{
    myTurtle.turnLeft(a);
}




function tpush() 
{
    myTurtle.pushState();
}

function tpop() 
{
    myTurtle.popState();
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

function getTurtlePosition(turtle)
{
    turtleX = turtle.x;
    turtleY = turtle.y;
}


function mouseMoved(event)
{
    var eventChanges = (event.movementX+event.movementY)/2;

    change += eventChanges;
    change  = RandomNoise(change);
    draw();
}


// function drawCircle(angle,dir)
// {
//     // strokeWeight(randomInt(1,3));
//     // stroke(255,randomInt(10,255));

    
//     for (var i = 0; i < (72/circlePart); i++) 
//     {
//         myTurtle.moveForward(circleSize*angle);

//         if(dir=='l')
//             myTurtle.turnLeft(angle);
//         else if(dir=='r')
//             myTurtle.turnRight(angle);

//     }
// }



// function keyPressed()
// {
//     if(keyCode == ENTER || keyCode == RETURN)
//   {
//       save('myCanvas.jpg');
//   }

//     if(keyCode == LEFT_ARROW)
//     {
//       change--;
//     }
//     else if(keyCode == RIGHT_ARROW)
//     {
//       change++;
//     }
//     // if(pixelate<0 || pixelate<minimum)
//     //     pixelate=minimum;
//     // else if(pixelate>800)
//     //     pixelate=800;
//   // draw();

// }


// function mouseClicked()
// {
//     up(); 
//     myTurtle.moveTo(mouseX,mouseY);
    
//     down();
//     drawCircle();

// }














