// *** селекторы ***
export const editButton = document.querySelector(".profile__edit-button");
export const popUpEdit = document.querySelector(".popup-edit");
export const popUpDelete = document.querySelector(".popup-delete");
export const addButton = document.querySelector(".profile__add-button");
export const popUpPlace = document.querySelector(".popup-add-place");
export const popUpAvatar = document.querySelector(".popup-avatar");
export const placeSubmit = document.querySelector(".form__button_place");
export const placesItems = document.querySelector(".places__items");
export const popups = document.querySelectorAll(".popup");
export const formPlace = document.forms.new_place;
export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileNameInput = document.querySelector("#user_name");
export const profileDescriptionInput =
  document.querySelector("#user_description");
export const avatar = document.querySelector(".profile__pic");
export const avatarButton = document.querySelector(".profile__avatar-button");
export const cards = document.querySelector(".places");
export const formButtons = document.querySelectorAll(".form__button");

// переменные для валидации
export const formProfile = document.forms.profile_data;
export const name = formProfile.elements.name;
export const description = formProfile.elements.description;
export const formAvatar = document.forms.avatar;
export const avatarUrl = formAvatar.elements.avatarUrl;
export const validitySettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// переменные карточка
export const placeTemplate = document.querySelector("#place-item").content;
export const placeImgInput = document.querySelector("#placeImg");
export const placeNameInput = document.querySelector("#placeName");
export const popUpImage = document.querySelector(".popup__image");
export const imageContainer = document.querySelector(".popup__image-content");
export const popupImageTitle = document.querySelector(".popup__image-title");
