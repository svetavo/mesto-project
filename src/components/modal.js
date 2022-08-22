
// открытие и закрытие попапов

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
      closePopup(popupElement)
    };
  });
};

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  removeEventListener;
};


export { openPopup, closePopup };
