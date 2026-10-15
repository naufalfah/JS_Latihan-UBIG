console.log('Mulai');

let nama = 'Naufal'

if (nama === 'Naufal'){
    console.log('Halo Naufal ganteng');
} else if (nama === 'Deri'){
    console.log('Halo Deri keren');
} else {
    console.log('Kamu bukan siapa siapa');
}


switch (nama) {
    case 'Naufal':
        console.log('Switch case Naufal');
        break;

    case 'Deri':
        console.log('Switch case Deri');
        break;

    default:
        console.log('Switch case nobody');
        break;
}

console.log('Akhir dari program');