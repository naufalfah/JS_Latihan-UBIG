// tipe data numbers

let nilaiInt = 10 // nilai integer
let nilaiFLoat = 12.25 // nilai dengan bilangan desimal
let nilaiBigInt = 102010241059312412453151n // bigint

// cara menggunakan ini
let angka = 5.678
let angkaInt = parseInt(angka) // memanggil angka tunggal tanpa desimal
console.log(angkaInt);

let angka2 = 10.21
let angka2FLoat = parseFloat(angka2)
console.log(angka2FLoat);

// merubah string ke number
let dataString = "10.24" + 10
console.log(dataString);
// jika ingin menambahkannya maka
// kita harus merubah dulu ke number dengan menggunakan
// parseInt
let dataInt = parseInt(dataString) + 10
console.log(dataInt); // ini data int
// jika kita ingin menampilkan bilangan desimalnya
let dataFloat = parseFloat(dataString)
console.log(dataFloat);

// studi kasus
let pembelian = "100000"
let pajak = 12000
let pembayaran = pembelian + pajak
console.log(pembayaran); // hasilnya akan aneh karena ada string

// maka ubah dulu ke number
pembayaran = parseInt(pembelian) + pajak
console.log(pembayaran);