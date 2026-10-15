// variable menggunakan let
let nama = "Muhamamad Naufal Fahrezi"
console.log(nama)

// let bisa diubah di tengah tengah
nama = "Agus"
console.log(nama)

// variable menggunakan var
var namaDepan = "Muhammad Naufal"
console.log(namaDepan)

// var juga bisa diubah
namaDepan = "Naufal"
console.log(namaDepan)

// scope variable (let)
let namaBelakang = "Fahrezi" // jika di command maka nanti untuk memanggil global variabel nya gagal atau undefinded
{
    // membuat variable baru
    let namaBelakang = "Naufal Fahrezi"
    console.log(namaBelakang)
}
// memanggil variable global
console.log(namaBelakang)

// scope variable (var)
var namaTengah = "Naufal" // variable yang bisa digantikan oleh scope
{
    var namaTengah = "Ganteng" // variable ini menggantikan var yang diatas (global)
    console.log(namaTengah)
}
// memanggil scope nya bukan variable var di atas
console.log(namaTengah)

// kasus khusus
// jika tidak menggunakan macam variable, maka ini akan menjadi var
contohBaru = "Gorengan"
{
    contohBaru = "Jeruk"
}
console.log(contohBaru)

// variable const
// usahakan menggunaka nama variable dengan pascal case
const TanggalLahir = "15 Mei 2009"
console.log(TanggalLahir);

// variable nya tidak bisa diubah, dan nilainya akan konstan
TanggalLahir = "20 Maret 2026"