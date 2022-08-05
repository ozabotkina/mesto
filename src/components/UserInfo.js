
export class UserInfo {
    constructor({nameSelector, aboutSelector}){
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);  
    };
  
 getUserInfo(){

    this.initialValues = {};
    this.initialValues.name = this._name.textContent;
    this.initialValues.about = this._about.textContent;
    return this.initialValues;
   
 };
 
 setUserInfo(name, about){
     if(name !== undefined){
     this._name.textContent = name};
     if(about !== undefined){
     this._about.textContent = about};
 };
}