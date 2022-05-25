
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

const popup = document.querySelector ('.popup');
const editButton = document.querySelector ('.edit-button');
const authorName = document.querySelector('.profile__name');
const authorAbout = document.querySelector('.profile__about');
const addButton = document.querySelector('.add-button');



const popupAuthor = document.querySelector('.popup_author')
const formAuthor = popupAuthor.querySelector('.popup__container');
const jobInput = formAuthor.querySelector('.popup__about');
const nameInput = formAuthor.querySelector('.popup__name');
const closeButtonAuthor = popupAuthor.querySelector ('.popup__close-icon');


const popupNewCard = document.querySelector('.popup_new-card');
const closeButtonNewCard = popupNewCard.querySelector ('.popup__close-icon');
const formNewCard = popupNewCard.querySelector('.popup__container');
const cardNameInput = formNewCard.querySelector('.popup__name');
const carLinkInput = formNewCard.querySelector('.popup__about');
const containerElements = document.querySelector('.elements');

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

function addCard(link, name) 
{
  const cardTemplate = document.querySelector('#card-element').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title')
  const cardLike = cardElement.querySelector('.element__like');
  const cardTrash = cardElement.querySelector('.element__trash');
  cardImage.src = link;
  cardTitle.textContent = name;

  cardLike.addEventListener ('click', function(evt)
  {
    evt.target.classList.toggle('element__like_active')
  });  

  cardTrash.addEventListener('click', function(evt) {
  evt.target.parentNode.remove()
  });

  return cardElement;
  };

function addInitialCards() {
for (let i = 0; i < 6; i++){
  containerElements.append(addCard(initialCards[i].link, initialCards[i].name));
}
};
addInitialCards();

function formSubmitHandlerAuthor (evt) {
  evt.preventDefault(); 
  authorName.textContent = nameInput.value; 
  authorAbout.textContent = jobInput.value;
  closePopup(popupAuthor);
}

function formSubmitHandlerNewCard (evt) {
  evt.preventDefault(); 
  containerElements.prepend(addCard(carLinkInput.value, cardNameInput.value));
  containerElements.lastChild.remove();
  closePopup(popupNewCard);
  carLinkInput.value = '';
  cardNameInput.value = '';
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
formAuthor.addEventListener('submit', formSubmitHandlerAuthor);
formNewCard.addEventListener('submit', formSubmitHandlerNewCard);







