import './index.css';
import { initialCards } from '../utils/cards.js';
import {validationConfig, authorButton, newCardButton, createCard, jobInput, nameInput, userInfoSelectors, fetchInitialData, fetchInitialCards, changeAuthorInfo, addNewCard} from '../utils/shared.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage';
import { Popup } from '../components/Popup';

const myId = '24287173-ba31-4a1d-8c0b-4b3b6920eaaf';

const popupImage = new PopupWithImage('.image-popup');
popupImage.setEventListeners();

const popupDelete = new Popup('.popup_delete-card');
popupDelete.setEventListeners();


fetchInitialData();
fetchInitialCards(popupImage, popupDelete);


// const cardsList = new Section ({
//   items: ,
//   renderer: (item) => {
//     const cardElement = createCard(item.link, item.name, {handleCardClick: () => {popupImage.open(item.link, item.name)}});    
//     cardsList.addItem(cardElement); 
//   },},
//   '.elements'
// );

const popupNewCard = new PopupWithForm(
  '.popup_new-card', 
  {submitHandler: (formValues) => {
    // cardsList.addItem(createCard(formValues.cardlink, formValues.cardname, {handleCardClick: () => {popupImage.open(formValues.cardlink, formValues.cardname)}}
    // ));
    addNewCard(formValues.cardlink, formValues.cardname);
    popupNewCard.close();

    // disableAtSubmit(popupNewCard);

  }}
);

popupNewCard.setEventListeners();

const userInfo = new UserInfo(userInfoSelectors);
userInfo.getUserInfo();

const popupAuthor = new PopupWithForm(
  '.popup_author',
  {submitHandler: (formValues) => {
    const name = formValues.popup__name;
    const about = formValues.popup__about;
    userInfo.setUserInfo(name,about);
    changeAuthorInfo(name,about);
    popupAuthor.close();
    // disableAtSubmit(popupAuthor);
  
  }}
);

popupAuthor.setEventListeners();

const formAuthorValidator = new FormValidator(validationConfig, popupAuthor.form);
formAuthorValidator.enableValidation();
const formNewCardValidator = new FormValidator(validationConfig, popupNewCard.form);
formNewCardValidator.enableValidation();

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

// cardsList.drawElement();


