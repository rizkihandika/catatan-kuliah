# AP1.03 - Input & Output.pdf

Sumber: [`materi/AP1.03 - Input & Output.pdf`](../../materi/AP1.03%20-%20Input%20&%20Output.pdf) — teks hasil ekstraksi otomatis.

## Halaman 1

Algoritma & Pemrograman 1
Input dan Output
3

## Halaman 2

Tujuan Pembelajaran
• Mahasiswa mampu mengimplementasikan dengan membuat contoh
program dengan perintah input dan output pada pemrograman c++ secara
rinci serta bentuk umum dan contoh pendeklarasiannya.

## Halaman 3

Input & Output
Input Operation :
Data yang mengalir dari Keyboard, Flash Disk, Network Connection  
menuju Memori Utama.
Output Operation :
Data yang mengalir dari Memori Utama menuju Ke Monitor, Printer, 
Flash Disk ataupun Network Connection

## Halaman 4

C++ Input & Output
Stream
Keterangan
cin
Standard input stream
cout
Standard output stream
cerr
Standard error (output) stream
clog
Standard logging (output) stream
Header File  :  
<iostream>

## Halaman 5

Standard Output (cout)
Cout
menggunakan operator <<  (insertion operation)
Contoh :
cout << “Selamat Datang”; //mencetak tulisan Selamat datang ke layar
cout << 120;   
//mencetak angka 120 ke layar
cout << x;   
//mencetak isi nilai variable x ke layer 
cout << ”Hello”;  
//menampilkan tulisan Hello ke layar
cout << Hello; 
//menampilkan isi dari variable Hello ke layar

## Halaman 6

C++ Standar Output
Insertion Operation (<<) dapat digunakan lebih dari satu dalam sebuah
pernyataan
Contoh :
cout << “Halo, “<<” saya ”<<” belajar C++ ”; 
Output : Halo, saya belajar C++.  
Dapat pula dikombinasikan dengan variable. 
Contoh : 
age = 23;
cout << “Halo, saya berusia”<<age<<” tahun “; 
Output: Halo, saya berusia 23 tahun

## Halaman 7

C++ Standar Output
Menambah perintah garis baru, ada 2 cara :
1. 
[\n] : 
Dapat pula dikombinasikan dengan variable. 
Contoh : 
cout << “First sentence.\n";
cout << "Second sentence.\nThird sentence.";
2. [endl] : 
Contoh :
cout<<”kalimat pertama.”<< endl; 
cout<<”kalimat kedua.”<< endl

## Halaman 8

Standard Input (cin)
cin menggunakan operator >>  (extraction operation)
Contoh :
// i/o example
#include <iostream>
using namespace std;
int main ()
{
int i;
cout << "Please enter an integer value: ";
cin >> i;
cout << "The value you entered is " << i;
cout << " and its double is " << i*2 << ".\n";
return 0;
}

## Halaman 9

Standard Input (cin)
Inputan dalam Cin dapat digabungkan dalam satu perintah
Contoh :
cin >> a >> b;
atau
cin >> a;
cin >> b;

## Halaman 10

Standard Input (cin)

## Halaman 11

Example

## Halaman 12

Terimakasih
