export { renderCountedWords };

function renderCountedWords(wordsObj) {
  const outputResult = document.querySelector('.input-box__output-count');
  const unqueNumber = document.createElement('p');
  // debugger;
  if (!wordsObj) {
    emptyRender(outputResult);
    return;
  }
  const uniqueWords = new Set(Object.keys(wordsObj)).size;
  unqueNumber.innerText = `Unique words: ${uniqueWords}`;
  outputResult.appendChild(unqueNumber);

  const listTitle = document.createElement('p');
  listTitle.innerText = 'Words count:';
  outputResult.appendChild(listTitle);

  const resultList = document.createElement('ul');
  resultList.classList.add('input-box__output-list');
  outputResult.appendChild(resultList);

  for (const [key, value] of Object.entries(wordsObj)) {
    const counterList = document.querySelector('.input-box__output-list');
    const counterListEl = document.createElement('li');
    counterListEl.innerText = `${key}: ${value}`;
    counterList.appendChild(counterListEl);
  }
}

function emptyRender(outputResult) {
  const emptyText = document.createElement('span');
  emptyText.innerText = `Please enter some text`;
  outputResult.appendChild(emptyText);
}
