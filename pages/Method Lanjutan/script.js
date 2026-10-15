let siswa1 = [
    'Naufal',
    'Deri',
    'Vano'
]

let siswa2 = [
    'Filbian',
    'Dawwas',
    'Reza'
]

// menggabungkan 2 array

let timBasket = siswa1.concat(siswa2)
console.log(timBasket.join(' - '));

// kita cek apakah member ada
if (siswa1.includes('Naufal')){
    console.log('Naufal ada di siswa1');
} else {
    console.log('Naufal tidak ditemukan');
}

// kita pingin tau posisi
let posisi = timBasket.indexOf('Filbian')
console.log(`Filbian ada di posisi index ${posisi}`);
console.log(`Naufal ada di posisi index ${timBasket.indexOf('Naufal')}`);

// kita bisa mengurutkan data berdasarkan value
timBasket.sort()
console.log(`sortir -> ${timBasket.join(' - ')}`);

timBasket.reverse()
console.log(`sortir -> ${timBasket.join(' - ')}`);