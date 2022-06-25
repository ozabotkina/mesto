import {Card} from './Сard.js';
import {FormValidator} from './FormValidator.js';


const authorButton = document.querySelector ('.edit-button');
const authorName = document.querySelector('.profile__name');
const authorAbout = document.querySelector('.profile__about');
const newCardButton = document.querySelector('.add-button');
const popupAuthor = document.querySelector('.popup_author')
export const formAuthor = popupAuthor.querySelector('.popup__container');
const jobInput = formAuthor.querySelector('.popup__about');
const nameInput = formAuthor.querySelector('.popup__name');
const authorCloseButton = popupAuthor.querySelector ('.popup__close-icon');
const popupNewCard = document.querySelector('.popup_new-card');
const newCardCloseButton = popupNewCard.querySelector ('.popup__close-icon');
export const formNewCard = popupNewCard.querySelector('.popup__container');
const cardNameInput = formNewCard.querySelector('.popup__name');
const cardLinkInput = formNewCard.querySelector('.popup__about');
const allPopups = Array.from(document.querySelectorAll('.popup'));


export const validationConfig = 
{
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

const closeByEscPress = (evt) => {
  const openedPopup = document.querySelector('.popup_opened');
  if(evt.key === 'Escape'){closePopup(openedPopup)}
};

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscPress);
};

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscPress);
};

function addInitialCards() {
  initialCards.forEach((initialCard) => {
  const card = new Card (initialCard.link, initialCard.name, '#card-element');
  document.querySelector('.elements').append(card.generateCard());
  })
};

addInitialCards();

const formAuthorValidator = new FormValidator(validationConfig, formAuthor);
formAuthorValidator.enableValidation();
const formNewCardValidator = new FormValidator(validationConfig, formNewCard);
formNewCardValidator.enableValidation();

function formSubmitHandlerNewCard (evt) {
  evt.preventDefault(); 
  const card = new Card (cardLinkInput.value, cardNameInput.value, '#card-element');
  document.querySelector('.elements').prepend(card.generateCard());
  cardLinkInput.value = '';
  cardNameInput.value = '';
  closePopup(popupNewCard);
}

function formSubmitHandlerAuthor (evt) {
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

authorCloseButton.addEventListener ('click', function() {closePopup(popupAuthor)});
newCardCloseButton.addEventListener ('click', function() {closePopup(popupNewCard)});

formAuthor.addEventListener('submit', formSubmitHandlerAuthor);
formNewCard.addEventListener('submit', formSubmitHandlerNewCard);

allPopups.forEach((popupSelector) => popupSelector.addEventListener ('click', function(evt){
if (evt.target === popupSelector) {closePopup(popupSelector)};
}))

