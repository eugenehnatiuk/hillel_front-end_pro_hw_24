export { renderCountedWords };

function renderCountedWords(wordsMap) {
  const counterResult = document.querySelector('.input-box__output-count');
  const unqueNumber = document.createElement('p');
  unqueNumber.innerText = `Unique words: ${new Set(wordsMap).size}`;
  counterResult.appendChild(unqueNumber);

  if (!wordsMap || wordsMap.size === 0) {
    const emptyText = document.createElement('span');
    emptyText.innerText = `Please enter some text`;
    counterResult.insertBefore(emptyText, counterResult.firstChild);
  } else {
    const listTitle = document.createElement('p');
    listTitle.innerText = 'Words count:';
    counterResult.appendChild(listTitle);

    const resultList = document.createElement('ul');
    resultList.classList.add('input-box__output-list');
    counterResult.appendChild(resultList);

    for (const [key, value] of wordsMap.entries()) {
      const counterList = document.querySelector('.input-box__output-list');
      const counterListEl = document.createElement('li');
      counterListEl.innerText = `${key}: ${value}`;
      counterList.appendChild(counterListEl);
    }
  }
}
