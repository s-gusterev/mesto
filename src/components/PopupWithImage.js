import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  open(link, text) {
    this._image = this._popup.querySelector('.popup__img');
    this._description = this._popup.querySelector('.popup__img-description');

    this._image.src = link;
    this._image.alt = text;
    this._description.textContent = text;

    super.open();
  }
}
