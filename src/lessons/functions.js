// functions are a way to create a named block of code that can be run at will.
// for example, the following is a function:

function myFirstFunction () {
  console.log('a')
}

// we can now call this function via the following syntax:

myFirstFunction() // a

// we could easily call this code again:

myFirstFunction() // a

// we can even provide `arguments` to a function, allowing us to pass data
// into a function when we call it

function mySecondFunction (myFirstArgument) {
  console.log(`b: ${myFirstArgument}`)
}

mySecondFunction(10) // b: 10

// we can pass more than one argument as well

function myThirdFunction (firstArg, secondArg) {
  console.log(`c: ${firstArg}, ${secondArg}`)
}

myThirdFunction(5, 'hello') // c: 5, hello

// we can also return data from a function

function add (a, b) {
  return a + b
}

const result = add(3, 6)
console.log(`d: ${result}`) // d: 9

// there is also a concept of pure functions
// a pure function has the following properties:
// * given the same arguments, a pure function will always return the same output
// * a pure function has no side effects
//
// this might sound complicated, but it's pretty easy
// let's take a closer look!

function randomNumber (input) {
  Math.floor(Math.random() * input)
}

const e = randomNumber(5)
const f = randomNumber(5)

console.log(`e: ${e}`) // e: ?
console.log(`f: ${f}`) // f: ?

// you can see we gave the same input in both calls to the `randomNumber` function, right?
// but it gave us different results each time we called it! If you run this file you'll
// see it gave us a random number between 0 <= x <= 5. And it will change each time you
// run the file! So this is not a pure function, because given the same outputs, it has
// different outputs

// what about the following function?

let g = 10

function doSomething (input) {
  g = g + input
  return input
}

console.log(`g: ${g}`) // g: 10

const h = doSomething(4)

console.log(`g: ${g}`) // g: 14

const i = doSomething(4)

console.log(`g: ${g}`) // g: 18

console.log(`h: ${h}`) // h: 4
console.log(`i: ${i}`) // i: 4

// Is `doSomething` pure? It did give us the same output whenever the input was the same!
// But you can see that it also changed the value of g every time it was called! This is
// what we call a "Side Effect". A side effect is when a function affects things outside of
// its scope. So even the following function is not pure:

function sideEffects (input) {
  console.log('j')
  return input
}

sideEffects() // j
