import { test, expect } from 'vitest';
import fizzBuzz from './fizzBuzz'

test("Should return 'fizz' if the number is divisible by 3", () => {
  const testInputs = [3, 6, 9, 12]

  for (const test of testInputs) {
    expect(fizzBuzz(test)).toBe('fizz')
  }
})

test("Should return 'buzz' if the number is divisible by 5", () => {
  const testInputs = [5, 10, 20, 25]

  for (const test of testInputs) {
    expect(fizzBuzz(test)).toBe('buzz')
  }
})

test("Should return 'fizz buzz' if the number is divisible by both 3 and 5", () => {
  const testInputs = [15, 30, 45, 60]

  for (const test of testInputs) {
    expect(fizzBuzz(test)).toBe('fizz buzz')
  }
})


test("Should return the number if it isn't divisible by 3 nor 5", () => {
  const testInputs = [1, 2, 4, 7]

  for (const test of testInputs) {
    expect(fizzBuzz(test)).toBe(test)
  }
})
