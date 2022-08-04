
export const myId = 'ac88d69fff51275f50bd0add';

import {Card} from '../components/Сard.js';
import { Section } from '../components/Section.js';
import { UserCard } from '../components/UserCard.js';

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
export const authorAvatar = document.querySelector('.profile__avatar');
export const avatarEdit = document.querySelector('.profile__avatar-wrap');

function createCard ({link, name, likes, _id}, handleCardClick, handleTrashClick, ownerId, api) {
  if(ownerId === myId){ 
    const card = new UserCard ({link,name,likes, _id},'#user-card-element', handleCardClick, handleTrashClick);
    card.isLiked(myId);
    return card.generateCard(myId,api)
  ;
  }
  else {
    const card = new Card ({link,name,likes, _id},'#card-element',handleCardClick);
    card.isLiked(myId);
    return card.generateCard(myId,api);
  }
  
};

export function createCardList(data, popupImage, popupDelete, api){
const cardsList = new Section ({
  items: data,
  renderer: (item) => {
    const cardElement = 
    createCard(
      item, 
      {handleCardClick: () => {popupImage.open(item.link, item.name)}},  
      {handleTrashClick: () => {popupDelete.open(item._id)}},
      item.owner._id,
      api
      );    
    cardsList.addItem(cardElement); 
  },},
  '.elements'
  );
  cardsList.drawElement();
}