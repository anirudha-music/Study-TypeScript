// Check types

let my_name: string | number = 'Anirudha'

if (typeof my_name == 'string') {
    console.log('Type is string')
} else {
    console.log('Type is number')
}

my_name = 9637892151

if (typeof my_name == 'string') {
    console.log('Type is number')
} else {
    console.log('Type is number')
}