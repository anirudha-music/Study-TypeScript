// Class 

class Person {

    constructor(public name: string) { }

    print() {
        console.log(this.name)
    }
}

let anirudha = new Person('Anirudha')
anirudha.print()
