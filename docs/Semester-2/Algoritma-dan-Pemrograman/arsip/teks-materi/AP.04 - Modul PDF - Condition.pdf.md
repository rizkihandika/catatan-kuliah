# AP.04 - Modul PDF - Condition.pdf

Sumber: [`materi/AP.04 - Modul PDF - Condition.pdf`](../../materi/AP.04%20-%20Modul%20PDF%20-%20Condition.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

Halaman 1
M O D U L
Condition (Percabangan)
dengan Bahasa C++
Mata Kuliah
:
Algoritma dan Pemrograman
Bobot Sks
:
2
Dosen Pengembang
:
Riad Sahara, S.SI, M.T
Tutor
:
Yunan Fauzi Wijaya
Capaian Pembelajaran
Mata Kuliah
:
1. Mahasiswa mampu memahami konsep condition (percabangan) dan
menerapkannya dalam bahasa C++
Kompetensi Akhir di Setiap
Tahap (Sub-CPMK)
:
1. Mahasiswa memahami ekspresi kondisi, operator relasional, dan operator logika
2. Mahasiswa memahami penulisan if, if-else, else if, nested if, dan switch-case
3. Mahasiswa menggunakan condition untuk menyelesaikan suatu masalah
Minggu Perkuliahan
Online Ke-
:
4
Cara memakai modul ini
Baca bab 1 sampai 3 untuk memahami konsep. Lanjutkan ke bab 4 dan ketik ulang setiap kode C++ sendiri,
jangan hanya menyalin. Kerjakan latihan di bab 6, lalu cocokkan dengan kunci jawaban di lampiran.
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 2

Halaman 2
Capaian Pembelajaran
Setelah mempelajari modul ini, mahasiswa mampu:
1. Menjelaskan fungsi condition (percabangan) dalam sebuah program.
2. Menulis ekspresi kondisi dengan operator relasional dan operator logika.
3. Menulis if, if-else, else if, nested if, dan switch-case dalam pseudocode dan C++.
4. Menggambar flowchart percabangan dengan label Ya dan Tidak yang benar.
5. Menguji logika percabangan dengan data uji, termasuk data di batas kondisi, dan dengan uji coba di kertas
(dry run).
Peta kegiatan (±100 menit)
Kegiatan
Isi
Waktu
Pembukaan
Tujuan, analogi pengambilan keputusan sehari-hari, diskusi singkat
10 menit
Konsep condition
Ekspresi kondisi, operator relasional dan logika, bentuk if dan switch
20 menit
Flowchart percabangan
Pola flowchart if dan if-else, aturan label Ya dan Tidak
10 menit
Contoh kasus
Contoh 1 sampai 5, dry run, konversi ke C++
40 menit
Latihan
Latihan berpasangan dan pembahasan
15 menit
Penutup
Kuis singkat dan ringkasan
5 menit
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 3

Halaman 3
Bab 1. Mengapa Program Perlu Mengambil Keputusan?
Bayangkan Anda berangkat kuliah. Jika hujan, Anda membawa payung. Jika tidak hujan, Anda cukup memakai
topi. Anda mengambil keputusan berdasarkan sebuah kondisi, yaitu apakah hari ini hujan.
Program komputer juga perlu begitu. Aplikasi ATM hanya mengeluarkan uang jika PIN benar. Mesin kasir
memberi diskon jika total belanja cukup besar. Lampu lalu lintas berganti warna sesuai waktu. Tanpa kemampuan
memilih, program hanya bisa menjalankan langkah yang sama setiap kali.
Kemampuan memilih jalur ini disebut condition atau percabangan. Dalam tiga struktur kendali, condition adalah
struktur selection.
Diskusi
Sebutkan tiga keputusan yang diambil aplikasi di ponsel Anda hari ini (misalnya notifikasi baterai lemah atau kata
sandi salah). Apa kondisi yang diperiksa pada tiap keputusan?
Tiga struktur kendali
Semua program tersusun dari tiga struktur. Pertemuan sebelumnya membahas ketiganya secara garis besar.
Pertemuan ini berfokus pada selection.
Struktur
Artinya
Contoh sehari-hari
Kata kunci
Sequence
Langkah dijalankan
berurutan
Mencuci baju: rendam, kucek, bilas
GET, LET, GIVE
Selection
Memilih salah satu jalur
Kalau hujan bawa payung, kalau tidak pakai
topi
IF, ELSEIF, ELSE,
SWITCH
Loop
Mengulang langkah
Selama bak belum penuh, terus isi air
WHILE, FOR
Lima bentuk condition
C++ menyediakan beberapa bentuk condition. Pilih bentuk yang paling sesuai dengan masalahnya.
Bentuk
Kapan dipakai
Contoh sehari-hari
if
Ada satu aksi tambahan yang hanya dilakukan jika syarat
benar
Jika saldo kurang, tampilkan peringatan
if-else
Dua pilihan: salah satu pasti dijalankan
Jika nilai ≥ 60 LULUS, jika tidak TIDAK
LULUS
if - else if -
else
Banyak pilihan bertingkat pada rentang nilai
Grade A, B, C, atau D
nested if
Syarat kedua baru diperiksa setelah syarat pertama
terpenuhi
Cek segitiga valid, baru cek jenisnya
switch-case
Satu variabel dibandingkan dengan beberapa nilai tetap
Pilih menu nomor 1 sampai 4
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 4

Halaman 4
Bab 2. Ekspresi Kondisi
2.1 Nilai kebenaran
Setiap condition memeriksa sebuah ekspresi kondisi. Hasil ekspresi ini hanya ada dua kemungkinan: benar
(true) atau salah (false). Di C++, nilai ini bisa disimpan dalam variabel bertipe bool.
#include <iostream>
using namespace std;
int main() {
    int nilai = 75;
    bool lulus = (nilai >= 60);
    cout << lulus << endl;
    return 0;
}
Program di atas menampilkan 1. Saat ditampilkan dengan cout, true tampil sebagai 1 dan false tampil
sebagai 0.
2.2 Operator relasional
Operator relasional membandingkan dua nilai dan menghasilkan benar atau salah. Contoh di bawah memakai
nilai = 70.
Pseudocode
C++
Artinya
Contoh
Hasil
=
==
sama dengan
nilai == 70
benar
<>
!=
tidak sama dengan
nilai != 70
salah
<
<
lebih kecil
nilai < 60
salah
>
>
lebih besar
nilai > 60
benar
<=
<=
lebih kecil atau sama dengan
nilai <= 70
benar
>=
>=
lebih besar atau sama dengan
nilai >= 80
salah
Awas: = dan == berbeda
Satu tanda sama dengan = berarti memberi nilai. Dua tanda sama dengan == berarti membandingkan. Menulis
if (nilai = 60) tidak membandingkan, melainkan mengisi nilai dengan 60.
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 5

Halaman 5
2.3 Operator logika
Operator logika menggabungkan beberapa ekspresi kondisi menjadi satu.
Pseudocode
C++
Artinya
Contoh
AND
&&
benar jika kedua sisi benar
umur >= 17 && punyaKTP
OR
||
benar jika salah satu sisi benar
hari == 6 || hari == 7
NOT
!
membalik benar menjadi salah dan sebaliknya
!(nilai >= 60)
Tabel kebenaran
A
B
A && B (AND)
A || B (OR)
!A (NOT)
benar
benar
benar
benar
salah
benar
salah
salah
benar
salah
salah
benar
salah
benar
benar
salah
salah
salah
salah
benar
Urutan prioritas
Jika beberapa operator muncul dalam satu ekspresi, C++ menghitung dalam urutan: ! lebih dulu, lalu &&, lalu
||. Operator relasional dihitung sebelum operator logika. Pakai tanda kurung agar maksud Anda jelas, seperti
pada contoh tahun kabisat nanti.
Menulis rentang
Kondisi "nilai antara 0 dan 100" ditulis nilai >= 0 && nilai <= 100. Penulisan 0 <= nilai <=
100 tidak memberi hasil yang diharapkan di C++.
2.4 Kata kunci dan padanannya di C++
Kata kunci
Artinya
Padanan di C++
IF kondisi THEN ... ENDIF
Jalankan jika kondisi benar
if (kondisi) { }
ELSE
Jalur jika kondisi salah
else { }
ELSEIF kondisi THEN
Kondisi tambahan
else if (kondisi) { }
SWITCH x ... ENDSWITCH
Pilih berdasarkan nilai x
switch (x) { }
CASE nilai
Salah satu pilihan nilai
case nilai: ... break;
DEFAULT
Pilihan cadangan
default:
AND / OR / NOT
Operator logika
&& / || / !
= dan <>
Sama dengan dan tidak sama dengan
== dan !=
a MOD b
Sisa pembagian
a % b
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 6

Halaman 6
Bab 3. Struktur Condition di C++
3.1 if
Bentuk paling sederhana. Blok di dalam kurung kurawal hanya dijalankan jika kondisi benar. Jika salah, blok
dilewati.
P SEUD O CO D E
IF kondisi THEN
    pernyataan
ENDIF
KO D E C + +
if (kondisi) {
    pernyataan;
}
Contoh: mahasiswa dengan nilai minimal 80 mendapat tambahan 10 poin.
#include <iostream>
using namespace std;
int main() {
    int nilai = 85, poin = 0;
    if (nilai >= 80) {
        poin = 10;
    }
    cout << "Poin = " << poin << endl;
    return 0;
}
START
kondisi ?
Pernyataan A
FINISH
Ya
Tidak
Gambar 1. Pola flowchart if tunggal
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 7

Halaman 7
3.2 if-else
Menyediakan dua jalur. Tepat satu dari dua blok akan dijalankan.
P SEUD O CO D E
IF kondisi THEN
    pernyataan A
ELSE
    pernyataan B
ENDIF
KO D E C + +
if (kondisi) {
    pernyataan A;
} else {
    pernyataan B;
}
START
kondisi ?
Pernyataan A
Pernyataan B
FINISH
Ya
Tidak
Gambar 2. Pola flowchart if-else
3.3 if - else if - else
Dipakai jika ada lebih dari dua pilihan. C++ memeriksa kondisi dari atas ke bawah. Begitu ada yang benar, blok itu
dijalankan dan sisanya dilewati.
P SEUD O CO D E
IF kondisi1 THEN
    pernyataan A
ELSEIF kondisi2 THEN
    pernyataan B
ELSE
    pernyataan C
ENDIF
KO D E C + +
if (kondisi1) {
    pernyataan A;
} else if (kondisi2) {
    pernyataan B;
} else {
    pernyataan C;
}
Urutan menentukan hasil
Mulailah dari batas tertinggi (atau yang paling khusus). Jika ditulis terbalik, kondisi pertama yang longgar
menangkap hampir semua nilai. Contoh: if (nilai >= 55) ditulis sebelum else if (nilai >= 85)
membuat nilai 90 ikut masuk ke blok pertama.
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 8

Halaman 8
3.4 Nested if
Sebuah if boleh berada di dalam blok if atau else yang lain. Syarat di dalam hanya diperiksa jika syarat di luarnya
terpenuhi. Gunakan indentasi yang konsisten agar mudah dibaca. Contoh 4 memakai bentuk ini.
3.5 switch-case
Dipakai jika satu variabel (bertipe bilangan bulat atau karakter) dibandingkan dengan beberapa nilai tetap.
P SEUD O CO D E
SWITCH variabel
    CASE nilai1
        pernyataan A
    CASE nilai2
        pernyataan B
    DEFAULT
        pernyataan C
ENDSWITCH
KO D E C + +
switch (variabel) {
    case nilai1:
        pernyataan A;
        break;
    case nilai2:
        pernyataan B;
        break;
    default:
        pernyataan C;
}
break mengakhiri switch setelah satu case selesai. Tanpa break, program terus mengerjakan case berikutnya
(disebut fall-through).
default bersifat opsional dan dijalankan jika tidak ada case yang cocok.
Nilai pada case harus berupa konstanta, misalnya case 1: atau case 'A':. Rentang seperti nilai ≥ 60
tidak bisa ditulis di case, pakai if untuk itu.
Fall-through justru berguna jika beberapa case memberi hasil yang sama:
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 9

Halaman 9
#include <iostream>
using namespace std;
int main() {
    int hari;
    cin >> hari;
    switch (hari) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            cout << "Hari kerja" << endl;
            break;
        case 6:
        case 7:
            cout << "Akhir pekan" << endl;
            break;
        default:
            cout << "Hari tidak valid" << endl;
    }
    return 0;
}
Masukan 3 menghasilkan Hari kerja, 7 menghasilkan Akhir pekan, dan 9 menghasilkan Hari tidak
valid.
3.6 Catatan: operator ternary
Untuk if-else yang hanya memilih satu nilai, C++ punya bentuk singkat kondisi ? nilaiJikaBenar :
nilaiJikaSalah.
#include <iostream>
using namespace std;
int main() {
    int nilai = 55;
    string hasil = (nilai >= 60) ? "LULUS" : "TIDAK LULUS";
    cout << hasil << endl;
    return 0;
}
Program ini menampilkan TIDAK LULUS. Bentuk ini praktis, tetapi pakai if-else biasa jika blok berisi lebih dari
satu pernyataan.
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 10

