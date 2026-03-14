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
    openModal(editProfileModal);
    fillProfileForm();
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

const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

function getCardElement (name = "Lugar sem nome", link = "./images/placeholder.jpg") {
    const cardElement = cardTemplate
    .content.querySelector(".card").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");

    cardImage.src = link;
    cardImage.alt = name;
    cardTitle.textContent = name;

    return cardElement;
}

function renderCard(name, link, container) {
    const newCard = getCardElement(name, link);

    container.prepend(newCard);
}

initialCards.forEach((place) => {
    renderCard(place.name, place.link, cardsContainer);
});