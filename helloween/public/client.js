


// $('#names').append(username);

// var socket = io()
// socket.on('newMsg', function(data){
//   addMsg(data.username, data.msg)
// })



// function sendMsg()
// {
//   var msg = $('input').val();
//   if(msg.length > 0)
//   {
//     socket.emit('newMsg', {username:username, msg:msg});
//     addMsg(username, msg);
//     $('input').val('')
//   }
// }

// function addMsg(user, msg){
//   $('#messages').append("<p><strong>"+user+": </strong>"+msg+"</p>")

// }





var socket, username;

var x=0, y=0, m=0, n=0, sound;

 var data = 
    { 
      x, y, m, n, sound
    };

socket = io.connect('http://localhost:3000')


//Client input


//Input username
username = prompt('What is your name, stranger...? ')

//Input the button presses
function show1()
{
  data.x=1; data.sound="sound/small-laugh.mp3"; status();
}

function hide1()
{ 
  data.x=0; data.sound="sound/spooky.mp3"; status();
}

function show2()
{
  data.y=1; data.sound="sound/small-laugh.mp3"; status();
}

function hide2()
{
  data.y=0; data.sound="sound/spooky.mp3"; status();
}

function show3()
{
  data.m=1; data.sound="sound/medium-laugh.mp3"; status();
}

function hide3()
{
  data.m=0; data.sound="sound/spooky.mp3"; status();
}


//Client connects to Server > Sending the data to server

//The username > send immediately without dependency on press
socket.emit('name', username);  

//Status of the face
function status()
{
  socket.emit('press', data);     
  // console.log("press");
}


//Client Receiving Data from Server and Final Output

//Receive and Show Username
socket.on('name', function (data)
{
  $('.names').append(" "+data+" ");
});



//Show parts of face and sound when button presses
socket.on('press', function (data)
{
  if(data.x==1)
  {
    $('#eye1').css('visibility','visible');
    $('#laugh').attr('src', data.sound);
  }
  else
  {
    $('#eye1').css('visibility','hidden');
  }

  if(data.y==1)
  {
    $('#eye2').css('visibility','visible');
    $('#laugh').attr('src', data.sound);
  }
  else
    $('#eye2').css('visibility','hidden');

  if(data.m==1)
  {
    $('#mouth').css('visibility','visible');
    $('#laugh').attr('src', data.sound);
  }
  else
    $('#mouth').css('visibility','hidden');

  if(data.x==1 && data.y==1 && data.m==1)
  {
    $('#nose').css('visibility','visible');
    data.sound = "sound/big-laugh.mp3";
    $('#laugh').attr('src', data.sound);
  }
  else
    $('#nose').css('visibility','hidden');

});


/* Trying to give a lightning effect */

// setInterval(function()
//   { 
//     $('#mainImage').css('opacity','0.1');
//     console.log ("dim");
//     setTimeout(wait, 100);
//     $('#mainImage').css('opacity','1');
//     console.log ("brighter");
//     setTimeout(wait, 200);
//     $('#mainImage').css('opacity','0.5');
//     console.log ("dim");
//     setTimeout(wait, 50);
//     $('#mainImage').css('opacity','1');
//     console.log ("brighter");
//     setTimeout(wait, 50);
//     $('#mainImage').css('opacity','0.5');
//     console.log ("dim");
//     setTimeout(wait, 50);
//     $('#mainImage').css('opacity','1');
//     console.log ("brighter");
//   }, 5000);

// function wait()
// {}

// function spook()
// {
// }




/*
Not sure why jQuery was not responding, without even throwing any errors
hence I used html onEvents()

$('#button1').mouseup(function() 
  {
    $('#eye1').css('visibility','hiden');
    console.log(this+" hidden");
  });


$('#button2').mousedown(function() 
  {
    $('#eye2').css('visibility','visible');
    console.log(this+" visible");
  });

$('#button2').mouseup(function() 
  {
    $('#eye2').css('visibility','hidden');
    console.log(this+" hidden");
  });

$('#button3').mousedown(function() 
  {
    $('#mouth').css('visibility','visible');
    console.log(this+" visible");
  });

$('#button3').mouseup(function() 
  {
    $('#mouth').css('visibility','hidden');
    console.log(this+" hidden");
  });

*/


// function face()
// {
//   if(x==1)
//     $('#eye1').css('visibility','visible');

//   else
//     $('#eye1').css('visibility','hidden');

//   if(y==1)
//     $('#eye2').css('visibility','visible');
//   else
//     $('#eye2').css('visibility','hidden');

//   if(m==1)
//     $('#mouth').css('visibility','visible');
//   else
//     $('#mouth').css('visibility','hidden');

//   if(x==1 && y==1 && m==1)
//     $('#nose').css('visibility','visible');
//   else
//     $('#nose').css('visibility','hidden');

// }



















