
//Mario Dcunha

var mode=0, max=30, maxElement=0, tempMax=30;
var r=0, r1=0,r2=0, temp=0, temp1=0, temp2=0, tempc='', c=0;
var count=0;
var mainArray = [];
var me = "Mario Dcunha";


function Quote(quote, author) 
{
  this.quote = quote;
  this.author = author;
}


var text = [];
var marioism = [];
var inspiration = [];
var design = [];
var intuit = [];
var parsons = [];


//TEXT
text[0] = new Quote("TRAVEL EFFICIENCY");
text[1] = new Quote("ITINERARY BUILDING");
text[2] = new Quote("PLANNING A TRIP");
text[3] = new Quote("SUSTAINABILITY IN TRAVEL");
text[4] = new Quote("TRAVEL LOGGING AND PORTFOLIO");
text[5] = new Quote("AIR POLLUTION");
text[6] = new Quote("BELIEVING IN THE IMPOSSIBLE");
text[7] = new Quote("CHILDREN'S HUNGER");
text[8] = new Quote("CITY SANITATION AND CLEANLINESS");
text[9] = new Quote("INSPIRING WITH FANTASY");
text[10] = new Quote("TRAVEL");
text[11] = new Quote("CODE THINKING");
text[12] = new Quote("PLASTIC ACCUMULATON");
text[13] = new Quote("IMMEDIATE GAINS VS NATIONAL FUTURE");
text[14] = new Quote("SPECIFIC CODE LANGUAGES");
text[15] = new Quote("IRONIES IN SOCIETY");
text[16] = new Quote("GROWING HUMAN SENSITIVITY");
text[17] = new Quote("FEAR OF GOING  AGAINST THE FLOW");
text[18] = new Quote("EVILS OF MEDIA");
text[19] = new Quote("MEDIA RESPONSIBILITY");
text[20] = new Quote("PERCEPTION OVERRIDING JUDICIARY");
text[21] = new Quote("FACT VS PERCEPTION");
text[22] = new Quote("ECOMMERCE");
text[23] = new Quote("RESERVATION VS DIVERSITY");
text[24] = new Quote("EVILS OF POLITICS");
text[25] = new Quote("MONEY TRAIL");
text[26] = new Quote("SINGING");
text[27] = new Quote("REPORTING RIGHTS AND PRIVACY");
text[28] = new Quote("FAKE NEWS");
text[29] = new Quote("RECOGNIZING SCALES");
text[30] = new Quote("DESIGNERS IN GOVERNANCE");
text[31] = new Quote("DATA ANALYSIS VS 'PROMISES'");
text[32] = new Quote("PUBLIC AWARENESS");
text[33] = new Quote("LEARNING MUSIC THEORY");
text[34] = new Quote("CHILDREN'S EDUCATION");
text[35] = new Quote("EDUCATION QUALITY AND VALUES");
text[36] = new Quote("CLIMATE CHANGE");
text[37] = new Quote("FUTURE LEADERSHIP");
text[38] = new Quote("TEACHING CODE﻿");
text[39] = new Quote("CULTURE SCATTERING AND COLONIAL HISTORY");
text[40] = new Quote("SUPER HEROES");
text[41] = new Quote("POLITICAL CANDIDATES");
text[42] = new Quote("SAVING PAPER");
text[43] = new Quote("SARCASM");
text[44] = new Quote("EDUCATION INFRASTRUCTURE");
text[45] = new Quote("WORKPLACE PRODUCTIVITY");
text[46] = new Quote("SHOPPING EXPERIENCE");
text[47] = new Quote("EFFECTS ON BUSINESS");
text[48] = new Quote("DAILY DATA + HABITS");




function init()
{
  mode=0;
  randomQuote();

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



function write(serial,serial2,quoteObject)
{
    $('#quote').text(quoteObject[serial].quote);
    $('#quote2').text(quoteObject[serial2].quote);
}



function randomQuote()
{
  setMode();

  temp1= r1; temp2 = r2;
  
  while(temp1 == r1)
    r1 = randomInt(count);
  
  while(temp2 == r2)
    r2 = randomInt(count);
  
  write(r1,r2,mainArray);

}


function back()
{
  setMode();

  if(r > 0) r--;
  else      r=count-1;

  write(r,mainArray);

}


function next()
{
  setMode();

  if(r < count-1) r++;
  else            r=0;
  
  write(r,mainArray);

}



function setMode()
{
  switch (mode)
  {
    case 0: 
    count     = text.length; 
    mainArray = text; 
    // fontchange('Satisfy', '2.2em', 400, '45px', 'black', 200, 245);
    break;

    case 1:
    count     = inspiration.length; 
    mainArray = inspiration;
    fontchange('Lato', '1.7em', 'bold', '45px', 'white', 10, 100);
    break;


    case 2:
    count     = design.length; 
    mainArray = design; 
    fontchange('Lato', '1.7em', 'bold', '45px', 'white', 100, 200);
    break;

    case 3:
    count     = intuit.length; 
    mainArray = intuit; 
    fontchange('Questrial', '1.7em', 500, '45px', 'white', 200, 255);
    $('#b'+mode).text('intuit');
    $('#b'+mode).css('font-family', 'Josefin Sans');
    $('#b'+mode).css('font-size', '19px');
    $('#b'+mode).css('transition', 'all 0.3s');
    break;

    case 4:
    count     = parsons.length; 
    mainArray = parsons; 
    fontchange('Nueue-Bold', '1.7em', 400, '45px', 'black', 200, 255);
    $('#b'+mode).text('PARSONS');
    $('#b'+mode).css('font-family', 'Nueue-Wide');
    $('#b'+mode).css('padding-bottom', '7px');
    $('#b'+mode).css('transition', 'all 0.3s');
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
      $('#b'+i).css('background-color', bgcolor);   
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
      $("#b"+buttonMode).css('background-color','#999');
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
      $("#b"+buttonMode).css('background-color','rgba(0, 0, 0, 0)');
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
    }
    $('#quote').css('font-size', fontSize);
    $('#quote').css('font-weight', fontWeight);
    $('#quote').css('color', fontColor);
    $('#author').css('color', fontColor);
    $('#quote').css('line-height', lineHeight);

    if(mode==0 || mode==4)
    {
      c = randomMath(bgl,bgh);
      $('body').css('background-color','rgb('+c+','+c+','+c+')');
    }
    else if(mode==1)
    {
      c = randomMath(bgl,bgh);
      $('body').css('background-color','rgb('+c+','+c+','+c+')');
    }
    else if(mode==2)
    {
      $('body').css('background-color','rgb('+randomMath(bgl,bgh)+','+randomMath(bgl,bgh)+','+randomMath(bgl,bgh)+')');
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



