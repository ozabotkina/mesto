import './index.css';
import { createCard, validationConfig, popupSelectors, authorButton, newCardButton, jobInput, nameInput, userInfoSelectors, authorName, authorAbout, authorAvatar, createCardList, avatarEdit} from '../utils/shared.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupDelete } from '../components/PopupDelete';
import { API } from '../components/API';
import { Section } from '../components/Section';

const api = new API({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '24287173-ba31-4a1d-8c0b-4b3b6920eaaf',
    'Content-Type': 'application/json'
  }
});

const popupImage = new PopupWithImage(popupSelectors.popupImageSelector);
popupImage.setEventListeners();

const popupDelete = new PopupDelete(popupSelectors.popupDeleteSelector);
popupDelete.setEventListeners();

let userId = '';
let cardsList = '';

const userInfo = new UserInfo(userInfoSelectors);
userInfo.getUserInfo();


api.fetchInitialData()
  .then((res) => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
    userId = res._id;
    })  
   .then(() => {api.fetchInitialCards()
   .then ((data) => {
    cardsList = new Section ({
    items: data,
    renderer: (item) => {
      const cardElement = 
        createCard(
          item, 
          {handleCardClick: () => {popupImage.open(item.link, item.name)}},  
          {handleTrashClick: () => {popupDelete.open(item._id, {submitHandler: (() => {
            api.deleteCard(item._id)
            .then (() => {cardElement.remove()})
            .then (() => {popupDelete.close()})
            .catch ((err) => {console.log(err)})
          })})}},
          {handleLikeClick: (card) => {
            if(card.isLiked()){
              api.deleteLike(item._id)
              .then ((data) => {card.likesNum.textContent = data.likes.length})
              .then (() => {card.likeElement.classList.toggle('element__like_active')})
              .catch ((err) => {console.log(err)})
            }
            else {
              api.createLike(item._id)
              .then ((data) => {card.likesNum.textContent = data.likes.length})
              .then (() => {card.likeElement.classList.toggle('element__like_active')})
              .catch ((err) => {console.log(err)})
            }
            }
          },
          userId
      );    
      cardsList.addItem(cardElement); 
    },},
    '.elements'
    );
    cardsList.renderItems();
  })
})
  .catch((err) => {
    console.log(err);
    }); 
    
const popupNewCard = new PopupWithForm(
  popupSelectors.popupNewCardSelector, 
  {submitHandler: (formValues) => {
    api.addNewCard(formValues.cardlink, formValues.cardname)
    .then ((data) => {
      const newCardElement = 
      createCard(
        data, 
        {handleCardClick: () => {popupImage.open(data.link, data.name)}},  
        {handleTrashClick: () => {popupDelete.open(data._id, {submitHandler: (() => {
          api.deleteCard(data._id)
          .then (() => {cardElement.remove()})
          .then (() => {popupDelete.close()})
          .catch ((err) => {console.log(err)})
        })})}},
        {handleLikeClick: (card) => {
          if(card.isLiked()){
            api.deleteLike(data._id)
            .then ((data) => {card.likesNum.textContent = data.likes.length})
            .then (() => {card.likeElement.classList.toggle('element__like_active')})
            .catch ((err) => {console.log(err)})
          }
          else {
            api.createLike(data._id)
            .then ((data) => {card.likesNum.textContent = data.likes.length})
            .then (() => {card.likeElement.classList.toggle('element__like_active')})
            .catch ((err) => {console.log(err)})
          }
          }
        },
    userId
    );
    return newCardElement})
       .then ((newCardElement) => {cardsList.container.prepend(newCardElement)})
       .then (() => { popupNewCard.close()})
       .catch((err)=>{console.log(err)})
       .finally(() => {popupNewCard.renderLoading(false)})

   ;
  }}
);

popupNewCard.setEventListeners();


export const popupAuthor = new PopupWithForm(
  popupSelectors.popupAuthorSelector,
  {submitHandler: (formValues) => {
    const name = formValues.popup__name;
    const about = formValues.popup__about;
    api.changeAuthorInfo(name,about)
    .then((data) => userInfo.setUserInfo(data.name, data.about, data.avatar))
    .then(() => {popupAuthor.close()})
    .catch((err) => {
      console.log(err);})
    .finally(() => {popupAuthor.renderLoading(false)})
      ; 
  }}
);
popupAuthor.setEventListeners();

const popupAvatar = new PopupWithForm(
  popupSelectors.popupAvatarSelector, 
  {submitHandler: (formValues) => {
    api.changeAvatar(formValues.avatarlink)
    .then ((data) => {
    authorAvatar.src = data.avatar})
    .then (() => {popupAvatar.close()})
    .catch((err) => {console.log(err)})
    .finally(() => {popupAvatar.renderLoading(false)})

  }}
)
popupAvatar.setEventListeners();

const formAuthorValidator = new FormValidator(validationConfig, popupAuthor.form);
formAuthorValidator.enableValidation();
const formNewCardValidator = new FormValidator(validationConfig, popupNewCard.form);
formNewCardValidator.enableValidation();
const formAvatarValidator = new FormValidator(validationConfig, popupAvatar.form);
formAvatarValidator.enableValidation();

newCardButton.addEventListener ('click', function() {
  formNewCardValidator.toggleButtonState();
  formNewCardValidator.hideAllErrors();
  popupNewCard.open();
});

authorButton.addEventListener ('click', function() {
  formAuthorValidator.toggleButtonState();
  formAuthorValidator.hideAllErrors();
  const initialValues = userInfo.getUserInfo();
  nameInput.value = initialValues.name;
  jobInput.value = initialValues.about;  
  popupAuthor.open();
});

avatarEdit.addEventListener('mouseover', function(){
  authorAvatar.style.zIndex = "-1"
  authorAvatar.style.opacity = "0.2"
} )

avatarEdit.addEventListener('mouseout', function(){
  authorAvatar.style.zIndex = "1"
  authorAvatar.style.opacity = "1"
} )

avatarEdit.addEventListener('click', function(){
  formAvatarValidator.toggleButtonState();
  formAvatarValidator.hideAllErrors();
  popupAvatar.open();
} )
