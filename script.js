// 1. Pilih tombol berdasarkan ID-nya
cons tombolSapa = document.getElmentByid('sapaButton');
// 2. Tambahkan ' event listener' untuk aksi 'clik'
tombolsapa.addEvenListener('clik', function() {
     // 3. jalankan kode ini ketika di-klik
     alert('halo! Terima kasih sudah berkunjung!');
});
