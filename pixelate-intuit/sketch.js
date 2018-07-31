

//Mario Dcunha


var myImage, pixelate=20, minimum=5;

function preload() 
{
    myImage = loadImage("images/moon.jpg"); 
}

function setup() 
{
    createCanvas(myImage.width, myImage.height);
    // noStroke();
    strokeWeight(1);
    stroke(0,0,0,100);
    // noCursor();

    
}

var randomColor;

function draw() 
{
    noCursor();
    // background(20);

    // strokeWeight(pixelate/30);

    // var spacing = 500 / myImage.width;

    for (var y=0; y < myImage.height; y+=pixelate) 
    {
        for (var x=0; x < myImage.width; x+=pixelate) 
        {
            var thisColor = color(myImage.get(x, y));

            thisColor = color(thisColor, noise(10,255));

            // var dot_size = lightness(thisColor) / 255 * 100;

            fill(thisColor);
            rect(x, y, pixelate, pixelate);
        
            
            // ellipse((x+10) * spacing + spacing * .5, (y+10) * spacing + spacing * .5, dot_size/10, dot_size/10);
            

            // var x1, x2, y1, y2;

            // // x1=x*spacing+spacing*.5;
            // x1=x;
            // x2=x1+pixelate;

            // // y1=y*spacing+spacing*.5;
            // y1=y;
            // y2=y1+pixelate;

            // stroke(thisColor);
            // line(x1,y1,x2,y2);
            // (x+10) * spacing + spacing * .5, (y+10) * spacing + spacing * .5, dot_size/10, dot_size/10);

            // fill(randomColor1);
            // ellipse(x * spacing + spacing * .5, y * spacing + spacing * .5, dot_size/10, dot_size/10);

            // rect(x*spacing+spacing, y*spacing+spacing, 200, 200);
        }
    }

    // noSmooth();
    noLoop();
    // image(myImage, window.innerWidth/2-(myImage.width/2), window.innerHeight/2-(myImage.height/2), myImage.width, myImage.height);
    // image(myImage, 0,0, myImage.width/2, myImage.height/2);
}



function randomInt(l, h) 
{
  return Math.floor(random(l, h));
}


function RandomNoise(argument)
{

  // return noise(argument)*random(argument);
  return noise(argument);
 
}

function RandomNoise(lowLimit, highLimit)
{

  return noise(lowLimit,highLimit)*random(lowLimit,highLimit);
 
}



function getQuick(testImage, x, y) 
{

    var i = (y * testImage.width + x) * 4;
    return [
        testImage.pixels[i],
        testImage.pixels[i+1],
        testImage.pixels[i+2],
        testImage.pixels[i+3],
    ];
}



function mouseWheel()
{
    pixelate += event.delta/10;

    if(pixelate<0 || pixelate<minimum)
        pixelate=minimum;
    else if(pixelate>800)
        pixelate=800;
    else
        pixelate += event.delta/10;

  draw();

}



function keyPressed()
{
    if(keyCode == ENTER || keyCode == RETURN)
  {
      save('myCanvas.jpg');
  }

    if(keyCode == LEFT_ARROW)
    {
      pixelate--;
    }
    else if(keyCode == RIGHT_ARROW)
    {
      pixelate++;
    }

    // pixelate += event.delta/10;

    if(pixelate<0 || pixelate<minimum)
        pixelate=minimum;
    else if(pixelate>800)
        pixelate=800;
    // else
    //     pixelate += event.delta/10;

  draw();

}
