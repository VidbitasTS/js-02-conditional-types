console.log('prompt js');

let r = 10;
let pi = 3.14;

let plotas = pi * (r * r);
let resultString = `Jei spindulys yra ${r} tai apskritimo plotas yra ${plotas}.`;
console.log('resultString ===', resultString);

r = prompt('apskritimo spindulys');
plotas = pi * (r * r);
resultString = `Jei spindulys yra ${r} tai apskritimo plotas yra ${plotas}.`;
console.log('resultString ===', resultString);

// let valandos = prompt('kiek valandu');
// console.log('valandos ===', valandos);
//alert('kazkas');
//let a = confirm('tikrai norite');