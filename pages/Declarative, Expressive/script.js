// dua cara membuat function

// declarative

testFunction1() // tetap bisa dipanggil karena ini deklarasi variable otomatis diatas terus

function testFunction1(){
    console.log('wadidiw wadidaw function 1');
}

testFunction1()

// expressive
// testFunction2() // ini tidak bisa maka nanti akan error


// cara ini digunakan untuk yang ingin menempatkan function ke tempat yang lebih rapi
let testFunction2 = function(){
    console.log('prikitiw prakataw function 2')
}

testFunction2()