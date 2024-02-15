import { countWords } from './countWords_module.js';
import { renderCountedWords } from './renderCountedWords_module.js';

const counterBtn = document.querySelector('.input-box__btn');
const countResultBox = document.querySelector('.input-box__output-count');

counterBtn.addEventListener('click', () => {
  countResultBox.innerHTML = '';
  const inputText = document.querySelector('textarea').value.trim();
  // fetch
  renderCountedWords(countWords(inputText));
});


