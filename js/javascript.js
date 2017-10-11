

var wonderTitle = ['Petra, Jordan', 'The Taj Mahal, India', 'The Colossuem, Italy', 'The Great Wall of China', 'Chichen Itza, Mexico', 'Cristo Ridentor, Brazil', 'Machhu Pichhu, Peru', 'Pyramids of Egypt', 'Hanging Gardens of Babylon', 'Mausoleum at Halicarnassus', 'Statue of Zeus', 'Temple of Artemis', 'Colossus of Rhodes', 'Lighthouse at Alexandria'];

var wonderTitleFont = ['120px', '110px', '110px', '100px', '110px', '100px', '110px', 
						'120px', '80px', '80px', '120px', '120px', '110px', '90px'];

var wonderImage = ['images/new-wonder-0.jpg', 'images/new-wonder-1.jpg', 'images/new-wonder-2.jpg', 'images/new-wonder-3.jpg', 'images/new-wonder-4.jpg', 'images/new-wonder-5.jpg', 'images/new-wonder-6.jpg', 'images/new-wonder-7.jpg', 'images/new-wonder-8.jpg', 'images/new-wonder-9.jpg', 'images/new-wonder-10.jpg', 'images/new-wonder-11.jpg', 'images/new-wonder-12.jpg', 'images/new-wonder-13.jpg'];

var builtBy = ['The Nabataeans', 'Emperor Shah Jahan', 'Titus', 'The Ming Dynasty', 'The Mayans', 'many sculptors', 'The Incas', 'Pharaohs', 'King Nebuchadnezzar II', 'Queen Artemisia II', 'Phidias', 'Chersiphron', 'Chares', 'Ptolemaics'];

var builtWhen = ['5th Cent. BC', '1653', '80 AD', 'Bulti in 1398 AD', '600 AD', '1931', '1450 AD', '2600 BC', '290 BC', '351 BC', '435 BC', '800 BC', '280 BC', '280 BC'];

var voice = ['sound/sound-0.mp3', 'sound/sound-1.mp3', 'sound/sound-2.mp3', 'sound/sound-3.mp3', 'sound/sound-4.mp3', 'sound/sound-5.mp3', 'sound/sound-6.mp3'];

var click = false;

$(document).ready(choose());

function choose()
{
	choice = Math.floor(Math.random()*7);
}


function change()
{
	if($('#toggle-word').text()=='NEW')
	{
		choice = Math.floor(Math.random()*7);
	}
	else
	{
		choice = Math.floor(Math.random() * (13 - 7 + 1) ) + 7;
	}

	console.log(choice);

	selectedWonderTitle = wonderTitle[choice];
	selectedWonderTitleFont = wonderTitleFont[choice];
	selectedWonderImage = wonderImage[choice];
	selectedBuiltBy = builtBy[choice];
	selectedBuiltWhen = builtWhen[choice];
	
	selectedVoice = voice[choice];

	$('#wonder-title').text(selectedWonderTitle);
	$('#wonder-title').css('font-size',selectedWonderTitleFont);

	$('body').attr('background',selectedWonderImage);
	$('#built-by').text(selectedBuiltBy);
	$('#built-in').text(selectedBuiltWhen);
	$('#narration-sound').attr('src', selectedVoice);

	if(choice>3 && choice <7 || choice==8 || choice==13)
	{
		$('#main-title').css('color','#333333');
		// console.log(choice+' black');
	}
	else
	{
		$('#main-title').css('color','white');
		// console.log(choice+' white');
	}


	switch(choice) 
	{
	    case 0:
	        $('#hash1').text('#Tombs');
	        $('#hash2').text('');
	        $('#hash3').text('');
	        break;
	    case 1:
	        $('#hash1').text('#Tomb');
	        $('#hash2').text('#Gift');
	        $('#hash3').text('');
	        break;
	    case 2:
	        $('#hash1').text('#Entertain');
	        $('#hash2').text('');
	        $('#hash3').text('');
	        break;
	    case 3:
	        $('#hash1').text('#Guard');
	        $('#hash2').text('');
	        $('#hash3').text('');
	        break;
	    case 4:
	        $('#hash1').text('#Temple');
	        $('#hash2').text('');
	        $('#hash3').text('');
	        break;
	    case 5:
	        $('#hash1').text('#Statue');
	        $('#hash2').text('');
	        $('#hash3').text('');
	        break;
	    case 6:
	        $('#hash1').text('#Ruins');
	        $('#hash2').text('');
	        $('#hash3').text('');
	        break;
	    case 7:
	        $('#hash1').text('#Tomb');
	        $('#hash2').text('');
	        $('#hash3').text('');
	        break;
	    case 8:
	        $('#hash1').text('#Gift');
	        $('#hash2').text('#Entertain');
	        $('#hash3').text('');
	        break;
	    case 9:
	        $('#hash1').text('#Tomb');
	        $('#hash2').text('#Gift');
	        $('#hash3').text('');
	        break;
	    case 10:
	        $('#hash1').text('#Statue');
	        $('#hash2').text('');
	        $('#hash3').text('');
	        break;
	    case 11:
	        $('#hash1').text('#Temple');
	        $('#hash2').text('');
	        $('#hash3').text('');
	        break;
	    case 12:
	        $('#hash1').text('#Statue');
	        $('#hash2').text('#Temple');
	        $('#hash3').text('#Ruins');
	        break;
	    case 13:
	        $('#hash1').text('#Guard');
	        $('#hash2').text('');
	        $('#hash3').text('');
	        break;

	}

	if($('#hash2').text()=='')
	{
		$('#hash2').css('visibility','hidden');
		$('#hash3').css('visibility','hidden');
		// console.log('2 and 3 is empty');
	}
	else if($('#hash3').text()=='')
	{
		$('#hash3').css('visibility','hidden');
		// console.log('only 3 is empty');
	}

}



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
  			change();
  		}
  		else if($(this).text()=='OLD')
  		{
  			$(this).text('OLD');
  			$(this).css('font-family','Times New Roman');
  			$('#main-title').css('font-family','Times New Roman');
  			$('#wonder-title').css('font-family','Times New Roman');
  			change();
  		}
  	})


