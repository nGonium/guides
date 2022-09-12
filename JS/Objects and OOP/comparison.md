# Comparisons

## Plain singleton

```javascript
const john = {
    firstName: "john",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    sayName() {
        console.log(`Hi I'm ${this.fullName}`);
    },
}
```

## Factory

### With private variables

This uses closures: `firstName` and `lastName` are not properties of the object itself and cannot be referenced with `this`. The setter, therefore, affects the variables in the closure, not properties except for the `fullName` property itself.
```javascript
function person(firstName, lastName) {
    const obj = {
        get fullName() {
            return `${firstName} ${lastName}`;
        },
        set fullName(name) {
            [firstName, lastName] = name.split(' ');
        },
        sayName() {
            console.log(`Hi I'm ${this.fullName}`);
        },
        get firstName() {
            return firstName;
        }
    }
    return obj;
}
const john = person('John', 'Doe');
```

### With prototypal inheritance
Functions similarly to a constructor but doesn't use `new`.
```javascript
const personPrototype = {
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    sayName() {
        console.log(`Hi I'm ${this.fullName}`);
    },
}
function person(firstName, lastName) {
    const obj = Object.create(personPrototype);
    obj.firstName = firstName;
    obj.lastName = lastName;
    return obj;
}
const john = person('John', 'Doe');
```

## Constructor / ES5
```javascript
function Person(firstName, lastName) {
    if(!new.target) {
        return new Person(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
}
Object.defineProperty(Person.prototype, "fullName", {
    get: function fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set: function fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
})
Object.prototype.sayName() {
    console.log(`Hi I'm ${this.fullName}`);
}
const john = new Person('John', 'Doe');
```


## Class / ES6
Methods, including getters and setters, are created on the `prototype` itself by default if declared outside of the constructor.
```javascript
class Person {
    constructor(firstName, lastName) {
        if(!new.target) {
            return new Person(firstName, lastName);
        }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
    sayName() {
        console.log(`Hi I'm ${this.fullName}`);
    }
}
const john = new Person('John', 'Doe');
```
