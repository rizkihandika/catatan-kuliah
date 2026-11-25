# dPRAS_OrKom#05 Bus & Sistem Interkoneksi Bagian II.pdf

Sumber: `materi/dPRAS_OrKom#05 Bus & Sistem Interkoneksi Bagian II.pdf` *(ada di Edlink)* — teks hasil ekstraksi otomatis.

## Halaman 1

PERTEMUAN #4
ORGANISASI DAN ARSITEKTUR KOMPUTER:
BUS & SISTEM INTERKONEKSI (Lanjutan)
Dr. DWI PRASETYO, Dipl.Inf, S.Kom, M.Si

## Halaman 2

Komponen-komponen Komputer

## Halaman 3

Register
Register yang terdapat dalam CPU, yaitu :
•
MAR (Memory Address Register)
Menentukan alamat di dalam memori yang akan diakses untuk operasi Read/Write
•
MBR (Memory Buffer Register)
Berisi data yang akan di tuliskan ke dalam memori atau menerima data yang di baca dari memori
•
I/O AR (I/O Addres Register)
Menspesifikasikan perangkat I/O yang akan diakses
•
I/O BR (I/O Buffer Register)
Menyimpan data yang akan dituliskan ke port atau data yang akan disalin dari port. Alamat port ditunjuk oleh I/O AR

## Halaman 4

Modul I/O
•
Memindahkan data dari perangkat eksternal ke CPU dan sebaliknya
•
Modul ini berisi buffer internal untuk menampung data ini sementara sampai data itu di kirimkan.
Ada
Ada2
2langkah
langkahpengambilan
pengambilaninstruksi
instruksi :
1.
CPU membaca instruksi yang ada di memori (fetch)
Fetch instruksi adalah operasi umum bagi setiap instruksi, dan terdiri dari pembacaan instruksi dari suatu lokasi di
dalam memori.
2. CPU mengeksekusi setiap instruksi (execute)
Eksekusi instruksi dapat melibatkan sejumlah operasi dan tergantung pada sifat-sifat instruksi

## Halaman 5

Aksi-aksi yang dilakukan oleh CPU ketika menginterpretasikan instruksi di bagi menjadi 4 kategori :
1. CPU --- Memori
Data di pindahkan dari CPU ke memori atau sebaliknya
2. CPU --- I/O
Data dapat di pindahkan ke atau dari dunia luar dengan pemindahan antara CPU dan modul I/O.
3. Pengolahan data
CPU dapat membentuk sejumlah operasi aritmetik atau logic terhadap data
4. Control
Sebuah instruksi yang dapat mengubah urutan eksekusi, Misalnya, CPU dapat membaca instruksi dari lokasi
149, yang menentukan bahwa instruksi berikutnya dibaca dari lokasi 182. CPU akan mengingat hal ini dengan
menyetel program counter ke 182. Jadi, pada siklus fetch berikutnya, instruksi akan dibaca dari lokasi 182,
bukannya 150.

## Halaman 6

Contoh Eksekusi Program 
Dalam CPU
Tahap 1
Program Counter (PC) 
berisi 300 alamat instruksi 
pertama
Alamat ini dimuatkan ke 
dalam Instruction Register 
(IR)

## Halaman 7

Tahap 2
4 bit pertama di dalam 
IR mengindikasikan 
bahwa akumulator (AC) 
akan dimuatkan
12 bit sisanya 
menentukan alamat, 
yaitu 940

## Halaman 8

Tahap 3
PC dinaikkan nilainya 
dan instruksi berikutnya 
akan diambil

## Halaman 9

Tahap 4
Isi AC yang lama dan isi 
lokasi 941 ditambahkan 
dan hasilnya disimpan di 
dalam AC

## Halaman 10

Tahap 5
PC dinaikkan nilainya dan 
istruksi berikutnya akan 
diambil

## Halaman 11

Tahap 6
Isi AC akan disimpan pada 
lokasi 941

## Halaman 12

Interrupts
Kondisi yang membuat suatu komputer/ mikroprosesor berhenti mengerjakan rutin
instruksi utama dan beralih (melompat ke vektor interupsi) untuk mengerjakan rutin
interupsi
Pengantar tentang proses eksekusi program
•
Instruksi-instruksi yang dieksekusi mikrokontroler diletakkan pada memori program
•
Secara default, CPU akan mengeksekusi instruksi-instruksi mulai dari alamat 0x0000 kemudian
diteruskan ke alamat 0x0001 dst secara berurutan. Pengalamatan instruksi diatur oleh progam
counter
•
Jika terjadi suatu lompatan (percabangan, pemanggilan subrutin, atau loop) eksekusi program akan
keluar dari urutan alamat tersebut dan menuju alamat tujuan lompatan

## Halaman 13

Fungsi Interupsi
•
Mekanisme penghentian atau pengalihan pengolahan instruksi dalam CPU kepada rutin interupsi.
•
Hampir semua modul (memori dan I/O) memiliki mekanisme yang dapat menginterupsi kerja CPU.
Tujuan Interupsi
•
Secara umum untuk manajemen pengeksekusian rutin instruksi agar efektif dan efisien antar CPU
dan modul–modul I/O maupun memori.
•
Setiap komponen komputer dapat menjalankan tugasnya secara bersamaan, tetapi kendali terletak
pada CPU disamping itu kecepatan eksekusi masing–masing modul berbeda.
•
Dapat sebagai sinkronisasi kerja antar modul

## Halaman 14

SIKLUS INSTRUKSI
Siklus Instruksi meliputi :
1. Fetch Cycle (Siklus mengambil) Mengambil instruksi yang akan dieksekusi
2. Execute Cycle (Siklus Eksekusi) Melakukan operasi yang ditentukan oleh opcode instruksi
3. Interrupt Cycle (Siklus Instruksi) Apabila interrupt diaktifkan dan interrupt telah terjadi, simpan
status proses saat itu dan layani interrupt

## Halaman 15

Future Bus
untuk memberikan fleksibilitas yang tinggi dan fungsionalitas yang luas untuk memenuhi kebutuhan
berbagai sistem yang berkinerja tinggi terutama sistem-sistem yang mahal

## Halaman 16

Perbedaan PCI dan Future bus
•
PCI di tujukan bagi implementasi murah yang membutuhkan bidang fisik secara minimal
•
Future bus+ dimaksudkan untuk memberikan fleksibilitas yang tinggi dan fungsionalitas yang luas
untuk memenuhi kebutuhan berbagai sistem yang berkinerja tinggi terutama sistem-sistem yang
mahal.

## Halaman 17

TERIMAKASIH
