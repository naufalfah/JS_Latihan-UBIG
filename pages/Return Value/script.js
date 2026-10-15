// membuat fungsi agar bisa di panggil di dalam sebuah variable

function tambah(angka1, angka2){
    let hasil = angka1 + angka2
    // jika tanpa return maka akan gini
}

// coba memasukkan ke dalam variable
let y = tambah(5, 4)
console.log(y); // maka hasilnya undefined


// jika versi menggunakan return
function kali(angka1, angka2){
    let hasil = angka1 * angka2
    return hasil // menggunakan return
}

y = kali(5, 4) // maka, fungsi kali sudah berada di dalam variable y
console.log(y);


// return multiple variable
function luasKelilingPersegi(sisi){
    let luas = sisi*sisi
    let keliling = sisi*4
    return [
        luas,
        keliling
    ] // dengan cara memanggil menggunakan array
}

// memanggil multiple variable
let hasil = luasKelilingPersegi(6)
console.log(hasil); // maka, ini akan dipanggil dengan bentuk array