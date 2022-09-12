class Employee {
    // Instance properties
    constructor(firstName, lastName, salary) {
        this.name;
        this.salary;
    }
    // Prototype functions
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        const nameArr = name.split(' ');
        this.firstName = nameArr[0];
        this.lastName = nameArr[1];
    }
}





