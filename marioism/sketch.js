
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


//MARIOISM
marioism[0] = new Quote("Life’s funny, but I’m funnier!",me);
marioism[1] = new Quote("Don’t take ‘taking for granted’, for granted.",me);
marioism[2] = new Quote("Life is not life, if its planned.",me);
marioism[3] = new Quote("Nothing is a big deal, if you just do it!",me);
marioism[4] = new Quote("Singing is like peeing. You need to start with good control, maintain the control in the right direction wherever your aiming at, and towards the end, just let loose!",me);
marioism[5] = new Quote("The biggest bitch I have ever come across in my life is Circumstance.",me);
marioism[6] = new Quote("Disturbance in life is like a flood. Causes destruction and havoc, but at the end of it, its all fresh soil, its all clean paths.",me);
marioism[7] = new Quote("Only nature has true style.",me);
marioism[8] = new Quote("The world is filled with two kinds of people. Humans and Snakes.",me);
marioism[9] = new Quote("Some people may have good metabolism, yet they still can't digest certain stuff.",me);
marioism[10] = new Quote("Life sounds so loud when you're alone.",me);
marioism[11] = new Quote("I don't know how the universe works sometimes. But I'm happy to know that, unlike humans, the universe never fails to do its job.",me);
marioism[12] = new Quote("We all have to die one day, so why not work with only digital copies and leave the trees alone to further our generations.",me);
marioism[13] = new Quote("The level of joblessness is proportional to the frequency of changing your profile pics on social media.",me);
marioism[14] = new Quote("When you watch too many movies, the appreciation of watching a single movie goes down.",me);
marioism[15] = new Quote("World's ugliest looking human doesn't exist at all. If you think there's someone, then its you.",me);
marioism[16] = new Quote("Anger is really essential sometimes. Really.",me);
marioism[17] = new Quote("Being unnecessarily 'nice' is as good as being bad.",me);
marioism[18] = new Quote("Determination is for specific goals. Focus is for the big picture, which sometimes overrules determination.",me);
marioism[19] = new Quote("Its better to be addicted to social-media, than to be addicted to e-commerce.",me);
marioism[20] = new Quote("Skills are got either when you were born, or when you just simply take the first step towards that skill.",me);
marioism[21] = new Quote("People become successful may be because they can, but surely because they think they can!",me);
marioism[22] = new Quote("Definition of Luck: God’s interference in your life when you never asked him to.",me);
marioism[23] = new Quote("When life with all its complexities stares at you in your face, grab it, smooch it tight!",me);
marioism[24] = new Quote("When there's nothing to do in the world, there are always movies to watch.",me);
marioism[25] = new Quote("You can always look at a glass either half full or half empty, or you can stop looking, drink it and get on with whatever you are supposed to do!",me);
marioism[26] = new Quote("When you do something religious, think about how it pleases God, and not about how it pleases the church, temple or mosque or the priests in them.",me);
marioism[27] = new Quote("Always remember, never sleep. Just dream.",me);
marioism[28] = new Quote("Half the evil in the world is because people always want to show a good face to all.",me);
marioism[29] = new Quote("Life, among its other definitions, is a choice. You can either focus on the destination and move fast, or go slow and enjoy the journey.",me);
marioism[30] = new Quote("If you worry or cant handle about wat people have to complain about you, then you can forget about becoming a successful figure.",me);
marioism[31] = new Quote("Inspiration is strong force. Jealousy is stronger.",me);
marioism[32] = new Quote("Among all man-made things, religion is the worst!",me);
marioism[33] = new Quote("True friendship never dies, no matter whatever bullshit comes in the way. It never dies, absolutely never ever. If it was true.",me);
marioism[34] = new Quote("Sometimes you need to swallow self-pride or even self-respect. God will handle the humanly called 'revenge' on your behalf.",me);
marioism[35] = new Quote("Success is like an elevator. Whether you start from the middle or bottom, you can always reach the top.",me);
marioism[36] = new Quote("You cannot remain a good person in the field of politics. Then you’re just a bad politician.",me);
marioism[37] = new Quote("There are only two things that can liberate India into a country that it should be. Its either the Constitution or You.",me);
marioism[38] = new Quote("Everyone have more power within themselves than they can ever imagine.",me);
marioism[39] = new Quote("I don't understand why good has to struggle so much, when eventually, evil always loses!",me);
marioism[40] = new Quote("There are no News channels on TV today. There are just Breaking News Channels.",me);
marioism[41] = new Quote("Faith should not be powered by obligation. Faith should only power Faith.",me);
marioism[42] = new Quote("God neither counts nor thinks like the way we do.",me);
marioism[43] = new Quote("Nothing in the universe that ever existed is greater than a child’s innocence and a mother’s love.",me);
marioism[44] = new Quote("The Members of Parliament can make laws for Members of Parliament, just not for themselves.",me);
marioism[45] = new Quote("When you allocate a special day to complete a special task, it shall never be completed!",me);
marioism[46] = new Quote("If you catch a bunch of thieves, there will always be an innocent person among them.",me);
marioism[47] = new Quote("Three things to gain more wisdom. Think more. Talk less. Talk less.",me);
marioism[48] = new Quote("It’s only if your comfortable to fart in the company of the other person, you are his/her true soulmate. Nothing else will signify a more closer relationship, than an open fart.",me);
marioism[49] = new Quote("Forgiving is divine. Asking forgiveness from someone, is even greater.",me);
marioism[50] = new Quote("Either you love your teeth or you love your dentist.",me);
marioism[51] = new Quote("An insult is just motivation… if you can look at it that way.",me);
marioism[52] = new Quote("A human being without an aim, is as good as an animal.",me);
marioism[53] = new Quote("A Church is made by the people and for the people. A Parish is made by the priests and for the priests only. ",me);
marioism[54] = new Quote("Self Sacrifice that doesn’t benefit anyone at all is just useless. Why bring in more pain into the world even if its through you?",me);
marioism[55] = new Quote("It’s not nice to be too nice.",me);
marioism[56] = new Quote("Don't judge success by your accomplishments but by the problems you overcame to accomplish them.",me);
marioism[57] = new Quote("Drinking alcohol is a fight between you and the bottle. You win, if the bottle is closed tight. The bottle wins, if it makes you tight.",me);
marioism[58] = new Quote("You can fight and try to bring out the truth. However, even with the truth, you can never change the perception.",me);
marioism[59] = new Quote("Stars don’t sleep, they shine.",me);
marioism[60] = new Quote("When in doubt, watch 'FRIENDS'.",me);
marioism[61] = new Quote("Every Designer must always think with a pen, paper and a prototype.",me);
marioism[62] = new Quote("A Paper Rocket is the ultimate symbol of childhood, creativity, travel, imagination and design.",me);
marioism[63] = new Quote("Design to me, is about creating specific order and organizing elements within it, which best accomplishes a task and establishes a framework for future improvements.", me);
marioism[64] = new Quote("If you are in search of an Idea, stop searching. You will get it.", me);
marioism[65] = new Quote("If you're sure you have your gut and your soul agreeing on something, stop everything, and start making it.", me);
marioism[66] = new Quote("Everyone is sweet... until you taste them.", me);


