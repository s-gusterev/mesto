export const popupProfile = document.querySelector('.popup_type_profile');
export const popupAddCard = document.querySelector('.popup_type_card-add');
export const popupFullImage = document.querySelector('.popup_type_picture');
export const btnEditProfile = document.querySelector('.profile__btn-edit-profile');
export const btnAddCard = document.querySelector('.profile__btn-add-place');
export const formEditProfile = document.querySelector('#form-edit-profile');
export const formAddCard = document.querySelector('#form-add-card');
export const inputName = document.querySelector('#input-name');
export const inputJob = document.querySelector('#input-job');
export const inputCardTitle = document.querySelector('#input-place');
export const inputCardImage = document.querySelector('#input-image');
export const cards = document.querySelector('.cards');
export const popupImage = document.querySelector('.popup__img');
export const popupImageDescription = document.querySelector('.popup__img-description');

// Настройки для валидации формы
export const validationConfig = {
  formSelector: '.popup__container_type_form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input-error_active',
  errorClass: 'popup__input_type_error'
};
