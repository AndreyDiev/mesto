export const initialCards = [
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

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
};

export const popupProfileEditButton = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup-profile'); //было popup
export const popupProfileCloseButton = document.querySelector('.popup-profile__close');
export const inputName = document.querySelector('.popup__input_value_name');
export const inputJob = document.querySelector('.popup__input_value_job');
export const popupProfileForm = document.querySelector('.popup-profile__form');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const popupCreate = document.querySelector('.popup-create');
export const popupCreateButton = document.querySelector('.profile__add-button');
export const popupCreateCloseButton = document.querySelector('.popup-create__close');
export const inputPlace = document.querySelector('.popup__input_value_place');
export const inputLink = document.querySelector('.popup__input_value_link');
export const popupCreateForm = document.querySelector('.popup-create__form');
export const popupImage = document.querySelector('.popup-image');
export const popupImagePhoto = document.querySelector('.popup-image__photo');
export const popupImageTitle = document.querySelector('.popup-image__title');
export const cardsContainer = document.querySelector('.cards');
export const popupImageCloseBtn = document.querySelector('.popup-image__close');
