'use strict';
var duration = 400;

(function() {
	var notify = $('.notify');
	var notifyClose = $('.notify__close');

	notifyClose.on('click', function() {
		notify.slideUp(duration);
	});
})();

(function() {
	var toggle = $('.menu-toggle');
	var toggleModifier = 'menu-toggle--active';
	var navigation = $('.navigation');

	toggle.on('click', function() {
		$(this).toggleClass(toggleModifier);
		navigation.slideToggle(duration);
	});
})();

(function() {
	var notificationsBtn = $('.notifications__btn');
	var notificationsDropdown = $('.notifications__dropdown');
	var isOpen = false;

	notificationsBtn.on('click', function(evt) {
		evt.stopPropagation();
		if(isOpen) {
			closeDropdown();
		} else {
			notificationsDropdown.fadeIn(duration);
			$('body').on('click', closeDropdown);
			isOpen = true;
		}
	});

	function closeDropdown() {
		notificationsDropdown.fadeOut(duration);
		$('body').off('click', closeDropdown);
		isOpen = false;
	}
})();

(function() {
	var userImage = $('.user__image');
	var userDropdown = $('.user__dropdown');
	var isOpen = false;

	userImage.on('click', function(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		if(isOpen) {
			closeDropdown();
		} else {
			userDropdown.fadeIn(duration);
			$('body').on('click', closeDropdown);
			isOpen = true;
		}
	});

	function closeDropdown() {
		userDropdown.fadeOut(duration);
		$('body').off('click', closeDropdown);
		isOpen = false;
	}
})();
