# Objects

## Basics

Objects are a collection of properties, each consisting of a `key: value` pair. The `key` can be any string and the `value` any data type or function. It can even be another object, allowing us to nest objects. Objects can be created using `{}`, this is called an object literal. Properties can be accessed with `.propertyName` or `['property name']` (where the property name is the `key`). The latter format uses a string and therefore allows names that wouldn't be valid JS variable identifiers. Keys themselves can be put in `[]` to evaluate the expression inside or use other variables. Properties are comma-separated, the last comma (trailing comma) is optional.
```javascript
let type = "employee";
const obj = {
    name: 'David',
    [type + ' id']: 1234, 
    address: {
        number: 12,
        'zip code': 'AA0000', // Trailing comma
    } // No trailing comma
};
obj.address.number; // => 12
obj['employee id']; // => 1234
```
Properties can be readily added or reassigned by accessing them and assigning a value, or deleted using `delete`.  
```javascript
obj.surname = 'Jones';
delete obj.address.number;
```
Because properties are so easily created, any property, even once that haven't been created, can be accessed without throwing an error. However, such properties will return `undefined`, to prevent this we can check first if properties exist using the `in` operator. Note if the property exists but was assigned the value `undefined`, `in` will still return true.
```javascript
if('non existent property' in obj) "You're wrong, JS!"
else "Property does not exist, yay!"
```
Just like in arrays, we can use `for...in` and `for...of` loops to access each key and value respectively. In fact, Arrays are a type of Object!

## Shorthand

If the key has the same name as the variable which will be used to assign its value, the value can be ignored, providing a shorthand notation.
```javascript
const name = 'Jane'
const person = {name: name}
// Becomes
const person2 = {name}
```

## Order
Properties are usually ordered in the order that they were created/added. However, properties whose keys are integers, or can be converted to integers (e.g. `40` and `"40"` but not `4.2`) will be ordered numerically. 
