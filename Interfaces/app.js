"use strict";
function greet(person) {
    console.log('Hello, ' + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anirudha';
}
var person = {
    firstName: 'Max',
    age: 27,
    hobbies: ['cooking', 'sports'],
    greet: function (lastName) {
        console.log(lastName);
    }
};
greet(person);
changeName(person);
greet(person);
person.greet('Mahale');
// greet({firstName: 'Anirudha', age: 20, hobbies: ['cooking', 'sports']})
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = 'Anirudha';
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var me = new Person();
me.greet('Mahale');
var doubleFunction;
doubleFunction = function (val1, val2) {
    return val1 + val2;
};
console.log(doubleFunction(20, 40));
