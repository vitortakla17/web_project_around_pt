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
const closeEditProfileBtn = document.querySelector(".popup__close");
const editProfileModal = document.querySelector("#edit-popup");

function openModal(modalElement) {
    modalElement.classList.add("popup_is-opened");
}

function closeModal(modalElement) {
    modalElement.classList.remove("popup_is-opened");
}

openEditProfileBtn.addEventListener ("click", () => {
    openModal(editProfileModal);
});

closeEditProfileBtn.addEventListener ("click", () => {
    closeModal(editProfileModal);
});