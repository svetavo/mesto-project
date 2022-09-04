import { cardDelete, likeCard, likeCardRemove } from "./api";
import { openPopup } from "./modal";
import {
  imageContainer,
  popupImageTitle,
  placeTemplate,
  popUpImage,
} from "./constants";

//  функция создания карточки
export function createPlace(
  name,
  link,
  likes,
  _id,
  owner,
  userId,
  likeThisCard,
  dislikeThisCard
) {
  const placeElement = placeTemplate.querySelector(".place").cloneNode(true); // клонирую шаблон
  const cardImage = placeElement.querySelector(".place__img");
  const likeCounter = placeElement.querySelector(".place__like-counter");
  const likeBtn = placeElement.querySelector(".place__like-button");

  cardImage.src = link; // передача параметров в карточку
  placeElement.querySelector(".place__name").textContent = name; // передача параметров в карточку
  cardImage.alt = name; // передача параметров в карточку
  likeCounter.textContent = likes.length;

  //   лайк
  likeBtn.addEventListener("click", checkLike(placeElement, _id, likeCounter));

  if (likes.some((user) => user._id === userId)) {
    likeBtn.classList.add("place__like-button_active");
  }

  //   удаление
  if (owner._id !== userId) {
    placeElement
      .querySelector(".place__delete-button")
      .classList.add("place__delete-button_disabled");
  }

  placeElement
    .querySelector(".place__delete-button")
    .addEventListener("click", (evt) => {
      cardDelete(_id)
        .then(() => {
          evt.target.closest(".place").remove();
        })
        .catch((err) => {
          console.log(err);
        });
    });

  //   попап
  cardImage.addEventListener("click", () => {
    openPopup(popUpImage);
    imageContainer.src = link;
    popupImageTitle.textContent = name;
    imageContainer.alt = name;
  });
  // возвращаем карточку
  return placeElement;
}

// лайк
function likeThisCard(likeBtn, _id, likeCounter) {
  likeCard(_id)
    .then((res) => {
      likeCounter.textContent = res.likes.length;
      likeBtn.classList.add("place__like-button_active");
    })
    .catch((err) => console.log(err));
}

// дизлайк
function dislikeThisCard(likeBtn, _id, likeCounter) {
  likeCardRemove(_id)
    .then((res) => {
      likeCounter.textContent = res.likes.length;
      likeBtn.classList.remove("place__like-button_active");
    })
    .catch((err) => console.log(err));
}

// проверка лайка
const checkLike = (placeElement, _id, likeCounter) => (evt) => {
  const likeBtn = placeElement.querySelector(".place__like-button");
  if (likeBtn.classList.contains("place__like-button_active")) {
    dislikeThisCard(likeBtn, _id, likeCounter);
  } else {
    likeThisCard(likeBtn, _id, likeCounter);
  }
};
