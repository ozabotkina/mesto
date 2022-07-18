
import { PopupWithImage } from "./PopupWithImage.js";
import { createImagePopup } from "./shared.js";

export class Card {
    constructor(link, name, cardSelector){
      this._image = link;
      this._title = name;
      this._cardSelector = cardSelector;
      // this._handleCardClick = handleCardClick;
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
      this._element.querySelector('.element__like').addEventListener('click', () => {this._like()});
      this._element.querySelector('.element__trash').addEventListener('click', () => {this._sendToTrash()});
      this._imageSelector.addEventListener('click', () => {
      // createImagePopup(this._image, this._title);
      this._handleCardClick();
      });
    }
  
    _like() {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    };
  
    _sendToTrash() {
      this._element.remove();
      this._element = null;
    };
  
     _handleCardClick() {
      const popupImage = new PopupWithImage('.image-popup', this._image, this._title);
      popupImage.open();

    };
  
}



// import { popupImage, imageInPopup, commentInPopup, closeInPopup, closePopup, openPopup } from "./shared.js"; 

// export class Card { 
//     constructor(link, name, cardSelector){ 
//       this._image = link; 
//       this._title = name; 
//       this._cardSelector = cardSelector; 
//     }; 

   

//     _getTemplate() { 
//       const cardElement = document 
//       .querySelector(this._cardSelector) 
//       .content 
//       .querySelector('.element') 
//       .cloneNode(true); 

//       return cardElement; 
//     } 

   

//     generateCard() { 

//       this._element = this._getTemplate(); 
//       this._setEventListeners(); 
//       this._imageSelector.src = this._image; 
//       this._imageSelector.alt = this._title; 
//       this._element.querySelector('.element__title').textContent = this._title;    
//       return this._element; 
//     } 

     

//     _setEventListeners() { 

//       this._imageSelector = this._element.querySelector('.element__image'); 
//       this._element.querySelector('.element__like').addEventListener('click', () => {this._like()}); 
//       this._element.querySelector('.element__trash').addEventListener('click', () => {this._sendToTrash()}); 
//       this._imageSelector.addEventListener('click', () => {this._createImagePopup()}); 

//     } 

   

//     _like() { 
//       this._element.querySelector('.element__like').classList.toggle('element__like_active'); 
//     }; 

   

//     _sendToTrash() { 

//       this._element.remove(); 
//       this._element = null; 

//     }; 

   

//     _createImagePopup() { 

//       imageInPopup.src = this._image; 
//       imageInPopup.alt = this._title; 
//       commentInPopup.textContent = this._title; 
//       openPopup(popupImage); 

//     }; 
//   } 

   

 