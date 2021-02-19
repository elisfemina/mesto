import { initialCards } from '../components/initial-cards.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';

// Селектор контейнера карточек
const cardsContainer = document.querySelector('.cards__box');

// Селектор шаблона карточки места
const templateCards = document.querySelector('.card-template');

// Селекторы попапа увеличенной картинки при клике на карточку
const popupPhotoCards = document.querySelector('.popup-photo');
const imageCards = document.querySelector('.popup-photo__image');
const subtitleCards = document.querySelector('.popup-photo__subtitle');

// Селектор кнопки открытия формы редактирования профиля
const buttonInfoEdit = document.querySelector('.profile__info-edit');

// Селектор кнопки открытия формы добавления места
const buttonAddCard = document.querySelector('.add-button');

// Селекторы формы редактирования профиля
const popupEditProfile = document.querySelector('.popup_act_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formName = document.querySelector('.form__input_edit_name');
const formJob = document.querySelector('.form__input_edit_job');
const formEditForm = document.querySelector('.form_edit-form');

// Селекторы формы дбавления карточки
const popupAddCard = document.querySelector('.popup_act_add-card');
const formInputCardTitle = document.querySelector('.form__input_edit_card-title');
const formInputCardLinkImage = document.querySelector('.form__input_edit_card-link-image');
const popupAddForm = document.querySelector('.form_add-form');
const buttonCreate = document.querySelector('.popup__button-create');

// Селекторы кнопок закрытия попапов
const buttonCloseEditProfile = document.querySelector('.popup__close-button_edit-profile');
const buttonCloseAddCard = document.querySelector('.popup__close-button_add-card');
const buttonClosePhotoCards = document.querySelector('.popup-photo__close-button');

// Открытие попапа
function handleButtonClick(openPopup) {
  openPopup.classList.add('popup_opened');
  openPopup.addEventListener('click', closeOverlayClick);
  document.addEventListener('keydown', closePressEsc);
}

// Слушатель кнопки открытия формы редактирования профиля
buttonInfoEdit.addEventListener('click', () => handleButtonClick(popupEditProfile));

// Вызов кнопки открытия формы добавления карточки
buttonAddCard.addEventListener('click', () => {  
  addCardValidator.resetValidation();
  handleButtonClick(popupAddCard);  
  });

// Обработка открытия попапа фото при клике на карточку
function handleClickCardPopupImage(link, name) {
  imageCards.src = this._link;
  subtitleCards.textContent = this._name;
  handleButtonClick(popupPhotoCards);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', closeOverlayClick);
  document.removeEventListener('keydown', closePressEsc);
}

// Закрытие попапа по клику на оверлей
function closeOverlayClick(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

// Закрытие попапа по нажатию на Esc
function closePressEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

// Слушатель кнопки закрытия попапа увеличенного изображения карточки
buttonClosePhotoCards.addEventListener('click', () => closePopup(popupPhotoCards));

// Вызов функции закрытия формы
buttonCloseEditProfile.addEventListener('click', () => closePopup(popupEditProfile));
buttonCloseAddCard.addEventListener('click', () => closePopup(popupAddCard));

// Создание карточки
function createCard(item) {
  const card = new Card(item, ".card-template", handleClickCardPopupImage);
  const cardElement = card.generateCard();
  return cardElement;
}

// Рендер карточки
initialCards.forEach((item) => {
  const cardElement = createCard(item);

  // Добавляем в DOM
  cardsContainer.append(cardElement);
});


//Добавление новой карточки
function addNewCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const newCardTitle = formInputCardTitle.value;
  const newLinkImages = formInputCardLinkImage.value;

  const newCards = createCard({
    name: newCardTitle,
    link: newLinkImages
  });
  cardsContainer.prepend(newCards);  
  popupAddForm.reset();
  closePopup(popupAddCard);   
}

popupAddCard.addEventListener('submit', addNewCard);

// Редактирование формы профиля
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  closePopup(popupEditProfile);
}

popupEditProfile.addEventListener('submit', formSubmitHandler);



// Заполнение данных в полях редактирования профиля
buttonInfoEdit.addEventListener('click', () => {
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
  profileValidator.resetValidation();
});

//Очистка инпутов формы добавления карточки
function resetInput(popup, config) {
  const inputs = popup.querySelectorAll(config.inputSelector);
  inputs.forEach(input => {
    input.value = "";
  });
}

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