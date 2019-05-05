"use strict";
var MyMaths;
(function (MyMaths) {
    var PI = 3.14;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMaths.calculateRectangle = calculateRectangle;
})(MyMaths || (MyMaths = {}));
