let angka1, angka2, hasil

document.getElementById('btn').onclick = function() {
    angka1 = document.getElementById('angka1').value // otomatis menjadi string
    angka2 = document.getElementById('angka2').value

    // merubah tipe string menjadi number
    // bisa parseInt
    // bisa parseFloat (rekomen)
    hasil = parseFloat(angka1) + parseFloat(angka2)
    
    // ubah text dari html
    document.getElementById('hasil').textContent = hasil
}