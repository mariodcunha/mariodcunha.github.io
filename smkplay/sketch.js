
//Mario Dcunha
// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2



//for video capture
var capture;
var tracker
var w, h;

var millisecs, timeToRefresh=15000, opacity=0.4;



var myColor, x, y;

var numberDots=100;

var smallDistance=10, largeDistance=300;

var lrange=5, hrange=20;

var Dots= [];

var fromColor, toColor, chosenColor;

var square=0, tri=0, circle=1, mode=0, e=0, grid=0;

var something=0;


function Dot(x, y, diameter, amtColor)
{
  this.x = x;
  this.y = y;
  this.diameter = diameter;
  this.amtColor = amtColor;
  // this.angle = angle;

  this.radius = this.diameter/2; 

  this.rangeXL = this.x - (this.radius);
  this.rangeXH = this.x + (this.radius);

  this.rangeYL = this.y - (this.radius);
  this.rangeYH = this.y + (this.radius);
}

function preload() 
{
    frame = loadImage("frame.png");
    artimage = loadImage("image1.png"); 
}



function setup() 
{

  w = window.innerWidth;
  h = window.innerHeight;

  noCursor();

  canvas = createCanvas(w,h);

  // labelSetup();

  // noStroke();
  // createDots(0,numberDots);

  angleMode(RADIANS);
  rectMode(CORNER);
  ellipseMode(CENTER);

  capture = createCapture({
  audio: false,
  video: {
      width: w,
      height: h
    }
  }, function() {
      // console.log('capture ready.')
  });
    
  // capture.elt.setAttribute('playsinline', '');
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  colorMode(HSB);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);

  

}


function draw() 
{

    millisecs = millis();
    // console.log(millisecs%2000);

    if(millisecs%timeToRefresh>1 && millisecs%timeToRefresh<100)
    {
      fill('rgba(20,20,20,'+opacity+')');
      rect(0,0,w,h);
      // tint(255, 127);
      // image(artimage, 0, 0, w, h);
      // fill(20);


      // rect(0, 0, w, h);
      // background(20);
    }



    // Dots[2].diameter += 1 + something;

    // image(artimage, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();

    noFill();
    stroke(255);

    //face lines
    // beginShape();
    // for (var i = 0; i < positions.length; i++) {
    //     vertex(positions[i][0], positions[i][1]);
    // }
    // endShape();

    noStroke();
    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        // fill(20);

        //dots on the face and all other parts except nose
        ellipse(positions[i][0], positions[i][1], 4, 4);
        // text(i, positions[i][0], positions[i][1]);
    }

    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        // uncomment the line below to show an estimate of amount "smiling"
        // rect(20, 20, smile * 3, 20);

        // uncomment for a surprise
        noStroke();
        fill(0, 255, 255);
        // fill('rgba(20,20,20,'+1+')');
        //nose
        ellipse(positions[62][0], positions[62][1], 40, 40);
    }






   // colorMode(RGB);

    // if(mode%2 == 0) //even mode
    //   background(50);

    // fromColor = color(255, 80, 0);
    // toColor = color(255, 0, 150);

    // colorMode(HSB);  


    // for (var i=0; i < Dots.length; i++) 
    // {
    //     myColor = lerpColor(fromColor, toColor, Dots[i].amtColor);

    //     if((Dots[i].amtColor == chosenColor) && mode != 2)
    //     {
    //       Dots[i].x += RandomNoise(-50,50);
    //       Dots[i].y += RandomNoise(-50,50);

    //       if(e==1)  //Eraser Mode
    //       {
    //         colorMode(HSB); 
    //         fill(19.6);

    //         drawShape(Dots[i].x, Dots[i].y, Dots[i].diameter);
    //       }
    //       else //Normal (No-eraser) Mode
    //       {
    //         colorMode(HSB); 
    //         fill(myColor);

    //         drawShape(Dots[i].x, Dots[i].y, Dots[i].diameter);

    //       }

    //     }
    //     else if(mode==2 || mode==3)
    //     {
    //       Dots[i].x += RandomNoise(-50,50);//+mouseX;
    //       Dots[i].y += RandomNoise(-50,50); //+mouseY;

    //       fill(myColor);
    //       drawShape(Dots[i].x, Dots[i].y, Dots[i].diameter);
    //     }

    //     else
    //     {
    //       fill(myColor);
    //       drawShape(Dots[i].x, Dots[i].y, Dots[i].diameter);
    //     }
        
    // }


    // noLoop();  
    // setFrameRate(frameRate);


    image(frame, 0, 0, w, h);

}





function central(value)
{
  return (randomInt(100,value-100)+randomInt(100,value-100))/2;
}



