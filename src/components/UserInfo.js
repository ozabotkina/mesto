
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
     this._name.textContent = name;
     this._about.textContent = about;
 };

}