

$(document).ready(function() {

	//CRAZY opens a new window with minimal header || not working with video
	// window.open(location.href, "detab", "toolbar=0"); 
	// window.close();


	var serialAud = $('#serial'),
		serialBtn = $('#serial-btn');

	serialBtn.click(function() {
		serialAud.get(0).play();
	});

	var yonceAud = $('#yonce'),
		yonceBtn = $('#yonce-btn');

	yonceBtn.click(function() {
		yonceAud.get(0).play();
	});
	

	$( "#earmoji-show" ).click(function() {
		$('.earmoji-plugin-container').toggle('hide');
	});


});