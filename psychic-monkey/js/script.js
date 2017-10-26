//READ ME

/*

The monkey only responds to "Hey Monkey", just like "Hey Google"

Here are the possible tests:

'hey monkey did you watch Planet of the Apes'
NEGATIVE REPLY

'hey monkey banana'
POSITIVE REPLY

'hey monkey are you a real monkey'
IGNORANT REPLY

'hey monkey'
YES

'hey monkey *anythingelse'
RANDOM REPLY

The mouth moves wtih p5 Microphone input
Voice recognition is with API from talater.com/annyang
Facial changes with jQuery

*/



var vol, h, mic, beakWidth, beakHeight, wh, ww;
counter = 0;


function setup() 
{
  mic = new p5.AudioIn();
  mic.stop();
}


function looper()
{
  mic.getLevel();
  vol = mic.getLevel();

  wh = map(vol, 0, 1, 70, 80);
  ww = map(vol, 0, 1, 130, 150);
  //  $('#speech').text(vol);

  beakWidth = $('#beak').css('width');
  beakHeight = $('#beak').css('height');

  $('#beak').css('width', ww);
  $('#beak').css('height', wh);  
}

function readMe()
{
  if($('#readmeBox').css('visibility')=='visible')
    $('#readmeBox').css('visibility','hidden');
  else
    $('#readmeBox').css('visibility','visible');
  console.log("you can still listen to me");
}


//Voice API from talater.com/annyang/
if (annyang) {

  var commands = 
  {
    'hey monkey did you watch Planet of the Apes': function() 
    {
      talkNeg(); mic.stop();
    },
    'hey monkey banana': function() 
    {
      talkPos(); mic.stop();
    },

    'hey monkey are you a real monkey': function() 
    {
      talkGuess(); mic.stop();
    },
    'hey monkey': function() 
    {
      yes(); mic.stop();
    },

    'hey monkey *a': function() 
    {
      answerQuestion(); mic.stop();
    },

    // ,
    // 'get lost': function() 
    // {
    //   $('#speech').text(replies[9]);
    //   $('#voice').attr('src', 'sound/wut.mp3');
    // },
    // 'you are so cute': function() 
    // {
    //   $('#speech').text(replies[0]);
    //   $('#voice').attr('src', 'sound/yes.mp3');
    // },
    // 'Mario is awesome': function() 
    // {
    //   $('#speech').text(replies[8]);
    //   $('#voice').attr('src', 'sound/ohdeff.mp3');
    // }

    // },
    // 'fuck off': function() 
    // {
    //   $('#speech').text("Here take your TPS Report");
    //   $('#voice').attr('src', 'sound/wut.mp3');
    //   console.log("you can still listen to me");
    // }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}


var replies = ["Yes", "No", "How should I know?", "Feed me and then I'll tell you.", "Maaaaybe.", "Don't feel like answering you", "Hell ya!","No clue sonny!","Oh Definitely!","Waaaaat..."]; 

var positive = [0,0,6,8];
var negative = [1];
var guessso = [2,3,5];

var sounds = ["yes", "no", "how", "feedme", "maybe","dont","hellya","noclue","ohdeff","wut"]; // name of sound files

var eyes = ["eyes4", "eyes6", "eyes2", "eyes4", "eyes1", "eyes7", "eyes4", "eyes6", "eyes5", "eyes3"]; // name of image files for eyes
var beak = ["beak1", "beak3", "beak3", "beak2", "beak4", "beak3", "beak1", "beak3", "beak1", "beak2"]; // name of image files for beak

var randomNum = 0; // this variable will hold the current randomized number to pull from the replies array

var audioElement;


function randomNumGenerator(arrayName) 
{ 
	var choice, currentChoice;

	currentChoice = randomNum;
	
	while(randomNum == currentChoice)
	randomNum = Math.floor(Math.random()*arrayName.length);

	return randomNum;
}



function answerQuestion() 
{
	randomNum = randomNumGenerator(replies); 
  talk();
	
}

function talk()
{
  
  mic.start();
  looper();
  setInterval(looper, 50);
  
  selectedVoice = sounds[randomNum];
  $('#voice').attr('src', 'sound/'+selectedVoice+'.mp3');

  selectedReply = replies[randomNum];
  $('#speech').text(selectedReply); 

  selectedEyes = eyes[randomNum];
  $('#eyes').css('background-image','url(style/img/'+selectedEyes+'.png');

  selectedBeak = beak[randomNum];
  $('#beak').css('background-image','url(style/img/'+selectedBeak+'.png');

  mic.stop();
  mic.stop();

}


function talkPos() 
{  
  randomNum = positive[randomNumGenerator(positive)]; 
  console.log("positive");
  talk();
}

function talkNeg() 
{  
  randomNum = 1;
  console.log("negative");
  talk();
}

function yes() 
{  
  randomNum = 0;
  console.log("yes");
  talk();
}

function talkGuess() 
{  
  randomNum = guessso[randomNumGenerator(guessso)]; 
  console.log("guess"+randomNum);
  talk();
}


function init() 
{
	console.log('Hello World');
}

// wait until dom is loaded then run init function
$(document).ready(function()
{
	init();
}); 




