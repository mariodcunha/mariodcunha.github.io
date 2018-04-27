
//Mario Dcunha

var likeCounter=0;
var mySpeech;
var theWord="function";

// wait until dom is loaded then run init function
$(document).ready(function()
{
    mic = new p5.AudioIn();
    mic.start();
}); 


//Voice API from talater.com/annyang/
if (annyang) 
{
  var commands = 
  {
    // 'hello': function() 
    // {
    //   readSpeech();
    // },
    // '*a': function() 
    // {
    // }
  };
  annyang.addCommands(commands);
  annyang.start();
  
  annyang.addCallback('result', function(phrases) 
  {
    writeSpeech(phrases);
  });
}

function readSpeech()
{
  console.log("reading");
}


function writeSpeech(phrases)
{
  mySpeech = phrases[0];

  mic.start();
  annyang.start();

  countLikes();

  $('#speech').append(mySpeech+"<br>");
  console.log(phrases[0]);

  if(likeCounter>0)
  {
    $('#likeCounter').text(likeCounter);
    $('#like').css('float','left');
    $('#like').css('transition','all 0.7s');
  }
}


function countLikes()
{
  var likeIndex;

  while(mySpeech.indexOf(theWord) > 1)
  {
    likeIndex = mySpeech.indexOf(theWord);
    console.log("Infinite While Loop Possible > "+likeIndex);
    
    if(likeIndex > 1)
    {
      likeCounter++;
      $('#likeSound').attr('src', 'sound/like.mp3');
    }

    mySpeech = mySpeech.replace(theWord +" ", "");  
    
    console.log(likeCounter);
    console.log(mySpeech.length);
  }

}

