let profileInfoEdit = document.querySelector('.profile__info-edit');
let popupNode = document.querySelector('.popup');
let popupCloseButtonNode = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formName = document.querySelector('.form__name');
let formJob = document.querySelector('.form__job');
let formElement = document.querySelector('.form');




profileInfoEdit.addEventListener('click', handleProfileInfoEditClick);
popupCloseButtonNode.addEventListener('click', handlePopupCloseButtonClick);

function handleProfileInfoEditClick() {
  popupNode.classList.add('popup_opened');
formName.value = profileName.textContent;
formJob.value = profileJob.textContent;
}

function handlePopupCloseButtonClick() {
  popupNode.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = formName.value;
    profileJob.textContent = formJob.value;
}

formElement.addEventListener('submit', formSubmitHandler);