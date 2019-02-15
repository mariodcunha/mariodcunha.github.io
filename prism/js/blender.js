var scene, camera, renderer;
var controls, guiControls, datGUI;
var stats;
var dae, light;
var SCREEN_WIDTH, SCREEN_HEIGHT;

var color;
var mouseX = 0;
var mouseY = 0;

$(function(){
	
	var loader = new  THREE.ColladaLoader();
	loader.options.convertUpAxis = true;
	loader.load('M.dae', function (collada){
		dae = collada.scene;
		dae.scale.x = dae.scale.y = dae.scale.z = 2.5;
		dae.traverse(function (child){
			if (child.colladaId == "Cube"){
				child.traverse(function(e){
					e.castShadow = true;
					e.receiveShadow = true;
					// if (e.material instanceof THREE.MeshPhongMaterial){
					// 	e.material.needsUpdate = true;
					// }
				});
			}
			else if (child.colladaId == "Plane"){
				child.traverse(function(e){
					e.castShadow = true;
					e.receiveShadow = true;
				});
			}	
		});
		dae.updateMatrix();
		init();
		animate();
		console.log(scene);
	});	
	function init(){
		/*creates empty scene object and renderer*/
		scene = new THREE.Scene();
		camera =  new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 500);
		renderer = new THREE.WebGLRenderer({antialias:true});
		
		renderer.setClearColor(0x000000);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.shadowMapEnabled= true;
		renderer.shadowMapSoft = true;
		
		/*add controls*/
		controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.addEventListener( 'change', render );
					
		camera.position.x = 0;
		camera.position.y = 70; //z
		camera.position.z = 60; //y
		camera.lookAt(scene.position);

		scene.add(dae);
		/*datGUI controls object*/
		guiControls = new function(){
			this.rotationX  = 0.0;
			this.rotationY  = 0.0;
			this.rotationZ  = 0.0;
			
			this.lightX = 19;
			this.lightY = 100;
			this.lightZ = 150;
			this.intensity = 3.5;		
			this.distance = 700;
			this.angle = 1.6;
			this.exponent = 38;
			this.shadowCameraNear = 34;
			this.shadowCameraFar = 2635;
			this.shadowCameraFov = 68;
			this.shadowCameraVisible=false;
			this.shadowMapWidth=512;
			this.shadowMapHeight=512;
			this.shadowBias=0.00;
			this.shadowDarkness=0.11;		

		}
		/*adds spot light with starting parameters*/
		light = new THREE.SpotLight(0xff0000, 0.5);
		light.castShadow = true;
		light.position.set (0, 1, 0);
		light.intensity = guiControls.intensity;		
		light.distance = guiControls.distance;
		light.angle = guiControls.angle;
		light.exponent = guiControls.exponent;
		light.shadowCameraNear = guiControls.shadowCameraNear;
		light.shadowCameraFar = guiControls.shadowCameraFar;
		light.shadowCameraFov = guiControls.shadowCameraFov;
		light.shadowCameraVisible = guiControls.shadowCameraVisible;
		light.shadowBias = guiControls.shadowBias;
		light.shadowDarkness = guiControls.shadowDarkness;
		scene.add(light);

		// light2 = new THREE.SpotLight(0x040404);
		// light2.castShadow = true;
		// light2.position.set (-2, 0, -1);
		// light2.intensity = guiControls.intensity;		
		// light2.distance = guiControls.distance;
		// light2.angle = guiControls.angle;
		// light2.exponent = guiControls.exponent;
		// light2.shadowCameraNear = guiControls.shadowCameraNear;
		// light2.shadowCameraFar = guiControls.shadowCameraFar;
		// light2.shadowCameraFov = guiControls.shadowCameraFov;
		// light2.shadowCameraVisible = guiControls.shadowCameraVisible;
		// light2.shadowBias = guiControls.shadowBias;
		// light2.shadowDarkness = guiControls.shadowDarkness;
		// scene.add(light2);


		/*adds controls to scene*/
		// datGUI = new dat.GUI();
		// datGUI.add(guiControls, 'lightX',-60,180);	
		// datGUI.add(guiControls, 'lightY',0,180);	
		// datGUI.add(guiControls, 'lightZ',-60,180);
		// datGUI.add(guiControls, 'intensity',0.01, 5).onChange(function(value){
		// 	light.intensity = value;
		// });		
		// datGUI.add(guiControls, 'distance',0, 1000).onChange(function(value){
		// 	light.distance = value;
		// });	
		// datGUI.add(guiControls, 'angle',0.001, 1.570).onChange(function(value){
		// 	light.angle = value;
		// });		
		// datGUI.add(guiControls, 'exponent',0 ,50 ).onChange(function(value){
		// 	light.exponent = value;
		// });
		// datGUI.add(guiControls, 'shadowCameraNear',0,100).name("Near").onChange(function(value){		
		// 	light.shadowCamera.near = value;
		// 	light.shadowCamera.updateProjectionMatrix();		
		// });
		// datGUI.add(guiControls, 'shadowCameraFar',0,5000).name("Far").onChange(function(value){
		// 	light.shadowCamera.far = value;
		// 	light.shadowCamera.updateProjectionMatrix();
		// });
		// datGUI.add(guiControls, 'shadowCameraFov',1,180).name("Fov").onChange(function(value){
		// 	light.shadowCamera.fov = value;
		// 	light.shadowCamera.updateProjectionMatrix();
		// });
		// datGUI.add(guiControls, 'shadowCameraVisible').onChange(function(value){
		// 	light.shadowCameraVisible = value;
		// 	light.shadowCamera.updateProjectionMatrix();
		// });
		// datGUI.add(guiControls, 'shadowBias',0,1).onChange(function(value){
		// 	light.shadowBias = value;
		// 	light.shadowCamera.updateProjectionMatrix();
		// });
		// datGUI.add(guiControls, 'shadowDarkness',0,1).onChange(function(value){
		// 	light.shadowDarkness = value;
		// 	light.shadowCamera.updateProjectionMatrix();
		// });
		// datGUI.close();

		$("#webGL-container").append(renderer.domElement);

		/*stats*/
		// stats = new Stats();		
		// stats.domElement.style.position = 'absolute';
		// stats.domElement.style.left = '0px';
		// stats.domElement.style.top = '0px';		
		// $("#webGL-container").append( stats.domElement );		
	}


	function render() {
		dae.traverse(function (child){

			if (child.colladaId == "Cube"){
				var rotationy = mouseX * 0.04 / window.innerWidth + 0.002;
				var rotationz = mouseX * 0.01 / window.innerWidth + 0.001;

				child.rotation.y  += rotationy;
				child.rotation.z  += rotationz;
			}
			else if (child.colladaId == "Plane"){
				child.rotation.y  -= 0.001;
			}	
		});		

		light.position.x = guiControls.lightX;
		light.position.y = guiControls.lightY;
		light.position.z = guiControls.lightZ;
	
	}
	
	function animate(){

		$(window).on('mousemove', function(event){
			mouseX = event.clientX;
			mouseY = event.clientY;
			light.color.setRGB( Math.random(), Math.random(), Math.random());
		});

		requestAnimationFrame(animate);
		render();
		// stats.update();		
		renderer.render(scene, camera);
	}
});


$(window).resize(function(){

	SCREEN_WIDTH = window.innerWidth;
	SCREEN_HEIGHT = window.innerHeight;

	camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
	camera.updateProjectionMatrix();

	renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
});