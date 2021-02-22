import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
// import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

import {
  initialCards,
  cardsContainer,
  templateCards,
  popupPhotoCards,
  imageCards,
  subtitleCards,
  buttonInfoEdit,
  buttonAddCard,
  popupEditProfile,
  profileName,
  profileJob,
  formName,
  formJob,
  formEditForm,
  popupAddCard,
  formInputCardTitle,
  formInputCardLinkImage,
  popupAddForm,
  buttonCreate,
  buttonCloseEditProfile,
  buttonCloseAddCard,
  buttonClosePhotoCards,
} from '../utils/constants.js';

// Открытие попапа
function handleButtonClick(openPopup) {
  openPopup.classList.add('popup_opened');
  openPopup.addEventListener('click', closeOverlayClick);
  document.addEventListener('keydown', closePressEsc);
}

const userInfo = new UserInfo({ userNameSelector, userInfoSelector });

// Слушатель кнопки открытия формы редактирования профиля
buttonInfoEdit.addEventListener('click', () => handleButtonClick(popupEditProfile));



// Редактирование формы профиля
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  closePopup(popupEditProfile);
}

popupEditProfile.addEventListener('submit', formSubmitHandler);

// // Вызов кнопки открытия формы добавления карточки
// buttonAddCard.addEventListener('click', () => {
//   addCardValidator.resetValidation();
//   handleButtonClick(popupAddCard);
// });

// Обработка открытия попапа фото при клике на карточку
function handleClickCardPopupImage(link, name) {
  imageCards.src = this._link;
  subtitleCards.textContent = this._name;
  handleButtonClick(popupPhotoCards);
}

// // Закрытие попапа
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('click', closeOverlayClick);
//   document.removeEventListener('keydown', closePressEsc);
// }

// // Закрытие попапа по клику на оверлей
// function closeOverlayClick(evt) {
//   if (evt.target.classList.contains('popup_opened')) {
//     closePopup(evt.target);
//   }
// }

// // Закрытие попапа по нажатию на Esc
// function closePressEsc(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened')
//     closePopup(openedPopup);
//   }
// }

// // Слушатель кнопки закрытия попапа увеличенного изображения карточки
// buttonClosePhotoCards.addEventListener('click', () => closePopup(popupPhotoCards));

// // Вызов функции закрытия формы
// buttonCloseEditProfile.addEventListener('click', () => closePopup(popupEditProfile));
// buttonCloseAddCard.addEventListener('click', () => closePopup(popupAddCard));

// Create six default cards from classes
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.card-template', handleClickCardPopupImage);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
},
  cardsContainer
);
cardList.renderItems();


// //Add new card
// function addNewCard(evt) {
//   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//   const newCardTitle = formInputCardTitle.value;
//   const newLinkImages = formInputCardLinkImage.value;

//   const newCards = createCard({
//     name: newCardTitle,
//     link: newLinkImages
//   });
//   cardsContainer.prepend(newCards);
//   popupAddForm.reset();
//   closePopup(popupAddCard);
// }

// popupAddCard.addEventListener('submit', addNewCard);

// // Редактирование формы профиля
// function formSubmitHandler(evt) {
//   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

//   profileName.textContent = formName.value;
//   profileJob.textContent = formJob.value;
//   closePopup(popupEditProfile);
// }

// popupEditProfile.addEventListener('submit', formSubmitHandler);



// // Заполнение данных в полях редактирования профиля
// buttonInfoEdit.addEventListener('click', () => {
//   formName.value = profileName.textContent;
//   formJob.value = profileJob.textContent;
//   profileValidator.resetValidation();
// });

// //Очистка инпутов формы добавления карточки
// function resetInput(popup, config) {
//   const inputs = popup.querySelectorAll(config.inputSelector);
//   inputs.forEach(input => {
//     input.value = "";
//   });
// }

// Удаление сообщения об ошибке
function removeError(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);
  inputList.forEach(input => {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = "";
    input.classList.remove(config.inputErrorClass);
  });
}

// Валидация форм

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_invalid',
  inputErrorClass: 'form__input_state_invalid'
};

const profileValidator = new FormValidator(validationConfig, formEditForm);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, popupAddForm);
addCardValidator.enableValidation();