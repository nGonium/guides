# Advanced objects

## Properties, more than key-value

Object properties are more than a key-value pair. Properties also have descriptors, which contain information about how the property can be used. There are 4 descriptors, or flags
* `value`: the value assigned to the property (this is not a flag, but the others are)
* `writable`: if `true`, `value` can be changed, like `let`, otherwise acts as `const`
* `enumerable`: if `true`, allows this prop to show up in loops, otherwise ignored
* `configurable`: if `true`, this property can be deleted and its descriptors can be changed. Note therefore that if it is ever changed to `false`, none of the descriptors, including `configurable` can ever be changed again. `value` is not affected by `configurable`, whether `value` can be changed is wholly determined by the `writable` descriptor.  

By default, all flags are set to true.

### Getting flags, changing descriptors

The descriptor object, which contains the value and flags, is returned by `Object.getOwnPropertyDescriptor(obj, propertyName)`.  

We can change the descriptors using `Object.defineProperty(obj, propertyName, descriptors)`. Note that any flag not in the descriptor object automatically gets changed to `false`, be careful therefore of `configurable`.
```javascript
const person = {}
person.name = 'John'
Object.getOwnPropertyDescriptor(obj, propertyName)
// => {value: 'John', writable: true, enumerable: true, configurable: true}
Object.defineProperty(person, name, {writable: true})
// => {value: 'John', writable: true, enumerable: false, configurable: false}
Object.defineProperty(person, name, {configurable: true})
// => Error, cannot change descriptors on non-configurable property
```