import {Card} from './Сard.js';
import {FormValidator} from './FormValidator.js';
import {openPopup, closePopup, validationConfig, closeInPopup, popupImage} from './shared.js';

const authorButton = document.querySelector ('.edit-button');
const authorName = document.querySelector('.profile__name');
const authorAbout = document.querySelector('.profile__about');
const newCardButton = document.querySelector('.add-button');
const popupAuthor = document.querySelector('.popup_author')
const formAuthor = popupAuthor.querySelector('.popup__container');
const jobInput = formAuthor.querySelector('.popup__about');
const nameInput = formAuthor.querySelector('.popup__name');
const authorCloseButton = popupAuthor.querySelector ('.popup__close-icon');
const popupNewCard = document.querySelector('.popup_new-card');
const newCardCloseButton = popupNewCard.querySelector ('.popup__close-icon');
const formNewCard = popupNewCard.querySelector('.popup__container');
const cardNameInput = formNewCard.querySelector('.popup__name');
const cardLinkInput = formNewCard.querySelector('.popup__about');
const allPopups = Array.from(document.querySelectorAll('.popup'));
const elementHolder = document.querySelector('.elements');

function createCard(link,name,element) {
  const card = new Card(link,name,element);
  return card.generateCard();
};



function addInitialCards() {
  initialCards.forEach((initialCard) => {
  elementHolder.append(createCard(initialCard.link, initialCard.name, '#card-element'));
  })
};

addInitialCards();


const formAuthorValidator = new FormValidator(validationConfig, formAuthor);
formAuthorValidator.enableValidation();
const formNewCardValidator = new FormValidator(validationConfig, formNewCard);
formNewCardValidator.enableValidation();

function submitHandlerNewCard (evt) {
  evt.preventDefault(); 
  elementHolder.prepend(createCard(cardLinkInput.value, cardNameInput.value, '#card-element'));
  
  closePopup(popupNewCard);
  cardLinkInput.value = '';
  cardNameInput.value = '';

}

function submitHandlerAuthor (evt) {
  evt.preventDefault(); 
  authorName.textContent = nameInput.value; 
  authorAbout.textContent = jobInput.value;
  closePopup(popupAuthor);
}

newCardButton.addEventListener ('click', function() {
  openPopup(popupNewCard);
});

authorButton.addEventListener ('click', function() {
  openPopup(popupAuthor);
  nameInput.value = authorName.textContent;
  jobInput.value = authorAbout.textContent;
});

closeInPopup.addEventListener('click', () => {closePopup(popupImage)});


authorCloseButton.addEventListener ('click', function() {closePopup(popupAuthor)});
newCardCloseButton.addEventListener ('click', function() {closePopup(popupNewCard)});

formAuthor.addEventListener('submit', submitHandlerAuthor);
formNewCard.addEventListener('submit', submitHandlerNewCard);

allPopups.forEach((popupSelector) => popupSelector.addEventListener ('click', function(evt){
if (evt.target === popupSelector) {closePopup(popupSelector)};
}))

