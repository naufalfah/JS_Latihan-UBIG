// membuat array
let todoArray = []

// intialisasi
let kolomInput = document.getElementById('inputTugas');
let buttonTambah = document.getElementById('btnTambah')
let areaArray = document.getElementById('areaArray')

// sub programm

// menggunakan function deklarative
function tambahTugas(){
    let tugasBaru = kolomInput.value

    if(tugasBaru === ''){
        alert('Data tidak boleh kosong')
        return
    }
    todoArray.push(tugasBaru)
    kolomInput.value = ''
    renderList()
}

function hapusTugas(index){
    todoArray.splice(index, 1)
    renderList()
}

function renderList(){
    // jika list kosong maka beri pesan tidak ada tugas
    if(todoArray.length === 0){
        areaArray.innerHTML = "<p>Belum ada data</p>";
        return
    }

    let isiHTML = ''
    for(let i = 0; i < todoArray.length; i++){
        isiHTML += `<p>${todoArray[i]} <button type='submit' onclick='hapusTugas(${i})'>Hapus</button></p>`
    }

    areaArray.innerHTML = isiHTML
}

buttonTambah.onclick = tambahTugas