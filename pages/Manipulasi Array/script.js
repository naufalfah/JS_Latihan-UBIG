// method di javascript : pop, push, shift dan unshift

let siswa = [
    'Naufal',
    'Deri',
    'Filbian'
]

console.log(siswa);

// join (separator:string) -> menggabungkan array
console.log(siswa.join('-'));

// splice
let siswaSplice

// index dan delete
siswaSplice = siswa.splice(1,1)
console.log(`hasil splice (1,1) = ${siswaSplice}`);
// untuk array siswa menjadi
console.log(`siswa menjadi ${siswa}`);

// misal mau menambahkan data 
siswaSplice = siswa.splice(1,0,'Vano')
console.log(`hasil splice (1,0'Vano') = ${siswa}`);
console.log(`siswa menjadi ${siswa}`);


// slice
console.log(siswa.join('-'));

let anakPintar = siswa.slice(0,2) // mengambil data dari sesudah 0 dan sebelum dua
// misal data = Naufal, Vano, Filbian. maka data sesudah 0 adalah Naufal dan data sebelum 2 adalah Vano
console.log(`anak yang pintar adalah = ${anakPintar.join('-')}`);
console.log(siswa.join('-'));