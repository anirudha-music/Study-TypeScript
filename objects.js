"use strict";
// Class 
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.print = function () {
        console.log(this.name);
    };
    return Person;
}());
var anirudha = new Person('Anirudha');
anirudha.print();
