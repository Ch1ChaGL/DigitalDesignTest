'use strict';

// import { getDayInfo } from './date.js';

window.addEventListener('DOMContentLoaded', () => {
  alert('Я тут');
  const daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const monthOfYear = [
    'Января',
    'Февраля',
    'Марат',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  function getMonth(month) {
    return monthOfYear[month];
  }

  function getWeekNumberInMonth(date) {
    const currentDate = new Date(date);

    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    );
    const diff = currentDate.getTime() - startOfMonth.getTime();

    const daysPassed = Math.floor(diff / (24 * 60 * 60 * 1000));

    const weekNumber = Math.ceil((daysPassed + startOfMonth.getDay() + 1) / 7);

    return weekNumber;
  }

  const getDayOfWeek = day => {
    if (day < 0 || day > 6) throw new Error('Не существует такого дня недели');
    if (!Number.isInteger(day)) return 'Число не целое';
    return daysOfWeek[day];
  };

  /**
   * Получение даты из формата “01.01.2022” в Суббота, 1 неделя Января 2022 года
   * @param {string} date “01.01.2022”
   * @return {string} newDate Суббота, 1 неделя Января 2022 года
   */
  function getDayInfo(date) {
    const parts = date.split('.');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    const convertDay = `${month}.${day}.${year}`;

    const newDate = new Date(convertDay);

    const dayOfWeek = getDayOfWeek(newDate.getDay());
    const weekNumber = getWeekNumberInMonth(newDate);
    const monthName = getMonth(newDate.getMonth());

    const myDate = `${dayOfWeek}, ${weekNumber} неделя ${monthName} ${newDate.getFullYear()} года`;
    return myDate;
  }

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
});
