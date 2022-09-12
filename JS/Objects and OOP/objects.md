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

## Enumeration

Most properties are enumerable, meaning we can use them with a `for ... in` loop, which uses enumerable property names of the object and its prototype chain. However, functions are generally not enumerable, unless we set them as such (see Advanced Objects). We can also loop through properties by looping through the return value of `Object.keys(obj)` (returns list of all enumerable property names) or `Object.getOwnPropertyNames(obj)` (returns a list of all property names, even non-enumerable ones)

## Shorthand

If the key has the same name as the variable which will be used to assign its value, the value can be ignored, providing a shorthand notation.
```javascript
const name = 'Jane'
const person = {name: name}
// Becomes
const person2 = {name}
```

## Order of Properties
Properties are usually ordered in the order that they were created/added. However, properties whose keys are integers, or can be converted to integers (e.g. `40` and `"40"` but not `4.2`) will be ordered numerically. 

## Copying, shallow and deep

When a variable is assigned an object, it merely makes a reference to that object (shallow copy). Modifying the original object, will affect the shallow copy and vice versa. We can create a real or 'deep' copy in two ways.

### Cloning with Object.assign

If the properties of an object are assigned to the properties of another object, they are generally* real copies. We can thus create a 'deep' copy of an object by looping over the source and adding each property to the target object. This is also what `Object.assign(trgt, src1, src2, srcN)` does, but this can also take multiple source objects (the latter object props overwrite the previous). The trgt object does not need to be empty, any props that are not overwritten will remain, which also allows it to be used to 'extend' an object.
```javascript
const src = {...}
const trgt = {}
for (let ket in src) {
    trgt[key] = src[key];
}
// Same as
Object.assign(trgt, src);
```
\* If the property is an Object, it only returns a shallow copy. This can be resolved by using nested `Object.assign()` calls to create deep copies of those objects, but this is often clumsy.

### Cloning with structuredClone

Instead of creating nested `Object.assign(trgt, src)` calls, we can use `structuredClone(src)` to create a clone which deep-clones properties even if they are objects. However, the object must not have function properties. 
```javascript
const trgt = structuredClone(src);
```
