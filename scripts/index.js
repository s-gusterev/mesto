const popupProfile = document.querySelector('#popup-profile');
const popupAddCard = document.querySelector('#popup-card');

const popup = document.querySelectorAll('.popup');

const btnEditProfile = document.querySelector('.profile__btn-edit-profile');
const btnAddCard = document.querySelector('.profile__btn-add-place');

const formElement = document.querySelectorAll('.popup__container');
const inputName = document.querySelector('#input-name');
const inputJob = document.querySelector('#input-job');
const inputCardTitle = document.querySelector('#input-place');
const inputCardImage = document.querySelector('#input-image');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popupClose = document.querySelectorAll('.popup__close');
const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;
// const cardBody = cardTemplate.querySelector('.card').cloneNode(true);
// const titleCard = cardBody.querySelector('.card__title');
// const imgCard = cardBody.querySelector('.card__img')
// console.log(cardBody);

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


popupClose.forEach(function (element) {
  element.addEventListener('click', function () {
    console.log('item')
    deletePopup();
    //popup.classList.remove('popup_opened');
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

// Функции форм

function formSubmitHandler(evt) {
  evt.preventDefault();
  inputName.setAttribute('value', inputName.value);
  inputJob.setAttribute('value', inputJob.value);
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  deletePopup();
  //popup.classList.remove('popup_opened');
}

function formAddCardSubmit(evt) {
  evt.preventDefault();
  const cardBody = cardTemplate.querySelector('.card').cloneNode(true);
  const titleCard = cardBody.querySelector('.card__title');
  const imgCard = cardBody.querySelector('.card__img')
  titleCard.textContent = inputCardTitle.value;
  imgCard.setAttribute('src', `${inputCardImage.value}`);
  imgCard.setAttribute('alt', `Изображение - ${inputCardTitle.value}`);
  cards.prepend(cardBody);

  deletePopup();
  //popup.classList.remove('popup_opened');
}




//formElement.addEventListener('submit', formSubmitHandler);


// Удаление класса popup_opened

function deletePopup() {
  popup.forEach(function (element) {
    element.classList.remove('popup_opened');
  })
}

// Добавление карточек по умолчанию

initialCards.forEach(function (card) {
  const cardBody = cardTemplate.querySelector('.card').cloneNode(true);
  const titleCard = cardBody.querySelector('.card__title');
  const imgCard = cardBody.querySelector('.card__img')
  titleCard.textContent = card.name;
  imgCard.setAttribute('src', `${card.link}`);
  imgCard.setAttribute('alt', `Изображение - ${titleCard.textContent}`);
  cards.append(cardBody);
})
