$(document).ready(function () {

	// -- анімація кнопки "гамбургер".
	var burger = $('.burger');
	var menu = $('#nav .menu');
	burger.click(function () {
		burger.toggleClass('burger-active');
		menu.toggleClass('menu-active');
	});

	var remove_menu = $('.logo-pow, #nav .menu li a');
	remove_menu.click(function () {
		burger.toggleClass('burger-active');
		menu.removeClass('menu-active');
	});


	// -- фіксоване меню при прокрутці.
	var title = $('.title').height();
	$(window).scroll(function () {
		if ($(this).scrollTop() > title - 50) {
			$('#nav').addClass('nav-fixed');
			$('.up-top').addClass('up-down');
		} else {
			$('#nav').removeClass('nav-fixed');
			$('.up-top').removeClass('up-down');
		}
	});

	// -- плавна прокрутка (використовується плагін PageScroll2id);
	$('#nav a, .up-top').mPageScroll2id({
		scrollSpeed: 1500
	});

	// -- слайдер блоку 'ABOUT US'
	$('.sl').slick({
		autoplay: true,
		autoplaySpeed: 8000,
		asNavFor: '.slText'
	});

	$('.slText').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		asNavFor: '.sl'
	});

	// -- слайдер блоку 'CUSTOMERS'
	$('.cust-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

});
