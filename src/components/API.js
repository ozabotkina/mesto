
export class API {
    constructor({baseUrl, headers}){
this._baseUrl = baseUrl;
this._headers = headers;
    }

_checkAnswer(res){
    if(res.ok){return res.json();}
    return Promise.reject(res.status);
}

fetchInitialData(){
    return fetch(`${this._baseUrl}/users/me`, {
        method:'GET',
        headers: this._headers
        })   
    .then ((res) => {return (this._checkAnswer(res))})
    .then ((data) => {return data})
}


changeAuthorInfo = (name,about) => {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
        name: name,
        about: about
        })
        })
        .then ((res) => {return (this._checkAnswer(res))})
        };
 
        
fetchInitialCards = () => {
    return fetch (`${this._baseUrl}/cards`, {
        method:'GET',
        headers: this._headers
        })
    .then ((res) => { return (this._checkAnswer(res)); })
    .then ((data) => {return data})
    };
        

 addNewCard = (link, name) => {
    return fetch (`${this._baseUrl}/cards`, {
        method:'POST',
        headers: this._headers,
        body: JSON.stringify({
        name: name,
        link: link
        })
        })
        .then ((res) => {return (this._checkAnswer(res))})
        .then ((data) => {return data})
        };
          
deleteCard = (cardId) => {
        return fetch (`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
        })
        .then ((res) => {return (this._checkAnswer(res))})};
        

          
createLike = (cardId) => {
        return fetch (`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
        })
        .then ((res) => {return (this._checkAnswer(res))})
        .then ((data) => {return data})
        };


deleteLike = (cardId) => {
        return fetch (`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
        })
        .then ((res) => {return (this._checkAnswer(res))})
        .then ((data) => {return data})
        };
 
changeAvatar = (avatarlink) => {
        return fetch (`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            avatar: avatarlink
            })
        })
        .then ((res) => {return (this._checkAnswer(res))})
        .then ((data) => {return data})
    }
}
