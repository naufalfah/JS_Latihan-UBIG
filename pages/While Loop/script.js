// while

// while(boolean){
//    isi...
//}

console.log('Awal program');

let flag = true

while(flag){
    console.log('halo');
    flag = false
}

let flag2 = true
let angka = 0

while(flag2){
    console.log('Haiiii');
    if(angka == 10){
        flag2 = false
    }
    angka++
}

let mainLagi = true
let ronde = 1
while(mainLagi){
    console.log(`Sekarang kamu main di ronde ${ronde}`);

    mainLagi = confirm('Anda mau main lagi?')

    ronde++
}