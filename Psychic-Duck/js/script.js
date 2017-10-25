/* Create a "psychic duck" that gives out a random reply from a list of 
preset replies in an array, while changing expressions. Steps are numbered. 
*/

// -- 1
// Create variables. 



var replies = ["Yes", "No", "How should I know?", "Feed me and then I'll tell you.", "Maaaaybe.", "Don't feel like answering you", "Hell ya!","No clue sonny!","Oh Definitely!","Waaaaat..."]; 
// list of replies, order must correspond with the right sound file

var sounds = ["yes", "no", "how", "feedme", "maybe","dont","hellya","noclue","ohdeff","wut"]; // name of sound files

var eyes = ["eyes4", "eyes6", "eyes2", "eyes4", "eyes1", "eyes7", "eyes4", "eyes6", "eyes5", "eyes3"]; // name of image files for eyes
var beak = ["beak1", "beak3", "beak3", "beak2", "beak4", "beak3", "beak1", "beak3", "beak1", "beak2"]; // name of image files for eyes

var randomNum = 0; // this variable will hold the current randomized number to pull from the replies array

var randomEyes = 0; // variable that holds random number to pull a new eye expression, separate variable because the amount of eyes exceed the amount of replies
var audioElement;

// create function to play sound based off of random variable being passed
// function playSounds() 
// {

// }



// create a function that returns a random number within the limits of the array length. 
// function passes name of the array, so we can use one function for different arrays with different lengths
function randomNumGenerator(arrayName) 
{ 
	var choice, currentChoice;

	currentChoice = randomNum;
	
	while(randomNum == currentChoice)
	randomNum = Math.floor(Math.random()*arrayName.length);

	return randomNum;
}



// -- Create a function to bring the duck to life.
function answerQuestion() 
{

	randomNum = randomNumGenerator(replies); 
	
	selectedVoice = sounds[randomNum];
	$('#voice').attr('src', 'sound/'+selectedVoice+'.mp3');

	selectedReply = replies[randomNum];
	$('#speech').text(selectedReply);	

	selectedEyes = eyes[randomNum];
	$('#eyes').css('background-image','url(style/img/'+selectedEyes+'.png');

	selectedBeak = beak[randomNum];
	$('#beak').css('background-image','url(style/img/'+selectedBeak+'.png');

}

// -- step 3
// init function will initialize the rest of the functions
function init() 
{
	 // check to see if script is linked properly and running
	console.log('Hello World');


}

// -- step 2
// wait until dom is loaded then run init function
$(document).ready(function()
{
	init();
}); 




