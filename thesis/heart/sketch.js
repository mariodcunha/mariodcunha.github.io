
var diameter = 50;
let speed = 50;
let colorRight;
let colorMiddle;
let colorLeft;
let mic;
let vol;
let soundx;
let obstacles = [];
var Freezer1;
let amt;

//Thesis

var width = window.innerWidth;
var height = window.innerHeight;

var pos;
var xOrient, yOrient;
var ambience;
var num_hearts, temp_num_hearts;
var soapWidth, soapHeight, soapDissolve;
var fullscreen;

var moneyMode=0;


function initialize_variables()
{
    soapWidth=300, soapHeight=200, soapDissolve=0.1;
    num_hearts=3, temp_num_hearts=0;
    xOrient=0, yOrient=0, ambience=0;
    fullscreen=0;
}




// Fullscreen

var elem = document.documentElement;
function toggleFullscreen() 
{
  if(fullscreen==1)
  {
    if (elem.requestFullscreen)
      elem.requestFullscreen();
    else if (elem.mozRequestFullScreen)  /* Firefox */
      elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen)  /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen)  /* IE/Edge */
      elem.msRequestFullscreen();

    fullscreen=1;
  }
  else if(fullscreen==0)
  {
    // if (document.exitFullscreen)
    //   document.exitFullscreen();
    // else if (document.mozCancelFullScreen)
    //   document.mozCancelFullScreen();
    // else if (document.webkitExitFullscreen)
    //   document.webkitExitFullscreen();
    // else if (document.msExitFullscreen)
    //   document.msExitFullscreen();

    // fullscreen=0;
    console.log("no fullscreen");
  }
  
}






class Obstacle 
{
  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
  }

  move() {
    let velX = (noise(millis() * 0.001 + this.id * 500) - 0.5) * 10;
    let velY = (noise(millis() * 0.001 + this.id * 10000) - 0.5) * 10;

    this.x += velX;
    this.y += velY;
    this.d = 20;
  }

  show() {
    noStroke();
    fill(191, 117, 226);
    ellipse(this.x, this.y, this.d);
  }

  isInvisible() {
    if (this.x < 0 || this.x > windowWidth || this.y < 0 || this.y > windowHeight)
      return true;
  }

  resetPos() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
  }

  touch(x, y, d) {
    if (dist(this.x, this.y, x, y) < (this.d + d) / 2)
      return true;
  }
}



class Freezer
{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //this.id = id;
  }

  show() {
    noStroke();
    fill(191, 117, 255);
    rect(this.x, this.y, this.d*2);
  }

  isInvisible() {
    if (this.x < 0 || this.x > windowWidth || this.y < 0 || this.y > windowHeight)
      return true;
  }

  resetPos() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
  }

  touch(x, y, d) {
    if (dist(this.x, this.y, x, y) < (this.d + d) / 2)
      return true;
  }
}




function preload() 
{
  initialize_variables();
  bitfont = loadFont('font/8bit-font.ttf');
}



function setup() 
{

  textFont(bitfont);

  mouseX = windowWidth/2;
  mouseY = windowHeight/2;
  // put setup code here
  // mic = new p5.AudioIn();
  // mic.start();

  Haptics.heartbeat([500, 500, 500]);

  createCanvas(windowWidth, windowHeight);
  pos = createVector(mouseX, mouseY);
  noCursor();
  colorRight = color(222, 30, 30);
  colorLeft = color(126, 227, 212);
  colorMiddle = color(253, 228, 9);
  background(255);

  //obstacles
  for (let i = 0; i < 4; i++)
  {
    //let x = 10 + 30 * i;
    obstacles[i] = new Obstacle(random(0, windowWidth), random(0, windowHeight), i);
  }
  
  Freezer1 = new Freezer(random(0, windowWidth), random(0, windowHeight));
  
  //Loading Images
  // emptywallet = loadImage("images/emptywallet.png");
  // fullwallet = loadImage("images/fullwallet.png");
  heart = loadImage("images/heart.png");
  faded_heart = loadImage("images/heart-faded.png");

  // angleMode(DEGREES);

}





function draw() 
{

  //Background Color 
  
  // amt = map(pos.x, 0, windowWidth, -1.0, 1.0, true);
  // let bgColor;
  // if (pos.x > windowWidth / 2) 
  // {
  //   bgColor = lerpColor(colorMiddle, colorRight, amt);

  // } 
  // else 
  // {
  //   bgColor = lerpColor(colorMiddle, colorLeft, -amt);
  // }

  // bgColor.setAlpha(30);
  fill(255);
  rect(0, 0, windowWidth, windowHeight);
  // background(bgColor, 10);




  // Main Top Bar

  // Hearts
  // switch(num_hearts)
  // {

  //   case 0:   image(faded_heart, 30, 30, 100,100);
  //             image(faded_heart, 160, 30, 100,100);
  //             image(faded_heart, 290, 30, 100,100);
  //             break;


  //   case 1:   image(heart, 30, 30, 100,100);
  //             image(faded_heart, 160, 30, 100,100);
  //             image(faded_heart, 290, 30, 100,100);
  //             break;

  //   case 2:   image(heart, 30, 30, 100,100);
  //             image(heart, 160, 30, 100,100);
  //             image(faded_heart, 290, 30, 100,100);
  //             break;

  //   case 3:   image(heart, 30, 30, 100,100);
  //             image(heart, 160, 30, 100,100);
  //             image(heart, 290, 30, 100,100);
  //             break;
  // }


  // if(ambience < 10 && num_hearts <= 3)
  //   num_hearts++;
  // else if(num_hearts)
  //    to be filled


  // Soap Placement
  // moneyMode=1;
  // console.log(seconds()%20);
  if(moneyMode==0 || seconds()%20<3)
    image(faded_heart, width/2-width/4, height/2-height/8, 500, 510);
  else
  {
    if(millis()%500<50)
      image(heart, width/2-width/4, height/2-height/5.7, 500, 510);
    else
      image(heart, width/2-width/4-50, height/2-height/5.7-50, 600, 610);
  }

  


}



