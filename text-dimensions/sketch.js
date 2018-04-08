
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

var myFont;

function preload() 
{
  myFont = loadFont('fonts/NeueDisplay-Random.otf');
}

var Letter = function(x,y,a,d)
{
    //Position to start drawing the letter
    this.x = x;
    this.y = y;
    this.text = a;
    this.dir = d;

    //random color of the letter
    // this.triColorR = myRandom(255);
    // this.triColorG = myRandom(255);
    // this.triColorB = myRandom(255);
}



function setup() 
{
    createCanvas(windowWidth, windowHeight);
    // canvas.parent('container'); //within the html

    noStroke(); 
    noLoop();

    //letter blend color
    //random color theme for the letters
    colorMode(RGB);
    spectrumFrom = color(255, 80, 0, 50);
    spectrumTo = color(255, 0, 150, 10);

    textFont(myFont);
    createLetters();

}

function createLetters()
{
    colorMode(HSB);
    fromColor = lerpColor(spectrumFrom, spectrumTo, random(1));
    toColor = lerpColor(spectrumFrom, spectrumTo, random(1));

    // fromColor = color(randomInt(10,100), randomInt(10,100), randomInt(10,100), 200);
    // toColor = color(randomInt(110,255), randomInt(110,255), randomInt(110,255), 10);

    for(let i=0; i<letters.length; i++)
    {
        LetterArray[i] = new Letter(randomInt(((width/10)*(i)), ((width/10)*(i+1))), 
                                    randomInt((height/10),(height-(height/10))), letters[i], randomInt(-2,2));
        
    }
}

function draw() 
{
    colorMode(RGB);
    background(20);
    drawLetter(letters.length);
}


function drawLetter(lettercount)
{
    colorMode(RGB);
    background(20);


    for(var i=0; i<lettercount; i++)
    {
        //draw each letter's shaded blending
        //which is many letters behind single one, with decreasing size        

        for(let j=1, k=100; j<50; j++)
        {
            //letterSize can be scrolled, check mouseWheel()
            textSize(k+letterSize);

            //decreasing size for next alphabet
            k--;

            //blending the color shade
            myColor = lerpColor(fromColor, toColor, j/50);
            fill(myColor);

            //mouse motion should allow letter rotation in all directions of screen
            moveX = map(mouseX, 0, width, -2, 2);
            moveY = map(mouseY, 0, height, -2, 2);

            text(LetterArray[i].text, LetterArray[i].x+(j*(moveX)*LetterArray[i].dir), LetterArray[i].y+(j*(moveY)*LetterArray[i].dir));
        }

    }
}

function mouseMoved(event) 
{
    draw();

    // var eventChanges = event.movementX/2+event.movementY/2;
    // change = eventChanges/2;
    // md += eventChanges/2;
}


function mouseClicked()
{
    createLetters();
    draw();
}



function mouseWheel(event) 
{
    letterSize += event.delta*0.1;
    draw();
}


function keyPressed()
{
  
}


function randomInt(n)
{
  return random(0,n);
}

function randomInt(l,h)
{
  return random(l,h);
}


function myRandom(num)
{
    return Math.floor(random(num));
}


function RandomNoise(n)
{

  return noise(n)*randomInt(n);
 
}


