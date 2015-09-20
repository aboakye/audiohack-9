$(document).ready(function() {
	var capturedAudio = $('#captured')[0],
		playBtn = $('play-btn'),
		pauseBtn = $('pause-btn'),
		progress = $('.progress-filled');

	function updateProgress() { //progress bar tracks audio duration and adjusts width according to current time
	  var value = 0;
	  if (capturedAudio.currentTime > 0) {
	     value = Math.floor((100 / capturedAudio.duration) * capturedAudio.currentTime);
	  }
	  progress.css('width', value + '%');
	}

	function playPause() { //on click play and pause buttons toggle
	  pauseBtn.removeClass('hide');
	  if (capturedAudio.paused === false) {
	      capturedAudio.pause();
	      playBtn.removeClass('hide');
	      pauseBtn.addClass('hide');
	  } else {
	      capturedAudio.play();
	      playBtn.addClass('hide');
	      pauseBtn.removeClass('hide');
	  }
	}

	playBtn.click(playPause());
	capturedAudio.addEventListener('timeupdate', updateProgress, false);

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

	var airhornAud = $('#airhorn'),
		airhornBtn = $('#airhorn-btn');

	airhornBtn.click(function() {
		airhornAud.get(0).play();
	});
	
	var gabrielAud = $('#gabriel'),
		gabrielBtn = $('#gabriel-btn');

	gabrielBtn.click(function() {
		gabrielAud.get(0).play();
	});

	var snoopAud = $('#snoop'),
		snoopBtn = $('#snoop-btn');

	snoopBtn.click(function() {

		snoopAud.get(0).play();
	});

	var clapAud = $('#clap'),
		clapBtn = $('#clap-btn');

	clapBtn.click(function() {
		clapAud.get(0).play();
	});

	var laughAud = $('#laugh'),
		laughBtn = $('#laugh-btn');

	laughBtn.click(function() {
		laughAud.get(0).play();
	});
	
	var sadAud = $('#sad'),
		sadBtn = $('#sad-btn');

	sadBtn.click(function() {
		sadAud.get(0).play();
	});
	
	

	$( "#earmoji-show" ).click(function() {
		$('.earmoji-plugin-container').toggle('hide');
	});

});