

$(document).ready(function() 
{
	// console.log("doc ready");
	$('.knowMore').click(function()
	{
		console.log("clicked");
		$('.knowMore').slideUp();
		$('#mobileShow3').css("display","inline");
		$('#mobileShow3').slideDown("slow");
	});
});



// $( document.body ).click(function () {
//   if ( $( "div:first" ).is( ":hidden" ) ) {
//     $( "div" ).slideDown( "slow" );
//   } else {
//     $( "div" ).hide();
//   }
// });