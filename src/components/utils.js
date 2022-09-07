// изменение кнопки во время загрузки
export function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}

export function disableButton(button) {
  button.classList.add("form__button_disabled");
  button.disabled = true;
}
