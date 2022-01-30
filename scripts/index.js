const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_card-add');
const popupFullImage = document.querySelector('.popup_type_picture');
const popup = document.querySelectorAll('.popup');
const popupClose = document.querySelector('.popup__close');
const popupClosePlace = document.querySelector('.popup__close_type_place');
const popupCloseImage = document.querySelector('.popup__close_type_image');
const popupImage = document.querySelector('.popup__img');
const popupImageDescription = document.querySelector('.popup__img-description');
const btnEditProfile = document.querySelector('.profile__btn-edit-profile');
const btnAddCard = document.querySelector('.profile__btn-add-place');
const formEditProfile = document.querySelector('#form-edit-profile');
const formAddCard = document.querySelector('#form-add-card');
const inputName = document.querySelector('#input-name');
const inputJob = document.querySelector('#input-job');
const inputCardTitle = document.querySelector('#input-place');
const inputCardImage = document.querySelector('#input-image');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;

// Открытие, закрытие попапа
function openClosePopup(popup) {
  popup.classList.toggle('popup_opened');
}

// Закрытие попапа по крестику
function closePopup(evt) {
  evt.target.parentElement.parentElement.classList.remove('popup_opened');
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
  openClosePopup(popupFullImage);
}

//Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

// Функция формы редактирования профайла
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  openClosePopup(popupProfile);
}

// Функция формы добавления карточки
function formAddCardSubmit(evt) {
  evt.preventDefault();
  const title = inputCardTitle.value;
  const image = inputCardImage.value;
  addCard(title, image);
  openClosePopup(popupAddCard);
}

// Функция рендеринга карточек из массива
function renderCards() {
  initialCards.forEach(function (card) {
    addCard(card.name, card.link);
  })
};

// Функция добавления карточки
function addCard(title, img) {
  const cardBody = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = cardBody.querySelector('.card__title');
  const cardImg = cardBody.querySelector('.card__img');
  const cardLike = cardBody.querySelector('.card__like');
  const cardDel = cardBody.querySelector('.card__del');
  cardTitle.textContent = title;
  cardImg.setAttribute('src', img);
  cardImg.setAttribute('alt', title);
  cards.prepend(cardBody);

  cardLike.addEventListener('click', addCardLike);
  cardDel.addEventListener('click', deleteCard);
  cardImg.addEventListener('click', openFullImage);
}

renderCards();

btnEditProfile.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openClosePopup(popupProfile);
})

btnAddCard.addEventListener('click', function () {
  inputCardTitle.value = '';
  inputCardImage.value = '';
  openClosePopup(popupAddCard);
})

popupClose.addEventListener('click', closePopup);
popupClosePlace.addEventListener('click', closePopup);
popupCloseImage.addEventListener('click', closePopup);
formEditProfile.addEventListener('submit', formSubmitHandler);
formAddCard.addEventListener('submit', formAddCardSubmit);
