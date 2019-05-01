// Objects

// 1.
let user = {
    name: 'Anirudha',
    age: 25
};

console.log(user);
// Here the variable is declared as of type object having name, age property. If you are mutating the value of the object and not it's properties.

// The following code will causes an error since you are trying to mutate the property.
// user = {};
// user = {
//     a: 'a',
//     b: 'b'
// };


// The below code will work fine even if you have change the order of the property. The property names has to be the same.
user = {
    age: 19,
    name: 'Sidhant'
};
console.log(user);
// TS interprets the above object like this
/*
let user: { name: String, age: number } = {
    name: 'Anirudha',
    age: 25
}
*/

let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 200, 300],
    output: function (all: boolean) {
        return this.data;
    }
}

console.log(complex.data);
console.log(complex.output);