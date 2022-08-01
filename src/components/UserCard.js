import { Card } from "./Сard";

export class UserCard extends Card {
    constructor({link, name, likes}, cardSelector, {handleCardClick}, {handleTrashClick}){
    super({link, name, likes}, cardSelector, {handleCardClick});
    this._handleTrashClick = handleTrashClick;
    }

_setEventListeners(){
    super._setEventListeners();
    this._element.querySelector('.element__trash').addEventListener('click', () => {this._handleTrashClick()});
}



}

