
//Mario Dcunha

//http://stash.compciv.org/2017/realdonaldtrump-tweets.json

//The Story
/*

It was a dark and Stormy night.

#he was #verb on the #position/place.
#she #action the #noun at #him.
Suddenly, there was a #something.
#She/he soon #verbed #himself/herself/him/her
Who do you think Trumped the other?

*/


var sentence1 = 
{
  "S": ["He was #Verb# on the #Position#. "],
  "Pronoun": ["He", "She"],
  "Verb": ["confusing", "hard", "challenging", "acting", "insulting", "scheming", "charging", "bloody", "standing smelly", "bruised and hurt"],
  "Position": ["#Place# table", "3rd street, away from the #Place#", "Crooked Chair, inside #Place#", "#Place# hallway"],
  "Place": ["The Oval Office", "The White House", "Capitol Hill", "The Pentagon", "Congress Balcony", "the Golf Resort", "a KFC Chicken Place", "a Mexican Food Joint"]
}

var sentence2 = 
{
  "S": ["He yelled #Adjective# rants at her, however she #Action# the #Things# at him.\n\n\n\n\n"],
  "Pronoun": ["he", "she"],
  "Adjective": ["nasty", "racist", "sexist", "xenophobic", "misogynistic", "bigoted", "clownish", "piggish", "climate change denying"],
  "Action": ["threw", "flung", "churned", "pushed", "lifted", "twisted"],
  "Things": ["knife", "tissue-rolls", "napkins", "water-bottles", "KFC Chicken", "part of the Border Wall", "chicken blood", "pee from Russian strippers", "whisky", "executive orders"],
  "Pronoun2": ["him", "her", "himself", "herself"]
}


var sentence3 = 
{
  "S": ["Suddenly, there was a #Event#!"],
  "Event": ["sound of an explosion", "loud cry", "scream", "squeak", "sound of several footsteps", "gunshot", "Fake News alert", "jolt. The ground shook", "hurricane landfall. The windows shattered"],
}


var sentence4 = 
{
  "S": ["Despite being the #Adjective# he was, she immediately grabbed him by the '#Noun#'. "],
  "Adjective": ["Bad Hombre", "lunatic", "Xenophobe", "chauvinist", "villain", "demagogic clown", "dangerous ruler"],
  "Noun": ["tizzy", "dizzy", "trophy", "footsie", "tootsie"],
}

var Sentence = [];
var Story = [];
var i=0, j=0, k=0, m=0, n=0, x=0, y=0;

Sentence[0] = tracery.createGrammar(sentence1);
Sentence[1] = tracery.createGrammar(sentence2);
Sentence[2] = tracery.createGrammar(sentence3);
Sentence[3] = tracery.createGrammar(sentence4);


function startTyping()
{
    Story_0 = $('#headline0').text();
    Story_0 = "It was a dark and 'Stormy' night."

    type0();   
}

function typeWriter1()
{
    Story[0] = Sentence[0].flatten("#S#"); type1();   
}

function typeWriter2()
{   
    Story[1] = Sentence[1].flatten("#S#"); type2();
}

function typeWriter3()
{   
    Story[2] = Sentence[2].flatten("#S#"); type3();
}

function typeWriter4()
{   
    Story[3] = Sentence[3].flatten("#S#"); 
    type4();
}

function typeWriter5()
{   
    Story_last = "Who do you think managed to 'Trump' the other?"
    // Story_0 = "It was a dark and Stormy night."
    type5();   
}


function type0() 
{

  if(x<Story_0.length) 
  {
    if(x<18 || x>24)
    {
      $('#headline0').append(Story_0.charAt(x++));
    }  
    else if(x>=18 && x<=24)
    {
      $('<span id="stormy"></span>').appendTo('#headline0');
      $('#headline0').append(Story_0.charAt(x++));
    }
    
    setTimeout(type0, 50);
  }
  else if(x>=Story_0.length)
      typeWriter1();
}




function type1() 
{
  if(j<Story[0].length) 
  {
    $('#headline1').append(Story[0].charAt(j++));
    setTimeout(type1, 50);
  }
  else if(j>=Story[0].length)
      typeWriter2();
}


function type2() 
{
  if(k<Story[1].length) 
  {
    $('#headline1').append(Story[1].charAt(k++));
    setTimeout(type2, 50);
  }
  else if(k>=Story[1].length)
      typeWriter3();
}


function type3() 
{
  if(m<Story[2].length) 
  {
    $('#headline2').append(Story[2].charAt(m++));
    setTimeout(type3, 50);
  }
  else if(m>=Story[2].length)
      typeWriter4();
}


function type4() 
{
  if(n<Story[3].length) 
    {
      $('#headline3').append(Story[3].charAt(n++));
      setTimeout(type4, 50);
    }
  else if(n>=Story[3].length)
      typeWriter5();
}


function type5() 
{
  if(y<Story_last.length) 
  {
    $('#headline4').append(Story_last.charAt(y++));
    // if(x<18 || x>24)
    // {
    //   $('#headline0').append(Story_0.charAt(x++));
    // }  
    // else if(x>=18 && x<=24)
    // {
    //   $('<span id="stormy"></span>').appendTo('#headline0');
    //   $('#headline0').append(Story_0.charAt(x++));
    // }
    
    setTimeout(type5, 50);
  }
  // else if(x>=Story_0.length)
  //     typeWriter1();
}




















