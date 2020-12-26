  // Отображение ошибки
  function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
  }

  // Cкрытие ошибки
  function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    input.classList.remove(config.inputErrorClass);
  }

  // Проверка валидности
  function checkInputValidity(form, input, config) {
    if (input.validity.valid) {
      hideError(form, input, config);
    } else {
      showError(form, input, config);
    }
  }

  // Блокировка-разблокировка кнопки
  function setButtonState(button, isActive, config) {
    if (isActive) {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
      button.classList.remove('.form__button:hover');
    } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
    }
  }

  function setEventListener(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputList.forEach(input => {
      input.addEventListener('input', () => {
        checkInputValidity(form, input, config);
        setButtonState(submitButton, form.checkValidity(), config);
      })
    });
  }

  // Поиск нужной формы и кнопки
  function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
      setEventListener(form, config);
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

      const submitButton = form.querySelector(config.submitButtonSelector);
      setButtonState(submitButton, form.checkValidity(), config);
    });
  }

  const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_invalid',
    inputErrorClass: 'form__input_state_invalid'
  };

  enableValidation(validationConfig);