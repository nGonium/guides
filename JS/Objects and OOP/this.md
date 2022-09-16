# What's `this`?

The `this` keyword in js is used to refer to an object. Which object it refers to depends on its context (some would say it *is* the context), which depends on how the function inside of which `this` is called is invoked.

Functions may be declared, referenced or invoked. The value of `this` is exclusively determined by *how* it is **invoked**. Invocation happens when a function name is followed by parentheses (which may take arguments), for example `foo()` references the function `foo` then invokes it with `()`. This is a function invocation, but a function may also instead be invoked as a method of an object, in which case it is preceded by `ObjectName.`, e.g. `foo.bar()` calls the `bar` method of `foo`, this is method invocation. The difference is important.

## Inner function

The value of `this` is exclusively determined by how the nearest enclosing function is invoked when it is invoked. It does not matter how or where it is declared. This means that `this` inside a method *declaration* may not always refer to the object of whom it is a method, since methods can be separated from their objects

### Callbacks and copies

When a method is copied/assigned to another variable, invoking it using that variable will invoke it as though the variable itself was that function. 

Here, when `obj.foo()` is invoked, it rightly gets invoked as a method, `this` then refers to the preceding object. Because no object precedes `bar()` it uses function invocation.
```javascript
const obj = {}
obj.foo = function () {
    return this
}
const bar = obj.foo
obj.foo() // => {obj}
bar() // => undefined (or Window)
```
If however we make `obj.foo()` an inner function of `bar()`, rather than a copy, `bar()` will still use function invocation but `obj.foo()` will use method invocation. 
```javascript
function bar() {
    return obj.foo()
}
bar() // => {obj}
```

This same problem occurs when a function is passed into another function as an argument, that is, the function is used as a callback. A callback function always becomes assigned to a variable and thus loses `this`. 
```javascript
function bar(callback) {
    callback() // not invoked as a method
}
bar(foo) // => undefined
```
The only way around this is by explicitly binding `this` using `bind()` or using an arrow function. If using an arrow function, we have to ensure the value of `this` in the lexical scope is correct. Arrow functions are generally preferred, but not always feasible. 

## Arrow functions

Unlike other functions, arrow functions do not need to be named and do not create a `this` when invoked. Instead they get their `this` from their lexical scope when they are **declared**. This means the value of `this` can be predicted when it is declared, and does not vary depending on how it is invoked. Note that, unlike other functions, `this` cannot be modified by any method, even methods like `call`, `apply` and `bind`. If you wish to use an arrow function, you should ensure `this` in the lexical scope is **always** what you intend it to be. Because of this, they also cannot be used with the `new` keyword and therefore cannot be constructor functions. `new` would attempt to bind `this` which wouldn't be allowed. 
```javascript
const obj = {}
function returnCallback(cb) {
    return cb()
}
obj.foo = function () {
    // if obj.foo() were invoked, 'this' would be {obj}
    // therefore 'this' in the lexical scope is {obj}
    const bar = () => this // Returns this from lexical scope, being {obj}
    return returnCallback(bar)
}
obj.foo() // => {obj}
```
For contrast, here is what would have happened if `bar` was a regular function
```javascript
const obj = {}
function returnCallback(cb) {
    return cb()
}
obj.foo = function () {
    function bar() {
        return this
    }
    // function invocation with callback
    return returnCallback(bar) 
}
obj.foo() // => undefined
```

### Important: arrow function method and lexical scope
Finding out what `this` is in the lexical scope isn't always obvious. It is important to notice that `this` takes the value of what `this` would be **outside** the arrow function, not inside (since that would be circular logic). Thus if we create an arrow function as a method on an object, `this` actually refers to the global object, not the object **on** which it is defined, since it is defined **in** the global object. For an arrow function, always look towards the outer function. 
```javascript
const obj = {}
// Declared in global object, even though it's declared on obj
obj.foo = () => this
obj.foo() // => undefined
```
## Takeaway

In regular functions, `this` depends only on how it is invoked, or modified. 
- Do not use `this` in functions should be invoked using function invocation, unless you use a modifying function when you invoke it. 
- If the function is invoked as a method, `this` refers to the object on which it is invoked. 
- If a function is called with `new`, that function is a constructor function and `this` will point to the new object created by it. 
- When a function is copied/assigned to a variable or passed as an argument (callback), it loses any `this` object reference it may have, this can be circumvented by using `bind`. 
- The `this` value is not passed on to inner functions, except to arrow functions. 

In arrow functions, `this` is always the value of `this` in the lexical scope, the outer function. It cannot be modified.

| invocation | example | this |
| --- | --- | --- |
| function | `foo()` | global object (`window`) or `undefined` if `use strict` |
| method | `foo.bar()` | object preceding `.`, being `foo` | 
| constructor | `new Foo()` | the new object created by `Foo` |