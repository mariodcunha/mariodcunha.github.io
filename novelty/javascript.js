
//Mario Dcunha
//Javascript Final Project

var randA, randB;
var chosen, chosenURL;

var cart = [""];
var cartCounter=10;
var cartLabel="Cart";

// var bookObject = 
//     { 
//       title: [], 
//       author: [],
//       cover: []
//     };

var bookObject = 
    { 
      title: ["Fantastic Beasts and Where to Find Them: The Original Screenplay", "Harry Potter and the Sorcerer's Stone", "The Ivory Tower and Harry Potter", "Baptizing Harry Potter", "Harry Potter and the Philosopher's Stone", "The Irresistible Rise of Harry Potter", "Harry Potter", "Reading Harry Potter", "Harry Potter and the Classical World", "The Magical Worlds of Harry Potter"], 
      author: ["J.K. Rowling", "J. K. Rowling", "Lana A. Whited", "Luke Bell", "J.K. Rowling", "Andrew Blake", "JK Rowling", "Giselle Liza Anatol", " Richard A. Spencer", "David Colbert"],
      cover: ["http://books.google.com/books/content?id=DU0LDAAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "http://books.google.com/books/content?id=5MQFrgEAC…J&printsec=frontcover&img=1&zoom=1&source=gbs_api", "http://books.google.com/books/content?id=iO5pApw2J…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "http://books.google.com/books/content?id=szF_pLGmJ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "http://books.google.com/books/content?id=39iYWTb6n…C&printsec=frontcover&img=1&zoom=1&source=gbs_api", "http://books.google.com/books/content?id=Aaug_RnI-…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "http://books.google.com/books/content?id=YvQ_AhkJp…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "http://books.google.com/books/content?id=-__ICQemq…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "http://books.google.com/books/content?id=7HgwCgAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "http://books.google.com/books/content?id=Oe3aH0YVI…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"]
    };


var selectButton, deleteButton;


function searchBooks()
{

  var searchText = "harry potter";
  //var searchText = $("#books").val();

    if(searchText == "")
    {
      $('#generatePage').empty();
      $('#result').empty();
      title=$('<p class="center-align white-text">Please enter a book name.</p>');
      title.appendTo('#result');
    }

    else
    {
      $('#generatePage').empty();   
      $('#result').empty();
      $('#bookInfo').empty();
      var url = "";
      var img = "";
      var title = "";
      var author = "";

      $.get("https://www.googleapis.com/books/v1/volumes?q=" + searchText, function(response)
      {

        for(i=0; i<response.items.length; i++)
        {

           bookInfo=$('<div id="bookInfo'+i+'"></div>');
           //console.log(bookInfo);  

           title=$('<p id="title'+i+'" class="center-align white-text">' + response.items[i].volumeInfo.title + '</p>');  
           author=$('<p id="author'+i+'" class="center-align white-text">by ' + response.items[i].volumeInfo.authors + '</p>');
           img = $('<img id="thumbnail'+i+'" class="center-align" id="dynamic">');   
           url= response.items[i].volumeInfo.imageLinks.thumbnail;
           selectButton = $('<button id="selectButton'+i+'" class="btn">Select</button>');

           title.appendTo(bookInfo);
           author.appendTo(bookInfo);
          
           img.attr('src', url);
           img.appendTo(bookInfo);
           
           selectButton.appendTo(bookInfo);
           bookInfo.appendTo('#result');


          selectButton.click(function() 
          {
            //console.log(this.id.slice(12));
            chosen = this.id.slice(12);

            bookObject.title[cartCounter] = $('#title'+chosen).text();
            bookObject.author[cartCounter] = $('#author'+chosen).text().slice(3);
            bookObject.cover[cartCounter] = response.items[chosen].volumeInfo.imageLinks.thumbnail;

            //chosenURL
            //console.log(chosenURL);
            

            $('#bookInfo'+chosen).empty();
            $('#bookInfo'+chosen).css('padding','0');

             console.log(bookObject);
             cartCounter++;
             cartUpdate();

            // console.log($('#thumbnail'+chosen));
            //   $('#bookInfo'+chosen).css('background-color','#f44335');

          });

        }

       });
    }

}


$("#myform").submit(function()
{ 
  searchBooks();
  return  false;
});


function cartUpdate()
{
    if(cartCounter>0)
    {
      cartLabel = cartCounter+" in Cart";
    }
    else
    {
      cartLabel = "Cart";
    }

    $('#cartButton').text(cartLabel);
}


$("#cartButton").mouseenter(function()
{
  $('#cartButton').text("View Cart");
});


$("#cartButton").mouseleave(function()
{
  cartUpdate();
});



//Clicking View Cart
$('#cartButton').click(function()
{
    $('#generatePage').empty();
    $('#collage').empty();
    $('#result').empty();

     for(i=0; i<cartCounter; i++)
     {

           bookInfo = $('<div id="bookInfo'+i+'"></div>');

           title=$('<p id="title'+i+'" class="center-align white-text">' + bookObject.title[i] + '</p>');  
           author=$('<p id="author'+i+'" class="center-align white-text">by ' + bookObject.author[i] + '</p>');
           img = $('<img id="thumbnail'+i+'" class="center-align" id="dynamic">');   
           url= bookObject.cover[i];
           deleteButton = $('<button id="deleteButton'+i+'" class="btn">Delete</button>');

           title.appendTo(bookInfo);
           author.appendTo(bookInfo);
          
           img.attr('src', url);
           img.appendTo(bookInfo);
           
           deleteButton.appendTo(bookInfo);
           bookInfo.appendTo('#result');

       
          deleteButton.click(function() 
          {
            //console.log(this.id.slice(12));
            chosen = this.id.slice(12);

            //remove 1 element at 'chosen'
            bookObject.title.splice(chosen, 1); 
            bookObject.author.splice(chosen, 1); 
            bookObject.cover.splice(chosen, 1); 

            $('#bookInfo'+chosen).empty();
            $('#bookInfo'+chosen).css('padding','0');

             console.log(bookObject);
             cartCounter--;
             cartUpdate();

            // console.log($('#thumbnail'+chosen));
            //   $('#bookInfo'+chosen).css('background-color','#f44335');
          }); 
    }
});


//Clicking Generate
$('#generate').click(function()
{
    $('#generatePage').empty();
    $('#result').empty();

    if(bookObject.cover.length<=0)
    {
      title=$('<p class="center-align white-text">Please add a book</p>');
      title.appendTo('#result');
    }

    else
    {
      collage = $('<div id="collage"></div>');

      for(i=0; i<bookObject.cover.length; i++)
      { 

        img = $('<img id="collageThumbnail'+i+'" class="center-align">');
        url= bookObject.cover[i];

        img.attr('src', url);
        img.appendTo(collage);

        img.css('opacity','0.'+(Math.floor(Math.random()*(9-7))+7));
        img.css('left',(Math.floor(Math.random()*(20-19))+19)+'vw');
        img.css('top',(Math.floor(Math.random()*(40-15))+15)+'vh');
      }

    $('#collage').css('width',(bookObject.cover.length*10)+'%');
    collage.appendTo(generatePage);



    }

    

});






// var request = require('request');
// apiKey = acc_a0c2e28aa0c8f80;
// apiSecret = be22c86ed10c8994a62d57d258641fba;
// imageUrl = 'http://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg';

// request.get('https://api.imagga.com/v1/colors?url='+encodeURIComponent(imageUrl), function (error, response, body) {
// console.log('Status:', response.statusCode);
// console.log('Headers:', JSON.stringify(response.headers));
// console.log('Response:', body);
// }).auth(apiKey, apiSecret, true);


// '+randA+randB+'
// response.items[i].volumeInfo.infoLink





























