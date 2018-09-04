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

Left off [here](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#code-comments)
