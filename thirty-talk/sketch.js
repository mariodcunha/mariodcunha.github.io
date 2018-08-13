
//Mario Dcunha

var i=0;
var itemVar = '', temp, itemTitle='';


function imgLoad()
{
  temp = $('title').text();
  itemVar = temp.slice(0,2);

  switch(itemVar)
  {
    case '01': itemTitle = "Product Roadmap";
  }

  document.getElementById('spot_number_item').innerHTML = itemVar;
  document.getElementById('item_heading').innerHTML = itemTitle;

  i++;

  var imgSource = "images/"+itemVar+"/"+i+".jpg";
  var imgSpace = "imgSpace"+i;

  var divimg = document.getElementById('imageSpace');
  console.log(divimg);
  divimg = $('#imageSpace').attr('id', imgSpace);
  console.log(divimg);

  var img = $("<img class='thirtyimg'></img><br><br>");
  img.attr('src', imgSource);

  $("#"+imgSpace).append(img);
}

