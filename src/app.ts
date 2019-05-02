
namespace Formulae {
    const PI = 3.14

    export function calculateCircumference(daimeter: number) {
        return daimeter * PI
    }

    export function calculateRectangel(width: number, length: number) {
        return width * length
    }
}

console.log(Formulae.calculateCircumference(20))
console.log(Formulae.calculateRectangel(10, 20))