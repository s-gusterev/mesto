import './index.css';
import {
  btnEditProfile,
  btnAddCard,
  formEditProfile,
  formAddCard,
  inputName,
  inputJob,
  validationConfig,
  initialCards
} from '../components/constans.js'

import FormValidator from '../components/FormValidator.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import UserInfo from '../components/UserInfo.js';


const profileValid = new FormValidator(validationConfig, formEditProfile);
profileValid.enableValidation();

const cardValid = new FormValidator(validationConfig, formAddCard);
cardValid.enableValidation();

const userInformation = new UserInfo({
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle'
})


const formProfile = new PopupWithForm('.popup_type_profile', (user) => userInformation.setUserInfo(user));

formProfile.setEventListeners();

// Добавление карточки в разметку
function addCard(card) {
  section.addItem(createCard(card))
}

// Создание карточки
function createCard(card) {
  const cardRender = new Card(card, '#card', () => {
    openImagePopup.open(card.link, card.name);
  });
  const cardElement = cardRender.getCard();
  return cardElement;
}

const section = new Section({
  items: initialCards,
  renderer: addCard
}, '.cards');
section.renderItems();

const formCard = new PopupWithForm('.popup_type_card-add',
  (data) => {
    const card = createCard({
      name: data['place'],
      link: data['image']
    })
    section.addItem(card)
  }
);
formCard.setEventListeners();

const openImagePopup = new PopupWithImage('.popup_type_picture');
openImagePopup.setEventListeners();

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
