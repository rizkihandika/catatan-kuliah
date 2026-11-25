# AP05 - Modul PPT - Looping.pdf

Sumber: [`materi/AP05 - Modul PPT - Looping.pdf`](../../materi/AP05%20-%20Modul%20PPT%20-%20Looping.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

ALGORITMA DAN PEMROGRAMAN
Program Studi Informatika
SESI 5 – Looping (Perulangan) 
di C++
Pemrograman dengan C++

## Halaman 2

Sesi 5 – Looping di C++
Outline Perkuliahan
1
Konsep Looping
Definisi, kegunaan, dan tiga unsur looping
2
Jenis Looping
for, while, do-while, dan cara memilihnya
3
Nested Loop
Perulangan di dalam perulangan, misalnya pola bintang
4
break, continue, dan Kesalahan Umum
Mengontrol loop dan menghindari loop tanpa akhir
5
Contoh Program dan Latihan
Jumlah deret, tabel perkalian, dan faktorial
2

## Halaman 3

Sesi 5 – Looping di C++
Tujuan Pembelajaran
Setelah sesi ini, Anda mampu:
•
Menjelaskan definisi dan kegunaan looping
•
Menyebutkan jenis looping di C++
•
Menulis for, while, dan do-while
•
Membuat nested loop dan memakai break serta 
continue
•
Memilih jenis loop yang tepat untuk suatu masalah
Mulai
Cek kondisi
Kerjakan isi
Ubah penghitung
3

## Halaman 4

Sesi 5 – Looping di C++
Konsep Looping
1
Bagian 1 – Mengulang pekerjaan tanpa menulis ulang kode
4

## Halaman 5

Sesi 5 – Looping di C++
Analogi: Pekerjaan yang Berulang
Push-up 10 kali
Ulangi gerakan yang sama 
sampai hitungan mencapai 
10.
Menyapu halaman
Sapu terus selama masih ada 
daun yang tersisa.
Minum obat 3 hari
Minum tiap pagi, hentikan 
setelah hari ketiga.
Pola yang sama: ada pekerjaan yang diulang dan ada aturan kapan berhenti.
5

## Halaman 6

Sesi 5 – Looping di C++
Apa Itu Looping?
Looping (perulangan) adalah struktur kontrol yang menjalankan sekelompok perintah berulang 
kali selama suatu kondisi masih benar.
Iterasi
Satu kali putaran loop disebut 
satu iterasi.
Kondisi
Ekspresi benar atau salah yang 
menentukan loop lanjut atau 
berhenti.
Badan loop
Perintah yang dijalankan pada 
setiap iterasi, ditulis di dalam 
kurung kurawal.
Istilah lain: perulangan, iterasi, repetisi.
6

## Halaman 7

Sesi 5 – Looping di C++
Kegunaan Looping
Tanpa loop
cout << "Halo" << endl;
cout << "Halo" << endl;
cout << "Halo" << endl;
cout << "Halo" << endl;
cout << "Halo" << endl;
Dengan loop
for (int i = 1; i <= 5; i++) {
cout << "Halo" << endl;
}
•
Kode lebih singkat dan rapi
•
Mudah diubah: ganti 5 menjadi 1000 cukup di satu tempat
•
Dapat mengolah data berjumlah banyak, misalnya nilai 100 mahasiswa
7

## Halaman 8

Sesi 5 – Looping di C++
Tiga Unsur Looping
1
Inisialisasi
Nilai awal penghitung
int i = 1;
2
Kondisi
Syarat loop tetap berjalan
i <= 5
3
Perubahan
Mengubah penghitung tiap 
putaran
i++
Tanpa perubahan penghitung, kondisi tidak pernah menjadi salah dan loop tidak berhenti.
8

## Halaman 9

Sesi 5 – Looping di C++
Jenis Looping di C++
Jenis
Kapan dipakai
Kondisi diperiksa
for
Jumlah putaran sudah diketahui
Sebelum badan loop
while
Jumlah putaran belum pasti
Sebelum badan loop
do-while
Isi loop minimal sekali dijalankan
Sesudah badan loop
Selain tiga jenis ini ada nested loop (loop bersarang), serta break dan continue untuk mengontrol 
loop.
9

## Halaman 10

Sesi 5 – Looping di C++
Jenis Looping
2
Bagian 2 – for, while, dan do-while
10

## Halaman 11

Sesi 5 – Looping di C++
Perulangan for
for (inisialisasi; kondisi; perubahan) {
// perintah yang diulang
}
for (int i = 1; i <= 5; i++) {
cout << i << " ";
}
Inisialisasi
Kondisi benar?
Badan loop
Perubahan (i++)
Bila kondisi salah, loop berhenti.
Urutan: inisialisasi sekali, lalu ulangi: cek kondisi, jalankan badan, ubah penghitung.
11

## Halaman 12

Sesi 5 – Looping di C++
Contoh Program 1: for
#include <iostream>
using namespace std;
int main() {
for (int i = 1; i <= 5; i++) {
cout << "Angka ke-" << i << endl;
}
int total = 0;
for (int i = 1; i <= 10; i++) {
total = total + i;
}
cout << "Jumlah 1 sampai 10 = " << total;
return 0;
}
Keluaran
Angka ke-1
Angka ke-2
Angka ke-3
Angka ke-4
Angka ke-5
Jumlah 1 sampai 10 = 55
•
total diawali 0 lalu ditambah i setiap 
putaran
•
1 + 2 + ... + 10 = 55
12

## Halaman 13

Sesi 5 – Looping di C++
Perulangan while
inisialisasi;
while (kondisi) {
// perintah yang diulang
perubahan;
}
int i = 1;
while (i <= 5) {
cout << i << " ";
i++;
}
•
Kondisi diperiksa lebih dulu
•
Bila sejak awal salah, isi loop tidak 
dijalankan sama sekali
•
Penghitung harus diubah sendiri di 
dalam badan loop
13

## Halaman 14

Sesi 5 – Looping di C++
Contoh Program 2: while dengan Sentinel
int angka, total = 0, banyak = 0;
cout << "Masukkan angka (0 berhenti)";
cin >> angka;
while (angka != 0) {
total = total + angka;
banyak++;
cin >> angka;
}
cout << "Banyak data = " << banyak;
cout << "Total = " << total;
Keluaran
Masukkan angka (0 untuk 
berhenti)
10
20
5
0
Banyak data = 3
Total       = 35
Versi lengkap ada di modul Word.
14

## Halaman 15

Sesi 5 – Looping di C++
Perulangan do-while
do {
// perintah yang diulang
perubahan;
} while (kondisi);   // titik koma wajib
int i = 1;
do {
cout << i << " ";
i++;
} while (i <= 5);
•
Isi loop pasti berjalan minimal satu 
kali
•
Cocok untuk menu dan validasi input
•
Jangan lupa titik koma setelah while 
(...)
Bila kondisi sejak awal salah, do-while tetap menjalankan isi loop satu kali.
15

## Halaman 16

Sesi 5 – Looping di C++
Contoh Program 3: do-while Validasi Nilai
int nilai;
do {
cout << "Masukkan nilai (0-100): ";
cin >> nilai;
if (nilai < 0 || nilai > 100) {
cout << "Nilai tidak valid, ulangi.";
}
} while (nilai < 0 || nilai > 100);
cout << "Nilai diterima: " << nilai;
Keluaran
Masukkan nilai (0-100): 150
Nilai tidak valid, ulangi.
Masukkan nilai (0-100): -3
Nilai tidak valid, ulangi.
Masukkan nilai (0-100): 85
Nilai diterima: 85
•
Input 150 dan -3 ditolak
•
85 diterima, loop berhenti
16

## Halaman 17

Sesi 5 – Looping di C++
Membandingkan for, while, dan do-while
for
while
do-while
Jumlah putaran
Sudah diketahui
Belum pasti
Belum pasti
Pemeriksaan kondisi
Di awal
Di awal
Di akhir
Minimal dijalankan
0 kali
0 kali
1 kali
Contoh pemakaian
Cetak 1 sampai 10
Baca data sampai 0
Validasi input
Ketiganya dapat saling menggantikan; pilih yang membuat kode paling mudah dibaca.
17

## Halaman 18

Sesi 5 – Looping di C++
Diskusi 1
Jenis loop apa yang paling cocok?
•
(a) Mencetak nomor urut 1 sampai 30
•
(b) Meminta kata sandi sampai benar
•
(c) Menampilkan menu aplikasi minimal sekali
18

## Halaman 19

Sesi 5 – Looping di C++
Nested Loop, break, dan continue
3
Bagian 3 – Perulangan bersarang dan pengendali loop
19

## Halaman 20

Sesi 5 – Looping di C++
Nested Loop (Loop Bersarang)
for (int baris = 1; baris <= 4; baris++) {
for (int kolom = 1; kolom <= baris; kolom++) {
cout << "*";
}
cout << endl;
}
Keluaran
*
**
***
****
•
Loop luar mengatur baris, loop dalam mengatur kolom
•
Setiap satu putaran loop luar, loop dalam berputar penuh
•
Jumlah iterasi total = putaran luar x putaran dalam
20

## Halaman 21

Sesi 5 – Looping di C++
Contoh Program 4: Tabel Perkalian
int n;
cout << "Tabel perkalian berapa? ";
cin >> n;
for (int i = 1; i <= 10; i++) {
cout << n << " x " << i
<< " = " << n * i << endl;
}
Keluaran
Tabel perkalian berapa? 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
Tantangan: bungkus dengan loop luar agar menampilkan tabel perkalian 1 sampai 10.
21

## Halaman 22

Sesi 5 – Looping di C++
break dan continue
Perintah
Efek
break
Keluar dari loop sepenuhnya
continue
Lewati sisa isi putaran ini, lanjut ke putaran berikutnya
for (int i = 1; i <= 9; i++) {
if (i % 2 == 0) continue;   // lewati genap
cout << i << " ";
}
// keluaran: 1 3 5 7 9
for (int i = 1; i <= 10; i++) {
if (i == 7) break;          // berhenti di 7
cout << i << " ";
}
// keluaran: 1 2 3 4 5 6
22

## Halaman 23

Sesi 5 – Looping di C++
Loop Tanpa Akhir dan Kesalahan Umum
Kesalahan
Contoh
Akibat atau perbaikan
Lupa mengubah penghitung
while (i <= 5) { cout << i; }
Loop tanpa akhir; tambahkan i++
Kondisi tidak pernah salah
for (int i = 1; i > 0; i++)
Loop tanpa akhir; perbaiki kondisi
Titik koma salah tempat
for (...); { ... }
Badan loop kosong; hapus titik koma
Selisih satu (off-by-one)
i < 5 padahal ingin 1 sampai 5
Gunakan i <= 5
Lupa titik koma do-while
} while (i <= 5)
Tambahkan ; di akhir
23

