//
// You have to have the [0] thingys to select play/pause!?!
// 
// Do not use preload, or autoplay - will auto download video
//
var $videos = $('video');

$('.animate-this').on('click', function(event) {
	event.preventDefault();
	var $this = $(this);
	var dataAttr = $this.data('vid-id');
	var video = $('video[data-vid-id="' + dataAttr + '"]');
	$videos.hide()
	video.show();


	if (video[0].paused) {
		video[0].play();
		$videos.hide();
        $('.hide-video').show();
		video.show();
	} else {
		// video[0].pause();
	}
});


