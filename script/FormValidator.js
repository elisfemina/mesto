export class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
        this._buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    }
    // Блокировка-разблокировка кнопки
    _setButtonState = () => {
        if (this._formElement.checkValidity()) {
            this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
            this._buttonElement.disabled = false;
        } else {
            this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
            this._buttonElement.disabled = true;
        }
    }

    _setEventListeners = () => {

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._setButtonState();
            })
        });
    }

    

enableValidation = () => {

    this._formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
    });

    this._setEventListeners();
}

resetValidation = () => {
    this._inputList.forEach((inputElement) => {
        this._hideError(inputElement)
    });

    this._setButtonState();
}
// Отображение ошибки
_showError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._validationConfig.inputErrorClass);
}

// Cкрытие ошибки
_hideError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = "";
    inputElement.classList.remove(this._validationConfig.inputErrorClass);
}

// Проверка валидности
_checkInputValidity = (inputElement) => {
    if (inputElement.validity.valid) {
        this._hideError(inputElement);
    } else {
        this._showError(inputElement);
    }
}
}

