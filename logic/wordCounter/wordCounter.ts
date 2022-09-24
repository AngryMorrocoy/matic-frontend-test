type stringKeyObject = { [key: string]: number };

export default function countWords(text: string): stringKeyObject {
  const wordOccurences: stringKeyObject = {};
  const words = text.toLowerCase().match(/[a-z]+/g);

  for (const w of words) {
    if (!wordOccurences[w]) {
      wordOccurences[w] = 0;
    }
    wordOccurences[w]++;
  }

  return wordOccurences;
}
