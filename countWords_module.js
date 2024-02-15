export { countWords };

function countWords(text) {
  const textArray = text.split(' ').join('\n').split('\n');

  const wordsMap = new Map();

  for (const element of textArray) {
    console.log(element);
    if (!element.trim()) {
      continue;
    }
    const lowercaseElement = element.toLowerCase();
    let count = 1;
    if (wordsMap.has(lowercaseElement)) {
      count = wordsMap.get(lowercaseElement) + 1;
      wordsMap.set(lowercaseElement, count);
    } else {
      wordsMap.set(lowercaseElement, count);
    }
  }
  return wordsMap.size > 0 ? wordsMap : null;
}

