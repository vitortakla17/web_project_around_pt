const initialCards = [
    { name: "Vale de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg" },
    { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
    { name: "Montanhas Carecas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
    { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
    { name: "Parque Nacional Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
    { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg" }
];

initialCards.forEach(function (card) {
    console.log(card.name);
});

const openEditProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const closeEditProfileBtn = editProfileModal.querySelector(".popup__close");
let editProfileForm = editProfileModal.querySelector("#edit-profile-form");
const addCardButton = document.querySelector(".profile__add-button");
const newCardModal = document.querySelector("#new-card-popup");
const closeNewCardBtn = newCardModal.querySelector(".popup__close");
const newCardForm = document.querySelector("#new-card-form");
const cardNameInput = newCardForm.querySelector(".popup__input_type_card-name");
const cardLinkInput = newCardForm.querySelector(".popup__input_type_url");

function openModal(modalElement) {
    modalElement.classList.add("popup_is-opened");
}

function closeModal(modalElement) {
    modalElement.classList.remove("popup_is-opened");
}

openEditProfileBtn.addEventListener ("click", () => {
    handleOpenEditModal();
});

closeEditProfileBtn.addEventListener ("click", () => {
    closeModal(editProfileModal);
});

function fillProfileForm() {
    const profileTitle = document.querySelector(".profile__title");
    const profileDescription = document.querySelector(".profile__description");

    const name = profileTitle.textContent;
    const description = profileDescription.textContent;

    const inputName = editProfileModal.querySelector(".popup__input_type_name");
    const inputDescription = editProfileModal.querySelector(".popup__input_type_description");

    inputName.value = name;
    inputDescription.value = description;   
}

function handleOpenEditModal() {
    fillProfileForm();
    resetValidation(editProfileForm);
    openModal(editProfileModal);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    const inputName = editProfileModal.querySelector(".popup__input_type_name");
    const inputDescription = editProfileModal.querySelector(".popup__input_type_description");

    const newName = inputName.value;
    const newDescription = inputDescription.value;

    const profileTitle = document.querySelector(".profile__title");
    const profileDescription = document.querySelector(".profile__description");

    profileTitle.textContent = newName;
    profileDescription.textContent = newDescription;

    closeModal(editProfileModal);
}

editProfileForm.addEventListener('submit', handleProfileFormSubmit);

addCardButton.addEventListener('click', () => {
    resetValidation(newCardForm);
    openModal(newCardModal);
});

closeNewCardBtn.addEventListener('click', () => {
    closeModal(newCardModal);
});

function handleCardFormSubmit(evt) {
    evt.preventDefault();

    const cardName = cardNameInput.value;
    const cardLink = cardLinkInput.value;

    renderCard(cardName, cardLink, cardsContainer);
    closeModal(newCardModal);
    evt.target.reset();
}

newCardForm.addEventListener('submit', handleCardFormSubmit);

const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

function getCardElement (name, link) {
    const cardElement = cardTemplate
    .content.querySelector(".card").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");

    cardImage.src = link;
    cardImage.alt = name;
    cardTitle.textContent = name;

    const cardLikeBtn = cardElement.querySelector(".card__like-button");
    cardLikeBtn.addEventListener('click', handleLikeButton);

    const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
    cardDeleteBtn.addEventListener('click', handleDeleteCardBtn);

    cardImage.addEventListener('click', () => {
        popUpCaption.textContent = name;
        popUpImage.src = link;
        popUpImage.alt = name;
        openModal(imagePopUpModal);
  });

    return cardElement;
}

function renderCard(name, link, container) {
    const newCard = getCardElement(name, link);

    container.prepend(newCard);
}

initialCards.forEach((place) => {
    renderCard(place.name, place.link, cardsContainer);
});

function handleLikeButton(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}

function handleDeleteCardBtn(evt) {
    const cardToDelete = evt.target.closest('.card');
    cardToDelete.remove();
}

const imagePopUpModal = document.querySelector('#image-popup');
const popUpCaption = imagePopUpModal.querySelector('.popup__caption');
const popUpImage = imagePopUpModal.querySelector('.popup__image');
const closeImagePopUp = imagePopUpModal.querySelector('.popup__close');

closeImagePopUp.addEventListener ('click', () => {
    closeModal(imagePopUpModal);
});


function toggleInputError(input) {
    const form = input.closest(".popup__form");
    const errorElement = form.querySelector(
    `.${input.id}-error`
    );

    if (!input.validity.valid) {
        errorElement.textContent = input.validationMessage;
    } else {
        errorElement.textContent = "";
    }
}


function enableValidation(formElement) {
    const submitButton = formElement.querySelector(".popup__button");

    formElement.addEventListener("input", (event) => {
        toggleInputError(event.target);

        submitButton.disabled = !formElement.checkValidity();
    });
}

enableValidation(editProfileForm);
enableValidation(newCardForm);


function closePopupOnOverlayClick (modal) {
    modal.addEventListener ("click", (event) => {
        if (event.target === event.currentTarget) {
            closeModal(modal);
        }
    });
}

closePopupOnOverlayClick(editProfileModal);
closePopupOnOverlayClick(newCardModal);
closePopupOnOverlayClick(imagePopUpModal);


function closePopupOnEsc(modal) {
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("popup_is-opened")) {
            closeModal(modal);
        }
    });
}

closePopupOnEsc(editProfileModal);
closePopupOnEsc(newCardModal);
closePopupOnEsc(imagePopUpModal);


function resetValidation(formElement) {
    const inputs = formElement.querySelectorAll(".popup__input");
    const submitButton = formElement.querySelector(".popup__button");

    inputs.forEach((input) => {
        const errorElement = formElement.querySelector(`.${input.id}-error`);
        errorElement.textContent = "";
    });

    submitButton.disabled = true;
}