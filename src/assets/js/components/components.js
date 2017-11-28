// ======================================================================
//
// Tabs
//
// ======================================================================

$(function () {
	$('.tabs__nav li').first().addClass('active');
	$('.tab__drawer').first().addClass('active');
	$('.tab__content').hide().first().show();

	// when tabs are tabs
	$('.tabs__nav li').click(function () {

		$('.tab__content').hide();
		var activeTab = $(this).attr('rel');
		$('#' + activeTab).fadeIn();

		$('.tabs__nav li').removeClass('active');
		$(this).addClass('active');

		$('.tab__drawer').removeClass('active');
		$('.tab__drawer[rel^="' + activeTab + '"]').addClass('active');

	});

	// when tabs are accordions
	$('.tab__drawer').click(function () {

		$('.tab__drawer').removeClass('active');
		$(this).addClass('active');

		$('.tab__content').slideUp({
			duration: 400
		});
		var a_activeTab = $(this).attr('rel');
		$('#' + a_activeTab).slideDown({
			duration: 400
		});

		$('.tabs__nav li').removeClass('active');
		$('.tabs__nav li[rel^="' + a_activeTab + '"]').addClass('active');

	});

});

// ======================================================================
//
// Modal
//
// ======================================================================

$(function () {

	$('.modal__trigger').click(function (e) {
		e.preventDefault();

		var activeModal = $(this).attr('href');
		$('#' + activeModal).addClass('is--open');
		$('.overlay').addClass('is--open');

	});

	$('.modal__close, .overlay').click(function () {
		var modal = $('.modal.is--open');

		modal.removeClass('is--open');
		$('.overlay').removeClass('is--open');

	});

});

// ======================================================================
//
// Accordion
//
// ======================================================================

$(function () {
	$('.accordion__title').first().addClass('active');
	$('.accordion__content').hide().first().show();

	$('.accordion__title').on('click', function () {

		$(this).addClass('active').siblings('.accordion__title').removeClass('active');
		$(this).next('.accordion__content').slideDown({
			duration: 400
		}).siblings('.accordion__content').slideUp({
			duration: 400
		});
	});
});

// ======================================================================
//
// Menu
//
// ======================================================================

var menu = document.getElementsByClassName('menu')[0];
var trigger = document.getElementsByClassName('menu__trigger')[0];
var menuOpenTrigger = document.getElementsByClassName('menu__sidebar')[0];

menuOpenTrigger.addEventListener('click', function () {
	menu.classList.toggle('is--open');
});

trigger.addEventListener('click', function () {
	menu.classList.toggle('is--open');
});
