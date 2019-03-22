
// let bg;
// function setup() 
// {
//   pixelDensity(1);
//   createCanvas(100, 100);
//   stroke(255);
//   fill(0);

//   // create and draw the background image
//   bg = createGraphics(100, 100);
//   bg.background(200);
//   bg.ellipse(50, 50, 80, 80);
// }

// function draw() 
// {
//   let t = millis() / 1000;
//   // draw the background
//   if (bg) {
//     image(bg, frameCount % 100, 0);
//     image(bg, frameCount % 100 - 100, 0);
//   }
//   // draw the foreground
//   let p = p5.Vector.fromAngle(t, 35).add(50, 50);

//   let colorM = color(0,0,0);
//   colorM.setAlpha(3);

//   noStroke();
//   fill(colorM);
//   ellipse(p.x, p.y, 30);
// }


// function mouseClicked() {
//   // remove the background
//   if (bg) 
//   {
//     bg.remove();
//     bg = null;
//   }
// }




// //Mario Dcunha
// // https://kylemcdonald.github.io/cv-examples/
// // https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2



//for video capture
var capture;
var tracker;
var w, h;

var millisecs, secs, wordTimer=9; 
var timeToRefresh=10000, opacity=0.2, opacityChange=1.0;
var textFlag=1, textColor=255;

var myColor, x, y, m=0;

var noseColor;
var fromColor, toColor, chosenColor;

var tempChange, delta;
var revealColor, revealColorAlpha=255;

var mic, vol, soundx;


var instructions = ["Can you speak to it?", "Step Closer", "Sing. Clap. Shout!"];



function preload() 
{
    frame = loadImage("frame.png");
    artimage = loadImage("image1.png");
    artimage1 = loadImage("image2.png"); 
    mask = loadImage("image8.png"); 
}



function setup() 
{

  w = window.innerWidth;
  h = window.innerHeight;

  noCursor();
  mic = new p5.AudioIn();
  mic.start();


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

  // colorMode(HSB);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);

  imageMode(CORNER);
  
  // artimage1.mask(artimage);
  // image(artimage1, 0, 0, w, h);

}









// prototype 1 DRAW
function draw() 
{   
    noStroke();
    // revealColor = color(255,255,255);
    // fill(revealColor);    
    // rect(0, 0, w, h);

    vol = mic.getLevel();
    soundx = map(vol, 0, 1, 1, 100);    

    // revealColor.setAlpha(revealColorAlpha);
    // revealColorAlpha = revealColorAlpha - soundx/10;
    
    textAlign(CENTER);
    millisecs = millis();
    secs = floor(millisecs/1000);
    // m = millisecs/1000;

    fill(textColor);
    textSize(30);

    let interval = secs%wordTimer;

    console.log(interval);

    if(interval>=0 && interval<3 && textFlag==1)
    {
      background(20);
      text(instructions[0], w/2, h/2);
    }
    else if(interval>=3 && interval<6 && textFlag==1)
    {
      background(20);
      text(instructions[1], w/2, h/2);  
    }
    else if(interval>=6 && interval<9 && textFlag==1)
    {
      background(20);
      text(instructions[2], w/2, h/2);  
    }
    

    if(millisecs%timeToRefresh>1 && millisecs%timeToRefresh<100)
    {
      fill('rgba(20,20,20,'+opacity+')');
      rect(0,0,w,h);
      textFlag=1; textColor=255;
    }



    // image(artimage, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();

    //face lines
    // beginShape();
    // for (var i = 0; i < positions.length; i++) {
    //     vertex(positions[i][0], positions[i][1]);
    // }
    // endShape();

    noStroke();
    for (var i = 0; i < positions.length; i++) 
    {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        // fill('rgba('+map(0, i, positions.length, 0, 360)+', 50, 100,0.5)');

        // dots on the face and all other parts except nose
        // ellipse(positions[i][0], positions[i][1], soundx*2, soundx*2);
        delta = tempChange - positions[62][0];
        // text(i, positions[i][0], positions[i][1]);

        textFlag=0;
        // instructions[0]="";
        // instructions[1]="";
    }

    if (positions.length > 0) 
    {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        // uncomment the line below to show an estimate of amount "smiling"
        // rect(140, 100, smile * 3, 5, 100);

        // uncomment for a surprise
        
        
        noStroke();
        noseColor = color(0,255,255);
        noseColor.setAlpha(100);

        tempChange = positions[62][0];

        //nose
        fill(noseColor);
        ellipse(positions[62][0], positions[62][1], soundx*5, soundx*5);

    }

    // image(frame, 0, 0, w, h);

    // remove();

}







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


