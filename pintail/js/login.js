
//function to animate the login inputs

username.addEventListener("input", function(e) 
{
      var uvalue = document.getElementById("username").value;
      var pvalue = document.getElementById("password").value;
      var pwd = document.getElementById("password");

      var video = document.getElementById("bgvid");

      if(uvalue.length>0 || pvalue.length>0)
      {
        username.style.color = "#FFFFFF";
        pwd.style.color = "#FFFFFF";

        username.style.borderColor = "#FFFFFF";
        pwd.style.borderColor = "#FFFFFF";

        video.style.filter = "grayscale(100%)";

      }
}
);


function  highlightLogo()
{
  var titleVar = document.getElementById("mainTitle");

  titleVar.style.color = "#FFFFFF";
  titleVar.style.transition = "all 0.5s";
}

function normalTitle()
{
  var titleVar = document.getElementById("mainTitle");
  // titleVar.style.color = "#000000";
  titleVar.style.transition = "all 0.5s";
}


