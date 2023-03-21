const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const cookiesEl = document.querySelector(".cookies");
const okButton = cookiesEl.querySelector("#cookies__btn");

okButton.addEventListener("click", (e) => {
  e.preventDefault();
  animate({
    duration: 1000,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(progress) {
      cookiesEl.style.opacity = 1 - progress;
      progress === 1 ? (cookiesEl.style.display = "none") : null;
    },
  });
});

animate({
  duration: 1000,
  timing(timeFraction) {
    return timeFraction;
  },
  draw(progress) {
    cookiesEl.style.bottom = `-${Math.round(100 - progress * 100)}px`;
  },
});
