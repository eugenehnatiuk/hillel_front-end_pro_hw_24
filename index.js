import { renderCountedWords } from './renderCountedWords_module.js';

const counterBtn = document.querySelector('.input-box__btn');
const countResultBox = document.querySelector('.input-box__output-count');

counterBtn.addEventListener('click', async () => {
  countResultBox.innerHTML = '';
  const inputText = document.querySelector('textarea').value.trim();
  // debugger
  try {
    const response = await fetch('/countModule', {
      headers: { 'Content-Type': 'text/plain' },
      method: 'POST',
      body: inputText,
    });
    if (!response.ok) {
      throw new Error(`code: ${response.status}.`);
    }

    const result = await response.json();
    renderCountedWords(result);
    // .then((respond) => respond.json())
    // .then((result) =>  renderCountedWords(result));
  } catch (error) {
    console.error(error);
  }
});
