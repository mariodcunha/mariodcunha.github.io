
//Mario Dcunha




var posX, posY, shapeSize=7, canvas;
var change=100, margin=100;

var Trees = [];
var Snowmen = [];

var numTrees = 50, numSnowmen;
numSnowmen = numTrees * 0.10;

function Tree(x, y)
{
  this.x = x;
  this.y = y;
}

function Snowman(x, y)
{
  this.x = x;
  this.y = y;
}



function setup() 
{
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  labelSetup();

  createTree(0, numTrees);
  createSnowman(0, numSnowmen);

}



function draw() 
{
  background(220);
  fill(200);
  noStroke();

  drawSnowmen();

  drawTrees();
  
}


function drawTrees()
{

  for (let i=0; i < Trees.length; i++) 
  {
      fill(230,126,34);
      rect(Trees[i].x, Trees[i].y, shapeSize, shapeSize);

      fill(59,149,9);
      triangle(Trees[i].x-shapeSize, Trees[i].y, Trees[i].x+(shapeSize/2), Trees[i].y-(3*shapeSize), Trees[i].x+(2*shapeSize),Trees[i].y);
  }

}



function drawSnowmen()
{

  for (let i=0; i < Snowmen.length; i++) 
  {

      var snowX = Snowmen[i].x+noise(10);
      var snowY = Snowmen[i].y+noise(10);
      var snowR = shapeSize*2;

      fill(240,240,240);
      ellipse(snowX, snowY, snowR, snowR);
      ellipse(snowX, snowY-(snowR-5), snowR*0.8);
      
      fill(255,153,51);
      ellipse(snowX+0.5, snowY-(snowR-5), snowR*0.2);

      fill(0,0,0  );
      ellipse(snowX+2.5, snowY-(snowR-2), snowR*0.1);
      ellipse(snowX-2.5, snowY-(snowR-2), snowR*0.1);

      Snowmen[i].x += randomInt(-5,5);
      Snowmen[i].y += randomInt(-5,5);


  }


}


function central(value)
{
  return (randomInt(100,value-100)+randomInt(100,value-100))/2;
}



function mouseWheel(event) 
{


  let previous = numTrees;
  if(Trees.length > 0)
  {
    numTrees += event.delta;
  }
  else if(Trees.length == 0 && event.delta < 0)
  { 
    numTrees = 0;
  }
  else if (numTrees < 0)
  {
    numTrees ==0;
  }
  else
  {
    numTrees += event.delta;
  }

  if(numTrees < previous)
  {
      for (i=numTrees; i < previous; i++) 
      {
         Trees.pop();
      }       
  }
  else if(numTrees > previous)
  {
      createTree(previous, numTrees);
  }




  let previousSnow = numSnowmen;
 
 if(Snowmen.length > 0)
  {
    numSnowmen += (event.delta);
  }
  else if(Snowmen.length == 0 && event.delta < 0)
  { 
    numSnowmen = 0;
  }
  else if (numSnowmen < 0)
  {
    numSnowmen =0;
  }
  else
  {
    numSnowmen += event.delta;
  }

  if(numSnowmen < previousSnow)
  {
      for (i=numSnowmen; i < previousSnow; i++) 
      {
         Snowmen.pop();
      }       
  }
  else if(numSnowmen > previousSnow)
  {
        createSnowman(previousSnow, numSnowmen);
  }


    drawTrees();
    drawSnowmen();


    console.log(numTrees+"..."+numSnowmen+"..."+Snowmen.length);
}






function randomInt(l, h) 
{
  return Math.floor(random(l, h));
}


function createTree(l, h)
{
    for (i=l; i < h; i++) 
    {
        Trees[i] = new Tree(central(window.innerWidth), central(window.innerHeight));
    }
}

function createSnowman(l, h)
{
    for (i=l; i < h; i++) 
    {
        Snowmen[i] = new Snowman(randomInt(window.innerWidth), randomInt(window.innerHeight));
    }
}


function labelSetup() 
{
    canvas.parent('container');

    toggleLabel = createDiv('');
    toggleLabel.html("The North Remembers");
    toggleLabel.parent('info');

    var controlLabel = createDiv('');
    controlLabel.html("Scroll to Multiply");
    controlLabel.parent('instruction');
}




