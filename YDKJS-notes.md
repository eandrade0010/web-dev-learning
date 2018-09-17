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
- JavaScript in ES3 specified variable declaration in the `catch` clause to be block-scoped to that block.

#### `let`
- Introduced with ES6 and is another way to declare variables
- The `let` keyword attaches the variable declaration to the scope of whatever block (e.g., `{ .. }`) it's contained in.
- We can create explicit blocks for block-scoping to know WHICH blocks have variables scoped to them.
- Declarations with the `let` keyword will NOT hoist to the entire scope of the block they appear in. They do not exist until the declaration statement.

#### Garbage Collection
- Block scoping is useful for closures and garbage collection to reclaim memory.
- By declaring explicit blocks for variables, you can "toss" aside data afterwards

#### `let` Loops
- A variable `i` for instance will be bound to the block; and REBOUND at each iteration with its last value.

#### `const`
- Also creates a block-scoped variable with a fixed value.

## Chapter 4: Hoisting

### Chicken or the Egg?
- Does the declaration or the assignment come first?

### The Compiler Strikes Again
- Part of the compilation phase is to find and associate all declarations with appropriate scopes.
  - Both variables and functions are processed first, before execution
- `var a = 2` is actually thought of as two statements: `var a` and `a = 2;`
  - The first statement is the declaration and is processed during compilation and the assignment during execution. They are "hoisted" in their order.
- Hoisting is performed within scopes! Namely, a variable declaration in a scope will be performed first **within** that scope.

### Functions First
- Functions are always hoisted first!

## Chapter 5: Scope Closure

### Enlightenment
- Closures happen as a result of writing code that relies on lexical scope.

### Nitty Gritty
> Closure is when a function is able to remember and access its lexical scope even when the function is executing outside its lexical scope

- Closure lets the function continue to access the lexical scope it was defined in at author time.
  - This is how you can return functions, and run them later while still retaining the lexical scope.

### Now I can See
- For IIFE patterns (functions simultaneously declared and executed) are not executed outside of their lexical scope. It's invoked right in the same scope as it was declared (its enclosing scope).

### Loops + Closure
- The `let` declaration hijacks a block and declares a variable right there in the block. Using the `let` in a loop iteration will declare the variable for each declaration so that closure can close over its own separate scope!

### Modules
- A module is a function which houses functions that have closures over the scope of the module; then they returns and object with properties as these functions!
- Keeps the inner variables that these functions have from closure private.
- Two requirements for the module pattern to be exercised:
  1. Must be an outer enclosing function that is invoked at least once (to create instances)
  2. Enclosing function must return back at least one inner function so that this function have closure over the private scope
- Modules can be declared and executed at once by writing them as an IIFE.

#### Modern Modules

#### Future Modules`
- ES6 treats a file as a separate module. Each module can both import other modules or specific API members, and export their own public API members.
- NOTE: you can actually modify a module's API during rum-time
- ES6 modules APIs are static. The compiler will check during compilation for a reference to a member of an import module API. If it doesn't exist it will throw an error.
- There is no "inline" format for ES6 modules. They MUST be defined in separate files (one per module).
- `import` imports members of a module's api into the current scope, each to a bound variable. E.g., `import hello from "bar";`
- `module` will import an entire module API
- `export` will export an identifier (variable, function) to the public API for the current module

### Review
- Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope!
- Modules require:
  1. An outer wrapping function to create the enclosing scope
  2. A return value of the wrapping function must include reference to at least one inner function that has closure over the private inner scope of the wrapper.

# Book 3: `this` and Object Prototypes
## Chapter 1: `this` or That?
- The `this` keyword is a special identifier keyword automatically defined in the scope of every function

### Why `this`
- Provides a more elegant way of implicitly "passing along" an object reference!

### Confusions

#### Itself
- Misconception that `this` refers to the function itself.
- You can refer to the function itself within it as an identifier. Anonymous functions can't do this
  - Avoid anonymous functions, especially if they need to reference themselves

#### Its Scope
- Another misconception is that `this` refers to the function's scope. The answer really is ambiguous
- There is no bridge between lexical scopes of separate functions! `this` can't do it!

