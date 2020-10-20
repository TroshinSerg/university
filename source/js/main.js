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
			$('.user__dropdown').fadeOut(duration);
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
			$('.notifications__dropdown').fadeOut(duration);
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

(function() {
	$('.js-events-slider').owlCarousel({
    loop: true,
		margin: 30,
		responsiveClass: true,
		navContainer: '.events__nav',
    responsive: {
			0: {
				items: 2,
				nav: false
			},
			576: {
				items:3,
				nav: false
			},
			992: {
				items: 2,
				margin: 46,
				nav: true
			},
			1200: {
				items: 3,
				nav: true
			}




    }
	});
})();

(function() {
	var overlayClass = 'webpage__overlay';
	var modal = $('.modal');
	var modalCloseBtn = modal.find('.modal__close');

	setTimeout(function() {
		$('body').append(setOverlay());

		var overlay = $('.' + overlayClass);
		overlay.fadeIn(duration);
		modal.delay(duration).fadeIn(duration);
		modalCloseBtn.on('click', closeModal);

	}, 5000);

	function setOverlay() {
		var overlay = $('<div></div>');
		overlay.addClass(overlayClass);
		overlay.on('click', closeModal);
		modalCloseBtn.off('click', closeModal);
		return overlay;
	}

	function closeModal() {
		var overlay = $('.' + overlayClass);

		modal.fadeOut(duration);
		overlay.delay(duration).fadeOut(duration);
		setTimeout(function() {
			overlay.remove();
		}, 800)



	}
})();
