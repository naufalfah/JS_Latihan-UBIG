let todoArray = []

// initialisasi
let tombolTambah = document.getElementById('btnTambah')
let kolomInput = document.getElementById('tambahInput')
let areaArray = document.getElementById('areaArray')

tombolTambah.onclick = function(){
    let tugasBaru = kolomInput.value

    if(kolomInput.value === ''){
        alert('Data tidak boleh kosong')
        return
    }

    todoArray.push(tugasBaru)
    kolomInput.value = ''

    let isiHTML = ''
    for(let i = 0; i < todoArray.length; i++){
        isiHTML += `<tr><td>${todoArray[i]}</td></tr>`
    }

    document.getElementById('areaArray').innerHTML = isiHTML
}