
//Mario Dcunha

var namePerson = "";

var grammarObj = 
{
  "S": ["#Billionaire# #Destroys# #Publication# #Prep# #Reason#"],
  "Billionaire": ["Peter Thiel", "Mark Zuckerberg", "Elon Musk", "Sergey Brin", "Bill Gates", "Eric Schmidt","Larry Ellison", "Paul Graham", "Larry Page", "Dustin Moskovitz", "Jay Koum", "David Duffield", "Michael Bloomberg", "Tim Cook", "Jeff Bezos", "David Koch", "Jim Walton", "Steve Ballmer", "Donald Trump", "Mark Cuban","Narendra Modi", "Rahul Gandhi"],
  "Destroys": ["bankrupts", "financially ruins", "anonymously funds legal action against", "sues", "suppresses writing by", "defunds", "attempts to #Verb#", "attempts to #Verb#", "attempts to #Verb#"],
  "Verb": ["silence", "defund", "bankrupt", "destroy", "suppress writing by", "smother", "ruin", "take down"],
  "Publication": ["Gawker","New York Times","Us Weekly","The Wall Street Journal", "Highlights Magazine", "Car and Driver", "Vogue", "The New Yorker", "TMZ", "The New Republic", "Techcrunch","Politico","Time Magazine","Sports Illustrated", "Playboy", "Men's Health", "Cosmopolitan", "GQ", "Harper's", "Lapham's Quarterly", "Mother Jones", "Jacobin", "The Guardian", "USA Today", "Buzzfeed", "The Intercept", "Vice", "Washington Post", "The Onion", "Rookie Magazine"],
  "Prep": ["because of", "over", "because of long-simmering resentment over", "in reaction to", "in retaliation over", "as revenge for", "in anger over", "to get even over", "in hysterical rage over"],
  "Reason": ["spilled Lime-A-Rita", "#Diff# yacht directions", "misleading stock tip", "leaked jorts photo", "bad chili dog recommendation", "#Diff# crossword puzzle", "difficult-to-use VR story", "unfunny comic strip", "mean comment on website from #USERNAME#", "disappointing weather forecast", "condescending Rogaine ad", "documentary on novelty Poke'mon condoms", "leaked rare insect sex tape", "negative coverage of his #PROJECTZ#", "negative review of his #PROJECTZ#"],
  "Diff" : ["confusing", "hard", "difficult", "challenging", "sloppy"],
  "USERNAME" : ["India", "USA", "Wonderland", "the bathroom", "a coal mine", "the bar", "China"],
  "PROJECTZ": ["high-stakes fashion reality show", "SHOWZ performance", "self-directed mumblecore film", "solo electonic music project", "Star Wars memorabilia collection", "inaugural foot modeling photoshoot", "post-impressionist painting of Rand Paul", "Literotica.com submissions", "embarrassing fursona", "glass harp rendition of I Will Survive"],
  "SHOWZ" : ["American Ninja Warrior", "Dancing with the Stars", "Jeopardy", "Deal or No Deal"]
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var grammar = tracery.createGrammar(grammarObj);


var baseURL = "https://api.giphy.com/v1/gifs/search?q=";
var api = "&api_key=liJmvnJR1o2rFS6mYIY6biZ70S2YSF9L&limit=10";
var searchURL = "";

var httpRequest, mainTitle, imageSource;

function generate()
{
  mainTitle = grammar.flatten("#S#");

  $('#headline').text(mainTitle);

  makeRequest();
}


function makeRequest() 
{   
    searchURL = baseURL + mainTitle + api;

    httpRequest = new XMLHttpRequest();

    if (!httpRequest)
      alert("ERROR!");

    httpRequest.onreadystatechange = fillInfo;

    httpRequest.open("GET", searchURL);
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
      }
    }

  var parsed = JSON.parse(responseContent);
  // console.log(parsed);

  $('#pic').attr("src",parsed.data[randomMath(0,9)].images.original.url);
  $('#randomVolume').text("Vol. "+randomMath(1,1000));
  $('#date').text(calendar(parsed.data[0].import_datetime.slice(0,10)));
  
  var tempMainTitle = mainTitle.slice(mainTitle.indexOf(' ')+1,mainTitle.length);
  // wordSpace(tempMainTitle);
  namePerson = wordSpace(mainTitle) +" "+ wordSpace(tempMainTitle);
  // console.log(namePerson);

  var stories = 
  [
  `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using ${namePerson} is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use ${namePerson} as their default model text, and a search for '${namePerson}' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
  `Contrary to popular belief, ${namePerson} is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a ${namePerson} passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ${namePerson} comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The standard chunk of ${namePerson} used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
  `There are many variations of passages of ${namePerson} available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of ${namePerson}, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the ${namePerson} generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate ${namePerson} which looks reasonable. The generated ${namePerson} is therefore always free from repetition, injected humour, or non-characteristic words etc. ${namePerson} is simply dummy text of the printing and typesetting industry. ${namePerson} has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ${namePerson} passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ${namePerson}.`
  ];

  $('#storyText').append(stories[randomMath(0,3)]+stories[randomMath(0,3)]);

}

function calendar(n)
{
  let date = n.slice(8,10);
  let year = n.slice(0,4);
  let month = monthNames[parseInt(n.slice(5,7))];

  return month +" "+ date +", "+ year;
}


function wordSpace(string)
{

  var temp1 = string.slice(0,string.indexOf(' '));
  return temp1;
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
