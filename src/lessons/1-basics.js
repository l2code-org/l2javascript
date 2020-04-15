// NOTE:
// to run a file in `nodejs`, you can use the command:
// `node <file_path>`
//
// for example, to run this file from the root of the project (i.e. the l2code-js directory)
// use the following command:
// `node src/lessons/1-basics.js`

/************************/
/*        blocks        */
/************************/

// braces can be used to create a `block`
{
  // I am in a new block
  // a block defines "scope"
  // we will talk more about scope in a second
}

/************************/
/*      variables       */
/************************/

// variables are a way of creating a reference to a value (i.e. data)
// when you declare a variable like this:
var a
// you are creating a new reference
// we did not point the reference at anything, so it is considered `undefined`

console.log(`a: ${a}`) // undefined

// you can initialize `a` by assigning a value to it
a = 2
console.log(`a: ${a}`) // 2

// or you could initialize a variable when you declare it
var b = 2
console.log(`b: ${b}`) // 2

// the `var` keyword is the original way of declaring a variable in javascript
// people often choose to use `let` or `const` instead now

{ // block A
  var myVar = 5
  console.log(`myVar: ${myVar}`) // 5
  {
    console.log(`myVar: ${myVar}`) // 5
  }
}
console.log(`myVar: ${myVar}`) // 5

// you can see that we could access `myVar` in this scope, even though it was defined in
// the scope of block "A"

// the `let` keyword was introduced in `ES2015` (also known as `ES6`),
// a recent version of javascript
{ // scope i
  let myLetVar = 6
  console.log(`myLetVar: ${myLetVar}`) // 6
  { // scope ii
    console.log(`myLetVar: ${myLetVar}`) // 6
  }
}
console.log(`myLetVar: ${typeof myLetVar}`) // undefined
// NOTE: we are using `typeof` here because if we tried accessing the value of myLetVar
// it would throw an error

// you can see that we cannot access myLetVar outside of the scope it was defined in
// when we define scope (ii) inside of scope (i), we can see
// it still has access to `let` variables defined in scope (i)

const myConstVar = 8
console.log(`myConstVar: ${myConstVar}`) // 8

// variables defined with `const` have all the same properties of the `let` keyword
// (can't be accessed from a higher scope)
// they also can't be re-bound to another value
// the following would produce an error:
// myConstVar = 2

// NOTE: this does not mean that you cannot mutate the value
// TODO: move further up
