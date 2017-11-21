
var choice, currentChoice, selectedBuiltBy, selectedBuiltWhen;

var wonderTitle = ['Petra, Jordan', 'The Taj Mahal, India', 'The Colossuem, Italy', 'The Great Wall of China', 'Chichen Itza, Mexico', 'Cristo Ridentor, Brazil', 'Machhu Pichhu, Peru', 'Pyramids of Egypt', 'Hanging Gardens of Babylon', 'Mausoleum at Halicarnassus', 'Statue of Zeus', 'Temple of Artemis', 'Colossus of Rhodes', 'Lighthouse at Alexandria','',''];

var wonderTitleFont = ['120px', '110px', '110px', '100px', '110px', '100px', '110px', 
						'120px', '80px', '80px', '120px', '120px', '110px', '90px','0px','0px'];

var wonderImage = ['images/new-wonder-0.jpg', 'images/new-wonder-1.jpg', 'images/new-wonder-2.jpg', 'images/new-wonder-3.jpg', 'images/new-wonder-4.jpg', 'images/new-wonder-5.jpg', 'images/new-wonder-6.jpg', 'images/new-wonder-7.jpg', 'images/new-wonder-8.jpg', 'images/new-wonder-9.jpg', 'images/new-wonder-10.jpg', 'images/new-wonder-11.jpg', 'images/new-wonder-12.jpg', 'images/new-wonder-13.jpg','images/ancient.jpg','images/new.jpg'];

var builtBy = ['The Nabataeans', 'Emperor Shah Jahan', 'Titus', 'The Ming Dynasty', 'The Mayans', 'A group of Sculptors', 'The Incas', 'Pharaohs', 'King Nebuchadnezzar II', 'Queen Artemisia II', 'Phidias', 'Chersiphron', 'Chares', 'Ptolemaics','',''];

var builtWhen = ['5th Cent. BC', '1653', '80 AD', 'Bulti in 1398 AD', '600 AD', '1931', '1450 AD', '2600 BC', '290 BC', '351 BC', '435 BC', '800 BC', '280 BC', '280 BC','',''];

var intro = "Welcome. Click on 'NEW' or 'WORLD' in the main title to explore and have fun! Click any text to surf through the wonders."

var tomb = [0,1,7,9];

var gift = [1,8,9];
var temple = [4,10,11];
var statue = [5,10,12];

var guard = [3,13];
var entertain = [2,8];
var ruins = [6,10]; 


// Pyramids of Egypt - tomb
// Hanging Gardens of Babylon - entertain, gift
// Mausoleum at Halicarnassus - tomb, gift
// Statue of Zeus - statue temple ruins
// Temple of Artemis - temple
// Colossus of Rhodes - statue
// Lighthouse at Alexandria - guard


var voice = ['sound/sound-0.mp3', 'sound/sound-1.mp3', 'sound/sound-2.mp3', 'sound/sound-3.mp3', 'sound/sound-4.mp3', 'sound/sound-5.mp3', 'sound/sound-6.mp3', 'sound/sound-7.mp3','sound/sound-8.mp3','sound/sound-9.mp3','sound/sound-10.mp3','sound/sound-11.mp3','sound/sound-12.mp3','sound/sound-13.mp3','sound/sound-A.mp3','sound/sound-N.mp3',];

var click = false;



