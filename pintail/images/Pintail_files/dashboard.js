
var i=0;

var update = setInterval(function()
{

	var text = ["Hi", "Namaste", "Ola", "Bonjour", "Nihao", "Ciao", "Merhaba", "Guten Tag"];
	var welcome = document.getElementById("welcome-title");
	welcome.style.transition = "all 0.5s";

	console.log(text.length);

	if(i<text.length)
	{
		welcome.innerHTML = text[i]+" Mario!";
	}
	else
	{
		i=0;
		welcome.innerHTML = text[i]+" Mario!";
	}

	i++;

},2000);
