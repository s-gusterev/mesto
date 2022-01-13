const popup = document.querySelector('.popup');
const btnEditProfile = document.querySelector('.profile__btn-edit-profile');
const formElement = popup.querySelector('.popup__container');
const inputName = formElement.querySelector('.popup__name');
const inputJob = formElement.querySelector('.popup__job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const valueName = inputName.setAttribute('value', profileName.textContent);
const valueJob = inputJob.setAttribute('value', profileJob.textContent);

btnEditProfile.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  const popupClose = popup.querySelector('.popup__close');

  popupClose.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
  })
})

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