//Voice API from talater.com/annyang/
if (annyang) 
{

  var commands = 
  {
    'change new': function() 
    {
    	currentChoice = choice;
		
		while(choice == currentChoice)
			choice = Math.floor(Math.random()*7); build();

    },
    'change old': function() 
    {
    	currentChoice = choice;
		
		while(choice == currentChoice)
			choice = Math.floor(Math.random() * (13 - 7 + 1) ) + 7; build();
    },

    'hashtag *word': function() 
    {
      checkHashArray(word);
      console.log(word);
    },

};

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

	
function begin()
{
	choice = 15;

	build();
}



function choose()
{
	currentChoice = choice;
	
	if($('#toggle-word').text()=='NEW')
	{
		while(choice == currentChoice) //to prevent immediate repeat of choice
			choice = Math.floor(Math.random()*7);
	}
	else
	{
		while(choice == currentChoice)
			choice = Math.floor(Math.random() * (13 - 7 + 1) ) + 7;
	}

	build();
}



function build()
{	

	if(choice == 15)
	{
		$('#main-title').css('font-family','Lato');
		$('#toggle-word').text('NEW');
	}
		else if (choice == 14)
	{
		$('#main-title').css('font-family','Times New Roman');
		$('#toggle-word').text('OLD');
	}

	console.log(choice);

	selectedWonderTitle = wonderTitle[choice];
	selectedWonderTitleFont = wonderTitleFont[choice];
	selectedWonderImage = wonderImage[choice];
	
	if(choice <14)
	{
		selectedBuiltBy = "Built by: "+builtBy[choice];
		selectedBuiltWhen = "   |   Built in: "+builtWhen[choice];
	}
	else
	{
		selectedBuiltBy = intro;
		selectedBuiltWhen = "";
	}
	
	selectedVoice = voice[choice];
	$('#narration-sound').attr('src', selectedVoice);
	
	$('#wonder-title').text(selectedWonderTitle);
	$('#wonder-title').css('font-size',selectedWonderTitleFont);

	$('body').attr('background',selectedWonderImage);
	$('#built-by').text(selectedBuiltBy);
	$('#built-in').text(selectedBuiltWhen);
	

	//choosing black or white for main title
	if(choice>3 && choice <7 || choice==8 || (choice>12 && choice<16))
		$('#main-title').css('color','#333333');

	else
		$('#main-title').css('color','white');


	switch(choice) 
	{
	    case 0: //Petra
	        show('#hash1','#Tomb'); hide('#hash2'); hide('#hash3'); break;
	    
	    case 1: //Taj Mahal
	        show('#hash1','#Tomb'); show('#hash2','#Gift'); hide('#hash3'); break;
		
		case 2: //Colosseum
	        show('#hash1','#Entertain'); hide('#hash2'); hide('#hash3'); break;

	    case 3: //Great Wall
	        show('#hash1','#Guard'); hide('#hash2'); hide('#hash3'); break;

	    case 4: //Chichen Itza
	        show('#hash1','#Temple'); hide('#hash2'); hide('#hash3'); break;

	    case 5: //Cristo Ridentor
	        show('#hash1','#Statue'); hide('#hash2'); hide('#hash3'); break;

	    case 6: //Macchu Picchu
	        show('#hash1','#Ruins'); hide('#hash2'); hide('#hash3'); break;

	    case 7: //Pyramids
	        show('#hash1','#Tomb'); hide('#hash2'); hide('#hash3'); break;

	    case 8: //Hanging Gardens
	        show('#hash1','#Entertain'); show('#hash2','#Gift'); hide('#hash3'); break;

	    case 9: //Mausoleum
	        show('#hash1','#Tomb'); show('#hash2','#Gift'); hide('#hash3'); break;

	    case 10: //Statue of Zeus
	        show('#hash1','#Statue'); show('#hash2','#Temple'); show('#hash3','#Ruins'); break;

	    case 11: //Temple of Artemis
	        show('#hash1','#Temple'); hide('#hash2'); hide('#hash3'); break;

		case 12: //Colossus of Rhodes
	        show('#hash1','#Statue'); hide('#hash2'); hide('#hash3'); break;

	    case 13: //Lighthouse of Alexandriax`
	        show('#hash1','#Guard'); hide('#hash2'); hide('#hash3'); break;

	    case 14: //Ancient Map
	        hide('#hash1'); hide('#hash2'); hide('#hash3'); break;

	    case 15: //New Map
			hide('#hash1'); hide('#hash2'); hide('#hash3'); break;


	}

}


function hash1Change()
{
	//'this' was not working and was throwing blank
	switch($('#hash1').text()) 
	{
	    case '#Tomb':
	        checkHashArray(tomb);
	        break;
	    case '#Entertain':
	        checkHashArray(entertain);
	        break;
	    case '#Guard':
	        checkHashArray(guard);
	        break;
	    case '#Temple':
	        checkHashArray(temple);
	        break;
	    case '#Statue':
	        checkHashArray(statue);
	        break;
	    case '#Ruins':
	        checkHashArray(ruins);
	        break;
	    }
}


function hash2Change()
{
	if($('#hash2').text()=="#Gift")
		checkHashArray(gift);

	else
		checkHashArray(temple);
}


function hash3Change()
{
	if($('#hash3').text()=="#Ruins")
		checkHashArray(ruins);
}




function checkHashArray(array)
{
	currentChoice = choice;
	
	while(choice == currentChoice)
		choice = array[Math.floor(Math.random()*(array.length))];

	//choosing reverse build option from element (wonder) to theme
	if(choice>=0 && choice <7)
	{
		$('#toggle-word').text('NEW');
		$('#main-title').css('font-family','Lato');
		$('#wonder-title').css('font-family','Lato');
	}
	else
	{
		$('#toggle-word').text('OLD');
		$('#main-title').css('font-family','Times New Roman');
		$('#wonder-title').css('font-family','Times New Roman');
	}

	build();
}




$('#built-info').mouseenter(
	function()
	{
		if(choice ==15 || choice ==14)
		{
			//console.log('mouseenter');
	  		$('#toggle-word').css('font-size','30px');
	  		$('#toggle-word').css('transition','0.3s');
	  		$('#toggle-word').css('opacity','1.0');
	  		$('#toggle-word').css('color','black');

	  		$('#world').css('font-size','35px');
	  		$('#world').css('transition','0.3s');
	  		$('#world').css('opacity','1.0');
	  		$('#world').css('color','black');
	  	}

  	})

$('#built-info').mouseleave(
	function()
	{
		//console.log('mouseenter');
  		$('#toggle-word').css('font-size','17px');
  		$('#toggle-word').css('color','inherit');

  		$('#world').css('font-size','17px');
  		$('#world').css('color','inherit');

  	})




$('#toggle-word').mouseenter(
	function()
	{
		click = false;

		//console.log('mouseenter');

  		if($(this).text()=='NEW')
  		{
  			$(this).text('OLD');
  			$(this).css('font-family','Times New Roman');
  		}
  		else if($(this).text()=='OLD')
  		{
  			$(this).text('NEW');
  			$(this).css('font-family','Lato');
  		}
  	})


$('#toggle-word').mouseleave(
	function()
	{
		//console.log('mouse leaveing');
		if(click==false)
		{
			if($(this).text()=='NEW')
	  		{
	  			$(this).text('OLD');
	  			$(this).css('font-family','Times New Roman');
	  		}
	  		else if($(this).text()=='OLD')
	  		{
	  			$(this).text('NEW');
	  			$(this).css('font-family','Lato');
	  		}
		}
  	})


$('#toggle-word').click(
	function()
	{
		//console.log('clicked');

		click = true;
		// console.log('hovering');

  		if($(this).text()=='NEW')
  		{
  			$(this).text('NEW');
  			$(this).css('font-family','Lato');
  			$('#main-title').css('font-family','Lato');
  			$('#wonder-title').css('font-family','Lato');
  			choose();
  		}
  		else if($(this).text()=='OLD')
  		{
  			$(this).text('OLD');
  			$(this).css('font-family','Times New Roman');
  			$('#main-title').css('font-family','Times New Roman');
  			$('#wonder-title').css('font-family','Times New Roman');
  			choose();
  		}
  	})


$('#world').click(
	function()
	{
  		if($('#toggle-word').text()=='NEW')
  		{
  			$('#toggle-word').css('font-family','Lato');
  			choice = 15; build();
  		}
  		else if($('#toggle-word').text()=='OLD')
  		{
  			$('#toggle-word').css('font-family','Times New Roman');
  			choice = 14; build();
  		}
  	})



function show(hashElement, word)
{
	$(hashElement).text(word); 
	$(hashElement).css('visibility','visible');
}


function hide(hashElement)
{
	$(hashElement).text(''); 
	$(hashElement).css('visibility','hidden');
}


function changeWorld()
{
	if(choice<14)
	{
		choice = 14; 
		build();
	}
	else if(choice==14)
	{
		choice =15; build();
	}
	else
	{
		choice =14; build();
	}

}









