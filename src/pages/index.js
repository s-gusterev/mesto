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
  validationConfig
} from '../components/constans.js'

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

api.getProfile()
  .then((res) => {
    userInformation.setUserInfo(res)
    userInformation.setUserAvatar(res)
    userId = res._id;
  });

const formProfile = new PopupWithForm('.popup_type_profile', (data) => {
  const {
    name,
    about
  } = data;
  document.querySelector('.popup__btn_type_profile').textContent = 'Сохранение...'
  api.editProfile(name, about).then((res) => userInformation.setUserInfo(res))
    .finally(() => {
      document.querySelector('.popup__btn_type_profile').textContent = 'Сохранить'
      formProfile.close()
    })
})
formProfile.setEventListeners();

const formAvatar = new PopupWithForm('.popup_type_edit-avatar', (data) => {
  document.querySelector('.popup__btn_type_edit-avatar').textContent = 'Сохранение...';
  api.updateAvatar(data.avatar)
    .then((res) => userInformation.setUserAvatar(res))
    .finally(() => {
      document.querySelector('.popup__btn_type_edit-avatar').textContent = 'Сохранить';
      formAvatar.close();
    })
});
formAvatar.setEventListeners();
// *****************************************************************

// ****************************Работа с карточками
function addCard(card) {
  section.addItem(createCard(card))
}

function createCard(card) {
  const cardRender = new Card(card, '#card', () => {
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
      })
    },
    (id) => {
      if (cardRender.isLiked()) {
        api.deleteLike(id)
          .then((res) => {
            cardRender.setLikeCount(res.likes);
          })
      } else {
        api.addLike(id)
          .then((res) => {
            cardRender.setLikeCount(res.likes);
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
    document.querySelector('.popup__btn_type_add-card').textContent = 'Сохранение...'
    api.addCard(data['place'], data['image'])
      .then((res) => {
        const card = createCard({
          name: res.name,
          link: res.link,
          id: res._id,
          likes: res.likes,
          userId: userId,
          ownerId: res.owner._id
        })
        section.addItemPrepend(card)
      })
      .finally(() => {
        document.querySelector('.popup__btn_type_add-card').textContent = 'Создать'
        formCard.close()
      })
  }
);
formCard.setEventListeners();

api.getInitialCards()
  .then((res) => {
    res.forEach(data => { // Перебираем поступившие с сервера карточки
      const card = createCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id
      })
      section.addItemAppend(card) // Вставляем на странице
    });
  })

const confirm = new PopupWithForm('.popup_type_confirm', () => {
  api.delCard()
});
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
  const user = userInformation.getUserInfo();
  inputAvatar.value = user.avatar;
  formAvatar.open();
  editAvatarValid.resetValidation();
})
// ********************************************************
