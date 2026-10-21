
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  openModal,
  closeModal,
  closePopupOnOverlayClick,
  closePopupOnEsc,
} from "./utils.js";


const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];


const editProfileModal = document.querySelector("#edit-popup");
const newCardModal = document.querySelector("#new-card-popup");
const imagePopUpModal = document.querySelector("#image-popup");


const editProfileForm = document.querySelector("#edit-profile-form");
const newCardForm = document.querySelector("#new-card-form");


const cardNameInput = newCardForm.querySelector(
  ".popup__input_type_card-name"
);
const cardLinkInput = newCardForm.querySelector(
  ".popup__input_type_url"
);


const openEditProfileBtn = document.querySelector(
  ".profile__edit-button"
);
const addCardButton = document.querySelector(
  ".profile__add-button"
);


const closeEditProfileBtn = editProfileModal.querySelector(
  ".popup__close"
);
const closeNewCardBtn = newCardModal.querySelector(
  ".popup__close"
);
const closeImagePopUpBtn = imagePopUpModal.querySelector(
  ".popup__close"
);


const cardsContainer = document.querySelector(".cards__list");
const cardTemplateSelector = "#card-template";

const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorClass: "popup__error",
  inputErrorClass: "popup__input_type_error",
  inactiveButtonClass: "popup__button_disabled",
};


const editProfileValidator = new FormValidator(
  validationConfig,
  editProfileForm
);

const newCardValidator = new FormValidator(
  validationConfig,
  newCardForm
);

editProfileValidator.setEventListeners();
newCardValidator.setEventListeners();


function fillProfileForm() {
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(
    ".profile__description"
  );

  editProfileForm.querySelector(
    ".popup__input_type_name"
  ).value = profileTitle.textContent;

  editProfileForm.querySelector(
    ".popup__input_type_description"
  ).value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  editProfileValidator.resetValidation();
  openModal(editProfileModal);
}

openEditProfileBtn.addEventListener("click", handleOpenEditModal);


function handleProfileFormSubmit(event) {
  event.preventDefault();

  const newName = editProfileForm.querySelector(
    ".popup__input_type_name"
  ).value;

  const newDescription = editProfileForm.querySelector(
    ".popup__input_type_description"
  ).value;

  document.querySelector(".profile__title").textContent = newName;
  document.querySelector(".profile__description").textContent =
    newDescription;

  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);


addCardButton.addEventListener("click", () => {
  newCardValidator.resetValidation();
  openModal(newCardModal);
});


function renderCard(name, link, container) {
  const card = new Card(name, link, cardTemplateSelector);
  container.prepend(card.getCardElement());
}


initialCards.forEach((place) => {
  renderCard(place.name, place.link, cardsContainer);
});


function handleCardFormSubmit(event) {
  event.preventDefault();

  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;

  renderCard(cardName, cardLink, cardsContainer);

  closeModal(newCardModal);
  newCardForm.reset();
  newCardValidator.resetValidation();
}

newCardForm.addEventListener("submit", handleCardFormSubmit);


closeEditProfileBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

closeNewCardBtn.addEventListener("click", () => {
  closeModal(newCardModal);
});

closeImagePopUpBtn.addEventListener("click", () => {
  closeModal(imagePopUpModal);
});


[
  editProfileModal,
  newCardModal,
  imagePopUpModal,
].forEach((modal) => {
  closePopupOnOverlayClick(modal);
  closePopupOnEsc(modal);
});
