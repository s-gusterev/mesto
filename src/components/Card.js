export default class Card {
  constructor(data, template, handleCardClick, handleDelClick, handleLikeClick) {
    this._cardTemplate = document.querySelector(template).content;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._id = data.id;
    this._handleCardClick = handleCardClick;
    this._handleDelClick = handleDelClick;
    this._handleLikeClick = handleLikeClick;
  }


  isLiked() {
    const userHasLiked = this._likes.find(user => user._id === this._userId);
    return userHasLiked;
  }

  //Функция лайка карточки
  _addCardLike() {
    this._cardLike.classList.add('card__like_active');
  };

  _removeCardLike() {
    this._cardLike.classList.remove('card__like_active');
  }

  setLikeCount(like) {
    this._likes = like;
    this._cardLikeCount.textContent = this._likes.length;

    if (this.isLiked()) {
      this._addCardLike();
    } else {
      this._removeCardLike()
    }
  }

  //Функция удаления карточки
  deleteCard = () => {
    this._cardBody.remove();
    this._cardBody = null;
  };


  //Слушатели
  _setEventListeners() {
    // this._cardLike.addEventListener('click', this._addCardLike);
    this._cardLike.addEventListener('click', () => this._handleLikeClick(this._id));

    this._cardDel.addEventListener('click', () => this._handleDelClick(this._id));
    this._cardImg.addEventListener('click', this._handleCardClick);
  }

  // Шаблон карточки
  getCard() {
    this._cardBody = this._cardTemplate.querySelector('.card').cloneNode(true);
    this._cardTitle = this._cardBody.querySelector('.card__title');
    this._cardImg = this._cardBody.querySelector('.card__img');
    this._cardLike = this._cardBody.querySelector('.card__like');
    this._cardDel = this._cardBody.querySelector('.card__del');
    this._cardLikeCount = this._cardBody.querySelector('.card__like-info');
    this._cardTitle.textContent = this._name;
    this._cardImg.setAttribute('src', this._link);
    this._cardImg.setAttribute('alt', this._name);

    this._setEventListeners()

    this.setLikeCount(this._likes);

    if (this._ownerId !== this._userId) {
      this._cardDel.style.display = 'none';
    }
    return this._cardBody;
  }
}
