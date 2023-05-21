'use strict';

const btns = document.querySelectorAll('.offer__button');
const myPopup = document.querySelector('.popup');
const popupModal = document.querySelector('.popup__modal');

document.addEventListener('click', event => {
  const click = event.composedPath().includes(popupModal);
  if (event.target.classList.contains('offer__button')) return;
  if (!click) {
    myPopup.classList.remove('show');
  }
});

for (const btn of btns) {
  btn.addEventListener('click', onclick);
}

function onclick(event) {
  const target = event.target.closest('.card');  
  const parentElement = target.querySelector('.card__image');
  const cardImage = parentElement.firstElementChild;
  const cardTitle = target.querySelector('.card__title');
  const cardSubtitle = target.querySelector('.card__subtitle');
  const offerPrice = target.querySelector('.offer__price');

  myPopup.classList.add('show'); // Добавить класс "show" для показа попапа

  const popupCardImage = myPopup.querySelector('#popup-image');
  const popupCardTitle = myPopup.querySelector('.popup-form__title');
  const popupCardSubtitle = myPopup.querySelector('.popup-form__subtitle');
  const popupOfferPrice = myPopup.querySelector('.popup-form__price');


  popupCardImage.src = cardImage.src;
  popupCardTitle.innerHTML = cardTitle.innerHTML;
  popupCardSubtitle.innerHTML = cardSubtitle.innerHTML;
  popupOfferPrice.innerHTML = offerPrice.innerHTML;
}
