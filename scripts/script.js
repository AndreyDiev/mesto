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

const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile'); //было popup
const PopupProfileCloseButton = document.querySelector('.popup-profile__close');
const formName = document.querySelector('.popup__input_value_name');
const formJob = document.querySelector('.popup__input_value_job');
const popupProfileForm = document.querySelector('.popup-profile__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupCreate = document.querySelector('.popup-create');
const popupCreateButton = document.querySelector('.profile__add-button');
const popupCreateCloseButton = document.querySelector('.popup-create__close');
const formPlace = document.querySelector('.popup__input_value_place');
const formLink = document.querySelector('.popup__input_value_link');
const popupCreateForm = document.querySelector('.popup-create__form');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const popupImage = document.querySelector('.popup-image');
const popupImagePhoto = document.querySelector('.popup-image__photo');
const popupImageTitle = document.querySelector('.popup-image__title');
const cardsContainer = document.querySelector('.cards');

function openPopup(popup) {
  popup.classList.add('popup_active');
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
}

// Открытие и закрытие попапа
function clickedEditButton() {
  openPopup(popupProfile);
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
}

function clickedPopupProfileCloseButton() {
  closePopup(popupProfile);
}

PopupProfileCloseButton.addEventListener('click', clickedPopupProfileCloseButton);

function clickedClosePopupAddButton() {
  closePopup(popupProfile);
}

function clickedAddButton() {
  openPopup(popupCreate);
}

function clickedCloseAddPopup() {
  closePopup(popupCreate);
}

// Отправка формы профиля
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  closePopup(popupProfile);
}

// Добавление карточек



const handleDeleteCard = (event) => {
  event.target.closest('.card').remove();
}

const handleLikeCard = (event) => {
  event.target.closest('.card__like').classList.toggle('card__like_active');
}




const openImagePopup = (cardData) => {
  popupImagePhoto.src = cardData.link;
  popupImagePhoto.alt = cardData.place;
  popupImageTitle.textContent = cardData.place;
  openPopup(popupImage);
}


const generateCard = (cardData) => {
  const newCard = cardTemplate.cloneNode(true);

  const place = newCard.querySelector('.card__title');
  place.textContent = cardData.place;
  const link = newCard.querySelector('.card__image');
  link.src = cardData.link;
  link.alt = cardData.place;
  const deleteButton = newCard.querySelector('.card__trash');
  deleteButton.addEventListener('click', handleDeleteCard);
  const likeButton = newCard.querySelector('.card__like');
  likeButton.addEventListener('click', handleLikeCard);
  newCard.querySelector('.card__image').addEventListener('click', () => openImagePopup(cardData));
  const popupImageCloseBtn = document.querySelector('.popup-image__close');
  popupImageCloseBtn.addEventListener('click', () => {
    popupImage.classList.remove('popup_active');
  });
  return newCard;
}

const renderCard = (cardData) => {
  cardsContainer.prepend(generateCard(cardData));
}


initialCards.forEach((cardData) => {
  renderCard(cardData);
});



function createFormSubmit(evt) {
  evt.preventDefault();
  renderCard({
    place: formPlace.value,
    link: formLink.value
  });
  formPlace.value = '';
  formLink.value = '';
  closePopup(popupCreate);
}

popupProfileEditButton.addEventListener('click', clickedEditButton);
popupProfileForm.addEventListener('submit', submitProfileForm);
popupCreateButton.addEventListener('click', clickedAddButton);
popupCreateCloseButton.addEventListener('click', clickedCloseAddPopup);
popupCreateForm.addEventListener('submit', createFormSubmit);

