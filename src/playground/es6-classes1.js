

class Person {
    constructor(name = 'Annonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi ' + this.name
        return `Hi I'm ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
             description += ` Major: ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();        
        if(this.homeLocation) greeting += ` I'm visiting from ${this.homeLocation}`;
        return greeting
    }
    
}



const me = new Student('Yoav Gecht', 36, 'Environment Science');
console.log(me.getDescription());

const test = new Student('Test', 30);
console.log(test.hasMajor());

const traveler1 = new Traveler('Yoav', 36, 'Tel Aviv');
const traveler2 = new Traveler('Yoav', 36);

console.log(traveler1.getGreeting());
console.log(traveler2.getGreeting());
