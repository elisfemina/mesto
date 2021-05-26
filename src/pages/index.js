//class UserInfo - выводит информацию об имени и занятии пользователя
import UserInfo from '../components/UserInfo.js';

// class Card - карточка с изображением, названием и лайком
import Card from '../components/Card.js';

// class Section -  отрисовка элемента на странице
import Section from '../components/Section.js';

// class PopupWithForm - попап формы редактирования профиля и добавления карточки
import PopupWithForm from '../components/PopupWithForm.js';

// class PopupWithImage - попап увеличенного фото карточки
import PopupWithImage from '../components/PopupWithImage.js';

// class FormValidator - валидация заполнения полей формы
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
  buttonSave,
  buttonCreate,
  buttonCloseEditProfile,
  buttonCloseAddCard,
  buttonClosePhotoCards,
} from '../utils/constants.js';

// // Вызов кнопки открытия формы добавления карточки
// buttonAddCard.addEventListener('click', () => {
//   addCardValidator.resetValidation();
//   handleButtonClick(popupAddCard);
// });

// // Обработка открытия попапа фото при клике на карточку
// function handleClickCardPopupImage(link, name) {
//   imageCards.src = this._link;
//   subtitleCards.textContent = this._name;
//   handleButtonClick(popupPhotoCards);
// }

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







// // Открытие попапа
// function handleButtonClick(openPopup) {
//   openPopup.classList.add('popup_opened');
//   openPopup.addEventListener('click', closeOverlayClick);
//   document.addEventListener('keydown', closePressEsc);
// }

// // Слушатель кнопки открытия формы редактирования профиля
// buttonInfoEdit.addEventListener('click', () => handleButtonClick(popupEditProfile));

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


//____________________________________________________

//Информация о пользователе из HTML
const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userInfoSelector: '.profile__job'
});


// const popupFormEditProfile = new PopupWithForm({
//   popupSelector: '.popup_act_edit-profile',
//   submitForm: () => {
//   userInfo.getUserInfo();
//   }
// });

// popupFormEditProfile.setEventListeners();

//___________________________________________
//+++++++++++++++++++++++++++++++++++++++++++++++++++
// Заполнение данных формы редактирования профиля при нажатии на кнопку редактирования
// buttonInfoEdit.addEventListener('click', () => {
//   popupFormEditProfile.openPopup();
//   const userInfoEdit = userInfo.getUserInfo();
//   formName.value = userInfoEdit.name;
//   formJob.value = userInfoEdit.job;
//   profileValidator.resetValidation();
// });
//_________________________________________________
//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create six default cards from classes
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      // const cardElement = card.generateCard();
      cardList.addItem(card);
    }
  },
  cardsContainer
);
cardList.renderItems();

// Попап фото
// const popupImage = new PopupWithImage({
//   popupSelector: '.popup-photo'
// });

// const cardList = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     const card = new Card(item, '.card-template');
//     const cardElement = card.generateCard();
//     cardList.addItem(cardElement);
//   }
// },
//   cardsContainer
// );
// cardList.renderItems();


// //Add new card

// const addNewCard = new Section({
//   items: templateCards,
//   renderer: (item) => {
//     const card = new Card(item, '.card-template');
//     const cardElement = card.generateCard();
//     addNewCard.addNewItem(cardElement);
//   }
// },
//   cardsContainer
// );
// addNewCard.renderNewItem();

function createCard(item) {
  const card = new Card(item, '.card-template');
  const cardElement = card.generateCard();
  return cardElement;
  // addNewCard.addNewItem(cardElement);
}

//создание карточки
// function createCard(item) {
//   const card = new Card(item, {
//       selector: '.template',
//       handleCardClick: () => {
//           popupImage.open(item);
//       },
//       removeHandler: () => {
//           popupDeleteCard.setEventListeners(deleteCard(card));
//           popupDeleteCard.open();
//       },
//       api: api
//   }, userId);
//   const cardElement = card.generateCard();

//   return cardElement
// }

// addNewCard.renderNewItem();

// const card = new Card(item, '.card-template');
// const cardElement = card.generateCard();
// return cardElement;

const popupFormAddCard = new PopupWithForm({
  popupSelector: popupAddCard,
  submitForm: () => {
    // popupFormAddCard.setEventListeners();

    const card = createCard(item)

    cardList.addNewItem(card);
  }

});
// cardList.renderNewItem();

popupFormAddCard.handleButtonClose();

popupFormAddCard.setEventListeners();

// popupAddCard.addEventListener('submit', popupFormAddCard);

// Вызов кнопки открытия формы добавления карточки
buttonAddCard.addEventListener('click', () => {
  addCardValidator.resetValidation();
  popupFormAddCard.openPopup();
});



// // Вызов кнопки открытия формы добавления карточки
// buttonAddCard.addEventListener('click', () => {
//   addCardValidator.resetValidation();
//   handleButtonClick(popupAddCard);
// });











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