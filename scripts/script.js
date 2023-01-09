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
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
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

// Добавление карточек

const handleDeleteCard = (event) => {
  event.target.closest('.card').remove();
}

const handleLikeCard = (event) => {
  event.target.closest('.card__like').classList.toggle('card__like_active');
}

const handleCloseByOverlay = (e) => {
  if (e.target === e.currentTarget) {
    closePopup(e.target)
  }
}

function handleClosingPopupByEsc(evt) {
  if (evt.keyCode === 27) {
    document.querySelector('.popup_active').classList.remove('popup_active');
  };
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
  const image = newCard.querySelector('.card__image');
  image.src = cardData.link;
  image.alt = cardData.place;
  const buttonDelete = newCard.querySelector('.card__trash');
  buttonDelete.addEventListener('click', handleDeleteCard);
  const buttonLike = newCard.querySelector('.card__like');
  buttonLike.addEventListener('click', handleLikeCard);
  image.addEventListener('click', () => openImagePopup(cardData));

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
    place: inputPlace.value,
    link: inputLink.value
  });
  inputPlace.value = '';
  inputLink.value = '';
  disablingButton(popupCreateSubmitButton);
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
