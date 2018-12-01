
//Mario Dcunha

var mode=0, max=30, maxElement=0, tempMax=30;
var r=0, temp=0, tempc='', c=0;
var count=0;
var mainArray = [];
var me = "Mario Dcunha";


function Quote(quote, author) 
{
  this.quote = quote;
  this.author = author;
}


var allArrays;

var marioism = [];
var inspiration = [];
var design = [];
var intuit = [];
var parsons = [];

/*





*/

//MARIOISM
marioism[0] = new Quote("Life’s funny, but I’m funnier!", "Everyday.");
marioism[1] = new Quote("I was at the Grand Central Station, roaming around the Holiday Market. A kid was passing by with his other hand being held by his parent. He randomly looked to me on the side, and screamed, 'Happy Holidays!'", "Friday, November 16th, 2018");
marioism[2] = new Quote("I was already late for my class, and so was rushing to get out of the station, walking swiftly. In that rush, a young girl, probably a year or two younger than me, was walking against my direction, and she just stopped me. She said 'Hey, do you know where I can find the brightest smile around here?' I could feel a bubble burst in my mind with that question. And then I was like, wait, what...? and I smiled widely! She immediately said 'Ah! There it is!' And she just took off!", "April, 2018");




//ADD ARRAY HERE
allArrays = [marioism, inspiration, design, intuit, parsons];


//WebCam
var webvideo = $('#myvideo');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) 
{
 	navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) 
 	{
 		webvideo.srcObject = stream;
 		// $('#myvideo')[0].play();
 		// $('#myvideo')[0].load();
 		$('#myvideo')[0].play();
 		console.log("web cam loaded");
 	})
 	.catch(function(error) 
 	{
    	console.log("Something went wrong with WebCam!");
  	});
}




function init()
{

  for(let i=0; i<allArrays.length; i++)
  {
    findLongestQuote(allArrays[i]);
  }

  let a = max/6.5;
  quoteMargin = max/8.5;

  $('#navbuttons').css("top",quoteMargin+"em");

  mode=0;
  loopButtons('#777','');
  randomQuote();
  buttonHover(0);
  buttonHover(1);
  buttonHover(2);
  buttonHover(3);
  buttonHover(4);

}

function findLongestQuote(objArray)
{

  for(let i=0; i<objArray.length; i++)
  {
      tempMax = objArray[i].quote.length;
      if(tempMax > max)
      {
        max = tempMax;
        maxElement = i;
      }
  }
}

function write(serial,quoteObject)
{
    $('#quote').text(quoteObject[serial].quote);
    $('#author').text(quoteObject[serial].author);

    // let quoteMargin = max - quoteObject[serial].quote.length;
    // console.log(quoteMargin);
    // $('#quotes').css("margin-bottom",quoteMargin/15+"vh");
    // $('#quotes').css("transition","0.5s");
}

function randomQuote()
{
  setMode();
  $('#quote').css('transition', 'all 0.5s');

  temp = r;
  while(temp == r)
    r = randomInt(count);
  
  write(r,mainArray);

}


function back()
{
  setMode();
  $('#quote').css('transition', 'all 0.5s');

  if(r > 0) r--;
  else      r=count-1;

  write(r,mainArray);

}


function next()
{
  setMode();
  $('#quote').css('transition', 'all 0.5s');

  if(r < count-1) r++;
  else            r=0;
  
  write(r,mainArray);

}



function setMode()
{
  switch (mode)
  {
    case 0: 
    count     = marioism.length; 
    mainArray = marioism; 
    fontchange('Satisfy', '1.6em', 100, '45px', 'black', 200, 245);
    break;

  }

}


function resetButtons()
{
  switch(mode)
  {
    case 0: loopButtons('#777',''); break;

    case 1: loopButtons('#fff',''); break;

    case 2: loopButtons('#fff',''); break;

    case 3: loopButtons('#fff',''); break;

    case 4: loopButtons('#000',''); break;
  }
  if(mode!=4)
  {
    $('#b4').text('#parsons');
  }
  if(mode!=3)
  {
    $('#b3').text('#intuit');
  }

}


function loopButtons(textcolor, bgcolor)
{
    for(i=0; i<5; i++)
    {
      $('#b'+i).css('color', textcolor);
      // $('#b'+i).css('background-color', bgcolor);   
      $('#b'+i).css('font-family', 'Lato');
      $('#b'+i).css('padding-bottom', '10px');
      $('#b'+i).css('transition', '0.3s');    
      $('#b'+i).css('font-size', '15px');
    }
}


function buttonHover(buttonMode)
{
  $("#b"+buttonMode).mouseenter(
  function()
  {
    if($("#b"+buttonMode).css('background-color')=='#009eed' || mode==buttonMode)
    {
    }
    else
    {
      tempc = $("#b"+buttonMode).css('color');
      $("#b"+buttonMode).css('color','#fff');
    }
  });


  $("#b"+buttonMode).mouseleave(
  function()
  {
    if(mode==buttonMode)
    {
    }
    else
    {
      // $("#b"+buttonMode).css('background-color','rgba(0, 0, 0, 0)');
      $("#b"+buttonMode).css('color',tempc);
    }
  });

}




function modeSwitch(changeMode)
{
  mode = changeMode;
  resetButtons();
  setMode();
  randomQuote();
}




function fontchange(fontFamily, fontSize, fontWeight, lineHeight, fontColor, bgl, bgh)
{
	fontFamily = 'IM Fell DW Pica';
	fontColor = '#4d0000';

    $('#quote').css('font-family', fontFamily);
    if(mode==4)
    {
      $('#author').css('text-transform', 'uppercase');
      $('#author').css('font-family', 'Nueue-Black');
      $('#author').css('font-size', '1em');
    }
    else
    {
      $('#author').css('font-family', fontFamily);
      $('#author').css('text-transform', 'none');
      $('#author').css('font-size', '1.3em');
      // $('#author').css('font-weight', '400');
    }
    $('#quote').css('font-size', fontSize);
    $('#quote').css('font-weight', fontWeight);
    $('#quote').css('color', fontColor);
    $('#author').css('color', fontColor);
    $('#quote').css('line-height', lineHeight);

    if(mode==0 || mode==4)
    {
      c = randomMath(bgl,bgh);
      // $('body').css('background-color','rgb('+c+','+c+','+c+')');
    }
}




function  randomMath(l, h)
{
  return Math.floor(Math.random() * (h - l)) + l;
}

function randomInt(n) 
{
  return Math.floor(Math.random() * (n - 0)) + 0;
}

