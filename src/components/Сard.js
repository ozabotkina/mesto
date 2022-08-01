
export class Card {
    constructor({link, name, likes}, cardSelector, {handleCardClick}){
      this._image = link;
      this._title = name;
      this._likes = likes;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
    };
  
    _getTemplate() {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._imageElement.src = this._image;
      this._imageElement.alt = this._title;
      this._element.querySelector('.element__title').textContent = this._title;  
      this._element.querySelector('.element__like-number').textContent = this._likes.length;
      return this._element;
     
    }
    
    _setEventListeners() {
      this._imageElement = this._element.querySelector('.element__image');
      this._likeElement = this._element.querySelector('.element__like');
      this._likeElement.addEventListener('click', () => {this._like()});
      // this._element.querySelector('.element__trash').addEventListener('click', () => {this._handleTrashClick()});
      this._imageElement.addEventListener('click', () => {
      this._handleCardClick();
      
      });
    }
  
    _like() {
      this._likeElement.classList.toggle('element__like_active');
    };
  
    _sendToTrash() {
      // this._element.remove();
      // this._element = null;
    // this._popupDelete.open;
    }

  // _toggleTrashBin(myId) {
  //   this._trashBin = this._element.querySelector('.element__trash');
  //   if(this.owner._id === myId){
  //     this._trashBin.classList.add('.element__trash_active');
  //     this._trashBin.addEventListener('click', () => {this._handleTrashClick()});
  //   }
  //   else {
  //     console.log(this.owner._id);
  //     console.log(this.owner.name);

  //   }

  
    }
  



