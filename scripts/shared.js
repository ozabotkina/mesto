


export const popupImage = document.querySelector('.image-popup');
export const imageInPopup = popupImage.querySelector('.image-popup__image');
export const commentInPopup = popupImage.querySelector('.image-popup__comment');
export const closeInPopup = popupImage.querySelector('.image-popup__close');


export const validationConfig = 
{
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

export const closeByEscPress = (evt) => {
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
  