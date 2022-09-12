# Factory and modular functions

We can use functions that aren't constructor functions to create objects for us. This way we don't have to instantiate them with `new` and can use them like any other function. They're also more flexible than constructor functions and `class`. However, they may be less intuitively written than `class`. Note that `class` essentially uses constructor functions and hides a lot of its abstractions, making it easier to read but more prone to bugs that are harder to resolve. Refactoring can also become an issue with constructors.

## Factory function

We construct a factory function like any other function, it returns an object with the parameters that we want to be publicly available. Due to the way scope and closure work, parameters that aren't returned are still accessible by the functions *within* the factory function. If we return those functions, we can still run those functions outside of the function scope just fine. We can  use this to create private functions and parameters. These are useful because many functions (e.g. helpers) should not be directly accessed or invoked by other functions. Private functions allow the object to handle its own state.

```javascript
const factory = ( args, privateVar ) => {
    myFunc = () => console.log(`Hi, this func with ${args}, ${privateFunc()}`);
    privateFunc = () => return 'this is private: ' + privateVar;
    return { args, myFunc }; // Return only public variables and funcs
};
const joeFactory = factory('an arg', 'a private var');
// This works because myFunc is publicly available and has access to all private functions and vars
joeFactory.myFunc(); 
// Doesn't work because neither were returned in the object and thus are private
console.log(joeFactory.privateVar) 
console.log(joeFactory.privateFunc())
```

## Inheritence and prototypes

Factory functions can still use prototypes and inheritence. Any object can have its prototype set using `Object.assign({}, theProtoType, { propsFromThisObject })`. Alternatively, if we just want to use parts of a different object or prototype, we can use object deconstruction. `Object.assign()` takes a `target` as its first argument, in this case an empty object `{}`. For each following argument (objects), it takes the enumerable own properties and adds them to the target object. New properties overwrite old ones. It then returns the new object. 
```javascript
const protoPerson = (name) => {
    const sayName = () => {
        console.log(name);
    };
    return {sayName};
};
const person = (name) => {
    const prototype = protoPerson(name);
    const setName = (newName) => {
        name = newName;
    }
    return Object.assign({}, prototype, {setName});
};
const p = person('John Doe')
console.log(p);
```


