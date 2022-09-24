export default function fibonacci(n: number): number {
  if (n < 0) throw new Error("'n' must be greater than or equal to zero")
  if (n === 0) return 0;

  let curr = 1;
  let prev = 0;

  for (let i = 1; i < n; i++) {
    const tmp = curr;
    curr = prev + curr;
    prev = tmp;
  }

  return curr;
}
