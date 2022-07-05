let username = 'James';
let age = 22;
let town = 'Minsk';

let sentence =
    'Student ' +
    username +
    ' is ' +
    age +
    ' years old and the Lives in ' +
    town +
    '.';

sentence = `Student James ${username} is ${age} years old and the lives ${town}.`;

console.log('sentence ===', sentence);
let pokytis = Number(prompt('po kiek metu'));

// let after = 5;
let after5yers = `${username} will be ${
  age + Number(pokytis)
} in ${pokytis} yers`;
// console.log(typeof after);
console.log('after5yers ===', after5yers);