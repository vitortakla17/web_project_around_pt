import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

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

const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorClass: "popup__error",
  inputErrorClass: "popup__input_type_error",
  inactiveButtonClass: "popup__button_disabled",
};

const cardTemplateSelector = "#card-template";

const openEditProfileBtn = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const editProfileForm = document.querySelector("#edit-profile-form");
const newCardForm = document.querySelector("#new-card-form");

const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const descriptionInput = editProfileForm.querySelector(
  ".popup__input_type_description"
);

// Validação
const editProfileValidator = new FormValidator(
  validationConfig,
  editProfileForm
);
const newCardValidator = new FormValidator(validationConfig, newCardForm);

editProfileValidator.setEventListeners();
newCardValidator.setEventListeners();

// Informações do usuário
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

// Pop-up de imagem
const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

// Cartões
function createCard({ name, link }) {
  const card = new Card(
    name,
    link,
    cardTemplateSelector,
    (cardName, cardLink) => {
      imagePopup.open(cardName, cardLink);
    }
  );
  return card.getCardElement();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardSection.addItem(createCard(item));
    },
  },
  ".cards__list"
);

cardSection.renderItems();

// Pop-up de editar perfil
const editProfilePopup = new PopupWithForm("#edit-popup", (values) => {
  userInfo.setUserInfo({
    name: values.name,
    job: values.description,
  });
  editProfilePopup.close();
});
editProfilePopup.setEventListeners();

// Pop-up de novo cartão
const newCardPopup = new PopupWithForm("#new-card-popup", (values) => {
  cardSection.addItem(
    createCard({
      name: values["place-name"],
      link: values.link,
    })
  );
  newCardPopup.close();
});
newCardPopup.setEventListeners();

// Ouvintes de eventos
openEditProfileBtn.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  descriptionInput.value = job;
  editProfileValidator.resetValidation();
  editProfilePopup.open();
});

addCardButton.addEventListener("click", () => {
  newCardValidator.resetValidation();
  newCardPopup.open();
});
