import './index.css';
import { initialCards } from '../utils/cards.js';
import {validationConfig, authorButton, newCardButton, createCard, jobInput, nameInput, userInfoSelectors} from '../utils/shared.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage';


const popupImage = new PopupWithImage('.image-popup');
popupImage.setEventListeners();

const cardsList = new Section ({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item.link, item.name, {handleCardClick: () => {popupImage.open(item.link, item.name)}});    
    cardsList.addItem(cardElement); 
  },},
  '.elements'
);

const popupNewCard = new PopupWithForm(
  '.popup_new-card', 
  {submitHandler: (formValues) => {
    cardsList.addItem(createCard(formValues.cardlink, formValues.cardname, {handleCardClick: () => {popupImage.open(formValues.cardlink, formValues.cardname)}}
    ));
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

cardsList.drawElement();



