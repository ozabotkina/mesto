const validationConfig = 
{
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

const showInputError = (formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

const hideInputError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
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
    submitButtonSelector.classList.add(validationConfig.inactiveButtonClass);
    submitButtonSelector.disabled = true;
  }
  else {
    submitButtonSelector.classList.remove(validationConfig.inactiveButtonClass);
    submitButtonSelector.disabled = false;
  }
};

const setEventListeners = (formSelector) => {
  const allInputs = Array.from(formSelector.querySelectorAll(validationConfig.inputSelector));
  const submitButtonSelector = formSelector.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(allInputs, submitButtonSelector);
 
  allInputs.forEach((inputSelector) => {
      inputSelector.addEventListener('input', function(){
        isValid(formSelector, inputSelector);
        toggleButtonState(allInputs, submitButtonSelector);
      });
   });
};



const enableValidation = (validationConfig) => {
  const allForms = Array.from(document.querySelectorAll(validationConfig.formSelector));

  allForms.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const submitButtonSelector = formSelector.querySelector(validationConfig.submitButtonSelector);

      submitButtonSelector.classList.add(validationConfig.inactiveButtonClass);
      submitButtonSelector.disabled = true;
  
    });
    setEventListeners(formSelector);
  });
};

enableValidation(validationConfig);


// document.addEventListener('submit', function(){enableValidation(validationConfig)});