
//Mario Dcunha

var mode=0;
var r=0, temp=0;
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
marioism[2] = new Quote("Plan is not life, if its planned.", me);

//INTUIT
intuit[0] = new Quote("Don't assume you know the customer until you have sat with them.", "Scott Cook");
intuit[1] = new Quote("Curating problems is what strategy is all about.", "Brandon Mitchell");
intuit[2] = new Quote("If you fail, celebrate it! Move on.", "Mamie Jones");
intuit[3] = new Quote("What school you go to doesn’t matter. It’s what you do, with what you learn.", "Brad Smith");



function init()
{
  mode=0;
  randomQuote();

console.log(r);
  // write(2,marioism);

  // count=marioism.length; 
  // mainArray = marioism;

  // console.log(mainArray);

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

  console.log(r);
}


function back()
{
  setMode();

  if(r > 0) r--;
  else      r=count-1;
  
  write(r,mainArray);
  console.log(r);
}


function next()
{
  setMode();

  if(r < count-1) r++;
  else            r=0;
  
  write(r,mainArray);
  console.log(r);
}



function setMode()
{
  switch (mode)
  {
    case 0: 
    count     = marioism.length; 
    mainArray = marioism; break;

    case 1:
    count     = inspiration.length; 
    mainArray = inspiration; break;

    case 2:
    count     = design.length; 
    mainArray = design; break;

    case 3:
    count     = intuit.length; 
    mainArray = intuit; break;
  }
}

function modeSwitch(changeMode)
{
  mode = changeMode;
  setMode();
  randomQuote();
  console.log(mode);
}






var myRandomWord;

function generate() 
{
  myRandomWord = RiTa.randomWord('nn');

  while (RiTa.rhymes(myRandomWord).length < 1)
  {
    myRandomWord = RiTa.randomWord('nn');
  }

  $('#word1').text(myRandomWord + ',');
  $('#word2').text(RiTa.randomItem(RiTa.rhymes(myRandomWord)) + '.');

  var randomR, randomG, randomB;

  $('body').css('background-color',
    'rgba('+randomMath(100,220)+','+randomMath(100,220)+','+randomMath(100,220)+','+randomMath(100,220)+')');

  $('button').css('background-color',
    'rgba('+randomMath(50,100)+','+randomMath(50,100)+','+randomMath(50,100)+','+randomMath(50,100)+')');

}


function  randomMath(l, h)
{
  return Math.floor(Math.random() * (h - l)) + l;
}

function randomInt(n) 
{
  return Math.floor(Math.random() * (n - 0)) + 0;
}



