# ES6 Modules

ES6 introduced `import` and `export`, which allows us to import and export code between separate JS files. Specifically, `export` exports a value, which is often assigned to a variable. We can set a `default` export, or use `{}` to export specific functions. 
```javascript
function foo() {
    return 'foo'
}
function bar() {
    return 'bar'
}
export {
    default bar,
    foo 
}
```
We can import this into a different file, note that if the module is in a different folder then we'll need a path. For example `from ./module` would refer to `module.js` in the root folder.
```javascript
import { foo } from 'module-name'
foo()
```
We can also use an alias for the function, by using `as`
```javascript
import { foo } as fooAlias from 'module-name'
fooAlias()
```