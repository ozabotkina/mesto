import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
constructor(popupSelector, {submitHandler}){
        super(popupSelector);
        this._submit = submitHandler;
        this.form = this._popup.querySelector('.popup__container');
        this._inputList = this.form.querySelectorAll('.popup__input');
        this.button = this.form.querySelector('.popup__button');
        this.normalButtonText = this.form.querySelector('.popup__button').textContent;
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
        this.renderLoading(true);
        evt.preventDefault();
        this._submit(this._getInputValues());
       }
       ); 
      } 
    

    renderLoading(isLoading){
      if(isLoading){
        this.button.textContent = "Сохранение...";
      }
      else{
        this.button.textContent = this.normalButtonText;
      }
    }

    close(){
        super.close();
        this.form.reset()
}
}
