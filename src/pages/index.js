import './index.css';
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

// Селектор кнопки открытия формы редактирования профиля
const buttonInfoEdit = document.querySelector('.profile__button-info-edit');
// Селектор кнопки открытия формы добавления места
const buttonAddCard = document.querySelector('.add-button');
// Селекторы формы редактирования профиля
const formName = document.querySelector('.form__input_edit_name');
const formJob = document.querySelector('.form__input_edit_job');
const formEditForm = document.querySelector('.form_edit-form');
// Селекторы формы добавления карточки
const popupAddCard = '.popup_act_add-card';
const popupAddForm = document.querySelector('.form_add-form');

import {
  initialCards,
  cardsContainer,
} from '../utils/constants.js';

//Информация о пользователе из HTML
const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userInfoSelector: '.profile__job'
});

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      cardList.addItem(card);
    }
  },
  cardsContainer
);

cardList.renderItems();

// Создание модалок

const popupFormEditProfile = new PopupWithForm({
  popupSelector: '.popup_act_edit-profile',
  submitForm: (data) => {
    userInfo.setUserInfo(data);
    popupFormEditProfile.closePopup();
  }
});

const popupFormAddCard = new PopupWithForm({
  popupSelector: popupAddCard,
  submitForm: (data) => {
    const newData = {
      name: data['card-title'],
      link: data['card-link-image']
    }
    const card = createCard(newData)
    cardList.prependNewItem(card);
    popupFormAddCard.closePopup()
  }
});

const popupImage = new PopupWithImage({
  popupSelector: '.popup-photo'
});

popupFormEditProfile.setEventListeners();
popupFormAddCard.setEventListeners();

function createCard(item) {
  const card = new Card(item, '.card-template', handleCardImageClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardImageClick(name, link) {
  popupImage.openPopup(name, link);
}

// Подписки открытия модалок
buttonInfoEdit.addEventListener('click', handleEditModalOpen);

buttonAddCard.addEventListener('click', handleAddCardModalOpen);

function handleEditModalOpen() {
  // 1. получить данные
  const userInfoEdit = userInfo.getUserInfo();
  // 2. положить их в форму
  formName.value = userInfoEdit.name;
  formJob.value = userInfoEdit.job;
  profileValidator.resetValidation();
  popupFormEditProfile.openPopup()
}

function handleAddCardModalOpen() {
  addCardValidator.resetValidation();
  popupFormAddCard.openPopup();
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