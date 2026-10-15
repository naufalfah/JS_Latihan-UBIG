// ini string
let dataString = "data string"
console.log(dataString);

// escaping string ("" '' \ \\ \n)
// bisa menggunakan tanda petik yang beda 
// ini menggunakan '' didalam "" 
let data1 = "naufal berkata 'apa kabar dunia'" 
console.log(data1);

// kalau ini menggunakan tanda \ sebagai escape stringnya
let data2 = "naufal berkata \"tetap asyik\""
console.log(data2);
// bisa juga dengan petik 1 (')
data2 = "naufal berkata \'tetap asyik\'"
console.log(data2);

// menggunakan \n sebagai enter
let data3 = "Naufal berjalan jalan di tepi pantai \nkereeen"
console.log(data3);


// literal string
let namaDepan = "Muhammad Naufal"
let namaBelakang = "Fahrezi"
let umur = 17

// menggunakan string kosongan
let namaLengkap = namaDepan + " " + namaBelakang + " " +  umur
console.log(namaLengkap);

// lebih elegan
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`
console.log(biodata);