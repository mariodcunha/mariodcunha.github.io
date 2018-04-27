



let synth;
var waves = ['triangle','sine','square'];

function setup() 
{
    createCanvas(window.innerWidth, window.innerHeight);

    // const startButton = createButton('start');
    // startButton.mousePressed(start);

    imageMode(CENTER);
    diskImage = loadImage("disk.png"); 

}

function draw() 
{
    background(50);
    image(diskImage, window.innerWidth/2-window.innerWidth/6, window.innerHeight/2, window.innerWidth/3,window.innerWidth/3);
    image(diskImage, window.innerWidth/2+window.innerWidth/6, window.innerHeight/2, window.innerWidth/3,window.innerWidth/3);
}


function start() 
{

    var melody=[];    
    var rhythm=randomInt(4,16);

    synth = new SimpleSynth(waves[randomInt(0,waves.length-1)]);

    
    for(let i=45, j=0; j<40; i=i+randomInt(-4,4), j++)
    {
        melody[j] = [i,rhythm/16];
    }
   
    synth.playNotes(melody);

}

function mousePressed()
{
    start();
}


function randomInt(l,h)
{
    return Math.floor(random(l,h));
}





