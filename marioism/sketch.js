
//Mario Dcunha

var mode=0;
var r=0, temp=0, c=0;
var count=0;
var mainArray = [];
var me = "Mario Dcunha";


function Quote(quote, author) 
{
  this.quote = quote;
  this.author = author;
}

var marioism = [];
var inspiration = [];
var design = [];
var intuit = [];

//MARIOISM
marioism[0] = new Quote("Life’s funny, but I’m funnier!", me);
marioism[1] = new Quote("Don’t take ‘taking for granted’, for granted.", me);
marioism[2] = new Quote("Plan is not life, if its planned.Plan is not life, if its planned.Plan is not life, if its planned.Plan is not life, if its planned.Plan is not life, if its planned.", me);

//INSPIRATION
inspiration[0] = new Quote("If you want to Shine like the Sun, be ready to Burn like the Sun.", "President Abdul Kalam");
inspiration[1] = new Quote("We don’t just need Education. We need Education with Values.", "President Abdul Kalam");
inspiration[2] = new Quote("Dreams are not what you see in your sleep. Dreams are what does not let you sleep.", "President Abdul Kalam");
inspiration[3] = new Quote("Purpose of life, is a life of purpose.", "Robert Byrne");
inspiration[4] = new Quote("If you only do your work, you will not grow, unless you are learning something new that advances you.", "Aaron Walter");
inspiration[5] = new Quote("Use all your five senses to learn. That’s when maximum observation and learning happens.", "Henry Monteiro");

//DESIGN
design[0] = new Quote("Every Designer must only think with a pen, paper and a prototype.", "Mario Dcunha");
design[1] = new Quote("The moment you add time as a factor, all great ideas are killed.", "James Helms");
design[2] = new Quote("Practice pen to paper. It's ok to be broken.", "JB Chaykowsky");
design[3] = new Quote("Don't assume you know the customer until you have sat with them.", "Scott Cook");
design[4] = new Quote("I can't sit at my desk and design. I only can check my email at my desk.", "Paula Scherr");
design[5] = new Quote("Design of a logo is not the logo itself but getting a million people to believe in using it.", "Paula Scherr");
design[6] = new Quote("With all this amazing technology, the tools must never dominate us.", "Platon");
design[7] = new Quote("Make to think, over Think to make.", "Greg Petroff");
design[8] = new Quote("Ambiguity can be your friend.", "Greg Petroff");
design[9] = new Quote("A Paper Rocket is the ultimate symbol of childhood, creativity, travel, imagination and design.", "Mario Dcunha");
design[10] = new Quote("Stand up, draw and visualize what people are saying. That’s when you will drive the meeting.", "Paul Goode");
design[11] = new Quote("Embrace LoFi. Don't let ideas become precious. Be ready to 'kill your darlings'.", "Morry Galonoy");

//INTUIT
intuit[0] = new Quote("Don't assume you know the customer until you have sat with them.", "Scott Cook");
intuit[1] = new Quote("Curating problems is what strategy is all about.", "Brandon Mitchell");
intuit[2] = new Quote("If you fail, celebrate it! Move on.", "Mamie Jones");
intuit[3] = new Quote("What school you go to doesn’t matter. It’s what you do, with what you learn.", "Brad Smith");











function init()
{
  mode=0;
  randomQuote();
  buttonHover(0);
  buttonHover(1);
  buttonHover(2);
  buttonHover(3);

}

function write(serial,quoteObject)
{
    $('#quote').text("\""+quoteObject[serial].quote+"\"");
    $('#author').text("- "+quoteObject[serial].author);
}

function randomQuote()
{
  setMode();

  temp = r;
  while(temp == r)
    r = randomInt(count);
  
  write(r,mainArray);

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
    count     = marioism.length; 
    mainArray = marioism; 
    fontchange('Satisfy', '2.2em', 400, '45px', 'black', 200, 245);
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
    fontchange('Montserrat', '1.7em', 500, '45px', 'white', 200, 255);
    break;
  }

  $('#b'+mode).css('background-color', '#009eed');
  // $('#b'+mode).css('border', '1px solid #009eed');
  $('#b'+mode).css('color', '#fff');
}

function resetButtons()
{
  for(i=0; i<4; i++)
  {
      $('#b'+i).css('color', '#999');
      $('#b'+i).css('background-color', '#fff');    
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
      $("#b"+buttonMode).css('background-color','#999');
      $("#b"+buttonMode).css('color','#fff');
    }
  });


  $("#b"+buttonMode).mouseleave(
  function()
  {
    if($("#b"+buttonMode).css('background-color')=='#009eed' || mode==buttonMode)
    {
    }
    else
    {
      $("#b"+buttonMode).css('background-color','#fff');
      $("#b"+buttonMode).css('color','#999');
    }
  });

}




function modeSwitch(changeMode)
{
  mode = changeMode;
  setMode();
  resetButtons();
  randomQuote();
}




function fontchange(fontFamily, fontSize, fontWeight, lineHeight, fontColor, bgl, bgh)
{
    $('#quote').css('font-family', fontFamily);
    $('#author').css('font-family', fontFamily);
    $('#quote').css('font-size', fontSize);
    $('#quote').css('font-weight', fontWeight);
    $('#quote').css('color', fontColor);
    $('#author').css('color', fontColor);
    $('#quote').css('line-height', lineHeight);

    if(mode==0)
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
    else if(mode==3)
    {
      $('body').css('background-color','rgb('+randomMath(10,50)+','+randomMath(100,200)+','+randomMath(250,255)+')');
      $('#b3').css('border','1px solid #fff');
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



