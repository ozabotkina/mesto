
import { Popup } from "./Popup";

export class PopupDelete extends Popup {
    constructor(popupSelector, {submitHandler}){
        super(popupSelector);
        this.button = this._popup.querySelector('.popup__button_delete-card');
        this._submit = submitHandler;

    };

    open(cardId){
        super.open();
        this.cardId = cardId;

    };

    setEventListeners()
    {
       super.setEventListeners();
       this.button.addEventListener('click', (evt) => {
           evt.preventDefault();
           this._submit();
    });  
    };
}

