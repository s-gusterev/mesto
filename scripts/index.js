const popup = document.querySelector('.popup');
const btnEditProfile = document.querySelector('.profile__btn-edit-profile');
const formElement = popup.querySelector('.popup__container');
const inputName = formElement.querySelector('#input-name');
const inputJob = formElement.querySelector('#input-job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popupClose = popup.querySelector('.popup__close');
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
  popup.classList.add('popup_opened');
  inputName.value = inputName.getAttribute('value');
  inputJob.value = inputJob.getAttribute('value');
})

popupClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
})

function formSubmitHandler(evt) {
  evt.preventDefault();
  inputName.setAttribute('value', inputName.value);
  inputJob.setAttribute('value', inputJob.value);
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

// Добавление карточек по умолчанию

initialCards.forEach(function (card) {
    const cardBody = cardTemplate.querySelector('.card').cloneNode(true);
    const titleCard = cardBody.querySelector('.card__title');
    const imgCard = cardBody.querySelector('.card__img')
    titleCard.textContent = card.name;
    imgCard.setAttribute('src', `${card.link}`);
    imgCard.setAttribute('alt', `Изображение - ${titleCard.textContent}`);
    cards.append(cardBody);
  }
)
