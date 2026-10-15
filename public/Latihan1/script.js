// definisikan dulu variable nya
let namaDepan, namaBelakang, namaLengkap

document.getElementById('btn').onclick = function() {
    namaDepan = document.getElementById('namaDepan').value
    //value digunakan untuk menampilkan data yang diinput oleh user
    namaBelakang = document.getElementById('namaBelakang').value
    namaLengkap = `${namaDepan} ${namaBelakang}`
    console.log(namaLengkap)

    // merubah teks yang sudah dibuat, guna menampilkan hasil
    document.getElementById('namaLengkap').textContent = namaLengkap
}