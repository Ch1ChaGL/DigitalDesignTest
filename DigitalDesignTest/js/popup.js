'use strict';

let currPrice;
const btns = document.querySelectorAll('.offer__button');
const myPopup = document.querySelector('.popup');
const popupModal = document.querySelector('.popup__modal');
const numInput = document.querySelector('#num__input');
document.addEventListener('click', event => {
  const click = event.composedPath().includes(popupModal);
  if (event.target.classList.contains('offer__button')) return;
  if (!click) {
    myPopup.classList.remove('show');
    const textarea = myPopup.querySelector('textarea');
    textarea.value = '';
    numInput.value = '';
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
  currPrice = parseInt(
    offerPrice.innerHTML.slice(0, offerPrice.innerHTML.length - 1),
  );
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



numInput.onkeydown = event => {
  return event.key !== '-' && event.key !== ',' && event.key !== '.';
};
let count;
numInput.addEventListener('input', event => {
  count = parseInt(event.target.value);

  const priceElement = document.querySelector('.popup-form__price');

  if (isNaN(count) || typeof count === 'undefined')
    priceElement.innerHTML = `${currPrice * 1} ₽`;
  else priceElement.innerHTML = `${currPrice * count} ₽`;
});

const close = document.querySelector('.popup-form__close');

close.addEventListener('click', () => {
  myPopup.classList.remove('show');
});

const button = document.querySelector('.popup-form__buy');

button.addEventListener('click', event => {
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert');
  if (isNaN(count) || typeof count === 'undefined') count = 0;

  alertDiv.innerHTML = `Ваш заказ принят. Сумма заказа составила ${
    currPrice * count
  } Спасибо за покупку :)`;
  myPopup.classList.remove('show');
  const textarea = myPopup.querySelector('textarea');
  textarea.value = '';

  const wrap = document.querySelector('.wrapper');
  wrap.append(alertDiv);
  setTimeout(() => alertDiv.remove(), 2000);
});
