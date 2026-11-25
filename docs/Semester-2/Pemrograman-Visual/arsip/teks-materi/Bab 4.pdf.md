# Bab 4.pdf

Sumber: [`materi/Bab 4.pdf`](../../materi/Bab%204.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

Bab 4 
Kontrol dan Dialogs 
 
POKOK BAHASAN: 
Fungsi dasar Basic Control: Label, TextBox, ComboBox, 
ListBox, Button. 
 
TUJUAN BELAJAR: 
1. 
Memahami fungsi dasar basic control. 
2. 
Membuat aplikasi sederhana dengan basic control. 
 
A. Label 
Label dapat menampilkan judul, text, penjelasan di 
sebelah textbox, tetapi tidak mengijinkan user mengedit 
secara langsung seperti pada Textbox. Properti yang sering 
digunakan dalam Label antara lain: 
1. 
Font 
Menentukan bentuk font seperti Times New 
Roman, Calibri juga besaran dari Font tersebut/size. 
2. 
TextAlign 
Letak perataan dari teks, melalui kombinasi left, 
center, right, top dan middle. 
3. 
Text 
Isi dari Label berupa teks.

## Halaman 2

4. 
BorderStyle 
Bentuk dari keliling label dalam bentuk FixedSingle 
atau Fixed3D. 
 
Gambar 4.1. Posisi Label dalam Toolbox (Kiri) 
dan Property dari Label (Kanan) 
 
B. Text Box 
 
Gambar 4.2 Text Box dalam Toolbox

## Halaman 3

Komponen Text Box memungkinkan memasukkan teks 
pada form saat runtime. Secara default, dibutuhkan satu baris 
teks, namun, kita dapat membuatnya menerima beberapa baris 
teks dan bahkan menambahkan scroll di dalamnya. 
 
C. Combo Box 
Kontrol yang sama kegunaanya dengan listbox, 
perbedaanya adalah user dapat mengisikan nilai baru pada 
combobox tersebut. 
Macam-macam Combo Box: 
1. 
Drop-Down: yang ditampilkan satu baris saja. Kotak ini 
akan terbuka jika user menekan tanda panah pada pojok 
kanan kotak kombo. Dan user dapat diinput nilai ke 
dalam kotak kombo tersebut. 
2. 
Simpel Combo: kotak ini mirip seperti daftar list box, user 
hanya bisa mengetik di bagian atas combo box saja. 
3. 
Drop Down List: ditampilkan satu baris saja, sama seperti 
Drop-Down, namun kotak tidak bisa diinput 
 
Gambar 4.3 Combo Box dalam Toolbox

## Halaman 4

Untuk menambah data pada combo box tersebut, klik 
panah kecil atas kanan combobox lalu pilih Edit item, 
dan data dapat diisi 
 
 
 
Gambar 4.4 Pengisian List Data Combo Box 
 
D. List Box 
Listbox merupakan input control terdiri atas elemen 
yang merupakan sebuah daftar teks yang dapat dipilih 
berdasarkan index dimulai dari 0 sampai maksimum jumlah 
index dikurangi 1. Untuk mengaktifkan Listbox, tarik icon 
Listbox dari Toolbox dan letakkan pada form.

## Halaman 5

Inisialisasi Listbox dapat dilakukan pada saat Form 
ditampilkan, yaitu pada event Form_Load(). Metode Add() 
digunakan untuk menambah elemen pada Class Lisbox.Items. 
Untuk membaca baris teks yang dipilih, gunakan properti 
SelectedItem dan untuk mengetahui index aktual, gunakan 
SelectedIndex. 
 
Gambar 4.5 Listbox dalam Toolbox 
 
Untuk menambah data dalam List Box, caranya sama 
seperti kita menambah data pada combobox yakni dengan 
mengklik tombol panah kecil kanan atas pada listbox 
tersebut, klik Edit Item dan isikan data-datanya. 
 
E. Button 
Button merupakan kontrol yang dipakai sebagai tombol 
untuk melakukan sebuah proses ataupun mengeksekusi 
perintah tertentu seperti Exit, Close, Open, Apply, dan 
sebagainya.

## Halaman 6

Gambar 4.6 Button dalam Toolbox
