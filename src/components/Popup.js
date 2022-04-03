export default class Popup {
  constructor(popupSelector) {
    this._selector = document.querySelector(popupSelector);
  }

  // Открываем
  open() {
    this._selector.classList.add('popup_opened');
    document.addEventListener('keydown', (event) => {
      this._handleEscClose(event);
    })
  }

  // Закрываем
  close() {
    this._selector.classList.remove('popup_opened');
    document.removeEventListener('keydown', (event) => {
      this._handleEscClose(event);
    })
  }

//Закрываем по ESC
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close()
    }
  }


  // Слушатели на закрытие
  setEventListeners() {
    this._selector.addEventListener('mousedown', (event) => {

      if (event.target === event.currentTarget) {
        this.close();
      } else if (event.target.classList.contains('popup__close')) {
        this.close();
      }
    })
  }
}
