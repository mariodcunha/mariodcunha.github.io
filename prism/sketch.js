
//Mario Dcunha


var pos_x = window.innerWidth/2, pos_y=window.innerHeight/2, mx, my;

var r =0, g=0, b=0, bgcolor=255;

var TriangleArray = [];
var triangleCount = 1; 

var equiv=50, diff=0, opacity=40, mode=0;
//controls=1;



var Triangle = function()
{

    //Random vertices
    // this.vertex = [];
    // for(var v=0; v<6; v++)
    // {
    //     vertex[v] = myRandom(50);
    // }

    // this.factor = equiv;

    //Equilateral Triangle Vertices
    this.x = pos_x;
    this.y = pos_y;

    this.x1 = this.x - equiv;
    this.y1 = this.y + equiv;

    this.x2 = this.x;
    this.y2 = this.y;

    this.x3 = this.x + equiv;
    this.y3 = this.y + equiv;

    this.triColorR = myRandom(255);
    this.triColorG = myRandom(255);
    this.triColorB = myRandom(255);


}



function setup() 
{
    var canvas = createCanvas(window.innerWidth-50, window.innerHeight-50);
    canvas.parent('container');
    // canvas.hide();

    console.log(window.innerHeight);

    noStroke(); 
    noLoop();
    background(255);

    TriangleArray[0] = new Triangle();


    // targetCount = myRandom(15)+5;
    
    // for(i=0; i<targetCount; i++)
    // {
    //   TargetArray[i] = new Target();
    // }

    // var text = createP('Controls');


    // var colorpos = createP('Ring Color');
    // color_picker = createInput("#e52727", "color");

    // var equivpos = createP('equiv');
    // equiv_slider = createSlider(10, 200, 100);
    // equivpos.class('labels');
    // equiv_slider.class('sliders');
    // equivpos.parent('params'); equiv_slider.parent('params');
}



function draw() 
{
    drawTriangles(TriangleArray.length);
}



function drawTriangles(count)
{
    if(mode==0)
        background(bgcolor);

    noFill();

    for(var i=0; i<count; i++)
    {
        //draw the clicked main triangles
        fill(TriangleArray[i].triColorR-diff, TriangleArray[i].triColorB-diff, TriangleArray[i].triColorB-diff, 150);

        triangle(   TriangleArray[i].x - equiv, TriangleArray[i].y + equiv, 
                    TriangleArray[i].x, TriangleArray[i].y,
                    TriangleArray[i].x + equiv, TriangleArray[i].y + equiv   );

        //draw the side shades
        stroke(10, 10, 10, 4);
        strokeWeight(3);
        fill(TriangleArray[i].triColorR-diff, TriangleArray[i].triColorB-diff, TriangleArray[i].triColorB-diff, opacity);
        triangle(   TriangleArray[i].x - equiv, TriangleArray[i].y + equiv, 
                    mx, my,
                    TriangleArray[i].x, TriangleArray[i].y);
        triangle(   TriangleArray[i].x, TriangleArray[i].y, 
                    mx, my,
                    TriangleArray[i].x + equiv, TriangleArray[i].y + equiv);
        triangle(   TriangleArray[i].x - equiv, TriangleArray[i].y + equiv, 
                    mx, my,
                    TriangleArray[i].x + equiv, TriangleArray[i].y + equiv);

        // triangle(   TriangleArray[i].x1, TriangleArray[i].y1, 
        //             TriangleArray[i].x2, TriangleArray[i].y2,
        //             TriangleArray[i].x3, TriangleArray[i].y3   );

    }



}



function mouseClicked()
{
    pos_x = mouseX; pos_y = mouseY;

    TriangleArray.push(new Triangle());
    
    drawTriangles(TriangleArray.length);
}



function mouseMoved() 
{
    mx = mouseX; my = mouseY;
    drawTriangles(TriangleArray.length);

}



function mouseWheel(event) 
{
    equiv += event.delta*0.1;
    drawTriangles(TriangleArray.length);

}


function keyPressed()
{
    if(key == ' ')
    {
        if(bgcolor == 255)
       {
            bgcolor = 50; diff=myRandom(50); opacity = 100;
        }
        else
        {
            bgcolor = 255; diff=0; opacity = 40;
        }
    }
    else if(key == 'M' || key == 'm')
    {
        if(mode==1)
            mode = 0;
        else
            mode = 1;
    }
    else if(key == 'H' || key == 'h')
    {
        if(controls==1)
            controls = 0;
        else
            controls = 1;

    }
    
    drawTriangles(TriangleArray.length);
}

// if(controls==0)
// {
//     $('#info').css("display","hidden");
//     console.log(controls);
// }





function myRandom(num)
{
    return Math.floor(random(num));
}



