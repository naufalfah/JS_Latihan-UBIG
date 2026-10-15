// Boolean

// ketentuan tipe data boolean
// false = 0
// true = 1

let dataBoolean1 = false
console.log(dataBoolean1);

let dataBoolean2 = (3<10) // hasilnya true
console.log(dataBoolean2);
dataBoolean2 = (3>10) // hasinya false
console.log(dataBoolean2);

// antar string
let dataBoolean3 = ("Naufal" == "naufal") // meski sama tapi hurufnya beda, tetap false 
console.log(dataBoolean3);

// false == 0, (true)
// true == 1, (true)
let dataBoolean4 = (false == 0)
console.log(dataBoolean4);

dataBoolean4 = (false == 0n) // bigint juga bisa
console.log(dataBoolean4);

dataBoolean4 = (false == " ") // untuk false bisa dengan menggunakan string kosong
console.log(dataBoolean4);