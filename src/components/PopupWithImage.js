import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor({ popupSelector }) {
        super({ popupSelector });
        this._image = document.querySelector(popupSelector).querySelector('.popup-photo__image');
        this._subtitle = document.querySelector(popupSelector).querySelector('.popup-photo__subtitle');
    }

    open(item) {
        super.open();
        this._image.src = item.link;
        this._image.setAttribute("alt", item.name);
        this._subtitle.textContent = item.name;
    }

}

// // Обработка открытия попапа фото при клике на карточку
// function handleClickCardPopupImage(link, name) {
//     imageCards.src = this._link;
//     subtitleCards.textContent = this._name;
//     handleButtonClick(popupPhotoCards);
//   }