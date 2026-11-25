# Dasar Pemrograman Pertemuan 4.pdf

Sumber: [`materi/Dasar Pemrograman Pertemuan 4.pdf`](../../materi/Dasar%20Pemrograman%20Pertemuan%204.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

Dasar Pemrograman
Program Studi Informatika
Sesi 4 – Pseudocode
Riad Sahara, S.SI., M.T

## Halaman 2

Outline Perkuliahan
• Bentuk Penulisan Pseudocode
• Contoh dan Penyelesaian Masalah
• Studi Kasus

## Halaman 3

Definisi Pseudocode
3
• Pseudocode adalah deskripsi informal tingkat tinggi dari prinsip 
operasi sebuah program komputer atau algoritma lainnya. Ia 
menggunakan konvensi struktural bahasa pemrograman, tetapi 
dimaksudkan untuk dibaca manusia daripada mesin.
• Pseudo code
• Pseudo: semu atau tidak sebenarnya
• Code: kode

## Halaman 4

Aturan Penulisan Pseudocode
4
1. Tulis satu pernyataan setiap baris
2. Tulis kata kunci dengan huruf kapital
3. Indent untuk menunjukkan hirarki
4. Akhiri struktur multi-baris
5. Jaga independensi bahasa pernyataan

## Halaman 5

1. Tulis satu pernyataan setiap baris
5
• Setiap pernyataan dalam pseudocode harus mengungkapkan hanya 
satu aksi untuk komputer. 
Uraian Kegiatan
Pseudocode
Read name, hours worked, rate of pay
Perform calculations
gross = hours worked * rate of pay
Write name, hours worked, gross
GET name
GET hoursWorked
GET payRate
LET gross = hoursWorked * payRate
GIVE name, hoursWorked, gross

## Halaman 6

2. Tulis kata kunci dengan huruf kapital
6
• Tulis kata kunci dengan huruf kapital untuk menekankan sebuah 
instruksi.
• Kata kunci: GET, SET, LET, IF, ELSE, WHILE, GIVE, dst.
Pseudocode
GET name
GET hoursWorked
GET payRate
LET gross = hoursWorked * payRate
GIVE name, hoursWorked, gross

## Halaman 7

3. Indent untuk menunjukkan hirarki
7
• Setiap struktur kendali memiliki pola indentasi yang berbeda:
• Sequence: setiap pernyataan mulai pada kolom yang sama
• Selection: inden pernyataan yang berada dalam struktur selection, kecuali 
kata kunci selection (IF, ELSEIF, ELSE, dll.)
• Loop: inden pernyataan yang berada dalam struktur loop, kecuali kata kunci 
loop (WHILE, FOR, dll.)

## Halaman 8

4. Akhiri struktur multi-baris
8
• IF diakhiri dengan ENDIF
• WHILE diakhiri dengan ENDWHILE
• FOR diakhiri dengan ENDFOR

## Halaman 9

5. Jaga independensi bahasa pernyataan
9
• Pseudocode merupakan bahasa universal. Jangan gunakan bahasa 
pemrograman yang spesifik dalam menuliskan pseudocode.
• Ingat, di sini kita mendeskripsikan logika dalam sebuah program, 
belum melakukan programming!

## Halaman 10

Pseudocode VS Flowchart
10
Pseudocode
Flowchart
Kelebihan:
✓Mudah diubah 
✓Menerapkan konsep terstruktur 
✓Dilakukan dengan mudah pada 
Word Processor
Kelebihan:
✓Terstandarisasi
✓Memiliki gambaran secara visual
Kekurangan:
✓Tidak visual
✓Tidak ada standar yang diterima dan 
sangat variatif
Kekurangan:
✓Sulit untuk memodifikasi 
✓Elemen desain terstruktur tidak 
diterapkan 
✓Software khusus yang diperlukan

## Halaman 11

Latihan
11
• Tulislah algoritma (deskripsi & method) berdasarkan flowchart 
dengan menerapkan aturan dalam penulisan pseudocode

## Halaman 12

12
Start
BIG3
Get N1
Get N2
Get N3
If (N1 > N2)
Let Largest = N1
Let Largest = N2
If (N3 > Largest)
Let Largest = N3
Give Largest
Finish
BIG3
N
Y
N
Y
Start
FARE
Get Age
If (Age < 16)
If (Age > 65)
Let Price = $7
Let Price = 5$
Let Price = $10
Give Price
Finish
FARE
N
N
Y
Y
Start
SORT3
Get X1
Get X2
Get X3
If (X1 > X2)
Let Temp = X1
Let X1 = X2
Let X2 = Temp
Give X1
Give X2
Give X3
Finish
SORT3
N
Y
If (X2 > X3)
Let Temp = X2
Let X2 = X3
Let X3 = Temp
N
If (X1 > X2)
Let Temp = X1
Let X1 = X2
Let X2 = Temp
N
Y
Y
1
2
3

## Halaman 13

Terima Kasih
