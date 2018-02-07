
//Mario Dcunha
//Inspired by Kazimir Malevich 


var rgb = [0, 255, 0, 0, 255, 0];

function setup() 
{
    createCanvas(windowWidth, windowHeight);
    // noLoop();

}

function draw() 
{
    background(255);

    var rows = height / 50;
    var cols = width / 50;


    for(i=0; i<rgb.length*2; i++)
    {
      
      fill(0);
      strokeWeight(random(4));
      
      //draw main Squares
      rgb = shuffle(rgb);
      fill(rgb[Math.floor(random(rgb.length))],rgb[Math.floor(random(rgb.length))],rgb[Math.floor(random(rgb.length))]);
      drawQuad(random(windowWidth)-10, random(windowHeight)-10, random(windowWidth)/4, random(windowHeight/3)+i);

      //draw lines
      if(i<rgb.length)
      {
        rgb = shuffle(rgb);
        fill(0,rgb[Math.floor(random(rgb.length))],rgb[Math.floor(random(rgb.length))]);
        drawQuad(random(windowWidth)+1, random(windowHeight)+1, random(10)+10, windowHeight*2);
      }
    }

    frameRate(1);

}


function drawQuad(x, y, w, h) 
{
    rect(x, y, w, h);
}