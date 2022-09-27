# TOC
- [Matic Frontend Test](#matic-frontend-test)
  * [Why just one repo?](#why-just-one-repo-)
  * [Cloning](#cloning)
  * [Part one](#part-one)
    + [Fibonacci](#fibonacci)
    + [Word count](#word-count)
    + [Fizz Buzz](#fizz-buzz)
  * [Part two](#part-two)
    + [Vite(st)?](#vite-st--)
    + [Axios](#axios)
    + [React-router](#react-router)
    + [Styled-components](#styled-components)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Matic Frontend Test

Hi! (whoever is reading this). I'm Manuel and as you can see this is my solution
for the two parts of the **Matic Frontend Test**.

I will talk in more depth about the decissions made through the development
process later, for now here's a list of the technologies used to build this app:

- **Vite + React-Typescript**
- **Vitest**
- **Axios**
- **React-router**
- **Styled Components**

## Why just one repo?

Yeah, I thought about it too. I did it guessing that someone will clone the repo
for a code checking (I hope someone will do it), and this way it's easier to
evaluate both parts of the test (I guess).

## Cloning

First of all, if you want to properly check the code clone this repository.

`git clone https://github.com/AngryMorrocoy/matic-frontend-test`

And run `npm install`

## Part one

You can check the code for this *logic* part of the test inside the `./logic`
folder. Each file contains the source code and a test for the specified
question. Also added script from where you can run all the questions
with custom parameters without modifying the source code (more info in each
question section).

To run the tests for this part: `npm run part1-test`

### Fibonacci

Everybody nowadays now what the fibonacci sequence is or has a slight knowledge
about it. Each number of the sequence is the sum of its two previous. The wrote
function (it's not the most efficient one) doesn't return this sequence, only
the required '*index*' of this one. Being then.

| Index | Result |
|-------|--------|
| 0     | 0      |
| 1     | 1      |
| 2     | 1      |
| 3     | 2      |
| ...   | ...    |
| 10    | 34     |

To see first ten numbers of the sequence, run `npm run fibo`.

If you want to see it in action with a custom input please run this command,
being `<limit>` the number of characters of the sequence you want to see.

`npx ts-node logic/index.ts fibo <limit>`

### Word count

Not so hard concept, I used a *javascript object* as a **HashMap**, to count
them and a *regex expression* to get the words without special characters. To
see the words present in the string *'Hi how are things? Are you a Developer? I
am also a developer'* run: `npm run countWords`

If you want to test it with a custom input, please run this command, being
`'<phrase>'` the string which words you want to count. **DON'T FORGET THE QUOTES**

`npx ts-node logic/index.ts countWords '<phrase>'`

### Fizz Buzz

A classic, everybody knows what it is about. If you don't, please read about it
[here](https://en.wikipedia.org/wiki/Fizz_buzz).

To run FizzBuzz from 1 to 100, run `npm run fizzBuzz`.

If you want to run it from 1 to any other number, please run:

`npx ts-node logic/index.ts countWords <n>`

Being `<n>` the inclusive end of the iteration, so if `n=10` it will run fizz
buzz starting at one and including 10.

## Part two

Here's the interesting part of the test. This one took me much longer than I
expected (that's why the *update* part of the **CRUD** isn't something I'm proud
at all).

I have in my plans making the page *responsive* but as I said above certain
components took me longer than expected. But doing it is not discarded, gives me
a bit of anxiety that it doesn't look good on mobile devices.

Typescript is a **must** for me when working with react, the codebase can get
very messy really quick and the diagnostics (sometimes annoying) helps alot
keeping everything in order and pointing out things that are not in their
right place.

To run it locally, first you need to [clone](#cloning) the repo, and then run
`npm run dev` to start the local development server.

### Vite(st)?

There isn't a great reason to use `vite` over `create-react-app`. I just like
vite :D

*Vitest* was just a side effect of chosing vite, the api for testing is quite
similar to `jest`, and wasn't super hard to configure. I know, I didn't
implemented tests for the components, but it was part of the plan. Obviously a
**TDD** approach wasn't taked in this part.

### Axios

The reason I chosed **Axios** over the default *fetch api* is the same I chosed
*vite* over *create-react-app*... I just like axios.

### React-router

I used react router because I didn't wanted to use a conditional rendering on
the main component of the app. Swapping such big components using state doesn't
feel right at all, *react-router* does the trick and feels cleaner.

### Styled-components

I wanted to try something new, and didn't feel smart enough to write plain *CSS*,
or using a preprocessor like *SASS*. I'd never used this library before, but the
development experience was pretty straightforward, without complicated
configuration or crazy generic types.

The only thing I'll complain about, and not about the library, but my
inexperience with it, is that using CSS custom props to track variables can be a
bit annoying, I'm sure there should be a better way to do it.