Halaman 10
3.7 Aturan flowchart untuk percabangan
1. Pakai simbol belah ketupat untuk setiap pemeriksaan kondisi.
2. Beri label Ya dan Tidak pada kedua jalur keluar.
3. Semua cabang bertemu kembali sebelum FINISH.
4. Tulis kondisi singkat dengan operator pseudocode (=, <>, AND, OR).
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 11

Halaman 11
Bab 4. Contoh dan Penyelesaian
Setiap contoh memakai urutan yang sama: masalah, analisis input-proses-output, flowchart, pseudocode, kode
C++, uji coba, dan penjelasan. Ikuti urutan ini juga saat mengerjakan latihan.
Catatan tentang kode C++
Setiap program diawali dengan baris #include <iostream> dan using namespace std; agar cin
dan cout bisa dipakai. Jalankan setiap program dengan beberapa data uji, termasuk data di batas kondisi.
Contoh 1: Kelulusan Ujian
Masalah. Seorang mahasiswa dinyatakan LULUS jika nilai ujiannya minimal 60. Jika kurang dari 60, ia TIDAK
LULUS. Nilai dimasukkan oleh pengguna.
Komponen
Isi
Input (masukan)
nilai
Proses
bandingkan nilai dengan 60
Output (keluaran)
tulisan "LULUS" atau "TIDAK LULUS"
START KELULUSAN
GET nilai
nilai >= 60 ?
GIVE "LULUS"
GIVE "TIDAK LULUS"
FINISH KELULUSAN
Ya
Tidak
Gambar 3. Flowchart kelulusan ujian (struktur if-else)
P SEUD O CO D E
START KELULUSAN
GET nilai
IF nilai >= 60 THEN
    GIVE "LULUS"
