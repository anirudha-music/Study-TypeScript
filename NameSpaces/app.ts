console.log('Example of namespaces')

console.log(MyMaths.calculateCircumference(2))
console.log(MyMaths.calculateRectangle(4, 6))

/*

    Run the below command to merge the files.
    tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts
    The `outFile` bundles the specified files together into the repsected file.

*/