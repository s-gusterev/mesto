import {Popup} from './Popup.js';

import {
  popupImage,
  popupImageDescription,
//   popupFullImage,
  // openPopup
} from './utils.js'

export class PopupWithImage extends Popup {
  constructor(selector, image, description) {
    super(selector);
    this._image = image;
    this._description = description;
  }
  open(link, text) {
    // popupImage.src = this._link;
    // popupImage.alt = this._name;
    // popupImageDescription.textContent = this._name;

     popupImage.src = link;
     popupImage.alt = text;
     popupImageDescription.textContent = text;

    super.open();
  }
}
