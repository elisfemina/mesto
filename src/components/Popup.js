export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    //Opens popup
    openPopup() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popupSelector.addEventListener('click', this._handleOverlayClose);
    }



    // Closes popup
    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('click', this._handleEscClose);
        this._popupSelector.removeEventListener('click', this._handleOverlayClose);
    }

    // Closing popup by button Escape
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    // Closing popup by clicking on overlay
    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.closePopup();
        }
    }

    // Closing popup by clicking on close button

    handleButtonClose() {
        const closeButton = this._popupSelector.querySelector('.popup__close-button');
        closeButton.addEventListener('click', () => this.closePopup());
    }
    // setEventListeners() {
    //     const closeButton = this._popupSelector.querySelector('.popup__close-button');

    //     //Закрытие на "крестик"
    //     closeButton.addEventListener('click', () => this.closePopup());
    //     console.log(closeButton);
    // }

}