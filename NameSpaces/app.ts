console.log('Example of namespaces')
namespace MyMaths {
    const PI = 3.14

    export function calculateCircumference(diameter: number) {
        return diameter * PI
    }

    export function calculateRectangle(width: number, length: number) {
        return width * length
    }
}

const wrongPI = 2.19

console.log(MyMaths.calculateCircumference(3))
console.log(wrongPI)