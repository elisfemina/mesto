const initialCards = [
  {
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    name: 'Asgard'
  },
  {
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    name: 'Jotunheim'
  },
  {
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    name: 'Maveth'
  },
  {
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    name: 'Sakaar'
  },
  {
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    name: 'Vormir'
  },
  {
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    name: 'Xandar'
  }
];

class Card {
  construtor(link, name) {
    this._link = link;
    this._name = name;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.card-template')
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();

    // Добавляем данные
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__subtitle').textContent = this._name;

    // Вернём элемент наружу
    return this._element;
  }
}

initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item.link, item.name);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.cards__box').append(cardElement);  
});

// // Селекторы попапов
// const popupEditProfile = document.querySelector('.popup_act_edit-profile');
// const popupAddCard = document.querySelector('.popup_act_add-card');
// const popupPhotoCards = document.querySelector('.popup-photo');

// // Селектор кнопки открытия формы редактирования профиля
// const buttonInfoEdit = document.querySelector('.profile__info-edit');

// // Селектор кнопки открытия формы добавления места
// const buttonAddCard = document.querySelector('.add-button');

// // Селекторы кнопок закрытия попапов
// const buttonCloseEditProfile = document.querySelector('.popup__close-button_edit-profile');
// const buttonCloseAddCard = document.querySelector('.popup__close-button_add-card');
// const buttonClosePhotoCards = document.querySelector('.popup-photo__close-button');

// // Селектор полей формы редактирования профиля
// const profileName = document.querySelector('.profile__name');
// const profileJob = document.querySelector('.profile__job');
// const formName = document.querySelector('.form__input_edit_name');
// const formJob = document.querySelector('.form__input_edit_job');
// const formElement = document.querySelector('.form');
// const formEditForm = document.querySelector('.form_edit-form');

// // Селектор полей формы добавления карточки места
// const formInputCardTitle = document.querySelector('.form__input_edit_card-title');
// const formInputCardLinkImage = document.querySelector('.form__input_edit_card-link-image');
// const popupAddForm = document.querySelector('.form_add-form');

// // Селектор контейнера карточек
// const cardsContainer = document.querySelector('.cards__box');

// // Селектор шаблона карточки места
// const templateCards = document.querySelector('.template');

// const buttonCreate = document.querySelector('.popup__button-create');

// // Открытие попапа
// function handleButtonClick(popup) {
// popup.classList.add('popup_opened');
// popup.addEventListener('click', closeOverlayClick);
// document.addEventListener('keydown', closePressEsc);
// }

// // Закрытие попапа
// function closePopup(popup) {
// popup.classList.remove('popup_opened');
// document.removeEventListener('click', closeOverlayClick);
// document.removeEventListener('keydown', closePressEsc);
// }

// // Закрытие попапа по клику на оверлей
// function closeOverlayClick(evt) {
// if (evt.target.classList.contains('popup_opened')) {
//   closePopup(evt.target);
// }
// }

// // Закрытие попапа по нажатию на Esc
// function closePressEsc(evt) {
// if (evt.key === 'Escape') {
//   const openedPopup = document.querySelector('.popup_opened')
//   closePopup(openedPopup);
// }
// }

// //Очистка инпутов формы добавления карточки
// function resetInput(popup, config) {
// const inputs = popup.querySelectorAll(config.inputSelector);
// inputs.forEach(input => {
//   input.value = "";
// });
// }

// // Удаление сообщения об ошибке
// function removeError(form, config) {
// const inputList = form.querySelectorAll(config.inputSelector);
// inputList.forEach(input => {
//   const error = document.querySelector(`#${input.id}-error`);
//   error.textContent = "";
//   input.classList.remove(config.inputErrorClass);
// });
// }

// // Закрытие формы редактирования профиля после редактирования и сохранения
// function formSubmitHandler(evt) {
// evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

// profileName.textContent = formName.value;
// profileJob.textContent = formJob.value;
// closePopup(popupEditProfile);
// }

// // Удаление карточки
// function removeCard(e) {
// e.target.closest('.card').remove();
// }

// // Лайк карточки
// function likeCard(e) {
// e.target.classList.toggle('card__like_active');
// }

// // Попап фото
// function openPhotoPopup(evt, item) {
// const targetElement = evt.target;
// const imageCards = document.querySelector('.popup-photo__image');
// const subtitleCards = document.querySelector('.popup-photo__subtitle');
// const linkImageCards = targetElement.getAttribute('src');

// handleButtonClick(popupPhotoCards);
// imageCards.src = linkImageCards;
// imageCards.setAttribute("alt", item.name);
// subtitleCards.textContent = item.name;
// }

// //Создание карточки из template
// function createCard(item) {
// const newCard = templateCards.content.cloneNode(true);
// const cardImage = newCard.querySelector('.card__image');
// const cardSubtitle = newCard.querySelector('.card__subtitle');
// cardImage.src = item.link;
// cardSubtitle.textContent = item.name;
// cardImage.setAttribute("alt", item.name);

// //Кнопка удаления карточки
// const buttonCardTrash = newCard.querySelector('.card__trash');
// buttonCardTrash.addEventListener('click', removeCard)

// //Кнопка лайк
// const buttonLike = newCard.querySelector('.card__like');
// buttonLike.addEventListener('click', likeCard);

// // Картинка карточки
// const photoCards = newCard.querySelector('.card__image');
// photoCards.addEventListener('click', e => openPhotoPopup(e, item));
// return newCard
// }

// //Добавление карточек в контейнер
// function renderInitialCards() {
// const newInitialCards = initialCards.map(createCard);
// cardsContainer.append(...newInitialCards);
// }
// renderInitialCards();

// //Добавление новой карточки
// function addNewCard(evt) {
// evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
// const newCardTitle = formInputCardTitle.value;
// const newLinkImages = formInputCardLinkImage.value;
// const newCards = createCard({
//   name: newCardTitle,
//   link: newLinkImages
// });
// cardsContainer.prepend(newCards);
// popupAddForm.reset();
// closePopup(popupAddCard);
// }

// // Вызов функции открытия формы редактирования профиля
// buttonInfoEdit.addEventListener('click', () => handleButtonClick(popupEditProfile));

// // Вызов функции открытия формы добавления карточки
// buttonAddCard.addEventListener('click', () => handleButtonClick(popupAddCard));

// // Вызов функции закрытия формы
// buttonCloseEditProfile.addEventListener('click', () => closePopup(popupEditProfile));
// buttonCloseAddCard.addEventListener('click', () => closePopup(popupAddCard));
// buttonClosePhotoCards.addEventListener('click', () => closePopup(popupPhotoCards));

// // Вызов функции закрытия формы редактирования профиля после сохранения
// formElement.addEventListener('submit', formSubmitHandler);
// popupAddCard.addEventListener('submit', addNewCard);

// // Удаление сообщения об ошибке в инпутах добавления карты
// buttonAddCard.addEventListener('click', () => {
// resetInput(popupAddCard, validationConfig);
// removeError(popupAddForm, validationConfig);
// setButtonState(buttonCreate, popupAddForm.checkValidity(), validationConfig);
// });

// // Удаление сообщения об ошибке в инпутах редактирования профиля
// buttonInfoEdit.addEventListener('click', () => {
// formName.value = profileName.textContent;
// formJob.value = profileJob.textContent;
// removeError(formEditForm, validationConfig);
// });