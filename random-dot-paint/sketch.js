
//Mario Dcunha

var myColor, x, y;

var numberDots=100;

var smallDistance=10, largeDistance=300;

var lrange=5, hrange=20, myFrameRate=30;

var Dots= [], mode=0, e=0;

var fromColor, toColor, chosenColor;

function Dot(x, y, diameter, amtColor)
{
  this.x = x;
  this.y = y;
  this.diameter = diameter;
  this.amtColor = amtColor;
}



function setup() 
{
  canvas = createCanvas(window.innerHeight, window.innerHeight);
  labelSetup();

  noStroke();
  ellipseMode(CENTER);    

  createDots(0,100);

}


function draw() 
{
    // noCursor();
    colorMode(RGB);

    if(mode%2 == 0) //even mode
      background(50);

    fromColor = color(255, 80, 0);
    toColor = color(255, 0, 150);

    colorMode(HSB);  
    for (var i=0; i < Dots.length; i++) 
    {
        myColor = lerpColor(fromColor, toColor, Dots[i].amtColor);

        if((Dots[i].amtColor == chosenColor) && mode != 2)
        {
          Dots[i].x += RandomNoise(-50,50);//+mouseX;
          Dots[i].y += RandomNoise(-50,50); //+mouseY;

          if(e==1)
          {
            colorMode(RGB); 
            fill(50);
            ellipse(Dots[i].x, Dots[i].y, Dots[i].diameter, Dots[i].diameter);
          }
          else
          {
            colorMode(HSB); 
            fill(myColor);
            ellipse(Dots[i].x, Dots[i].y, Dots[i].diameter, Dots[i].diameter);
 
          }

        }
        else if(mode==2 || mode==3)
        {
          Dots[i].x += RandomNoise(-50,50);//+mouseX;
          Dots[i].y += RandomNoise(-50,50); //+mouseY;
          fill(myColor);
          ellipse(Dots[i].x, Dots[i].y, Dots[i].diameter, Dots[i].diameter);
        }
        // else if((Dots[i].amtColor == chosenColor) && mode==2 && e==1)
        // {
        //   Dots[i].x += RandomNoise(-50,50);//+mouseX;
        //   Dots[i].y += RandomNoise(-50,50); //+mouseY;
        //   colorMode(RGB);
        //   fill(50);
        //   ellipse(Dots[i].x, Dots[i].y, Dots[i].diameter, Dots[i].diameter);
        // }
        else
        {
          fill(myColor);
          ellipse(Dots[i].x+RandomNoise(5), Dots[i].y+RandomNoise(5), Dots[i].diameter, Dots[i].diameter);
        }
        
    }

    // noLoop();  
    // setFrameRate(frameRate);
}



function central(value)
{
  return (randomInt(100,value-100)+randomInt(100,value-100))/2;
}



function mouseWheel(event) 
{

  let previous = numberDots;
 
  if(Dots.length > 0)
  {
    numberDots += event.delta-1;
  }
  else if(Dots.length == 0 && event.delta < 0)
  { 
    numberDots = 0;
  }
  else if (numberDots < 0)
  {
    numberDots = 0;
  }
  else
  {
    numberDots += event.delta-1;
  }

  if(numberDots < previous)
  {
      for (i=numberDots; i < previous; i++) 
      {
         Dots.pop();
      }       
  }
  else if(numberDots > previous)
  {
      createDots(previous, numberDots);
  }

    draw();

}



function createDots(l, h)
{
    var i=0;
   for (i = l; i < h; i++) 
  {
      diameter = randomInt(lrange,hrange);
      
      var amtColor = map(diameter, lrange,hrange,0,1);
      
      smallDistance = map(amtColor, 0, 1, (largeDistance-50), largeDistance);
      largeDistance = map(amtColor, 0, 1, largeDistance, 10);

      x = central(width) + randomInt(smallDistance,largeDistance) + RandomNoise(0,5);
      y = central(height) + randomInt(smallDistance,largeDistance) + RandomNoise(0,5);;

      Dots[i] = new Dot(x, y, diameter, amtColor);
  }

}

