import {
  FormValidator
} from './FormValidator.js';
import {
  Card
} from './Card.js';

// import {
//   popupImage
// } from './utils.js';

import {
  initialCards
} from './cards.js';

import {
  Section
} from './Section.js';

import {
  PopupWithImage
}
from './PopupWithImage.js';

import {
  PopupWithForm
}
from './PopupWithForm.js';

import {
  UserInfo
} from './UserInfo.js';

const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_card-add');
const popupFullImage = document.querySelector('.popup_type_picture');
const btnEditProfile = document.querySelector('.profile__btn-edit-profile');
const btnAddCard = document.querySelector('.profile__btn-add-place');
const formEditProfile = document.querySelector('#form-edit-profile');
const formAddCard = document.querySelector('#form-add-card');
const inputName = document.querySelector('#input-name');
const inputJob = document.querySelector('#input-job');
const inputCardTitle = document.querySelector('#input-place');
const inputCardImage = document.querySelector('#input-image');
// const profileName = document.querySelector('.profile__title');
// const profileJob = document.querySelector('.profile__subtitle');
const cards = document.querySelector('.cards');

// export const image = document.querySelector('.card__img');

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


const openImagePopup = new PopupWithImage(popupFullImage, popupImage, popupImageDescription);

openImagePopup.setEventListeners();


const profileValid = new FormValidator(validationConfig, formEditProfile);
profileValid.enableValidation();

const cardValid = new FormValidator(validationConfig, formAddCard);
cardValid.enableValidation();

const userInformation = new UserInfo({
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle'
})

const formProfile = new PopupWithForm(popupProfile, {
  callback: (user) => {
    userInformation.setUserInfo(user);
  }
});
formProfile.close();
formProfile.setEventListeners();

const formCard = new PopupWithForm(popupAddCard, {
  callback: () => {
    const data = {
      name: inputCardTitle.value,
      link: inputCardImage.value
    }
    addCard(data);
  }
});
formCard.close();
formCard.setEventListeners();

// Изначальная загрузка карточек
const InitialCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card', () => {
      openImagePopup.open(item.link, item.name);
    });
    const cardElement = card.templateCard();
    InitialCards.addItem(cardElement);
  }
}, cards);

InitialCards.renderItems();

// Добавление карточки в разметку
function addCard(card) {
  cards.prepend(renderCard(card))
}

// Создание карточки
function renderCard(card) {
  const cardRender = new Card(card, '#card', () => {
    openImagePopup.open(card.link, card.name);
  });
  const cardElement = cardRender.templateCard();
  return cardElement;
}


btnEditProfile.addEventListener('click', function () {
  const user = userInformation.getUserInfo();
  inputName.value = user.name;
  inputJob.value = user.job;
  formProfile.open();
  profileValid.resetValidation();
})

btnAddCard.addEventListener('click', function () {
  formCard.open();
  cardValid.resetValidation();
})
