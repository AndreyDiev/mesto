import Card from './Card.js';
import FormValidator from './formValidator.js';

const initialCards = [
  {
    place: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    place: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    place: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    place: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    place: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    place: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
};

const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile'); //было popup
const popupProfileCloseButton = document.querySelector('.popup-profile__close');
const inputName = document.querySelector('.popup__input_value_name');
const inputJob = document.querySelector('.popup__input_value_job');
const popupProfileForm = document.querySelector('.popup-profile__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupCreate = document.querySelector('.popup-create');
const popupCreateButton = document.querySelector('.profile__add-button');
const popupCreateCloseButton = document.querySelector('.popup-create__close');
const inputPlace = document.querySelector('.popup__input_value_place');
const inputLink = document.querySelector('.popup__input_value_link');
const popupCreateForm = document.querySelector('.popup-create__form');
const popupCreateSubmitButton = document.querySelector('.popup-create__submit-button');
const popupImage = document.querySelector('.popup-image');
const popupImagePhoto = document.querySelector('.popup-image__photo');
const popupImageTitle = document.querySelector('.popup-image__title');
const cardsContainer = document.querySelector('.cards');
const popupImageCloseBtn = document.querySelector('.popup-image__close');

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', handleClosingPopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', handleClosingPopupByEsc);
}

// Открытие и закрытие попапа
function handleClickedEditButton() {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function handleClickedPopupProfileCloseButton() {
  closePopup(popupProfile);
}

function handleClickedAddButton() {
  openPopup(popupCreate);
}

function handleClickedCloseAddPopup() {
  closePopup(popupCreate);
}

// Отправка формы профиля
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
}

const handleCloseByOverlay = (e) => {
  if (e.target === e.currentTarget) {
    closePopup(e.target)
  }
}

function handleClosingPopupByEsc(evt) {
  if (evt.keyCode === 27) {
    closePopup(document.querySelector('.popup_active'));
  };
}

export const openImagePopup = (link, place) => {
  popupImagePhoto.src = link;
  popupImagePhoto.alt = place;
  popupImageTitle.textContent = place;
  openPopup(popupImage);
}

const renderCard = (cardData) => {
  const card = new Card(cardData, openImagePopup);
  return card.getView();
}

const addCard = (card) => {
  cardsContainer.prepend(card);
}

initialCards.forEach((cardData) => {
  addCard(renderCard(cardData));
});

const profileValidator = new FormValidator(validationConfig, popupProfileForm);
const createValidator = new FormValidator(validationConfig, popupCreateForm);
profileValidator.enableValidation();
createValidator.enableValidation();

function createFormSubmit(evt) {
  evt.preventDefault();
  addCard(renderCard({
    place: inputPlace.value,
    link: inputLink.value
  }));
  inputPlace.value = '';
  inputLink.value = '';
  createValidator.disablingButton(popupCreateSubmitButton);
  closePopup(popupCreate);
}

popupProfileEditButton.addEventListener('click', handleClickedEditButton);
popupProfileCloseButton.addEventListener('click', handleClickedPopupProfileCloseButton);
popupProfileForm.addEventListener('submit', submitProfileForm);
popupCreateButton.addEventListener('click', handleClickedAddButton);
popupCreateCloseButton.addEventListener('click', handleClickedCloseAddPopup);
popupCreateForm.addEventListener('submit', createFormSubmit);
popupProfile.addEventListener('click', handleCloseByOverlay);
popupCreate.addEventListener('click', handleCloseByOverlay);
popupImage.addEventListener('click', handleCloseByOverlay);
popupImageCloseBtn.addEventListener('click', () => {
  closePopup(popupImage);
});


