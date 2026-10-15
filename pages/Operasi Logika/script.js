// operasi logika

// and, or, not

// hasil true
let dataBool = true;
console.log(dataBool);

// NOT

// hasil false
console.log(!dataBool);

// gunakan tanda seru akan membalik hasil dari boolean
console.log(!!dataBool);
console.log(!!!dataBool);
console.log(!!!!!!!!!!dataBool);
console.log(!!!!!!!!!!!dataBool);

// berlaku juga untuk mengecek menggunakan angka 1 0
console.log(!1);
console.log(!0);
// bisa sampai ratusan ribuan pokok depan nya 1 hasilnya false
console.log(!1000000000000000000000n);
console.log(!0);

// bisa menggunakan variable juga
let isActive = true;
let active = !isActive;

console.log(active);

// OR

// jika terdiri dari 2 kondisi, dan hany1 kondisi yang benar, maka akan benar
console.log(`true || true, Hasil = ${true || true}`);
console.log(`false || true, Hasil = ${false || true}`);
console.log(`true || false, Hasil = ${true || false}`);
console.log(`false || false, Hasil = ${false || false}`);

// contoh
let makan = false;
let minum = false;

let sudahMenyantap = makan || minum;

console.log(`sudah menyantap = ${sudahMenyantap}`);

// AND

// jika terdiri dari 2 kondisi, maka jika ingin hasilnya true,
// dua kondisi harus terpenuhi, jika tidak false

console.log(`true || true, Hasil = ${true && true}`);
console.log(`false || true, Hasil = ${false && true}`);
console.log(`true || false, Hasil = ${true && false}`);
console.log(`false || false, Hasil = ${false && false}`);

makan = false
minum = true

let sudahMakmin = makan && minum

console.log(`sudah makan dan minum? = ${sudahMakmin}`); // hasilnya false

makan = true
minum = true

sudahMakmin = makan && minum

console.log(`sudah makan dan minum? = ${sudahMakmin}`); // hasilnya true
