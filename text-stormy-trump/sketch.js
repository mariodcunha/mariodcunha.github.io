
//Mario Dcunha

//http://stash.compciv.org/2017/realdonaldtrump-tweets.json

//The Story
/*

It was a dark and Stormy night.

#he was #verb on the #position/place.
#she #action the #noun at #him.
Suddenly, there was a #something.
#She/he soon #verbed #himself/herself/him/her
Who do you think Trumped the other?

*/

var mySounds=[], suddenSounds=[];
var amplitude;


function preload() 
{
  soundFormats('wav', 'mp3');

  for (let index=1; index<11; index++) 
  {
    mySounds[index] = loadSound('sound/type'+ index +'.wav');
    mySounds[index].amp(1);
  }
  stormSound = loadSound('sound/storm.mp3');
  
  for (let index=1; index<sentence3.length-1; index++) 
  {
    suddenSounds[index] = loadSound('sound/soundeffect-' + index + '.mp3');
  }

  bg = loadImage("images/trump.jpg");

}

function setup()
{

  amplitude = new p5.Amplitude();

  stormSound.play();
  stormSound.amp(0.5);

  //Volume of lightning;
  amplitude.setInput(stormSound);

  startTyping();
}


function draw()
{
  var level = amplitude.getLevel();
  var lightningLevel = map(level, 0, 1, 0, 150);

  console.log(lightningLevel);
  canvas = createCanvas(window.innerWidth/1.2, window.innerHeight);
  // background(bg);
  // tint(255,255,255, tintValue[randomInt(tintValue.length)]);
  tint(255,255,255, lightningLevel*10);
  image(bg, 0, 0, window.innerWidth/1.2, window.innerHeight);

}




var sentence1 = 
{
  "S": ["He was #Verb# on the #Position#. "],
  "Pronoun": ["He", "She"],
  "Verb": ["drooling with blood", "sweating and nervous", "gasping for breath", "trying to look terrifying", "insulting", "scheming", "charging", "bloody", "standing smelly", "bruised and hurt"],
  "Position": ["#Place# table", "3rd street, away from the #Place#", "Crooked Chair, inside #Place#", "#Place# hallway"],
  "Place": ["Oval Office", "White House", "Capitol Hill", "Pentagon", "Congress Balcony", "Golf Resort", "KFC Chicken", "Mexican Food Joint"]
}

var sentence2 = 
{
  "S": ["He yelled #Adjective# rants at her, however she #Action# the #Things# at him."],
  "Pronoun": ["he", "she"],
  "Adjective": ["nasty", "racist", "sexist", "xenophobic", "misogynistic", "bigoted", "clownish", "piggish", "climate change denying"],
  "Action": ["threw", "flung", "churned", "pushed", "lifted", "twisted"],
  "Things": ["knife", "tissue-rolls", "napkins", "water-bottles", "KFC Chicken", "part of the Border Wall", "chicken blood", "pee from Russian strippers", "whisky", "executive orders"],
  "Pronoun2": ["him", "her", "himself", "herself"]
}


var sentence3 = ["Suddenly, there was a ", "loud cry", "hurricane landfall. The windows shattered", "scream", "sound of an explosion", "gunshot", "Fake News alert", "jolt. The ground shook", "!"];

// var sentence3 = 
// {
//   "S": ["Suddenly, there was a #Event#!"],
//   "Event": ["sound of an explosion", "scream", "squeak", "sound of several footsteps", "gunshot", "Fake News alert", "jolt. The ground shook", ],
// }


var sentence4 = 
{
  "S": ["Despite being the #Adjective# he was, she immediately grabbed him by the '#Noun#'. "],
  "Adjective": ["Bad Hombre", "lunatic", "Xenophobe", "chauvinist", "villain", "demagogic clown", "dangerous ruler"],
  "Noun": ["tizzy", "dizzy", "trophy", "footsie", "tootsie"],
}

var Sentence = [];
var Story = [];
var i=0, j=0, k=0, m=0, n=0, x=0, y=0;
var speedOfTyping = 100, suddenText=0;
var tintValue = [0,0,0,0,0,0,0,0,10,100];

