function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value)    
    const number2 = parseFloat(document.getElementById('number2').value)
    const op = document.getElementById('operator').value.trim()
    let hasil

    // membuat validasi
    if (isNaN(number1) || isNaN(number2)){
        document.getElementById('hasil').textContent = 'Angka wajib diisi'
        return
    }

    // gunakan if untuk operasi kalkulatornya
    if (op === '+'){
        hasil = number1 + number2
    } else if (op === '-'){
        hasil = number1 - number2
    } else if (op === '*'){
        hasil = number1 * number2
    } else if (op === '/'){
        if (number2 === 0){
            hasil = 'Hasil tak hingga, karena pembagi nol'
        } else {
            hasil = number1 / number2
        }
    } else {
        hasil = 'Operator tidak sesuai'
    }

    document.getElementById('hasil').textContent = hasil
}