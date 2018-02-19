
//Mario Dcunha


// Number of Squares to Draw
var num_squares = 400;

// The width of the squares.
var square_size = 10;

var  min1 =5, max1=20, swidth = 3;

var sqsize = [min1, max1];

var min_slider, max_slider, size_slider;

var sizeArray = [];
var xArray = [];
var yArray = [];

function setup() 
{
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('container');

    fill(100);
    rectMode(CENTER);
    stroke(255);
    strokeWeight(swidth);

    star = loadImage("star.png");

    for (var i = 0; i < num_squares; i++) 
    {
        // sizeArray[i] = arrayRandom(sqsize);
        xArray[i] = myRandom(width)+10; 
        yArray[i] = myRandom(height)+10; 
    }


    var minLabel = createP('Small');
    min_slider = createSlider(1, min1+5, min1);

    var maxLabel = createP('Large');
    max_slider = createSlider(10, max1+10, max1);

    var sizeLabel = createP('Sizes');
    size_slider = createSlider(0, max1+30, 0);

    var percentageLabel = createP('Twinkle');
    percent_slider = createSlider(1, 20, 10);

    minLabel.class('labels'); 
    maxLabel.class('labels');
    sizeLabel.class('labels');
    percentageLabel.class('labels');

    min_slider.class('sliders');
    max_slider.class('sliders');
    size_slider.class('sliders');
    percent_slider.class('sliders');
    
    minLabel.parent('info'); 
    min_slider.parent('info');

    maxLabel.parent('info');
    max_slider.parent('info');

    sizeLabel.parent('info');
    size_slider.parent('info');

    percentageLabel.parent('info');
    percent_slider.parent('info');


}


function draw() 
{
    background(50);
    fill(200, 100, 100);

    min1 = min_slider.value() + square_size;
    max1 = max_slider.value() + square_size;
    square_size = size_slider.value();

    sqsize = [min1, max1];

    //Twinkling Effect - Shuffling betwen min and max at the same time
    for (var i = 0; i < num_squares; i++) 
    {
        if(percent_slider.value() > 10)
        {
            sizeArray[i] = min(arrayRandom(sqsize),arrayRandom(sqsize));
        }
        else if(percent_slider.value() < 10)
        {
            sizeArray[i] = max(arrayRandom(sqsize),arrayRandom(sqsize));
        }
        else
        {
            sizeArray[i] = arrayRandom(sqsize);
        }
    }
    console.log(percent_slider.value());


    for (var i = 0; i < num_squares; i++) 
    {
        // square_size = arrayRandom(sqsize);
        // rect(xArray[i], yArray[i], sizeArray[i], sizeArray[i]);
        image(star, xArray[i], yArray[i], sizeArray[i], sizeArray[i]);
    }
}


function drawSquares()
{
    for (var i = 0; i < num_squares; i++) 
    {
        square_size = arrayRandom(sqsize);
        rect(random(0, width), random(0, height), square_size, square_size);
    }
}

function myRandom(n)
{
  return Math.floor(random(n));
}


function arrayRandom(myArray)
{
  return myArray[Math.floor(random(myArray.length))];
  // return min(myArray);
}












// // Inspired from The Nature of Code
// // Daniel Shiffman // http://natureofcode.com

// var ps;

// function setup() 
// {
//   createCanvas(windowWidth, windowHeight);
//   setFrameRate(60);

//   ps = new ParticleSystem(createVector(width/2, 200));

// }

// function draw() 
// {

//   background(51);

//   ps.addParticle();
//   ps.run();

// }



// var ParticleSystem = function(position) 
// {

// 	this.origin = position.copy();
// 	this.particles = [];

//   this.addParticle = function() 
//   {
//   	this.particles.push(new Particle(this.origin));
//   };

//   this.run = function() 
//   {
  
//   	for (var i = this.particles.length-1; i >= 0; i--) 
//   	{
    
//       var p = this.particles[i];
//       p.run();
      
//       if (p.isDead()) 
//       {
//         this.particles.splice(i, 1);
//       }
//     }
//   };
// };




// var Particle = function(position) 
// {

//   this.acceleration = createVector(0, 0.05); 
//   this.velocity = createVector(random(-1, 1), random(-1, 0));
//   this.position = position.copy();
//   this.lifespan = 255.0;

//   this.run = function() 
//   {
//     this.update();
//     this.display();
//   };

//   // Method to update position
//   this.update = function(){
//     this.velocity.add(this.acceleration);
//     this.position.add(this.velocity);
//     this.lifespan -= 1;
//   };

//   // Method to display
//   this.display = function() {
//     stroke(200, this.lifespan);
//     strokeWeight(2);
//     fill(127, this.lifespan);
//     ellipse(this.position.x, this.position.y, 12, 12);
//   };

//   // Is the particle still useful?
//   this.isDead = function(){
//     if (this.lifespan < 0.0) {
//       return true;
//     } else {
//       return false;
//     }
//   };
// };
