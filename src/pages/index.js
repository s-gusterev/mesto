import './index.css';
import {
  popupProfile,
  popupAddCard,
  popupFullImage,
  btnEditProfile,
  btnAddCard,
  formEditProfile,
  formAddCard,
  inputName,
  inputJob,
  inputCardTitle,
  inputCardImage,
  cards,
  popupImage,
  popupImageDescription,
  validationConfig,
} from '../components/constans.js'

import {
  FormValidator
} from '../components/FormValidator.js';

import {
  Card
}
from '../components/Card.js';

import {
  initialCards
}
from '../components/cards.js';

import {
  Section
}
from '../components/Section.js';

import {
  PopupWithImage
}
from '../components/PopupWithImage.js';

import {
  PopupWithForm
}
from '../components/PopupWithForm.js';

import {
  UserInfo
} from '../components/UserInfo.js';


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


const openImagePopup = new PopupWithImage(popupFullImage, popupImage, popupImageDescription);

openImagePopup.setEventListeners();

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
