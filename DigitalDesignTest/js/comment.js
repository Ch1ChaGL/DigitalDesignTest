'use strict';
const MAX_LENGTH = 2_000;
const textarea = document.querySelector('.comment__text');
const popup = document.querySelector('.popup');
const countWord = document.querySelector('#countword');


textarea.addEventListener('keyup', event => {
  textarea.style.height = 'auto';
  let scHeight = event.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
  popup.scrollTo(0, scHeight);
  textarea.value = textarea.value.slice(0, MAX_LENGTH);
  countWord.innerHTML = `${textarea.value.length}/${MAX_LENGTH}`;
});


textarea.addEventListener('keydown', event => {
  textarea.value = textarea.value.slice(0, MAX_LENGTH);
  countWord.innerHTML = `${textarea.value.length}/${MAX_LENGTH}`;
});


