
const myId = 'ac88d69fff51275f50bd0add';

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

function createCard ({link, name, likes}, handleCardClick, handleTrashClick, ownerId) {
  if(ownerId === myId){ 
    const card = new UserCard ({link,name,likes},'#user-card-element',handleCardClick,handleTrashClick);
    return card.generateCard();
  }
  else {
    const card = new Card ({link,name,likes},'#card-element',handleCardClick);
    return card.generateCard();
  }
}
export function fetchInitialData(){
  fetch('https://nomoreparties.co/v1/cohort-46/users/me', {
    method:'GET',
    headers: {
      authorization: '24287173-ba31-4a1d-8c0b-4b3b6920eaaf'
      }
    })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      authorName.textContent = result.name;
      authorAbout.textContent = result.about;
      authorAvatar.src = result.avatar;
      })
    .catch((err) => {
      console.log(err);
      }); 
    };

  export const fetchInitialCards = (popupImage, popupDelete) => {
    return fetch ('https://mesto.nomoreparties.co/v1/cohort-46/cards', {
      method:'GET',
      headers: {
        authorization: '24287173-ba31-4a1d-8c0b-4b3b6920eaaf'
        }
     })
     .then((res) => {
      return res.json()})
     .then((data) => {
      console.log(data);
      const cardsList = new Section ({
        items: data,
        renderer: (item) => {
          const cardElement = 
          createCard(
            item, 
            {handleCardClick: () => {popupImage.open(item.link, item.name)}},  
            {handleTrashClick: () => {popupDelete.open()}},
            item.owner._id);    
          cardsList.addItem(cardElement); 
        },},
        '.elements'
        );
        cardsList.drawElement();
     })
     .catch((err) => {
      console.log(err); 
    }); 

    };
  
    export const changeAuthorInfo = (name,about) => {
      return fetch('https://nomoreparties.co/v1/cohort-46/users/me', {
        method: 'PATCH',
        headers: {
          authorization: '24287173-ba31-4a1d-8c0b-4b3b6920eaaf',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name: name,
        about: about
        })
      });
    };

    export const addNewCard = (link, name) => {
      return fetch ('https://mesto.nomoreparties.co/v1/cohort-46/cards', {
        method:'POST',
        headers: {
        authorization: '24287173-ba31-4a1d-8c0b-4b3b6920eaaf',
        'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          name: name,
          link: link
        })
      })
        .then(res => {
          if (res.ok) {
            console.log(res);
          }
        })
        .catch((err)=>{console.log(err)})
     };
    