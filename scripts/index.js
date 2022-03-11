import {
  FormValidator
} from './FormValidator.js';
import {
  Card
} from './Card.js';

import {
  openPopup,
  closePopup
} from './utils.js'

import {
  initialCards
} from './cards.js'

const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_card-add');
const popupFullImage = document.querySelector('.popup_type_picture');
const btnEditProfile = document.querySelector('.profile__btn-edit-profile');
const btnAddCard = document.querySelector('.profile__btn-add-place');
const formEditProfile = popupProfile.querySelector('#form-edit-profile');
const inputListProfile = Array.from(formEditProfile.querySelectorAll('.popup__input'));
const formAddCard = document.querySelector('#form-add-card');
const inputListAddCard = Array.from(formAddCard.querySelectorAll('.popup__input'));
const inputName = document.querySelector('#input-name');
const inputJob = document.querySelector('#input-job');
const inputCardTitle = document.querySelector('#input-place');
const inputCardImage = document.querySelector('#input-image');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const cards = document.querySelector('.cards');
const submitProfile = document.querySelector('.popup__btn_type_profile');
const submitAddCard = document.querySelector('.popup__btn_type_add-card');


// Настройки для валидации формы
const validationConfig = {
  formSelector: '.popup__container_type_form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input-error_active',
  errorClass: 'popup__input_type_error'
};


const profileValid = new FormValidator(validationConfig, formEditProfile);
const cardValid = new FormValidator(validationConfig, formAddCard);

profileValid.enableValidation();
cardValid.enableValidation();

// Закрытие попапа кликом на overlay и крестик
function popupCloseOverlay(event, popup) {
  if (event.target === event.currentTarget) {
    closePopup(popup);
  } else if (event.target.classList.contains('popup__close')) {
    closePopup(popup)
  }
}

// Функция формы редактирования профайла
function formSubmitHandler(evt) {
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
}

function formAddCardSubmit(evt) {
  const data = {
    name: inputCardTitle.value,
    link: inputCardImage.value
  }
  const cardRender = new Card(data, '#card');
  const cardElement = cardRender.templateCard();
  addCard(cardElement);
  closePopup(popupAddCard);
  formAddCard.reset();
}

function renderCards() {
  initialCards.forEach(function (card) {
    const cardRender = new Card(card, '#card');
    const cardElement = cardRender.templateCard();
    addCard(cardElement);
  })
};

// Добавление карточки в разметку
function addCard(card) {
  cards.prepend(card)
}

renderCards();

btnEditProfile.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
  profileValid.resetValidation(inputListProfile, submitProfile);

})

btnAddCard.addEventListener('click', function () {
  openPopup(popupAddCard);
  cardValid.resetValidation(inputListAddCard, submitAddCard);
})

formEditProfile.addEventListener('submit', formSubmitHandler);
formAddCard.addEventListener('submit', formAddCardSubmit);


popupProfile.addEventListener('mousedown', function (evt) {
  popupCloseOverlay(evt, popupProfile);
});

popupAddCard.addEventListener('mousedown', function (evt) {
  popupCloseOverlay(evt, popupAddCard);
});

popupFullImage.addEventListener('click', function (evt) {
  popupCloseOverlay(evt, popupFullImage);
});
