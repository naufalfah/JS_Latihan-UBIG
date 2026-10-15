let nilai = 80
console.log(`nilai = ${nilai}`);

let hasil
if (nilai >= 75){
    hasil = 'Lulus, kamu hebat banget!'
} else {
    hasil = 'perbaikan'
}

console.log(hasil);


// ternary operator
// variable = (kondisi) ? true : false

let hasilTernary = (nilai >= 75) ? 'Lulus' : 'Perbaikan'
console.log(`Hasil ternary = ${hasilTernary}`);