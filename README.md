`ESLint` is a popular JavaScript linter that helps developers maintain a consistent coding style and catch potential errors. It works by analyzing your code and providing warnings or errors based on a set of defined rules. To use ESLint in your project
`Run linting`:
npm run lint

`Run linting with fixing`:
npm run lint:fix

`ESLint Configuration Rules Explanation`

Here is an explanation for each ESLint rule in the provided configuration:

Indentation:
Error if indentation is not 2 spaces.

Linebreak Style:
Error if linebreak style is not set to "unix."

Quotes:
Error for using anything other than single quotes, avoiding escape and disallowing template literals.

Semicolons:
Error if semicolons are missing.

Comma Dangle:
Error if there is no trailing comma in multiline object literals.

Comma Style:
Error if commas are not placed at the end of the last property.

No Multi-Spaces:
Error for multiple spaces, ignoring end-of-line comments.

No Unused Vars:
Error for unused variables, ignoring specified patterns.

Prefer Const:
Warning for using let or var instead of const when possible.

No Console:
Turn off the restriction for using console statements.

No Duplicate Imports:
Error if there are duplicate import statements.

Space Infix Ops:
Error for spaces around infix operators.

Arrow Spacing:
Error for spaces around arrow function arrows.

Comma Spacing:
Error for spacing around commas in parameter lists and array literals.

Space Before Function Paren:
Error for spacing before function parentheses.

Func Call Spacing:
Error for spacing in function calls.

Space In Parens:
Error for spaces inside parentheses.

Function Call Argument Newline:
Error for inconsistent newlines in function calls.

Space Before Blocks:
Error for spacing before blocks in functions and classes.

Keyword Spacing:
Error for spacing around keywords.

Brace Style:
Error for brace style not being "1tbs."

Object Curly Newline:
Error for inconsistent newlines in object literals.

Max Lines:
Error if a file exceeds 500 lines, skipping blank lines and comments.

Max Len:
Error if a line exceeds 120 characters, ignoring specific cases.

EOL Last:
Error if there's no newline at the end of the file.

ID Length:
Error if variable and function names are shorter than 2 or longer than 30 characters.

Max Lines Per Function:
Error if a function exceeds 50 lines.

No Var:
Warning for the use of the var keyword.

No Redefine:
Warning for redeclaring variables, including built-in globals.

No Shadow:
Warning for variable shadowing, including functions.

Block Scoped Var:
Warning for using var in block scope.

No Implicit Coercion:
Warning for implicit type coercion.

No Use Before Define:
Warning for using variables, functions, and classes before they are defined.

Array Callback Return:
Warning for missing return statements in array methods.

Init Declarations:
Warning for uninitialized variables (var without assignment).

No Loop Func:
Warning for functions declared inside loops using var.

No Trailing Spaces:
Error for trailing spaces at the end of lines.

Newline Before Return:
Error for a newline before the return statement.

Newline Per Chained Call:
Error for a newline per chained method call.

Object Property Newline:
Error for a newline after each property in object literals.

Operator Linebreak:
Error for placing line breaks before operators.

Spaced Comment:
Error for spaces after the // or /* in a comment.

Key Spacing:
Error for spacing between keys and values in object literals.

No Multiple Empty Lines:
Error for multiple empty lines, with a maximum of 2, and 1 at the end of the file.

Jest No Identical Title:
Error for identical Jest test titles.

Jest Valid Title:
Error for Jest test titles that are not valid.

React In JSX Scope:
Turn off the requirement to import React in JSX files.