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
    if (!Number.isInteger(day)) return day + '';
    return daysOfWeek[day];
  };

  /**
   * Получение даты из формата “01.01.2022” в Суббота, 1 неделя Января 2022 года
   * @param {string} date “01.01.2022”
   * @return {string} newDate Суббота, 1 неделя Января 2022 года
   */
  function getDayInfo(date) {
    const parts = date.split('.');
    const day = parseInt(parts[0]) - 1;
    const month = parseInt(parts[1]) - 1; 
    const year = parts[2];

    const convertDay = `${month}.${day}.${year}`;



    const newDate = new Date()
      newDate.setDate(day);
      newDate.setMonth(month);
      newDate.setYear(year);      

    alert(newDate);

    const dayOfWeek = getDayOfWeek(newDate.getDay());
    const weekNumber = getWeekNumberInMonth(newDate);
    const monthName = getMonth(newDate.getMonth());

    const myDate = `${dayOfWeek}, ${weekNumber} неделя ${monthName} ${newDate.getFullYear()} года`;
    return myDate;
  }

  const dates = [
    '01.01.2023',
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
});
