export default class Card {

    constructor(data, cardSelector, handleClickCardPopupImage) {
      this._link = data.link;
      this._name = data.name;
      this._cardSelector = cardSelector;
      this._cardTemplate = document.querySelector(cardSelector).content.querySelector('.card');
      this._handleClickCardPopupImage = handleClickCardPopupImage;
    }
  
    _getTemplate() {
      const cardElement = this._cardTemplate.cloneNode(true);
      return cardElement;
    }
  
    generateCard() {
      // Запишем разметку в приватное поле _element.
      // Так у других элементов появится доступ к ней.
      this._element = this._getTemplate();
  
      // Добавляем данные в карточку
      const cardImageElement = this._element.querySelector('.card__image');
      this._cardImage = cardImageElement;
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._element.querySelector('.card__subtitle').textContent = this._name;
  
      //Добавление обработчика
      this._setEventListeners();
  
      // Вернём элемент наружу
      return this._element;
    }
  
    _setEventListeners() {
      // Слушатель клика открытия попапа увеличенного изображения
      this._cardImage.addEventListener('click', () => {
        this._handleClickCardPopupImage(this._name, this._link)
      });
  
      //Слушатель кнопки удаления карточки
      this._element.querySelector('.card__trash').addEventListener('click', () => {
        this._trashCard();
      });
  
      // Слушатель кнопки лайка
      this._element.querySelector('.card__like').addEventListener('click', () => {
        this._buttonLike();
      });
    }
  
    // // Удаление карточки
    _trashCard = () => {
      this._element.remove();
    }
  
    // Лайк карточки
    _buttonLike = () => {
      this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }
  
  }