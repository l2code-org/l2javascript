const { replace, toUpper, adjust, toLower, trim, curry, join } = require('ramda')

// Composition is another important concept in functional programming.
// The idea is to put functions together to make new functions. Let's
// take a look!

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
const pipe = (...fns) => data => fns.reduce(
  (aggregator, fn) => fn(aggregator),
  data,
)

// what does this function do? It potentially takes a bunch of functions as
// arguments, and returns a new function. When you pass `data` into this new
// function, it will call the "bunch of functions" one at a time on the data
// let's see it in action!
//
// First let's define some helpers using some functions from ramda
// NOTE: these functions are all curried by default

const prependString = curry((pre, str) => `${pre}${str}`)

const askNicely = replace('give me', 'may I have')

const sayPlease = prependString('please ')

const stopExclaiming = replace('!', '? :) ')

const adjustString = curry((index, fn) => pipe(
  adjust(index, fn),
  join(''),
))

const capitalizeFirstLetter = adjustString(0, toUpper)

const makeCanadian = pipe(
  toLower,
  askNicely,
  sayPlease,
  capitalizeFirstLetter,
  stopExclaiming,
  trim,
)

const result = makeCanadian('Give me a coffee!')

console.log(result) // Please may I have a coffee? :)
