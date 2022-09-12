# Scope and Closure

## Scope

There are three scopes in JS since ES6, global, function and block. JS environments generally have one global scope, inside of it are functions, each of which create a function scope. Curly braces `{}` denote a block scope, meaning if-statements, loops and even functions create a block scope (in case of functions, the block and function scope are the same). Variables declared with `let` and `const` are scoped to their nearest (i.e. first enclosing) block scope, whereas ones declared with `var` are scoped to their nearest function scope. If they are not otherwise enclosed, they are in the global scope.  

Variables are accessible within their scope. Every time a scope is created, either by a function or a block, this is added to the *scope chain* of that block. In javascript, lexical scoping allows us to access variables anywhere in that chain, i.e. inner functions can reference variables that are declared in outer functions and the global scope. Whenever a variable is referenced, javascript will go through the scope chain from the innermost scope to the outermost (global) until it finds a variable that matches that name. Inner scopes can modify these values in any way, however outer scopes don't have access to variables **declared** in inner functions.  

## Closure

Whenever a function is declared, it creates a `closure`, this contains both the function itself and the variables in its lexical scope. This allows inner functions to maintain access to variables in its outer function (because they are in the lexical scope), even if the outer function has completed. In other words, functions retain their scope, regardless of what happens around them.
```javascript
const foo = function() {
    // Function scope
    x = 10;
    return function() {
        // Inner scope
        console.log(x);
    };
};
const bar = foo(); // Returns the inner function
bar(); // This runs that function
```
When bar is declared, `foo()` runs completely. However, because of closures, the inner function still has acces to `x` (`x` is in the closure) long after `foo()` completes. When `bar()` is run, it executes the function that `foo()`returned and that function has access to `x`. As a side note, we can also run that function in one line by using `()` twice, like `foo()()`.

