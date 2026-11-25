# AP06 - Nested Loop - PDF.pdf

Sumber: [`materi/AP06 - Nested Loop - PDF.pdf`](../../materi/AP06%20-%20Nested%20Loop%20-%20PDF.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
M O D U L P E L A T I H A N
Nested Loop
Looping Bersarang pada C++
Algoritma & Pemrograman 1
Modul 6
Universitas Siber Asia
Modul ini berisi teori, contoh program, kesalahan umum, bahan diskusi, dan latihan untuk pemula.
Halaman 1

## Halaman 2

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
Isi Modul
Modul ini disusun berurutan, dari konsep sampai latihan. Pelajari satu bagian, lalu coba contoh 
programnya sebelum lanjut.
Bagian
Isi
1
Pendahuluan: tujuan, mengingat kembali loop for, mengapa perlu loop bersarang
2
Konsep nested loop: pengertian, bentuk umum, cara kerja, jumlah iterasi
3
Pola dan program: persegi, segitiga, piramida, tabel perkalian, program interaktif
4
Pendalaman: break dan continue pada nested loop
5
Kesalahan umum dan cara memperbaikinya
6
Bahan diskusi dan tebak output
7
Latihan mandiri
8
Rangkuman
1. Pendahuluan
1.1 Tujuan Pembelajaran
Setelah mempelajari modul ini, peserta mampu:
1.
Menjelaskan konsep dan cara kerja nested loop.
2.
Menulis nested loop for dengan benar.
3.
Membuat pola bintang dan angka.
4.
Membuat tabel perkalian.
5.
Menghitung jumlah iterasi dan menghindari kesalahan umum.
1.2 Mengingat Kembali: Loop for
Loop for mengulang satu atau beberapa perintah. Loop ini punya tiga bagian di dalam tanda kurung.
for (int i = 1; i <= 5; i++)
{
    cout << i << " ";
}
Output:
1 2 3 4 5
Bagian
Contoh
Fungsi
Inisialisasi
int i = 1
Menentukan nilai awal
Kondisi
i <= 5
Loop lanjut selama kondisi bernilai benar
Update
i++
Menaikkan i satu angka setiap putaran
Halaman 2

## Halaman 3

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
Pertanyaan pemantik: bagaimana kalau perulangannya ada di dalam perulangan? Itulah yang akan 
kita pelajari.
1.3 Mengapa Perlu Loop Bersarang?
Banyak data di dunia nyata tersusun dalam baris dan kolom. Untuk mengolahnya, kita butuh satu 
perulangan untuk baris dan satu perulangan lagi untuk kolom.
Contoh
Loop luar (baris)
Loop dalam (kolom)
Kursi bioskop
Baris kursi
Nomor kursi
Tabel nilai
Mahasiswa
Mata kuliah
Gambar digital
Baris piksel
Kolom piksel
Halaman 3

## Halaman 4

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
2. Konsep Nested Loop
2.1 Pengertian
Nested loop (looping bersarang) adalah loop yang berada di dalam badan loop lain. Loop yang di 
luar disebut loop luar, dan loop yang di dalam disebut loop dalam.
Analogi: Jam Dinding
Jarum jam bergeser satu langkah, itulah loop luar. Setiap kali jarum jam bergeser, jarum menit 
berputar penuh 60 kali, itulah loop dalam.
Aturan utamanya: setiap satu langkah loop luar, loop dalam berjalan penuh sampai selesai.
2.2 Bentuk Umum
for (int i = 1; i <= 3; i++)
{
    // badan loop luar
    for (int j = 1; j <= 4; j++)
    {
        // badan loop dalam
    }
}
• Loop luar (i): mengatur baris atau putaran besar.
• Loop dalam (j): berjalan penuh setiap kali i berganti.
• Variabel berbeda: pakai i untuk loop luar dan j untuk loop dalam.
2.3 Cara Kerja
Perhatikan program berikut. Loop luar berjalan 3 kali. Pada setiap putaran, loop dalam berjalan 2 
kali.
for (int i = 1; i <= 3; i++)
    for (int j = 1; j <= 2; j++)
        cout << i << "," << j << " ";
Output:
1,1 1,2 2,1 2,2 3,1 3,2
Halaman 4

## Halaman 5

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
Penelusuran langkah demi langkah:
Putaran
i
j
Yang tampil
1
1
1
1,1
2
1
2
1,2  (j habis, i naik)
3
2
1
2,1
4
2
2
2,2  (j habis, i naik)
5
3
1
3,1
6
3
2
3,2  (selesai)
2.4 Menghitung Jumlah Iterasi
Jumlah putaran perintah paling dalam sama dengan putaran luar dikali putaran dalam. Pada contoh 
di atas, 3 × 2 = 6 putaran.
Kasus
Hitungan
Total putaran
Persegi panjang 4 baris, 6 
kolom
4 × 6
24
Segitiga dengan n = 5
1 + 2 + 3 + 4 + 5
15
Tiga loop bersarang, masing-
masing 10 kali
10 × 10 × 10
1.000
Perhatikan
Makin dalam sarangnya, makin banyak putaran. Loop bersarang yang besar membuat program 
berjalan lebih lambat.
Halaman 5

## Halaman 6

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
3. Pola dan Program
Semua program di bagian ini memakai kerangka berikut. Untuk singkatnya, beberapa contoh hanya 
menampilkan isi int main().
#include <iostream>
using namespace std;
 
int main()
{
    // tulis perintah di sini
    return 0;
}
3.1 Program 1: Persegi Bintang
Tujuan: mencetak 3 baris, masing-masing berisi 5 bintang.
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
Output:
* * * * *
* * * * *
* * * * *
• Loop luar (i): berjalan 3 kali, jadi ada 3 baris.
• Loop dalam (j): berjalan 5 kali, jadi ada 5 bintang per baris.
• endl: pindah baris setelah satu baris bintang selesai.
Halaman 6

## Halaman 7

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
Letak endl Itu Penting
Satu perintah endl bisa menghasilkan tiga bentuk berbeda, tergantung tempatnya.
Letak endl
Hasil
Penilaian
Di dalam loop dalam
Semua bintang tersusun ke bawah, 15 
baris
Salah
Setelah loop dalam
Persegi 3 baris × 5 kolom
Benar
Setelah semua loop
Semua bintang dalam satu baris panjang
Salah
3.2 Program 2: Segitiga Siku-siku
Kuncinya: batas loop dalam bergantung pada nilai i. Pada baris ke-3, loop dalam berjalan 3 kali.
for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= i; j++)
        cout << "* ";
    cout << endl;
}
Output:
*
* *
* * *
* * * *
* * * * *
i
Loop dalam
Jumlah bintang
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
Kunci Pola
Tulis j <= i, bukan j <= 5. Kalau batas loop dalam tetap 5, hasilnya persegi, bukan segitiga.
Halaman 7

