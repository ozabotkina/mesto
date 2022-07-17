import './pages/index.css';
import {FormValidator} from './scripts/FormValidator.js';
import {validationConfig, authorButton, newCardButton, elementHolder, createCard, createImagePopup, authorAbout, authorName} from './scripts/shared.js';
import { Section } from './scripts/Section.js';
import { PopupWithForm } from './scripts/PopupWithForm.js';
import { UserInfo } from './scripts/UserInfo.js';

const cardsList = new Section ({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item.link, item.name, '#card-element');
    cardsList.addItem(cardElement); 
  },},
  elementHolder
);

const popupNewCard = new PopupWithForm(
  '.popup_new-card', 
  {submitHandler: () => {
    elementHolder.prepend(createCard(popupNewCard._formValues.cardlink, popupNewCard._formValues.cardname, '#card-element'));
    popupNewCard.close();
  }}
);

const userInfo = new UserInfo({name:authorName, about:authorAbout});
userInfo.getUserInfo();



const popupAuthor = new PopupWithForm(
  '.popup_author',
  {submitHandler: () => {
    popupAuthor._getInputValues();
    console.log(popupAuthor._formValues);
    userInfo.setUserInfo(popupAuthor);
    popupAuthor.close();
  }}
);


const formAuthorValidator = new FormValidator(validationConfig, popupAuthor._form);
formAuthorValidator.enableValidation();
const formNewCardValidator = new FormValidator(validationConfig, popupNewCard._form);
formNewCardValidator.enableValidation();

newCardButton.addEventListener ('click', function() {
  popupNewCard.open();
});

authorButton.addEventListener ('click', function() {
popupAuthor.open();
userInfo.getUserInfo();
const jobInput = popupAuthor._form.querySelector('.popup__about');
const nameInput = popupAuthor._form.querySelector('.popup__name');
nameInput.value = userInfo._initialValues.name;
jobInput.value = userInfo._initialValues.about;
});

cardsList.drawElement();
