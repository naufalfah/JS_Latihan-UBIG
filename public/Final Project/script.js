let areaMenu = document.getElementById('areaMenu')
let areaKeranjang = document.getElementById("areaKeranjang");
let totalHarga = document.getElementById("totalHarga");

// database dummy untuk HTML kita
let daftarMenu = [
    'Kopi Hitam', 'Kopi Susu', 'Mie Rebus', 'Roti Bakar', 'Teh Manis'
]

let hargaMenu = [5000, 6000, 7000, 4000, 3000]

// placeholder untuk keranjang
let keranjang = []

function renderMenu(){
    let elementHTML = `<ul>`

    for(let i = 0; i < daftarMenu.length; i++){
        elementHTML += `<li class='flex justify-between my-2 items-center'><p>${daftarMenu[i]}</p><p>Rp. ${hargaMenu[i]}</p>
            <div class='flex gap-2 items-center'>
                <button type='button' class='bg-blue-500 text-white rounded-xl p-2 font-bold inline-block hover:bg-blue-700 transition duration-300' onclick='tambahKeranjang(${i})'>Tambahkan</button>
            </div>
        </li>`
    }

    elementHTML += '</ul>'
    areaMenu.innerHTML = elementHTML
}


renderMenu()
renderKerajang()

function tambahKeranjang(index){
    keranjang.push(index)
    renderKerajang()
}

function hapusDariKeranjang(index){
    keranjang.splice(index, 1)
    renderKerajang()
}

function renderKerajang(){
    if(keranjang.length === 0){
        areaKeranjang.innerHTML = `Keranjang masih kosong`

        totalHarga.innerHTML = `Rp. 0`
        return
    }

    let elementHTML = `<ul>`;

    let totalHargaPesanan = 0
    for(let i = 0; i < keranjang.length; i++){
        let indexMenu = keranjang[i]
        let namaPesanan = daftarMenu[indexMenu]
        let hargaPesanan = hargaMenu[indexMenu]

        totalHargaPesanan = totalHargaPesanan + hargaPesanan

        elementHTML += `<li class='flex justify-between my-2 items-center'><p>${namaPesanan}</p><p>Rp. ${hargaPesanan}</p><button type='button' onclick='hapusDariKeranjang(${i})' class='w-8 h-8 text-white bg-red-500 rounded-xl hover:bg-red-700 transition duration-300'>X</button></li>`; 
    }    

    elementHTML += '</ul>'

    totalHarga.innerHTML = `Rp. ${totalHargaPesanan}`
    areaKeranjang.innerHTML = elementHTML
}


// halaman
let halamanUtama = document.getElementById('halamanUtama')
let halamanStruk = document.getElementById('halamanStruk')
let detailStruk = document.getElementById('rincianPesanan')
let totalBeli = document.getElementById('totalBeli')

function prosesCheckout(){
    if(keranjang.length === 0){
        alert('Keranjang masih kosong, beli barang dulu')
        return
    }

    let elemenHTML = '<ul class="mx-10">'

    let totalBelanja = 0

    for(let i = 0; i < keranjang.length; i++){
        let indexMenu = keranjang[i]
        let nama = daftarMenu[indexMenu]
        let harga = hargaMenu[indexMenu]

        totalBelanja += harga

        elemenHTML += `
            <li>
                <div class='flex justify-between items-center'>
                    <p>${nama}</p>
                    <p>Rp. ${harga}</p>
                </div>
            </li>
        `
    }

    elemenHTML += '</ul>'
    detailStruk.innerHTML = elemenHTML
    totalBeli.querySelector('p:last-child').innerHTML = `Rp. ${totalBelanja}`

    halamanUtama.classList.add('hidden')
    halamanStruk.classList.remove('hidden')
}

function pesananSelesai(){
    keranjang = []
    renderKerajang()
    halamanUtama.classList.remove("hidden");
    halamanStruk.classList.add("hidden");
}