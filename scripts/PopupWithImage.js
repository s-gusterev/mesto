import {Popup} from './Popup.js';

import {
  popupImage,
  popupImageDescription,
//   popupFullImage,
  // openPopup
} from './utils.js'

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }
  open() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageDescription.textContent = this._name;

    super.open();
  }
}
