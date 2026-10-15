// NaN = Not a Number
console.log(`akar dari -1 \t:${Math.sqrt(-1)}`)

// ini bisa soalnya sama dengan menggabungkan variable
console.log(`Naufal + Fahrezi adalah ${"Naufal" + "Fahrezi"}`);

// ini yang tidak bisa
console.log(`Naufal / Fahrezi adalah ${"Naufal" / "Fahrezi"}`);
console.log(`Naufal * Fahrezi adalah ${"Naufal" * "Fahrezi"}`);
console.log(`Naufal - Fahrezi adalah ${"Naufal" - "Fahrezi"}`);

let data = parseInt("123Test") // hasilnya akan 123
console.log(data);

// kecuali
data = parseInt('Test123')
console.log(data);


// Undefined
let a
console.log(`a : ${a}`) // soalnya 'a' nya belum diketahui / belum ada data
console.log(Math.sqrt(4));
console.log(console.log("test"));