Sentence[0] = tracery.createGrammar(sentence1);
Sentence[1] = tracery.createGrammar(sentence2);
// Sentence[2] = tracery.createGrammar(sentence3);
// Sentence[2] = sentence3;
Sentence[3] = tracery.createGrammar(sentence4);


function startTyping()
{
    Story_0 = $('#headline0').text();
    Story_0 = "It was a dark and 'Stormy' night."

    type0();   
}

function typeWriter1()
{
    Story[0] = Sentence[0].flatten("#S#"); type1();   
}

function typeWriter2()
{   
    Story[1] = Sentence[1].flatten("#S#"); type2();
}

function typeWriter3()
{
    suddenText = randomInt(1,(sentence3.length)-1);
    Story[2] = sentence3[0] + sentence3[suddenText] + sentence3[(sentence3.length)-1];
    
    console.log(suddenText);
    
    type3();
}

function typeWriter4()
{   
    Story[3] = Sentence[3].flatten("#S#"); 
    type4();
}

function typeWriter5()
{   
    Story_last = "Who do you think managed to 'Trump' the other?"
    // Story_0 = "It was a dark and Stormy night."
    type5();   
}

function typewriterSound()
{
  var randomTypeWriterSound = randomInt(1,11);
  mySounds[randomTypeWriterSound].play();
  mySounds[randomTypeWriterSound].setVolume(1.0);

}

function type0() 
{

  if(x<Story_0.length) 
  {
    if(x<18 || x>24)
    {
      $('#headline0').append(Story_0.charAt(x++));
      typewriterSound();
    }  
    else if(x>=18 && x<=24)
    {
      $('<span id="stormy"></span>').appendTo('#headline0');
      $('#headline0').append(Story_0.charAt(x++));
      mySounds[randomInt(1,11)].play();
    }
    if(x>=18 && x<=24)
      setTimeout(type0, speedOfTyping*2);
    else
      setTimeout(type0, speedOfTyping);
  }
  else if(x>=Story_0.length)
      typeWriter1();
}




function type1() 
{
  if(j<Story[0].length) 
  {
    $('#headline1').append(Story[0].charAt(j++));
    mySounds[randomInt(1,11)].play();
    setTimeout(type1, speedOfTyping);
  }
  else if(j>=Story[0].length)
      typeWriter2();
}


function type2() 
{
  if(k<Story[1].length) 
  {
    $('#headline1').append(Story[1].charAt(k++));
    mySounds[randomInt(1,11)].play();
    // $('#voice').attr('src', 'sound/type'+randomMath(1,5)+'.wav');
    setTimeout(type2, speedOfTyping);
  }
  else if(k>=Story[1].length)
      typeWriter3();
}


function type3() 
{
  if(m<Story[2].length) 
  {
    $('#headline2').append(Story[2].charAt(m++));
    mySounds[randomInt(1,11)].play();

    if(m>=0 && m<=9)
      setTimeout(type3, speedOfTyping*2);
    else
      setTimeout(type3, speedOfTyping);
  }
  else if(m>=Story[2].length)
  {
      suddenSounds[suddenText].play();
      suddenSounds[suddenText].amp(0.7);
      typeWriter4();
  }
}


function type4() 
{
  if(n<Story[3].length) 
    {
      $('#headline3').append(Story[3].charAt(n++));
      mySounds[randomInt(1,11)].play();
      setTimeout(type4, speedOfTyping);
    }
  else if(n>=Story[3].length)
      typeWriter5();
}


function type5() 
{
  if(y<Story_last.length) 
  {
    $('#headline4').append(Story_last.charAt(y++));
    mySounds[randomInt(1,11)].play();    

    if(y>=29 && y<=34)
      setTimeout(type5, speedOfTyping*2);
    else
      setTimeout(type5, speedOfTyping);
  }
}



function  randomMath(min, max)
{
  return Math.floor(Math.random() * (max - min)) + min;
}



function  randomInt(l,h)
{
  return Math.floor(random(l,h));
}

















