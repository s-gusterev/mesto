const popupProfile = document.querySelector('#popup-profile');
const popupAddCard = document.querySelector('#popup-card');
const popupFullImage = document.querySelector('#popup-img');
const popup = document.querySelectorAll('.popup');
const popupClose = document.querySelectorAll('.popup__close');
const popupImage = document.querySelector('.popup__img');
const popupImageDescription = document.querySelector('.popup__img-description');
const btnEditProfile = document.querySelector('.profile__btn-edit-profile');
const btnAddCard = document.querySelector('.profile__btn-add-place');
const formElement = document.querySelectorAll('.popup__container');
const inputName = document.querySelector('#input-name');
const inputJob = document.querySelector('#input-job');
const inputCardTitle = document.querySelector('#input-place');
const inputCardImage = document.querySelector('#input-image');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;

const initialCards = [{
    name: 'Москва',
    link: './images/moscow.jpg'
  },
  {
    name: 'Ниагарский водопад',
    link: './images/niagara.jpg'
  },
  {
    name: 'Нью-Йорк',
    link: './images/new-york-city.jpg'
  },
  {
    name: 'Осло',
    link: './images/oslo.jpg'
  },
  {
    name: 'Сан-Франциско',
    link: './images/san-francisco.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elbrus.jpg'
  }
];

inputName.setAttribute('value', profileName.textContent);
inputJob.setAttribute('value', profileJob.textContent);

btnEditProfile.addEventListener('click', function () {
  popupProfile.classList.add('popup_opened');
  inputName.value = inputName.getAttribute('value');
  inputJob.value = inputJob.getAttribute('value');
})


btnAddCard.addEventListener('click', function () {
  inputCardTitle.value = '';
  inputCardImage.value = '';
  popupAddCard.classList.add('popup_opened');
})

// Закрытие попапа при отправке формы

function deletePopup() {
  popup.forEach(function (element) {
    element.classList.remove('popup_opened');
  })
}

// Закрытие попапа по кнопке

popupClose.forEach(function (element) {
  element.addEventListener('click', function () {
    deletePopup();
  })
})

// Перебор форм

formElement.forEach(function (form) {
  if (form.getAttribute('name') === 'popup-edit-profile') {
    form.addEventListener('submit', formSubmitHandler);
  } else {
    form.addEventListener('submit', formAddCardSubmit);
  }
})

//Функция лайка карточки

function addCardLike(like) {
  like.addEventListener('click', function (evt) {
    const likeTarget = evt.target;
    likeTarget.classList.toggle('card__like_active');
    likeTarget.classList.toggle('card__like_disabled');
  })
}

// Функция открытия полного изображения

function openFullImage(target, image, description) {
  target.addEventListener('click', function () {
    popupFullImage.classList.add('popup_opened');
    popupImage.setAttribute('src', `${image.src}`);
    popupImage.setAttribute('alt', `Изображение - ${description.textContent}`);
    popupImageDescription.textContent = description.textContent;
  })
}

//Функция удаления карточки

function deleteCard(target, card) {
  target.addEventListener('click', function () {
    card.remove();
  })
}

// ---------------------Функции форм---------------------------------

// Функция формы редактирования профайла

function formSubmitHandler(evt) {
  evt.preventDefault();
  inputName.setAttribute('value', inputName.value);
  inputJob.setAttribute('value', inputJob.value);
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  deletePopup();
}

// Функция формы добавления карточки

function formAddCardSubmit(evt) {
  evt.preventDefault();
  const cardBody = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = cardBody.querySelector('.card__title');
  const cardImg = cardBody.querySelector('.card__img');
  const cardLike = cardBody.querySelector('.card__like');
  const cardDel = cardBody.querySelector('.card__del');

  cardTitle.textContent = inputCardTitle.value;
  cardImg.setAttribute('src', `${inputCardImage.value}`);
  cardImg.setAttribute('alt', `Изображение - ${inputCardTitle.value}`);

  deleteCard(cardDel, cardBody);
  deletePopup();
  addCardLike(cardLike);
  openFullImage(cardImg, cardImg, cardTitle);

  cards.prepend(cardBody);
}
// ------------------------------------------------------------------

// Добавление карточек по умолчанию

initialCards.forEach(function (card) {
  const cardBody = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = cardBody.querySelector('.card__title');
  const cardImg = cardBody.querySelector('.card__img');
  const cardLike = cardBody.querySelector('.card__like');
  const cardDel = cardBody.querySelector('.card__del');

  cardTitle.textContent = card.name;
  cardImg.setAttribute('src', `${card.link}`);
  cardImg.setAttribute('alt', `Изображение - ${cardTitle.name}`);

  deleteCard(cardDel, cardBody);
  addCardLike(cardLike);
  openFullImage(cardImg, cardImg, cardTitle);

  cards.append(cardBody);
})
