
const popup = document.querySelector ('.popup');
const editButton = document.querySelector ('.edit-button');
const closeButton = document.querySelector ('.popup__close-icon');
const authorName = document.querySelector('.profile__name');
const nameInput = document.querySelector('.popup__name');
const authorAbout = document.querySelector('.profile__about');
const jobInput = document.querySelector('.popup__about');
const formElement = document.querySelector('.popup__container');



function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = authorName.textContent;
  jobInput.value = authorAbout.textContent;

}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  authorName.textContent = nameInput.value; 
  authorAbout.textContent = jobInput.value;
  closePopup();
}


editButton.addEventListener ('click', openPopup);
closeButton.addEventListener ('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


// НОВОЕ

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




