# dPRAS_OrKom#06 Memory Internal.pdf

Sumber: `materi/dPRAS_OrKom#06 Memory Internal.pdf` *(ada di Edlink)* — teks hasil ekstraksi otomatis.

## Halaman 1

PERTEMUAN #5
ORGANISASI DAN ARSITEKTUR KOMPUTER:
MEMORY INTERNAL
Dr. DWI PRASETYO, Dipl.Inf, S.Kom, M.Si

## Halaman 2

Register
Main Memory
Magnetic Disc
Magnetic Tape
Cache
Disc Cache
Optical Disc
Hirarki Memori

## Halaman 3

Karakteristik Hirarki Memori
Semakin Ke bawah maka segitiga hirarki memiliki sifat:
1. Semakin Kebawah , Semakin Murah Harga per-BIT-nya
a.Register merupakan jenis memori paling mahal
b.Magnetic Tape dan CD-ROM paling murah
2. Semakin Kebawah , Semakin Besar Ukuran Kapasitasnya
a. Register ukuran kapasitasnya sangat kecil yaitu dalam: 8bit…128bit
b. Magnetic Tape , CD, DVD-ROM dalam Giga Byte

## Halaman 4

3. Semakin Kebawah , Semakin Lambat Akses Datanya.
a. Register sangat cepat akses datanya
b. Tape Magnetic sangat lambat akses datanya.
4. Semakin Kebawah , Akses CPU semakin Jarang
a. Register hampir setiap saat diakses CPU
b. Magnetic Tape , CD-ROM sangat jarang diakses CPU

## Halaman 5

Memori pada sistem komputer dapat dibedakan menjadi :
•
Main Memory, disebut juga Internal Memory , contoh: RAM)
•
secondary Memory ,disebut juga External Memory, contoh Hard Disk, RAID, Magnetic Tape  dsb.)
Berdasarkan Lokasinya , ada 3 jenis memori
•
Processor Memory   (contoh: register)
•
Main Memory 
(contoh: RAM)
•
External Memory 
(contoh: Hard Disk, RAID , CD-ROM, Tape)
Berdasarkan Fisik , ada 3 Jenis Memori
•
Semiconductor Memory 
contoh: RAM, ROM, EEPROM, FLASH
•
Magnetic Memory
contoh: Hard Disk ,Disket, Magnetic Tape
•
Optical Memory
contoh: CD/R , CD/RW, DVD

## Halaman 6

Ada 4 Metoda Akses Memori
1. Metoda Sequential Access
•
Akses data dilakukan secara berurutan , seperti pada pita magnetic
•
Akses Data sangat lambat, karena data yang akan di akses diurut secara serial satu
demi satu. 
• Contoh: Magnetic Tape Back Up Cartridge
2. Metoda Direct Access
•
Akses Data dilakukan secara langsung, berdasarkan posisi track  dan sector
•
Akses Data relatif lebih cepat, dibanding Sequential Access
•
Contoh : Hard Disk , Floppy Disk (disket)

## Halaman 7

3. Metoda Random Access
-Akses Data dilakukan dengan bantuan rangkaian Address Decoder
-Address Decoder akan menghasilkan alamat data yang akan diakses
-Akses Data Cepat , lebih cepat daripada Direct Access
-Contoh: RAM (= random access memory)
4. Metoda Associative Access
-Akses Data dilakukan dengan cara “compare” , yaitu membandingkan “isi” data yang dicari
dengan “key”-nya, bukan berdasarkan alamat data
-Jika “matched” maka data yang dicari ditemukan.
-Akses Data sangat Cepat , contoh: Cache Memory

## Halaman 8

Karakteristik Fisik dari Memori
1. Volatile > < Non-Volatile
Volatile :
-Listrik mati, Data hilang
-Penyimpanan dalam memori jenis ini tidak-permanent
-Contoh: RAM  (EDO-RAM, SDRAM, DDRAM)
Non-Volatile : -Listrik Mati, Data Tidak Hilang
- Penyimpanan dalam memori jenis ini bersifat-permanent
- Contoh: EPROM, EEPROM, Flash Memory

## Halaman 9

2. Erasable    > <    Non-Erasable
Erasable : Data dapat dihapus , untuk kemudian bisa diisi ulang
Contoh: 
1. EPROM (= Erasable Programmable Read Only Memory) dihapus dgn sinar Ultra Violet
2. EEPROM (=Electrically Erasable Programmable Read Only Memory) dihapus dgn listrik
3. FLASH Memory dihapus dgn listrik
Non Erasable : 
Data tidak dapat lagi dihapus , media ini “mono-use” sekali pakai , Salah isi data, berarti harus
dibuang, ganti media yg baru lagi
Contoh: ROM (Read Only Memory) , PROM (Programmable
ROM)

## Halaman 10

