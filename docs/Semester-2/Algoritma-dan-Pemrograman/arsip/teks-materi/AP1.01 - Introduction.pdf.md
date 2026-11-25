# AP1.01 - Introduction.pdf

Sumber: [`materi/AP1.01 - Introduction.pdf`](../../materi/AP1.01%20-%20Introduction.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

Algoritma & Pemrograman 1
Pengenalan Bahasa C++
1

## Halaman 2

Bahasa C/C++ merupakan bahasa yang sudah cukup lama dikenal di dunia
pemrogrmaan, dan hingga saat ini masih digunakan, Masih banyak yang 
memakainya dikarenakan Bahasa C/C++ ini menawarkan kecepatan
dalam prosesnya, hal ini disebabkan karena bahasa C/C++ ini lebih
mendekati ke bahasa mesin.
Oleh karena itu, mahasiswa perlu untuk mengetahui bahasa C/C++ ini, 
karena merupakan pondasi dari beberapa bahasa pemrograman yang 
populer saat ini, seperti Java, C#.Net, Golang, dan lain sebagainya.
Deskripsi

## Halaman 3

• Mahasiswa mampu memecahkan masalah yang ada dengan
menggunakan langkah – langkah dan dapat
mengimplementasikannya menggunakan bahasa 
pemrograman C++ 
• Mahasiswa mampu menjelaskan struktur bahasa 
pemrograman c++ dan sejarah bahasa pemrograman
tersebut secara rinci mulai dari struktur awal program 
sampai dengan struktur akhir dalam program. 
Tujuan Matakuliah

## Halaman 4

• Andri Kristanto, Algoritma & Pemrograman dengan C++ Edisi 2, Graha 
Ilmu, Yogyakarta, 2009.
• Budi Raharjo, Pemrograman C++,  Informatika, Bandung, 2010.
• Moh. Sjukani, Algoritma & Struktur Data denganC, C++ danJAVA, Mitra
Wacana Media, Bandung, 2004.
• ArmadyahAmborowati, Pengantar pemrograman terstruktur, Andi, 
2007
Daftar Pustaka

## Halaman 5

Konsep Dasar Pemrograman
•
Program
Deretan instruksi yang digunakan untuk mengendalikan komputer, 
sehingga komputer dapat melakukan tindakan sesuai dengan yang 
dikehendaki pembuatnya.
Program yang baik jika algoritmanya jelas terstruktur dan mudah dibaca.
•
Algoritma
Langkah-langkah untuk menyelesaikan sesuatu masalah
•
PemrogramanTerstruktur
Metode untuk mengorganisasikan dan membuat kode-kode program 
supaya mudah untuk dimengerti, mudah di test dan di modifikasi

## Halaman 6

Tahapan Pembuatan Program
•
Definisi Masalah
•
Analisa Kebutuhan
•
Pembuatan Algoritma/Desain algoritma
•
Pemrograman
•
Pengujian Program
•
Dokumentasi
•
Pemeliharaan

## Halaman 7

Pengenalan C++ 
•
Sejarah C++ 
•
Lembar Kerja (IDE) pada C++
•
Struktur Dasar Bahasa Pemrograman C++ 
•
Penjelasan Struktur Bahasa Pemrograman C++ 
dan Contoh sederhana struktur C++

## Halaman 8

Sejarah Bahasa C++
•
Merupakan pengembangan dari bahasa C 
•
1972 : Brian W. Kerninghan dan Dennis M. Ritchie menciptakan
bahasa C
1983 : BjarneStroustrup dari Laboratorium Bell, AT&T menciptakan
bahasa C++ dan yang menamakannya Rick Mascitti
• Kelebihannya : Mampu mendukung pemrograman yang berorientasi
objek ( OOP / Object Oriented Programming).

## Halaman 9

Pengenalan C++
•
C++ merupakan perluasan bahasaC dengan tambahan fasilitas kelas
(Class).
•
Program C++ berupa sekumpulan fungsi. Bahkan program utama juga
berbentuk fungsi, yaitu fungsi main(). 
•
C++ bersifat case sensitive , artinya membedakan antara huruf besar
dan huruf kecil.
•
BahasaC dan C++ merupakan bahasa yang sangat populer dalam
dunia pengembangan perangkat lunak. Kedua bahasa ini digolongkan
ke dalam bahasa tingkat menengah. 
•
C++  mendukung pemrograman berorientasi objek atau Object 
Oriented Programming (OOP)          Mempermudah & Mempercepat
dalam coding serta Mempermudah dalam pemeliharaan program.

## Halaman 10

Proses Kompilasi dan Eksekusi Program
1.
Kode Program
2.
Preprosesor
Perintah yang diawali tanda # (pound) dan menghasilkan file yang akan
dilewatkan ke dalam compiler. Contoh : # include,  # define, # ifdef
3.
Kompiler
Menerjemahkan ke dalam bahasa assembly
4.
Assembler
Membuat sebuah kode objek. Jika kode program tidak menggunakan fungsi-
fungsi di library lain, maka langsung dieksekusi menjadi EXE
5.
Link Editor
Jika kode program  mempunya fungsi-fungsi luar yang disimpan dalam suatu
library lain, maka akan mengkombinasikan kode objek dan library yang ada untuk
dijadikan file EXE.

## Halaman 11

Struktur Program Bahasa C++
1. Deklarasi header file/preprocessor
•
Diawali dengan #include <.......> Titik-titik diisi dengan nama
header file yang ingin digunakan. 
2. Deklarasi konstanta (bisa ada bisa tidak)
3. Deklarasi var global (bisa ada bisa tidak)
4. Deklarasi fungsi
•
Bisa ada bisa tidak. 
•
Fungsi dapat diletakkan seletah fungsi main().
5. Deklarasi class (bisa ada bisa tidak)
6. Program utama (fungsi utama)          main() {  ............. }
•
Harus ada, diawali dengan { dan diakhiri dengan }. 
•
Berisi instruksi-instruksi yang nantinya akan dieksekusi berikut
deklarasi variabel (variabel lokal) yang diperlukan.

## Halaman 12

•
File yang berisi fungsi-fungsi yang mendukung eksekusi instruksi tertentu dalam C++ 
dan telah dikompilasi sebelumnya. 
•
Untuk menggunakan file header, harus mendaftarkan terlebih dahulu melalui
preprosesor directive #include
•
Contoh :
1. #include <iostream.h>
Untuk fungsi : cout dan cin
2. #include <conio.h>
Untuk fungsi : getch() dan clrscr()
3. #include <iomani.h>
Untuk fungsi : setiosflags (ios::fixed) dan setprecision(n)
4. #include <math.h>
Untuk fungsi : sqrt (x) dan pow (x,y)
File Header

## Halaman 13

•
Komentar
Digunakan untuk memberikan komentar pada program.
Menggunakan tanda // atau /* ... */
•
Tanda Semicolon ( ; )
Digunakan untuk mengakhiri sebuah pernyataan. 
Setiap pernyataan harus diakhiri dengan sebuah tanda semicolon.
•
Perintah cin (baca: c in)
Digunakan untuk memasukkan data
•
Perintah cout (baca: c out)
Digunakan untuk mengarahkan data ke dalam standar output (cetak
pada layar)
Tanda & Perintah dalam C++

## Halaman 14

• Tanda Semicolon ( ; )
Digunakan untuk mengakhiri sebuah pernyataan. 
Setiap pernyataan harus diakhiri dengan sebuah tanda
semicolon.
• Perintah cout (baca: c out)
Merupakan sebuah objek di dalam C++, 
Digunakan untuk mengarahkan data ke dalam standar
output (cetak pada layar)
Tanda & Perintah dalam C++

## Halaman 15

•
Perintah yang digunakan untuk pindah baris :
1. Tanda \n
Contoh :  
cout << ”\nHallo...selamat datang...”;
cout << ”Hallo...selamat datang\n”;
2. Tanda <<endl
Ditulis di luar tanda petik dan bisa diletakkan sebelum atau 
setelah penulisan kalimat yang akan ditampilkan.
Contoh :
cout << endl << ”Hallo...selamat datang...”;
cout << ”Hallo...selamat datang” << endl;
Tanda & Perintah dalam C++

## Halaman 16

//ini contoh pertama ini contoh
#include <iostream>
using namespace std;
main() {
cout<<"\nBelajar bersama";
cout<<"Membuat program sederhana\n";
cout<<"\nDengan bahasaC++\n";
}
Memasukkan fungsi std dalam program
Memanggil Fungsi cout()
Contoh 1 :
Contoh Program

## Halaman 17

Contoh Program
#include <iostream>
using namespace std;
int main()
{
int x, y, z;
cout <<“Masukkan bilangan kesatu:“;
cin >> x;
cout <<“Masukkan bilangan kedua:“;
cin >> y;
z = x + y;
cout << ”Jadi hasil penjumlahannya adalah: ” << z;
return 0;
}
Contoh 2 :

## Halaman 18

Lembar Kerja (IDE) di C++
Aplikasi Berbasis web

## Halaman 19

Terimakasih
