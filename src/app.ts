/*

    Since we have moved the respected method to respected files.
    we can merge the code into single file while compiling to js by typing below command
    `tsc --outFile app.js src/rectangleMath.ts src/circleMath.ts src/app.ts`
    Note that the file names must be in order.
    Now check the app.js file, all the code will be bundled together.

*/


console.log(Formulae.calculateCircumference(20))
console.log(Formulae.calculateRectangle(10, 20))