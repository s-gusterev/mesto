export class Card {
  constructor(data, template, handleCardClick) {
    this._cardTemplate = document.querySelector(template).content;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
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

  //Слушатели
  _setEventListeners() {
    this._cardLike.addEventListener('click', this._addCardLike);
    this._cardDel.addEventListener('click', this._deleteCard);
    this._cardImg.addEventListener('click', this._handleCardClick);
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
