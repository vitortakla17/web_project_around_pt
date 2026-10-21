
import { openModal } from "./utils.js";

export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  
  #getTemplate() {
    const template = document.querySelector(this._templateSelector);

    return template.content
      .querySelector(".card")
      .cloneNode(true);
  }

  
  #setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this.#handleLikeButton();
      });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this.#handleDeleteCardBtn();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this.#handleImageClick();
      });
  }

  
  #handleLikeButton() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_is-active");
  }

  
  #handleDeleteCardBtn() {
    this._element.remove();
  }

  
  #handleImageClick() {
    const imagePopUpModal = document.querySelector("#image-popup");
    const popUpCaption = imagePopUpModal.querySelector(
      ".popup__caption"
    );
    const popUpImage = imagePopUpModal.querySelector(
      ".popup__image"
    );

    popUpCaption.textContent = this._name;
    popUpImage.src = this._link;
    popUpImage.alt = this._name;

    openModal(imagePopUpModal);
  }

  
  getCardElement() {
    this._element = this.#getTemplate();

    const cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    this.#setEventListeners();

    return this._element;
  }
}
