## Foreword
## Preface
- It is primarily because JavaScript can be used without a firm understanding that a profound understanding of the language is elusive.

## Chapter 1
- A *statement* is comprised of *expressions*.
  E.g.: `a=b*2` is made up of four
- *Call expression* statements call a function..?

### Executing
Compiler vs interpreter:
- *Interpreting* signifies translating the code top to bottom at each run; conversely *compiling* indicates translating code to be run at a later time.
- JavaScript actually *compiles* on the fly and then runs the code.

### Trying yourself
- The `console.log(..)` statement "prints" to the user.
- `alert(..)` will print the output in a popup dialog box.
- Raw input can be solicited from the user using the `prompt(..)` function.

### Operators
- Use the keyword `var` to initialize a variable for each *scope*.
E.g.:
  `var a=20; a = a+1;`
- Idiosyncrasies:
  - `==` and `===` -> "loose-equals" and "string-equals". Similarly, `!=` and `!==`.

### Values and Types
- *Literals* are included directly in the source.
- Converting between types using *coercion*.
  - *Explicit coercion* is performed by converting beforehand, i.e., using the `Number(..)` function.
  - *Implicit coercion* is done when comparing a string representation of a number to a number. This is where the `==` (loose-equals) operator comes in handy.

### Code comments
- Useful guidelines:
  - Too many comments (e.g., one per line) usually indicates poorly written code.
  - Comments should explain why, not what--or how.
- Single-line comments: `//`
- Multiline comments: `/* */`

### Variables
- JavaScript uses *weak typing* or *dynamic typing*, which means that a variable's type can change throughout a program.
- Note: `console.log(..)` will coerce a conversion to string
- Constants should be declared at the top of a program, with underscore spacings.
  - Newest version of JavaScript (ES6) permits constant declaration using `const`.

### Blocks
- A *block* is a series of statements grouped together by a curly-brace pair, i.e. `{ .. }`
  - Note that the block does NOT need to be terminated by a semicolon.

### Conditionals
- JavaScript will "coerce" many types to `boolean` such as: `0` and `""` to `false` and to `true` otherwise.

### Loops
- `while` vs `do... while`: the difference lies in the order of conditional testing. For the `while` loop the conditional is tested BEFORE the first iteration.
  - E.g., if the conditional is false the first iteration will run with the `do...while` loop.
- The `for` loop has three clauses: the *initialization*, *conditional test*, and *update* clause.
  - E.g., `for(i=0, i<=9, i++) {..}`

### Functions

### Scope
- Basically a collection of variables and rules for how those variables are accessed by name. Each function gets it own scope, so each can have the same-named variable.
- For nested functions, the inner most scope can access its "parent's" scope.
  - A standalone function is akin to an inner scope, which is why it can access the scope of the program.

### Practice
- [X] Done

## Chapter 2
### Values and Types
- Builtin types: `string`, `number`, `boolean`, `null` or `undefined`, `object`, `symbol`(new to ES6).
- The `typeof ..` operator will define the type of value
  - Note: `typeof` is examining the value currently being stored in a variable.
- The `undefined` type can be evoked by not defining a variable, a `void` function, or a function that does not return anything.

### Objects
- Define objects as follows:
```javascript
var obj = {
  a: ..,
  b: ..,
  c: ..,
};
```
- Properties of objects can be accessed using *dot* notation or *bracket* notation (*dot* notation is preferred).
- Arrays and functions are subtypes of `object` type

#### Arrays
- Arrays are defined as:
```javascript
var arr = [
  ..,
  ..,
  ..
];
```
#### Functions

### Built-In Type Methods
- When you use a primitive vaue as an `object`, JS accesses its object wrapper counterpart. E.g. `string` wrapped by `String`

### Comparing Values
#### Coercion
- An example of implicit coercion:
```javscript
var a = "42";
var b = a*3;
```

#### Truthy and Falsy
(https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#truthy--falsy)

Falsy:
- `""`
- `0`, `-0`, `NaN`
- `null`, `undefined`
- `false`

Truthy:
- `"..."`
- `42`
- `true`
- `[ ]`, arrays
- `{ }`, objects
- `function foo()`

NOTE: The preceding only apply with coercion.

#### Equality
- Non-equality NOT equivalent to inequality
  - `==` checks for value equality with coercion allowed, and `===` does not allow coercion, hence its moniker "strict equality"--e.g., `42 === "42"` returns `false`.
- Sometimes a certain coercion will take precedent over the other and this COULD matter depending on the application.
  - Many see `===` as a more predictable comparison
- When to use `===`:
  - If either value can is `true` or `false`
  - If either value is a falsy expression, i.e. `0`, `""`, `[]`.
- When comparing objects, the comparison is actually done on the reference and NOT on the values.
  - E.g.
    ```javascript
    var a = [1, 2, 3];
    var b = [1, 2, 3];
    var c = "1,2,3";
    ```
    By default, `array` objects are coerced to `string` types. Hence
    ```javascript
    a == c; // true
    b == c; // true
    a == b; // false
    ```
    Note that the last comparison is validating if the two references are made to the same values!

#### Inequality
(https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#inequality)
