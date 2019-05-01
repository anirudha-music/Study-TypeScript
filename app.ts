
function sayHello(): void {
    console.log('Hello');
}

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

console.log(multiply(2, 4));

let any_variable; // Currently this variable can hold any functions as the variable is declared as any type.
any_variable = sayHello;
any_variable();

any_variable = multiply;
console.log(any_variable(1, 1));

// To explicity tell the variable to hold the function of particular type we have to declared the variable of the respected type.
let multiply_variable: (val1: number, val2: number) => number;
multiply_variable = multiply;

console.log(multiply_variable(20, 20));