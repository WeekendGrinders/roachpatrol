$(document).ready(function() {
	//$('#overlay').show();
	})


$('button').click(function(){
	$('#overlay').hide();
});

function getZip() {
	var x = document.getElementById("zip").value;
	$('.row').append('<h2>' + x  + '</h2>');
	}

	

