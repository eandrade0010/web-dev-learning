# Book 1: Up and Going
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
- The `<`, `>`, `<=`, and `>=` are considered relational comparisons.
- Strings can be compared for inequality using alphabetical rules.
  - If one or both of the values not a string, values are coerced to numbers.
  - Will fail if certain types cannot be coerced to a number

### Variables
- Identifiers must start with `[az]`, `[AZ]`, `$`, or `_`, only after can `[09]` be used.
- Certain words CANT be used as variable names, but can be used as property names.
  - E.g., `for`, `in`, `if`, `null`, `true`, `false`

#### Function Scopes
- Use `var` for any variable in a scope

##### Hoisting
- A `var` can be "hoisted", or, moved to the top of its enclosing scope.
- Much more common and accepted to use hoisted function declarations, namely, calling a function or variable BEFORE its formal declaration.

##### Nested Scopes
- A `ReferenceError` is thrown if you try to access a variable outside of a scope.
- If you do not declare a variable, any setting of a variable will created a variable in the top-level global scope (NOT GOOD!!!!!).
  - ALWAYS DECLARE variables
- ES6 permits declaring variables to individual blocks within a function using the `let` keyword.
  - E.g,
  ```javascript
  function foo() {
    if (..) {
      let b = ..;
      while (..) {
        let c = ;
      }
    }
  }
```

### Conditionals
- JavaScript uses `if`, `else if`, `else`
- Switching is available, in the following form:
```javascript
switch (a) {
  case 2:
    // something
    break;
  case 10:
    // do something
    break;
  default:
    // fallback
}
```
- Note: the break is used because the condition will fall through.
- JavaScript also uses a "conditional operator", or, "ternary operator". It is a concise `if...else` statement:
`var b = (a > 41 ) ? "hello" : "world";`
  - `b` will be set to ``"hello"`` if the condition is met, or `"world"` if not.

### Strict Mode
- You can specify the use of strict mode within a scope using the `"use strict";` declaration.
- If code fails in this mode, there is most likely something wrong with the program

### Functions as Values
- A variable can be set as a function, whether it is anonymous--i.e., `function() {};`--or it has a name--`function bar() {};`.

#### Immediately Invoked Function Expressions (IIFEs)
- This a way to define a function and call it right away.
  - E.g.,
  ```javascript
  (function foo() {..})();
  ```

#### Closure
- We can return an inner function within an outer one. Then run the function being referenced.

##### Modules
- Closures are most commonly used for the module pattern. Allows you to define private implementation.

### `this` Identifier
- If a function has the `this` identifier, it is usually pointing to an `object`.
- Use of `this` depends of how the function was called, i.e., what it is pointing to.

### Prototypes
- Prototyping is linking to an object from another. The new object is created and linked as follows:
```javascript
var foo = {
  a: ..;
};
var bar = Object.create( foo );
bar.b = "Hello World";
bar.a; // ..
```

### Old and New
How to "bring" newer features of JS to older browsers??

#### Polyfilling
- Refers to taking the definition of a newer feature and producing a piece of code that's equivalent to the behavior!

#### Transpiling
- Refers to converting newer code into older code equivalents.
- Transpiling = transforming + compiling
- Some great transpilers:
  - Babel: ES6+ to ES5
  - Traceur: ES6, ES7, + into ES5

#### Non-JavaScript
- Several mechanisms are NOT provided by the JS engine and are actually handled by the browser.
  - E.g.: `alert(..)`, `console.log(..)`. These mechanisms are hooked to the developer tools by the browser!

## Chapter 3
- Provide a summary of what is to follow

### Scope and Closures
- JS engine compiles code right before (and sometimes during!?) execution.
- Closure is perhaps the most important concept in JS
  - Prioritize understanding of module pattern

### `this` and Object Prototypes
- `this` keyword is NOT bound to the function in which it is executed. It is dynamically bound based on HOW it is executed.
- Object prototype system works through "behavior delegation".

### Types & Grammar

### Async & Performance
- Callbacks are the primary method of enabling asynchrony. HOWEVER, it has deficiencies, namely:
  1. Inversion of Control trust loss
  2. Lack of linear reason-ability
- Attempts to solve issue using promises and generators
  - Promises are time-independent wrappers for a "future value". Solves IoC trust issues by routing callbacks effectively
  - Generators can be paused at yield points and resumed asynchronously later.

### ES6 & Beyond

# Book 2: Scope and Closures
## Foreword
## Chapter 1: What is Scope?
- A program's *state* is its ability to store values and access values from variables
- Where are variables stored?!
- Scope is the set of rules for storing variables.

### Compiler Theory
- JavaScript is typically grouped with "dynamic" or "interpreted" languages but it is a compiled language.
- Traditional compiled-language process: source code undergoes the following three steps--i.e., compilation.
  1. Tokenizing/Lexing: the fragmented chunks are called tokens. E.g., `var a = 2;` would be broken up as `var`, `a`, `=`, and `2`. Lexing is focused on determining whether a chunk is a distinct token are part of another.
  2. Parsing: taking stream of tokens and turning it into a tree of nested elements--called "AST" or the Abstract Syntax Tree.
    - E.g., tree for `var a = 2;` might start with a `VariableDeclaration` node and a child node called `Identifier` and another child called `AssignmentExpression` which has its own child `NumericLiteral`
  3. Code-generation:

