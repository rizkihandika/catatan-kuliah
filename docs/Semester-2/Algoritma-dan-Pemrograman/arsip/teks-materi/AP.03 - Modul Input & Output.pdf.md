# AP.03 - Modul Input & Output.pdf

Sumber: [`materi/AP.03 - Modul Input & Output.pdf`](../../materi/AP.03%20-%20Modul%20Input%20&%20Output.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 1 
M O D U L P E L A T I H A N 
Input dan Output 
pada Pemrograman C++ 
Algoritma & Pemrograman 1 
Pertemuan 3 
Asia Cyber University 
Modul ini berisi teori, contoh program, kesalahan umum, bahan diskusi, dan latihan untuk pemula.

## Halaman 2

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 2 
Daftar Isi 
Daftar Isi .................................................................................................................................................. 2 
1. Pendahuluan ....................................................................................................................................... 4 
1.1 Tujuan Pembelajaran .................................................................................................................... 4 
1.2 Mengapa Input dan Output Penting? ........................................................................................... 4 
1.3 Contoh Nyata ................................................................................................................................ 4 
2. Konsep Input dan Output .................................................................................................................... 5 
2.1 Operasi Input ................................................................................................................................ 5 
2.2 Operasi Output.............................................................................................................................. 5 
2.3 Ringkasan Arah Aliran Data ........................................................................................................... 5 
3. Stream dan Header File iostream ....................................................................................................... 6 
3.1 Apa Itu Stream? ............................................................................................................................ 6 
3.2 Header File .................................................................................................................................... 6 
3.3 Empat Stream Standar .................................................................................................................. 6 
3.4 Kerangka Program C++ .................................................................................................................. 6 
4. Standard Output (cout) ....................................................................................................................... 7 
4.1 Konsep ........................................................................................................................................... 7 
4.2 Bentuk Umum ............................................................................................................................... 7 
4.3 Contoh Penggunaan ...................................................................................................................... 7 
4.4 Contoh Program 1: Program Pertama .......................................................................................... 7 
4.5 Menggabungkan Beberapa Data .................................................................................................. 8 
4.6 Menggabungkan Teks dan Variabel .............................................................................................. 8 
4.7 Menambah Baris Baru ................................................................................................................... 8 
Cara 1: Karakter \n .............................................................................................................................. 8 
Cara 2: Manipulator endl .................................................................................................................... 9 
Perbandingan \n dan endl .................................................................................................................. 9 
5. Standard Input (cin) .......................................................................................................................... 10 
5.1 Konsep ......................................................................................................................................... 10 
5.2 Bentuk Umum ............................................................................................................................. 10 
5.3 Contoh Program 2: Membaca Satu Nilai ..................................................................................... 10 
5.4 Contoh Program 3: Mengalikan Dua ........................................................................................... 10 
5.5 Membaca Beberapa Nilai Sekaligus ............................................................................................ 11 
6. Contoh Program Lengkap ................................................................................................................. 12 
6.1 Program 4: Penjumlahan Dua Bilangan ...................................................................................... 12 
6.2 Program 5: Menukar Nilai Dua Variabel ..................................................................................... 12 
6.3 Program 6: Perkenalan Diri ......................................................................................................... 13 
6.4 Program 7: Luas Persegi Panjang ................................................................................................ 14

## Halaman 3

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 3 
7. Kesalahan Umum dan Cara Memperbaikinya ................................................................................... 16 
8. Bahan Diskusi .................................................................................................................................... 17 
Aktivitas Prediksi Output .................................................................................................................. 17 
9. Latihan Mandiri ................................................................................................................................. 18 
Tingkat Dasar .................................................................................................................................... 18 
Tingkat Menengah ............................................................................................................................ 18 
Tantangan ......................................................................................................................................... 18 
Kriteria Penilaian Mandiri ................................................................................................................. 18 
10. Rangkuman ..................................................................................................................................... 19 
Tabel Ringkas .................................................................................................................................... 19

## Halaman 4

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 4 
1. Pendahuluan 
1.1 Tujuan Pembelajaran 
Setelah mempelajari modul ini, peserta mampu: 
1. Menjelaskan apa itu operasi input dan output. 
2. Menyebutkan stream standar pada C++ dan header file yang dibutuhkan. 
3. Menampilkan teks, angka, dan isi variabel dengan cout. 
4. Membaca data dari keyboard dengan cin. 
5. Membuat program sederhana yang menggabungkan input, proses, dan output. 
1.2 Mengapa Input dan Output Penting? 
Program yang tidak bisa menerima data dan tidak bisa menampilkan hasil tidak banyak berguna. 
Hampir semua program yang Anda kenal punya dua hal ini. Aplikasi kasir menerima harga barang 
lalu menampilkan total belanja. Aplikasi navigasi menerima tujuan lalu menampilkan rute. 
Analogi: Restoran 
Bayangkan program sebagai dapur restoran. Pesanan pelanggan adalah input. Koki memasak, 
itulah proses. Makanan yang diantar ke meja adalah output. 
Tanpa pesanan, koki tidak tahu harus memasak apa. Tanpa pengantar makanan, pelanggan tidak 
menerima apa-apa. 
 
1.3 Contoh Nyata 
• ATM: Anda memasukkan PIN dan nominal (input), lalu layar menampilkan saldo dan uang 
keluar (output). 
• Kalkulator: Anda mengetik angka (input), lalu layar menampilkan hasil (output). 
• Formulir pendaftaran: Anda mengisi nama dan alamat (input), lalu muncul pesan konfirmasi 
(output).

## Halaman 5

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 5 
2. Konsep Input dan Output 
2.1 Operasi Input 
Operasi input adalah aliran data yang masuk ke memori utama (RAM). Sumber datanya bisa 
bermacam-macam: 
• Keyboard 
• Flash disk 
• Koneksi jaringan (network connection) 
2.2 Operasi Output 
Operasi output adalah aliran data yang keluar dari memori utama menuju perangkat tujuan, 
misalnya: 
• Monitor 
• Printer 
• Flash disk 
• Koneksi jaringan (network connection) 
2.3 Ringkasan Arah Aliran Data 
Operasi 
Arah Aliran Data 
Contoh Perangkat 
Input 
Perangkat luar menuju memori 
utama 
Keyboard, flash disk, jaringan 
Output 
Memori utama menuju perangkat 
luar 
Monitor, printer, flash disk, jaringan 
 
Pada modul ini kita memakai keyboard sebagai sumber input dan monitor sebagai tujuan output. 
Inilah yang disebut input dan output standar.

## Halaman 6

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 6 
3. Stream dan Header File iostream 
3.1 Apa Itu Stream? 
Dalam C++, data input dan output diperlakukan sebagai aliran (stream) karakter. Cara 
membayangkannya seperti air di dalam pipa. Data mengalir satu per satu, berurutan, dari sumber ke 
tujuan. 
3.2 Header File 
Untuk memakai stream standar, program harus menyertakan header file berikut di baris paling atas: 
#include <iostream> 
 
3.3 Empat Stream Standar 
Stream 
Keterangan 
cin 
Standard input stream. Membaca data dari keyboard. 
cout 
Standard output stream. Menampilkan data ke layar. 
cerr 
Standard error (output) stream. Menampilkan pesan kesalahan. 
clog 
Standard logging (output) stream. Menampilkan catatan (log) program. 
 
Catatan 
Dua stream yang paling sering dipakai pemula adalah cin dan cout. Modul ini fokus pada 
keduanya. cerr dan clog dipakai pada program yang lebih besar. 
 
3.4 Kerangka Program C++ 
Semua contoh dalam modul ini memakai kerangka berikut: 
#include <iostream> 
using namespace std; 
  
int main() 
{ 
    // tulis perintah di sini 
    return 0; 
} 
 
• #include <iostream> memanggil fasilitas input dan output. 
• using namespace std; membuat kita bisa menulis cout dan cin tanpa awalan std::. 
• int main() adalah titik awal program dijalankan. 
• return 0; menandakan program selesai dengan normal.

## Halaman 7

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 7 
4. Standard Output (cout) 
4.1 Konsep 
cout dibaca "c-out" dan dipakai untuk menampilkan data ke layar. cout bekerja bersama operator << 
yang disebut insertion operator (operasi penyisipan). 
Analogi: Corong 
Tanda << seperti anak panah yang menunjuk ke arah cout. Data di sebelah kanan "dimasukkan" ke 
dalam cout, lalu cout menampilkannya di layar. 
 
4.2 Bentuk Umum 
cout << data; 
 
Data bisa berupa teks (diapit tanda petik ganda), angka, atau nama variabel. 
4.3 Contoh Penggunaan 
Perintah 
Hasil 
cout << "Selamat Datang"; 
Mencetak tulisan Selamat Datang ke layar 
cout << 120; 
Mencetak angka 120 ke layar 
cout << x; 
Mencetak isi (nilai) variabel x ke layar 
cout << "Hello"; 
Menampilkan tulisan Hello ke layar 
cout << Hello; 
Menampilkan isi dari variabel Hello ke layar 
 
Perhatikan: Tanda Petik 
cout << "Hello"; menampilkan tulisan Hello. 
cout << Hello; menampilkan isi variabel bernama Hello. Variabel itu harus sudah dideklarasikan 
lebih dulu, kalau tidak program akan error. 
Aturan mudahnya: pakai tanda petik untuk teks, tanpa tanda petik untuk variabel. 
 
4.4 Contoh Program 1: Program Pertama 
#include <iostream> 
using namespace std; 
  
int main() 
{ 
    cout << "Selamat Datang"; 
    return 0; 
} 
 
Output: 
Selamat Datang

## Halaman 8

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 8 
 
4.5 Menggabungkan Beberapa Data 
Operator << boleh dipakai lebih dari satu kali dalam satu pernyataan. Setiap << menyambung satu 
potongan data ke potongan sebelumnya. 
cout << "Halo, " << "saya " << "belajar C++."; 
 
Output: 
Halo, saya belajar C++. 
 
4.6 Menggabungkan Teks dan Variabel 
#include <iostream> 
using namespace std; 
  
int main() 
{ 
    int age = 23; 
    cout << "Halo, saya berusia " << age << " tahun"; 
    return 0; 
} 
 
Output: 
Halo, saya berusia 23 tahun 
 
Tips 
Perhatikan spasi di dalam tanda petik, yaitu "Halo, saya berusia " dan " tahun". Komputer 
menampilkan persis apa yang Anda tulis. Kalau spasi dilupakan, hasilnya menjadi 
"berusia23tahun" dan sulit dibaca. 
 
4.7 Menambah Baris Baru 
Secara bawaan, cout menampilkan semuanya dalam satu baris. Ada dua cara untuk pindah ke baris 
berikutnya. 
Cara 1: Karakter \n 
Tulis \n di dalam teks. Karakter ini bisa diletakkan di mana saja dalam teks, termasuk di tengah 
kalimat. 
cout << "First sentence.\n"; 
cout << "Second sentence.\nThird sentence."; 
 
Output: 
First sentence. 
Second sentence. 
Third sentence.

## Halaman 9

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 9 
Cara 2: Manipulator endl 
Tulis endl (end line) sebagai data tersendiri, tanpa tanda petik. 
cout << "kalimat pertama." << endl; 
cout << "kalimat kedua." << endl; 
 
Output: 
kalimat pertama. 
kalimat kedua. 
 
Perbandingan \n dan endl 
Aspek 
\n 
endl 
Penulisan 
Di dalam tanda petik 
Di luar tanda petik, diberi << 
Posisi 
Bisa di tengah teks 
Biasanya di akhir pernyataan 
Contoh 
cout << "A\nB"; 
cout << "A" << endl << "B";

## Halaman 10

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 10 
5. Standard Input (cin) 
5.1 Konsep 
cin dibaca "c-in" dan dipakai untuk membaca data dari keyboard. cin bekerja bersama operator >> 
yang disebut extraction operator (operasi pengambilan). 
Analogi: Kotak Titipan 
Variabel itu seperti kotak yang diberi nama. cin mengambil apa yang Anda ketik di keyboard, lalu 
memasukkannya ke dalam kotak. Tanda >> menunjukkan arah, yaitu dari keyboard ke variabel. 
 
5.2 Bentuk Umum 
cin >> nama_variabel; 
 
Variabel harus dideklarasikan lebih dulu dan tipe datanya harus sesuai dengan data yang akan 
dimasukkan. 
5.3 Contoh Program 2: Membaca Satu Nilai 
#include <iostream> 
using namespace std; 
  
int main() 
{ 
    int nilai; 
    cout << "Masukkan nilai anda : "; 
    cin >> nilai; 
  
    cout << "Anda memperoleh nilai " << nilai << endl; 
    return 0; 
} 
 
Output: 
Masukkan nilai anda : 85 
Anda memperoleh nilai 85 
 
Angka 85 diketik oleh pengguna. Pola yang dipakai hampir semua program interaktif adalah: 
tampilkan petunjuk dengan cout, baca jawaban dengan cin, lalu tampilkan hasil dengan cout. 
5.4 Contoh Program 3: Mengalikan Dua 
Program berikut membaca sebuah bilangan bulat lalu menampilkan nilai itu beserta dua kalinya.

## Halaman 11

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 11 
// i/o example 
#include <iostream> 
using namespace std; 
  
int main() 
{ 
    int i; 
    cout << "Please enter an integer value: "; 
    cin >> i; 
    cout << "The value you entered is " << i; 
    cout << " and its double is " << i * 2 << ".\n"; 
    return 0; 
} 
 
Output: 
Please enter an integer value: 7 
The value you entered is 7 and its double is 14. 
 
Perhatikan bahwa i * 2 dihitung langsung di dalam pernyataan cout. Ekspresi aritmetika boleh 
dipakai sebagai data output. 
5.5 Membaca Beberapa Nilai Sekaligus 
Beberapa input dapat digabungkan dalam satu perintah. Kedua penulisan berikut hasilnya sama: 
Digabung 
Dipisah 
cin >> a >> b; 
cin >> a; cin >> b; 
 
Saat program dijalankan, pengguna bisa memisahkan dua nilai dengan spasi atau menekan Enter di 
antaranya. 
int a, b; 
cout << "Masukkan dua bilangan : "; 
cin >> a >> b; 
cout << "a = " << a << ", b = " << b << endl; 
 
Output: 
Masukkan dua bilangan : 4 9 
a = 4, b = 9

## Halaman 12

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 12 
6. Contoh Program Lengkap 
Bagian ini menggabungkan input, proses, dan output dalam program yang utuh. Cobalah mengetik 
ulang setiap program, jangan hanya menyalin. Mengetik sendiri membantu Anda mengingat 
sintaksnya. 
6.1 Program 4: Penjumlahan Dua Bilangan 
Tujuan: membaca dua bilangan, menjumlahkan, lalu menampilkan hasilnya. 
#include <iostream> 
using namespace std; 
  
int main() 
{ 
    int x, y; 
    int sum; 
  
    cout << "Type a number: "; 
    cin >> x; 
    cout << "Type another number: "; 
    cin >> y; 
  
    sum = x + y; 
    cout << "Sum is: " << sum << endl; 
    return 0; 
} 
 
Output: 
Type a number: 10 
Type another number: 25 
Sum is: 35 
 
Alur program: deklarasi variabel, minta input pertama, minta input kedua, hitung, tampilkan hasil. 
6.2 Program 5: Menukar Nilai Dua Variabel 
Tujuan: menukar isi variabel A dengan isi variabel B. 
Analogi: Menukar Isi Dua Gelas 
Anda punya gelas A berisi teh dan gelas B berisi kopi. Untuk menukarnya, Anda butuh gelas 
kosong sebagai tempat sementara. Variabel temp berperan sebagai gelas kosong itu.

## Halaman 13

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 13 
// Program untuk mempertukarkan nilai A dengan nilai B 
#include <iostream> 
using namespace std; 
  
int main() 
{ 
    int A, B, temp; 
  
    cout << "A = "; 
    cin >> A; 
  
    cout << "B = "; 
    cin >> B; 
  
    temp = A; 
    A = B; 
    B = temp; 
  
    cout << "Jadi sekarang : " << endl; 
    cout << "A = " << A << endl; 
    cout << "B = " << B << endl; 
    return 0; 
} 
 
Output: 
A = 5 
B = 8 
Jadi sekarang : 
A = 8 
B = 5 
 
Penelusuran langkah demi langkah dengan A = 5 dan B = 8: 
Langkah 
Perintah 
A 
B 
temp 
Awal 
setelah input 
5 
8 
- 
1 
temp = A; 
5 
8 
5 
2 
A = B; 
8 
8 
5 
3 
B = temp; 
8 
5 
5 
 
6.3 Program 6: Perkenalan Diri 
Tujuan: membaca nama dan umur, lalu menampilkan kalimat perkenalan.

## Halaman 14

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 14 
#include <iostream> 
using namespace std; 
  
int main() 
{ 
    string nama; 
    int umur; 
  
    cout << "Siapa nama Anda? "; 
    cin >> nama; 
    cout << "Berapa umur Anda? "; 
    cin >> umur; 
  
    cout << "Halo, " << nama << "!" << endl; 
    cout << "Tahun depan Anda berusia " << umur + 1 << " tahun." << endl; 
    return 0; 
} 
 
Output: 
Siapa nama Anda? Rina 
Berapa umur Anda? 20 
Halo, Rina! 
Tahun depan Anda berusia 21 tahun. 
 
Catatan 
cin >> nama hanya membaca sampai spasi pertama. Kalau pengguna mengetik "Rina Putri", 
variabel nama hanya berisi "Rina". Untuk membaca satu baris penuh yang mengandung spasi, 
gunakan getline(cin, nama); yang akan dipelajari pada pertemuan berikutnya. 
 
6.4 Program 7: Luas Persegi Panjang 
#include <iostream> 
using namespace std; 
  
int main() 
{ 
    float panjang, lebar, luas; 
  
    cout << "Panjang (cm): "; 
    cin >> panjang; 
    cout << "Lebar (cm)  : "; 
    cin >> lebar; 
  
    luas = panjang * lebar; 
    cout << "Luas = " << luas << " cm2" << endl; 
    return 0; 
}

## Halaman 15

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 15 
Output: 
Panjang (cm): 12.5 
Lebar (cm)  : 4 
Luas = 50 cm2

## Halaman 16

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 16 
7. Kesalahan Umum dan Cara Memperbaikinya 
Setiap programmer pernah melakukan kesalahan berikut. Mengenalinya sejak awal akan 
menghemat banyak waktu. 
Kesalahan 
Contoh Salah 
Perbaikan 
Lupa titik koma 
cout << "Halo" << endl 
cout << "Halo" << endl; 
Arah operator terbalik 
cout >> "Halo"; cin << x; 
cout << "Halo"; cin >> x; 
Tanpa tanda petik untuk 
teks 
cout << Selamat; 
cout << "Selamat"; 
Variabel belum 
dideklarasikan 
cin >> umur; 
int umur; cin >> umur; 
Spasi hilang di dalam teks 
cout << "berusia" << age; 
cout << "berusia " << age; 
Lupa #include <iostream> 
(tidak ada include) 
#include <iostream> 
Salah huruf besar-kecil 
Cout << "Halo"; 
cout << "Halo"; 
 
Catatan Penting: Gaya Penulisan Lama 
Pada beberapa buku lama, Anda mungkin menemukan #include <iostream.h> dan void main(). 
Penulisan ini sudah usang dan tidak diterima oleh kompiler modern. 
Gunakan #include <iostream>, using namespace std;, dan int main() dengan return 0; seperti pada 
seluruh contoh di modul ini.

## Halaman 17

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 17 
8. Bahan Diskusi 
Diskusikan pertanyaan berikut secara berpasangan selama sekitar 10 menit, lalu bagikan jawaban 
Anda ke kelas. 
1. Sebutkan tiga aplikasi di ponsel Anda. Untuk masing-masing, apa input dan apa output-nya? 
2. Apa bedanya cout << "x"; dengan cout << x;? Kapan Anda memakai masing-masing? 
3. Mengapa petunjuk seperti "Masukkan nilai anda :" perlu ditampilkan sebelum cin? Apa yang 
terjadi bila petunjuk itu tidak ada? 
4. Kapan Anda memilih \n dan kapan endl? Apakah ada situasi yang hanya bisa dilakukan oleh 
salah satunya? 
5. Pada program penukaran nilai, apa yang terjadi bila variabel temp dihilangkan dan hanya 
memakai A = B; B = A;? Coba telusuri dengan nilai A = 5 dan B = 8. 
Aktivitas Prediksi Output 
Tanpa menjalankan program, tuliskan output dari potongan kode berikut. Setelah itu, jalankan di 
komputer dan bandingkan. 
int a = 3, b = 4; 
cout << "a + b = " << a + b << endl; 
cout << "a * b = " << a * b << "\n"; 
cout << "Selesai" << endl;

## Halaman 18

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 18 
9. Latihan Mandiri 
Tingkat Dasar 
1. Buatlah program yang menampilkan tiga baris berikut memakai \n: 
Nama   : (nama Anda) 
Prodi  : Informatika 
Kampus : Asia Cyber University 
 
2. Buatlah program yang membaca satu bilangan bulat, lalu menampilkan bilangan itu beserta 
tiga kalinya. 
3. Buatlah program yang membaca dua bilangan, lalu menampilkan hasil penjumlahan, 
pengurangan, dan perkalian keduanya. 
Tingkat Menengah 
4. Buatlah program yang membaca alas dan tinggi segitiga, lalu menampilkan luasnya. Gunakan 
tipe float. 
5. Buatlah program yang membaca tiga nilai ujian, lalu menampilkan jumlah dan rata-ratanya. 
6. Buatlah program konversi suhu: baca suhu dalam Celsius, lalu tampilkan nilainya dalam 
Fahrenheit. Rumus: F = C * 9 / 5 + 32. Hati-hati dengan pembagian bilangan bulat; gunakan 
tipe float. 
Tantangan 
7. Buatlah program struk belanja sederhana. Baca harga satu barang dan jumlah yang dibeli, lalu 
tampilkan total harga dengan format rapi dalam beberapa baris. 
Kriteria Penilaian Mandiri 
• Program dapat dikompilasi tanpa error. 
• Ada petunjuk yang jelas sebelum setiap input. 
• Output mudah dibaca, dengan spasi dan baris baru yang rapi. 
• Nama variabel bermakna, misalnya luas dan bukan sekadar l. 
• Hasil sesuai ketika diuji dengan minimal dua set data.

## Halaman 19

Algoritma & Pemrograman 1 | Input dan Output C++ 
Halaman 19 
10. Rangkuman 
• Input adalah data yang masuk ke memori utama. Output adalah data yang keluar dari memori 
utama. 
• C++ memakai header <iostream> untuk input dan output standar. 
• cin membaca input dari keyboard dengan operator >> (extraction). 
• cout menampilkan output ke layar dengan operator << (insertion). 
• Operator << dan >> boleh dirangkai dalam satu pernyataan. 
• Baris baru dibuat dengan \n atau endl. 
• Teks memakai tanda petik ganda. Variabel ditulis tanpa tanda petik. 
Tabel Ringkas 
Elemen 
Operator 
Contoh 
cout 
<< 
cout << "Halo" << x; 
cin 
>> 
cin >> a >> b; 
Baris baru 
\n / endl 
cout << "A\n"; cout << "B" << endl; 
 
Pada pertemuan berikutnya kita akan memakai input dan output ini bersama operator dan 
percabangan untuk membuat program yang mengambil keputusan. 
Terima kasih
