const mutedText = document.getElementById("calculator__help-text");

const icon = document.getElementById("calculator__info-icon");

icon.addEventListener('click', function() {
  mutedText.classList.toggle("calculator__help-text__content--expanded")
  })