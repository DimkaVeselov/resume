const swiper = new Swiper('.swiper-container', {
	
	autoHeight: true,
	grabCursor: true,
	lazy: true,
	preloadImages: false,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},

});