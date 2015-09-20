$(document).ready(function() {
	var capturedAudio = $('#captured')[0],
		playBtn = $('play-btn'),
		pauseBtn = $('pause-btn'),
		progress = $('.progress-filled');

	capturedAudio.pause();

	function capUpdateProgress() { //progress bar tracks audio duration and adjusts width according to current time
	  var value = 0;
	  if (capturedAudio.currentTime > 0) {
	     value = Math.floor((100 / capturedAudio.duration) * capturedAudio.currentTime);
	  }
	  progress.css('width', value + '%');
	}


	$('.captured-audio').click(function() {
		if (capturedAudio.paused === false) {
		    capturedAudio.pause();
		    console.log('hi');
		} else {
		    capturedAudio.play();
		}
	});

	var newAudio = $('#result')[0],
		newPlayBtn = $('.new-play-btn'),
		newPauseBtn = $('.new-pause-btn'),
		newprogress = $('.new-progress-filled');

	newAudio.pause();

	function newUpdateProgress() { //progress bar tracks audio duration and adjusts width according to current time
	  var value = 0;
	  if (newAudio.currentTime > 0) {
	     value = Math.floor((100 / newAudio.duration) * newAudio.currentTime);
	  }
	  progress.css('width', value + '%');
	}

	newPlayBtn.click(function() {
		if (newAudio.paused === false) {
		    newAudio.pause();
		    console.log('hi');
		} else {
		    newAudio.play();
		}
	});

	capturedAudio.addEventListener('timeupdate', capUpdateProgress, false);

	newAudio.addEventListener('timeupdate', newUpdateProgress, false);

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

	var lilJonAud = $('#lilJon'),
		lilJonBtn = $('#lilJon-btn');

	lilJonBtn.click(function() {
		lilJonAud.get(0).play();
	});
	
	

	$( "#earmoji-show" ).click(function() {
		$('.earmoji-plugin-container').toggle('hide');
	});


});