### What's `this`?
- `this` is a runtime binding. Has nothing to do with where a function is declared but in the manner whereby it is called.
- When a function is invoked an activation record or execution context is created.
  - I.e., information about where the function was called from (call-stack) how it was invoked, what parameters were passed, etc.
  - A property of record is `this` which is used for the duration of the function's execution.

### Review
- `this` is neither a reference to the function itself or the function's lexical scope
- it is a binding made when a function is called and what it references is dictated by the call-site where the function was called

## Chapter 2: `this` All Makes Sense Now!
- Learned that `this` is a binding made for each function invocation based on its call-site (how the function is called)

### Call-site
- Call-site: the location in code where a function is called (NOT where it is declared)
- Might be obscure, so we think about the call-stack(stack of functions called to get us to the current moment in execution)
  - Call-site is in invocation before currently executing function
- Call-stack can be list of functions executed to then lead to current invocation

### Nothing But Rules
- There are 4 rules to a call-site

#### Default Binding
- Comes from standalone function invocation
- Remember that variables declared in global scope is global object
- If you invoke a function within the global scope, `this` will point to the global scope!
  - This default binding only occurs in non strict mode!

#### Implicit Binding
- Does the call-site have a context object i.e., an owning or containing object.
- Only the top/last level of an object property reference chain matters to the call-site
  - E.g., `obj.obj2.foo();` will link to `obj2` with `this`

##### Implicitly Lost
- Sometimes the binding falls back to the default (global or `undefined`).
- Default bindings apply to plain, un-decorated calls
- Also happens when passing a callback function
  - Parameter passing is just implicit assignment

#### Explicit Binding
- You can force a function to use a particular object for the `this` binding
- All functions have utilities, `call(..)` and `apply(..)` being available methods.
  - Both take an object to use for the `this` binding and then invoke that function with the `this` specified.
- If you pass a simple primitive value (`string`, `boolean` or `number`) then the value is wrapped in its object form (`new String(..)`, `new Boolean(..)`) which is often referred to as boxing.
- Does not offer any solution to a function possibly losing its intended `this` binding

##### Hard Binding
- Since hard binding is such a common patter, it is a built-in utility
  - E.g., `function.bind(obj)` will bind the `obj` to the `function` so that `obj` is referenced by `this` in the function.

##### API Call "Contexts"
- Many new built-in functions provide an optional parameter called "context" which obviates having to use

#### `new` Binding
- In a traditional class-oriented language, a constructor is a special method attached to a class. Upon instantiation the constructor is called
  - E.g., `something = new MyClass()`
- In JS, constructors are functions that happen to be called with the `new` operator. Not attached to classes and are not instantiating a class. They are functions hijacked by invocation of `new`
- There is no constructor functions, but construction calls of functions.
- When a function is invoked with `new`:
  1. a brand new object is created
  2. newly constructed object is `[[Prototype]]` linked
  3. Newly constructed object is set as the `this` binding for that function call
  4. Unless the function returns its own alternate object, the `new` invoked function will automatically return the newly constructed object
- Example:
```javascript
function foo(a) {
  this.a = a;
}

var bar = new foo(2);
console.log(bar.a);
```

### Everything in Order
- Precedence of implicit or explicit binding?
  - From testing, explicit takes precedence
- New binding is more precedent than implicit binding, however, does it take precedence over explicit binding!?
- `new` and `call`/`apply` cannot be used together.
- Hard binding (form of explicit binding) is more precedent than new binding.
  - Looks like `new` will override the hard bound
- Utility of overriding hard binding:

#### Determining `this`
Summary of rules:
1. Is the function called with `new` then `this` references the newly constructed object.
2. Is the function called with `call` or `apply` (explicit binding), even hidden inside a hard finding? If so `this` is the explicitly specified object
  - `var bar = foo.call( obj2 )`
3. Is the function called with a context, `this` is that context object.
  - `var bar = foo.call( obj2) `
4. Otherwise `this` defaults to `undefined` in `strict mode` or `global object`.
  - `var bar = foo()`

### Binding exceptions