Random Access Memory (RAM)
Merupakan memory Baca/Tulis (R/W) dimana isi dari RAM dapat diupdate setiap saat dan bersifat 
volatile serta digunakan data / instruksi selama pemrosesan berlangsung.
Berdasarkan Struktur Komponen-nya ada 2 jenis RAM
1. SRAM (Static RAM) ,struktur terbuat dari komponen Transistor Bipolar
2. DRAM (Dynamic RAM  ,struktur terbuat dari komponen Capacitor)

## Halaman 11

Static RAM :
1. Terbuat dari sistem transistor bipolar
2. Memerlukan daya operasional yang relatif besar
3. Tidak memerlukan rangkaian Refresh, karena sifat dari transistor.
4. Kerapatan perkeping IC yang sedikit ( kecil ), Kapasitasnya Kecil 
5. Harga per byte-nya relatif lebih mahal
6. Kecepatan Akses Sangat Data tinggi
7. Effisien untuk sistem sistem kecil dan sistem yang memerlukan kecepatan pemrosesan yang tinggi.

## Halaman 12

Struktur Dasar sebuah SRAM (= Static RAM)

## Halaman 13

DRAM (Dynamic RAM) :
1. Strukturnya dibangun dari komponen Capacitor
2. Memerlukan daya operasional yang relatif kecil
3. Kerapatan perkeping IC yang besar, shg kapasitasnya sangat besar
4. Memerlukan rangkaian untuk “Refresh Cycle”
5. Harga lebih murah
6. Effisien untuk sistem sistem besar
7. Kecepatan akses data yang relatif lambat dibanding SRAM

## Halaman 14

SRAM (= Dynamic RAM)
Keterangan:
1. Address Line untuk pengalamatan Sel Memori
2. Storage Capacitor untuk menyimpan muatan
listrik yg tidak lain adalah data itu sendiri.
3. Transistor digunakan sebagai “Switch” untuk
mengisi datake storage capacitor.

## Halaman 15

Diagram Organisasi Memory berkapasitas 16 Mbit

## Halaman 16

ROM (Read Only Memory) :
ROM adalah memory yang berisi program yang bersifat tetap / tidak berubah (non-volatile) 
sepanjang sistem yang digunakan memungkinkan.
Aplikasi penting dari ROM meliputi :
1. Microprogramming
2. Library subroutine bagi fungsi – fungsi yang sering diperlukan
3. Program program sistem
4. Tabel tabel fungsi
POST 
adalah sebuah program inisialisasi sistem komputer, yang sekaligus melakukan diagnostik
standar pada sistem komputer , utk memastikan komputer beroperasi sebagai mana mestinya.

## Halaman 17

Permasalahan yang ada pada sistem ROM :
1.  Langkah penyisipan data memerlukan biaya tetap yang tinggi
2.  Tidak boleh terjadi kesalahan sekecil apapun. Apabila ternyata dijumpai kesalahan pada satu 
bitnya maka ROM tersebut tidak dapat digunakan.
3.  Untuk mengatasi hal tersebut diatas maka dibuatlah ROM yang dapat diprogram dan dihapus 
seperti halnya RAM.
Keluarga ROM :
1. ROM  (Read Only Memory )
2. EPROM ( Erasable Programmable Read Only Memory )
3. EEPROM ( Electrically Erasable Programmable Read Only Memory )
4. Flash ROM / Flash Memory

## Halaman 18

SEL MEMORI
1. Elemen terkecil dari memori disebut Memory Cell (= sel memori)
2. Elemen Memori mampu menyimpan 1 bit data , yaitu bit “1” atau bit “0”
3. Elemen memori dibangun dari sebuah “Flip Flop”  yang tak lain merupakan sebuah bistable 
multivibrator.
4. Elemen memori berifat Read / Write , artinya data di dalam elemen memori tersebut bisa
dibaca , dan sebaliknya kedalam elemen memori tersebut bisa di simpan sebuah data baru.

## Halaman 19

Ada 3 jenis Sinyal dalam sebuah sel memori
1. R/W signal, sebagai sinyal pengendali proses baca tulis
2. Select Signal, sebagai sinyal untuk memilih alamat sel
3. Data IN / OUT signal, yaitu merupakan data dari sel memori tersebut

## Halaman 20

Error Correction pada RAM :
Error pada memory semikonduktor dapat dikategorikan sebagai kegagalan yang berat dan kegagalan 
yang ringan.
1. Kegagalan yang berat merupakan kerusakan fisik permanen sehingga sel memory yang mengalaminya 
tidak dapat lagi digunakan untuk menampung data.
2. Kegagalan yang ringan adalah kejadian yang random dan tidak merusak yang mengubah iisi sebuah sel 
memory atau lebih, tanpa merusak memory. Kegagalan ringan ini salah satunya dapat disebabkan oleh 
masalah catu daya yang tidak stabil.

## Halaman 21

TERIMAKASIH
