export default function fizzBuzz(n: number): number | string {
  let out = ''

  if (n % 3 === 0) out += 'fizz'
  if (n % 5 === 0) out += out ? ' buzz' : 'buzz'

  return out || n;
}
