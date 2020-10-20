'use strict';
var duration = 400;

(function() {
	var notify = $('.notify');
	var notifyClose = $('.notify__close');

	notifyClose.on('click', function() {
		notify.slideUp(duration);
	});
})();
