
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
constructor(popupSelector ){
    super(popupSelector);
    // this._image = image;
    // this._title = title;
    this._imageInPopup = this._popup.querySelector('.image-popup__image');
    this._commentInPopup = this._popup.querySelector('.image-popup__comment');

};

open(image, title){
    super.open();
    this._imageInPopup.src = image;
    this._imageInPopup.alt = title;
    this._commentInPopup.textContent = title;
};
}
