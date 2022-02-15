const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_card-add');
const popupFullImage = document.querySelector('.popup_type_picture');
const popup = document.querySelectorAll('.popup');
const popupCloseProfile = document.querySelector('.popup__close_type_profile');
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



// Настройки для формы
const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input-error_active',
  errorClass: 'popup__input_type_error'
};




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

// Закрытие попапа кликом на overlay
function popupCloseOverlay(event, popup) {
  if (event.target === event.currentTarget) {
    closePopup(popup);
  }
}

//Закрытие попапа по клавише Esc
function popupCloseEsc(evt) {
  if (evt.key === 'Escape') {
    const popapOpened = document.querySelector('.popup_opened');
    closePopup(popapOpened);
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
  // evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
}

// Функция формы добавления карточки
function formAddCardSubmit(evt) {
  // evt.preventDefault();
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
  enableValidation();

})

btnAddCard.addEventListener('click', function () {
  openPopup(popupAddCard);
  enableValidation();

})

popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));
popupClosePlace.addEventListener('click', () => closePopup(popupAddCard));
popupCloseImage.addEventListener('click', () => closePopup(popupFullImage));
formEditProfile.addEventListener('submit', formSubmitHandler);
formAddCard.addEventListener('submit', formAddCardSubmit);


popupProfile.addEventListener('click', function (evt) {
  popupCloseOverlay(evt, popupProfile);
});

popupAddCard.addEventListener('click', function (evt) {
  popupCloseOverlay(evt, popupAddCard);
});

popupFullImage.addEventListener('click', function (evt) {
  popupCloseOverlay(evt, popupFullImage);
});






// const formElement = document.querySelector('.popup__container');
// const formInput = formElement.querySelector('.popup__input');
// Выбираем элемент ошибки на основе уникального класса





// formElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });

// formInput.addEventListener('input', function (evt) {
//   console.log(evt.target.validity)
// });

// Функция, которая добавляет класс с ошибкой
// Передадим текст ошибки вторым параметром
function showInputError(formElement, inputElement, errorMessage) {

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add('popup__input_type_error');
  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;

  errorElement.classList.add('popup__input-error_active');

}

// Функция, которая удаляет класс с ошибкой
function hideInputError(formElement, inputElement) {

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  // Очистим ошибку
  errorElement.textContent = '';
}

// Функция, которая проверяет валидность поля
function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    // Передадим сообщение об ошибке вторым аргументом
    showInputError(formElement, inputElement, inputElement.validationMessage);
    //showInputError(formInput);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
  }
}

// Вызовем функцию isValid на каждый ввод символа
// formInput.addEventListener('input', isValid);

function setEventListeners(formElement) {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector('.popup__btn');

  toggleButtonState(inputList, buttonElement);
  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля


  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);


      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function enableValidation() {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__container_type_form'));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
}

// Вызовем функцию
enableValidation();


// Функция принимает массив полей

function hasInvalidInput(inputList) {
  // проходим по этому массиву методом some
  return inputList.some(inputElement => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  });
}


// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

function toggleButtonState(inputList, buttonElement) {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('popup__btn_disabled');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__btn_disabled');
    buttonElement.removeAttribute('disabled');
  }
}
