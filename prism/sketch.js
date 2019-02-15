
//Dimensions 

var pos_x = window.innerWidth/2, pos_y=window.innerHeight/2;
var mx, my;

var r=0, g=0, b=0, bgcolor=255;
var equiv=50, diff=0, opacity=40, mode=1;
var md=0, change, moveX, moveY;
var letterSize=50, dir=1;
var fromColor, toColor;

var LetterArray = [];
// var letters = ['D','i','M','E','N','s','I','O','n','S'];
var letters = ['P','R','I','S','M'];
// var smallLetters = ['d','i','m','e','n','s','i','o','n','s'];

var oldWord, newWord;
var wl; //wordLength
oldWord="DIMENSIONS", newWord="DIMENSIONS";
var wordsArray = ["DiMENsIOnS"];
// var wordsArray2 = ["dimensions"];

var myFont, shadeOpacity=15;


$(document).ready(function()
{
    $('.dates').mouseover(function()
    {
        $('.dates').css("color","cyan");
        $('#dimensionsTitle').css("color","cyan");
    });

    $('#dimensionsTitle').mouseover(function()
    {
        $('.dates').css("color","cyan");
        $('#dimensionsTitle').css("color","cyan");
    });

    $('.dates').mouseout(function()
    {
        $('.dates').css("color","white");
        $('#dimensionsTitle').css("color","white");
    });

    $('#dimensionsTitle').mouseout(function()
    {
        $('.dates').css("color","white");
        $('#dimensionsTitle').css("color","white");
    });
        
});




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
    // noLoop();

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


    wl = letters.length;

    for(let i=0; i<wl; i++)
    {
        LetterArray[i] = new Letter(randomInt(((width/wl)*(i)), ((width/wl/1.1)*(i+1))), 
                                    randomInt((height/wl),(height-(height/wl))), letters[i], randomInt(-2,2)+noise(1));
        
    }
}

function draw() 
{
    colorMode(RGB);
    background('#00004a');
    drawLetters();
    drawShade();


}


function drawLetters()
{
    colorMode(RGB);

    for(var i=0; i<letters.length; i++)
    {
        //draw each letter's shaded blending
        //which is many letters behind single one, with decreasing size

        LetterArray[i].x += random(-3,3)*noise(6,6);
        LetterArray[i].y += random(-3,3)*noise(6,6);

        letterSize = width/(2*wl);

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

            text(LetterArray[i].text, LetterArray[i].x+(j*(moveX)*LetterArray[i].dir)+RandomNoise(1), LetterArray[i].y+(j*(moveY)*LetterArray[i].dir)+RandomNoise(1));
        }

    }
}



function drawShade()
{
    colorMode(RGB);

    for(var i=0; i<letters.length; i++)
    {
        //draw each letter's shaded blending
        //which is many letters behind single one, with decreasing size

        LetterArray[i].x += random(-3,3)*noise(6,6);
        LetterArray[i].y += random(-3,3)*noise(6,6);

        letterSize = width/(0.5*wl);
        
        for(let j=1; j<3; j++)
        {
            //letterSize can be scrolled, check mouseWheel()
            textSize(letterSize);

            //blending the color shade
            spectrumFrom = color(255, 80, 0, shadeOpacity);
            spectrumTo = color(255, 0, 150, shadeOpacity-10);

            myColor = lerpColor(fromColor, toColor, j/50);
            fill(myColor);

            //mouse motion should allow letter rotation in all directions of screen
            moveX = map(mouseX, 0, width, -2, 2);
            moveY = map(mouseY, 0, height, -2, 2);

            text(LetterArray[i].text, LetterArray[i].x+(j*(moveX)*LetterArray[i].dir)+RandomNoise(1), LetterArray[i].y+(j*(moveY)*LetterArray[i].dir)+RandomNoise(1));
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
  return Math.floor(random(0,n));
}

function randomInt(l,h)
{
  return Math.floor(random(l,h));
}


function RandomNoise(n)
{

  return noise(n)*randomInt(n);
 
}


