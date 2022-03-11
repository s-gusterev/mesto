export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
  }

  // Добавление класса с ошибкой
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.errorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.inputErrorClass);
  }

  // Удаление класса с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.errorClass);
    errorElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = '';
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }



  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  }

resetValidation() {
  this._toggleButtonState(this._inputList, this._buttonElement);
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  });
}

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
}