//INSPIRATION

inspiration[0] = new Quote("If you want to Shine like the Sun, be ready to Burn like the Sun.", "President Abdul Kalam");
inspiration[1] = new Quote("We don’t just need Education. We need Education with Values.", "President Abdul Kalam");
inspiration[2] = new Quote("Dreams are not what you see in your sleep. Dreams are what does not let you sleep.", "President Abdul Kalam");
inspiration[3] = new Quote("Purpose of life, is a life of purpose.", "Robert Byrne");
inspiration[4] = new Quote("If you only do your work, you will not grow, unless you are learning something new that advances you.", "Aaron Walter");
inspiration[5] = new Quote("Use all your five senses to learn. That’s when maximum observation and learning happens.", "Henry Monteiro");
inspiration[6] = new Quote("You have the capacity to learn anything, anyhow.", "Frank Dcunha");
inspiration[7] = new Quote("Creativity is seeing the same thing, but thinking differently.", "Albert Einstein");
inspiration[8] = new Quote("Give me six hours to chop down a tree and I'll spend the first four sharpening the axe.", "President Abraham Lincoln");
inspiration[9] = new Quote("Whenever you're low, trust your future self - it will tell you that it's going to be alright and you will come out victorious on the other side.", "Aakanksha Aggarwal");
inspiration[10] = new Quote("Order is Heaven's first law", "Alexander Pope");
inspiration[11] = new Quote("Where there is righteousness in the heart, there is beauty in the character. When there is beauty in the character, there is harmony in the home. When there is harmony in the home, there is order in the nation. When there is order in the nation, there is peace in the world.", "President Abdul Kalam");
inspiration[12] = new Quote("The more you are clear of who you are, the more awesome work you will do.", "Lucille Tenazas");
inspiration[13] = new Quote("If you fall off a horse, then get on a donkey, until you find your next horse.", "Morry Galonoy");



