
export class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}){
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);  
        this._avatar = document.querySelector(avatarSelector);
    };
  
 getUserInfo(){

    this.initialValues = {};
    this.initialValues.name = this._name.textContent;
    this.initialValues.about = this._about.textContent;
    this.initialValues.avatar = this._avatar.src;

    return this.initialValues;
   
 };
 
 setUserInfo(name, about, avatar){
     if(name !== undefined){
     this._name.textContent = name};
     if(about !== undefined){
     this._about.textContent = about};
     if(name !== undefined){
     this._avatar.src = avatar};   
     console.log(avatar);
     }

     
 };
