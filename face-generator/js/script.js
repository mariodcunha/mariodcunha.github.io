
//Mario Dcunha
//Face Generator

var hair = ["hair1", "hair2", "hair3", "hair4", "hair5"];
var eyes = ["eyes1", "eyes2", "eyes3", "eyes4", "eyes5"];
var nose = ["nose1", "nose2", "nose3", "nose4", "nose5"];
var mouth = ["mouth1", "mouth2", "mouth3", "mouth4", "mouth5"];

var counter = [0, 0, 0, 0, 0 /*hair eyes nose mouth skin */];


// wait until dom is loaded then run init function
$(document).ready(function()
{
	init();
}); 


//Actions of each button
$('#button-hair').click(function()
{
  // alert();
  // $('#hair').css("visibility","hidden");
  $('#hair').css('background-image','url(img/'+hair[counter[0]]+'.png');
  counter[0]++;

  if(counter[0] > 4)
    counter[0] = 0;

}); 




$('#button-eyes').click(function()
{
  // alert();
  // $('#hair').css("visibility","hidden");
  $('#eyes').css('background-image','url(img/'+eyes[counter[1]]+'.png');
  counter[1]++;

  if(counter[1] > 4)
    counter[1] = 0;
}); 



$('#button-nose').click(function()
{
  // alert();
  // $('#hair').css("visibility","hidden");
  $('#nose').css('background-image','url(img/'+nose[counter[2]]+'.png');
  counter[2]++;

  if(counter[2] > 4)
    counter[2] = 0;
}); 




$('#button-mouth').click(function()
{
  // alert();
  // $('#hair').css("visibility","hidden");
  $('#mouth').css('background-image','url(img/'+mouth[counter[3]]+'.png');
  counter[3]++;

  if(counter[3] > 4)
    counter[3] = 0;
}); 





$('#button-skin').click(function()
{
  // alert();
  // $('#hair').css("visibility","hidden");
  shuffleFace();
}); 




function randomNum(number) 
{ 
    return Math.floor(Math.random()*number);
}



function  shuffleFace()
{
  $('#hair').css('background-image','url(img/'+hair[randomNum(5)]+'.png');
  $('#eyes').css('background-image','url(img/'+eyes[randomNum(5)]+'.png');
  $('#nose').css('background-image','url(img/'+nose[randomNum(5)]+'.png');
  $('#mouth').css('background-image','url(img/'+mouth[randomNum(5)]+'.png');
  $('#skin').css('background-image','url(img/'+skin[randomNum(5)]+'.png');
}

function init()
{
  shuffleFace();
}
