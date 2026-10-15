let arrNama = [
    'Naufal',
    'Deri',
    'Vano',
    'Filbian',
    'Delvin'
]

// BREAK

let cariNama = 'Deri'

for (let i = 0; i < arrNama.length; i++){
    console.log(arrNama[i]);
    if(arrNama[i] === cariNama){
        console.log(`Nama ${cariNama} ditemukan`);
        break
    }
}


// bisa juga menggunakan while namun lebih rekomen for
// let index = 0
// while(index <= arrNama.length){
//     console.log(arrNama[index]);
//     index++
// }


// CONTINUE

let angka = [1,2,3,4,5,6]

for(let i = 0; i < angka.length; i++){
    if (angka[i] % 2){
        continue
    }
    console.log(angka[i]);
}