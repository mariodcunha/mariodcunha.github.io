

//Mario Dcunha


var myImage, myImage1, myImage2, myImage3, myImage4, myImage5;
var pixelate=10, minimum=12;

function preload() 
{
    myImage1 = loadImage("images/book21.jpg"); 
    myImage2 = loadImage("images/book22.jpg"); 
    myImage3 = loadImage("images/book23.jpg"); 
    // myImage4 = loadImage("images/book19.jpg"); 
    // myImage5 = loadImage("images/book20.jpg"); 
}

function setup() 
{
    createCanvas(myImage1.width, myImage1.height);
    // noStroke();
    strokeWeight(0);
    // stroke(0,0,0,100);
    // noCursor();

    // console.log(0%3);

    
}

var noOfBooks=3, randomColor, firstColor, secondColor, thisColor, toggle=0;

function draw() 
{
    // background(0);

    noCursor();
    // background(20);

    // atom = pixelate / (noOfBooks-1);
    atom = pixelate - (pixelate/noOfBooks-1);
    // atom = pixelate;

    // strokeWeight(pixelate/30);

    // var spacing = 500 / myImage.width;

    for (var y=0; y < myImage1.height; y+=pixelate) 
    {
        for (var x=0; x < myImage1.width; x+=pixelate) 
        {

            // thisColor = color(myImage1.get(x, y));
            // thisColor = color(thisColor, noise(10,255));

            // console.log(randomInt(0,2));

            if(toggle%noOfBooks==0)
            {
                thisColor = color(myImage1.get(x, y));
                thisColor = color(thisColor, noise(10,255));
                fill(thisColor);
                if(randomInt(0,2)==0)
                    ellipse(x, y, atom, atom);
                else
                    ellipse(x, y, atom, atom);
            }

            else if(toggle%noOfBooks==1)
            {
                thisColor = color(myImage2.get(x, y));
                thisColor = color(thisColor, noise(10,255));
                fill(thisColor);
                if(randomInt(0,2)==0)
                    ellipse(x, y, atom, atom);
                else
                    ellipse(x, y, atom, atom);


            }
            else if(toggle%noOfBooks==2)
            {
                thisColor = color(myImage3.get(x, y));
                thisColor = color(thisColor, noise(10,255));
                fill(thisColor);
                if(randomInt(0,2)==0)
                    ellipse(x, y, atom, atom);
                else
                    ellipse(x, y, atom, atom);


            }
            toggle++;
        }
        toggle=toggle+2;
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



// function mouseWheel()
// {
//     pixelate += event.delta/10;

//     if(pixelate<0 || pixelate<minimum)
//         pixelate=minimum;
//     else if(pixelate>800)
//         pixelate=800;
//     else
//         pixelate += event.delta/10;

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
