
import { validationConfig } from "./index.js";

export class FormValidator {
  constructor(validationConfig, formElement){
  this._formElement = formElement;
  this._formSelector = validationConfig.formSelector;
  this._inputSelector = validationConfig.inputSelector;
  this._inputErrorClass = validationConfig.inputErrorClass;
  this._errorClass = validationConfig.errorClass;
  this._submitButtonSelector = validationConfig.submitButtonSelector;
  this._inactiveButtonClass = validationConfig.inactiveButtonClass;

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

  _isValid(inputSelector){
    
    if (!inputSelector.validity.valid) {
    this._showInputError(inputSelector, inputSelector.validationMessage);
    } else {
    this._hideInputError(inputSelector);
    }
  };

  _hasInvalidInput(){
    const allInputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    return allInputs.some((inputSelector) => {
    return !inputSelector.validity.valid;
    });
  };

 _toggleButtonState(){
    const submitButton = this._formElement.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput()) {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.disabled = true;
    }
    else {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.disabled = false;
     }
    };

 _setEventListeners() {
    const allInputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._toggleButtonState(); 
        
    allInputs.forEach((inputSelector) => {
       inputSelector.addEventListener('input', () => {
       this._isValid(inputSelector);
       this._toggleButtonState();
     });
     });
   };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const submitButton = this._formElement.querySelector(this._submitButtonSelector);
      submitButton.classList.add(validationConfig.inactiveButtonClass);
      submitButton.disabled = true;
    });
    this._setEventListeners();
  };
}

