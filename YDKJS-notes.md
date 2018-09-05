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
With that in mind, let's try practicing some of the concepts we learned here in this chapter. I'll give the "requirements," and you try it first. Then consult the code listing below to see how I approached it.

[ ] Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
[ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
[ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
[ ] You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
[ ] Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
