let popup = document.querySelector ('.popup');
let editButton = document.querySelector ('.edit-button');

function openPopup() {
    popup.classList.add('popup_opened');
}
editButton.addEventListener ('click', openPopup);



let closeButton = document.querySelector ('.popup__close-icon');

function closePopup() {
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener ('click', closePopup);


let authorName = document.querySelector('.profile__name');
let nameInput = document.querySelector('.popup__name');
nameInput.value = authorName.textContent;

let authorAbout = document.querySelector('.profile__about');
let jobInput = document.querySelector('.popup__about');
jobInput.value = authorAbout.textContent;



// Находим форму в DOM
let formElement = document.querySelector('.popup__container');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
   authorName.textContent = nameInput.value; 
   authorAbout.textContent = jobInput.value;
   closePopup();
   }

   formElement.addEventListener('submit', formSubmitHandler);