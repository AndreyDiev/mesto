class Card {
  constructor(cardData, openImagePopup) {
    this._cardData = cardData;
    this._place = cardData.place;
    this._link = cardData.link;
    this.openImagePopup = openImagePopup;
  }

  _getTemplate() {
    const card = document
    .querySelector('#card-template')
    .content.querySelector('.card')
    .cloneNode(true);

    return card;
  }

  _setData() {
    const titleElement = this._newCard.querySelector('.card__title');
    titleElement.textContent = this._place;
    const imageELement = this._newCard.querySelector('.card__image');
    imageELement.src = this._link;
    imageELement.alt = this._place;
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _setLike() {
    this._newCard.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector('.card__trash');
    deleteButton.addEventListener('click', () => { this._deleteCard() });
    const likeButton = this._newCard.querySelector('.card__like');
    likeButton.addEventListener('click', () => { this._setLike() });

    this._newCard.addEventListener('click', () => { this.openImagePopup(this._link, this._place) });
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListeners();

    return this._newCard;
  }
}

export default Card;
