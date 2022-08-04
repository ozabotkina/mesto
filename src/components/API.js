
export class API {
    constructor({baseUrl, headers}){
this._baseUrl = baseUrl;
this._headers = headers;
    }

fetchInitialData(name,about,avatar){
    return fetch(`${this._baseUrl}/users/me`, {
        method:'GET',
        headers: this._headers
        })
        .then(res => res.json())
        .then((result) => {
            name.textContent = result.name;
            about.textContent = result.about;
            avatar.src = result.avatar;
            })
        .catch((err) => {
            console.log(err);
            }); 
          };
      
changeAuthorInfo = (name,about, popup) => {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
        name: name,
        about: about
        })
        
        })
        .catch((err) => {
            console.log(err);
            }); 

        };
      
fetchInitialCards = ({createCardList}) => {
    this.createCardList = createCardList;
    return fetch (`${this._baseUrl}/cards`, {
        method:'GET',
        headers: this._headers
        })
        .then((res) => {
        return res.json()})
        .then((data) => {
        this.createCardList(data);
        })
        .catch((err) => {
        console.log(err); 
        }); 
        };
        
 addNewCard = (link, name, myId, api) => {
    return fetch (`${this._baseUrl}/cards`, {
        method:'POST',
        headers: this._headers,
        body: JSON.stringify({
        name: name,
        link: link
        })
        })
        .then(res => res.json())
        .catch((err)=>{console.log(err)})
        .finally (() => {location.reload()})

        };
          
deleteCard = (cardId) => {
        return fetch (`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
        })
        .then(res => {if(res.ok){
        }})
        .catch((err)=>{console.log(err)})
        .finally (() => {location.reload()})

        }
          
createLike = (cardId, likeNum) => {
        return fetch (`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
        })
        .then(res => res.json())
        .then((result) => {likeNum.textContent = result.likes.length})
        .catch((err)=>{console.log(err)})
        .finally (() => {})
        }

checkLikes = (cardId) => {
    return fetch (`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'GET',
        headers: this._headers
        })
        .then((res) => {res.json()})
    
        .catch((err)=>{console.log(err)})
        .finally (() => {})
        }
     

deleteLike = (cardId, likeNum) => {
        return fetch (`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
        })
        .then(res => res.json())
        .then((result) => {likeNum.textContent = result.likes.length})
        .catch((err)=>{console.log(err)})
        .finally (() => {})
        }
 
        
 changeAvatar = (avatarlink) => {
        return fetch (`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            avatar: avatarlink
            })
        })
        .then ((res) => {if(res.ok){location.reload()}})
        .catch((err) => {
            console.log(err);
            }); 
    }
}
