// document.addEventListener('DOMContentLoaded', function(event){
//     	const modal = document.querySelector('.modal');
//     	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//     	const closeBtn = document.querySelector('.modal__close');
//     	const switchModal = () => {
//     			modal.classList.toggle('modal--visible');
//     	}
//     document.addEventListener('keyup', (event)  => {
//     			if(event.keyCode === 27) {
//     			modal.classList.remove('modal--visible');
//     			};
//     	});
//     	document.addEventListener('click', (event) => {
//     		if(event.target === modal) {
//     		modal.classList.remove('modal--visible')
//     		};
//     	});
//     	modalBtn.forEach(element => {
//     			element.addEventListener('click', switchModal);
//     	});
    
//     	closeBtn.addEventListener('click', switchModal);
// 		});
		
    
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]');
        closeBtn = $('.modal__close');

    modalBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });
$(document).on('keyup', function(event) {
    if (event.keyCode === 27) {
      modal.removeClass('modal--visible')
    };
	});
$(modal).on('click', function(event) {
		if (event.target === this) {
			modal.removeClass('modal--visible')
		};
	});
	
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	
	var next = $('.swiper-button-next');
	var prev = $('.swiper-button-prev');
	var bullets = $('.swiper-pagination');
	var nextSecond = $('.swiper-button-next--second');
	var bulletsSecond = $('.swiper-pagination--second');

	next.css('left', prev.width() + 10 + bullets.width() + 10)
	bullets.css('left', prev.width() + 10)

	nextSecond.css('left', prev.width() + bulletsSecond.width() + 20);
  bulletsSecond.css('left', prev.width() + 10);

});