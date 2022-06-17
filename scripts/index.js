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
const containerElements = document.querySelector('.elements');
const bodyPage = document.querySelector('.page');
const popupImage = document.querySelector('.image-popup')
const imageCloseButton = popupImage.querySelector('.image-popup__close')
const popupSelector = document.querySelector('.popup');
const allPopups = Array.from(document.querySelectorAll('.popup'));
const imagePopupComment = popupImage.querySelector('.image-popup__comment');
const imagePopupImage = popupImage.querySelector('.image-popup__image');

const closeByEscPress = (evt) => {
  const openedPopup = document.querySelector('.popup_opened');
  if(evt.key === 'Escape'){closePopup(openedPopup)}
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscPress);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscPress);
};

function addCard(link, name) 
  {
    const cardTemplate = document.querySelector('#card-element').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');
    const cardTitle = cardElement.querySelector('.element__title')
    const cardLike = cardElement.querySelector('.element__like');
    const cardTrash = cardElement.querySelector('.element__trash');
    cardImage.src = link;
    cardImage.alt = `${name}`;
    cardTitle.textContent = name;
    cardLike.addEventListener ('click', function(evt)
      {
      evt.target.classList.toggle('element__like_active')
      });  

    cardTrash.addEventListener('click', function(evt) 
      {
      evt.target.parentNode.remove()
      });
    cardImage.addEventListener('click', function()
      {
      createImagePopup(cardImage.src, cardTitle.textContent);
      });
    return cardElement;
  };

function addInitialCards()
{
initialCards.forEach((initialCard) => {containerElements.append(addCard(initialCard.link, initialCard.name))})
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
  containerElements.prepend(addCard(cardLinkInput.value, cardNameInput.value));
  closePopup(popupNewCard);
  cardLinkInput.value = '';
  cardNameInput.value = '';
}
  
function createImagePopup(link, name) {
openPopup(popupImage);
imagePopupImage.src = link;
imagePopupImage.alt = `${name}`;
imagePopupComment.textContent = name;

};


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
imageCloseButton.addEventListener ('click', function() {closePopup(popupImage)});

formAuthor.addEventListener('submit', formSubmitHandlerAuthor);
formNewCard.addEventListener('submit', formSubmitHandlerNewCard);

allPopups.forEach((popupSelector) => popupSelector.addEventListener ('click', function(evt){
if (evt.target === popupSelector) {closePopup(popupSelector)};
}))
