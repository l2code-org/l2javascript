// Currying means to take a function that takes multiple arguments,
// and make it so we can give it a single argument at a time. Then
// the function won't execute until it has all the arguments it expects

const curry2 = fn => a => b => fn(a, b)

function add (a, b) {
  return a + b
}

const curriedAdd = curry2(add)

// here we provide `curriedAdd` the first argument
// of `2`. The function doesn't execute yet, because we
// haven't given it a second argument yet. Now we have a
// function that will always call `add` with `2` preset for
// `a`
const add2 = curriedAdd(2)

const result = add2(3)
console.log(`a: ${result}`)

// let's try another one!

const prepend = curry2((start, str) => `${start}${str}`)

const makeCanadian = prepend('please ')

const askForCoffee = makeCanadian('give me a coffee')

console.log(askForCoffee) // please give me a coffee

// This concept is called "Partial Application", when we "partially" supply
// the arguments for a function. This is a powerful concept, using it we can
// start with general functions and gradually build more specific functions
// using those general functions
