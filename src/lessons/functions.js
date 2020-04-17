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

sideEffects(10) // j

// you can see that the function does something that affects the scope outside it's block.
// after all, it printed something out! Some other examples of side effects are:
// * communicating with other apps/programs
// * creating / altering files
// * mutating (changing) the value of an argument (see chapter on mutation)

// A function can also be bound to a variable
// in other words, we can have a variable that references a function

function myFunction () {
  console.log('k')
}

const referenceToMyFunction = myFunction

referenceToMyFunction() // k

// Given this property of functions in javascript, you can probably see how the following
// is possible:

const anotherReference = function anotherFunction () {
  console.log('l')
}

anotherReference() // l

// Since functions can be passed around in this manner, it can sometimes be redundant to
// explicitly give them a name. As such, the following is also valid in javascript:

const anonymousFunction = function () {
  console.log('m')
}

anonymousFunction() // m

// These are called "anonymous functions". They are anonymous because they don't have names

// Together these concepts used to make up a very important design pattern in javascript.
// The callback. People would pass a function into another function, with the understanding
// the second function would call it when it's done
// Let's take a look at an example:

setTimeout(function () {
  console.log('I am running after 1000 milliseconds!')
}, 1000)

// setTimeout is a Javascript API (Application Programming Interface)
// You pass a function into it, with the understanding that after 1000ms
// have elapsed, it will run the function a single time for you.
// Let's look at another example:

function chargeCreditCard (creditCardNumber, _amount) {
  // ... charge the persons account ...
  console.log(`charging credit card: ${creditCardNumber}`)
}

function checkSufficientFunds (creditCardNumber, amount, cb) {
  // ... check with bank for sufficient funds (use your imagination) ...
  cb(creditCardNumber, amount)
}

checkSufficientFunds('5555-5555-5555-5555', 42.67, chargeCreditCard) // charging credit card: ...

// so what's happening here? We have this function `checkSufficientFunds` that will
// (pretend to) make a request to the bank to see if the credit card has enough
// money to make the payment for $42.67. If they have sufficient funds, it will call
// the function that we pass into it, in this case `chargeCreditCard`, for the amount of
// 42.67! Don't be afraid to pause here to make sense of what's happening!

// Note: What would happen if there was a bug in `checkSufficientFunds` that caused it to
// call the callback function twice? Well the callback function in this case is `chargeCreditCard`!
// We would end up charging the credit card twice by accident! This is a very real problem, and
// one of the reasons that people don't use callbacks as much as they used to. When we pass a
// callback into another function, we are giving THAT function control over when, and how our
// callback will be called. Later on we will explore a pattern that allows us to take back control
// in these situations.

// finally, let's briefly go over another syntax you may see for anonymous functions in javascript

const myArrowFunction = () => {
  console.log('n')
}

myArrowFunction() // n

// Please be aware this does not have the exact same behaviour as the "function" syntax we have
// been using up until this point, but we need to learn more before we can go into the differences.
