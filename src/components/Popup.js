export class Popup {
  constructor(selector) {
    this._selector = selector;
  }

  open() {
    this._selector.classList.add('popup_opened');
    document.addEventListener('keydown', (event) => {
      this._handleEscClose(event, this._selector);
    })
  }
  close() {
    this._selector.classList.remove('popup_opened');
    document.removeEventListener('keydown', (event) => {
      this._handleEscClose(event, this._selector);
    })
  }

  _handleEscClose(event, popup) {
    if (event.key === 'Escape') {
      this._selector = popup;
      this.close()
    }
  }

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
