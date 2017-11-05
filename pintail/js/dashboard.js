
//Global variables
var i=0;
var imgClickedId;
var images;
var imgSwitch = 0;

//Dynamic Welcome
var update = setInterval(function()
{

	var text = ["Hi", "Namaste", "Ola", "Bonjour", "Nihao", "Ciao", "Merhaba", "Guten Tag"];
	var welcome = document.getElementById("welcome-title");
	welcome.style.transition = "all 0.5s";

	// console.log(text.length);

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


//PopUp Images Gallery

function getImages()
{
	images = document.getElementsByClassName("trayimg-gallery");
    var images_number= images.length;

    //popup(images_number);

    //Assign IDs to those images
    var q = 0;

    //use a for loop to put all the images in columns
    for(var i=0; i<images_number; i++)
    {
            
            //loading the images into a new <img> tag
            images[i].id = "gallery_"+i;

            images[i].addEventListener 
            ("click",   function(event)
                        {
                            popup(event.target.id);
                            imgClickedId = event.target.id;
                        }
            );

    }
}


function popup(images_number)
{
	
    //record the index of the image showing in the popup
    imgClickedId = event.target.id;

    console.log("hey there "+imgClickedId);

    var popup = document.getElementById("popup");
    var img = document.getElementById(imgClickedId);
    // var img = document.getElementById(imgClickedId);
    // var body1 = document.getElementsByTagName("body");

    //img.src = imgClickedId.src;

    //make the popup div appear
    popup.style.zIndex = "1000";
    popup.style.display = "block";

    var pic = document.getElementById("pic");
    pic.src	= img.src;

    //if click on image in the popup, the popup will be closed.
    img.addEventListener 
    ("click",   function (event)
                {
                    close();
                }    
    );

}
 



function close()
{
	console.log("inside close");
    var popup = document.getElementById("popup");
    popup.style.xIndex = "-1";
    popup.style.display = "none"
}



function change(direction)
{
var numOfImg = images.length;

//a variable storing the index of the next image

var next = 0;
var img = document.getElementById("pic");

//if direction is 1, switch to the right.
if (direction==1)
{
    //should be imgSwitch+1>=numOfImg
    //dont use imgSwitch+1 it can be wrong. ex: imgSwitch is 5, imgSwitch=1 is 51, not 6
    //careful when using +
    //if the index is larger than the array length, make the next index 0,


    if (imgSwitch>numOfImg-2)
    {   
        next=0;
        console.log(imgSwitch);
    }
    else
    {
        imgSwitch++;
        next = imgSwitch;
        console.log(imgSwitch);
    }

}                

else if (direction==-1)
{
    if(imgSwitch-1<0)
    {
        next=numOfImg-1;
        console.log(imgSwitch);
    }

    else
    {
        next=imgSwitch-1;
        console.log(imgSwitch);
    }
}

//store the index of the showing image into imgSwitch
//img.src= "./images/"+images[next].src;
console.log("im here "+img.src);
imgSwitch= next;
popup();

}


 function showMapImage()
 {
    console.log(event.target.id);

    var pintailImage = document.getElementById(event.target.id+"-img");
    var vis=0;

    pintailImage.style.visibility = "visible"; 
}




function hideImage()
 {

    var pintailImage = document.getElementById(event.target.id);
    var vis=0;

   pintailImage.style.visibility = "hidden";
}