//DESIGN
design[0] = new Quote("Every Designer must always think with a pen, paper and a prototype.", "Mario Dcunha");
design[1] = new Quote("The moment you add time as a factor, all great ideas are killed.", "James Helms");
design[2] = new Quote("Practice pen to paper. It's ok to be broken.", "J. B. Chaykowsky");
design[3] = new Quote("Don't assume you know the customer until you have sat with them.", "Scott Cook");
design[4] = new Quote("I can't sit at my desk and design. I only can check my email at my desk.", "Paula Scherr");
design[5] = new Quote("Design of a logo is not the logo itself but getting a million people to believe in using it.", "Paula Scherr");
design[6] = new Quote("With all this amazing technology, the tools must never dominate us.", "Platon");
design[7] = new Quote("Make to think, over Think to make.", "Greg Petroff");
design[8] = new Quote("Ambiguity can be your friend.", "Greg Petroff");
design[9] = new Quote("A Paper Rocket is the ultimate symbol of childhood, creativity, travel, imagination and design.", "Mario Dcunha");
design[10] = new Quote("Stand up, draw and visualize what people are saying. That’s when you will drive the meeting.", "Paul Goode");
design[11] = new Quote("Embrace lo-fi. Don't let ideas become precious. Be ready to 'kill your darlings'.", "Morry Galonoy");
design[12] = new Quote("Good Design must have an impact on people's lives, no matter how seemingly small.", "Garr Reynolds");
design[13] = new Quote("Unpacking your rationality to someone else is first role of a designer.", "James Helms");
design[14] = new Quote("Design is a plan for arranging elements to accomplish a particular purpose.", "Charles Eames");
design[15] = new Quote("Design is a problem that is elegantly solved.", "James Helms");
design[16] = new Quote("Creativity is seeing the same thing, but thinking differently.", "Albert Einstein");
design[17] = new Quote("Often you’ll be the only one at the table relying on your gut in addition to your head.", "Cameron Moll");
design[18] = new Quote("Design to me, is about creating specific order and organizing elements within it, which best accomplishes a task and establishes a framework for future improvements.", "Mario Dcunha");
design[19] = new Quote("No two people will look at information in the same way. You gotta make them to.", "William Bevington");
design[20] = new Quote("Personas without scenario's are like characters without a plot.", "Kim Goodwin");


//INTUIT
intuit[0] = new Quote("Don't assume you know the customer, until you have sat with them.","Scott Cook");
intuit[1] = new Quote("When someone asks you a question, and you are not your 100%, put on a show, ask questions back and get them to decide, because they are probably in better shape than you to make a decision.","Mamie Jones");
intuit[2] = new Quote("If you fail, celebrate it! Move on.","Mamie Jones");
intuit[3] = new Quote("When you pick a company, check leadership, how much you can learn, how autonomous you are in your work.","Mamie Jones");
intuit[4] = new Quote("Always document just enough. Don’t work with a blind mind.","Eddie Lucero");
intuit[5] = new Quote("Practice pen to paper. It's ok to be broken.","J. B. Chaykowsky");
intuit[6] = new Quote("Stand up, draw and visualize what people are saying. That’s when you will drive the meeting.","Paul Goode");
intuit[7] = new Quote("Purpose of discovery, is to avoid unexpected and unacceptable risk.","Brandon Mitchell");
intuit[8] = new Quote("A Product Manager's role is not to create solutions, but to frame problems.","Brandon Mitchell");
intuit[9] = new Quote("Curating problems, is what strategy is all about.","Brandon Mitchell");
intuit[10] = new Quote("What school you go to doesn’t matter. It’s what you do, with what you learn.","Brad Smith");
intuit[11] = new Quote("Doesn’t matter how efficiently you divide your time of the day. It’s the quality of time that matters, than quantity.","Brad Smith");
intuit[12] = new Quote("Write shit down. Take your bets. Draw insights.","Rick Holden");
intuit[13] = new Quote("Go with your drive, and do the things that you don’t have to do, but you know you should do it, to do it right.","Rick Holden");
intuit[14] = new Quote("I’m not just making products for small business, I’m making products for dreamers, like me.","Mario Dcunha");
intuit[15] = new Quote("Drawing is thinking - can you make others see your thoughts?","James Helms");
intuit[16] = new Quote("When you add the factor of time, all great ideas are killed.","James Helms");
intuit[17] = new Quote("All your work should tell a story.","J. B. Chaykowsky");
intuit[18] = new Quote("Your design process is not hard to copy. What’s hard to copy is your rationale and your experience.","James Helms");
intuit[19] = new Quote("Aim to be a 'learn it all' than a 'know it all'.","Adam Reed");
intuit[20] = new Quote("Observation is everything: observations will drive insights, insights drive ideas and ideas change the world.","Adam Reed");
intuit[21] = new Quote("Leadership is the power to influence someone just by being or behaviour and without being explicit about it.","Jolawn Victor");
intuit[22] = new Quote("Unpacking your rationality to someone else is first role of a designer.", "James Helms");


