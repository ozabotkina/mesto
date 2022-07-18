import { authorName, authorAbout } from "./shared.js";

export class UserInfo {
    constructor({name, about}){
        this._name = name;
        this._about = about;  
    };
  
 getUserInfo(){
    this._initialValues = {};
    this._initialValues.name = this._name.textContent;
    this._initialValues.about = this._about.textContent;
    return this._initialValues;
   
 };
 
 setUserInfo(formSelector){
     this._name.textContent = formSelector._formValues.popup__name;
     this._about.textContent = formSelector._formValues.popup__about;
 };

}