#### Ignored `this`
- If you pass `null` or `undefined` in the `call`, `apply`, or `bind`, the binding defaults
- Note: curry parameters (pre-set values)
- Passing `null` might lead to problems with third-party library functions so the `this` reference will lead to the `global` object?

#### Safer `this`
- Passing a setup object, one that won't create any problems.
  - Call this a "DMZ" (de-militarized zone) object which is a completely empty and non delegated object.
    - This will insulate the program's `global` object
- The empty object is created using `Object.create(null)` and because it is not delegating to `Object.prototype` it is more empty than using `{ }`

#### Indirection
- This happens when you create "indirect references" to functions, which leads to the default binding rule.
  - E.g.: `p.foo = o.foo` would be referencing the underlying function object so it will be calling `foo` and NOT `p.foo()` or `o.foo()` --> default binding

#### Softening Binding
- The impetus is the need for flexibility, i.e, later binding, without default binding.
- The `softBind(obj)` can be manually `this`-bound but will fall back to the default binding (defined by the first invocation of `function.softBind(obj)`).

### Lexical `this`
- An arrow function (introduced by ES6) does NOT use the rules
- Arrow-functions are signified by the `=>` operator.
  - In these functions, `this` will adopt the `this` binding from the enclosing scope
- Can't be overridden (even with `new`)
- If you find yourself writing `this`-style code but use `self=this` or arrow-function tricks, try:
  1. Using only lexical scope, namely, avoid `this`-style coding
  2. Embrace `this` completely and employ its mechanisms: `bind(..)`, etc.
  - Both can be used, BUT within the same function and should not be mixed (NOT CLEVER).

### Review
- Rules with order of precedence, `this` refers to:
  1. newly constructed object if called with `new`
  2. object specified by `call` or `apply`
  3. context object if the context object owns the call
  4 `undefined` in `strict mode` or global object for default
- Using a "DMZ" object created using `Object.create(null)` is a good placeholder that insulates the `global` object
- ES6 arrow functions use lexical scoping for `this` binding. I.e., they adopt the `this` binding from its enclosing function call.
  - Replacement of `self=this`

## Chapter 3: objects
- What are objects?

### Syntax
- Objects come in two forms
  1. Declarative (literal) form
    - ```javascript
    var myObj = {
      key: value
    };
    ```
  2. Constructed form
    - ```javascript
    var myObj = new Object();
    myObj.key = value;
    ```
  - The first form is more common

### Type
- Objects are one of the 6 primary ("language") types in JS, along with: 1. `string`, 2. `number`, 3. `boolean`, 4. `null`, 5. `undefined`, and 6. `object`
- The other 5 are not objects
- "Everything in JS is [not] an object". There are a few special object sub-types that are referred to as complex primitives
  - `function` is a subtype of object (a "callable object").
    - said to be first class
  - arrays are also objects

