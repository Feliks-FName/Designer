$(function () {

	let worksSlider = $('[data-slider="works__slider"]');

	/*Слайдер: https://kenwheeler.github.io/slick/ */

	worksSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true,

	});

	/* Переключение слайдов по кнопкам */
	$('.js-previos').on('click', function (e) {
		e.preventDefault();

		/* Ищем родителя открытого окна и там ищем копки слайдера  */
		let currentSlider = $(this).parents('.modal').find('[data-slider="works__slider"]');

		currentSlider.slick('slickPrev');
	});

	$('.js-next').on('click', function (e) {
		e.preventDefault();

		/* Ищем родителя открытого окна и там ищем копки слайдера  */
		let currentSlider = $(this).parents('.modal').find('[data-slider="works__slider"]');

		currentSlider.slick('slickNext');
	});

	/* Якоря */

	$('a[href^="#"]').click(function () {
		let target = $(this).attr('href');

		let brg = $('nav');
		brg.removeClass('show');

		$('html, body').animate({
			scrollTop: $(target).offset().top - 50
		}, 500);
	});

});
