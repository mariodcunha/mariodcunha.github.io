
//RandomNoise

//Mario Dcunha

//mariodcunha.com
//mariodcunha.github.io



//Global Variables

var n=1, change=1;

var toggleLabel, mode="Noise"; 

var canvas; //for convenience and portabliilty


function setup() 
{
    canvas = createCanvas(window.innerWidth, window.innerHeight);

    labelSetup();

    //add your other code here

}


function draw() 
{

  background(255);
  
  toggleLabel.html(mode);

  //add other code here

}



function labelSetup() 
{
    canvas.parent('container');

    //Please note: This if if you want to add HTML elemts on your p5 page.
    //Please add the CSS along with it to keep it clean.
    //Basic HTML and CSS given below.

    toggleLabel = createDiv('');
    toggleLabel.html("Noise");
    toggleLabel.parent('info');

    var controlLabel = createDiv('');
    controlLabel.html("Click to Toggle. Scroll to Control.");
    controlLabel.parent('instruction');

}



function RandomNoise(lowLimit, highLimit, factor)
{

    if(n==0) //Pure Random State
    {
        return random(lowLimit,highLimit)+factor;
    }

    else if(n==1) //Pure Noise State
    {
        return noise(lowLimit,highLimit)+factor;  
    }
    else if(n==2) //Noise x Random
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
    //Increments or Decrements of the attribute you want to control
    change+= event.delta; 
}



//HTML

/*

<html>
<head>
   
   <title>Bubbles - Noise</title>

    <script src="libraries/p5.js" type="text/javascript"></script>
    <script src="libraries/p5.dom.js" type="text/javascript"></script>
    <!-- <script src="libraries/p5.sound.js"></script> -->
    <script type="text/javascript" src="sketch.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="shortcut icon" href="https://mariodcunha.github.io/images/favicon.png" type="image/x-icon">
  
</head>

<body>

  <div id='container'>
      <div id='info'>
      </div>

      <div id='instruction'>
      </div>

  </div>

</body>


</html>

*/



//CSS

/*

#container
{
    position: absolute;
    font-family: Lato;
    font-size: 15px;
}

#info
{
    position: absolute;
    background-color: rgba(200, 200, 200, 0.5);

    padding: 20px;
    margin: 2%;
    border-radius: 10%;

    transition: 0.3s;
}

#info:hover
{
    background-color: rgba(10, 10, 10, 0.9);
    color: rgb(250,250,250);
}


#instruction
{
    position: absolute;
    background-color: rgba(200, 200, 200, 0.5);

    padding: 20px;
    margin: 2%;
    border-radius: 10px;
    transition: 0.3s;
    right: 2%;
}

#instruction:hover
{
    background-color: rgba(10, 10, 10, 0.9);
    color: rgb(250,250,250);
}

*/

