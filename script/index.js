const initialCards = [
    {
        name: 'Москва',
        link: 'images/Moscow-city.jpg'
    },
    {
        name: 'Новосибирск',
        link: 'images/Novosibirsk.jpg'
    },
    {
        name: 'Иркутск',
        link: 'images/Irkutsk.jpg'
    },
    {
        name: 'Владивосток',
        link: 'images/Vladivostok.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'images/Murmansk.jpg'
    },
    {
        name: 'Волгоград',
        link: 'images/Volgograd.jpg'
    }
];

// Селекторы попапов

const popupNode = document.querySelector('.popup'); //удалить
const popupEditProfile = document.querySelector('.popup_act_edit-profile');
const popupAddCard = document.querySelector('.popup_act_add-card');

// Селектор кнопки открытия формы редактирования профиля
const buttonInfoEdit = document.querySelector('.profile__info-edit');

// Селектор кнопки открытия формы добавления места
const buttonAddCard = document.querySelector('.add-button');

// Селектор кнопки закрытия попапов
const popupCloseButtonNode = document.querySelector('.popup__close-button'); //заменить
const buttonCloseEditProfile = document.querySelector('.popup__close-button_edit-profile');
const buttonCloseAddCard = document.querySelector('.popup__close-button_add-card');

// Селектор полей формы редактирования профиля
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formName = document.querySelector('.form__input_edit_name');
const formJob = document.querySelector('.form__input_edit_job');
const formElement = document.querySelector('.form');

// Селектор полей формы добавления карточки места
const formInputCardTitle = document.querySelector('.form__input_edit_card-title');
const formInputCardLinkImage = document.querySelector('.form__input_edit_card-link-image');

// Функция открытия формы
function handleButtonClick(popup) {
  popup.classList.add('popup_opened');

  if (popup === popupEditProfile) {
formName.value = profileName.textContent;
formJob.value = profileJob.textContent;
  }
}
// Вызов функции открытия формы редактирования профиля
buttonInfoEdit.addEventListener('click', popup => handleButtonClick(popupEditProfile));

// Вызов функции открытия формы добавления карточки
buttonAddCard.addEventListener('click', popup => handleButtonClick(popupAddCard));

// Функция закрытия формы
function handlePopupCloseButtonClick(popup) {
  popup.classList.remove('popup_opened');
}
// Вызов функции закрытия формы
buttonCloseEditProfile.addEventListener('click', popup => handlePopupCloseButtonClick(popupEditProfile));

buttonCloseAddCard.addEventListener('click', popup => handlePopupCloseButtonClick(popupAddCard));

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = formName.value;
    profileJob.textContent = formJob.value;
    handlePopupCloseButtonClick();
}

formElement.addEventListener('submit', formSubmitHandler);

// Попап добавления карточки места

function handleCardPlaceEditClick() {
  popupNode.classList.add('popup_opened');
formCardTitle.value = 'Название';
formCardLinkImage.value = 'Ссылка на картинку';
}

// Добавляем слушатель для кнопки добавления карточки места

// buttonAddPlace.addEventListener('click', handleCardPlaceEditClick);