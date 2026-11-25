# P01 — Introduction Programming (Pengenalan C++)

Tanggal: 2026-10-22 · Sumber utama: [`AP1.01 - Introduction.pdf`](../materi/AP1.01%20-%20Introduction.pdf)

## Ringkasan 3 kalimat
Program adalah deretan instruksi untuk mengendalikan komputer, dan program yang baik lahir dari algoritma yang jelas serta terstruktur. C++ (1983, Bjarne Stroustrup) adalah perluasan bahasa C (1972) dengan tambahan *class* sehingga mendukung OOP, tergolong bahasa tingkat menengah dan *case sensitive*. Kode C++ melewati preprocessor → compiler → assembler → linker sebelum menjadi file `.exe`, dan setiap program wajib punya fungsi `main()`.

## Konsep kunci

### 1. Program, algoritma, pemrograman terstruktur
- **Intuisi**: algoritma = resep, program = resep yang ditulis dalam bahasa yang dimengerti komputer.
- **Definisi** (hal. 5):
  - *Program*: deretan instruksi untuk mengendalikan komputer agar bertindak sesuai keinginan pembuatnya.
  - *Algoritma*: langkah-langkah menyelesaikan suatu masalah.
  - *Pemrograman terstruktur*: metode mengorganisasi kode supaya mudah dimengerti, dites, dan dimodifikasi.

### 2. Tahapan pembuatan program (hal. 6) — urutannya sering ditanya
1. Definisi masalah → 2. Analisa kebutuhan → 3. Desain algoritma → 4. Pemrograman (coding) → 5. Pengujian → 6. Dokumentasi → 7. Pemeliharaan

Jembatan keledai: **"De-An-De-Pe-Pe-Do-Pe"** (masalah dulu, kode belakangan).

### 3. Sejarah & ciri C++ (hal. 8–9)
| Tahun | Kejadian |
|-------|----------|
| 1972 | Brian W. Kernighan & Dennis M. Ritchie membuat **bahasa C** |
| 1983 | **Bjarne Stroustrup** (Bell Labs, AT&T) membuat **C++**; yang memberi nama: **Rick Mascitti** |

Ciri C++:
- Perluasan C + fasilitas **class** → mendukung **OOP**.
- Program = **kumpulan fungsi**; program utama juga fungsi, yaitu `main()`.
- **Case sensitive** (`Cout` ≠ `cout`).
- Bahasa **tingkat menengah** (dekat ke mesin → cepat), fondasi bahasa populer seperti Java, C#, Go.

### 4. Proses kompilasi (hal. 10)
**Intuisi**: seperti menerjemahkan buku bertahap — siapkan naskah, terjemahkan, cetak, lalu jilid dengan lampiran.

```
kode .cpp → Preprocessor → Compiler → Assembler → Linker → .exe
             (#include,     (ke bahasa   (kode     (gabung kode objek
              #define,       assembly)    objek)    + library)
              #ifdef)
```
- Preprocessor: memproses baris berawalan `#`.
- Kalau program tidak memakai fungsi dari library lain, kode objek bisa langsung jadi EXE; kalau memakai, **linker** yang menggabungkannya.

### 5. Struktur program C++ (hal. 11)
1. Deklarasi header / preprocessor — `#include <...>`
2. Deklarasi konstanta *(opsional)*
3. Deklarasi variabel global *(opsional)*
4. Deklarasi fungsi *(opsional; boleh diletakkan setelah `main()`)*
5. Deklarasi class *(opsional)*
6. **Program utama `main() { ... }` — wajib ada**, berisi instruksi + variabel lokal.

```cpp
#include <iostream>        // 1. header
using namespace std;

int main() {               // 6. program utama (wajib)
    int x, y, z;           // variabel lokal
    cout << "Masukkan bilangan kesatu: ";
    cin >> x;
    cout << "Masukkan bilangan kedua: ";
    cin >> y;
    z = x + y;             // proses
    cout << "Jadi hasil penjumlahannya adalah: " << z;
    return 0;
}
```

### 6. File header & tanda dasar (hal. 12–15)
| Header | Fungsi yang disediakan |
|--------|------------------------|
| `iostream` | `cin`, `cout` |
| `conio.h` | `getch()`, `clrscr()` (kuno, khusus Turbo C) |
| `iomanip` | `setiosflags(ios::fixed)`, `setprecision(n)` |
| `math.h` / `cmath` | `sqrt(x)`, `pow(x, y)` |

- Komentar: `// satu baris` atau `/* banyak baris */`
- `;` mengakhiri **setiap** pernyataan.
- Pindah baris: `\n` (di dalam petik) atau `endl` (di luar petik, bisa sebelum/sesudah teks).

## Istilah penting
| Istilah | Arti |
|---------|------|
| Preprocessor directive | Perintah berawalan `#` yang diproses sebelum kompilasi |
| Header file | File berisi fungsi siap pakai yang sudah dikompilasi, dipanggil dengan `#include` |
| Compiler | Menerjemahkan kode sumber ke bahasa assembly |
| Assembler | Mengubah assembly menjadi kode objek |
| Linker (link editor) | Menggabungkan kode objek dengan library menjadi `.exe` |
| `main()` | Fungsi utama, titik awal eksekusi program |
| Case sensitive | Huruf besar dan kecil dibedakan |
| OOP | *Object Oriented Programming*, pemrograman berbasis objek/class |
| IDE | Lembar kerja untuk menulis & menjalankan kode (slide menyebut IDE berbasis web) |

## Sering keluar di ujian / mudah keliru
- **Pencipta**: C = Kernighan & Ritchie (1972); C++ = **Stroustrup** (1983); **penamanya** Rick Mascitti — jangan tertukar.
- Kelebihan utama C++ dibanding C = **dukungan OOP (class)**.
- Satu-satunya bagian struktur yang **wajib** adalah `main()`; konstanta, variabel global, fungsi, class bersifat opsional.
- Urutan kompilasi: preprocessor → **compiler** → **assembler** → linker (compiler dulu, baru assembler).
- Slide memakai gaya lama (`iostream.h`, `main()` tanpa `int`). Di compiler modern pakai `#include <iostream>`, `using namespace std;`, `int main()` + `return 0;`.

## Pertanyaan untuk dicek ke dosen
- Slide menulis `#include <iomani.h>` — maksudnya `<iomanip>` (typo)?
- IDE berbasis web yang dimaksud di slide hal. 18 yang mana (OnlineGDB, Programiz, dll.)? Apakah ujian praktik memakai IDE tertentu?

## Sumber
- `AP1.01 - Introduction.pdf` hal. 2–19 (teks: `arsip/teks-materi/AP1.01 - Introduction.pdf.md`)
- Belum ada video/vicon untuk pertemuan ini.
