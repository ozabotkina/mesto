
export class Card {
    constructor(link, name, cardSelector, {handleCardClick}){
      this._image = link;
      this._title = name;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
    };
  
    _getTemplate() {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._imageSelector.src = this._image;
      this._imageSelector.alt = this._title;
      this._element.querySelector('.element__title').textContent = this._title;  
      return this._element;
     
    }
    
    _setEventListeners() {
      this._imageSelector = this._element.querySelector('.element__image');
      this._likeElement = this._element.querySelector('.element__like');
      this._likeElement.addEventListener('click', () => {this._like()});
      this._element.querySelector('.element__trash').addEventListener('click', () => {this._sendToTrash()});
      this._imageSelector.addEventListener('click', () => {
      this._handleCardClick();
      
      });
    }
  
    _like() {
      this._likeElement.classList.toggle('element__like_active');
    };
  
    _sendToTrash() {
      this._element.remove();
      this._element = null;
    };
    
}




