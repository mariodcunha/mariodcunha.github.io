
//Dimensions 

var pos_x = window.innerWidth/2, pos_y=window.innerHeight/2;
var mx, my, w, h;


var r=0, g=0, b=0, bgcolor=255;
var equiv=50, diff=0, opacity=40, mode=1;
var md=0, change, moveX, moveY;
var letterSize=50, dir=1;
var fromColor, toColor;
var noiseCount=10;
var theta=0;
var mouseClick=0, mouseSaveX, mouseSaveY;

var x1, y1, x2, y2, x3, y3;

var bgcolorArray = [20, 255];
var myFont, shadeOpacity=15;









function preload() 
{
//  myFont = loadFont('fonts/NeueDisplay-Random.otf');
  img = loadImage('images/texture.png');
}



function setup() 
{
    createCanvas(windowWidth, windowHeight, WEBGL);
    // canvas.parent('container'); //within the html

    w = windowWidth;
    h = windowHeight;
    
    noStroke(); 
    colorMode(RGB);

    bgcolor = bgcolorArray[randomInt(0,2)];
    bgcolor = 255;

    if(bgcolor==bgcolorArray[0])
    {
        spectrumFrom = color(255, 255, 255, 20);
        spectrumTo = color(50, 50, 50, 10);        
    }
    else
    {
        spectrumFrom = color(50, 50, 50, 50);
        spectrumTo = color(255, 255, 255, 10);
    }

    checkCssBG();

    //testing vertices
    x1 = randomInt(width/4,width/2);
    x2 = randomInt(width/4,width/2);
    x3 = randomInt(width/4,width/2);

    y1 = randomInt(height/8,height/2);
    y2 = randomInt(height/8,height/2);
    y3 = randomInt(height/8,height/2);

}


function checkCssBG()
{
    if(bgcolor==bgcolorArray[0])
        $('body').css('background','black');
    else
        $('body').css('background','white');
}


function createLetters()
{
    colorMode(HSB);
    fromColor = lerpColor(spectrumFrom, spectrumTo, random(1));
    toColor = lerpColor(spectrumFrom, spectrumTo, random(1));

    // fromColor = color(randomInt(10,100), randomInt(10,100), randomInt(10,100), 200);
    // toColor = color(randomInt(110,255), randomInt(110,255), randomInt(110,255), 10);

    //do not repeat oldWord
    oldWord = newWord;
    newWord = wordsArray[randomInt(wordsArray.length)];

    while(oldWord == newWord)
        newWord = wordsArray[randomInt(wordsArray.length)];

    letters = [];
    for(let i=0; i<newWord.length; i++)
        letters.push(newWord.slice(i,i+1));

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
    // background('#00004a');
    background(255);
    drawLetter(letters.length);
    drawShade();
    // console.log(shadeOpacity);

    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;

  // pointLight(255, 0, 0, locX, locX, 100);
  pointLight(255, 255, 0, locX, locX, 100);
    // noStroke();
    // sphere(25);


    // let dirX = (mouseX / width - 0.5) * 2;
  // let dirY = (mouseY / height - 0.5) * 2;
  // directionalLight(250, 250, 250, -dirX, -dirY, 0.25);

    fill(255,0,0);
    if(mouseClick==1)
        ellipse(mouseSaveX, mouseSaveY, 50);  

    // translate(440, 0, 0);

    //   texture(img);
    //   box(200,200,200);

      // texture(img);
      // fill(0);
      // shapeDraw(514, 112, 100, 415, 202, 100, 576, 250, 100);
    // push();
    //   rotateZ(theta * 0.1);
    //   rotateX(theta * 0.1);
    //   rotateY(theta * 0.1);
      // pop();

      theta += 0.05;

      // let dist=500;
      // triangleDraw(-100, -150, 0, -200, -25, 0, 0, 0, 0);
      // triangleDraw(-100+dist, -150, 0+dist/200, -200, -25, 0, 0, 0, 0);



}


function triangleDraw(x1, y1, z1, x2, y2, z2, x3, y3, z3)
{
    texture(img);
     beginShape();
        vertex(x1, y1, z1,0,0);
        vertex(x2, y2, z2,0,1);
        vertex(x3, y3, z3,1,0);
    endShape();
}


function shapeDraw(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)
{
    beginShape();
        vertex(-50, -50, 0, 0);
        vertex(50, -50, 1, 0);
        vertex(50, 50, 1, 1);
        vertex(-50, 50, 0, 1);
    endShape();
}



function drawLetter(lettercount)
{
    colorMode(RGB);
    // background('#00004a');


    for(var i=0; i<lettercount; i++)
    {
        //draw each letter's shaded blending
        //which is many letters behind single one, with decreasing size        
        letterSize = width/(2.5*wl);
        for(let j=1, k=100; j<50; j++)
        {
            //letterSize can be scrolled, check mouseWheel()
            textSize(k+letterSize);

            //decreasing size for next alphabet
            k--;

            //blending the color shade
            myColor = lerpColor(fromColor, toColor, j/50);
            fill(myColor);

            
            //Shaded blending either goes rough as per mouseXY direction or stays smooth
            // if(i%2==1)
            // {
            //     moveX = map(RandomNoise(mouseX), 0, width, -2, 2);
            //     moveY = map(RandomNoise(mouseY), 0, height, -2, 2);                    
            // }
            // else
            // {
                //mouse motion should allow letter rotation in all directions of screen
                moveX = map(mouseX, 0, width, -2, 2);
                moveY = map(mouseY, 0, height, -2, 2);                                    
            // }

            //draw each letter in repeat
            //text(str, x, y, [x2], [y2])
            // text(LetterArray[i].text, LetterArray[i].x+(j*(moveX)*LetterArray[i].dir), LetterArray[i].y+(j*(moveY)*LetterArray[i].dir));

            //triangle(x1, y1, x2, y2, x3, y3)
            moveX = -3;
            moveY = -3;

            // triangle(
            //     x1+(j*(moveX)*LetterArray[i].dir), y1+(j*(moveX)*LetterArray[i].dir), 
            //     x2+(j*(moveX)*LetterArray[i].dir), y2+(j*(moveY)*LetterArray[i].dir), 
            //     x3+(j*(moveX)*LetterArray[i].dir), y3+(j*(moveY)*LetterArray[i].dir));

            noiseCount++;
            // text(LetterArray[i].text, LetterArray[i].x+(j*(moveX)*LetterArray[i].dir), LetterArray[i].y+(j*(moveY)*LetterArray[i].dir));

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
            // textSize(letterSize);

            //blending the color shade
            // spectrumFrom = color(255, 255, 255, shadeOpacity-5);
            // spectrumTo = color(0, 0, 0, shadeOpacity-10);

            myColor = lerpColor(fromColor, toColor, j/50);
            fill(myColor);

            //mouse motion should allow letter rotation in all directions of screen
            moveX = map(mouseX, 0, width, -2, 2);
            moveY = map(mouseY, 0, height, -2, 2);

            //The Big Bold very transparent letters in the background
            // text(LetterArray[i].text, LetterArray[i].x+(j*(moveX)*LetterArray[i].dir)+RandomNoise(1), LetterArray[i].y+(j*(moveY)*LetterArray[i].dir)+RandomNoise(1));
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
    fill(255,0,0);
    mouseSaveX = mouseX;
    mouseSaveY = mouseY;

    console.log("saveX: "+mouseSaveX+" saveY: "+mouseSaveY);

    draw();


}



function mouseWheel(event) 
{
    letterSize += event.delta*0.1;
    draw();
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


