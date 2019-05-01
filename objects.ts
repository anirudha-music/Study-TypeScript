// type alias
type Complex = { data: number[], output: (all: boolean) => number[] }

let complex: Complex = {
    data: [100, 200, 300],
    output: function (all: boolean) {
        return this.data
    }
}

let complex2: Complex = {
    data: [100, 200, 300],
    output: function (all: boolean) {
        return this.data
    }
}