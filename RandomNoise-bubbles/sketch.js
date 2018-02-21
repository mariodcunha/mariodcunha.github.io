
//Mario Dcunha

// Inspired from The Nature of Code
// Daniel Shiffman // http://natureofcode.com



var ps;

function setup() 
{

    canvas = createCanvas(window.innerWidth, window.innerHeight);

    labelSetup();

    // setFrameRate(50);

    ps = new ParticleSystem(createVector(width/2, 200));

}

function draw() 
{

  background(255);
  
  // toggleLabel.a(mode);
  toggleLabel.html(mode);

  // checkToggle();

  ps.addParticle();
  ps.run();

  // console.log(noise(5000));
  // console.log(random(10,50));
}



var ParticleSystem = function(position) 
{

	this.origin = position.copy();
	this.particles = [];

  this.addParticle = function() 
  {
  	this.particles.push(new Particle(this.origin));
  };

  this.run = function() 
  {
  
  	for (var i = this.particles.length-1; i >= 0; i--) 
  	{
    
      var p = this.particles[i];
      p.run();
      
      if (p.isDead()) 
      {
        this.particles.splice(i, 1);
      }
    }
  };
};




var Particle = function(position) 
{

  this.acceleration = createVector(0, 0.05); 

  this.velocity = createVector(RandomNoise(-10, 10, change/20), RandomNoise(-10, 10, change/20));

  this.position = position.copy();
  this.lifespan = 255.0;

  this.run = function() 
  {
    this.update();
    this.display();
  };

  // Method to update position
  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
  };

  // Method to display
  this.display = function() {
    stroke(255, this.lifespan);
    strokeWeight(1);
    fill(106, 198, 237, this.lifespan);


    ellipse(this.position.x, this.position.y, 50, 50);
    // console.log(this.position.x);
  };

  // Is the particle still useful?
  this.isDead = function(){
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  };
};


var n=1, change=1;
var toggleLabel, mode="Noise"; 


function labelSetup() 
{
    canvas.parent('container');

    toggleLabel = createDiv('');
    toggleLabel.html("Noise");
    toggleLabel.parent('info');

    var controlLabel = createDiv('');
    controlLabel.html("Click to Toggle. Scroll to Control.");
    controlLabel.parent('instruction');
}


function RandomNoise(lowLimit, highLimit, factor)
{

    if(n==0)
    {
        return random(lowLimit,highLimit)+factor;
    }

    else if(n==1)
    {
        return noise(lowLimit,highLimit)+factor;  
    }
    else if(n==2)
    {
        return (noise(lowLimit,highLimit)*random(lowLimit,highLimit))+factor;   

    }

}


function mouseClicked() 
{
    if(n==0)
    {
      n=1;
      mode = "Noise";
    }
    else if(n==1)
    {
      n=2;
      mode = "Noise x Random";
    }
    else if(n==2)
    {
      n=0;
      mode = "Random";
    }

    console.log(n);
}



function mouseWheel(event) 
{
    change+= event.delta;
}











