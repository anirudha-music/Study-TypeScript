"use strict";
var Formulae;
(function (Formulae) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(daimeter) {
            return daimeter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = Formulae.Circle || (Formulae.Circle = {}));
})(Formulae || (Formulae = {}));
