
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
constructor(popupSelector, image, title ){
    super({popupSelector});
    this._image = image;
    this._title = title;
    this._imageInPopup = this._popup.querySelector('.image-popup__image');
    this._commentInPopup = this._popup.querySelector('.image-popup__comment');

};

open(){
    super.open();
    this._imageInPopup.src = this._image;
    this._imageInPopup.alt = this._title;
    this._commentInPopup.textContent = this._title;
    this._closeButton.addEventListener('click', () => {this.close});
};
}
