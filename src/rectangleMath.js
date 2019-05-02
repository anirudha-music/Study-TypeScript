"use strict";
var Formulae;
(function (Formulae) {
    var PI = 3.14;
    function calculateRectangel(width, length) {
        return width * length;
    }
    Formulae.calculateRectangel = calculateRectangel;
})(Formulae || (Formulae = {}));
