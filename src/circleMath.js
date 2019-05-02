var Formulae;
(function (Formulae) {
    var PI = 3.14;
    function calculateCircumference(daimeter) {
        return daimeter * PI;
    }
    Formulae.calculateCircumference = calculateCircumference;
})(Formulae || (Formulae = {}));