### Understanding Scope
- There are several players in compilation
  1. Engine: responsible for compilation and execution
  2. Compiler: parses and generates code
  3. Scope: collects and maintains a look-up list of all declared identifiers

#### Back and Forth
- In approaching `var a = 2;`:
  - Compiler handles lexing to break down the statement into tokens, then parsing it into a tree. Compiler then handles code-generation as follows:
    1. Compiler asks scope to see if variable `a` exists for that scope collection. If not, it asks Scope to declare it.
    2. Compiler then produces code for engine to later execute. Engine will ask scope if the variable is accessible within the current scope collection. If not it will look elsewhere.
  - In summary, compiler declares a variable if not previously declared and engine will look up the variable.

#### Compiler Speak
- Two types of look-ups by the engine: "LHS" or "RHS", which refers to the side of assignment operation.
- You can think of RHS as "go get the value of"
- In contrast, `a = 2;` is a LHS reference because the value is not important, we just need to find the variable as the target for the `= 2` assignment operation.
- "Who's the target of the assignment (LHS)" and "who's the source of the assignment (RHS)".

#### Engine/Scope Conversation

#### Quiz
- Consider the function:
```javascript
function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );
```
- RHS:
  1. `foo( )` is asking for the value of foo
  2 & 3. `a + b` is looking for `a` and `b`
  4. `a` in `= a` is looking for source of assignment
- LHS:
  1. `..( 2 )` is implicitly assigning the value to `a`.
  2. `var b` is looking for b
  3. `var c` is looking for c

### Nested Scope
- The engine will look for a reference from inside-out through scope

#### Building on metaphors
- Building is hierarchy of scopes, with each floor up being an outer scope

### Errors
- In not in "Strict-mode" and the variable can't be found within any scope using LHS then the global scope will create one.
- `ReferenceError` is scope related and `TypeError` designates that scope resolution was successful and an impossible or illegal action was attempted with the result.

### Review
- RHS: retrieving the value of a variable

## Chapter 2: Lexical Scope
- The most commonly used is lexical scope

### Lex-time
- Lexing (or tokenizing) is the first traditional phase of a standard language compiler. It assigns semantic meaning to tokens (chunks).

#### Look-ups
- The inner scope's variable takes precedence! Works upward until first math.
- You can reference global variables as properties of the global object. E.g., `window` in browsers: `window.a`.
  - Helps access a global variable that is being shadowed

### Cheating Lexical
- Leads to poor performance
- Can be performed using two mechanisms

#### `eval`
- Takes a string as an argument and and treats it as if it had been authored code.
  - Programmatically generate code inside the authored code and run it
- Example:
```javascript
function foo(str, a) {
  eval(str);
  ..
}

foo ("var b=3;", 1);
```
will run the string and create a variable b in `foo`'s scope.
- In strict mode (`"use strict";`) the `eval` will create its own scope and not modify the enclosing scope
- Degradates performance!

#### `with`
- Takes an object with zero or more properties and treats the object as if it is a wholly separate lexical scope.
- Objects scopes then have identifiers

#### Performance
- During the optimization, the engine seeks to pre-determine where all variable and function declarations are. When finding a `eval` or `with` they now assume invalid assumptions, leading it to slow down.

### Review
- Lexing allows engine to be able to know where and how all identifiers are declared, and to predict how they will be looked up during execution.
- `eval` modifies existing leixcal scope at runtime and `with` will create a new scope where object's properties are scoped identifiers.

## Chapter 3: Function vs Block Scope
- Can other structures create "bubbles of scope?"

### Scope from Functions

### Hiding in Plain Scope
- Rather than declare a function, THEN add code. Think of a function as a wrapper, to "hide" variables and functions.
  - Complies with the principle that you should only expose what is minimally necessary and hide everything else.

#### Collision Avoidance
- You can use the same identifiers by declaring the variable within a nested scope!

##### Global Namespaces
- Objects can be used as namespaces for libraries so that no variable collision occurs! This is done by making them properties of the objects.

##### Module Management

### Functions as Scopes
- By defining and calling a function you are treating it as a function expression rather than a standard declaration...?
  - So the identifier is only found within its block, not in the outer scope.

#### Anonymous vs. Named
- Function expressions can be anonymous BUT function declarations cannot omit the name.
- Drawbacks to anonymous functions:
  1. No useful name, making debugging difficult
  2. Self-referencing is an issue
  3. Name could help describe code
- Inline function expressions, i.e., giving the function expression a name

#### Invoking Function Expressions Immediately
- Enclosing the function with a `()` makes the function an expression with the tail `()` executing it immediately.
- Don't need names, but good practice!

### Blocks as Scopes
- Useful to use a variable only within a certain block!
- JavaScript has no facility for block scope but, you can use...

#### `with`
- Scope created from the object only exists in the `with` statement and NOT the enclosing scope

#### `try`/`catch`
(https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md#trycatch)