function mouseWheel(event) 
{

  let previous = numberDots;

  // something += event.delta;
 
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
  var posX, posY, posRadius, posColor, posRangeXL, posRrangeXH, posRangeYL, posRangeYH;

  for (let i=0; i < Dots.length; i++) 
  {
    
    posX = Dots[i].x; 
    posY = Dots[i].y;
    posColor = Dots[i].amtColor;
    posRadius = Dots[i].radius;

    Dots[i].rangeXL = posX - posRadius;
    Dots[i].rangeXH = posX + posRadius;

    Dots[i].rangeYL = posY - posRadius;
    Dots[i].rangeYH = posY + posRadius;

    posRangeXL = Dots[i].rangeXL;
    posRangeXH = Dots[i].rangeXH;

    posRangeYL = Dots[i].rangeYL;
    posRangeYH = Dots[i].rangeYH;

    if((mouseX >= posRangeXL && mouseX <= posRangeXH) && (mouseY >= posRangeYL && mouseY <= posRangeYH))
    {
      chosenColor = posColor;
    }
        // console.log("CLICKED!\n");
        // console.log("Element: "+i);
        // console.log(mouseX+" : "+mouseY);
        // console.log(Dots[i].x+", "+Dots[i].y);
        // console.log("Diameter: "+Dots[i].diameter);
        // console.log(Dots[i].rangeXL+"-"+Dots[i].rangeXH+" : "+Dots[i].rangeYL+"-"+Dots[i].rangeYH+"\n\n");      
  }

  draw();

}


function keyPressed()
{
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

   if(key == "t" || key == "T")
  {
      if(tri==0)
      {
        tri=1; circle=0; square=0;
      }
      else 
      {
        tri=0; circle=1; square=0;
      }
  }


   if(key == "s" || key == "S")
  {
      if(square==0)
      {
        tri=0; circle=0; square=1;
      }
      else 
      {
        tri=0; circle=1; square=0;
      }
  }

  if(key == "d" || key == "D")
  {
      if(circle==0)
      {
        tri=0; circle=1; square=0;
      }
      else 
      {
        tri=0; circle=1; square=0;
      }

  }

  if(key == "g" || key == "G")
  {
      if(grid==0)
      {
        grid=1;
      }
      else 
      {
        grid=0;
      }

  }

  if(keyCode == ENTER || keyCode == RETURN)
  {
      save('myCanvas.jpg');
  }

  draw();

}


function labelSetup() 
{
    canvas.parent('container');

     var outerControls = createDiv('');
    outerControls.id("outerControls");

    var controlLabel = createDiv('');
    controlLabel.html(
      "<b>CONTROL TOGGLES</b><br><br>"+
      "<b>CLICK DOT</b>&nbsp;&nbsp;&nbsp;Release a Color<br>"+
      "<b>SPACEBAR</b>&nbsp;&nbsp;&nbsp;paint / shuffle / auto-color<br>"+
      "<b>[ A ]  : AUTO-COLOR</b>&nbsp;&nbsp;&nbsp;direct<br>"+
      "<b>[ E ]  : ERASER</b>&nbsp;&nbsp;&nbsp;on clicked color<br>"+
      "<b>[ T ]  : TRIANGLE</b>&nbsp;&nbsp;&nbsp;<br>"+
      "<b>[ S ]  : SQUARES</b>&nbsp;&nbsp;&nbsp;<br>"+
      "<b>[ D ]  : DOTS</b>&nbsp;&nbsp;&nbsp;<br>"+
      "<b>SCROLL</b>&nbsp;&nbsp;to multiply dots<br>"+
      "<b>ENTER</b>&nbsp;&nbsp;to download art<br><br><br>"+
      "<div id='download' onClick='downloadArt()'><b>Download Artwork</b></div><br>");

    controlLabel.parent('outerControls');
}

function randomInt(l, h) 
{
  return Math.floor(random(l, h));
}



function RandomNoise(lowLimit, highLimit)
{

  return noise(lowLimit/2,highLimit/2)*random(lowLimit/2,highLimit/2);
 
}


function drawShape(x, y, d)
{
  let rx, ry, r;

  r = d/2;
  rx = x-r;
  ry = y-r;

  if(circle==1)
  {
    square=0; tri=0;
    ellipse(x, y, d, d);
  }
  else if(square==1)
  {
    circle=0; tri=0;
    rect(rx, ry, d, d);
  }
  else if(tri==1)
  {

    //working on rotate each triangle
    // var a = map(mouseX, 1, width, 1, 10);
    // push();
    //   rectMode(CENTER);
    //   angleMode(DEGREES);
    //   translate((rx+r), (ry+d));
    //   // translate((rx+rx+d)/2, (ry+d+ry+d)/2);
    //   var a = atan2(mouseX-(ry+d+ry+d)/4, mouseX-(rx+rx+d)/4);      
    //   rotate(a);
    //   triangle(rx, ry+d, rx+r, ry, rx+d, ry+d);
    //   //rotate(-a/10);
    //   // console.log(a);
    //   // triangle(rx, ry+d, rx+r, ry, rx+d, ry+d);
    // pop();

    triangle(rx, ry+d, rx+r, ry, rx+d, ry+d);
  }

}
// console.log("asd");

function downloadArt()
{
    save('myCanvas.jpg');
    console.log("asd");

}


