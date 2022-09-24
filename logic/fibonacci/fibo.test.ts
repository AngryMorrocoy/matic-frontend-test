import { expect, test } from 'vitest';
import fibo from './fibo';

test("Should return the n'th number of the fibonacci sequence", () => {
  // These are the first 20 numbers of the fibo sequence
  const expectedResult = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181,
  ];

  for (let i = 0; i < expectedResult.length; i++) {
    expect(fibo(i)).toBe(expectedResult[i]);
  }
});

test("Should fail if the 'n' is less than zero", () => {
  expect(() => fibo(-1)).toThrowError(/greater/i);
});
