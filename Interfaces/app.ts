interface NamedPerson {
    firstName: String
    age?: number // Optional property.
    [propName: string]: any // We don't know the name of the key. The property name if flexible here.

    greet(lastName: String): void
}

function greet(person: NamedPerson) {
    console.log('Hello, '+person.firstName)
}

function changeName(person: NamedPerson) {
    person.firstName = 'Anirudha'
}

const person = {
    firstName: 'Max',
    age: 27,
    hobbies: ['cooking', 'sports'], // Like this unknow properties can be created during runtime as long it meets the type specified above, `any` type serves well here.

    greet(lastName: string) {
        console.log(lastName)
    }
}

greet(person)
changeName(person)
greet(person)
person.greet('Mahale')

// greet({firstName: 'Anirudha', age: 20, hobbies: ['cooking', 'sports']})

class Person implements NamedPerson {  
    firstName = 'Anirudha'

    greet(lastName: string): void {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}

const me = new Person()
me.greet('Mahale')


// Fuction Types
interface DoubleValueFunc {
    (number1: number, number2: number): number
}

let doubleFunction: DoubleValueFunc
doubleFunction = function(val1: number, val2: number) {
    return val1 + val2
}

console.log(doubleFunction(20, 40))