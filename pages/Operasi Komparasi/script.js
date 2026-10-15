// operasi komparasi

// == equality
// != inequality

// === strict equality
// !== strict inequality

// > lebih besar dari
// >= lebih besar dari sama dengan
// < lebih kecil dari
// <= lebih kecil dari sama dengan

console.log(`10 > 7 = ${10 > 7}`); // hasilnya true
let dataBool = (10 > 7)
console.log(`10 > 7 = ${dataBool}`); // hasilnya true juga

console.log(`10 > 10 = ${10 > 10}`); // hasilnya false
console.log(`7 >= 7 = ${7 >= 7}`); // hasilnya true

console.log(`3 < 7 = ${3 < 7}`); // hasilnya true
console.log(`2 <= 1 = ${2 <= 1}`); // hasilnya false


// Persamaan
// equality
console.log(`3 == 3 = ${3 == 3}`);
console.log(`3 == '3' = ${3 == '3'}`); // meskipun string akan tetap kebaca juga
// inequality
console.log(`3 != 3 = ${3 != 3}`); // hasilnya akan false


// strict equality
console.log(`3 === 3 = ${3 === 3}`);
console.log(`3 === '3' = ${3 === '3'}`); // ini hasilnya false

console.log(`'3' === '3' = ${'3' === '3'}`); // jika sama sama string maka hasilnya true

//strict inequality
console.log(`3 !== 3 = ${3 !== 3}`); // hasilnya akan false
console.log(`3 !== '3' = ${3 !== '3'}`); // hasilnya akan true