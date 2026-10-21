
export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._errorClass = config.errorClass;
    this._inputErrorClass = config.inputErrorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
  }

  #showInputError(input) {
    const errorElement = this._formElement.querySelector(
      `.${input.id}-error.${this._errorClass}`
    );

    input.classList.toggle(
      this._inputErrorClass,
      !input.validity.valid
    );

    if (errorElement) {
      errorElement.textContent = input.validity.valid
        ? ""
        : input.validationMessage;
    }
  }

  #checkInputValidity(input) {
    this.#showInputError(input);
  }

  #toggleButtonState() {
    const submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );

    const isInvalid = !this._formElement.checkValidity();

    submitButton.disabled = isInvalid;

    if (this._inactiveButtonClass) {
      submitButton.classList.toggle(
        this._inactiveButtonClass,
        isInvalid
      );
    }
  }

  #setEventListeners() {
    this._formElement.addEventListener("input", (event) => {
      if (!event.target.matches(this._inputSelector)) return;

      this.#checkInputValidity(event.target);
      this.#toggleButtonState();
    });
  }

  setEventListeners() {
    this.#setEventListeners();
    this.#toggleButtonState();
  }

  resetValidation() {
    const inputs = this._formElement.querySelectorAll(
      this._inputSelector
    );

    inputs.forEach((input) => {
      const errorElement = this._formElement.querySelector(
        `.${input.id}-error`
      );

      if (errorElement) {
        errorElement.textContent = "";
      }

      input.classList.remove(this._inputErrorClass);
    });

    this.#toggleButtonState();
  }
}
