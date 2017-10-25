
//Voice API from talater.com/annyang/
if (annyang) {

  var commands = 
  {
    'hey monkey is Todd a good *a': function() 
    {
      talkPos();
    },
    'hey monkey is Todd a bad *a': function() 
    {
      talkNeg();
    },
    'hey monkey Mario is awesome *a': function() 
    {
      talkGuess();
    },
    'hey monkey *a': function() 
    {
      answerQuestion();
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

var positive = [0,4,6,8];
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
  selectedVoice = sounds[randomNum];
  $('#voice').attr('src', 'sound/'+selectedVoice+'.mp3');

  selectedReply = replies[randomNum];
  $('#speech').text(selectedReply); 

  selectedEyes = eyes[randomNum];
  $('#eyes').css('background-image','url(style/img/'+selectedEyes+'.png');

  selectedBeak = beak[randomNum];
  $('#beak').css('background-image','url(style/img/'+selectedBeak+'.png');
}


function talkPos() 
{  
  randomNum = positive[randomNumGenerator(4)]; 
  console.log("positive");
  talk();
}

function talkNeg() 
{  
  randomNum = 1;
  console.log("negative");
  talk();
}
function talkGuess() 
{  
  randomNum = guessso[randomNumGenerator(3)]; 
  console.log("guess");
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




