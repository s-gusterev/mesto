const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_card-add');
const popupFullImage = document.querySelector('.popup_type_picture');
const popupImage = document.querySelector('.popup__img');
const popupImageDescription = document.querySelector('.popup__img-description');
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
const cardTemplate = document.querySelector('#card').content;
const submitProfile = document.querySelector('.popup__btn_type_profile');
const submitAddCard = document.querySelector('.popup__btn_type_add-card');

// Открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', popupCloseEsc)
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', popupCloseEsc);
}

// Закрытие попапа кликом на overlay и крестик
function popupCloseOverlay(event, popup) {
  if (event.target === event.currentTarget) {
    closePopup(popup);
  }
  if (event.target.classList.contains('popup__close')) {
    closePopup(popup)
  }
}

//Закрытие попапа по клавише Esc
function popupCloseEsc(event, popup) {
  if (event.key === 'Escape') {
    popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

//Функция лайка карточки
function addCardLike(evt) {
  evt.target.classList.toggle('card__like_active');
}

// Функция открытия изображения
function openFullImage(evt) {
  const image = evt.target;
  popupImage.src = image.src;
  popupImageDescription.textContent = image.alt;
  openPopup(popupFullImage);
}

//Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

// Функция формы редактирования профайла
function formSubmitHandler(evt) {
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
}

// Функция формы добавления карточки
function formAddCardSubmit(evt) {
  const title = inputCardTitle.value;
  const image = inputCardImage.value;
  const cardRender = templateCard(title, image);
  addCard(cardRender);
  closePopup(popupAddCard);
  formAddCard.reset();
}

// Функция рендеринга карточек из массива
function renderCards() {
  initialCards.forEach(function (card) {
    const cardRender = templateCard(card.name, card.link);
    addCard(cardRender);
  })
};

// Добавление карточки в разметку
function addCard(card) {
  cards.prepend(card)
}

// Функция шаблона карточки
function templateCard(title, img) {
  const cardBody = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = cardBody.querySelector('.card__title');
  const cardImg = cardBody.querySelector('.card__img');
  const cardLike = cardBody.querySelector('.card__like');
  const cardDel = cardBody.querySelector('.card__del');
  cardTitle.textContent = title;
  cardImg.setAttribute('src', img);
  cardImg.setAttribute('alt', title);

  cardLike.addEventListener('click', addCardLike);
  cardDel.addEventListener('click', deleteCard);
  cardImg.addEventListener('click', openFullImage);
  return cardBody;
}

renderCards();

btnEditProfile.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
  resetValidation(inputListProfile, submitProfile, formEditProfile)
})

btnAddCard.addEventListener('click', function () {
  openPopup(popupAddCard);
  resetValidation(inputListAddCard, submitAddCard, formAddCard);
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
