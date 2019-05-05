"use strict";
console.log('Example of namespaces');
var MyMaths;
(function (MyMaths) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMaths.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMaths.calculateRectangle = calculateRectangle;
})(MyMaths || (MyMaths = {}));
var wrongPI = 2.19;
console.log(MyMaths.calculateCircumference(3));
console.log(wrongPI);
