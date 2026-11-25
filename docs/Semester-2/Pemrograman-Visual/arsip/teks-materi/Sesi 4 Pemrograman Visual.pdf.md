# Sesi 4 Pemrograman Visual.pdf

Sumber: [`materi/Sesi 4 Pemrograman Visual.pdf`](../../materi/Sesi%204%20Pemrograman%20Visual.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

1 
 
 
[public/private] Sub <Nama_Sub> (Argument)  
  
…  
  
<kode prosedur / coding>  
  
…  
End Sub  
 
 
Sesi 4 - Pemrograman Visual 
“Procedure, Event dan Method” 
Ikhwani Saputra, M.Kom 
 
 
 
 
 
 
A. Procedure (Prosedur) 
Prosedur merupakan sub program yang digunakan untuk melakukan proses tertentu secara 
berkali-kali. 
Bentuk penulisan Syntax Prosedur Sub: 
 
 
Procedure dibagi menjadi dua jenis, yaitu: 
1. Prosedur Objek 
Prosedur Objek merupakan prosedur yang dihasilkan atau yang dimiliki oleh objek kontrol 
pada sebuah form. Prosedur ini akan berfungsi apabila objek kontrol tersebut diberi 
tindakan sesuai dengan event/handle yang ada. Misalnya, jika event/hendle-nya adalah click, 
maka prosedur tersebut akan berfungsi apabila objek tersebut di-click. Biasanya prosedur 
ini akan otomatis terdefenisi saat programmer melakukan double click pada objek kontrol, 
sehingga programmer tidak perlu mengetik syntax prosedur tersebut, programmer bisa 
langsung mengetikkan coding di dalamnya. 
 
Gambar 1. Contoh Prosedur pada Objek 
 
 
Prosedur di atas merupakan contoh prosedur yang dimiliki oleh objek kontrol “button” pada 
sebuah form.

## Halaman 2

2 
 
 
 
2. Prosedur Bebas (Berdiri Sendiri) 
Prosedur Bebas merupakan prosedur yang tidak berada pada sebuah objek kontrol tertentu. 
Prosedur ini dibuat bertujuan untuk mempermudah dalam memberikan banyak instruksi 
pada sebuah form yang biasanya akan berfungsi ketika dilakukan pemanggilan 
menggunakan coding “Call”. Biasanya satu buah Prosedur Sub ini berisikan kumpulan 
perintah-perintah, sehingga ketika prosedur ini dipanggil, maka akan menjalakan semua 
peritah tersebut sekaligus. Misalnya, programmer ingin melakukan pembersihan teks 
terhadap banyak TextBox dalam satu Form. Untuk mempermudah programmer, maka 
dibuatlah dalam satu prosedur yang berisikan coding “Clear” terhadap semua Textbox. 
 
Gambar 2. Contoh Prosedur Yang Berdiri Sendiri 
 
 
Prosedur di atas merupakan contoh prosedur sub yang sifatnya berdiri sendiri. Adapun cara 
memanggil prosedur tersebut adalah dengan mengetik coding “Call” diikuti nama prosedur 
tersebut. 
 
Gambar 3. Coding Pemanggilan Prosedur Berdiri Sendiri

## Halaman 3

3 
 
 
 
B. Event 
Event merupakan peristiwa atau kejadian yang diterima oleh suatu objek dengan tujuan 
untuk merespon kondisi program atau objek lainnya. Untuk memberikan event kepada setiap objek 
kontrol yang ada, cukup dengan melakukan double click objek yang akan anda beri event tersebut, 
setelah anda double click maka anda akan mendapatkan event sesuai dengan objek kontrol tersebut, 
namun anda masih tetap bisa merubah event yang sudah ada dengan cara memilih kotak event yang 
ada pada combobox jendala kode posisi kanan atas. 
 
 
 
 
 
 
 
 
 
 
Gambar 4. Tampilan Pengubahan Event 
Berikut ini adalah jenis-jenis event: 
1. Event Untuk Mouse 
Event ini biasanya akan bekerja dengan adanya inputan perintah dari mouse, berupa: 
a. Click, event Click terjadi bila tombol kiri mouse ditekan dan dilepas dengan cepat saat 
posisi pointer berada diatas suatu obyek. 
b. DblClick, event DblClick terjadi bila tombol kiri mouse ditekan dan dilepas dengan cepat 
sebanyak dua kali saat posisi pointer berada di atas suatu obyek. 
c. 
DragDrop, event DragDrop terjadi bila tombol kiri mouse ditekan dan ditahan kemudian 
menyeret/menggeser obyek dari asatu tempat ke tempat lain, kemudian melepas 
tombol kiri mouse tersebut. 
d. DragOver, hampir sama dengan DragDrop tetapi DragOver ini biasanya digunakan untuk 
mengubah bentuk tampilan pointer mouse saat obyek diseret/digeser. 
e. MouseDown, event MouseDown terjadi bila tombol kiri mouse ditekan dan ditahan. 
f. 
MouseUp, event MouseUp terjadi bila tombol kiri mouse dilepas sehabis ditekan. 
g. MouseMove, event MouseMove terjadi bila mouse dipindah posisinya ke tempat lain 
tampa menekan tombol mouse tersebut.

## Halaman 4

4 
 
 
 
 
 
Gambar 5. Tampilan Contoh Event Mouse “Click” 
 
 
2. Event Untuk Keyboard 
Event ini biasanya akan bekerja dengan adanya inputan perintah dari keyboard, berupa: 
a. KeyPress, Event KeyPress terjadi bila sebuah tombol keyboard ditekan. Nilai parameter 
dari KeyPress adalah kode ASCII untuk menyatakan jenis tombol keyboard yang ditekan. 
b. KeyDown, Event KeyDown terjadi bila menekan dan menahan sebuah tombol keyboard. 
c. 
KeyUp, Event KeyUp terjadi bila melepaskan sebuah tombol keyboard. 
 
 
Gambar 6. Tampilan Contoh Event Keyboard “KeyPress” 
 
 
3. Event Perubahan 
a. Activate, Event Activate terjadi bila sebuah form menjadi window yang aktif. 
b. Deactive, Event Deactive terjadi ketika berpindah dari satu form ke form yang lain. 
c. GotFocus, Event GotFocus terjadi bila sebuah obyek menjadi satu-satunya fokus. 
Sebuah form dapat membuat obyek fokus bila form tersebut menjadi window aktif. 
d. LostFocus, Event LostFocus tejadi bila sebuah obyek kehilangan fokus karena ada obyek 
lain yang mendapatkan fokus 
e. Load, Event Load terjadi bila sebuah form dibuka atau dipanggil. 
f. Paint, Event Paint terjadi bila sebuah form perlu digambar ulang. Biasanya dilakukan 
saat sebuah form dipindahkan dari form lain yang menutupinya. 
g. Resize, Event Resize terjadi bila sebuah form diubah ukurannya. 
h. Change, Event Change terjadi bila isi dari sebuah kontrol diubah.

## Halaman 5

5 
 
 
 
 
 
Gambar 7. Tampilan Contoh Event Perubahan “Load” 
 
 
C. Method 
Method merupakan suatu set perintah yang sudah tersedia di dalam suatu obyek. Method 
biasanya akan mengerjakan suatu tugas khusus atau aksi tertentu pada suatu objek. 
 
Gambar 8. Syntax Penggunaan Method 
 
 
Adapun cara memunculkan method pada coding adalah ketik dulu Nama Objek kemudian 
diikuti tanda “.” (titik), lalu akan muncul secara otomatis daftar method untuk objek tersebut akan 
muncul. Kemudian pilih jenis method yang dibutuhkan. 
 
Gambar 9. Cara Penggunaan Method 
 
 
Berikut ini adalah contoh method yang terdapat pada sebuah Form: 
1. CenterToScreen, Metode ini menempatkan form yang bersangkutan menempati posisi di 
tengah-tengah layar (screen) saat program dijalankan 
2. Close, Metode ini menyebabkan form yang bersangkutan tertutup 
3. Hide, Metode ini menyebabkan form yang bersangkutan tersembunyi 
4. Show, Metode ini menyebabkan form yang bersangkutan tampil tetapi pointer masih 
dapat menempati form lainnya

## Halaman 6

6 
 
 
 
 
 
 
 
Gambar 10. Contoh Method Close pada Form 
 
 
Sedangkan contoh method yang terdapat pada sebuah Textbox sebagai berikut: 
1. Clear, Metode ini menyebabkan isi dari properties text pada obyek TextBox akan 
dibersihkan. 
2. Focus, Metode ini menyebabkan pointer akan menempati atau menuju ke obyek TextBox. 
3. Select, Sama seperti pata metode Foucs, pointer akan menempati atau menuju ke obyek 
TextBox 
 
 
Gambar 11. Contoh Method pada TextBox

## Halaman 7

7 
 
 
 
D. Latihan Listing Program (Coding) 
1. Project “Latihan-1” 
Buka kembali file project “Latihan-1”. Kemudian ketikkan coding hingga lengkap seperti 
gambar 12. 
 
Gambar 12. Coding pada Form Latihan-2 (Project Latihan 1)

## Halaman 8

8 
 
 
 
Namun, butuh langkah-langkah dalam pemberian coding seperti gambar 12. Berikut ini 
adalah langkah-langkahnya: 
a) Membuat Prosedur-prosedur yang sifatnya berdiri sendiri. Caranya, double click form 
“Latihan-2”, kemudian ketikkan coding berikut ini di bawah Event Load: 
 
