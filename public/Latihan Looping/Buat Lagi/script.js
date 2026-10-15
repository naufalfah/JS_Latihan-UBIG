let todoArray = []

let btnTambah = document.getElementById('btnTambah')
let tambahInput = document.getElementById('tambahInput')
let areaArray = document.getElementById('areaArray')

// validasi

btnTambah.onclick = function()
{

    let tugasBaru = tambahInput.value
    if (tambahInput.value === "") {
      alert("Data inputan tidak boleh kosong");
      return
    }

    todoArray.push(tugasBaru)
    tambahInput.value = ''

    let hasil = ''
    for(let i = 0; i < todoArray.length; i++)
    {
        hasil += `${todoArray[i]}<br>`
    }

    document.getElementById('areaArray').innerHTML = hasil
}
