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

const profileInfoEdit = document.querySelector('.profile__info-edit');
const popupNode = document.querySelector('.popup');
const popupCloseButtonNode = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formName = document.querySelector('.form__input_edit_name');
const formJob = document.querySelector('.form__input_edit_job');
const formElement = document.querySelector('.form');

// Переменная кнопки добавления места
const buttonAddPlace = document.querySelector('.add-button');

// Переменные попапа ввода полей добавления места
const formCardTitle = document.querySelector('.form__input_edit_card-title');
const formCardLinkImage = document.querySelector('.form__input_edit_card-link-image');

// Попап редактирования профиля
function handleProfileInfoEditClick() {
  popupNode.classList.add('popup_opened');
formName.value = profileName.textContent;
formJob.value = profileJob.textContent;
}

profileInfoEdit.addEventListener('click', handleProfileInfoEditClick);

function handlePopupCloseButtonClick() {
  popupNode.classList.remove('popup_opened');
}

popupCloseButtonNode.addEventListener('click', handlePopupCloseButtonClick);

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

buttonAddPlace.addEventListener('click', handleCardPlaceEditClick);