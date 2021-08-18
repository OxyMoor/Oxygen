'use strict'
// слайдер 
var i;
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides (n) {
    showSlides(slideIndex += n); 
}

function showSlides (n) {
    var i;
    var slides = document.getElementsByClassName('slider__inner'); 
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i ++) {
        slides[i].style.display = 'none';
    }
    

    slides[slideIndex - 1].style.display = 'flex';
}

// бургер
var burger = document.querySelector('.burger');
var navigation = document.querySelector('.menu');
burger.addEventListener('click', function (event) {
    burger.classList.toggle ('burger__line-christ');
    navigation.classList.toggle ('menu__columns');
});

// скролл вверх
function scrollToTop () {
	var scrollLink = document.querySelector('.footer__btn-top'); // получаем все объекты(можно их сделать ссылками: а.scroll-link), по клику на которые должен быть скролл
	// в данном случае у нас один такой элемент, но чтобы сделать универсальный скрипт - используем цикл для перебора
		scrollLink.addEventListener('click', function (event) {
			event.preventDefault();

			var id = scrollLink.getAttribute('href'); // получили атрибут сслыки - href
			document.querySelector(id).scrollIntoView({ // в этот метод передаем объект с параметрами
				behavior: 'smooth', // тип прокрутки (у нас плавная)
				block: 'start' // куда прокручивать (у нас - к началу)
			});
		});
	
}

scrollToTop();