# Ringkasan Matkul — Algoritma dan Pemrograman (P01–P06)

> Dosen: Yunan Fauzi Wijaya · Bahasa: **C++** · Arsip lengkap: [../arsip/README.md](../arsip/README.md) · Teks materi: ../arsip/teks-materi/ *(ada di Edlink)*
> Belum ada vicon/video di kelas ini — semua dari modul PDF + PPT. Kuis P01–P05 sudah dikerjakan.

## Peta besar
Program = **input → proses → output**. Sesi 1–3 membangun "bahan" (struktur program, tipe data, I/O), sesi 4–6 menambah **struktur kendali**: *sequence* → *selection* (condition) → *loop* (looping, nested loop). Setelah UTS: fungsi, rekursi, array, string, pointer, struct, OOP (RPS).

---

## P01 — Introduction Programming
Sumber: `AP1.01 - Introduction.pdf`

- **Program** = deretan instruksi untuk mengendalikan komputer. **Algoritma** = langkah menyelesaikan masalah. **Pemrograman terstruktur** = kode diorganisasi agar mudah dibaca, dites, dimodifikasi.
- **Tahapan membuat program**: definisi masalah → analisa kebutuhan → desain algoritma → pemrograman → pengujian → dokumentasi → pemeliharaan.
- **Sejarah**: C dibuat 1972 (Kernighan & Ritchie); C++ dibuat 1983 oleh Bjarne Stroustrup (Bell Labs), namanya dari Rick Mascitti. C++ = C + **class** → mendukung OOP. Bahasa tingkat menengah, **case sensitive**, program = kumpulan fungsi (termasuk `main()`).
- **Proses kompilasi**: kode → *preprocessor* (`#include`, `#define`) → *compiler* (ke assembly) → *assembler* (kode objek) → *linker* (gabung library → `.exe`).
- **Struktur program**: header/preprocessor → konstanta → variabel global → deklarasi fungsi → class → `main()` (wajib).
- Header penting: `<iostream>` (cin/cout), `<cmath>` (`sqrt`, `pow`), `<iomanip>` (`setprecision`). `;` mengakhiri pernyataan; komentar `//` atau `/* */`.

## P02 — Tipe Data
Sumber: `AP1.02 - Tipe Data.pdf`

- **Intuisi**: tipe data = "kotak khusus" untuk satu jenis barang. Variabel = kotak bernama yang isinya bisa berubah (1 nilai saja). Konstanta = kotak yang isinya dikunci.
- Deklarasi: `tipe nama = nilai;` — `int a, b, c;`
- Konstanta: `#define PHI 3.14159` (tanpa `=` dan `;`) atau `const int LEBAR = 100;`
- **Tipe dasar** (versi slide, compiler lama): `short` 1B, `int` 2B, `long` 4B, `float` 4B (5–7 digit), `double` 8B (15–16 digit), `long double` 10B, `char` 1B (kode ASCII), `bool` (true/false). *Di compiler modern `int` = 4 byte* — kalau ditanya di kuis, ikuti angka di slide.
- **Operator**: assign `=` (lvalue harus variabel), aritmatika `+ - * / %` (`11 % 3 = 2`), majemuk `+= -= *= /= %=`, increment `++ --`, relasional `== != > < >= <=` (hasil bool), logika `&& || !`, kondisional `kondisi ? a : b` (`7==5 ? 4 : 3` → 3).
- Casting: `int(29.51)` → 29; `(int)'A'` → 65.

## P03 — Input dan Output
Sumber: `AP1.03 - Input & Output.pdf`, `AP.03 - Modul Input & Output.pdf`

- Input = data masuk ke RAM; output = data keluar dari RAM. I/O di C++ diperlakukan sebagai **stream** (aliran karakter, seperti air di pipa).
- 4 stream standar (`<iostream>`): `cin` (input), `cout` (output), `cerr` (error), `clog` (log).
- `cout << data;` — `<<` = *insertion operator*; `cin >> var;` — `>>` = *extraction operator*. Bisa dirangkai: `cin >> a >> b;`
- Baris baru: `\n` (di dalam petik, bisa di tengah teks) atau `endl` (di luar petik).
- Pola program interaktif: **tampilkan petunjuk (cout) → baca (cin) → proses → tampilkan hasil (cout)**.
- `cin >> nama` berhenti di spasi pertama → pakai `getline(cin, nama)` untuk satu baris penuh.
- **Tukar nilai** butuh variabel bantu:
```cpp
temp = A;  // simpan A
A = B;     // A dapat isi B
B = temp;  // B dapat isi A lama
```
- Kesalahan umum: lupa `;`, arah `<<`/`>>` terbalik, teks tanpa petik, variabel belum dideklarasi, `Cout` (huruf besar), gaya lama `iostream.h`/`void main()`.

