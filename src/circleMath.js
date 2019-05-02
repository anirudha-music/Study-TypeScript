var Formulae;
(function (Formulae) {
    var PI = 3.14;
    function calculateCircumference(daimeter) {
        return daimeter * PI;
    }
    Formulae.calculateCircumference = calculateCircumference;
    function calculateRectangel(width, length) {
        return width * length;
    }
    Formulae.calculateRectangel = calculateRectangel;
})(Formulae || (Formulae = {}));
