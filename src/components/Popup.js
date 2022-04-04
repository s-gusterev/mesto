export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  // Открываем
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose)
  }

  // Закрываем
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose)
  }

  //Закрываем по ESC
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close()
    }
  }


  // Слушатели на закрытие
  setEventListeners() {
    this._popup.addEventListener('mousedown', (event) => {

      if (event.target === event.currentTarget) {
        this.close();
      } else if (event.target.classList.contains('popup__close')) {
        this.close();
      }
    })
  }
}
