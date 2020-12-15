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
        name: 'Мурманск',
        link: 'images/Murmansk.jpg'
    },
    {
        name: 'Волгоград',
        link: 'images/Volgograd.jpg'
    }
];

// Селекторы попапов
const popupEditProfile = document.querySelector('.popup_act_edit-profile');
const popupAddCard = document.querySelector('.popup_act_add-card');
const popupPhotoCards = document.querySelector('.popup-photo');

// Селектор кнопки открытия формы редактирования профиля
const buttonInfoEdit = document.querySelector('.profile__info-edit');

// Селектор кнопки открытия формы добавления места
const buttonAddCard = document.querySelector('.add-button');

// Селекторы кнопок закрытия попапов
const buttonCloseEditProfile = document.querySelector('.popup__close-button_edit-profile');
const buttonCloseAddCard = document.querySelector('.popup__close-button_add-card');
const buttonClosePhotoCards = document.querySelector('.popup-photo__close-button');

// Селектор полей формы редактирования профиля
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formName = document.querySelector('.form__input_edit_name');
const formJob = document.querySelector('.form__input_edit_job');
const formElement = document.querySelector('.form');

// Селектор полей формы добавления карточки места
const formInputCardTitle = document.querySelector('.form__input_edit_card-title');
const formInputCardLinkImage = document.querySelector('.form__input_edit_card-link-image');

// Селектор контейнера карточек
const CardsContainer = document.querySelector('.cards__box');

// Селектор шаблона карточки места
const templateCards = document.querySelector('.template');

// Функция открытия формы
function handleButtonClick(popup) {
  popup.classList.add('popup_opened');
  if (popup === popupEditProfile) {
formName.value = profileName.textContent;
formJob.value = profileJob.textContent;
  }
}

// Функция закрытия формы
function handlePopupCloseButtonClick(popup) {
  popup.classList.remove('popup_opened');
}

// Функция закрытия формы редактирования профиля после сохранения
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = formName.value;
    profileJob.textContent = formJob.value;
    handlePopupCloseButtonClick(popupEditProfile);
}

// Функция удаления карточки
    function removeCard(e) {
    const targetElement = e.target;
    const targetCard = targetElement.closest('.card');
    targetCard.remove();
}

//Функция лайк карточки
function likeCard(e) {
    const targetElement = e.target;
    targetElement.classList.toggle('card__like');
}

//Функция попап фото
function openPhotoPopup(e, item) {
    const targetElement = e.target;
    const imageCards = document.querySelector('.popup-photo__image');
    const subtitleCards = document.querySelector('.popup-photo__heading');
    const photoLink = targetElement.getAttribute('src');

    popupPhotoCards.add('popup_opened');
    imageCards.src = photoLink;
    imageCards.setAttribute("alt", item.name);
    subtitleCards.textContent = item.name;
}

//Создание карточки из template
function createCard(item) {
    const newCard = templateCards.content.cloneNode(true);
    const cardImage = newCard.querySelector('.card__image');
    const cardSubtitle = newCard.querySelector('.card__subtitle');
    cardImage.src = item.link;
    cardImage.setAttribute("alt", item.name);
    cardSubtitle.textContent = item.name;


    //Кнопка удаления карточки
    const buttonCardTrash = newCard.querySelector('.card__trash');
    buttonCardTrash.addEventListener('click', removeCard)

    //Кнопка лайк
    const buttonLike = newCard.querySelector('.card__like');
    buttonLike.addEventListener('click', likeCard);

    // Картинка карточки
    const photoCards = newCard.querySelector('.card__image');
    photoCards.addEventListener('click', e => openPhotoPopup(e, item));

    return newCard
}

//Добавление карточек в контейнер
function renderInitialCards() {
    const newInitialCards = initialCards.map(createCard);
    CardsContainer.append(...newInitialCards);
}
renderInitialCards();


// Вызов функции открытия формы редактирования профиля
buttonInfoEdit.addEventListener('click', popup => handleButtonClick(popupEditProfile));
// Вызов функции открытия формы добавления карточки
buttonAddCard.addEventListener('click', popup => handleButtonClick(popupAddCard));
// Вызов функции закрытия формы
buttonCloseEditProfile.addEventListener('click', popup => handlePopupCloseButtonClick(popupEditProfile));
buttonCloseAddCard.addEventListener('click', popup => handlePopupCloseButtonClick(popupAddCard));
// Вызов функции закрытия формы редактирования профиля после сохранения
formElement.addEventListener('submit', formSubmitHandler);

popupPhotoCards.addEventListener('click', e => openPhotoPopup(e, item));