# Arrays

## Basics

Arrays are a data structure, whose properties consist of numeric keys. As with other data structures, the values can be anything, including other arrays and objects. Arrays have a number of useful higher-order methods.  

An array can be created using square brackets. As properties are mutable, most arrays will be `const` variables, unless you need to be able to completely reassign them. Properties can be reassigned using bracket notation or you can use functions to add and remove properties.
```javascript
const myEmptyArray = [];
const people = ['Jane', 'Sarah', 'Dave'];
const person1 = people[0]; //=> Jane
people[2] = 'David'; //=> Turns value Dave into David
```

## Functions
| Function | Description | 
| --- | --- | 
| `pop()` | Removes and returns item from the end of array | 
| `push(el)` | Adds `el` to the end of array | 
| `shift()` | Removes and returns item from the start of array | 
| `unshift(el)` | Adds `el` to the start of array | 

We can use a variety of Higher Order functions to make working with arrays faster, easier and more concise/readable. Most of these take in a function, which can be concisely written as arrow functions taking in the parameters: element, index and array.

| Function      | Args | Description |
| ---           | --- | --- | 
| `forEach()`   | (`el`, `i`, `arr`) => `no return` | Executes function for each element, but does not return anything. Exits loop if return statement is encountered. Useful for mutating array in-place or triggering side-effects on elements.|
| `map()`       | (`el`, `i`, `arr`) => `any` | Creates and returns new array where every element is replaced with the return value of the provided function |
| `filter()`    | (`el`, `i`, `arr`) => `bool` | Creates and returns shallow copy of array, but only items for which the function returns true |
| `reduce()`    | (`reduceReturnValue`, `currentItem`) => `any`, `initialValue` | For each item in the array, executes a function. The return value of that function is passed to the next execution. An optional `initialValue` may be set which takes the place of `reduceReturnValue` on first execution, otherwise `initialValue = arr[0]` | 
| `some()`      | (`el`, `i`, `arr`) => `bool`| Returns `true` if **any** function call returns `true`, else `false` |
| `every()`     | (`el`, `i`, `arr`) => `bool` | Returns `true` if **all** function calls returns `true`, else `false` |
| `includes()`  | `el` | Returns true if `el` exists in array, else false |
| `findIndex()` | `el` | Returns index of first instance of `el`, or -1 if `el` not found |
| `sort()`      | (`a`, `b`) => {`-1`,`0`,`1`} | For each element a and b of array, compares the two using sort function. If return -1, a is sorted in front of b, if 1 a is sorted in front of b, if 0 both are deemed equal. Uses UTF-16 comparison sorting from small to great if no function is given |