ELSE
    GIVE "TIDAK LULUS"
ENDIF
FINISH KELULUSAN
KO D E C + +
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 12

Halaman 12
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
Uji coba
Masukan
Keluaran yang diharapkan
75 (nilai = 75)
LULUS
60 (nilai = 60 (tepat di batas))
LULUS
59 (nilai = 59)
TIDAK LULUS
Penjelasan
Hanya satu dari dua blok yang dijalankan: blok if saat kondisi benar, blok else saat kondisi salah.
Tanda >= berarti lebih besar atau sama dengan, sehingga nilai 60 tepat masuk ke LULUS.
Uji selalu di titik batas (60 dan 59), karena di sanalah kesalahan paling sering muncul.
Contoh 2: Diskon Belanja Bertingkat
Masalah. Toko memberi diskon berdasarkan total belanja: minimal Rp500.000 diskon 20%, minimal Rp200.000
diskon 10%, minimal Rp100.000 diskon 5%, selain itu tidak ada diskon. Tampilkan persen diskon, besar diskon,
dan jumlah yang harus dibayar.
Komponen
Isi
Input (masukan)
total belanja
Proses
tentukan persen diskon dari batas tertinggi ke terendah, lalu hitung diskon dan bayar
Output (keluaran)
persen diskon, diskon, dan jumlah bayar
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 13