Gambar 13. Coding Prosedur 
 
 
b) Mengatur Fungsi Event Load pada Form Latihan-2. Caranya, ketikkan coding berikut ini 
tepat pada bagian Event Load Form Latihan-2. 
 
Gambar 14. Coding pada Event Load Form 
 
 
c) Fungsi pada Button. Caranya double click pada masing-masing Button, lalu ketikkan 
coding berikut sesuai pada Button masing-masing. 
 
Gambar 15. Coding pada Button List

## Halaman 9

9 
 
 
 
 
 
Gambar 16. Coding pada Button Clear 
 
 
Gambar 17. Coding pada Button Exit 
 
 
 
Adapun hasil tampilan Form Latihan-2 saat dijalankan adalah sebagai berikut: 
 
Gambar 18. Tampilan Form Latihan-2 saat dijalankan 
 
 
Terlihat pada semua Label, dimana Teksnya sudah berubah sesuai dengan isi coding. Hal ini 
karena pada bagian Event Load Form Latihan-2, diberikan fungsi pemanggilan Prosedur 
TeksLabel yaitu prosedur yang berisikan fungsi pemberian teks pada semua label pada Form 
Latihan-2.

## Halaman 10

10 
 
 
 
Saat Tombol List ditekan, maka isi TextBox akan tampil seperti berikut: 
 
Gambar 19. Tampilan Saat Tombol List Diklik 
 
 
Jika tombol Clear diklik, maka tampilan akan kembali seperti gambar 18, di mana semua isi 
teks pada TextBox akan dibersihkan. Sedangkan jika diklik tombol Exit, maka Form Latihan-2 
akan dihentikan/dikeluarkan.

## Halaman 11

11 
 
 
 
2. Project “Latihan-2” 
Buka kembali file project Aplikasi Login “Latihan-2”. Kemudian ketikkan coding hingga 
lengkap seperti gambar 20. 
 
Gambar 20. Coding pada Form Login (Project Latihan-2)
