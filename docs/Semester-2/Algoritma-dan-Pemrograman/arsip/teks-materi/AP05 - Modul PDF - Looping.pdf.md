# AP05 - Modul PDF - Looping.pdf

Sumber: [`materi/AP05 - Modul PDF - Looping.pdf`](../../materi/AP05%20-%20Modul%20PDF%20-%20Looping.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

MODUL PEMBELAJARAN 
PROGRAM 
PROGRAM STUDI INFORMATIKA 
 
 
1 
Mata Kuliah 
: Algoritma dan Pemrograman 
Bobot Sks 
:  
Dosen Pengembang 
:  
Tutor 
: Yunan Fauzi Wijaya, SKom. MMSI. 
Capaian Pembelajaran Mata Kuliah : Mampu memahami konsep looping dan menerapkannya pada 
program C++ sederhana 
Kompetensi Akhir Di Setiap Tahap 
(Sub-CPMK) 
: Mampu menjelaskan definisi dan kegunaan looping serta 
menggunakan for, while, dan do-while di C++ 
Minggu Perkuliahan Online Ke- 
: 5 
Topik 
: Sesi 5 – Looping di C++ (penjelasan detail modul PPT) 
 
PENDAHULUAN 
Bayangkan Anda diminta mencetak kata "Halo" sebanyak 1000 kali. Menulis seribu baris 
perintah jelas tidak masuk akal. Pekerjaan yang berulang seperti ini ditangani dengan looping 
(perulangan): kita menulis perintah satu kali, lalu meminta komputer mengulangnya selama syarat 
tertentu masih terpenuhi. 
Dokumen ini adalah penjelasan detail dari modul PPT Sesi 5. Semua contoh program ditulis 
dalam bahasa C++, sudah dikompilasi dengan g++ (standar C++17), dan keluarannya dicantumkan apa 
adanya. Ketiga jenis loop utama dibahas satu per satu, dilengkapi nested loop serta perintah break 
dan continue. 
Tujuan Pembelajaran 
Setelah mempelajari modul ini, mahasiswa mampu: 
1. Menjelaskan definisi dan kegunaan looping. 
2. Menyebutkan jenis looping di C++ dan perbedaannya. 
3. Menulis perulangan for, while, dan do-while. 
4. Membuat nested loop serta memakai break dan continue. 
5. Memilih jenis loop yang tepat dan menghindari loop tanpa akhir. 
Peta Materi 
Bagian 
Materi 
Slide PPT 
A 
Konsep Looping 
4 – 9 
B 
Jenis Looping: for, while, do-while 
10 – 18 
C 
Nested Loop, break, continue, dan kesalahan umum 
19 – 25 
D 
Ringkasan dan referensi 
26 – 27 
 
Untuk menjalankan program, simpan kode di file berekstensi .cpp, kompilasi dengan perintah 
g++ -std=c++17 nama.cpp -o nama, lalu jalankan hasilnya. Anda juga dapat memakai IDE seperti 
Code::Blocks atau Visual Studio Code.

## Halaman 2

MODUL PEMBELAJARAN 
PROGRAM 
PROGRAM STUDI INFORMATIKA 
 
 
2 
A. KONSEP LOOPING 
Pengertian Looping 
Looping (perulangan) adalah struktur kontrol yang menjalankan sekelompok perintah berulang 
kali selama suatu kondisi masih benar. Satu kali putaran disebut satu iterasi. Perintah yang diulang 
disebut badan loop dan ditulis di dalam kurung kurawal. 
Dalam kehidupan sehari-hari kita sering mengulang pekerjaan: melakukan push-up sepuluh kali, 
menyapu halaman sampai bersih, atau meminum obat setiap pagi selama tiga hari. Pada setiap contoh 
ada dua hal yang sama: pekerjaan yang diulang dan aturan kapan harus berhenti. Aturan berhenti 
itulah yang disebut kondisi dalam program. 
 
Gambar 1. Contoh pekerjaan berulang dalam kehidupan sehari-hari 
Kegunaan Looping 
Bandingkan dua cara mencetak "Halo" lima kali berikut. Cara pertama tanpa loop, cara kedua 
dengan loop. 
// Tanpa loop 
cout << "Halo" << endl; 
cout << "Halo" << endl; 
cout << "Halo" << endl; 
cout << "Halo" << endl; 
cout << "Halo" << endl; 
// Dengan loop 
for (int i = 1; i <= 5; i++) { 
    cout << "Halo" << endl; 
} 
Manfaat utama looping: 
• 
Kode lebih singkat dan rapi: tiga baris menggantikan lima baris, dan selisihnya makin besar 
bila pengulangannya makin banyak. 
• 
Mudah diubah: untuk mencetak 1000 kali, cukup mengganti angka 5 menjadi 1000 di satu 
tempat. 
• 
Mengolah data berjumlah banyak: misalnya menghitung rata-rata nilai 100 mahasiswa atau 
menampilkan seluruh isi daftar belanja. 
• 
Mengurangi kesalahan: tidak ada risiko lupa menyalin atau salah mengetik di salah satu baris.

## Halaman 3

MODUL PEMBELAJARAN 
PROGRAM 
PROGRAM STUDI INFORMATIKA 
 
 
3 
Tiga Unsur Looping 
Hampir setiap loop memiliki tiga unsur. Pada perulangan for, ketiganya ditulis sekaligus dalam 
satu baris. 
 
Gambar 2. Tiga unsur looping 
• 
Inisialisasi: nilai awal variabel penghitung, misalnya int i = 1;. 
• 
Kondisi: syarat agar loop tetap berjalan, misalnya i <= 5. Bila kondisi salah, loop berhenti. 
• 
Perubahan: perintah yang mengubah penghitung pada setiap putaran, misalnya i++ 
(menambah i dengan 1). 
Bila perubahan penghitung terlupa, kondisi tidak pernah menjadi salah sehingga loop berjalan 
tanpa henti. Kesalahan ini dibahas pada bagian C. 
Jenis Looping di C++ 
Jenis 
Kapan dipakai 
Pemeriksaan kondisi 
for 
Jumlah putaran sudah diketahui 
Sebelum badan loop 
while 
Jumlah putaran belum pasti 
Sebelum badan loop 
do-while 
Isi loop harus dijalankan minimal satu kali 
Sesudah badan loop 
 
Selain ketiganya, ada nested loop (loop di dalam loop) serta perintah break dan continue untuk 
mengendalikan jalannya loop. Semuanya dibahas pada bagian berikut. 
B. JENIS LOOPING 
Perulangan for 
Perulangan for dipakai bila jumlah putaran sudah diketahui sebelumnya. Bentuk umumnya: 
for (inisialisasi; kondisi; perubahan) { 
    // perintah yang diulang 
} 
Urutan kerjanya: (1) inisialisasi dijalankan satu kali di awal; (2) kondisi diperiksa; (3) bila benar, 
badan loop dijalankan; (4) perubahan dijalankan; (5) kembali ke langkah 2. Bila kondisi salah, loop 
berhenti dan program melanjutkan perintah setelah kurung kurawal penutup.

## Halaman 4

MODUL PEMBELAJARAN 
PROGRAM 
PROGRAM STUDI INFORMATIKA 
 
 
4 
Contoh Program 1: for 
#include <iostream> 
using namespace std; 
  
int main() { 
    // mencetak angka 1 sampai 5 
    for (int i = 1; i <= 5; i++) { 
        cout << "Angka ke-" << i << endl; 
    } 
  
    // menjumlahkan 1 sampai 10 
    int total = 0; 
    for (int i = 1; i <= 10; i++) { 
        total = total + i; 
    } 
    cout << "Jumlah 1 sampai 10 = " << total << endl; 
    return 0; 
} 
Contoh keluaran: 
Angka ke-1 
Angka ke-2 
Angka ke-3 
Angka ke-4 
Angka ke-5 
Jumlah 1 sampai 10 = 55 
Penjelasan: loop pertama mencetak angka dari 1 sampai 5. Loop kedua memakai variabel total 
sebagai penampung yang diawali 0. Pada setiap putaran, nilai i ditambahkan ke total, sehingga 
akhirnya 1 + 2 + ... + 10 = 55. Tabel berikut menelusuri nilai variabel pada loop kedua. 
Putaran 
i 
total sebelum 
total sesudah 
1 
1 
0 
1 
2 
2 
1 
3 
3 
3 
3 
6 
4 
4 
6 
10 
... 
... 
... 
... 
10 
10 
45 
55 
 
Perulangan while 
Perulangan while dipakai bila jumlah putaran belum diketahui, misalnya membaca data sampai 
pengguna mengetik tanda berhenti. Kondisi diperiksa lebih dulu, sehingga bila sejak awal salah, badan 
loop tidak dijalankan sama sekali. 
inisialisasi; 
while (kondisi) { 
    // perintah yang diulang 
    perubahan; 
}

## Halaman 5

MODUL PEMBELAJARAN 
PROGRAM 
PROGRAM STUDI INFORMATIKA 
 
 
5 
Berbeda dengan for, penghitung pada while harus diubah sendiri di dalam badan loop. Itulah 
sebabnya while lebih rawan menjadi loop tanpa akhir bila perubahan terlupa. 
Contoh Program 2: while dengan Sentinel 
Nilai 0 berfungsi sebagai tanda berhenti yang disebut sentinel. Program menjumlahkan angka-
angka yang dimasukkan pengguna sampai angka 0 diketik. 
#include <iostream> 
using namespace std; 
  
int main() { 
    int angka, total = 0, banyak = 0; 
  
    cout << "Masukkan angka (0 untuk berhenti)" << endl; 
    cin >> angka; 
    while (angka != 0) { 
        total = total + angka; 
        banyak++; 
        cin >> angka; 
    } 
  
    cout << "Banyak data = " << banyak << endl; 
    cout << "Total       = " << total << endl; 
    return 0; 
} 
Contoh keluaran: 
Masukkan angka (0 untuk berhenti) 
10 
20 
5 
0 
Banyak data = 3 
Total       = 35 
Penjelasan: angka pertama dibaca sebelum loop. Selama angka bukan 0, angka ditambahkan 
ke total, banyak ditambah 1, lalu angka berikutnya dibaca. Angka 0 tidak ikut dijumlahkan karena loop 
berhenti sebelum memprosesnya. Jumlah data tidak diketahui di awal, sehingga while lebih tepat 
daripada for. 
Perulangan do-while 
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
Validasi input, menu

## Halaman 6

MODUL PEMBELAJARAN 
PROGRAM 
PROGRAM STUDI INFORMATIKA 
 
 
6 
Secara teknis ketiganya dapat saling menggantikan. Pilihlah yang membuat kode paling mudah 
dibaca: for bila jumlah putaran pasti, while bila bergantung pada kondisi, dan do-while bila isi loop 
harus berjalan sekali. 
Diskusi 1 
Jenis loop apa yang paling cocok untuk: (a) mencetak nomor urut 1 sampai 30, (b) meminta kata 
sandi sampai benar, dan (c) menampilkan menu aplikasi minimal sekali? Contoh jawaban: (a) for, 
karena jumlahnya pasti 30; (b) while, karena jumlah percobaan tidak diketahui; (c) do-while, karena 
menu harus tampil minimal sekali. 
C. NESTED LOOP, BREAK, DAN CONTINUE 
Nested Loop (Loop Bersarang) 
Nested loop adalah loop yang berada di dalam loop lain. Analoginya jam: jarum menit berputar 
penuh 60 kali untuk setiap satu putaran jarum jam. Setiap kali loop luar berputar satu kali, loop dalam 
berputar penuh dari awal sampai selesai. Jumlah iterasi total sama dengan putaran luar dikali putaran 
dalam. 
Contoh Program 4: Pola Segitiga Bintang 
#include <iostream> 
using namespace std; 
  
int main() { 
    // segitiga bintang 
    for (int baris = 1; baris <= 4; baris++) { 
        for (int kolom = 1; kolom <= baris; kolom++) { 
            cout << "*"; 
        } 
        cout << endl; 
    } 
    return 0; 
} 
Contoh keluaran: 
* 
** 
*** 
**** 
Penjelasan: loop luar (baris) berjalan dari 1 sampai 4 dan mengatur jumlah baris. Loop dalam 
(kolom) mencetak bintang sebanyak nomor baris, sehingga baris pertama satu bintang, baris kedua 
dua bintang, dan seterusnya. Perintah endl setelah loop dalam memindahkan kursor ke baris 
berikutnya.

## Halaman 7

MODUL PEMBELAJARAN 
PROGRAM 
PROGRAM STUDI INFORMATIKA 
 
 
7 
Contoh Program 5: Tabel Perkalian 
#include <iostream> 
using namespace std; 
  
int main() { 
    int n; 
    cout << "Tabel perkalian berapa? "; 
    cin >> n; 
  
    for (int i = 1; i <= 10; i++) { 
        cout << n << " x " << i << " = " << n * i << endl; 
    } 
    return 0; 
} 
Contoh keluaran: 
Tabel perkalian berapa? 7 
7 x 1 = 7 
7 x 2 = 14 
7 x 3 = 21 
7 x 4 = 28 
7 x 5 = 35 
7 x 6 = 42 
7 x 7 = 49 
7 x 8 = 56 
7 x 9 = 63 
7 x 10 = 70 
Variabel n dibaca dari pengguna, sehingga satu program dapat menampilkan tabel perkalian 
untuk angka apa pun. Tantangan: bungkus loop ini dengan loop luar agar program menampilkan tabel 
perkalian 1 sampai 10 sekaligus. 
Perintah break dan continue 
Perintah 
Efek 
break 
Keluar dari loop sepenuhnya 
continue 
Melewati sisa isi putaran saat ini, lalu lanjut ke putaran berikutnya

## Halaman 8

MODUL PEMBELAJARAN 
PROGRAM 
PROGRAM STUDI INFORMATIKA 
 
 
8 
Contoh Program 6: break dan continue 
#include <iostream> 
using namespace std; 
  
int main() { 
    // continue: lewati bilangan genap 
    cout << "Bilangan ganjil 1-9: "; 
    for (int i = 1; i <= 9; i++) { 
        if (i % 2 == 0) { 
            continue; 
        } 
        cout << i << " "; 
    } 
    cout << endl; 
  
    // break: berhenti saat menemukan 7 
    for (int i = 1; i <= 10; i++) { 
        if (i == 7) { 
            cout << "Angka 7 ditemukan, berhenti." << endl; 
            break; 
        } 
        cout << "Cek " << i << endl; 
    } 
    return 0; 
} 
Contoh keluaran: 
Bilangan ganjil 1-9: 1 3 5 7 9 
Cek 1 
Cek 2 
Cek 3 
Cek 4 
Cek 5 
Cek 6 
Angka 7 ditemukan, berhenti. 
Penjelasan: pada loop pertama, saat i genap perintah continue melewati cout sehingga hanya 
bilangan ganjil yang tercetak. Pada loop kedua, saat i bernilai 7 perintah break menghentikan loop, 
sehingga angka 8, 9, dan 10 tidak pernah diproses. 
Loop Tanpa Akhir dan Kesalahan Umum 
Loop tanpa akhir (infinite loop) terjadi bila kondisi tidak pernah menjadi salah. Bila program 
macet, tekan Ctrl+C di terminal untuk menghentikannya, lalu periksa tiga unsur loop: nilai awal, 
kondisi, dan perubahan. 
Kesalahan 
Contoh 
Akibat atau perbaikan 
Lupa mengubah 
penghitung 
while (i <= 5) { cout << i; } 
Loop tanpa akhir; tambahkan i++ 
Kondisi tidak pernah salah for (int i = 1; i > 0; i++) 
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

## Halaman 9

MODUL PEMBELAJARAN 
PROGRAM 
PROGRAM STUDI INFORMATIKA 
 
 
9 
 
Contoh Program 7: Faktorial 
Faktorial n (ditulis n!) adalah hasil kali bilangan 1 sampai n. Jadi 5! = 5 x 4 x 3 x 2 x 1 = 120. 
#include <iostream> 
using namespace std; 
  
int main() { 
    int n; 
    long long faktorial = 1; 
  
    cout << "Masukkan n: "; 
    cin >> n; 
  
    for (int i = 1; i <= n; i++) { 
        faktorial = faktorial * i; 
    } 
    cout << n << "! = " << faktorial << endl; 
    return 0; 
} 
Contoh keluaran: 
Masukkan n: 5 
5! = 120 
Penjelasan: variabel faktorial diawali 1, bukan 0, karena perkalian dengan 0 selalu menghasilkan 
0. Pada setiap putaran, faktorial dikalikan i. Tipe long long dipilih karena faktorial tumbuh sangat 
cepat; misalnya 10! sudah bernilai 3628800. 
Latihan: Telusuri Keluarannya 
for (int i = 1; i <= 4; i++) 
    cout << i << " ";            // (1) 
  
int s = 0; 
for (int i = 1; i <= 5; i++) 
    s = s + i; 
cout << s;                     // (2) 
Pembahasan: (1) mencetak 1 2 3 4. (2) menghasilkan 15, karena 1 + 2 + 3 + 4 + 5 = 15. 
RANGKUMAN 
• Looping menjalankan perintah berulang kali selama kondisi benar sehingga kode lebih singkat 
dan mudah diubah. 
• Looping memiliki tiga unsur: inisialisasi, kondisi, dan perubahan penghitung. 
• for dipakai bila jumlah putaran pasti, while bila belum pasti, dan do-while bila isi loop harus 
berjalan minimal sekali. 
• Nested loop adalah loop di dalam loop, cocok untuk pola dan tabel. 
• break menghentikan loop, continue melewati satu putaran. 
• Pastikan penghitung berubah agar tidak terjadi loop tanpa akhir.

## Halaman 10

MODUL PEMBELAJARAN 
PROGRAM 
PROGRAM STUDI INFORMATIKA 
 
 
10 
LATIHAN SOAL 
Pilihan Ganda 
1. Struktur yang menjalankan perintah berulang selama suatu kondisi benar disebut ... 
a. Percabangan 
b. Looping 
c. Fungsi 
d. Array 
2. Jenis loop yang memeriksa kondisi SETELAH badan loop dijalankan adalah ... 
a. for 
b. while 
c. do-while 
d. if 
3. Keluaran dari for (int i = 1; i <= 3; i++) cout << i << " "; adalah ... 
a. 1 2 3 4 
b. 0 1 2 
c. 1 2 3 
d. 3 2 1 
4. Perintah untuk menghentikan loop sepenuhnya adalah ... 
a. break 
b. continue 
c. stop 
d. exit 
5. Loop luar berputar 3 kali dan loop dalam berputar 4 kali. Badan loop dalam dijalankan total ... 
a. 12 kali 
b. 7 kali 
c. 3 kali 
d. 4 kali 
Kunci jawaban: 1B, 2C, 3C, 4A, 5A. 
Praktik 
1. Buat program yang mencetak bilangan genap dari 2 sampai 20 menggunakan for. 
2. Buat program yang membaca nilai ujian sampai pengguna mengetik -1, lalu menampilkan rata-
rata nilai. Petunjuk: gunakan while, hitung banyak data, dan simpan rata-rata dalam double. 
3. Buat program yang mencetak pola segitiga bintang terbalik setinggi 5 baris (5 bintang di baris 
pertama, 1 bintang di baris terakhir). 
DAFTAR PUSTAKA 
• Stroustrup, B. (2014). Programming: Principles and Practice Using C++ (2nd ed.). Addison-Wesley. 
• Malik, D. S. (2018). C++ Programming: From Problem Analysis to Program Design (8th ed.). 
Cengage Learning. 
• cppreference.com. Iteration statements. 
• Materi PPT Sesi 5 – Looping di C++, Algoritma dan Pemrograman.
