$(document).ready(function() {
	var capturedAudio = $('#captured')[0],
		playBtn = $('play-btn'),
		pauseBtn = $('pause-btn'),
		progress = $('.progress-filled');

	function capUpdateProgress() { //progress bar tracks audio duration and adjusts width according to current time
	  var value = 0;
	  if (capturedAudio.currentTime > 0) {
	     value = Math.floor((100 / capturedAudio.duration) * capturedAudio.currentTime);
	  }
	  progress.css('width', value + '%');
	}

	function capPlayPause() { //on click play and pause buttons toggle
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

	var newAudio = $('#result-audio')[0],
		newPlayBtn = $('new-play-btn'),
		newPauseBtn = $('new-pause-btn'),
		newprogress = $('.new-progress-filled');

	function newUpdateProgress() { //progress bar tracks audio duration and adjusts width according to current time
	  var value = 0;
	  if (capturedAudio.currentTime > 0) {
	     value = Math.floor((100 / capturedAudio.duration) * capturedAudio.currentTime);
	  }
	  progress.css('width', value + '%');
	}

	function newPlayPause() { //on click play and pause buttons toggle
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

	playBtn.click(capPlayPause());
	capturedAudio.addEventListener('timeupdate', capUpdateProgress, false);
	newPlayBtn.click(newPlayPause());
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