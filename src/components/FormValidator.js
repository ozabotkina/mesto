
export class FormValidator {
  constructor(validationConfig, formElement){
  this._formElement = formElement;
  this._formSelector = validationConfig.formSelector;
  this._inputSelector = validationConfig.inputSelector;
  this._inputErrorClass = validationConfig.inputErrorClass;
  this._errorClass = validationConfig.errorClass;
  this._submitButtonSelector = validationConfig.submitButtonSelector;
  this._inactiveButtonClass = validationConfig.inactiveButtonClass;
  this._allInputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  this._submitButton = this._formElement.querySelector(this._submitButtonSelector);

  }

  _showInputError(inputSelector, errorMessage){
    const errorElement = this._formElement.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputSelector){
    const errorElement = this._formElement.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = ' ';
  };

hideAllErrors(){
  this._allInputs.forEach((input) => {this._hideInputError(input)})
}

  _isValid(inputSelector){
    
    if (inputSelector.validity.valid) {
      this._hideInputError(inputSelector); 
    }
    else {
      this._showInputError(inputSelector, inputSelector.validationMessage);
    }
  };

  _hasInvalidInput(){
    return this._allInputs.some((inputSelector) => {
    return !inputSelector.validity.valid;
    });
  };

 toggleButtonState(){
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    }
    else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
     }
    };

 _setEventListeners() {
    this.toggleButtonState(); 
        
    this._allInputs.forEach((inputSelector) => {
       inputSelector.addEventListener('input', () => {
       this._isValid(inputSelector);
       this.toggleButtonState();
     });
     });
   };

  enableValidation() {
    this._setEventListeners();
  };
}