## Halaman 8

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
3.3 Program 3: Segitiga Terbalik
Loop luar menghitung mundur dari 5 ke 1. Loop dalam tetap memakai j <= i, sehingga makin ke 
bawah makin pendek.
for (int i = 5; i >= 1; i--)
{
    for (int j = 1; j <= i; j++)
        cout << "* ";
    cout << endl;
}
Output:
* * * * *
* * * *
* * *
* *
*
3.4 Program 4: Segitiga Angka
Hanya beda satu kata: cetak j (nomor kolom) atau cetak i (nomor baris).
Versi A: mencetak nomor kolom (j).
for (int i = 1; i <= 4; i++)
{
    for (int j = 1; j <= i; j++)
        cout << j << " ";
    cout << endl;
}
Output:
1
1 2
1 2 3
1 2 3 4
Versi B: mencetak nomor baris (i).
for (int i = 1; i <= 4; i++)
{
    for (int j = 1; j <= i; j++)
        cout << i << " ";
    cout << endl;
}
Output:
1
2 2
3 3 3
4 4 4 4
Halaman 8

## Halaman 9

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
3.5 Program 5: Piramida
Piramida memakai dua loop dalam di bawah satu loop luar. Loop pertama mencetak spasi, loop 
kedua mencetak bintang.
for (int i = 1; i <= 4; i++)
{
    for (int s = 1; s <= 4 - i; s++)
        cout << " ";
    for (int j = 1; j <= 2 * i - 1; j++)
        cout << "*";
    cout << endl;
}
Output:
   *
  ***
 *****
*******
i
Spasi (4 - i)
Bintang (2i - 1)
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
3.6 Program 6: Tabel Perkalian
Setiap sel tabel adalah hasil i dikali j. Karakter \t memberi jarak tab agar kolom rapi.
#include <iostream>
using namespace std;
 
int main()
{
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5; j++)
            cout << i * j << "\t";
        cout << endl;
    }
    return 0;
}
Output:
1    2    3    4    5
2    4    6    8    10
3    6    9    12   15
4    8    12   16   20
5    10   15   20   25
Halaman 9

## Halaman 10

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
• i: nomor baris, angka pertama.
• j: nomor kolom, angka kedua.
• i * j: isi sel tabel, hasil perkalian.
3.7 Program 7: Segitiga dengan Input
Program ini memakai cin dari modul sebelumnya. Tinggi segitiga ditentukan pengguna saat program 
dijalankan.
#include <iostream>
using namespace std;
 
