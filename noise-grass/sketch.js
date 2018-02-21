// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var mouseMotion = 0;

var n=1, change=1;

var toggleLabel, mode="Noise"; 

var canvas; //for convenience and portabliilty



function setup() 
{
    canvas = createCanvas(window.innerWidth, window.innerHeight);

    labelSetup();

    ellipseMode(CENTER);
    fill(200, 50, 100);
    noStroke();
    // noLoop();

    // var toggleLabel = createP('Toggle Here');
    // // min_slider = createSlider(1, min1+5, min1);
    // toggle = createRadio();
    // toggle.option('Random        ');
    // toggle.option('Noise');


    // // minLabel.class('labels'); 
    // infoLabel.parent('info');
    // toggleLabel.parent('info');
    // toggle.parent('info');
}

function draw() 
{
    background(255);
    let num;

    toggleLabel.html(mode);

    stroke(0, 0, 0, 50);

    for (let x = 15; x < width - 15; x += 1.5) 
    {

        let offsetX = 0;
        let offsetY = -100;

        // lean (mid frequency, static)

        num = RandomNoise(0, x * .1, change);
        offsetX += num * 20 - 5;

        // height (very high frequency becomes fully random due to aliasing)
        offsetY += RandomNoise(0, x * 100, change) * 400;

        // wind( low frequency, timed)
        num = RandomNoise(0, x * .01 + millis() * -.001, change);
        offsetX += num * 40;

        var centerX, centerY;

        // centerX = 
        // centerY = 100 + offsetY;

        // console.log("offsetX :"+offsetX);

        if((mouseX > (x + offsetX +10)) && (mouseX > (x + offsetX +10)))
        {
            // do nothing, just chill
        }
        else
        {
            mouseMotion = 0;
        }

        if(mouseMotion < 0)
        {
            // mouseMotion--;
        }


        stroke(58,205,7);
        line(x, 190, x + offsetX + mouseMotion, 100 + offsetY);


        //add some flower here
        if(x%8==0)
        {
            fill(245,216,19);
            noStroke();
            ellipse(x + offsetX, 100 + offsetY, 10, 10);

        }

    }

}



function mouseDragged(event) 
{
  
  if(event.movementX < 0)
  {
    mouseMotion = event.movementX - 20;
  }
  else
  {
    mouseMotion = event.movementX + 10;
  }

}




function labelSetup() 
{
    canvas.parent('container');

    //Please note: This if if you want to add HTML elemts on your p5 page.
    //Please add the CSS along with it to keep it clean.
    //Basic HTML and CSS given below.

    toggleLabel = createDiv('');
    toggleLabel.html("Noise");
    toggleLabel.parent('info');

    var controlLabel = createDiv('');
    controlLabel.html("Drag Mouse over the Grass.<br><br>Click to Toggle. Scroll to Control.");
    controlLabel.parent('instruction');

}



function RandomNoise(lowLimit, highLimit, factor)
{

    if(n==0) //Pure Random State
    {
        return random(lowLimit,highLimit)+(factor*5);
    }

    else if(n==1) //Pure Noise State
    {
        return noise(lowLimit,highLimit)+(factor/100);  
    }
    else if(n==2) //Noise x Random
    {
        return (noise(lowLimit,highLimit)*random(lowLimit,highLimit))+(factor*100);   

    }

}


function mouseClicked() 
{
    if(n==0)
    {
      n=1;
      mode = "Noise";
    }
    else if(n==1)
    {
      n=2;
      mode = "Noise x Random";
    }
    else if(n==2)
    {
      n=0;
      mode = "Random";
    }

    console.log(n);
}



function mouseWheel(event) 
{
    //Increments or Decrements of the attribute you want to control
    change+= event.delta; 
    console.log(event.delta);
}

