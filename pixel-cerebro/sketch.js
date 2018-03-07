
//Mario Dcunha


var repeat=100;

var counter=10;


function setup() 
{
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
}

function draw() 
{
    background(0);

    
    if(thing<0 || thing<9)
        thing=10;
    else if(thing>100)
        thing=100;

    img = createImage(50, 50);
    img.loadPixels();

    colorMode(RGB);
    let colorA = color(0, 0, 0);
    let colorB = color(255, 0, 0);

    for (var y = img.height; y > 0; y--) //using 'j' to invert pixel
    {
        for (var x = img.width; x > 0; x--) 
        {
              var colorC = color(random((random(y)*x)),(y*random(x)/counter*2),(y/x)*repeat*noise(5));
              img.set(x, y, colorC);
              //console.log("sdf");
        }
    }

    img.updatePixels();
    

    noSmooth();
    image(img, 0, 0);
    // image(img, 0, 0);
    noLoop();

    for (var y = 1, j=0; y < window.innerHeight; j++) //using 'j' to invert pixel
    {
        for (var i = 0, x=1; x < window.innerWidth; i++) 
        {
          push();
          // translate(width / 2, 0);
            rotate(j*2);
            image(img, x, y, 100, 300);
          pop();

          x=x+thing;
        }
        y=y+thing;
    }

}


var thing=10;

function mouseWheel(event)
{
 
  repeat += event.delta*10;

    if(thing<0 || thing<9)
        thing=10;
    else if(thing>100)
        thing=100;
    else
        thing += event.delta/10;

console.log(thing);

  draw();

}