int main()
{
    int n;
    cout << "Tinggi segitiga: ";
    cin >> n;
 
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
            cout << "* ";
        cout << endl;
    }
    return 0;
}
Output:
Tinggi segitiga: 4
*
* *
* * *
* * * *
Satu program bisa menghasilkan banyak ukuran. Cukup ganti nilai n.
Halaman 10

## Halaman 11

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
4. Pendalaman: break dan continue
Pada nested loop, perintah break hanya menghentikan loop yang paling dalam. Loop luar tetap 
berjalan.
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 5; j++)
    {
        if (j == 3) break;
        cout << j << " ";
    }
    cout << endl;
}
Output:
1 2
1 2
1 2
Loop dalam berhenti saat j bernilai 3, tetapi loop luar tetap berjalan 3 kali. Karena itu ada 3 baris.
Catatan
Perintah continue juga hanya berlaku untuk loop terdalam yang sedang berjalan.
5. Kesalahan Umum dan Cara Memperbaikinya
Setiap programmer pernah melakukan kesalahan berikut. Mengenalinya sejak awal akan 
menghemat banyak waktu.
Kesalahan
Akibat
Perbaikan
Variabel sama di kedua loop
Loop dalam mengubah nilai i milik 
loop luar
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
Hanya satu perintah yang ikut loop
Beri { } bila perintah lebih dari 
satu
Tips Menelusuri
Kalau hasil program tidak sesuai, ganti ukuran menjadi kecil, misalnya 2 baris dan 3 kolom. Lalu 
telusuri nilai i dan j di atas kertas, seperti tabel pada bagian 2.3.
Halaman 11

## Halaman 12

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
6. Bahan Diskusi
Diskusikan pertanyaan berikut secara berpasangan selama sekitar 10 menit, lalu bagikan jawaban 
Anda ke kelas.
1.
Beri contoh sehari-hari yang berpola baris dan kolom. Mana loop luar dan mana loop dalam?
2.
Apa yang terjadi bila endl dipindah ke dalam loop dalam?
3.
Mengapa segitiga memakai j <= i, bukan j <= 5?
4.
Loop luar 10 kali dan loop dalam 10 kali. Berapa kali perintah di dalamnya berjalan?
Aktivitas Tebak Output
Tanpa menjalankan program, tuliskan output potongan kode berikut. Setelah itu, jalankan di 
komputer dan bandingkan.
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= i; j++)
        cout << i;
    cout << endl;
}
Petunjuk: loop dalam berjalan sebanyak i kali, dan yang dicetak adalah i.
Jawaban: baris 1 berisi 1, baris 2 berisi 22, baris 3 berisi 333. Jawaban diskusi nomor 4 adalah 100 
kali.
7. Latihan Mandiri
Tingkat Dasar
1.
Cetak persegi bintang berukuran 4 × 4.
2.
Cetak angka 1 sampai 5 sebanyak 3 baris.
3.
Cetak segitiga bintang setinggi 5.
Tingkat Menengah
4.
Cetak segitiga terbalik dengan tinggi dari input.
5.
Cetak segitiga angka 1, 12, 123, dan seterusnya.
6.
Cetak tabel perkalian 1 sampai 10.
Tantangan
7.
Cetak piramida bintang dengan tinggi dari input.
8.
Cetak belah ketupat: piramida lalu piramida terbalik.
Halaman 12

## Halaman 13

Algoritma & Pemrograman 1 | Modul 6: Nested Loop
Kriteria Penilaian Mandiri
• Program dapat dikompilasi tanpa error.
• Ada petunjuk yang jelas sebelum setiap input.
• Bentuk pola sesuai dan rapi.
• Nama variabel jelas, misalnya baris dan kolom, bukan sekadar a dan b.
• Hasil sesuai ketika diuji dengan minimal dua ukuran.
8. Rangkuman
• Nested loop adalah loop di dalam loop.
• Loop luar berjalan sekali, lalu loop dalam berjalan penuh.
• Total putaran sama dengan putaran luar dikali putaran dalam.
• Loop luar mengatur baris, loop dalam mengatur kolom.
• Letakkan endl setelah loop dalam untuk pindah baris.
• break hanya menghentikan loop terdalam.
Tabel Ringkas
Pola
Batas loop dalam
Yang dicetak
Persegi
j <= 5 (tetap)
"* "
Segitiga siku-siku
j <= i
"* "
Segitiga terbalik
j <= i, i turun
"* "
Segitiga angka
j <= i
j atau i
Piramida
s <= n - i dan j <= 2i - 1
" " lalu "*"
Tabel perkalian
j <= 5 (tetap)
i * j
Teruslah berlatih dengan variasi pola lain. Makin sering menelusuri nilai i dan j, makin mudah Anda 
memahami nested loop.
Terima kasih
Halaman 13
