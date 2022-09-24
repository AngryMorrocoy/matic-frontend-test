import fibo from './fibonacci/fibo';
import fizzBuzz from './fizzBuzz/fizzBuzz';
import countWords from './wordCounter/wordCounter';

function _fibo(limit: number = 10): void {
  console.log(
    `Showing the first ${limit} numbers of the fibonacci sequence...`
  );
  for (let i = 0; i < limit; i++) {
    console.log(fibo(i));
  }
}

function _fizzBuzz(limit: number = 100): void {
  console.log(`Running fizzbuzz from 1 to ${limit}...`);
  for (let i = 1; i <= limit; i++) {
    console.log(fizzBuzz(i));
  }
}

function _countWords(text: string): void {
  const wordOccurences = countWords(text);

  console.log(`In the text: "${text}"\n`);

  for (const [k, v] of Object.entries(wordOccurences)) {
    console.log(`${k}: ${v} times`);
  }
}

function main(): void {
  const args = process.argv.splice(2, 2);

  const funcs = {
    fibo: _fibo,
    fizzBuzz: _fizzBuzz,
    countWords: _countWords,
  };

  if (args.length !== 2) {
    console.log('Expected at least two arguments');
    console.log('<function> <parameter>');
    console.log('');
    console.log('<function> One of: fibo,countWords,fizzBuzz');
    console.log(
      '<parameter> The parameter that is going to be passed to the function'
    );
    return;
  }

  const [funcName, parameter] = args;

  if (!Object.keys(funcs).includes(funcName)) {
    console.log(`Not defined function "${funcName}"`);
    console.log(`Expected one of: fibo,countWords,fizzBuzz`);
    return;
  }

  funcs[funcName](parameter)
}

if (require.main === module) main();
