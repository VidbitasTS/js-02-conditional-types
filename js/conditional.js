console.log('conditionals');

// let isUserAdmin = Number(prompt('koks amzius'));

// if (isUserAdmin >= 18) {
//     console.log('isUserAdmin ===suauges');
// } else {
//     console.log('isUserAdmin ===nepilnametis');
// }

let amzius;

if (amzius <= 0 || amzius > 150) {
    console.log('kazkas negerai 1', amzius);
} else if (amzius > 0 && amzius <= 18) {
    console.log('vaikas');
} else if (amzius < 70) {
    console.log('suauges');
} else if (amzius < 150) {
    console.log('senjoras');
} else {
    console.log('kazkas negerai 2', amzius);
}