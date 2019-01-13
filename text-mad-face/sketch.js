
//Dimensions 


var r=0, g=0, b=0, bgcolor=255;
var md=0, change, moveX, moveY;
var letterSize=50, dir=1;
var fromColor, toColor;

var LetterArray = [];
var letters = ['D','I','M','E','N','S','I','O','N','S'];


var myFont, colorFlip=0;
var W, H, F;

var opacity=0.5, blink=0;


function preload() 
{
  myFont = loadFont('fonts/Futura.otf');
}




function setup() 
{
    createCanvas(window.innerWidth, window.innerHeight);

    angleMode(DEGREES);
    textFont(myFont);

}





function draw() 
{

    colorFlip = randomInt(0,3);

    W = window.innerWidth;
    H = window.innerHeight;

    background(255);


    // blink = millis()%(randomInt(8,9));
    // blink =200;

    if(colorFlip==0) //red
        fill('rgba(255,0,0, '+opacity+')');
    else
        fill('rgba(0,0,255, '+opacity+')');


    //a
    textSize(W/6);
    text('a', 0.37*W+crazy(1), 0.18*W+crazy(1));

    //D
    push();
    textSize(W/4.7);
    if(blink > 1)
    {
        translate(0.49*W+crazy(1), 0.05*W+crazy(1));
        rotate(90);
        text('D', 0,0);
    }
    else
    {
        translate(0.49*W+crazy(1), 0.05*W+crazy(1));
        rotate(90);
        text('I', 0,0);
    }
    pop();

    //m
    textSize(W/6);
    text('m', 0.43*W+crazy(1), 0.30*W+crazy(1));




    if(colorFlip==0) //blue
        fill('rgba(0,0,255, '+opacity+')');
    else
        fill('rgba(255,0,0, '+opacity+')');
    
    //a
    textSize(W/6);
    text('a', 0.37*W+crazy(1), 0.18*W+crazy(1));

    //D
    push();
    textSize(W/4.7);
    if(blink > 1)
    {
        translate(0.49*W+crazy(1), 0.05*W+crazy(1));
        rotate(90);
        text('D', 0,0);
    }
    else
    {
        translate(0.49*W+crazy(1), 0.05*W+crazy(1));
        rotate(90);
        text('I', 0,0);
    }
    pop();

    //m
    textSize(W/6);
    text('m', 0.43*W+crazy(1), 0.30*W+crazy(1));


    frameRate(15);
    blink++;

}


function crazy(n)
{
    var l = -3, h = 3;

    // return (noise(l,h)+randomInt(l,h))*n;
    return randomInt(noise(l,h)+randomInt(l,h))*n;
    // return null;
}


function randomInt(n)
{

  return Math.floor(random(0,n));
}


function randomInt(l,h)
{
  return Math.floor(random(l,h));
}



function noiseLevel(l,h)
{

  return noise(l,h);
 
}




function mouseMoved(event) 
{
    // draw();

    // opacity = opacity + (-1)mouseX/(W*10);

    // if(opacity > 1)
    //     opacity = opacity - 0.001;
    // else if (opacity < 0)
    //     opacity = opacity + 0.001;
        

    // var eventChanges = event.movementX/2+event.movementY/2;
    // change = eventChanges/2;
    // md += eventChanges/2;
}


function mouseReleased()
{
    // createLetters();
    // draw();
    blink = 0;
    draw();
}


function mouseWheel()
{
    opacity = opacity + event.deltaY/1000;

}

