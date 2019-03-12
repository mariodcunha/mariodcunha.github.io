
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

marioism[2] = new Quote("I was already late for my class, and so was rushing to get out of the station, walking swiftly. In that rush, a young girl, probably a year or two younger than me, was marching against my direction, and she just stopped me. She said 'Hey, do you know where I can find the brightest smile around here?' I could feel a bubble burst in my mind with that question. And then I was like, wait, what...? and I smiled widely! She immediately said 'Ah! There it is!' And she just took off!", "April, 2018");

marioism[3] = new Quote("It took more than half an hour for the train to arrive! I was terribly late for my 2pm school meeting already, inevitably delayed by at least 20 minutes! I got off the train and stormed on the sidewalk towards my building, pissed with myself! Suddenly, on the busy 5th Avenue of New York City, someone who was handing out fliers interrupted my brisk walk and said loudly 'Hey! Are you as amazing as your outfit?' For just two seconds I grew more pissed, because she slowed me down in that hurry, but then her words just calmed me down. A broad smile tore through my grumpy face and I, still walking swiftly, just looked up to the bright sunshine, smiling to myself. I didn't even see her face, I didn't stop to look back, and my outfit was just normal winter wear for NYC standards. I was still late, very late, but smiling.", "March 12th, 2019");

marioism[4] = new Quote("I was about to cross a narrow street and found an old woman, with a walking stick, right in the middle! She was on the zebra lines, but the signal was red. The cars were honking, and the pedestrians just looked on, like me. I assumed the old woman was a homeless person, or maybe drunk and that's why no knew what to do. At that moment, a younger woman got off the sidewalk, signaled to the cars to stop honking and wrapped her hand around the old lady's elbow - like how lovers would do. And then, the old lady started walking, a few inches at a time. The labels on her just disappeared, and now the atmosphere instantly changed to help her. The cars waited patiently as the young woman, slowly, really slowly helped the old lady to the sidewalk. In the meantime, I crossed that street myself, but I stood back to watch her. When she crossed the road, she had trouble getting on to the sidewalk she held the stick in one hand and her bag in the other. Apparently, she wasn't strong enough in her legs to get onto the higher level of the sidewalk. I was moved by that young woman and rushed to help the old lady. Both of us scooped the lady's elbows and helped her over the step. The old lady had a sparkling smile on her face, and she politely requested someone to walk with her until the end of the other street, and another young woman offered to walk with her.", "March 12th, 2019");




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

