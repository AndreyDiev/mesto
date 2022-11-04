let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let formButton = document.querySelector('.popup__submit');
let formName = document.querySelector('.popup__name');
let formJob = document.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let cards = document.querySelectorAll('.card__like');
likeButtonArray = Array.from(cards);

likeButtonArray.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('card__like_active');
  })
});

function clickedEditButton() {
  popup.classList.add('popup__active');
}

function clickedClosePopupButton() {
  popup.classList.remove('popup__active');
}

function formSubmit() {
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  return popup.classList.remove('popup__active');
}

editButton.addEventListener('click', clickedEditButton);
closePopupButton.addEventListener('click', clickedClosePopupButton);
formButton.addEventListener('click', formSubmit);
