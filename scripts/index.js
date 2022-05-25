
const popup = document.querySelector ('.popup');
const editButton = document.querySelector ('.edit-button');
const closeButtonAuthor = document.querySelector ('.popup__close-icon_author');
const authorName = document.querySelector('.profile__name');
const nameInput = document.querySelector('.popup__name');
const authorAbout = document.querySelector('.profile__about');
const jobInput = document.querySelector('.popup__about');
const formElement = document.querySelector('.popup__container');
const popupAuthor = document.querySelector('.popup_author');
const popupNewCard = document.querySelector('.popup_new-card');
const addButton = document.querySelector('.add-button');
const closeButtonNewCard = document.querySelector ('.popup__close-icon_new-card');

function openPopup(name) {
  name.classList.add('popup_opened');
}

function closePopup(name) {
  name.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  authorName.textContent = nameInput.value; 
  authorAbout.textContent = jobInput.value;
  closePopup(popupAuthor);
}

addButton.addEventListener ('click', function() {
  openPopup(popupNewCard);
});


editButton.addEventListener ('click', function() {
  openPopup(popupAuthor)
  nameInput.value = authorName.textContent;
  jobInput.value = authorAbout.textContent;
});

closeButtonAuthor.addEventListener ('click', function() {closePopup(popupAuthor)});
closeButtonNewCard.addEventListener ('click', function() {closePopup(popupNewCard)});

formElement.addEventListener('submit', formSubmitHandler);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 


function addCard(link, name) {
const cardTemplate = document.querySelector('#card-element').content;
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
const containerElements = document.querySelector('.elements');
const cardImage = cardElement.querySelector('.element__image');
cardImage.src = link;
const cardTitle = cardElement.querySelector('.element__title')
cardTitle.textContent = name;
containerElements.append(cardElement);
};

function addInitialCards() {
for (let i = 0; i < 6; i++) {
addCard(initialCards[i].link, initialCards[i].name);
}
};

addInitialCards();




