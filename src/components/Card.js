class Card {
  constructor(cardData, hahdleClickImage) {
    this._cardData = cardData;
    this._place = cardData.place;
    this._link = cardData.link;
    this.hahdleClickImage = hahdleClickImage;
    //this._buttonLike = newCard.querySelector('.card__like');
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
    this._imageELement = this._newCard.querySelector('.card__image');
    this._imageELement.src = this._link;
    this._imageELement.alt = this._place;
    this._buttonLike = this._newCard.querySelector('.card__like');
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _setLike() {
    this._buttonLike.classList.toggle('card__like_active');
  }

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector('.card__trash');
    deleteButton.addEventListener('click', () => { this._deleteCard() });
    this._buttonLike.addEventListener('click', () => { this._setLike() });

    this._imageELement.addEventListener('click', () => { this.hahdleClickImage(this._link, this._place) });
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListeners();

    return this._newCard;
  }
}

export default Card;
