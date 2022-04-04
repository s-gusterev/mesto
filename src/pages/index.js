import './index.css';
import {
  btnEditProfile,
  btnAddCard,
  btnEditAvatar,
  formEditProfile,
  formEditAvatar,
  formAddCard,
  inputName,
  inputJob,
  inputAvatar,
  btnSubmitCards,
  btnSubmitAvatar,
  btnSubmitProfile,
  validationConfig
} from '../utils/constans.js'

import FormValidator from '../components/FormValidator.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import UserInfo from '../components/UserInfo.js';

import {
  api
} from '../components/Api.js'

// Переменная для получения id пользователя
let userId;

// ****************************Валидация форм
const profileValid = new FormValidator(validationConfig, formEditProfile);
profileValid.enableValidation();

const cardValid = new FormValidator(validationConfig, formAddCard);
cardValid.enableValidation();

const editAvatarValid = new FormValidator(validationConfig, formEditAvatar);
editAvatarValid.enableValidation();
// ***********************************************

// Получение, редактирование данных о пользователе
const userInformation = new UserInfo({
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle',
  avatarSelector: '.profile__img'
})

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInformation.setUserInfo(user)
    userInformation.setUserAvatar(user)
    userId = user._id

    section.renderItems(cards)

  })
  .catch((err) => {
    console.log(err)
  })

const formProfile = new PopupWithForm('.popup_type_profile', (data) => {
  const {
    name,
    about
  } = data;
  btnSubmitProfile.textContent = 'Сохранение...'
  api.editProfile(name, about).then((res) => {
      userInformation.setUserInfo(res);
      formProfile.close();
    })
    .finally(() => {
      btnSubmitProfile.textContent = 'Сохранить'
    })
    .catch((err) => {
      console.log(err)
    })
})
formProfile.setEventListeners();

const formAvatar = new PopupWithForm('.popup_type_edit-avatar', (data) => {
  btnSubmitAvatar.textContent = 'Сохранение...';
  api.updateAvatar(data.avatar)
    .then((res) => {
      userInformation.setUserAvatar(res)
      formAvatar.close();
    })
    .finally(() => {
      btnSubmitAvatar.textContent = 'Сохранить';
    })
    .catch((err) => {
      console.log(err)
    })
});
formAvatar.setEventListeners();
// *****************************************************************

// ****************************Работа с карточками
function addCard(card) {
  section.addItem(createCard(card))
}

function createCard(card) {

  const data = {
    name: card.name,
    link: card.link,
    likes: card.likes,
    id: card._id,
    userId: userId,
    ownerId: card.owner._id
  }

  const cardRender = new Card(data, '#card', () => {
      openImagePopup.open(card.link, card.name);
    },
    (id) => {
      confirm.open();
      confirm.changeSubmitHandler(() => {
        api.delCard(id)
          .then((res) => {
            cardRender.deleteCard()
            confirm.close()
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    (id) => {
      if (cardRender.isLiked()) {
        api.deleteLike(id)
          .then((res) => {
            cardRender.setLikeCount(res.likes);
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        api.addLike(id)
          .then((res) => {
            cardRender.setLikeCount(res.likes);
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  );

  const cardElement = cardRender.getCard();
  return cardElement;
}

const section = new Section({
  items: [],
  renderer: addCard
}, '.cards');

const formCard = new PopupWithForm('.popup_type_card-add',
  (data) => {
    btnSubmitCards.textContent = 'Сохранение...'
    api.addCard(data['place'], data['image'])
      .then((res) => {
        const card = createCard(res)
        section.addItemPrepend(card);
        formCard.close();
      })
      .finally(() => {
        btnSubmitCards.textContent = 'Создать';
      })
      .catch((err) => {
        console.log(err)
      })
  });
formCard.setEventListeners();

const confirm = new PopupWithForm('.popup_type_confirm', () => {});
confirm.setEventListeners();

const openImagePopup = new PopupWithImage('.popup_type_picture');
openImagePopup.setEventListeners();

// **************************Слушатели для кнопок
btnEditProfile.addEventListener('click', function () {
  const user = userInformation.getUserInfo();
  inputName.value = user.name;
  inputJob.value = user.about;
  formProfile.open();
  profileValid.resetValidation();
})

btnAddCard.addEventListener('click', function () {
  formCard.open();
  cardValid.resetValidation();
})

btnEditAvatar.addEventListener('click', function () {
  formAvatar.open();
  editAvatarValid.resetValidation();
})
// ********************************************************
