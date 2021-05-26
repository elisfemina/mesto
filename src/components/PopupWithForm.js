import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, submitForm }) {
        super({ popupSelector });
        this._submitForm = submitForm;
        this._popupSelector = popupSelector;
        this._form = this._popupSelector.querySelector('.form');
    }
    //Собирает данные полей форм
    _getInputValues() {
        const inputList = this._form.querySelectorAll('.form__input');
        // создаём пустой объект
        this._formValues = {};

        // добавляем в этот объект значения всех полей
        inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })

        // возвращаем объект со значениями
        return this._formValues
    }
    //Закрытие попапа по кнопке закрытия и обрабатывает сабмит
    setEventListeners() {
        // super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitForm(this._getInputValues());
        });
    }

    closePopup() {
        super.closePopup()
        this._form.reset();
    }
}