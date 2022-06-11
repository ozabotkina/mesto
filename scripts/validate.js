const formSelector = document.querySelector('.popup__form');

const showInputError = (formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};

const hideInputError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__error_visible');
  errorElement.textContent = ' ';
};

const isValid = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideInputError(formSelector, inputSelector);
  }
};

const hasInvalidInput = (allInputs) => {
  return allInputs.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
};
  
const toggleButtonState = (allInputs, submitButtonSelector) => {
  if (hasInvalidInput(allInputs)) {
    submitButtonSelector.classList.add('popup__button_disabled');
    submitButtonSelector.disabled = true;
  }
  else {
    submitButtonSelector.classList.remove('popup__button_disabled');
    submitButtonSelector.disabled = false;
  }
};

const setEventListeners = (formSelector) => {
  const allInputs = Array.from(formSelector.querySelectorAll('.popup__input'));
  const submitButtonSelector = formSelector.querySelector('.submit-button');
  toggleButtonState(allInputs, submitButtonSelector);
 
  allInputs.forEach((inputSelector) => {
      inputSelector.addEventListener('input', function(){
        isValid(formSelector, inputSelector);
        toggleButtonState(allInputs, submitButtonSelector);
      });
   });
};

const enableValidation = () => {
  const allForms = Array.from(document.querySelectorAll('.popup__form'));
  allForms.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formSelector);
  });
};


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 