Halaman 13
START DISKON
GET total
total >= 500000 ?
LET persen = 20
total >= 200000 ?
LET persen = 10
total >= 100000 ?
LET persen = 5
LET persen = 0
LET diskon = total * persen / 100
LET bayar = total - diskon
GIVE persen, diskon, bayar
FINISH DISKON
Ya
Ya
Ya
Tidak
Tidak
Tidak
Gambar 4. Flowchart diskon belanja bertingkat (struktur if - else if - else)
P SEUD O CO D E
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
KO D E C + +
#include <iostream>
using namespace std;
int main() {
    int total, persen, diskon, bayar;
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 14

Halaman 14
    cout << "Total belanja (Rp): ";
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
Uji coba
Masukan
Keluaran yang diharapkan
600000
Diskon = 20%; Potongan = Rp 120000; Bayar = Rp 480000
250000
Diskon = 10%; Potongan = Rp 25000; Bayar = Rp 225000
100000
Diskon = 5%; Potongan = Rp 5000; Bayar = Rp 95000
50000
Diskon = 0%; Potongan = Rp 0; Bayar = Rp 50000
Penjelasan
Pengecekan dimulai dari batas tertinggi. Begitu satu syarat terpenuhi, syarat di bawahnya tidak diperiksa
lagi.
ELSEIF di pseudocode menjadi else if di C++. Semua cabang mengisi variabel yang sama (persen), lalu rumus
dihitung satu kali setelah ENDIF.
Total 100000 tepat di batas, jadi masuk diskon 5%. Uji juga 99999 untuk memastikan batas bawah.
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 15

Halaman 15
Contoh 3: Tahun Kabisat
Masalah. Sebuah tahun adalah tahun kabisat jika habis dibagi 4 tetapi tidak habis dibagi 100, atau jika habis
dibagi 400. Tentukan apakah tahun yang dimasukkan pengguna adalah tahun kabisat.
Komponen
Isi
Input (masukan)
tahun
Proses
gabungkan tiga syarat dengan AND dan OR
Output (keluaran)
tulisan kabisat atau bukan kabisat
START KABISAT
GET tahun
(tahun MOD 4 = 0 AND
tahun MOD 100 <> 0)
OR tahun MOD 400 = 0 ?
GIVE "Tahun kabisat"
GIVE "Bukan tahun kabisat"
FINISH KABISAT
Ya
Tidak
Gambar 5. Flowchart tahun kabisat (struktur operator logika)
P SEUD O CO D E
START KABISAT
GET tahun
IF (tahun MOD 4 = 0 AND tahun MOD 100 <> 0) OR tahun MOD 400 = 0 THEN
    GIVE "Tahun kabisat"
ELSE
    GIVE "Bukan tahun kabisat"
ENDIF
FINISH KABISAT
KO D E C + +
#include <iostream>
using namespace std;
int main() {
    int tahun;
    cout << "Masukkan tahun: ";
    cin >> tahun;
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 16

Halaman 16
    if ((tahun % 4 == 0 && tahun % 100 != 0) || tahun % 400 == 0) {
        cout << tahun << " adalah tahun kabisat" << endl;
    } else {
        cout << tahun << " bukan tahun kabisat" << endl;
    }
    return 0;
}
Uji coba
Masukan
Keluaran yang diharapkan
2024 (habis dibagi 4, tidak habis dibagi 100)
2024 adalah tahun kabisat
2023 (tidak habis dibagi 4)
2023 bukan tahun kabisat
1900 (habis dibagi 100 tetapi tidak 400)
1900 bukan tahun kabisat
2000 (habis dibagi 400)
2000 adalah tahun kabisat
Penjelasan
&& (AND) benar jika kedua sisi benar. || (OR) benar jika salah satu sisi benar.
Tanda kurung penting: (tahun % 4 == 0 && tahun % 100 != 0) dihitung dulu, baru digabung dengan || tahun
% 400 == 0.
Operator MOD di pseudocode menjadi % di C++, dan <> menjadi !=.
Tahun 1900 dan 2000 sama-sama habis dibagi 100, tetapi hanya 2000 yang habis dibagi 400. Dua tahun ini
wajib diuji.
Uji coba di kertas (dry run)
Dry run untuk Contoh 3 membantu melihat hasil tiap bagian ekspresi. Setiap baris menunjukkan nilai benar atau
salah dari potongan kondisi.
tahun
tahun % 4 == 0
tahun % 100 != 0
kolom 2 && kolom 3
tahun % 400 == 0
hasil akhir (|| kolom 4)
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
bukan kabisat
1900
Benar
Salah
Salah
Salah
bukan kabisat
2000
Benar
Salah
Salah
Benar
kabisat
Coba sendiri
Lakukan dry run untuk tahun 2100. Apakah 2100 tahun kabisat? (Jawaban: bukan. Habis dibagi 100 tetapi tidak
habis dibagi 400.)
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 17

Halaman 17
Contoh 4: Jenis Segitiga
Masalah. Baca tiga panjang sisi. Pertama periksa apakah ketiganya bisa membentuk segitiga (jumlah dua sisi
harus lebih besar dari sisi ketiga). Jika bisa, tentukan jenisnya: sama sisi, sama kaki, atau sembarang.
Komponen
Isi
Input (masukan)
sisi a, b, c
Proses
cek syarat segitiga, lalu cek kesamaan sisi di dalamnya
Output (keluaran)
jenis segitiga atau pesan bukan segitiga
START SEGITIGA
GET a, b, c
a + b > c AND a + c > b
AND b + c > a ?
a = b AND b = c ?
a = b OR a = c
OR b = c ?
GIVE "Bukan segitiga"
GIVE "Sama sisi"
GIVE "Sama kaki"
GIVE "Segitiga sembarang"
FINISH SEGITIGA
Tidak
Ya
Ya
Tidak
Ya
Tidak
Gambar 6. Flowchart jenis segitiga (struktur nested if)
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 18

Halaman 18
P SEUD O CO D E
START SEGITIGA
GET a, b, c
IF a + b > c AND a + c > b AND b + c > a THEN
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
KO D E C + +
#include <iostream>
using namespace std;
int main() {
    int a, b, c;
    cout << "Masukkan tiga sisi: ";
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
Uji coba
Masukan
Keluaran yang diharapkan
5 5 5
Segitiga sama sisi
5 5 8
Segitiga sama kaki
3 4 5
Segitiga sembarang
1 2 3
Bukan segitiga
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 19

Halaman 19
Penjelasan
Nested if berarti sebuah if berada di dalam blok if atau else yang lain. Blok dalam hanya diperiksa jika syarat
luar terpenuhi.
Urutan pemeriksaan penting: sama sisi dicek lebih dulu, sebab segitiga sama sisi juga memenuhi syarat sama
kaki.
Data 1 2 3 menguji batas: 1 + 2 sama dengan 3, bukan lebih besar, sehingga bukan segitiga.
Contoh 5: Menu Kantin
Masalah. Kantin menyediakan empat menu: 1 Nasi Goreng Rp15.000, 2 Mie Ayam Rp12.000, 3 Soto Rp13.000,
dan 4 Es Teh Rp3.000. Pengguna memilih nomor menu, program menampilkan nama dan harganya. Nomor lain
dianggap tidak tersedia.
Komponen
Isi
Input (masukan)
pilihan (nomor menu)
Proses
cocokkan pilihan dengan nomor menu
Output (keluaran)
nama dan harga menu, atau pesan tidak tersedia
START MENU
GET pilihan
pilihan ?
GIVE Nasi
Goreng, 15000
GIVE Mie
Ayam, 12000
GIVE Soto,
13000
GIVE Es Teh,
3000
GIVE "Tidak
tersedia"
FINISH MENU
1
2
3
4
lainnya
Gambar 7. Flowchart menu kantin (struktur switch-case)
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 20

Halaman 20
P SEUD O CO D E
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
KO D E C + +
#include <iostream>
using namespace std;
int main() {
    int pilihan;
    cout << "1=Nasi Goreng 2=Mie Ayam 3=Soto 4=Es Teh" << endl;
    cout << "Pilih menu: ";
    cin >> pilihan;
    switch (pilihan) {
        case 1:
            cout << "Nasi Goreng, Rp 15000" << endl;
            break;
        case 2:
            cout << "Mie Ayam, Rp 12000" << endl;
            break;
        case 3:
            cout << "Soto, Rp 13000" << endl;
            break;
        case 4:
            cout << "Es Teh, Rp 3000" << endl;
            break;
        default:
            cout << "Menu tidak tersedia" << endl;
    }
    return 0;
}
Uji coba
Masukan
Keluaran yang diharapkan
1 (menu pertama)
Nasi Goreng, Rp 15000
4 (menu terakhir)
Es Teh, Rp 3000
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 21

Halaman 21
7 (nomor di luar menu)
Menu tidak tersedia
0 (nomor di luar menu (batas bawah))
Menu tidak tersedia
Penjelasan
switch cocok jika satu variabel dibandingkan dengan beberapa nilai tetap (angka atau karakter).
break menghentikan switch setelah satu case selesai. Tanpa break, program lanjut ke case berikutnya.
default adalah jalur cadangan, mirip else. Ia dijalankan jika tidak ada case yang cocok.
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 22

Halaman 22
Bab 5. Ringkasan Konversi dan Kesalahan Umum
5.1 Tabel konversi pseudocode ke C++
Pseudocode
C++
GET x
cin >> x;
LET x = a + b
x = a + b;
GIVE x
cout << x << endl;
IF kondisi THEN ... ENDIF
if (kondisi) { ... }
ELSEIF kondisi THEN
else if (kondisi) { ... }
ELSE
else { ... }
SWITCH x / CASE n / DEFAULT / ENDSWITCH
switch (x) { case n: ... break; default: ... }
a = b (membandingkan)
a == b
a <> b
a != b
a AND b / a OR b / NOT a
a && b / a || b / !a
a MOD b
a % b
5.2 Kesalahan yang sering terjadi
Kesalahan
Contoh salah
Perbaikan
Memakai satu = untuk
membandingkan
if (nilai = 60)
if (nilai == 60)
Titik koma setelah kondisi
if (x > 5); (blok if menjadi kosong)
Hapus titik koma: if (x > 5)
{
Lupa kurung kurawal untuk banyak
pernyataan
if (x > 0) a = 1; b = 2; (b selalu
dijalankan)
Bungkus semua pernyataan
dengan { }
Urutan else if terbalik
if (n >= 55) sebelum else if (n
>= 85)
Mulai dari batas tertinggi
Lupa break di switch
case 1 tanpa break; (lanjut ke case 2)
Akhiri setiap case dengan
break;
Menulis rentang seperti matematika
0 < x < 10
x > 0 && x < 10
Cabang flowchart tanpa label
belah ketupat tanpa Ya/Tidak
Beri label Ya dan Tidak di tiap
panah
Pseudocode berisi sintaks C++
if (x == 5) {
IF x = 5 THEN
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 23

Halaman 23
Bab 6. Latihan
Kerjakan berpasangan. Untuk setiap soal, buat tiga hal secara berurutan: flowchart, pseudocode (ikuti 5 aturan
penulisan), lalu program C++. Uji program dengan minimal dua data, termasuk satu data batas.
No
Tingkat
Soal
1
Dasar (if-else)
Cek umur pemilih. Baca umur. Jika umur minimal 17 tampilkan "Boleh memilih", jika tidak
tampilkan "Belum boleh memilih".
2
Dasar (operator
logika)
Habis dibagi 3 dan 5. Baca sebuah bilangan bulat. Tampilkan "Ya" jika bilangan itu habis
dibagi 3 dan juga habis dibagi 5, selain itu tampilkan "Tidak".
3
Menengah
(operator &&)
Login sederhana. Login berhasil jika username adalah "admin" dan password adalah "1234".
Selain itu tampilkan "Login gagal". Petunjuk: gunakan tipe string dan tambahkan #include
<string>.
4
Menengah
(switch-case)
Kalkulator sederhana. Baca dua bilangan dan satu operator (+, -, *, atau /). Tampilkan
hasilnya. Jika operator / dan pembagi nol, tampilkan "Error: pembagi nol". Operator lain:
"Operator tidak dikenal".
5
Tantangan (else
if)
Kategori indeks massa tubuh (IMT). Baca berat badan (kg) dan tinggi badan (meter). Hitung
IMT = berat / (tinggi × tinggi), lalu tentukan kategori: Kurus jika IMT < 18,5; Normal jika IMT <
25; Gemuk jika IMT < 30; selain itu Obesitas.
Rubrik penilaian
Aspek
Kriteria
Bobot
Flowchart
Simbol dan arah panah benar, percabangan berlabel Ya/Tidak
25%
Pseudocode
Menaati 5 aturan penulisan dan bebas dari sintaks C++
25%
Program C++
Dapat dikompilasi, logika benar, hasil sesuai data uji
35%
Pengujian
Minimal dua data uji, termasuk data batas
15%
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 24

Halaman 24
Bab 7. Cek Pemahaman dan Rangkuman
Pilih satu jawaban yang paling tepat. Kunci jawaban ada di Lampiran B.
1. Dalam C++, untuk memeriksa apakah a sama dengan b ditulis ...
A. a = b    B. a == b    C. a := b    D. a equals b
2. Hasil ekspresi (7 > 3) && (2 > 5) adalah ...
A. benar (true)    B. salah (false)    C. 7    D. kesalahan kompilasi
3. Pada Contoh 2, jika total belanja Rp250.000 maka persen diskonnya ...
A. 5%    B. 10%    C. 20%    D. 0%
4. Kata kunci pseudocode yang menjadi else if di C++ adalah ...
A. ELSE    B. ELSEIF    C. ENDIF    D. THEN
5. Jika break dilupakan pada sebuah case di switch, maka ...
A. terjadi kesalahan kompilasi    B. program berhenti    C. program lanjut ke case berikutnya    D. case itu
diabaikan
Rangkuman
Condition membuat program memilih jalur berdasarkan ekspresi yang bernilai benar atau salah.
Operator relasional (==, !=, <, >, <=, >=) membandingkan nilai. Operator logika (&&, ||, !) menggabungkan
kondisi.
Pilih bentuk yang sesuai: if, if-else, else if untuk rentang nilai, nested if untuk syarat bertingkat, dan switch-
case untuk nilai tetap.
Pada else if, mulailah dari batas tertinggi. Pada switch, jangan lupa break.
Uji setiap percabangan dengan data di batas kondisi.
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 25

Halaman 25
Lampiran A. Kunci Jawaban Latihan
Kunci ini adalah salah satu penyelesaian yang benar. Jawaban Anda boleh berbeda selama logikanya benar dan
hasilnya sesuai.
Latihan 1. Cek umur pemilih
P SEUD O CO D E
START PEMILIH
GET umur
IF umur >= 17 THEN
    GIVE "Boleh memilih"
ELSE
    GIVE "Belum boleh memilih"
ENDIF
FINISH PEMILIH
KO D E C + +
#include <iostream>
using namespace std;
int main() {
    int umur;
    cout << "Masukkan umur: ";
    cin >> umur;
    if (umur >= 17) {
        cout << "Boleh memilih" << endl;
    } else {
        cout << "Belum boleh memilih" << endl;
    }
    return 0;
}
Uji: 17 menghasilkan Boleh memilih. 16 menghasilkan Belum boleh memilih.
Latihan 2. Habis dibagi 3 dan 5
P SEUD O CO D E
START KELIPATAN
GET n
IF n MOD 3 = 0 AND n MOD 5 = 0 THEN
    GIVE "Ya"
ELSE
    GIVE "Tidak"
ENDIF
FINISH KELIPATAN
KO D E C + +
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 26

Halaman 26
#include <iostream>
using namespace std;
int main() {
    int n;
    cout << "Masukkan sebuah bilangan bulat: ";
    cin >> n;
    if (n % 3 == 0 && n % 5 == 0) {
        cout << "Ya" << endl;
    } else {
        cout << "Tidak" << endl;
    }
    return 0;
}
Uji: 15 menghasilkan Ya. 9 dan 10 menghasilkan Tidak. 0 menghasilkan Ya karena 0 habis dibagi bilangan apa
pun.
Latihan 3. Login sederhana
P SEUD O CO D E
START LOGIN
GET username, password
IF username = "admin" AND password = "1234" THEN
    GIVE "Login berhasil"
ELSE
    GIVE "Login gagal"
ENDIF
FINISH LOGIN
KO D E C + +
#include <iostream>
#include <string>
using namespace std;
int main() {
    string username, password;
    cout << "Username: ";
    cin >> username;
    cout << "Password: ";
    cin >> password;
    if (username == "admin" && password == "1234") {
        cout << "Login berhasil" << endl;
    } else {
        cout << "Login gagal" << endl;
    }
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 27

Halaman 27
    return 0;
}
Uji: admin dan 1234 menghasilkan Login berhasil. admin dan 0000 menghasilkan Login gagal. budi dan 1234
menghasilkan Login gagal.
Latihan 4. Kalkulator sederhana
P SEUD O CO D E
START KALKULATOR
GET a, op, b
SWITCH op
    CASE "+"
        GIVE a + b
    CASE "-"
        GIVE a - b
    CASE "*"
        GIVE a * b
    CASE "/"
        IF b = 0 THEN
            GIVE "Error: pembagi nol"
        ELSE
            GIVE a / b
        ENDIF
    DEFAULT
        GIVE "Operator tidak dikenal"
ENDSWITCH
FINISH KALKULATOR
KO D E C + +
#include <iostream>
using namespace std;
int main() {
    double a, b;
    char op;
    cout << "Masukkan (contoh 8 + 2): ";
    cin >> a >> op >> b;
    switch (op) {
        case '+':
            cout << "Hasil = " << a + b << endl;
            break;
        case '-':
            cout << "Hasil = " << a - b << endl;
            break;
        case '*':
            cout << "Hasil = " << a * b << endl;
            break;
        case '/':
            if (b == 0) {
                cout << "Error: pembagi nol" << endl;
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 28

Halaman 28
            } else {
                cout << "Hasil = " << a / b << endl;
            }
            break;
        default:
            cout << "Operator tidak dikenal" << endl;
    }
    return 0;
}
Uji: 8 + 2 menghasilkan 10. 9 / 2 menghasilkan 4.5. 5 / 0 menghasilkan Error: pembagi nol. 7 % 3 menghasilkan
Operator tidak dikenal.
Latihan 5. Kategori indeks massa tubuh (IMT)
P SEUD O CO D E
START IMT
GET berat, tinggi
LET imt = berat / (tinggi * tinggi)
IF imt < 18.5 THEN
    LET kategori = "Kurus"
ELSEIF imt < 25 THEN
    LET kategori = "Normal"
ELSEIF imt < 30 THEN
    LET kategori = "Gemuk"
ELSE
    LET kategori = "Obesitas"
ENDIF
GIVE imt, kategori
FINISH IMT
KO D E C + +
#include <iostream>
#include <string>
using namespace std;
int main() {
    double berat, tinggi, imt;
    string kategori;
    cout << "Berat (kg) dan tinggi (m): ";
    cin >> berat >> tinggi;
    imt = berat / (tinggi * tinggi);
    if (imt < 18.5) {
        kategori = "Kurus";
    } else if (imt < 25) {
        kategori = "Normal";
    } else if (imt < 30) {
        kategori = "Gemuk";
    } else {
        kategori = "Obesitas";
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 29

Halaman 29
    }
    cout << "IMT = " << imt << endl;
    cout << "Kategori = " << kategori << endl;
    return 0;
}
Uji: 50 dan 1.7 menghasilkan Kurus. 65 dan 1.7 menghasilkan Normal. 80 dan 1.7 menghasilkan Gemuk. 95 dan
1.7 menghasilkan Obesitas.
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA

## Halaman 30

Halaman 30
Lampiran B. Kunci Cek Pemahaman
No
Jawaban
Alasan singkat
1
B. a == b
Satu tanda sama dengan berarti memberi nilai, dua tanda sama dengan berarti
membandingkan.
2
B. salah (false)
7 > 3 benar, tetapi 2 > 5 salah. Operator && hanya benar jika kedua sisi benar.
3
B. 10%
250.000 memenuhi syarat ≥ 200.000 (diskon 10%) dan tidak mencapai
500.000.
4
B. ELSEIF
ELSEIF di pseudocode setara dengan else if di C++.
5
C. program lanjut ke case
berikutnya
Tanpa break terjadi fall-through ke case di bawahnya.
Daftar Pustaka
Deitel, P., & Deitel, H. (2017). C++ how to program (10th ed.). Pearson.
Munir, R., & Lidya, L. (2016). Algoritma dan pemrograman dalam bahasa Pascal, C, dan C++ (Edisi ke-6).
Informatika Bandung.
Stroustrup, B. (2014). Programming: Principles and practice using C++ (2nd ed.). Addison-Wesley.
cppreference.com. (n.d.). if statement dan switch statement. https://en.cppreference.com/w/cpp/language/if
MODUL PEMBELAJARAN
PROGRAM STUDI
PJJ INFORMATIKA
