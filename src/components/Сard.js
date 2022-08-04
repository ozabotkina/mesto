
export class Card {
    constructor({link, name, likes, _id}, cardSelector, {handleCardClick}){
      this._image = link;
      this._title = name;
      this._likes = likes;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._card = _id;
    };
  
    _getTemplate() {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard(myId, api) {
      this._element = this._getTemplate();
      this._setEventListeners(myId, api);
      this._imageElement.src = this._image;
      this._imageElement.alt = this._title;
      this._element.querySelector('.element__title').textContent = this._title;  
      this._likesNum = this._element.querySelector('.element__like-number')
      this._likesNum.textContent = this._likes.length;
      if(this.isLiked(myId)){this._likeElement.classList.toggle('element__like_active')}
      return this._element;
     
    }
    
    _setEventListeners(myId, api) {
      this._imageElement = this._element.querySelector('.element__image');
      this._likeElement = this._element.querySelector('.element__like');
      this._likeElement.addEventListener('click', () => {this._like(myId,api); 
      });
      this._imageElement.addEventListener('click', () => {
      this._handleCardClick();
      
      });
    }
  
    isLiked(myId){
      const likers = this._likes.map(function(i){return i._id});
      console.log(likers);
      for(let i=0; i<likers.length; i++) {
        if(myId === likers[i]) {  
        return true;
        }
        else{
          return false}
    }
  }


    _like(myId, api) {
      if (this.isLiked(myId)){
        this._likeElement.classList.toggle('element__like_active');
        api.deleteLike(this._card, this._likesNum);
      }
      else {
        this._likeElement.classList.toggle('element__like_active');
        api.createLike(this._card, this._likesNum);
        }  
    }
  


  }
