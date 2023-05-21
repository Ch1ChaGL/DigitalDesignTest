'use strict';

import { getDayInfo } from './date.js';


 

  const dates = [
    '15.12.2021',
    '10.01.2023',
    '15.01.2023',
    '22.01.2023',
    '05.02.2023',
    '12.02.2023',
    '20.02.2023',
    '25.02.2023',
    '03.03.2023',
    '08.03.2023',
    '17.03.2023',
    '24.03.2023',
    '02.04.2023',
    '09.04.2023',
    '16.04.2023',
    '21.04.2023',
    '01.05.2023',
    '06.05.2023',
    '14.05.2023',
    '20.05.2023',
    '04.06.2023',
    '10.06.2023',
    '18.06.2023',
    '25.06.2023',
    '03.07.2023',
    '09.07.2023',
    '16.07.2023',
    '22.07.2023',
    '01.08.2023',
    '07.08.2023',
    '15.08.2023',
    '20.08.2023',
    '02.09.2023',
    '09.09.2023',
    '17.09.2023',
    '24.09.2023',
    '01.10.2023',
    '08.10.2023',
    '16.10.2023',
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
