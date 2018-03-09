

//Mario Dcunha


var myImage, pixelate=9, minimum=4;

var myName = ['m','a','r','i','o'];
// var myName = ['M','A','R','I','O'];
var nameCounter = 0;

var randomColor, x1, y1;


function preload() 
{
    myImage = loadImage("images/mec.jpg"); 
}


function setup() 
{
    createCanvas(myImage.width, myImage.height);
    noStroke();   
}



function draw() 
{
    background(255);

    // var spacing = 500 / myImage.width;

    // for (var y=0; y < myImage.height; y=y+randomInt(pixelate)) 
    for (var y=0; y < myImage.height; y+=pixelate) 
    {
        for (var x=0; x < myImage.width; x=x+randomInt(pixelate-5,pixelate)) 
        {
            var thisColor = color(myImage.get(x, y));
            // var lighterColor = color(thisColor, 10);

            // var textShade = lightness(lighterColor) / 255 * 100;

            
            textSize(pixelate+RandomNoise(1,2));


            x1=x+(noise(x)*2);
            y1=y+(noise(y)*2)

            fill(thisColor,1);
            // rect(x1,y1,pixelate,pixelate);
            if(nameCounter >= 5)
            {
                nameCounter=0;
            }
            // fill(255);
            text(myName[nameCounter++], x1,y1);

            // rect(x, y, pixelate, pixelate);
        
        
        }
    }

    noSmooth();
    noLoop();
}



function randomInt(l, h) 
{
  return Math.floor(random(l, h));
}


function RandomNoise(argument)
{

  return noise(argument)*random(argument);
  // return noise(argument);
 
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



// function mouseWheel()
// {
//     pixelate += event.delta/2;

//     if(pixelate<0 || pixelate<minimum)
//         pixelate=minimum;
//     else if(pixelate>800)
//         pixelate=800;
//     else
//         pixelate += event.delta/2;

//   draw();

// }



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



