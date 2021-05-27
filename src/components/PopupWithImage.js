import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor({
        popupSelector
    }) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup-photo__image');
        this._subtitle = this._popup.querySelector('.popup-photo__subtitle');
    }

    openPopup(name, link) {
        super.openPopup();
        this._image.src = link;
        this._image.setAttribute("alt", name);
        this._subtitle.textContent = name;
    }
}