'use strict';

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
  const currentWeek = getWeekNumber(currentDate);

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );
  const startWeek = getWeekNumber(startOfMonth);

  return currentWeek - startWeek + 1;
}

function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const daysPassed = Math.floor(
    (date - firstDayOfYear) / (24 * 60 * 60 * 1000),
  );
  const weekNumber = Math.ceil(
    (daysPassed + firstDayOfYear.getDay() + 1) / 7,
  );

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
  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1;
  const year = parts[2];

  const convertDay = `${month}.${day}.${year}`;

  const newDate = new Date();
  newDate.setDate(day);
  newDate.setMonth(month);
  newDate.setYear(year);

  const dayOfWeek = getDayOfWeek(newDate.getDay());
  const weekNumber = getWeekNumberInMonth(newDate);
  const monthName = getMonth(newDate.getMonth());

  const myDate = `${dayOfWeek}, ${weekNumber} неделя ${monthName} ${newDate.getFullYear()} года`;
  return myDate;
}

export {getDayInfo};


//Думал так можно сделать, но потом понял, что так не работает :)
/*
function getWeekNumberInMonth2(date) {
  const currentDate = new Date(date);
  const currentDay = currentDate.getDate();
  const weekNumber = Math.ceil(currentDay / 7);
  return weekNumber;
}
*/
