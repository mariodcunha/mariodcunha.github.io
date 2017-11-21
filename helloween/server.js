/* Mario Dcunha in server.js */


//Convention to call your framework or library
//I am using 'express' framework here
var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 3000);
app.use(express.static('public')); //the public folder
console.log('Server has started');

//We are now setting up socket here, which picks up from the default node.js that you have installed. 
//Express is only good way of calling all these libraries
var socket = require('socket.io');
var io = socket(server);

console.log('SocketIO is working');

//Socket.io listens for different events and then does something based on what you define
//We need not listen for user input actions, but inputs from other machines through web sockets. 
io.on('connection', newConnection);


//Server listening and working with Client
function newConnection(socket)
{
	console.log('new connection: ' + socket.id);
	
	//Receiving the data from Client
	socket.on('name', dataRec1);
	socket.on('press', dataRec2);

	function dataRec1(data)
	{
		//Send to all including you
		io.sockets.emit('name', data);

		//Send only to others and not to you
		//socket.broadcast.emit('spacebar', data);
	}

	function dataRec2(data)
	{
		//Testing that the data is recieved
		console.log(data);		
		
		io.sockets.emit('press',data);
	}
}
























