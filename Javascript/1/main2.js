//ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// membuat instance dari person
const person1 = new Person("John", 30);
const person2 = new Person("Joy", 24);

console.log(person1.name); //output : John
console.log(person2.name); //output : Joy

person1.eat(); // output : john is eating
person2.eat(); // output : joy is eating
