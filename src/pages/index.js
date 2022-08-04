import './index.css';
import {myId, validationConfig, authorButton, newCardButton, jobInput, nameInput, userInfoSelectors, authorName, authorAbout, authorAvatar, createCardList, avatarEdit} from '../utils/shared.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupDelete } from '../components/PopupDelete';
import { API } from '../components/API';



export const api = new API({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '24287173-ba31-4a1d-8c0b-4b3b6920eaaf',
    'Content-Type': 'application/json'
  }
});

const popupImage = new PopupWithImage('.image-popup');
popupImage.setEventListeners();

const popupDelete = new PopupDelete('.popup_delete-card', 
{submitHandler:() => {
  api.deleteCard(popupDelete.cardId);
  popupDelete.close();

  }});

popupDelete.setEventListeners();

api.fetchInitialData(authorName,authorAbout,authorAvatar);
api.fetchInitialCards({createCardList: (data) => {createCardList(data, popupImage, popupDelete, api)} });


const popupNewCard = new PopupWithForm(
  '.popup_new-card', 
  {submitHandler: (formValues) => {
    api.addNewCard(formValues.cardlink, formValues.cardname,myId,api );
    popupNewCard.close();
  }}
);

popupNewCard.setEventListeners();

const userInfo = new UserInfo(userInfoSelectors);
userInfo.getUserInfo();

export const popupAuthor = new PopupWithForm(
  '.popup_author',
  {submitHandler: (formValues) => {
    const name = formValues.popup__name;
    const about = formValues.popup__about;
    userInfo.setUserInfo(name,about);
    api.changeAuthorInfo(name,about);
    popupAuthor.close();
  
  }}
);
popupAuthor.setEventListeners();

const popupAvatar = new PopupWithForm(
  '.popup_avatar', 
  {submitHandler: (formValues) => {
    api.changeAvatar(formValues.avatarlink)
  }}
)
popupAvatar.setEventListeners();

const formAuthorValidator = new FormValidator(validationConfig, popupAuthor.form);
formAuthorValidator.enableValidation();
const formNewCardValidator = new FormValidator(validationConfig, popupNewCard.form);
formNewCardValidator.enableValidation();
const formAvatarValidator = new FormValidator(validationConfig, popupAvatar.form);
formAvatarValidator.enableValidation();

newCardButton.addEventListener ('click', function() {
  formNewCardValidator.toggleButtonState();
  popupNewCard.open();
});

authorButton.addEventListener ('click', function() {
  formAuthorValidator.toggleButtonState();
  const initialValues = userInfo.getUserInfo();
  nameInput.value = initialValues.name;
  jobInput.value = initialValues.about;  
  popupAuthor.open();
});

avatarEdit.addEventListener('mouseover', function(){
  authorAvatar.style.zIndex = "-1"
  authorAvatar.style.opacity = "0.2"
} )

avatarEdit.addEventListener('mouseout', function(){
  authorAvatar.style.zIndex = "1"
  authorAvatar.style.opacity = "1"
} )

avatarEdit.addEventListener('click', function(){
  popupAvatar.open();
} )
