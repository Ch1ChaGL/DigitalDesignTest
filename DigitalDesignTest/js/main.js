'use strict';

// import { getDayInfo } from './date.js';

const dates = [
  '01.01.23',
  '10.01.23',
  '15.01.23',
  '22.01.23',
  '05.02.23',
  '12.02.23',
  '20.02.23',
  '25.02.23',
  '03.03.23',
  '08.03.23',
  '17.03.23',
  '24.03.23',
  '02.04.23',
  '09.04.23',
  '16.04.23',
  '21.04.23',
  '01.05.23',
  '06.05.23',
  '14.05.23',
  '20.05.23',
  '04.06.23',
  '10.06.23',
  '18.06.23',
  '25.06.23',
  '03.07.23',
  '09.07.23',
  '16.07.23',
  '22.07.23',
  '01.08.23',
  '07.08.23',
  '15.08.23',
  '20.08.23',
  '02.09.23',
  '09.09.23',
  '17.09.23',
  '24.09.23',
  '01.10.23',
  '08.10.23',
  '16.10.23',
];

const cards = document.querySelectorAll('.card');

const setDate = (card, date) => {
  const stringDate = getDayInfo(date);

  const subtitleElement = card.querySelector('.card__offer');
  const dateElement = document.createElement('div');
  dateElement.className = 'card__date';
  dateElement.textContent = stringDate;

  subtitleElement.insertAdjacentElement('afterend', dateElement);
};

for (let i = 0; i < cards.length; i++) {
  setDate(cards[i], dates[i]);
}
