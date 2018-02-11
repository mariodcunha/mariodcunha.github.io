
//Mario Dcunha



var rings=3, ring_scroll=0;

var pos_x = window.innerWidth/2, pos_y=window.innerHeight/2, size1, radius=size1/2, mx, my;

var m=0, ring_flag=0, i=0;

var r = 200, g=0, b=0, bgcolor=255;



var TargetArray = [];
var targetCount = 1;

var Target = function()
{

    this.x = myRandom(width)-100;
    this.y = myRandom(height)-100;
    this.rad = myRandom(40);
    this.ringCount = myRandom(10)+3;
    this.targetColorR = myRandom(255);
    this.targetColorG = 0;
    this.targetColorB = 0;
}



function setup() 
{
    var canvas = createCanvas(window.innerWidth-50, window.innerHeight-50);
    canvas.parent('container');

    noStroke(); noLoop();
    background(255);

    targetCount = myRandom(15)+5;
    
    for(i=0; i<targetCount; i++)
    {
      TargetArray[i] = new Target();
    }

    // var text = createP('Controls');


    // var colorpos = createP('Ring Color');
    // color_picker = createInput("#e52727", "color");

    // var sizepos = createP('Size');
    // size_slider = createSlider(10, 200, 100);
    // sizepos.class('labels');
    // size_slider.class('sliders');
    // sizepos.parent('params'); size_slider.parent('params');
}


function draw() 
{
    drawTargets(TargetArray.length);
}



function drawTargets(count)
{
    background(bgcolor);    
    noFill();
    for(var i=0; i<count; i++)
    {
        stroke(TargetArray[i].targetColorR,TargetArray[i].targetColorG,TargetArray[i].targetColorB);
        strokeWeight(TargetArray[i].rad/5); 

        for(var j=0; j<TargetArray[i].ringCount; j++)
        {
            ellipse(TargetArray[i].x, TargetArray[i].y, TargetArray[i].rad*j, TargetArray[i].rad*j);
        }  
    }

}



function mouseClicked()
{
    if(bgcolor == 255)
    {
        for(var i=0; i<TargetArray.length; i++)
        {
            TargetArray[i].targetColorG += myRandom(255);
            TargetArray[i].targetColorB += myRandom(255);
        }
        bgcolor = 10;
    }
    else
    {
     for(var i=0; i<TargetArray.length; i++)
    {
        TargetArray[i].targetColorG = 0;
        TargetArray[i].targetColorB = 0;
        // TargetArray[i].targetColorR = 0;
    }
    bgcolor = 255;   
    }
    
    drawTargets(targetCount);
}



function mouseWheel(event) 
{

    if(key == ' ')
    {
        for(var i=0; i<TargetArray.length; i++)
        {
            TargetArray[i].rad += event.delta;
        }
        drawTargets(targetCount);
    }
    else
    {
        for(var i=0; i<TargetArray.length; i++)
        {
            TargetArray[i].ringCount += event.delta*0.1;
        }
        drawTargets(targetCount);
    }

}



function keyPressed()
{
    mouseWheel();
}


function myRandom(num)
{
    return Math.floor(random(num));
}



