export const initialCards = [
    {
      link: './images/Asgard.jpg',
      name: 'Asgard'
    },
    {
      link: './images/Jotunheim.jpg',
      name: 'Jotunheim'
    },
    {
      link: './images/Maveth.jpg',
      name: 'Maveth'
    },
    {
      link: './images/Sakaar.jpg',
      name: 'Sakaar'
    },
    {
      link: './images/Vormir.jpg',
      name: 'Vormir'
    },
    {
      link: './images/Xandar.jpg',
      name: 'Xandar'
    }
  ];

// Селектор контейнера карточек
export const cardsContainer = document.querySelector('.cards__box');

// Селектор шаблона карточки места
export const templateCards = document.querySelector('.card-template');

// Селекторы попапа увеличенной картинки при клике на карточку
export const popupPhotoCards = document.querySelector('.popup-photo');
export const imageCards = document.querySelector('.popup-photo__image');
export const subtitleCards = document.querySelector('.popup-photo__subtitle');

// Селектор кнопки открытия формы редактирования профиля
export const buttonInfoEdit = document.querySelector('.profile__button-info-edit');

// Селектор кнопки открытия формы добавления места
export const buttonAddCard = document.querySelector('.add-button');

// Селекторы формы редактирования профиля
export const popupEditProfile = document.querySelector('.popup_act_edit-profile');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const formName = document.querySelector('.form__input_edit_name');
export const formJob = document.querySelector('.form__input_edit_job');
export const formEditForm = document.querySelector('.form_edit-form');
export const buttonSave = document.querySelector('.popup__button-save');

// Селекторы формы дбавления карточки
export const popupAddCard = document.querySelector('.popup_act_add-card');
export const formInputCardTitle = document.querySelector('.form__input_edit_card-title');
export const formInputCardLinkImage = document.querySelector('.form__input_edit_card-link-image');
export const popupAddForm = document.querySelector('.form_add-form');
export const buttonCreate = document.querySelector('.popup__button-create');

// Селекторы кнопок закрытия попапов
export const buttonCloseEditProfile = document.querySelector('.popup__close-button_edit-profile');
export const buttonCloseAddCard = document.querySelector('.popup__close-button_add-card');
export const buttonClosePhotoCards = document.querySelector('.popup-photo__close-button');