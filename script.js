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