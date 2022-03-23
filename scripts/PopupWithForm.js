import {
  Popup
} from './Popup.js';



export class PopupWithForm extends Popup {
  constructor(selector, {
    callback
  }) {
    super(selector);
    this._submit = callback;
    this._form = this._selector.querySelector('.popup__container');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submit(this._getInputValues());
      this.close();
      //   this._getInputValues()
    })
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    this._value = {};
    this._inputList.forEach((item) => {
      this._value[item.name] = item.value;
    })
    return this._value;
  }

}
