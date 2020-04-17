// TODO: talk about `const` keyword
// A mutation is when you change a value, like so:

// declare variable called `obj`, initialize to empty object
const obj = {}

// mutate `obj`, setting property `a` to `5`
obj.a = 5

// It's interesting to note that despite the fact we declared the variable
// `const`, we were still able to mutate it.
// This is because the `const` keyword means you can't change what the
// variable is referencing, not that you cannot mutate the value the
// variable is referencing.

// Mutation is a side effect, and a particularly confusing one. Take
// this example:

{
  const alan = {
    name: 'Alan',
    occupation: 'Software Developer',
    age: 27,
  }

  function growOlder (person) {
    // person.age = person.age + 1
    person.age += 1
  }

  function maybeLoseJob (person) {
    if (person.age > 27) {
      person.occupation = 'unemployed'
    }
  }

  function getMarried (lastName, person) {
    person.name = person.name.split(' ')[0] + ' ' + lastName
  }

  growOlder(alan)
  getMarried('Thicke', alan)
  maybeLoseJob(alan)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  console.log(`a: ${JSON.stringify(alan)}`)
}

// You can see that to understand how `maybeLoseJob` will work, you
// have to know every other function that has a reference to `alan`,
// and how those functions mutate `alan`. This might not be too difficult
// to understand in 20 lines of code, but when your codebase is 100 000
// lines of code, you can see how this might be difficult to comprehend.
// There are actually entire programming languages built around the idea
// that mutations are hard to understand, and don't even let you mutate
// data at all! Instead these languages encourage you to build many small
// functions, each of which receives input and returns an entirely new
// output based on that input. These languages are often called "purely
// functional", and we will be exploring some of these concepts as we
// progress.
//
// Note: I will also be teaching some ideas from "Object Oriented"
// programming, to try to give you a holistic view. You'll find that
// all programming paradigms (Functional Programming, Object Oriented,
// etc) have their own pros and cons, and can decide for yourself what
// is the best fit for you.

{
  const alan = {
      name: 'Alan',
      occupation: 'Software Developer',
      age: 27,
  }

  const growOlder = person => ({
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    ...person,
    age: person.age + 1,
  })

  const maybeLoseJob = person => ({
    ...person,
    job: person.age > 27 ? 'unemployed' : person.job,
  })

  const getMarried = (lastName, person) => ({
    ...person,
    name: person.name.split(' ')[0].concat(` ${lastName}`),
  })

  const after = maybeLoseJob(getMarried('Thicke', growOlder(alan)))

  console.log(`b: ${JSON.stringify(alan)}`)
  console.log(`c: ${JSON.stringify(after)}`)
}