function keyPressed() 
{
  //console.log("obj");
  if (key == " ") {
    pos.x = windowWidth / 2;
    pos.y = windowHeight / 2;
  }
}









 // Initializing All Sensors

function initSensor() 
{
    
    //Enable the "Options" for the Gyroscope system
    const options = { frequency: 60, coordinateSystem };
    // console.log(JSON.stringify(options));



    // // Orientation Sensor or GYROSCOPE START

    // sensor_orientation = relative ? new RelativeOrientationSensor(options) : new AbsoluteOrientationSensor(options);
    
    // sensor_orientation.onreading = function() 
    // {
    //     model.quaternion.fromArray(sensor_orientation.quaternion);

    //     xOrient = model.quaternion.fromArray(sensor_orientation.quaternion).inverse()._x;
    //     yOrient = model.quaternion.fromArray(sensor_orientation.quaternion).inverse()._y;

    //     pos.x += xOrient;
    //     pos.y += yOrient;
    // }

    // sensor_orientation.onerror = (event) => {
    //   if (event.error.name == 'NotReadableError') {
    //     console.log("Orientation Sensor is not available.");
    //   }
    // }
    // sensor_orientation.start();



    // Ambient Light Sensor

    sensor_ambientlight = new AmbientLightSensor();
    sensor_ambientlight.start();

    ambience = sensor_ambientlight.illuminance;
    
    sensor_ambientlight.onreading = function()
    {
        ambience = sensor_ambientlight.illuminance;
        console.log("Ambient Light Sensor is working");
        
          if(ambience < 5)
          {
              moneyMode = 1;
              Haptics.heartbeat([500, 500, 500]);
          }

    }



    // Shake Sensor

    var shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();
    window.addEventListener('shake', function()
    {
        document.location.reload();
    },  false);

    //stop listening
    function stopShake()
    {
        shakeEvent.stop();
    }

    //check if shake is supported or not.
    if(!("ondevicemotion" in window)){alert("Not Supported");}



}




























// Sensor Permissions

  const params = new URLSearchParams(new URL(window.location.href).search.slice(1));
  const relative = !!Number(params.get("relative"));
  const coordinateSystem = params.get("coord");

  let container, sensor, camera, scene, renderer, model;

  initScene();
  if (navigator.permissions) 
  {
      // https://w3c.github.io/orientation-sensor/#model
      Promise.all([navigator.permissions.query({ name: "accelerometer" }),
                   navigator.permissions.query({ name: "magnetometer" }),
                   navigator.permissions.query({ name: "gyroscope" })])
             .then(results => {
                  if (results.every(result => result.state === "granted")) {
                      initSensor();
                  } else {
                      console.log("Permission to use sensor was denied.");
                  }
             }).catch(err => {
                  console.log("Integration with Permissions API is not enabled, still try to start app.");
                  initSensor();
             });
  } else {
      console.log("No Permissions API, still try to start app.");
      initSensor();
  }

  // renderScene();

  function initScene() {
      container = document.createElement('div');
      // document.body.appendChild(container);

      // camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 200);
      // camera.position.z = 10;

      // scene = new THREE.Scene();

      // var ambientLight = new THREE.AmbientLight(0x404040, 6);
      // scene.add(ambientLight);

      // var manager = new THREE.LoadingManager();
      // var mtlLoader = new THREE.MTLLoader(manager);
      // mtlLoader.setTexturePath('resources/');
      // mtlLoader.load('resources/phone.mtl', materials => {
      //     materials.preload();
      //     var objLoader = new THREE.OBJLoader(manager);
      //     objLoader.setMaterials(materials);
      //     objLoader.load('resources/phone.obj', object => {
      //         model = object;
      //         scene.add(model);
      //   });
      // });

      // renderer = new THREE.WebGLRenderer({ alpha: true });
      // renderer.setPixelRatio(window.devicePixelRatio);
      // renderer.setSize(window.innerWidth, window.innerHeight);
      // container.appendChild(renderer.domElement);

      // window.addEventListener('resize', () => {
      //     camera.aspect = window.innerWidth / window.innerHeight;
      //     camera.updateProjectionMatrix();
      //     renderer.setSize(window.innerWidth, window.innerHeight);
      // }, false);

      // document.addEventListener('mousedown', () => document.documentElement.requestFullscreen());
      // document.addEventListener('fullscreenchange', () => {
      //     if (document.fullscreenElement != null) {
      //         screen.orientation.lock("natural")
      //     }
      // });
  }


  function renderScene() 
  {
      requestAnimationFrame(renderScene);
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
  }
            

//mariodcunha.js

function seconds()
{
  return millis()/1000;
}


function refresh()
{
  document.location.reload();
}


function  randomMath(l, h)
{
  return Math.floor(Math.random() * (h - l)) + l;
}

function randomInt(n) 
{
  return Math.floor(Math.random() * (n - 0)) + 0;
}


 






  // Other Snippets


  /*

  let log = console.log;
  console.log = (message, ...rest) => 
  {
      const div = document.querySelector('#console');
      // div.innerText = message;
      log.call(console, message, ...rest);
  }


  */
