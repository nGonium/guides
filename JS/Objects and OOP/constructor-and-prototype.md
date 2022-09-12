# Constructor

To create multiple objects with the same template, we can use a constructor function. The function alway starts with a capital letter and is called with the `new` keyword. 

## New, this and properties

`new` creates an empty object and assigns it to `this`. Thus its properties are set with `this.propName`. When the function is finished (it has constructed the object), `this`, the object, is automatically returned. Because we might forget to call the function with `new`, we should add a test to check whether this has happened and 'add it in' if `new` wasn't used. 
```javascript
function Person(name) {
    // Test  if called with new
    if(!new.target) new Person(name);
    // Assign properties
    this.name = name;
}
// Instantiate
const person1 = new Person('John')
```

## Return

The constructor always returns an object, usually `this`, however if we `return` and object manually inside the constructor, that object overrides `this`. An empty `return` or returning a primitive gets ignored, `this` is still returned. 
```javascript
function Person(name, number) {
    this.number = number
    const obj = {};
    obj.name = name;
    return obj; // Allowed and works as expected
    // Returns as below are allowed, but would be completely ignored
    return;
    return 5;
}
```
