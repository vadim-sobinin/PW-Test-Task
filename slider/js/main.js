'use strict';

const slider = () => {
  const sliderBlock = document.querySelector('.slider-content');
  const slides = document.querySelectorAll('.slider-item');
  let dots;
  const dotsBlock = document.querySelector('.slider-dots');
  let currentSlide = 0;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const addDots = () => {
    for (let i = 1; i <= slides.length; i++) {
      const newDot = document.createElement('li');
      newDot.classList.add('dot');
      i === 1 ? newDot.classList.add('dot-active') : null;
      dotsBlock.append(newDot);
    }
    dots = document.querySelectorAll('.dot');
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .slider-btn')) {
      return;
    }

    prevSlide(slides, currentSlide, 'slider-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    currentSlide == slides.length ? (currentSlide = 0) : null;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'slider-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  });

  addDots();
};

slider();