#### Built-in Objects
- These include: `String`, `Number`, `Boolean`, `Object`, `Function`, `Array`, `Date`, `RegExp`, and `Error
  - Actually built-in functions that can be used as constructors, with `new`
- JS will coerce a primitive to its object type to perform necessary operations.

### Contents
- Contents of an objects are stored at specific properties, i.e., locations
- These values are NOT stored inside the object, only their property names are which as pointers (references) to where the values are stored.
- Two ways to access the value at the location (property) of the object, using the .operator or the `[ ]` operator. The latter is referred to as "key" access and is akin to dictionary implementation.
  - The `.` operator requires an `Identifier` compatible property name whereas the latter operator can use any string as the name for a property even if it is not a valid `Identifier` property name
  - Because the `[ ]` operator uses a string's value to specify the location, the program can programmatically build up the value of the string.
    - E.g. ```javascript
    var myObject = {
      a: 2
    };
    b = "a";
    console.log(myObject[b]); // 2
    ```
  - In objects property names are always strings

#### Computed Property Names
- ES6 adds the ability to specify an expression surrounded by a `[ ]` pair in the key-name position of an object-literal declaration
  - E.g., `var myObject = { [prefix+"bar"]: "hello"};`

#### Property vs Method
- Functions that belong to objects are methods
- Some functions have `this` references in them and these MIGHT refer to the object but because `this` is dynamically bound at run-time, at the call-site, its relationship to the object is indirect
- One might say that a function becomes a method during run-time just for that invocation.
  - Function and method are interchangeable

#### Arrays
- Also use the `[ ]` access form, but they assume numeric indexing.
- Because arrays are objects, they can also own properties.
  - Does not change `length` of array
- If you try to  add a property to an array but the property name looks like a number, it will end up as a numeric index

#### Duplicating objects
- The difference between shallow vs. deep copies. The former duplicates references and the latter duplicates that being referenced
- A subset solution is objects which are JSON-safe--i.e., they can be serialized to a JSON string and then re-parsed to an object with the same structure and values
- Shallow copies are straight forward
  - ES6 defined `Object.assign(..)` for this task. It takes a target object as its first parameter and one or some source objects as subsequent parameters.
  - This is purely `=` style assignment, so any special characteristics of a property on a source object are not preserved

#### Property Descriptors
- As of ES5 all properties are described in terms of a property descriptor
- Can be observed by using `Object.getOwnPropertyDescriptor( myObject, property);`
- It is also possible to define the descriptors or modify existing ones if they are configurable using `Object.defineProperty( myObject, property);`

##### Writable
- `TypeError` will tell us we cannot change a non-writable property

##### configurable
- Means we can modify descriptor definitions
- Changing `configurable` to `false` is a one-way street when using the `Object.defineProperty( myObject, myProperty);`
- There IS an exception: even if the property's `configurable` definition is `false`, `writable` can be changed from `true` to `false`; BUT not back to `true` if `false`
- `delete` also does not work if `configurable` is `false`
- if an object property is the last reference to some object or function, `delete` will remove the reference, and then the unreferenced object or function can be garbage collected

##### Enumerable
- Designates whether or not a certain object-property will show up in enumerations

#### Immutability
- All the approaches create shallow immutability, i.e., they affect only the object and its property characteristics. If an object has a reference to another object, the contents of that object remain mutable.
- May not be desirable to seal or freeze all objects

##### Object Constant
- Combining `writable: false` and `configurable: false`

##### Prevent Extensions
- Using `Object.preventExtensions` will prevent any properties from being appended to an object

##### Seal
- `Object.seal(..)` creates an object while preventing extension and disallowing configuration

##### Freeze
- `Object.freeze(..)` seals an object but also makes `writable: false`
- Still does not affect objects being referenced to within the object's properties

#### `[[Get]]`
- Accessing a property via the identifier is not as simple
- the `[[Get]]` operator (sort of like a function call) is called on the object and FIRST inspects the object for that property. If it does not find the property it will do something next, but the result will be `undefined`.
- Can't tell if a property exists and holds the explicit value `undefined`

#### `[[Put]]`
- If a property is already present, the operation will check:
  1. Is property an accessor descriptor? If so call the setter
  2. Is property a data descriptor with `writable:false`? If in non-strict mode, silently fail or throw `TypeError`
  3. Otherwise set value to existing property

#### Getters & Setters
- ES5 introduced a way to override part of the aforementioned default operations
- Getters are properties which call a hidden function to retrieve a value and setters are properties which call a hidden function to set a value
- If a property has a getter and/or setter it becomes a "accessor descriptor" as opposed to "data descriptor"
- A getter can be defined in object-literal syntax with `get a() { .. };` or through explicit definition with `defineProperty()`. Both depend on a hidden functions

#### Existence
- You can ask if a certain property exists for an object wWITHOUT asking for the property's value: `("a" in myObject)` will return a boolean.
  - `myObject.hasOwnProperty("a");` may also be used. This one will not consult the `[[Prototype]]` chain
- Because sometimes it is possible to create an object unlinked to `Object.prototype` the `myObject.hasOwnProperty()` would fail
  - More robust to use `Object.prototype.hasOwnProperty.call(myObject, "a")` which uses explicit binding against the object

##### Enumeration
- Enumerable means that the property will be included if properties are iterated through
- Keep in mind that `for..in` loops will loop through any enumerable properties that might exist for an array--better to use `for` loops with numeric index iteration
(https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md#enumeration)
