# AP06 - Nested Loop - PPT.pdf

Sumber: [`materi/AP06 - Nested Loop - PPT.pdf`](../../materi/AP06%20-%20Nested%20Loop%20-%20PPT.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

Nested Loop
Looping Bersarang pada C++
A L G O R I T M A & P E M R O G R A M A N 1  |  M O D U L 6
Universitas Siber Asia
for (i = 1; i <= 3; i++)
for (j = 1; j <= 3; j++)
cout << "* ";

## Halaman 2

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Tujuan Pembelajaran
Setelah modul ini, 
Anda mampu:
1
Menjelaskan konsep dan cara kerja nested loop
2
Menulis nested loop for dengan benar
3
Membuat pola bintang dan angka
4
Membuat tabel perkalian
5
Menghitung iterasi dan menghindari kesalahan umum
2

## Halaman 3

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Ingat Kembali: Loop for
for (int i = 1; i <= 5; i++)
{
cout << i << " ";
}
Output: 1 2 3 4 5
Bagaimana kalau perulangannya ada di 
dalam perulangan?
1
Inisialisasi  int i = 1
mulai dari angka berapa
2
Kondisi  i <= 5
lanjut selama bernilai benar
3
Update  i++
naik satu setiap putaran
3

## Halaman 4

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Apa Itu Nested Loop?
Nested loop
Loop yang berada di dalam badan loop 
lain.
for (...)
{
for (...)
{
...
}
}
Analogi: jam dinding
•
Jarum jam bergeser 1 langkah (loop luar)
•
Jarum menit berputar 60 kali penuh (loop 
dalam)
Setiap 1 langkah loop luar, loop dalam 
berjalan penuh sampai selesai.
4

## Halaman 5

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Contoh di Kehidupan Nyata
Kursi bioskop
Loop luar: Baris kursi
Loop dalam: Nomor kursi
Tabel nilai
Loop luar: Mahasiswa
Loop dalam: Mata kuliah
Gambar digital
Loop luar: Baris piksel
Loop dalam: Kolom piksel
Pola umum: baris diatur oleh loop luar, kolom diatur oleh loop dalam.
5

## Halaman 6

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Bentuk Umum
for (int i = 1; i <= 3; i++)
{
// badan loop luar
for (int j = 1; j <= 4; j++)
{
// badan loop dalam
}
}
1
Loop luar (i)
Mengatur baris atau putaran besar
2
Loop dalam (j)
Berjalan penuh setiap i berganti
3
Variabel berbeda
Pakai i untuk luar, j untuk dalam
Tidak ada batas jumlah sarang, tetapi pemula cukup memakai dua tingkat.
6

## Halaman 7

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Cara Kerja Nested Loop
for (int i = 1; i <= 3; i++)
for (int j = 1; j <= 2; j++)
cout << i << "," << j << " ";
Output: 1,1 1,2 2,1 2,2 3,1 3,2
Loop luar 3 kali
Loop dalam 2 kali tiap putaran
Total 3 × 2 = 6 putaran
Putaran
i
j
Tampil
1
1
1
1,1
2
1
2
1,2
3
2
1
2,1
4
2
2
2,2
5
3
1
3,1
6
3
2
3,2
Tebal = nilai i baru berganti
7

## Halaman 8

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Program: Persegi Bintang
#include <iostream>
using namespace std;
int main()
{
for (int i = 1; i <= 3; i++)
{
for (int j = 1; j <= 5; j++)
{
cout << "* ";
}
cout << endl;
}
return 0;
}
OUTPUT
* * * * *
* * * * *
* * * * *
1
Loop luar (i): 3 kali = 3 baris
2
Loop dalam (j): 5 kali = 5 bintang per 
baris
3
endl: pindah baris setelah 1 baris selesai
8

## Halaman 9

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Letak endl Itu Penting
endl di loop dalam
for (i...)
for (j...)
cout << "* " << endl;
*
*
*
... (15 baris)
SALAH
endl setelah loop dalam
for (i...)
{
for (j...)
cout << "* ";
cout << endl;
}
* * * * *
* * * * *
* * * * *
BENAR
endl setelah semua loop
for (i...)
for (j...)
cout << "* ";
cout << endl;
* * * * * * * * * * ...
(1 baris, 15 bintang)
SALAH
9

## Halaman 10

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Pola: Segitiga Siku-siku
for (int i = 1; i <= 5; i++)
{
for (int j = 1; j <= i; j++)
cout << "* ";
cout << endl;
}
*
* *
* * *
* * * *
* * * * *
i
Loop dalam
Bintang
1
j = 1
1
2
j = 1 sampai 2
2
3
j = 1 sampai 3
3
4
j = 1 sampai 4
4
5
j = 1 sampai 5
5
Kunci: j <= i, bukan j <= 5
10

## Halaman 11

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Pola: Segitiga Terbalik
for (int i = 5; i >= 1; i--)
{
for (int j = 1; j <= i; j++)
cout << "* ";
cout << endl;
}
* * * * *
* * * *
* * *
* *
*
1
Loop luar menghitung mundur
i dimulai dari 5, turun dengan i--
2
Loop dalam tetap sama
j <= i, jadi makin ke bawah makin pendek
3
Hasilnya
baris 1 berisi 5 bintang, baris 5 berisi 1
11

## Halaman 12

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Pola: Segitiga Angka
Cetak nomor kolom (j)
for (int i = 1; i <= 4; i++)
{
for (int j = 1; j <= i; j++)
cout << j << " ";
cout << endl;
}
1
1 2
1 2 3
1 2 3 4
Cetak nomor baris (i)
for (int i = 1; i <= 4; i++)
{
for (int j = 1; j <= i; j++)
cout << i << " ";
cout << endl;
}
1
2 2
3 3 3
4 4 4 4
Yang dicetak: j berarti angka naik per kolom, i berarti angka tetap per baris.
12

## Halaman 13

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Pola: Piramida
for (int i = 1; i <= 4; i++)
{
for (int s = 1; s <= 4 - i; s++)
cout << " ";
for (int j = 1; j <= 2 * i - 1; j++)
cout << "*";
cout << endl;
}
*
***
*****
*******
i
Spasi
Bintang
1
3
1
2
2
3
3
1
5
4
0
7
Spasi = n - i
Bintang = 2i - 1
13

## Halaman 14

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Program: Tabel Perkalian
for (int i = 1; i <= 5; i++)
{
for (int j = 1; j <= 5; j++)
cout << i * j << "\t";
cout << endl;
}
OUTPUT
1    2    3    4    5
2    4    6    8    10
3    6    9    12   15
4    8    12   16   20
5    10   15   20   25
i
nomor baris
angka pertama
j
nomor kolom
angka kedua
i * j
isi sel tabel
hasil perkalian
14

## Halaman 15

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Program Interaktif dengan cin
int n;
cout << "Tinggi segitiga: ";
cin >> n;
for (int i = 1; i <= n; i++)
{
for (int j = 1; j <= i; j++)
cout << "* ";
cout << endl;
}
CONTOH JALANNYA PROGRAM
Tinggi segitiga: 4
*
* *
* * *
* * * *
cin >> n;
menentukan batas loop luar
Satu program, banyak ukuran: cukup ganti nilai n saat dijalankan.
15

## Halaman 16

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Berapa Kali Loop Berjalan?
PERSEGI PANJANG
24
4 × 6
Loop luar 4 kali, loop dalam 6 
kali
SEGITIGA n = 5
15
1 + 2 + 3 + 4 + 5
Loop dalam bertambah tiap baris
TIGA LOOP BERSARANG
1.000
10 × 10 × 10
Tiga loop, masing-masing 10 kali
Makin dalam sarangnya, makin banyak putaran. Loop bersarang yang besar membuat program 
berjalan lambat.
16

## Halaman 17

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
break di Nested Loop
for (int i = 1; i <= 3; i++)
{
for (int j = 1; j <= 5; j++)
{
if (j == 3) break;
cout << j << " ";
}
cout << endl;
}
OUTPUT
1 2
1 2
1 2
break hanya menghentikan loop 
terdalam. Loop luar tetap lanjut.
continue juga hanya berlaku untuk loop terdalam yang sedang berjalan.
17

## Halaman 18

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Kesalahan Umum
Kesalahan
Akibat
Perbaikan
Variabel sama di kedua loop
Loop dalam mengubah nilai i milik loop 
luar
Pakai i untuk luar, j untuk dalam
endl di dalam loop dalam
Semua bintang menjadi satu kolom
Taruh endl setelah loop dalam
Batas dalam tetap (j <= 5)
Hasilnya persegi, bukan segitiga
Pakai j <= i
Salah memakai < atau <=
Kurang atau lebih satu putaran
Telusuri dengan nilai kecil
Lupa kurung kurawal { }
Hanya satu perintah ikut loop
Beri { } bila perintah lebih dari satu
18

## Halaman 19

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Tebak Outputnya
for (int i = 1; i <= 3; i++)
{
for (int j = 1; j <= i; j++)
cout << i;
cout << endl;
}
Tebak dulu outputnya, lalu 
jalankan di komputer.
JAWABAN
1
22
333
Petunjuk: loop dalam berjalan 
sebanyak i kali, dan yang dicetak 
adalah i.
19

## Halaman 20

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Bahan Diskusi
1
Beri contoh sehari-hari yang berpola 
baris dan kolom. Mana loop luar dan 
dalam?
2
Apa yang terjadi bila endl dipindah ke 
dalam loop dalam?
3
Mengapa segitiga memakai j <= i, 
bukan j <= 5?
4
Loop luar 10 kali dan loop dalam 10 
kali: berapa kali perintah di dalamnya 
berjalan?
20

## Halaman 21

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Latihan Mandiri
Dasar
•
Cetak persegi bintang 
ukuran 4
•
Cetak angka 1 sampai 5 
sebanyak 3 baris
•
Cetak segitiga bintang 
setinggi 5
Menengah
•
Segitiga terbalik dengan 
tinggi dari input
•
Segitiga angka 1, 12, 123, 
dan seterusnya
•
Tabel perkalian 1 sampai 
10
Tantangan
•
Piramida bintang dengan 
tinggi dari input
•
Belah ketupat: piramida 
lalu piramida terbalik
•
Uji dengan minimal dua 
ukuran
21

## Halaman 22

Algoritma dan Pemrograman 1  |  Universitas Siber Asia
Rangkuman
Nested loop adalah loop di dalam loop
Loop luar berjalan sekali, loop dalam 
berjalan penuh
Total putaran = putaran luar × putaran 
dalam
Loop luar mengatur baris, loop dalam 
mengatur kolom
endl diletakkan setelah loop dalam 
untuk pindah baris
break hanya menghentikan loop 
terdalam
22

## Halaman 23

Terima kasih
Selamat berlatih C++
A L G O R I T M A & P E M R O G R A M A N 1  |  M O D U L 6
Universitas Siber Asia
