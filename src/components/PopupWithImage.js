import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  open(link, text) {
    const image = this._selector.querySelector('.popup__img');
    const description = this._selector.querySelector('.popup__img-description');

    image.src = link;
    image.alt = text;
    description.textContent = text;

    super.open();
  }
}
