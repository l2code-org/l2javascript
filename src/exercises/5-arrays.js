/**
 * Creates an array with a, b and c as elements
 *
 * @example
 * createArray(1, 2, 3) // [1, 2, 3]
 */
function createArray (a, b, c) {

}

/**
 * Returns the first element in the list
 *
 * Should return null if list is empty
 *
 * @example
 * head([1, 2, 3]) // 1
 * head([]) // null
 */
function head (list) {

}

/**
 * Returns the list without the first element
 *
 * Should not mutate the list
 *
 * @example
 * tail([1, 2, 3]) // [2, 3]
 */
function tail (list) {
  // see
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  //
  // how are these different? which should be used here? why?
}

/**
 * Returns true if list is an array of even numbers
 * Otherwise returns false
 *
 * @example
 * isEven([1, 2, 3]) // false
 * isEven([2, 4, 6]) // true
 * isEven('hello') // false
 */
function isEven (list) {
  // hint
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
}

/**
 * Returns two lists, concatonated together
 * Should not mutate the original list
 *
 * @example
 * concat([1, 2], [4, 3]) // [1, 2, 4, 3]
 */
function concat (a, b) {

}

export {
  createArray,
  head,
  tail,
}
