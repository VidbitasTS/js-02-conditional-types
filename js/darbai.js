let nameUser = '';
nameUser = prompt('Iveskite savo varda:');

let passw = '';
//if (nameUser != 'admin') {
passw = prompt('Iveskite slaptazodi');
//}

const element2 = document.getElementById('antraste');
element2.textContent = 'JS 02 cond type (F12 atidaro console)';
const element = document.getElementById('antraste');

if (!nameUser) {
    element.style.color = 'red';
    element.textContent = 'Nieko neivedet. Viso gero';
} else {
    //   if (nameUser !== '') {
    if (nameUser === 'admin' && passw === 'master') {
        element.style.fontSize = '58px';
        element.style.color = 'green';
        element.textContent = `Sveiki sekmingai prisijungus ${nameUser} ${passw}`;
    } else {
        element.textContent = `Jusu prisijungimo vardas: ${nameUser}  arba slaptazodis: ${passw}`;
        nameUser += '11';
    }

    console.log(nameUser, passw);
}
// }

// const element = document.getElementById('antraste');
// element.remove();
// console.log(nameUser, passw);
// const h2Element = document.createElement('h2');
// h2Element.textContent = 'Nieko neivedet';
// alert('Viso gero');

// console.log('blogai');

//
//const element = document.getElementById('antraste');
//element.remove();
//const h1Element = document.createElement('h2');
// document.getElementById('h1Element').style.fontSize = 'xx-large';
//Node.style.fontSize = 48 px;

//h1Element.textContent = `Jusu prisijungimo vardas: ${nameUser}  slaptazodis: ${passw}`;
//document.body.append(h1Element);

// console.log(nameUser);

// let btn = document.createElement('button');
// btn.innerHTML = 'Paspausk mane';
// btn.type = 'submit';
// btn.name = 'Btn';
//btn.style.display = 'inline';
// btn.style.position = 'absolute';
// document.body.appendChild(btn);

// btn.onfocus = function() {
// alert('OnFocus');
// btn.style.left = '100 px';
//    btn.style.right = '500 px';
// };

// let b = content.document.createElement('button');
// b.onclick = function() {
//     alert('OnClick');
// };
//setTimeout(100000);

// var h1 = document.createElement('h1');
// h1.append(h1);
// h1.createTextNode(text);

//let x = document.createElement('h1');
//x.textContent = 'Labas';