import {
  popupImage,
  popupImageDescription,
  popupFullImage,
  openPopup
} from './utils.js'


export class Card {
  constructor(data, template) {
    this._cardTemplate = document.querySelector(template).content;
    this._name = data.name;
    this._link = data.link;
  }

  //Функция лайка карточки
  _addCardLike = () => {
    this._cardLike.classList.toggle('card__like_active');
  };

  //Функция удаления карточки
  _deleteCard = () => {
    this._cardBody.remove();
    this._cardBody = null;
  };

  // Открытие полного изображения
  _openFullImage = () => {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageDescription.textContent = this._name;
    openPopup(popupFullImage);
  }
  
  //Слушатели
  _setEventListeners() {
    this._cardLike.addEventListener('click', this._addCardLike);
    this._cardDel.addEventListener('click', this._deleteCard);
    this._cardImg.addEventListener('click', this._openFullImage);
  }

  // Шаблон карточки
  templateCard() {
    this._cardBody = this._cardTemplate.querySelector('.card').cloneNode(true);
    this._cardTitle = this._cardBody.querySelector('.card__title');
    this._cardImg = this._cardBody.querySelector('.card__img');
    this._cardLike = this._cardBody.querySelector('.card__like');
    this._cardDel = this._cardBody.querySelector('.card__del');
    this._cardTitle.textContent = this._name;
    this._cardImg.setAttribute('src', this._link);
    this._cardImg.setAttribute('alt', this._name);

    this._setEventListeners()

    return this._cardBody;
  }
}
