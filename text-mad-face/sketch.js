
//Dimensions 

var pos_x = window.innerWidth/2, pos_y=window.innerHeight/2;
var mx, my;

var r=0, g=0, b=0, bgcolor=255;
var equiv=50, diff=0, opacity=40, mode=1;
var md=0, change, moveX, moveY;
var letterSize=50, dir=1;
var fromColor, toColor;

var LetterArray = [];
var letters = ['D','I','M','E','N','S','I','O','N','S'];

var oldWord, newWord;
var wl; //wordLength
oldWord="DIRECTIONS", newWord="DIMENSIONS";

var wordsArray = ["maD","maD","maD","maD","maD","maD","maD","maD"];

var myFont, colorFlip=0;
var W, H, F;

var opacity=0.5;


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


    blink = millis()%(randomInt(500,600));
    // blink =200;

    if(colorFlip==0) //red
        fill('rgba(255,0,0, '+opacity+')');
    else
        fill('rgba(0,0,255, '+opacity+')');

    textSize(W/6);
    text('a', (W/2-W/8)+crazy(1), (H/2-H/8)+crazy(1));

    

    push();
    translate(W/2.05+crazy(1), H/9.5+crazy(1));
    rotate(90);
    textSize(W/4.7);
    console.log(millis()%(randomInt(500,600)));
    if(blink > 150)
        text('D', 0,0);
    else
        text('I', 0,0);
    pop();

    textSize(W/6);
    text('m', W/2.33+crazy(1), H/1.6+crazy(1));


    if(colorFlip==0) //blue
        fill('rgba(0,0,255, '+opacity+')');
    else
        fill('rgba(255,0,0, '+opacity+')');
    
    textSize(W/6);
    text('a', (W/2-W/8)+crazy(3), (H/2-H/8)+crazy(3));


    push();
    translate(W/2.05+crazy(3), H/9.5+crazy(3));
    rotate(90);
    textSize(W/4.7);
    if(blink > 150)
        text('D', 0,0);
    else
        text('I', 0,0);
    pop();

    textSize(W/6);
    text('m', W/2.33+crazy(3), H/1.6+crazy(3));


    frameRate(25);

}


function crazy(n)
{
    var l = -3, h = 3;

    // return (noise(l,h)+randomInt(l,h))*n;
    return randomInt(noise(l,h)+randomInt(l,h))*n;
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


function mouseClicked()
{
    // createLetters();
    // draw();
}


function mouseWheel()
{
    opacity = opacity + event.deltaY/1000;

}

