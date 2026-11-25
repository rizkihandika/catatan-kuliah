# Dasar Pemrograman Pertemuan 6.pdf

Sumber: [`materi/Dasar Pemrograman Pertemuan 6.pdf`](../../materi/Dasar%20Pemrograman%20Pertemuan%206.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

Dasar Pemrograman
Program Studi Informatika
Sesi 6 – Operasi, Operator, dan Operan 
Riad Sahara, S.SI., M.T

## Halaman 2

Outline Perkuliahan
• Definisi Operasi, Operator dan Operan
• Jenis-jenis Operator

## Halaman 3

Definisi
3
• Operator: simbol yang merepresentasikan suatu tindakan spesifik
• Operan: object dari sebuah operasi
• Operasi: pemrosesan data berdasarkan aturan yang spesifik
Operasi Penjumlahan
X + Y
Operator
+
Operan
X dan Y

## Halaman 4

Jenis-Jenis Operator
4
• Arithmetic Operators
• Assignment Operators
• Bitwise Operators
• Comparison Operators
• Incrementing/Decrementing Operators
• Logical Operators
• String Operators
• Array Operators

## Halaman 5

Arithmetic Operators
5
• Operator aritmatika merupakan operator yang berfungsi untuk 
operasi aritmatika
Simbol
Nama
Hasil Operasi
Contoh
+
Penjumlahan
Penjumlahan dua bilangan
x + y
-
Pengurangan
Pengurangan dua bilangan
x – y
*
Perkalian
Perkalian dua bilangan
x * y
/
Pembagian
Pembangian dua bilangan
x / y

## Halaman 6

Catatan
6
• Pada operasi aritmatika, perhatikan operasi mana yang harus 
didahulukan
• Urutan operasi aritmatika
▪Urutan #1: * atau /
▪Urutan #2: + atau –
Knowledge Check
Bagaimana urutan operasi aritmatika:
a + b + c * d / e - f

## Halaman 7

Assignment Operators
7
• Operator penugasan merupakan operator yang berfungsi untuk 
memberi nilai terhadap variabel atau konstanta
Simbol
Nama
Hasil Operasi
Contoh
=
Penugasan
Operan kiri diberi nilai 
yang sama seperti pada 
ekspresi sebelah kanan
x = 5

## Halaman 8

Bitwise Operators
8
• Operator bitwise merupakan operator yang dipakai untuk operasi bit 
pada nilai operan
Simbol
Nama
Hasil Operasi
Contoh
&
And
Hasil operasi And
a & b
|
Or
Hasil operasi Or
a | b
^
Xor
Hasil operasi Xor
a ^ b
~
Not
Hasil operasi komplemen
~a
<<
Shift left
Geser bit ke kiri
a << b
>>
Shift right
Geser bit ke kanan
a >> b

## Halaman 9

Catatan
9
• Bitwise operator mengevaluasi setiap bit dari suatu operan
• Perhatikan nilai kebenaran dari hasil operasi
A
B
~A
A & B
A | B
A ^ B
1
1
0
1
1
0
1
0
0
0
1
1
0
1
1
0
1
1
0
0
1
0
0
0

## Halaman 10

10
Contoh operasi:
(0 = 0000) & (5 = 0101) = (0 = 0000)
(1 = 0001) & (5 = 0101) = (1 = 0001)
(0 = 0000) | (5 = 0101) = (5 = 0101)
(1 = 0001) | (5 = 0101) = (5 = 0101)
(0 = 0000) ^ (5 = 0101) = (5 = 0101)
(1 = 0001) ^ (5 = 0101) = (4 = 0100)

## Halaman 11

Catatan
11
• Shift Right: x >> y →geser ke kanan y bit
• Contoh:
4 >> 1
4 = 0100
Geser 1 bit ke kanan →2 = 0010

## Halaman 12

Comparison Operators
12
Operator perbandingan merupakan operator yang digunakan untuk 
membandingkan nilai operan
Simbol
Nama
Hasil Operasi
Contoh
==
Sama dengan
TRUE jika kedua nilai sama
a == b
!=
Tidak sama dengan
TRUE jika kedua nilai berbeda
a != b
<
Lebih kecil
TRUE jika operan kiri lebih kecil 
dari kanan
a < b
>
Lebih besar
TRUE jika operan kiri lebih besar 
dari kanan
a > b
<=
Lebih kecil sama 
dengan
TRUE jika operan kiri lebih kecil 
atau sama dengan kanan
a <= b
>=
Lebih besar sama 
dengan
TRUE jika operan kiri lebih besar 
atau sama dengan kanan
a >= b

## Halaman 13

Incrementing/Decrementing
Operators
13
• Operator incrementing/decrementing berfungsi untuk 
menambah/mengurangi nilai suatu variabel
Simbol
Nama
Hasil Operasi
Contoh
++
Increment
Nilai bertambah satu
a++
--
Decrement
Nilai berkurang satu
b--

## Halaman 14

Logical Operators
14
• Operator logika merupakan operator yang mengharuskan operannya 
bertipe boolean
Simbol
Nama
Hasil Operasi
Contoh
!
Not
TRUE jika operan NOT TRUE
!a
&&
And
TRUE jika kedua operan TRUE 
a && b
||
Or
TRUE jika salah satu operan 
TRUE
a || b

## Halaman 15

String Operators
15
• Operator yang digunakan untuk memanipulasi operan yang bertipe 
string
Simbol Nama
Hasil Operasi
Contoh
.
Concatenation
Menambahkan operan kiri 
dengan kanan
a . b
.=
Concatenating 
assignment
Menambahkan argumen 
pada sisi kanan dengan kiri
a .= “x”

## Halaman 16

Catatan
16
• Concatenation artinya menambahkan/ menyambung dua string
• Contoh:
A = “Hello”
B = “World”
A . B = “Hello World”

## Halaman 17

Catatan
17
• Concatenating assignment artinya menambahkan/menyambung 
argumen pada sisi kanan dengan kiri
• Contoh:
A = “Hello”
A .= “World”
Nilai A menjadi “Hello World”

## Halaman 18

Array Operators
18
• Operator yang digunakan untuk memanipulasi operan bertipe array
Simbol Nama
Hasil Operasi
Contoh
+
Union
Menggabungkan 
elemen-elemen pada 
kedua array
a + b
==
Sama dengan
TRUE jika kedua elemen 
array sama
a == b
!=
Tidak sama 
dengan
TRUE jika kedua elemen 
array tidak sama
a != b

## Halaman 19

Catatan
19
• Union artinya menggabungkan elemen-elemen pada dua array
• Contoh:
A = (“apple”, “banana”)
B = (“pear”, “strawberry”, “cherry”)
A + B = (“apple”, “banana”, “pear”, “strawberry”, “cherry”)

## Halaman 20

Terima Kasih
