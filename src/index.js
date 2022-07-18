// import './pages/index.css';
import { Card } from './components/Сard.js'
import {validationConfig, authorButton, newCardButton, elementHolder, createCard, createImagePopup, authorAbout, authorName} from './components/shared.js';
import { Section } from './components/Section.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';


const cardsList = new Section ({
  items: initialCards,
  renderer: (item) => {
    // const card = new Card(item.link, item.name, '#card-element');
    // const cardElement = card.generateCard();

    const cardElement = createCard(item.link, item.name, '#card-element');
    console.log(item.name);
    
    cardsList.addItem(cardElement); 
  },},
  elementHolder
);






// const popupNewCard = new PopupWithForm(
//   '.popup_new-card', 
//   {submitHandler: () => {
//     elementHolder.prepend(createCard(popupNewCard._formValues.cardlink, popupNewCard._formValues.cardname, '#card-element'));
//     popupNewCard.close();
//   }}
// );

// const userInfo = new UserInfo({name:authorName, about:authorAbout});
// userInfo.getUserInfo();



// const popupAuthor = new PopupWithForm(
//   '.popup_author',
//   {submitHandler: () => {
//     popupAuthor._getInputValues();
//     console.log(popupAuthor._formValues);
//     userInfo.setUserInfo(popupAuthor);
//     popupAuthor.close();
//   }}
// );


// const formAuthorValidator = new FormValidator(validationConfig, popupAuthor._form);
// formAuthorValidator.enableValidation();
// const formNewCardValidator = new FormValidator(validationConfig, popupNewCard._form);
// formNewCardValidator.enableValidation();

// newCardButton.addEventListener ('click', function() {
//   popupNewCard.open();
// });

// authorButton.addEventListener ('click', function() {
// popupAuthor.open();
// userInfo.getUserInfo();
// const jobInput = popupAuthor._form.querySelector('.popup__about');
// const nameInput = popupAuthor._form.querySelector('.popup__name');
// nameInput.value = userInfo._initialValues.name;
// jobInput.value = userInfo._initialValues.about;
// });

cardsList.drawElement();



// import {Card} from './Ð¡ard.js'; 
// import {FormValidator} from './FormValidator.js'; 
// import {openPopup, closePopup, validationConfig, closeInPopup, popupImage} from './shared.js'; 

// const authorButton = document.querySelector ('.edit-button'); 
// const authorName = document.querySelector('.profile__name'); 
// const authorAbout = document.querySelector('.profile__about'); 
// const newCardButton = document.querySelector('.add-button'); 
// const popupAuthor = document.querySelector('.popup_author') 
// const formAuthor = popupAuthor.querySelector('.popup__container'); 
// const jobInput = formAuthor.querySelector('.popup__about'); 
// const nameInput = formAuthor.querySelector('.popup__name'); 
// const authorCloseButton = popupAuthor.querySelector ('.popup__close-icon'); 
// const popupNewCard = document.querySelector('.popup_new-card'); 
// const newCardCloseButton = popupNewCard.querySelector ('.popup__close-icon'); 
// const formNewCard = popupNewCard.querySelector('.popup__container'); 
// const cardNameInput = formNewCard.querySelector('.popup__name'); 
// const cardLinkInput = formNewCard.querySelector('.popup__about'); 
// const allPopups = Array.from(document.querySelectorAll('.popup')); 
// const elementHolder = document.querySelector('.elements'); 

 
// function createCard(link,name,element) { 
//   const card = new Card(link,name,element); 
//   return card.generateCard(); 
// }; 

// function addInitialCards() { 
//   initialCards.forEach((initialCard) => { 
//   elementHolder.append(createCard(initialCard.link, initialCard.name, '#card-element')); 
//   }) 
// }; 

 
// addInitialCards(); 

// const formAuthorValidator = new FormValidator(validationConfig, formAuthor); 
// formAuthorValidator.enableValidation(); 
// const formNewCardValidator = new FormValidator(validationConfig, formNewCard); 
// formNewCardValidator.enableValidation(); 

 

// function submitHandlerNewCard (evt) { 
//   evt.preventDefault();  
//   elementHolder.prepend(createCard(cardLinkInput.value, cardNameInput.value, '#card-element')); 

   
//   closePopup(popupNewCard); 
//   cardLinkInput.value = ''; 
//   cardNameInput.value = ''; 
// } 

 

// function submitHandlerAuthor (evt) { 
//   evt.preventDefault();  
//   authorName.textContent = nameInput.value;  
//   authorAbout.textContent = jobInput.value; 
//   closePopup(popupAuthor); 
// } 

 

// newCardButton.addEventListener ('click', function() { 
//   openPopup(popupNewCard); 
// }); 

 

// authorButton.addEventListener ('click', function() { 
//   openPopup(popupAuthor); 
//   nameInput.value = authorName.textContent; 
//   jobInput.value = authorAbout.textContent; 
// }); 

 

// closeInPopup.addEventListener('click', () => {closePopup(popupImage)}); 


// authorCloseButton.addEventListener ('click', function() {closePopup(popupAuthor)}); 
// newCardCloseButton.addEventListener ('click', function() {closePopup(popupNewCard)}); 
// formAuthor.addEventListener('submit', submitHandlerAuthor); 
// formNewCard.addEventListener('submit', submitHandlerNewCard); 

 

// allPopups.forEach((popupSelector) => popupSelector.addEventListener ('click', function(evt){ 
// if (evt.target === popupSelector) {closePopup(popupSelector)}; 
// })) 

 

 