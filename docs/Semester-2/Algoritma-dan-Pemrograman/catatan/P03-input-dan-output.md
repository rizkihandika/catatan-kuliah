# P03 — Input dan Output

Tanggal: 2026-11-05 · Sumber utama: [`AP.03 - Modul Input & Output.pdf`](../materi/AP.03%20-%20Modul%20Input%20%26%20Output.pdf) (modul), pendukung `AP1.03 - Input & Output.pdf` (slide)

## Ringkasan 3 kalimat
Input adalah data yang mengalir **masuk ke memori utama** (dari keyboard, flash disk, jaringan), output adalah data yang **keluar dari memori** (ke monitor, printer, dll.). C++ memperlakukan I/O sebagai *stream* dari header `<iostream>`: `cout <<` untuk menampilkan, `cin >>` untuk membaca. Hampir semua program interaktif berpola **tampilkan petunjuk → baca input → proses → tampilkan hasil**.

## Konsep kunci

### 1. Arah aliran data (modul hal. 5)
**Intuisi** (analogi restoran): pesanan = input, memasak = proses, makanan diantar = output.

| Operasi | Arah | Contoh perangkat |
|---------|------|------------------|
| Input | perangkat luar → **memori utama** | keyboard, flash disk, jaringan |
| Output | **memori utama** → perangkat luar | monitor, printer, flash disk, jaringan |

Keyboard + monitor = I/O **standar**.

### 2. Stream (modul hal. 6)
Data mengalir satu per satu berurutan seperti **air dalam pipa**. Header: `#include <iostream>`.

| Stream | Fungsi |
|--------|--------|
| `cin` | standard input (keyboard) |
| `cout` | standard output (layar) |
| `cerr` | standard error (pesan kesalahan) |
| `clog` | standard logging (catatan program) |

Kerangka program:
```cpp
#include <iostream>     // fasilitas I/O
using namespace std;    // agar tak perlu menulis std::cout
int main() {            // titik awal program
    // perintah di sini
    return 0;           // selesai normal
}
```

### 3. `cout` dan `<<` (insertion operator)
- **Intuisi**: `<<` adalah panah yang "memasukkan" data ke `cout`.
```cpp
cout << "Selamat Datang";        // teks (pakai petik)
cout << 120;                     // angka
cout << x;                       // isi variabel x (tanpa petik)
int age = 23;
cout << "Halo, saya berusia " << age << " tahun";   // dirangkai
cout << "Dua kalinya " << i * 2; // ekspresi boleh langsung di cout
```
Perhatikan **spasi di dalam petik** — tanpa spasi hasilnya `berusia23tahun`.

### 4. Baris baru: `\n` vs `endl`
| Aspek | `\n` | `endl` |
|-------|------|--------|
| Penulisan | di **dalam** petik | di **luar** petik, didahului `<<` |
| Posisi | bisa di tengah teks | biasanya di akhir |
| Contoh | `cout << "A\nB";` | `cout << "A" << endl << "B";` |

### 5. `cin` dan `>>` (extraction operator)
- **Intuisi**: `>>` menunjuk arah **dari keyboard ke variabel** (kotak titipan).
- Variabel harus **dideklarasikan dulu** dan tipenya cocok.
```cpp
int a, b;
cout << "Masukkan dua bilangan : ";
cin >> a >> b;        // sama dengan cin >> a; cin >> b;
// pengguna boleh memisahkan dengan spasi atau Enter
```
- `cin >> nama` (string) berhenti di **spasi pertama**: "Rina Putri" → `"Rina"`. Untuk satu baris penuh: `getline(cin, nama);`.

### 6. Program contoh penting: menukar nilai (modul hal. 12–13)
**Intuisi**: menukar isi dua gelas butuh gelas kosong (`temp`).
```cpp
temp = A;   // simpan A
A = B;      // A diisi B
B = temp;   // B diisi A lama
```

| Langkah | A | B | temp |
|---------|---|---|------|
| awal | 5 | 8 | – |
| `temp = A` | 5 | 8 | 5 |
| `A = B` | 8 | 8 | 5 |
| `B = temp` | 8 | 5 | 5 |

Tanpa `temp` (`A = B; B = A;`) hasilnya A = B = 8 → nilai 5 hilang.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Stream | Aliran karakter berurutan dari sumber ke tujuan |
| Insertion operator `<<` | Menyisipkan data ke stream output |
| Extraction operator `>>` | Mengambil data dari stream input ke variabel |
| `endl` | Manipulator pindah baris |
| `using namespace std` | Agar `cout`/`cin` bisa ditulis tanpa `std::` |
| `getline` | Membaca satu baris penuh termasuk spasi |

## Sering keluar di ujian / mudah keliru (modul hal. 16)
| Salah | Benar |
|-------|-------|
| `cout >> "Halo"; cin << x;` (arah terbalik) | `cout << "Halo"; cin >> x;` |
| `cout << Selamat;` (teks tanpa petik) | `cout << "Selamat";` |
| `cin >> umur;` tanpa deklarasi | `int umur; cin >> umur;` |
| `Cout << "Halo";` | `cout` (case sensitive) |
| lupa `;` / lupa `#include <iostream>` | tambahkan |
| `#include <iostream.h>`, `void main()` (gaya lama) | `#include <iostream>`, `int main()` + `return 0;` |

- `cout << "x"` mencetak huruf x; `cout << x` mencetak **isi** variabel x.
- Pembagian `int` membuang desimal — untuk rumus seperti `F = C * 9 / 5 + 32` pakai `float`.

## Latihan cepat (prediksi output, modul hal. 17)
```cpp
int a = 3, b = 4;
cout << "a + b = " << a + b << endl;
cout << "a * b = " << a * b << "\n";
cout << "Selesai" << endl;
```
<details><summary>Jawaban</summary>

```
a + b = 7
a * b = 12
Selesai
```
</details>

## Pertanyaan untuk dicek ke dosen
- Apakah `getline` dan `string` sudah boleh dipakai di kuis/UTS, atau baru pertemuan berikutnya?

## Sumber
- `AP.03 - Modul Input & Output.pdf` hal. 4–19 (teks: `arsip/teks-materi/AP.03 - Modul Input & Output.pdf.md`)
- `AP1.03 - Input & Output.pdf` hal. 3–9
