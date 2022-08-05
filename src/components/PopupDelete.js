
import { Popup } from "./Popup";

export class PopupDelete extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this.button = this._popup.querySelector('.popup__button_delete-card');

    };

    open(cardId, {submitHandler}){
        super.open();
        this.cardId = cardId;
        this._submit = submitHandler;


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

