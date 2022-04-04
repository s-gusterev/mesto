export const btnEditProfile = document.querySelector('.profile__btn-edit-profile');
export const btnAddCard = document.querySelector('.profile__btn-add-place');
export const btnEditAvatar = document.querySelector('.profile__btn-edit-avatar');
export const formEditProfile = document.querySelector('#form-edit-profile');
export const formAddCard = document.querySelector('#form-add-card');
export const formEditAvatar = document.querySelector('#form-edit-avatar');
export const inputName = document.querySelector('#input-name');
export const inputJob = document.querySelector('#input-about');
export const inputAvatar = document.querySelector('#input-avatar');

// Настройки для валидации формы
export const validationConfig = {
  formSelector: '.popup__container_type_form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input-error_active',
  errorClass: 'popup__input_type_error'
};
