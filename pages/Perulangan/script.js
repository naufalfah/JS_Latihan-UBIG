// perulangan
arrData = [1,2,3,4,5,6,7,8,9,10]


// for loop
// for (initialisasi; kondisi; increment){
//      isi..
// }


// kalau deklarasi variable nya di dalam for maka itu disebut scope
for (let i = 1; i <= 20; i++){
    console.log(`nilai i = ${i}`);
}

// mengatahui panjangnya manual
for (let i = 0; i <= 9; i++){
    console.log(`array ke-${i} = ${arrData[i]}`);
}

// menggunakan length
console.log('Menggunakan length');
for (let i = 0; i < arrData.length; i++){
    console.log(`array ke-${i} = ${arrData[i]}`);
}