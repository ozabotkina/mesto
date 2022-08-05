
export class Card {
    constructor(
      {link, name, likes, _id, owner}, 
      cardSelector,
      {handleCardClick},
      {handleTrashClick},
      // {handleCreateLike},
      // {handleDeleteLike},
      {handleLikeClick},

      myId
)
      
      {
      this._image = link;
      this._title = name;
      this._likes = likes;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._card = _id;
      this._ownerId = owner._id;
      this._handleTrashClick = handleTrashClick;
      // this._handleCreateLike = handleCreateLike;
      // this._handleDeleteLike = handleDeleteLike;
      this._handleLikeClick = handleLikeClick;
      this._myId = myId

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
      this._trashButton = this._element.querySelector('.element__trash');
      this._setEventListeners();
      this._imageElement.src = this._image;
      this._imageElement.alt = this._title;
      this._element.querySelector('.element__title').textContent = this._title;  
      if(!this.userCard()){
        this._trashButton.classList.add('element__trash_inactive')}
      this.likesNum = this._element.querySelector('.element__like-number')
      this.likesNum.textContent = this._likes.length
      if(this.isLiked()){
        this.likeElement.classList.toggle('element__like_active')}
      return this._element;
     
    }
    
    _setEventListeners() {
      this._imageElement = this._element.querySelector('.element__image');
      this.likeElement = this._element.querySelector('.element__like');
      this._trashButton.addEventListener('click', () => {this._handleTrashClick()})
      this.likeElement.addEventListener('click', () => {this._handleLikeClick(this)});
      this._imageElement.addEventListener('click', () => {this._handleCardClick()});
    }
  
    userCard(){
      if(this._ownerId === this._myId) {  
        return true;
        }
        else {return false}  
  }

    isLiked(){
      const likers = this._likes.map(function(i){return i._id});
      for(let i=0; i<likers.length; i++) {
        if(this._myId === likers[i]) {  
          return true;
        }
        else{
          return false}
    }
  }}
