

let synth;
var waves = ['triangle','sine','sawtooth','square'];

function setup() 
{
    createCanvas(400, 200);

    const startButton = createButton('start');
    startButton.mousePressed(start);

}

function draw() 
{
    background(50);
}


function start() 
{
    var melody=[];    
    var rhythm=randomInt(4,16);

    synth = new SimpleSynth(waves[randomInt(0,waves.length)]);

    
    for(let i=45, j=0; j<40; i=i+randomInt(-10,10), j++)
    {
        melody[j] = [i,rhythm/rhythm];
    }
   
    synth.playNotes(melody);

}


function randomInt(l,h)
{
    return Math.floor(random(l,h));
}
