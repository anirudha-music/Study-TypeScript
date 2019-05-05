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
};
greet(person);
changeName(person);
greet(person);
greet({ firstName: 'Anirudha', age: 20, hobbies: ['cooking', 'sports'] });
