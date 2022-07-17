
export class Popup {
    constructor({popupSelector}){
      this._popupSelector = popupSelector;
      this._popup = document.querySelector(this._popupSelector);
    };

    open(){
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
    };

    close(){
     this._popup.classList.remove('popup_opened');
     document.removeEventListener('keydown',(evt) => {this._handleEscClose(evt)});
    };

    _handleEscClose(evt){
      if(evt.key === 'Escape'){this.close()}
    };

    setEventListeners(){
      this._closeButton = this._popup.querySelector ('.popup__close-icon');
      this._closeButton.addEventListener('click', () => {this.close()});
      this._popup.addEventListener('click', (evt) => {
        if(evt.target === this._popup){
          this.close()};
        })
      document.addEventListener('keydown', (evt) => {this._handleEscClose(evt)});
    }; 
};
