const mutedText = document.getElementById("form__help-text");

const icon = document.getElementById("form__info-icon");

icon.addEventListener('click', function() {
  mutedText.classList.toggle("form__help-text__content--expanded")
  })
