

let pos;
var diameter = 50;
let speed = 30;
let colorRight;
let colorMiddle;
let colorLeft;
let mic;
let vol;
let soundx;
let obstacles = [];
var Freezer1;
let amt;

var xOrient = 0, yOrient=0;


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



function setup() 
{

  mouseX = windowWidth/2;
  mouseY = windowHeight/2;
  // put setup code here
  mic = new p5.AudioIn();
  mic.start();

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
  
  soap = loadImage("images/soap.png");

}




function draw() 

{
  amt = map(pos.x, 0, windowWidth, -1.0, 1.0, true);
  let bgColor;
  if (pos.x > windowWidth / 2) {
    bgColor = lerpColor(colorMiddle, colorRight, amt);

  } else {
    bgColor = lerpColor(colorMiddle, colorLeft, -amt);
  }

  bgColor.setAlpha(30);
  fill(bgColor);
  rect(0, 0, windowWidth, windowHeight);
  // background(bgColor, 10);

  let targetPos = createVector(pos.x+yOrient, pos.y+xOrient);
  pos.x = targetPos.x * (1 - speed) + pos.x * speed;
  pos.y = targetPos.y * (1 - speed) + pos.y * speed;

  console.log(pos.x);
  console.log(xOrient);


  //mic---
  vol = mic.getLevel();
  soundx = map(vol, 0, 1, 1, 100);

  //main object
  //soap
  fill(0);
  noStroke();
  // ellipse(pos.x, pos.y, diameter+soundx);
  image(soap, pos.x+xOrient, pos.y+yOrient, 300,200);


  // //obstacles
  // for (let i = 0; i < obstacles.length; i++) {
  //   obstacles[i].move();
  //   obstacles[i].show();
  //   if (obstacles[i].isInvisible())
  //     obstacles[i].resetPos();

  //   if (obstacles[i].touch(pos.x, pos.y, diameter)) {
  //     diameter -= 1;
  //     // window.location.reload(false);
  //   }
  // }


  //freezer
    Freezer1.show();
    if (Freezer1.isInvisible())
      Freezer1.resetPos();

    if (Freezer1.touch(pos.x, pos.y, diameter)) 
    {
      diameter -= 1;
      // window.location.reload(false);
    }
  
  
  
  
  if (millis() > 10000 && (pos.x < diameter * 2)) 
  {
    // alert('Left Player Wins')
    // window.location.reload(false);
  }

  if (millis() > 10000 && (pos.x > windowWidth - diameter * 2)) 
  {
    // alert('Right Player Wins');
    // window.location.reload(false);
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





  

  const params = new URLSearchParams(new URL(window.location.href).search.slice(1));
  const relative = !!Number(params.get("relative"));
  const coordinateSystem = params.get("coord");

  let container, sensor, camera, scene, renderer, model;

  initScene();
  if (navigator.permissions) {
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

  renderScene();

  function initScene() {
      container = document.createElement('div');
      // document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 200);
      camera.position.z = 10;

      scene = new THREE.Scene();

      // var ambientLight = new THREE.AmbientLight(0x404040, 6);
      // scene.add(ambientLight);

      var manager = new THREE.LoadingManager();
      var mtlLoader = new THREE.MTLLoader(manager);
      mtlLoader.setTexturePath('resources/');
      mtlLoader.load('resources/phone.mtl', materials => {
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load('resources/phone.obj', object => {
              model = object;
              scene.add(model);
        });
      });

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      }, false);

      document.addEventListener('mousedown', () => document.documentElement.requestFullscreen());
      document.addEventListener('fullscreenchange', () => {
          if (document.fullscreenElement != null) {
              screen.orientation.lock("natural")
          }
      });
  }

  function initSensor() 
  {
      const options = { frequency: 60, coordinateSystem };
      console.log(JSON.stringify(options));
      sensor = relative ? new RelativeOrientationSensor(options) : new AbsoluteOrientationSensor(options);
      
      //Orientation values
      sensor.onreading = function() 
      {
          model.quaternion.fromArray(sensor.quaternion);
          // console.log(sensor.quaternion);
          console.log(model.quaternion.fromArray(sensor.quaternion));
          console.log(model.quaternion.fromArray(sensor.quaternion)._w);

          xOrient = model.quaternion.fromArray(sensor.quaternion).inverse()._x;
          yOrient = model.quaternion.fromArray(sensor.quaternion).inverse()._y;

          pos.x += xOrient;
          pos.y += yOrient;

          draw();
      }


      sensor.onerror = (event) => {
        if (event.error.name == 'NotReadableError') {
          console.log("Sensor is not available.");
        }
      }
      sensor.start();
  }

  function renderScene() {
      requestAnimationFrame(renderScene);
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
  }

  let log = console.log;
  console.log = (message, ...rest) => {
      const div = document.querySelector('#console');
      // div.innerText = message;
      log.call(console, message, ...rest);
  }
            