## P04 — Condition (Percabangan)
Sumber: `AP.04 - Modul PPT - Condition.pdf`, `AP.04 - Modul PDF - Condition.pdf`

- **Intuisi**: "Jika hujan, bawa payung." Program memilih jalur berdasarkan kondisi benar/salah (*selection*).
- **5 bentuk**: `if`, `if-else`, `else if` (rentang nilai), *nested if* (syarat bertingkat), `switch-case` (satu variabel, nilai tetap).
- Prioritas logika: `!` → `&&` → `||`. **`=` memberi nilai, `==` membandingkan.**
- **Urutan `else if` dari batas tertinggi** — kalau terbalik, cabang atas "menelan" nilai besar.
```cpp
if (nilai >= 85)      grade = 'A';
else if (nilai >= 70) grade = 'B';   // hanya dicek bila < 85
else                  grade = 'C';
```
- **Tahun kabisat**: `(t % 4 == 0 && t % 100 != 0) || t % 400 == 0` → 1900 bukan, 2000 kabisat.
- **switch**: `case` hanya nilai tetap (angka/char), wajib `break` (tanpa `break` → *fall-through* ke case berikutnya), `default` = cadangan. Rentang (≥60) → pakai `if`.
- Kesalahan umum: `if (x = 60)`, `if (x > 5);` (titik koma), urutan `else if` terbalik, lupa `break`.
- Contoh dari slide: kelulusan (≥60), diskon bertingkat (250000 → diskon 10% → bayar 225000), jenis segitiga (cek valid dulu → sama sisi/kaki/sembarang), menu kantin (switch).

## P05 — Looping (Perulangan)
Sumber: `AP05 - Modul PPT - Looping.pdf`, `AP05 - Modul PDF - Looping.pdf`

- **Intuisi**: push-up 10 kali — pekerjaan diulang + aturan kapan berhenti. Satu putaran = **iterasi**.
- **Tiga unsur**: inisialisasi (`int i = 1`), kondisi (`i <= 5`), perubahan (`i++`). Lupa perubahan → *infinite loop*.

| | `for` | `while` | `do-while` |
|---|---|---|---|
| Kapan | jumlah putaran diketahui | belum pasti (mis. sentinel) | minimal jalan 1× (menu, validasi) |
| Cek kondisi | awal | awal | **akhir** (`} while (...);` wajib `;`) |
| Minimal jalan | 0× | 0× | 1× |

```cpp
// Jumlah 1..10 — O(n)
int total = 0;
for (int i = 1; i <= 10; i++) total += i;   // 55

// Validasi input dengan do-while
do { cin >> nilai; } while (nilai < 0 || nilai > 100);
```
- `break` = keluar loop; `continue` = lewati sisa putaran ini.
- Faktorial: mulai `long long f = 1`, kalikan `i = 1..n` → `5! = 120`.
- Kesalahan umum: lupa `i++`, kondisi tak pernah salah, `for(...);`, *off-by-one* (`<` vs `<=`), lupa `;` setelah `do-while`.

## P06 — Nested Loop
Sumber: `AP06 - Nested Loop - PPT.pdf`, `AP06 - Nested Loop - PDF.pdf`

- **Intuisi**: jam dinding — jarum jam maju 1 (loop luar), jarum menit berputar penuh (loop dalam). Loop luar = **baris**, loop dalam = **kolom**.
- Total iterasi = luar × dalam → nested 2 tingkat dengan n×n = **O(n²)**; 3 tingkat 10×10×10 = 1000.
```cpp
for (int i = 1; i <= n; i++) {          // baris
    for (int j = 1; j <= i; j++)        // kolom: j <= i → segitiga
        cout << "* ";
    cout << endl;                        // endl SETELAH loop dalam
}
```
- Variasi pola: persegi (`j <= 5`), segitiga terbalik (`i` dari 5 turun `i--`), segitiga angka (cetak `j` → 1 12 123; cetak `i` → 1 22 333), piramida (spasi `n - i`, bintang `2i - 1`), tabel perkalian (`i * j` + `\t`).
- `break`/`continue` hanya berlaku untuk **loop terdalam**.
- Kesalahan umum: variabel sama di dua loop, `endl` di loop dalam, batas dalam tetap padahal mau segitiga, lupa `{ }`.

---

## Yang perlu diingat untuk UTS
1. Struktur program C++ & proses kompilasi (preprocessor → compiler → assembler → linker).
2. Tabel tipe data (ukuran byte & jangkauan versi slide) dan operator (termasuk `%`, `?:`, prioritas logika).
3. `cin`/`cout`, `\n` vs `endl`, kesalahan umum sintaks.
4. Kapan `if/else if/switch`; urutan `else if`; `break` di switch.
5. Kapan `for/while/do-while`; tracing output loop & nested loop (hitung jumlah iterasi).
