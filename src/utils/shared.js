

import {Card} from '../components/Сard.js';

export const validationConfig = 
{
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

export const userInfoSelectors =
{
 nameSelector: '.profile__name',
 aboutSelector: '.profile__about'
}

export const authorButton = document.querySelector ('.edit-button');
export const newCardButton = document.querySelector('.add-button');
export const authorName = document.querySelector('.profile__name');
export const authorAbout = document.querySelector('.profile__about');
export const jobInput = document.querySelector('.popup__about');
export const nameInput = document.querySelector('.popup__name');




export function createCard(link,name,handleCardClick) {
  const card = new Card(link,name,'#card-element',handleCardClick);
  return card.generateCard();
};

export function disableAtSubmit(popupform) {
  popupform.button.classList.add('popup__button_disabled');
  popupform.button.disabled = true;};
