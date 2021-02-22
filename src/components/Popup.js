export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(this._popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this)

    }
    //Opens popup
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.addEventListener('click', this._handleOverlayClose);
    }



    // Closes popup
    close() {
        _popupElement.classList.remove('popup_opened');
        document.removeEventListener('click', this._handleEscClose);
        this._popupElement.removeEventListener('click', this._handleOverlayClose);
    }

    // Closing popup by button Escape
    _handleEscClose() {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    // Closing popup by clicking on overlay

    _handleOverlayClose() {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    // Closing popup by clicking on close button
    setEventListeners() {
        const closeButton = this._popupElement.querySelector('.popup__close-button');

        closeButton.addEventListener('click', () => this.close)
    }

}