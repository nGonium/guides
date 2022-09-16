Type: creational

A factory takes arguments and uses them to create other objects. It can use these arguments to create different kinds of objects using the same factory function.

## Example: element factory
Creates an element object based on mandatory tag and optional properties (attributes, classes or text content)
```javascript
function ElementFactory(tag, properties) {
    const el = document.createElement(tag)
    for(prop in properties) {
        const val = properties[prop]
        prop === 'text'      ? el.textContent = val
        : prop === 'classes' ? el.classList.add(val)
        : val === true       ? el.setAttribute(prop, '')
        : val === false      ? el.removeAttribute(prop)
        :                      el.setAttribute(prop, val)
    }
    return el
}

const span = ElementFactory('span', {
    text: 'Hello World!',
    classes: ['example', 'example-span'],
    id: 'very-specific-id',
    name: 'hello-world',
    checked: true, 
})
```