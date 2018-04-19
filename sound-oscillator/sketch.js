var osc, fft;

var sine=1, triangle=0, square=0, sawtooth=0;

function setup() 
{
  createCanvas(window.innerWidth, window.innerHeight);

  osc = new p5.Oscillator(); // set frequency and type
  osc.setType('sine');
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();
}

function draw() 
{
  background(255);

  if(sine==1)
  {
    osc.setType('sine');
  }
  else if(triangle==1)
  {
    osc.setType('triangle');
  }
  else if(square==1)
  {
    osc.setType('square');
  }
  else if(sawtooth==1)
  {
    osc.setType('sawtooth');
  }

  var waveform = fft.waveform();  // analyze the waveform
  
  beginShape();
  strokeWeight(5);
  for (var i = 0; i < waveform.length; i++)
  {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency based on mouseX
  var freq = map(mouseX, 0, width, 40, 880);
  osc.freq(freq);

  var amp = map(mouseY, 0, height, 1, .01);
  osc.amp(amp);
}

function mousePressed()
{
  if(sine==1)
  {
    triangle=1; sine=0; square=0; sawtooth=0;
  }
  else if(triangle==1)
  {
    triangle=0; sine=0; square=1; sawtooth=0;
  }
  else if(square==1)
  {
    triangle=0; sine=0; square=0; sawtooth=1;
  }
  else if(sawtooth==1)
  {
    triangle=0; sine=1; square=0; sawtooth=0;
  }
}
