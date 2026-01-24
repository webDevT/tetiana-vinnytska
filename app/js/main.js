document.addEventListener('DOMContentLoaded', function() {
	// Menu button toggle
	const menuBtn = document.querySelector('.menu-btn');
	const menuWrapper = document.querySelector('.menu-wrapper');
	
	if (menuBtn && menuWrapper) {
		menuBtn.addEventListener('click', function() {
			menuBtn.classList.toggle('active');
			menuWrapper.classList.toggle('active');
		});

		// Close menu when clicking on menu links
		const menuLinks = menuWrapper.querySelectorAll('a[href^="#"]');
		menuLinks.forEach(function(link) {
			link.addEventListener('click', function() {
				menuBtn.classList.remove('active');
				menuWrapper.classList.remove('active');
			});
		});
	}

	// Language dropdown toggle
	const langButton = document.querySelector('.lang-button');
	const langSelector = document.querySelector('.lang-selector');
	const langDropdown = document.querySelector('.lang-dropdown');
	const langCurrent = document.querySelector('.lang-current');

	if (langButton && langSelector) {
		langButton.addEventListener('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			langSelector.classList.toggle('active');
		});

		// Close dropdown when clicking outside
		document.addEventListener('click', function(e) {
			if (!langSelector.contains(e.target)) {
				langSelector.classList.remove('active');
			}
		});

		// Change language on click
		if (langDropdown) {
			langDropdown.addEventListener('click', function(e) {
				if (e.target.tagName === 'A') {
					const lang = e.target.getAttribute('data-lang');
					if (lang && langCurrent) {
						langCurrent.textContent = lang;
						langSelector.classList.remove('active');
					}
					// Allow default link behavior - navigation will happen
				}
			});
		}
	}

	// Slick Slider initialization
	const slider = document.querySelector('.slider');
	if (slider) {
		// Use jQuery ready to ensure libraries are loaded
		if (typeof jQuery !== 'undefined') {
			jQuery(document).ready(function($) {
				if ($.fn.slick) {
					$('.slider').slick({
						slidesToShow: 3,
						slidesToScroll: 1,
						autoplay: false,
						dots: true,
						arrows: true,
						infinite: true,
						speed: 500,
						fade: false,
						cssEase: 'linear',
						prevArrow: $('.slider-wrapper .prev'),
						nextArrow: $('.slider-wrapper .next'),
						responsive: [
							{
								breakpoint: 768,
								settings: {
									slidesToShow: 1
								}
							}
						]
					});
				}
			});
		} else if (typeof window.$ !== 'undefined') {
			window.$(document).ready(function($) {
				if ($.fn.slick) {
					$('.slider').slick({
						slidesToShow: 3,
						slidesToScroll: 1,
						autoplay: false,
						dots: true,
						arrows: true,
						infinite: true,
						speed: 500,
						fade: false,
						cssEase: 'linear',
						prevArrow: $('.slider-wrapper .prev'),
						nextArrow: $('.slider-wrapper .next'),
						responsive: [
							{
								breakpoint: 768,
								settings: {
									slidesToShow: 1
								}
							}
						]
					});
				}
			});
		}
	}

	// Fancybox initialization
	if (typeof jQuery !== 'undefined') {
		jQuery(document).ready(function($) {
			if (typeof Fancybox !== 'undefined') {
				Fancybox.bind('[data-fancybox="gallery"]', {
					Toolbar: {
						display: {
							left: [],
							middle: [],
							right: ["close"]
						}
					},
					Thumbs: {
						display: false
					},
					Caption: {
						showOnStart: false
					}
				});
			}
		});
	} else if (typeof window.$ !== 'undefined') {
		window.$(document).ready(function($) {
			if (typeof Fancybox !== 'undefined') {
				Fancybox.bind('[data-fancybox="gallery"]', {
					Toolbar: {
						display: {
							left: [],
							middle: [],
							right: ["close"]
						}
					},
					Thumbs: {
						display: false
					},
					Caption: {
						showOnStart: false
					}
				});
			}
		});
	}

	// Testimonials Slider initialization
	const testimonialsSlider = document.querySelector('.testimonials__slider');
	if (testimonialsSlider) {
		if (typeof jQuery !== 'undefined') {
			jQuery(document).ready(function($) {
				if ($.fn.slick) {
					$('.testimonials__slider').slick({
						slidesToShow: 3,
						slidesToScroll: 1,
						centerMode: true,
						centerPadding: '0',
						autoplay: false,
						dots: true,
						arrows: true,
						infinite: true,
						speed: 500,
						fade: false,
						cssEase: 'linear',
						prevArrow: $('.testimonials__button-prev'),
						nextArrow: $('.testimonials__button-next'),
						responsive: [
							{
								breakpoint: 768,
								settings: {
									slidesToShow: 1,
									centerMode: false
								}
							}
						]
					});
				}
			});
		} else if (typeof window.$ !== 'undefined') {
			window.$(document).ready(function($) {
				if ($.fn.slick) {
					$('.testimonials__slider').slick({
						slidesToShow: 3,
						slidesToScroll: 1,
						centerMode: true,
						centerPadding: '0',
						autoplay: false,
						dots: true,
						arrows: true,
						infinite: true,
						speed: 500,
						fade: false,
						cssEase: 'linear',
						prevArrow: $('.testimonials__button-prev'),
						nextArrow: $('.testimonials__button-next'),
						responsive: [
							{
								breakpoint: 768,
								settings: {
									slidesToShow: 1,
									centerMode: false
								}
							}
						]
					});
				}
			});
		}
	}
});