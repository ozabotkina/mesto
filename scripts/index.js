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







