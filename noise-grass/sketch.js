// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var mouseMotion = 0;
var m=0;

function setup() 
{
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('container');

    ellipseMode(CENTER);
    fill(200, 50, 100);
    noStroke();
    // noLoop();

    var infoLabel = createP('Drag Mouse over Grass');
    var toggleLabel = createP('Toggle Here');
    // min_slider = createSlider(1, min1+5, min1);
    toggle = createRadio();
    toggle.option('Random        ');
    toggle.option('Noise');


    // minLabel.class('labels'); 
    infoLabel.parent('info');
    toggleLabel.parent('info');
    toggle.parent('info');
}

function draw() 
{
    background(255);
    let n;

    checkToggle();

    stroke(0, 0, 0, 50);

    for (let x = 15; x < width - 15; x += 1.5) 
    {

        let offsetX = 0;
        let offsetY = -100;

        // lean (mid frequency, static)

        n = RandomNoise(x * .1);
        offsetX += n * 20 - 5;

        // height (very high frequency becomes fully random due to aliasing)
        offsetY += RandomNoise(x * 100) * 400;

        // wind( low frequency, timed)
        n = RandomNoise(x * .01 + millis() * -.001);
        offsetX += n * 40;

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
  //   fill(245,216,19);
  // ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  // return false;

  // console.log("screen: "+event.movementX);

  
  if(event.movementX < 0)
  {
    mouseMotion = event.movementX - 20;
  }
  else
  {
    mouseMotion = event.movementX + 10;
  }

}


function RandomNoise(value)
{
    if(m==1)
    {
        return random(value);
    }
    else
    {
        return noise(value);
    }
    console.log("Spacebar. "+m);
}

function checkToggle()
{
    var string = toggle.value();

    if(string == "Noise" || string == null || string == "")
        m = 0;
    else
        m=1;

    console.log(toggle.value());
}




