// global
// let x = ...

// local
// {
//     let x = ...
// }   berada didalam {}

// menggunakan let
let nama = 'Naufal'

function sayNama(){
    let nama = 'Deri' // variable di local scope
    console.log(`${nama} di local scope`);
}

sayNama()

console.log(`${nama} di global scope`);


// kasus 1

let nama2 = 'Vano' // variable global scope

function sayNama2(){
  nama2 = "Filbian";
  // ini tetap menggunakan global scope, 
  // karena tidak berdiri sendiri dengan 'let', 
  // melainkan dengan global scope
  console.log(`${nama2} di local scope`);
}

sayNama2()
console.log(`${nama2} di global scope`); // nama berubah sesuai yang diubah di local
// soalnya tidak berdiri sendiri


// kasus 2
// menggunakan var
function sayNama3(){
    if(true){
        var nama3 = 'Delvin' // var bisa keluar (function scope)
        let nama4 = 'Reza' // kalau let hanya bisa didalam scope nya saja (bracket scope)
    }
    console.log(nama3);
    console.log(nama4);
}

// sayNama3() // tidak akan memanggil nama4


// leaked
if(true){
    var nama5 = 'Gobet'
}
console.log(nama5);

function sapa(){
    var nama6 = 'Ilham'
    console.log(nama6);
}
