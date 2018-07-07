
//Mario Dcunha


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


function  randomMath(min, max)
{
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomInt(l, h) 
{
  return Math.floor(random(l, h));
}



function RandomNoise(lowLimit, highLimit)
{

  return noise(lowLimit/2,highLimit/2)*random(lowLimit/2,highLimit/2);
 
}




