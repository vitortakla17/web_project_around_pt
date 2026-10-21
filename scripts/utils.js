
export function openModal(modalElement) {
  modalElement.classList.add("popup_is-opened");
}

export function closeModal(modalElement) {
  modalElement.classList.remove("popup_is-opened");
}

export function closePopupOnOverlayClick(modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closeModal(modal);
    }
  });
}

export function closePopupOnEsc(modal) {
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      modal.classList.contains("popup_is-opened")
    ) {
      closeModal(modal);
    }
  });
}
