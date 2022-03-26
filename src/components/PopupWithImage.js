import {
  Popup
} from './Popup.js';

import {
  popupImage,
  popupImageDescription
} from './constans.js'

export class PopupWithImage extends Popup {
  constructor(selector, image, description) {
    super(selector);
    this._image = image;
    this._description = description;
  }
  open(link, text) {
    popupImage.src = link;
    popupImage.alt = text;
    popupImageDescription.textContent = text;

    super.open();
  }
}
