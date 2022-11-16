let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let formName = document.querySelector('.popup__input_value_name');
let formJob = document.querySelector('.popup__input_value_job');
let popupForm = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
// let cards = document.querySelectorAll('.card__like');
// likeButtonArray = Array.from(cards);

// likeButtonArray.forEach((card) => {
//  card.addEventListener('click', () => {
//    card.classList.toggle('card__like_active');
//  })
// });

function clickedEditButton() {
  popup.classList.add('popup_active');
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
}

function clickedClosePopupButton() {
  popup.classList.remove('popup_active');
}

function formSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  return popup.classList.remove('popup_active');
}

editButton.addEventListener('click', clickedEditButton);
closePopupButton.addEventListener('click', clickedClosePopupButton);
popupForm.addEventListener('submit', formSubmit);

