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
var Formulae;
(function (Formulae) {
    var PI = 3.14;
    function calculateRectangle(width, length) {
        return width * length;
    }
    Formulae.calculateRectangle = calculateRectangle;
})(Formulae || (Formulae = {}));
/*

    Since we have moved the respected method to respected files.
    we can merge the code into single file while compiling to js by typing below command
    `tsc --outFile app.js src/rectangleMath.ts src/circleMath.ts src/app.ts`
    Note that the file names must be in order.
    Now check the app.js file, all the code will be bundled together.

*/
/*

    Instead of doing the above things, we can import the files with the namespaces.
    
*/
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
// 1st variation
console.log(Formulae.Circle.calculateCircumference(2));
console.log(Formulae.calculateRectangle(10, 20));
// 2st variation
var circeMath = Formulae.Circle;
console.log(circeMath.calculateCircumference(3));
