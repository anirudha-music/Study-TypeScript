"use strict";
var MyMaths;
(function (MyMaths) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMaths.calculateCircumference = calculateCircumference;
})(MyMaths || (MyMaths = {}));
