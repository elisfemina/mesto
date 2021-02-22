import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor ({ popupSelector, submitForm }) {
        super ({popupSelector});
        this._submitForm = submitForm;
        this._popupElement = document.querySelector(this._popupSelector);
        this._form = this._popup.querySelector('.form');
    }
//Собирает данные полей форм
    _getInputValues() {
        const inputList = this._form.querySelectorAll('.form__input');
        this._formValues = {};
        inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })

        return this._formValues
    }
//Закрытие попапа по кнопке закрытия и обрабатывает сабмит
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitForm(this._getInputValues());
        });        
    }

    close() {
        super.close()
        this._form.reset();
    }    
}