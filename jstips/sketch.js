
//Mario Dcunha


// var pos_x_slider, pos_y_slider, size_slider, color_picker, rings=15;


// function setup() 
// {
//     createCanvas(window.innerWidth, window.innerHeight * .5);

//     fill(100);
//     noStroke();
//     rectMode(CENTER);

//     createP('Horizontal Position');
//     pos_x_slider = createSlider(0, width, width * .5);

//     createP('Vertical Position');
//     pos_y_slider = createSlider(0, width, 158);

//     createP('Size');
//     size_slider = createSlider(10, 200, 100);

//     createP('Square Color');
//     color_picker = createInput("#e52727", "color");

//     createP('Background Color');
//     color_picker_bg = createInput("#eeeeee", "color");
// }


// function draw() 
// {
//     background(color_picker_bg.value());
//     fill(color_picker.value());
//     var pos_x = pos_x_slider.value();
//     var pos_y = pos_y_slider.value();
//     var size = size_slider.value();
    
//     drawTarget(pos_x, pos_y, size/2);
//     console.log(pos_y_slider.value());
// }

// function drawTarget(x, y, r)
// {

//   stroke(color_picker.value());
//   strokeWeight(size_slider.value()/8);
//   noFill();


//   for(var i=0; i<rings; i++)
//   {
//       ellipse(x, y, r*i, r*i);
//   }

// }






// // Number of Squares to Draw
// var num_squares = 400;

// // The width of the squares.
// var square_size = 10;

// var  min1 =5, max1=20, swidth = 3;

// var sqsize = [min1, max1];

// var min_slider, max_slider, sizes;

// function setup() 
// {
//     createCanvas(window.innerWidth, window.innerHeight);

//     fill(100);
//     rectMode(CENTER);
//     stroke(255);
//     strokeWeight(swidth);

//     createP('Minimum');
//     min_slider = createSlider(1, 5, width/2);

//     createP('Maximum');
//     max_slider = createSlider(10, 20, width/2);

//     createP('Sizes');
//     sizes = createSlider(0, width, width/2);

// }


// function draw() 
// {
//     background(50);
//     fill(200, 100, 100);


//     sqsize = [min_slider.value(), max_slider.value()];

//     for (var i = 0; i < num_squares; i++) 
//     {
//         square_size = arrayRandom(sqsize);
//         rect(random(0, width), random(0, height), square_size, square_size);
//     }
//     noLoop();
// }


// function myRandom(n)
// {
//   return Math.floor(random(n));
// }


// function arrayRandom(myArray)
// {
//   return myArray[Math.floor(random(myArray.length))];
// }












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
