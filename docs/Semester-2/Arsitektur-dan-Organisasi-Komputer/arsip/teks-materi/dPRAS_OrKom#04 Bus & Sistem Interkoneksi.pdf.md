# dPRAS_OrKom#04 Bus & Sistem Interkoneksi.pdf

Sumber: `materi/dPRAS_OrKom#04 Bus & Sistem Interkoneksi.pdf` *(ada di Edlink)* — teks hasil ekstraksi otomatis.

## Halaman 1

PERTEMUAN #3
ORGANISASI DAN ARSITEKTUR KOMPUTER:
BUS & SISTEM INTERKONEKSI
Dr. DWI PRASETYO, Dipl.Inf, S.Kom, M.Si

## Halaman 2

BUS SISTEM
Definisi:
BUS adalah sarana pengangkut / saluran yang terdapat didalam suatu microprocessor (CPU) yang
menghubungkan antara Microprocessor tersebut dengan dunia luar.
Melalui sarana BUS inilah microprocessor tersebut mampu menerima data atau mengirimkan data hasil
pengolahannya
keluar sistem microprocessor dan mampu untuk menghubungi peralatan peralatan
pendukungnya
Pada setiap microprocessor ( CPU ) selalu terdapat 3 sistem BUS dasar yaitu :
1. Data BUS
(bi-directional)
2. Address BUS
(uni-directional)
3. Control BUS
(uni-directional)

## Halaman 3

Data BUS :
1. Sebagai sarana pengangkut data antara CPU dan komponen
pendukungnya.
2. Jumlah Data Bus menyatakan lebar jejak data pada CPU atau jumlah data
bit instruksi yang mampu diambil persatuan waktu.
3. Data Bus biasanya digunakan sebagai taksonomi dari microprocessor yang
bersangkutan.
Address BUS :
1.Sebagai sarana pembawa alamat dari microprocessor ke komponen
pendukungnya.
2. Setiap komponen pendukung didalam sistem komputer harus mempunyai alamat yang UNIQUE.
3. Jumlah dari Address Bus menyatakan jumlah komponen pendukung yang mampu dialamati oleh
microprocessor yang bersangkutan.

## Halaman 4

Control BUS :
Sebagai sarana pembawa signal kontrol antara microprocessor dan peralatan
pendukung didalam kesinambungan komunikasi antara bagian pada sistem
komputer tersebut.
Control Signal digunakan pada sistem komputer :
Memory Write ( )
Memory Read ( )
I/O Write ( )
I/O Read ( )
Transfer ACK ( )
Bus Request ( )
Bus Grant ( )
Interrupt Request ( )
Interrupt ACK ( )
Reset ( )
Clock

## Halaman 5

Sebuah komputer terdiri dari sekumpulan komponen komponen dasar seperti :
CPU, memori dan I/O, yang saling berinteraksi satu dengan yang lainnya.
Kumpulan lintasan lintasan yang saling menghubungkan berbagai modul modul
tersebut dikenal dengan nama struktur interkoneksi
Ada 3 Jenis jenis transfer data seperti berikut ini :
1. CPU Memori
2. CPU I/O
3. I/O Memori (DMA operation)
Selain itu ada 3 jenis Interkoneksi dalam komputer
1. CPU Interconnection
2. Memory Interconnection
3. I/O Interconnection

## Halaman 6

a. CPU Interconnection
b. Memory Interconnection
c. I/O  Interconnection

## Halaman 7

CPU
MEMORY
MEMORY
I / O
I / O
DATA   BUS
ADDRESS   BUS
CONTROL  BUS
Arsitektur Bus Sistem dalam sebuah komputer

## Halaman 8

Kelemahan Bus Sistem
Apabila banyak terdapat perangkat I /O atau sistem memory yang dihubungkan ke
BUS Data maka akan dapat menurunkan kinerja dari sistem keseluruhan, hal ini
dikarenakan :
Timbulnya propagation delay
Timbulnya permasalahan Bottleneck
Untuk mengatasi permasalahan tersebut maka dibuatlah beberapa arsitektur Bus
dasar dengan tujuan untuk meningkatkan effisiensi sistem.
Ada 2 Jenis Teknologi Bus Sistem
1. Traditional Bus
: ISA-BUS
2. High Speed Bus
: PCI-BUS

## Halaman 9

Traditional Bus (ISA-BUS)
Sifat2:
1.Peripheral High-Speed (network, SCSI, Video, Graphic) dengan Peripheral
Low-
Speed dikoneksikan pada expansion bus yang sama ,sehingga kinerja bus tidak
optimal.
2. Beban Bus sistem sangat berat, shg kinerjanya lambat
3. Traditional Bus ini merupakan sistem bus tunggal (Single Bus system) Yang populer
diterapkan pada jenis IBM-PC : 8088 , era tahun 80’an

## Halaman 10

SCSI
Serial
Modem
Network
Expansion BUS
Interface
Main
Memory
Processor
Local I/O
Controller
Cache
Local BUS
System  BUS
Expansion  BUS
Diagram Traditional Bus

## Halaman 11

High Speed Bus
Sifat-Sifat
1. High Speed Bus , yaitu bus berkecepatan tinggi untuk koneksi peripheral berkecepatan tinggi :
Video, Graphic , Network, SCSI
2. Expansion Bus , yaitu bus berkecepatan rendah untuk koneksi peripheral berkecepatan rendah
, seperti: Modem, Fax , Serial
3. Beban Sistem Bus menjadi lebih ringan sehingga kinerjanya menjadi lebih cepat.
4. High Speed bus merupakan jenis bus ganda (multi bus)
5. Contoh : PCI - BUS

## Halaman 12

Serial
Modem
FAX
Expansion BUS
Interface
Main
Memory
Processor
Cache /
Bridge
High Speed  BUS
Expansion  BUS
SCSI
Graphics
Video
LAN
Local BUS
System BUS
Diagram High Speed  Bus

## Halaman 13

Elemen – elemen pada sistem perancangan Bus :
1. Jenis Bus
Decicated
Sifat: - Data Bus dan Address Bus memiliki Jalur terpisah
- Rancangan lebih mahal 
- Kecepatan transfer data lebih tinggi
Multiplexed
Sifat: - Jalur Data dan Address dijadikan satu
- Rancangan Lebih Murah
- Kecepatan transfer data lebih lambat
2. Metoda arbitrasi
Tersentralisasi
Terdistribusi

## Halaman 14

3. Timing
Synchronous
Asynchronous
4. Lebar Bus
Address
Data
5. Type data transfer
Write
Read
Read modify write
Read after write
Block

## Halaman 15

BUS - PCI
Peripheral Component Interconnection Dikeluarkan oleh Intel sebagai public domain
32 atau 64 bit 50 Jalur
Jalur Bus PCI (Optional)
•
Interrupt lines
* Not shared
•
Cache support 64-bit Bus Extension
* Additional 32 lines
* Time multiplexed
* 2 lines to enable devices to agree to use 64-bit transfer
•
JTAG/Boundary Scan
* For testing procedures

## Halaman 16

TERIMAKASIH
