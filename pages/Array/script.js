// menggunakan cara lama
let siswa1 = 'Naufal'
let siswa2 = 'Deri'
let siswa3 = 'Vano'

// cara menggunakan Array
let siswa = [
    'Naufal',
    'Deri',
    'Vano'
]

console.log(siswa);

// jelaskan mengenai operasi/operator/method/fungsi

// cara memanggil melalui index (indexing)
console.log(siswa[0]);
console.log(siswa[1]);
console.log(siswa[2]);

// length
let panjangSiswa = siswa.length
console.log(`Panjang Siswa = ${panjangSiswa}`);

// tambah dan hapus array
// menggunakan .push atau dianalogikan mendorong data baru
siswa.push('Filbian')
console.log(`Nambah data baru di belakang -> ${siswa}`);

//menggunakan pop untuk menghapus ibaratnya mengambil data
siswa.pop() // bisa juga tanpa nama data nya dan otomatis mengambil yang paling terakhir
console.log(`Data yang dihapus dari -> ${siswa}`);

// bisa juga dengan menjadikan variable ibaratnya pop itu mengambil data yang paling terakhir
let ambilSiswa = siswa.pop()
console.log(`Data ${ambilSiswa} dihapus dari -> ${siswa}`);

siswa.unshift('Filbian') // menggunakan unshift untuk menambahkan data dari depan
console.log(`Nambah data baru di depan -> ${siswa}`);

ambilSiswa = siswa.shift() // menggunakan shift untuk mengapus data yang di depan
console.log(`Data ${ambilSiswa} dihapus dari -> ${siswa}`);

// unshift untuk push
// shift untuk pop