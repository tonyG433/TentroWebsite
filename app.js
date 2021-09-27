// Load the particles from the .json file
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - gg');
});

$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	
		if ( $('#menu').css('visibility') == 'visible' ){
		    $('#menu').css('visibility','hidden');
		} else {
		    $('#menu').css('visibility','visible');
			
	    }
	});
});
