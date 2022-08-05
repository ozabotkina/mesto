import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
constructor(popupSelector, {submitHandler}){
        super(popupSelector);
        this._submit = submitHandler;
        this.form = this._popup.querySelector('.popup__container');
        this._inputList = this.form.querySelectorAll('.popup__input');
        this.button = this.form.querySelector('.popup__button');
  };

    _getInputValues(){
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
        return this._formValues;
    };

    setEventListeners()
    {
       super.setEventListeners();
       this.form.addEventListener
       ('submit', (evt) => {
        evt.preventDefault();
        this.button.textContent = "Сохранение...";
        this._submit(this._getInputValues());
       }
       );  
    };

    close(){
        super.close();
        this.form.reset();
    }
}