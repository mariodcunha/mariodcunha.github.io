
//Mario Dcunha
// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2



//for video capture
var capture;
var tracker;
var w, h;

var millisecs, secs, wordTimer=6; 
var timeToRefresh=20000, opacity=0.4, opacityChange=1.0;
var textFlag=1, textColor=255;

var faceColor;

var myColor, x, y, m=0;

var numberDots=100;

var smallDistance=10, largeDistance=300;

var lrange=5, hrange=20;

var Dots= [];

var fromColor, toColor, chosenColor;

var square=0, tri=0, circle=1, mode=0, e=0, grid=0;

var something=0;

var instructions = ["Did you see it?", "Step Closer", " "];



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









// prototype 1 DRAW
function draw() 
{
    textAlign(CENTER);
    millisecs = millis();
    secs = floor(millisecs/1000);
    // m = millisecs/1000;

    fill(textColor);
    textSize(30);

    let interval = secs%wordTimer;

    if(interval>=0 && interval<wordTimer/2 && textFlag==1)
    {
      background(20);
      text(instructions[0], w/2, h/2);
    }
    else if(interval>=wordTimer/2 && interval<wordTimer && textFlag==1)
    {
      background(20);
      text(instructions[1], w/2, h/2);  
    }
    
    // console.log("secsMod: "+secs%5+", m: "+m);


    if(millisecs%timeToRefresh>1 && millisecs%timeToRefresh<100)
    {
      fill('rgba(20,20,20,'+opacity+')');
      rect(0,0,w,h);
      textFlag=1; textColor=255;
    }

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
    for (var i = 0; i < positions.length; i++) 
    {

        // fill(map(i, 0, positions.length, 0, 360), 50, 100);
        // fill('rgba('+map(i, 0, positions.length, 0, 360)+',50,100,100)');
        faceColor = color(map(i, 0, positions.length, 0, 360), 50, 100);
        faceColor.setAlpha(100);

        fill(faceColor);

        // dots on the face and all other parts except nose
        ellipse(positions[i][0], positions[i][1], 4, 4);
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
        fill('rgba(255,0,0,100)');
        // fill('rgba(20,20,20,'+1+')');

        //nose
        ellipse(positions[62][0], positions[62][1], 40, 40);
    }

    image(frame, 0, 0, w, h);

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


