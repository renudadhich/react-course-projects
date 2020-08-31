class Person {
   constructor(name ="anonymous", age = "25") {
       this.name = name;
       this.age  =age;
   }
   getDescription() {
       return `this is ${this.name} and${this.age} years old. `;
   }
}
class Student extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.location) {
            description += `and located at ${this.location}`;
        }
        return description;
    }
}
const me =  new Person('renu','26');
const student1 = new Student('re','78','banga');
console.log(me);
console.log(student1.getDescription());