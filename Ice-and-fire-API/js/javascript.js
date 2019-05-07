
var choice, currentChoice, houseName;

var titleFont = ['120px', '110px', '110px', '100px', '110px', '100px', '110px', '120px', '80px', '80px'];

var house = ['House Stark','House Lannister','House DT','House Life','House Targareyan','House Baratheon','House Mormont','House Greyjoy','House Clegane'];

var charImage = ['images/new-wonder-0.jpg', 'images/new-wonder-1.jpg', 'images/new-wonder-2.jpg', 'images/new-wonder-3.jpg', 'images/new-wonder-4.jpg', 'images/new-wonder-5.jpg', 'images/new-wonder-6.jpg', 'images/new-wonder-7.jpg', 'images/new-wonder-8.jpg', 'images/new-wonder-9.jpg', 'images/new-wonder-10.jpg', 'images/new-wonder-11.jpg', 'images/new-wonder-12.jpg', 'images/new-wonder-13.jpg','images/ancient.jpg','images/new.jpg'];

	
function begin()
{
	choice = 0;
	build();
}






var baseURL = "https://anapioficeandfire.com/api/characters/";

var id;
id = Math.floor(Math.random() * (10 - 1)) + 1;

var fullURL = baseURL + id;

var aliases = document.getElementById("aliases");
var gender = document.getElementById("gender");
var culture = document.getElementById("culture");
var born = document.getElementById("born");
var playedBy = document.getElementById("playedBy");


var httpRequest;

function consoleLogHTML(value)
{
  var el = document.createElement('p')
  el.innerHTML = value
  document.body.append(el)
}


function startbuild()
{
	makeRequest();
}


function makeRequest() 
{

    currentID = id;
    choice = id;
  
    while(id == currentID) //to prevent immediate repeat of choice
      id = Math.floor(Math.random() * (10 - 1)) + 1;
    
    fullURL = baseURL + id;

    httpRequest = new XMLHttpRequest();

    if (!httpRequest)
    {
      aliases.innerHTML = "Shame! Shame!";
      return false;
    }

    httpRequest.onreadystatechange = fillInfo;

    httpRequest.open(
      "GET", fullURL
    );
    httpRequest.send();

    fillInfo();

}

  
  function fillInfo() 
  {
    
    var responseContent;

    if (httpRequest.readyState == XMLHttpRequest.DONE) 
    {
      if (httpRequest.status == 200) 
      {
        responseContent = httpRequest.responseText;
        console.log(responseContent);

        var parsed = JSON.parse(responseContent);
        
          aliases.innerHTML = parsed.aliases;
          culture.innerHTML = parsed.culture;
          gender.innerHTML = parsed.gender;
          born.innerHTML = parsed.born;
          playedBy.innerHTML = parsed.playedBy;


		console.log(parsed.aliases);
		console.log(parsed.culture);
		console.log(parsed.gender);
		console.log(parsed.born);
		console.log(parsed.playedBy);

  		}
      else 
      {
        aliases.innerHTML = "Valar Morghulis!";
      }
    }

    selectedcharImage = charImage[choice];
	$('body').attr('background',selectedcharImage);

	houseName = house[choice];
	$('#house').text(houseName);

  }
  
  



