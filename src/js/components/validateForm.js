const form = document.querySelector(".form__main");

const inputs = form.querySelectorAll(".form__input");

form.addEventListener("submit", (e) => {
  let isAnyEmpty = false;

  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("invalid");
      isAnyEmpty = true;
    } else {
      input.classList.contains("invalid")
        ? input.classList.remove("invalid")
        : null;
    }
  });

  isAnyEmpty ? e.preventDefault() : null;
});
