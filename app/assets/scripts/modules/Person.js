class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;;
    }

    greet() {
        console.log("Hello " + this.name + ' ' + this.surname);
    }


}


export default Person;