## Halaman 24

Sesi 5 – Looping di C++
Latihan: Telusuri Keluarannya
for (int i = 1; i <= 4; i++)
cout << i << " ";          // (1)
int s = 0;
for (int i = 1; i <= 5; i++)
s = s + i;
cout << s;                  // (2)
Jawaban
•
(1) 1 2 3 4
•
(2) 15, karena 1+2+3+4+5
Tantangan: ubah loop (2) agar hanya menjumlahkan bilangan genap dari 1 sampai 10.
24

## Halaman 25

Sesi 5 – Looping di C++
Contoh Program 5: Faktorial
int n;
long long faktorial = 1;
cout << "Masukkan n: ";
cin >> n;
for (int i = 1; i <= n; i++) {
faktorial = faktorial * i;
}
cout << n << "! = " << faktorial;
Keluaran
Masukkan n: 5
5! = 120
•
Diawali 1 karena dikalikan terus-menerus
•
Dikali 1, 2, 3, ... sampai n
•
long long agar muat untuk n besar
25

## Halaman 26

Sesi 5 – Looping di C++
Ringkasan
Looping
Mengulang perintah selama kondisi benar; 
hemat kode.
Tiga jenis
for untuk jumlah pasti, while untuk belum 
pasti, do-while minimal sekali.
Nested loop
Loop di dalam loop, misalnya untuk pola dan 
tabel.
Hati-hati
Pastikan penghitung berubah agar tidak 
terjadi loop tanpa akhir.
26

## Halaman 27

Sesi 5 – Looping di C++
Referensi
•
Stroustrup, B. (2014). Programming: Principles and Practice Using C++ (2nd ed.). Addison-Wesley.
•
Malik, D. S. (2018). C++ Programming: From Problem Analysis to Program Design (8th ed.). Cengage.
•
cppreference.com. Iteration statements.
•
Materi PPT Sesi 5 – Looping di C++, Algoritma dan Pemrograman.
27
