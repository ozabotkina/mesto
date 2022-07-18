
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

  _isValid(inputSelector){
    
    if (!inputSelector.validity.valid) {
    this._showInputError(inputSelector, inputSelector.validationMessage);
    } else {
    this._hideInputError(inputSelector);
    }
  };

  _hasInvalidInput(){
    return this._allInputs.some((inputSelector) => {
    return !inputSelector.validity.valid;
    });
  };

 _toggleButtonState(){
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
    this._toggleButtonState(); 
        
    this._allInputs.forEach((inputSelector) => {
       inputSelector.addEventListener('input', () => {
       this._isValid(inputSelector);
       this._toggleButtonState();
     });
     });
   };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    });
    this._setEventListeners();
  };
}



// export class FormValidator { 

//   constructor(validationConfig, formElement){ 

//   this._formElement = formElement; 

//   this._formSelector = validationConfig.formSelector; 

//   this._inputSelector = validationConfig.inputSelector; 

//   this._inputErrorClass = validationConfig.inputErrorClass; 

//   this._errorClass = validationConfig.errorClass; 

//   this._submitButtonSelector = validationConfig.submitButtonSelector; 

//   this._inactiveButtonClass = validationConfig.inactiveButtonClass; 

//   this._allInputs = Array.from(this._formElement.querySelectorAll(this._inputSelector)); 

//   this._submitButton = this._formElement.querySelector(this._submitButtonSelector); 

 

//   } 

 

//   _showInputError(inputSelector, errorMessage){ 

//     const errorElement = this._formElement.querySelector(`.${inputSelector.id}-error`); 

//     inputSelector.classList.add(this._inputErrorClass); 

//     errorElement.textContent = errorMessage; 

//     errorElement.classList.add(this._errorClass); 

//   }; 

 

//   _hideInputError(inputSelector){ 

//     const errorElement = this._formElement.querySelector(`.${inputSelector.id}-error`); 

//     inputSelector.classList.remove(this._inputErrorClass); 

//     errorElement.classList.remove(this._errorClass); 

//     errorElement.textContent = ' '; 

//   }; 

 

//   _isValid(inputSelector){ 

     

//     if (!inputSelector.validity.valid) { 

//     this._showInputError(inputSelector, inputSelector.validationMessage); 

//     } else { 

//     this._hideInputError(inputSelector); 

//     } 

//   }; 

 

//   _hasInvalidInput(){ 

//     return this._allInputs.some((inputSelector) => { 

//     return !inputSelector.validity.valid; 

//     }); 

//   }; 

 

//  _toggleButtonState(){ 

//     if (this._hasInvalidInput()) { 

//       this._submitButton.classList.add(this._inactiveButtonClass); 

//       this._submitButton.disabled = true; 

//     } 

//     else { 

//       this._submitButton.classList.remove(this._inactiveButtonClass); 

//       this._submitButton.disabled = false; 

//      } 

//     }; 

 

//  _setEventListeners() { 

//     this._toggleButtonState();  

         

//     this._allInputs.forEach((inputSelector) => { 

//        inputSelector.addEventListener('input', () => { 

//        this._isValid(inputSelector); 

//        this._toggleButtonState(); 

//      }); 

//      }); 

//    }; 

 

//   enableValidation() { 

//     this._formElement.addEventListener('submit', (evt) => { 

//       evt.preventDefault(); 

//       this._submitButton.classList.add(this._inactiveButtonClass); 

//       this._submitButton.disabled = true; 

//     }); 

//     this._setEventListeners(); 

//   }; 

// } 

 

 