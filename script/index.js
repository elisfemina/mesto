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

let profileInfoEdit = document.querySelector('.profile__info-edit');
let popupNode = document.querySelector('.popup');
let popupCloseButtonNode = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formName = document.querySelector('.form__input_edit_name');
let formJob = document.querySelector('.form__input_edit_job');
let formElement = document.querySelector('.form');

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