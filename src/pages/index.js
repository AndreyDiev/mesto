import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/formValidator.js';
import Section from '../components/Section.js';
import {
  initialCards,
  validationConfig,
  cardsContainer,
  popupProfileEditButton,
  popupProfile,
  popupProfileCloseButton,
  inputName,
  inputJob,
  popupProfileForm,
  profileName,
  profileJob,
  popupCreate,
  popupCreateButton,
  popupCreateCloseButton, inputPlace, inputLink, popupCreateForm, popupImage, popupImagePhoto,
  popupImageTitle, popupImageCloseBtn,
} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';

//-------------Настройка попапа с изменением данных пользователя-----------------//

const userInfo = new UserInfo('.profile__name', '.profile__job');
const userInfoPopup = new PopupWithForm(popupProfile, () => {
  userInfo.getUserInfo();
  userInfo.setUserInfo();
  userInfoPopup.close();
});

userInfoPopup.setEventListeners();

//------------------------------//

const cardCreatePopup = new PopupWithForm(popupCreate, (evt) => {
  evt.preventDefault();
});



const imagePopup = new PopupWithImage(popupImage);




const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, openImagePopup);
    const cardElement = card.getView();
    cardsList.addItem(cardElement);
    console.log('1');
  },
},
cardsContainer
);

cardsList.renderItems();


export const openImagePopup = (link, place) => {
  popupImagePhoto.src = link;
  popupImagePhoto.alt = place;
  popupImageTitle.textContent = place;
  openPopup(popupImage);
}
//const card = new Card(cardData, openImagePopup);
//cardsList.addItem(card.getView());

/*
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
function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', handleClosingPopupByEsc);
}



function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', handleClosingPopupByEsc);
}

function handleClickedAddButton() {
  openPopup(popupCreate);
}

function handleClickedCloseAddPopup() {
  closePopup(popupCreate);
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


*/


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
  createValidator.disablingButton();
  closePopup(popupCreate);
}



popupProfileEditButton.addEventListener('click', () => { userInfoPopup.open() });
popupProfileCloseButton.addEventListener('click',  () => { userInfoPopup.close() });

popupCreateForm.addEventListener('submit', createFormSubmit);
popupCreateButton.addEventListener('click', () => { cardCreatePopup.open() });
popupCreateCloseButton.addEventListener('click', () => { cardCreatePopup.close() })
popupImageCloseBtn.addEventListener('click', () => {
  closePopup(popupImage);
});


