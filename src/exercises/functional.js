import R from 'ramda'

import { add, multiply, divide } from './1-basics'

// Utilities

const curriedAdd = R.curry(add)

const curriedDivide = R.curry(divide)

// currying

const addThree = curriedAdd(3)

const multiplyFive = new Error('not implemented')

// composition

const addFiveAndHalve = R.pipe(
  curriedAdd(5),
  curriedDivide(R.__, 2)
)

export {
  addThree,
  multiplyFive,
  addFiveAndHalve
}
