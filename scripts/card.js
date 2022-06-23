
import {openPopup, closePopup} from './index.js'

export class Card {
    constructor(link, name, cardSelector){
      this._image = link;
      this._title = name;
      this._cardSelector = cardSelector;
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
      this._element.querySelector('.element__image').src = this._image;
      this._element.querySelector('.element__image').alt = this._title;
      this._element.querySelector('.element__title').textContent = this._title;   
      return this._element;
    }
    
    _setEventListeners() {
      this._element.querySelector('.element__like').addEventListener('click', () => {this._like()});
      this._element.querySelector('.element__trash').addEventListener('click', () => {this._sendToTrash()});
      this._element.querySelector('.element__image').addEventListener('click', () => {this._createImagePopup()});
    }
  
    _like() {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    };
  
    _sendToTrash() {
      this._element.remove();
    };
  
    _createImagePopup() {
      const popupImage = document.querySelector('.image-popup');
      openPopup(popupImage);
      popupImage.querySelector('.image-popup__image').src = this._image;
      popupImage.querySelector('.image-popup__image').alt = this._title;
      popupImage.querySelector('.image-popup__comment').textContent = this._title;
      popupImage.querySelector('.image-popup__close').addEventListener('click', () => {closePopup(popupImage)});
    };
  }
  
