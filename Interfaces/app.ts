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
