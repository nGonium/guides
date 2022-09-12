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