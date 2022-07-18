

import {Card} from './Сard.js';
import { PopupWithImage } from './PopupWithImage.js';
export const validationConfig = 
{
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

export const authorButton = document.querySelector ('.edit-button');
export const newCardButton = document.querySelector('.add-button');
export const elementHolder = document.querySelector('.elements');
export const authorName = document.querySelector('.profile__name');
export const authorAbout = document.querySelector('.profile__about');


export function createCard(link,name,element,handleCardClick) {
  const card = new Card(link,name,element,handleCardClick);
  return card.generateCard();
};

export function createImagePopup(image, title) {
  const popupImage = new PopupWithImage('.image-popup', image, title);

  popupImage.open()
  
  ;};



