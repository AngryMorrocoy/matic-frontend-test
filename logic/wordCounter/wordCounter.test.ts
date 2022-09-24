import { test, expect } from 'vitest';
import countWords from './wordCounter';

test('Should return an object with the occurences of each word in the given text', () => {
  const testText =
    'Hi how are things? Are you a Developer? I am also a developer';
  const expectedResult = {
    hi: 1,
    how: 1,
    are: 2,
    things: 1,
    you: 1,
    a: 2,
    developer: 2,
    i: 1,
    am: 1,
    also: 1,
  };

  expect(countWords(testText)).toEqual(expectedResult);
});