function mouseClicked(event) 
{

  console.log(mode);


  var posX, posY, posDiameter, posColor, rangeX, rangeY;

  for (let i=0; i < Dots.length; i++) 
  {
    
    posX = Dots[i].x; posY = Dots[i].y;
    
    posDiameter = Dots[i].diameter; 
    posColor = Dots[i].amtColor;

    rangeXL = posX - (posDiameter);
    rangeXH = posX + (posDiameter); 

    rangeYL = posY - (posDiameter);
    rangeYH = posY + (posDiameter); 

    if((mouseX > rangeXL && mouseX < rangeXH) || (mouseY < rangeXH && mouseY > rangeXL))
    {
      chosenColor = posColor;
      // console.log("color: "+posColor);

      colorMode(HSB);
      let tempColor = lerpColor(fromColor, toColor, posColor);
    }
  }

  draw();

}



// function mouseMoved(event) 
// {

//   console.log(mode);


//   var posX, posY, posDiameter, posColor, rangeX, rangeY;

//   for (let i=0; i < Dots.length; i++) 
//   {
    
//     posX = Dots[i].x; posY = Dots[i].y;
    
//     posDiameter = Dots[i].diameter; 
//     posColor = Dots[i].amtColor;

//     rangeXL = posX - (posDiameter);
//     rangeXH = posX + (posDiameter); 

//     rangeYL = posY - (posDiameter);
//     rangeYH = posY + (posDiameter); 

//     if((mouseX > rangeXL && mouseX < rangeXH) && (mouseY < rangeXH && mouseY > rangeXL))
//     {
//       chosenColor = posColor;
//       // console.log("color: "+posColor);

//       colorMode(HSB);
//       let tempColor = lerpColor(fromColor, toColor, posColor);
//     }
//   }

//   draw();

// }


function keyPressed()
{
  console.log(mode);

  if(key == " ")
  {
    if(mode==0)
      mode=1;
    else if(mode==1)
      mode=2;
    else if(mode==2)
      mode=3;
    else
      mode=0;
  }

   if(key == "a" || key == "A")
  {
      if(mode != 3)
        mode = 3;
      else if(mode==3)
        mode = 0;
  }

   if(key == "e" || key == "E")
  {
      if(e==0)
        e = 1;
      else 
        e = 0;
  }

}

function labelSetup() 
{
    canvas.parent('container');

    // toggleLabel = createDiv('');
    // toggleLabel.html("Noise");
    // toggleLabel.parent('info');

    var controlLabel = createDiv('');
    controlLabel.html("Click on Dots to release same color<br>Toggle spacebar to suspend / paint / shuffle / auto-color<br>Scroll to Increase/Decrease number of dots");
    controlLabel.parent('instruction');
}

function randomInt(l, h) 
{
  return Math.floor(random(l, h));
}



function RandomNoise(lowLimit, highLimit)
{

  return noise(lowLimit,highLimit)*random(lowLimit,highLimit);
 
}



// $('#instruction').mouseenter(
//   function()
//   {
    

//     //console.log('mouseenter');

//       if($(this).text()=='NEW')
//       {
//         $(this).text('OLD');
//         $(this).css('font-family','Times New Roman');
//       }
//       else if($(this).text()=='OLD')
//       {
//         $(this).text('NEW');
//         $(this).css('font-family','Lato');
//       }
//     })


// $('#toggle-word').mouseleave(
//   function()
//   {
//     //console.log('mouse leaveing');
//     if(click==false)
//     {
//       if($(this).text()=='NEW')
//         {
//           $(this).text('OLD');
//           $(this).css('font-family','Times New Roman');
//         }
//         else if($(this).text()=='OLD')
//         {
//           $(this).text('NEW');
//           $(this).css('font-family','Lato');
//         }
//     }
//     })