//PARSONS
parsons[0] = new Quote("You mind, your hands, your vision and your creative gut. That's what will be with you forever. Process, software, technology - all will change.","Lucille Tenazas");
parsons[1] = new Quote("Don't marry your idea. Be ready to kill your darlings.","Morry Galonoy");
parsons[2] = new Quote("Designing for everyone, is designing for no-one.","Morry Galonoy");
parsons[3] = new Quote("Your work doesn’t matter, until you make it matter.","David Carroll");
parsons[4] = new Quote("Even a pencil is Technology. It's just an enabler.","Morry Galonoy");
parsons[5] = new Quote("The Periodic Table is a perfect example of great information design.", "William Bevington");
parsons[6] = new Quote("No two people will look at information in the same way. You gotta make them to.", "William Bevington");
parsons[7] = new Quote("A computer is such a complex device that doesn't come with a user manual. However, a slide ruler comes with a 200-page manual.", "William Bevington");
parsons[7] = new Quote("Smartphone is a pretty phenomenal thing. It brings photography, music, communication and navigation all together in one place.", "William Bevington");
parsons[8] = new Quote("If you can attract children's attention, then you can teach them something.", "Kyle Li");
parsons[9] = new Quote("Portfolio is just a beauty contest. You will be hired for you, how you are, your ambition, your passion.", "Lucille Tenazas");
parsons[10] = new Quote("If you fall off a horse, then get on a donkey, until you find your next horse.", "Morry Galonoy");



//ADD ARRAY HERE
allArrays = [marioism, inspiration, design, intuit, parsons];



function init()
{
  for(let i=0; i<allArrays.length; i++)
  {
    findLongestQuote(allArrays[i]);
  }

  let a = max/6.5;
  quoteMargin = max/6.5+1;
  console.log(quoteMargin);
  console.log(window.innerWidth);
  console.log(window.innerHeight);

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
    $('#quote').text("\""+quoteObject[serial].quote+"\"");
    $('#author').text("- "+quoteObject[serial].author);

    // let quoteMargin = max - quoteObject[serial].quote.length;
    // console.log(quoteMargin);
    // $('#quotes').css("margin-bottom",quoteMargin/15+"vh");
    // $('#quotes').css("transition","0.5s");
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
  if(mode<2)
  {
    $('#b'+mode).css('background-color', '#009eed');
    $('#b'+mode).css('color', '#fff');    
  }
  else if(mode==2)
  {
    $('#b'+mode).css('background-color','rgb('+randomMath(50,100)+','+randomMath(50,100)+','+randomMath(50,100)+')');
    $('#b'+mode).css('color', '#fff');    
  }
  else if(mode==3)
  {
    $('#b'+mode).css('background-color','rgb(0,110,'+randomMath(250,255)+')');
    $('#b'+mode).css('color', '#fff');    
    $('body').css('background-color','rgb('+randomMath(10,50)+','+randomMath(150,200)+','+randomMath(250,255)+')');
  }
  else if(mode==4)
  {
    $('#b'+mode).css('background-color','#EF3340');
    $('#b'+mode).css('color', '#fff');    

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



