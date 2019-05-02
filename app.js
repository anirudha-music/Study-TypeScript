var Formulae;
(function (Formulae) {
    var PI = 3.14;
    function calculateRectangle(width, length) {
        return width * length;
    }
    Formulae.calculateRectangle = calculateRectangle;
})(Formulae || (Formulae = {}));
var Formulae;
(function (Formulae) {
    var PI = 3.14;
    function calculateCircumference(daimeter) {
        return daimeter * PI;
    }
    Formulae.calculateCircumference = calculateCircumference;
})(Formulae || (Formulae = {}));
console.log(Formulae.calculateCircumference(20));
console.log(Formulae.calculateRectangle(10, 20));
