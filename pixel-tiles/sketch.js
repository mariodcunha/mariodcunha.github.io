
//Mario Dcunha


//Basic Pixel Grid

// function setup() {
//     createCanvas(500, 500);
// }

// function draw() {
//     background(0);

//     img = createImage(20, 20);
//     img.loadPixels();

//     for (var y = 0; y < img.height; y++) 
//     {
//         for (var x = 0; x < img.width; x++) 
//         {
//             let tempColor = random(100,200);
//             var c = color(tempColor, tempColor, tempColor);
//             img.set(x, y, c);
//         }
//     }

//     img.updatePixels();

//     noSmooth();
//     image(img, 0, 0, width, height);
//     noLoop();
// }



//Gradient

// function setup() 
// {
//     createCanvas(500, 500);

// }

// function draw() 
// {
//     background(0);

//     img = createImage(10, 10);
//     img.loadPixels();

//     colorMode(RGB);
//     let colorA = color(255, 80, 0);
//     let colorB = color(255, 0, 150);
//     let colorC;


//     // let fromColor = color(255, 80, 0);
//     // let toColor = color(255, 0, 150);


//     // for (var y = img.height, j=0; y > 0; y--, j++) //using 'j' to invert pixel
//     for (var y = 0; y < img.height; y++) //using 'j' to invert pixel
//     {
//         for (var x = 0; x < img.width; x++) 
//         {
//             // var c = lerpColor(fromColor, toColor, x/10);
//             // Horizontal Black to Blue Gradient
//             // var c = color(0, 0, x * 25); 

//             // //Vertical Green to Black Gradient
//             // var c = color(0, y * 25, 0); 

//             // Horizontal White to Blue Gradient
//             if(y>=3 && x>=3 && y<=6 && x<=6)
//             {
//               colorMode(HSB);
//               var c = lerpColor(colorA, colorB, x/10);
//             }
//             else
//             {
//               colorMode(RGB);
//               c = color(random(255), random(255), random(255));
//               // var c = lerpColor(colorA, colorB, x/10);

//             }


//             img.set(x, y, c);
//         }
//     }

//     img.updatePixels();

//     noSmooth();
//     // image(img, 0, 0, width, height);
//     image(img, 0, 0);
//     noLoop();

// }


var mode=1, repeat=1;

var randomX, randomY, randomC;


//Random Access Example

function setup() 
{
    canvas = createCanvas(window.innerWidth, window.innerHeight);

    labelSetup();

}

function draw() 
{
    background(0);

    img = createImage(10, 10);
    img.loadPixels();

    if(mode==0)
    {
       randomX = random(10);
       randomY = random(10);
       randomC = color(randomInt(100,255), randomInt(100,255), randomInt(100,255));
        img.set(randomX, randomY, randomC);
        img.set(randomX-1, randomY, randomC);
        img.set(randomX+1, randomY, randomC);
        img.set(randomX, randomY-1, randomC);
        img.set(randomX, randomY+1, randomC);
    }
    else
    {
        for (var i = 0; i<50; i++) 
        {
          var c = color(255, 0, 0);

          if(mode==1)
          {
             randomX = randomInt(10);
             randomY = randomInt(10);
             randomC = color(randomInt(100,255), randomInt(100,255), randomInt(100,255));

            img.set(randomX, randomY, randomC);
            img.set(randomX-1, randomY, randomC);
            img.set(randomX+1, randomY, randomC);
            img.set(randomX, randomY-1, randomC);
            img.set(randomX, randomY+1, randomC);

          }
          else if(mode==2)
          {
            randomC = color(randomInt(100,255), randomInt(100,255), randomInt(100,255));

             for(var count=0; count < repeat; count++)
             {
                img.set(randomInt(100), randomInt(100), randomC);
             }
          }

        }
    }

    img.updatePixels();

    noLoop();
    noSmooth();
    // image(img, 0, 0);
    // image(img, 0, 0, width, height);

    for (var y = 0, j=0; y < window.innerHeight; j++) //using 'j' to invert pixel
    {
        for (var i = 0, x=0; x < window.innerWidth; i++) 
        {
            image(img, x, y, 100, 100);
            x=x+100;
        }
        y=y+100;
    }

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



function keyPressed()
{
  if(key == " ")
  {
        if(mode==0)
          mode=1;
        else if (mode==1)
          mode=2;
        else if (mode==2)
          mode=0;
  }

   draw();
}



function mouseClicked(event)
{
  // if(event.delta > 3 || event.delta < -3)
    draw();

}


function mouseWheel(event)
{
  // if(event.delta > 3 || event.delta < -3)
  //   draw();
  if(mode==2)
  {
    repeat += event.delta/10;
    draw();
  }

}


function labelSetup() 
{
    canvas.parent('container');

    // toggleLabel = createDiv('');
    // toggleLabel.html("Noise");
    // toggleLabel.parent('info');

    var controlLabel = createDiv('');
    controlLabel.html("<b>SPACEBAR</b> change mode<br><b>CLICK</b> new pattern<br><b>SCROLL</b> multiply");
    controlLabel.parent('instruction');
}






