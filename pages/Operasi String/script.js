// mengetahui data pada variable sesuai indexnya
let dataString = "abcdef"
let dataChar = dataString.charAt(0)
console.log(`character pada index ke 0 adalah ${dataChar}`);
dataChar = dataString.charAt(1)
console.log(`character pada index ke 1 adalah ${dataChar}`);
dataChar = dataString.charAt(2)
console.log(`character pada index ke 2 adalah ${dataChar}`);
dataChar = dataString.charAt(3)
console.log(`character pada index ke 3 adalah ${dataChar}`);
dataChar = dataString.charAt(4)
console.log(`character pada index ke 4 adalah ${dataChar}`);

// jika datanya sudah tidak ada lagi dengan kita
// memanggil index yang lebih dari datanya, maka kita akan gagal
dataChar = dataString.charAt(10)
console.log(`character pada index ke 10 adalah ${dataChar}`); // hasilnya akan kosong

// menyambung string
let namaDepan = "Muhammad Naufal"
let namaBelakang = "Fahrezi"

let namaLengkap = namaDepan.concat(' ', namaBelakang,' si keren')
console.log(namaLengkap);

// mengambil index data
console.log(namaLengkap.indexOf('a'));
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('m'));
console.log(namaLengkap.indexOf('M'));

// substring (mengambil sebagian data terpilih)
let nama = "Muhammad Naufal Fahrezi"
let namaSub = nama.substring(9, 15) // meskipun bolak balik sama range nya
console.log(namaSub);
namaSub = nama.substring(0, 8)
console.log(namaSub);

//slice
let namaSlice = nama.slice(9, 15)
console.log(namaSlice);
namaSlice = nama.slice(15, 9) // jika dibalik hasilnya kosong
console.log(namaSlice);

// replace
namaLengkap = namaLengkap.replace('Muhammad Naufal', 'Naufal')
console.log(namaLengkap);

// toLower
let namaLower = namaLengkap.toLowerCase()
console.log(namaLower);

// toUpper
let namaUpper = namaLengkap.toUpperCase()
console.log(namaUpper);

// extract data number
let dataString2 = '10'
console.log(dataString2);
console.log(typeof dataString2);
// ubah datanya ke number
let dataInteger = parseInt(dataString2)
console.log(dataInteger); // kalau hasilnya biru maka disebut number
console.log(typeof dataInteger);

let dataString3 = '10.125'
console.log(typeof dataString3);
console.log(dataString3);
let dataFloat = parseFloat(dataString3)
console.log(dataFloat);
console.log(typeof dataFloat);