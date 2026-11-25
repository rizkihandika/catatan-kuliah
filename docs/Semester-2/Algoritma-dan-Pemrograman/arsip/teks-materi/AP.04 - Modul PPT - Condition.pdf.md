# AP.04 - Modul PPT - Condition.pdf

Sumber: [`materi/AP.04 - Modul PPT - Condition.pdf`](../../materi/AP.04%20-%20Modul%20PPT%20-%20Condition.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

Condition (Percabangan)
Algoritma dan Pemrograman
Program Studi Informatika
Pertemuan 4 · Contoh dengan C++

## Halaman 2

Tujuan Pembelajaran
2
1
Menjelaskan
Fungsi condition (percabangan) 
dalam sebuah program.
2
Menulis
Kondisi dengan operator 
relasional dan logika, serta if, else 
if, dan switch.
3
Menerapkan
Condition untuk menyelesaikan 
masalah dan mengujinya dengan 
data batas.
Durasi ±100 menit · Bahasa pemrograman: C++

## Halaman 3

Program juga perlu mengambil keputusan
3
Jika hujan
maka  bawa payung
Jika PIN benar
maka  uang keluar
Jika total ≥ Rp100.000
maka  dapat diskon
Condition
Program memilih jalur berdasarkan sebuah kondisi 
yang bernilai benar atau salah.
Selection
Salah satu dari tiga struktur kendali: sequence, 
selection, dan loop.
Diskusi: sebutkan satu keputusan yang diambil aplikasi di ponselmu hari ini.

## Halaman 4

Apa itu Condition?
4
Condition
percabangan: program memilih 
jalur
Kondisi
pertanyaan yang jawabannya 
benar atau salah
Condition memeriksa sebuah kondisi. Jika benar, satu blok perintah 
dijalankan. Jika salah, blok itu dilewati atau diganti blok lain.
CONTOH PSEUDOCODE
GET nilai
IF nilai >= 60 THEN
GIVE "LULUS"
ELSE
GIVE "TIDAK LULUS"
ENDIF

## Halaman 5

Operator Relasional
5
Pseudocode
C++
Artinya
Contoh (nilai = 70)
=
==
sama dengan
nilai == 70   →   benar
<>
!=
tidak sama dengan
nilai != 70   →   salah
<
<
lebih kecil
nilai < 60   →   salah
>
>
lebih besar
nilai > 60   →   benar
<=
<=
lebih kecil atau sama dengan
nilai <= 70   →   benar
>=
>=
lebih besar atau sama dengan
nilai >= 80   →   salah
Awas: satu = memberi nilai, dua == membandingkan.

## Halaman 6

Operator Logika
6
Pseudocode
C++
Artinya
AND
&&
benar jika kedua sisi benar
OR
||
benar jika salah satu sisi benar
NOT
!
membalik benar menjadi salah
CONTOH
umur >= 17 && punyaKTP
hari == 6 || hari == 7
!(nilai >= 60)
A
B
AND
OR
benar
benar
benar
benar
benar
salah
salah
benar
salah
benar
salah
benar
salah
salah
salah
salah
Urutan hitung: ! lebih dulu, lalu &&, lalu ||. 
Pakai tanda kurung agar jelas.
TABEL KEBENARAN

## Halaman 7

Kata Kunci Condition dan Padanan C++
7
Kata kunci
Artinya
Padanan di C++
IF kondisi THEN ... ENDIF
Jalankan jika kondisi benar
if (kondisi) { }
ELSEIF kondisi THEN
Kondisi tambahan
else if (kondisi) { }
ELSE
Jalur jika semua salah
else { }
SWITCH x ... ENDSWITCH
Pilih berdasarkan nilai x
switch (x) { }
CASE nilai
Salah satu pilihan
case nilai: ... break;
DEFAULT
Pilihan cadangan
default:
AND / OR / NOT
Operator logika
&&  /  ||  /  !

## Halaman 8

Lima Bentuk Condition
8
if
Satu aksi tambahan jika syarat benar.
Contoh: Jika saldo kurang, beri peringatan
if-else
Dua pilihan, salah satu pasti jalan.
Contoh: LULUS atau TIDAK LULUS
else if
Banyak pilihan pada rentang nilai.
Contoh: Grade A, B, C, D
nested if
Syarat kedua diperiksa setelah syarat 
pertama.
Contoh: Cek segitiga valid, baru jenisnya
switch-case
Satu variabel, beberapa nilai tetap.
Contoh: Menu nomor 1 sampai 4
Satu masalah, satu bentuk yang 
paling pas. Jangan memakai 
switch untuk rentang nilai.

## Halaman 9

Pola if-else: Pseudocode, C++, dan Flowchart
9
PSEUDOCODE
IF kondisi THEN
pernyataan A
ELSE
pernyataan B
ENDIF
C++
if (kondisi) {
pernyataan A;
} else {
pernyataan B;
}

## Halaman 10

Contoh 1: Kelulusan Ujian
10
MASALAH
Mahasiswa LULUS jika nilai ujian minimal 60. Jika kurang, 
TIDAK LULUS.
Input
nilai
Proses
nilai >= 60 ?
Output
LULUS atau TIDAK LULUS

## Halaman 11

Contoh 1: Pseudocode dan Kode C++
11
PSEUDOCODE
START KELULUSAN
GET nilai
IF nilai >= 60 THEN
GIVE "LULUS"
ELSE
GIVE "TIDAK LULUS"
ENDIF
FINISH KELULUSAN
C++
#include <iostream>
using namespace std;
int main() {
int nilai;
cout << "Masukkan nilai ujian: ";
cin >> nilai;
if (nilai >= 60) {
cout << "LULUS" << endl;
} else {
cout << "TIDAK LULUS" << endl;
}
return 0;
}
HASIL
Masukan 60   →   LULUS

## Halaman 12

Contoh 2: Diskon Belanja Bertingkat
12
MASALAH
Total belanja ≥ Rp500.000 diskon 20%, ≥ Rp200.000 diskon 
10%, ≥ Rp100.000 diskon 5%, selain itu 0%.
Input
total
Proses
pilih persen, hitung bayar
Output
persen, diskon, bayar

## Halaman 13

Contoh 2: Pseudocode dan Kode C++
13
PSEUDOCODE
START DISKON
GET total
IF total >= 500000 THEN
LET persen = 20
ELSEIF total >= 200000 THEN
LET persen = 10
ELSEIF total >= 100000 THEN
LET persen = 5
ELSE
LET persen = 0
ENDIF
LET diskon = total * persen / 100
LET bayar = total - diskon
GIVE persen, diskon, bayar
FINISH DISKON
C++
int main() {
int total, persen, diskon, bayar;
cin >> total;
if (total >= 500000) {
persen = 20;
} else if (total >= 200000) {
persen = 10;
} else if (total >= 100000) {
persen = 5;
} else {
persen = 0;
}
diskon = total * persen / 100;
bayar = total - diskon;
cout << "Diskon = " << persen << "%" << endl;
cout << "Potongan = Rp " << diskon << endl;
cout << "Bayar = Rp " << bayar << endl;
return 0;
}
HASIL
Masukan 250000   →   Bayar Rp 225000

## Halaman 14

Urutan else if Menentukan Hasil
14
Benar: dari batas tertinggi
C++
if (nilai >= 85) {
grade = 'A';
} else if (nilai >= 70) {
grade = 'B';
} else {
grade = 'C';
}
Salah: urutan terbalik
C++
if (nilai >= 70) {
grade = 'B';
} else if (nilai >= 85) {
grade = 'A';   // tak pernah tercapai
} else {
grade = 'C';
}
Nilai 90: urutan benar menghasilkan A, urutan terbalik menghasilkan B.

## Halaman 15

Contoh 3: Tahun Kabisat
15
MASALAH
Tahun kabisat: habis dibagi 4 tetapi tidak habis dibagi 100, 
atau habis dibagi 400.
Input
tahun
Proses
tiga syarat, AND dan OR
Output
kabisat atau bukan

## Halaman 16

Contoh 3: Pseudocode dan Kode C++
16
PSEUDOCODE
START KABISAT
GET tahun
IF (tahun MOD 4 = 0 AND tahun MOD 100 <> 0)
OR tahun MOD 400 = 0 THEN
GIVE "Tahun kabisat"
ELSE
GIVE "Bukan tahun kabisat"
ENDIF
FINISH KABISAT
C++
int main() {
int tahun;
cin >> tahun;
if ((tahun % 4 == 0 && tahun % 100 != 0)
|| tahun % 400 == 0) {
cout << tahun << " adalah tahun kabisat" << endl;
} else {
cout << tahun << " bukan tahun kabisat" << endl;
}
return 0;
}
HASIL
Masukan 1900   →   bukan tahun kabisat

## Halaman 17

Uji Coba di Kertas (Dry Run): Tahun Kabisat
17
tahun
% 4 == 0
% 100 != 0
kolom 2 && 3
% 400 == 0
hasil
2024
Benar
Benar
Benar
Salah
kabisat
2023
Salah
Benar
Salah
Salah
bukan
1900
Benar
Salah
Salah
Salah
bukan
2000
Benar
Salah
Salah
Benar
kabisat
Rumus: (tahun % 4 == 0 && tahun % 100 != 0) || tahun % 400 == 0
1900 vs 2000
Sama-sama habis dibagi 100.
Hanya 2000 yang habis dibagi 400.
Coba sendiri
Apakah tahun 2100 adalah tahun 
kabisat? Isi tabel dry run-nya.

## Halaman 18

Contoh 4: Jenis Segitiga
18
MASALAH
Periksa dulu apakah tiga sisi bisa membentuk segitiga. Jika 
bisa, tentukan: sama sisi, sama kaki, atau sembarang.
Input
a, b, c
Proses
if di dalam if
Output
jenis segitiga

## Halaman 19

Contoh 4: Pseudocode dan Kode C++
19
PSEUDOCODE
START SEGITIGA
GET a, b, c
IF a + b > c AND a + c > b AND b + c > a 
THEN
IF a = b AND b = c THEN
GIVE "Segitiga sama sisi"
ELSEIF a = b OR a = c OR b = c THEN
GIVE "Segitiga sama kaki"
ELSE
GIVE "Segitiga sembarang"
ENDIF
ELSE
GIVE "Bukan segitiga"
ENDIF
FINISH SEGITIGA
C++
int main() {
int a, b, c;
cin >> a >> b >> c;
if (a + b > c && a + c > b && b + c > a) {
if (a == b && b == c) {
cout << "Segitiga sama sisi" << endl;
} else if (a == b || a == c || b == c) {
cout << "Segitiga sama kaki" << endl;
} else {
cout << "Segitiga sembarang" << endl;
}
} else {
cout << "Bukan segitiga" << endl;
}
return 0;
}
HASIL
Masukan 5 5 8   →   Segitiga sama kaki

## Halaman 20

switch-case: Aturan Penting
20
C++ · CONTOH FALL-THROUGH
switch (hari) {
case 1:
case 2:
case 3:
case 4:
case 5:
cout << "Hari kerja";
break;
case 6:
case 7:
cout << "Akhir pekan";
break;
default:
cout << "Tidak valid";
}
1
break
Mengakhiri switch setelah satu case. Tanpa break, 
program lanjut ke case berikutnya.
2
default
Pilihan cadangan, mirip else. Dijalankan jika tidak 
ada case yang cocok.
3
Hanya nilai tetap
Case berisi angka atau karakter. Rentang (≥ 60) 
memakai if.

## Halaman 21

Contoh 5: Menu Kantin
21
MASALAH
Pilih nomor menu 1 sampai 4, tampilkan nama dan harganya. 
Nomor lain: menu tidak tersedia.
Input
pilihan
Proses
cocokkan dengan nomor menu
Output
nama dan harga

## Halaman 22

Contoh 5: Pseudocode dan Kode C++
22
PSEUDOCODE
START MENU
GET pilihan
SWITCH pilihan
CASE 1
GIVE "Nasi Goreng", 15000
CASE 2
GIVE "Mie Ayam", 12000
CASE 3
GIVE "Soto", 13000
CASE 4
GIVE "Es Teh", 3000
DEFAULT
GIVE "Menu tidak tersedia"
ENDSWITCH
FINISH MENU
C++
int main() {
int pilihan;
cin >> pilihan;
switch (pilihan) {
case 1: cout << "Nasi Goreng, Rp 15000" << endl; break;
case 2: cout << "Mie Ayam, Rp 12000" << endl; break;
case 3: cout << "Soto, Rp 13000" << endl; break;
case 4: cout << "Es Teh, Rp 3000" << endl; break;
default:
cout << "Menu tidak tersedia" << endl;
}
return 0;
}
HASIL
Masukan 2   →   Mie Ayam, Rp 12000

## Halaman 23

Pseudocode ke C++: Tabel Konversi
23
Pseudocode
C++
IF kondisi THEN ... ENDIF
if (kondisi) { ... }
ELSEIF kondisi THEN
else if (kondisi) { ... }
ELSE
else { ... }
SWITCH x / CASE n / DEFAULT
switch (x) { case n: ... break; default: ... }
a = b   (membandingkan)
a == b
a <> b
a != b
AND   OR   NOT
&&   ||   !
a MOD b
a % b

## Halaman 24

Kesalahan yang Sering Terjadi
24
1
Satu = untuk membandingkan
Salah
if (nilai = 60)
Benar
if (nilai == 60)
2
Titik koma setelah kondisi
Salah
if (x > 5);
Benar
if (x > 5) {
3
Urutan else if terbalik
Salah
if (n >= 55) sebelum else if (n >= 
85)
Benar
Mulai dari batas tertinggi
4
Lupa break di switch
Salah
case 1: tanpa break;
Benar
case 1: ... break;

## Halaman 25

Latihan Berpasangan
25
Dasar
Tanda Bilangan
Baca bilangan bulat, tampilkan 
Positif, Negatif, atau Nol.
Menengah
Login Sederhana
Berhasil jika username admin dan 
password 1234, selain itu gagal.
Tantangan
Kategori IMT
IMT = berat / (tinggi × tinggi). 
Kurus, Normal, Gemuk, atau 
Obesitas.
Untuk tiap soal: flowchart → pseudocode (5 aturan) → C++ → uji dengan 2 data

## Halaman 26

Cek Pemahaman
26
1
Operator apa di C++ yang dipakai untuk memeriksa apakah a sama dengan b?
2
Berapa hasil ekspresi (7 > 3) && (2 > 5)?
3
Pada Contoh 2, berapa persen diskon untuk total belanja Rp250.000?

## Halaman 27

Ringkasan
27
Kondisi
Ekspresi bernilai benar atau 
salah
Operator
Relasional ( == != < > <= >= ) dan 
logika ( && || ! )
Bentuk
if, if-else, else if, nested if, dan 
switch-case
Ingat: else if mulai dari batas tertinggi, switch selalu memakai break, dan uji data di batas kondisi.
Tugas: kerjakan 3 soal latihan, lalu tulis kodenya di C++.
