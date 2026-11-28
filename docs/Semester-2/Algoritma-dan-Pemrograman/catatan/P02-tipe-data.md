# P02 — Tipe Data, Variabel, Konstanta & Operator

Tanggal: 2026-10-29 · Sumber utama: [`AP1.02 - Tipe Data.pdf`](../materi/AP1.02%20-%20Tipe%20Data.pdf)

## Ringkasan 3 kalimat
Tipe data menentukan jenis nilai yang boleh disimpan, sedangkan variabel adalah tempat bernama yang menyimpan **satu** nilai dan isinya bisa berubah. Konstanta mirip variabel tetapi nilainya tetap, dibuat dengan `#define` atau `const`. C++ punya operator assign, aritmatika, majemuk, increment/decrement, relasional, logika, dan kondisional (`?:`) untuk mengolah nilai-nilai itu.

## Konsep kunci

### 1. Variabel
- **Intuisi**: kotak berlabel; satu kotak hanya untuk satu jenis barang dan satu barang sekaligus.
- **Format**: `tipe_data pengenal = nilai;` — tipe **harus** ditulis dulu.
```cpp
int a;            // deklarasi
int b = 10;       // deklarasi + inisialisasi
char s = 'a';
int x, y, z;      // banyak variabel bertipe sama sekaligus
```
Contoh penelusuran (hal. 4): `a=5; b=2; a=a+1; hasil=a-b;` → `hasil = 6 - 2 = 4`.

### 2. Konstanta (hal. 5)
| Cara | Contoh | Catatan |
|------|--------|---------|
| `#define` | `#define phi 3.14159265` | **tanpa `=`** dan **tanpa `;`**, tanpa tipe |
| `const` | `const int lebar = 100;` | pakai tipe; `const zip = 1212;` tanpa tipe → dianggap `int` (versi slide, compiler lama) |

### 3. Operator (hal. 6–10)
| Kelompok | Operator | Contoh → hasil |
|----------|----------|----------------|
| Assign | `=` | `a = 5` — **lvalue harus variabel**, rvalue boleh nilai/variabel/ekspresi |
| Aritmatika | `+ - * / %` | `11 % 3` → `2` (sisa bagi) |
| Majemuk | `+= -= *= /= %=` | `a += 5` ≡ `a = a + 5` |
| Increment/decrement | `++ --` | `a++` ≡ `a += 1` ≡ `a = a + 1` |
| Relasional | `== != > < >= <=` | `(7==5)` → false, `(5>4)` → true, `(5<5)` → false |
| Logika | `&& \|\| !` | `((5==5) && (3>6))` → false; `!(5==5)` → false |
| Kondisional | `kondisi ? h1 : h2` | `7==5 ? 4 : 3` → `3`; `5>3 ? a : b` → `a` |

Tabel kebenaran:

| A | B | A && B | A \|\| B |
|---|---|--------|---------|
| F | F | F | F |
| F | T | F | T |
| T | F | F | T |
| T | T | T | T |

### 4. Tipe data dasar (angka versi slide)
**Bilangan bulat** (hal. 11)

| Tipe | Byte | Jangkauan |
|------|------|-----------|
| `short` | 1 | −128 … 127 |
| `int` | 2 | −32.768 … 32.767 |
| `long` | 4 | ±2,1 miliar |
| `unsigned int` | 2 | 0 … 65.535 |
| `unsigned long` | 4 | 0 … ±4,29 miliar |

`unsigned` = hanya nilai positif (jangkauan positifnya jadi dua kali lipat).

**Bilangan pecahan / floating point** (hal. 13)

| Tipe | Byte | Jangkauan | Digit presisi |
|------|------|-----------|---------------|
| `float` | 4 | 3.4E−38 … 3.4E+38 | 5–7 |
| `double` | 8 | 1.7E−308 … 1.7E+308 | 15–16 |
| `long double` | 10 | 3.4E−4932 … 1.1E+4932 | 19 |

Notasi eksponen: `3.14E5` = 3,14 × 10⁵.

**Karakter & string** (hal. 15–16)
- `char` 1 byte (−128…127), `unsigned char` 0…255. Karakter = turunan integer (**kode ASCII**).
- String = gabungan karakter, diakhiri `'\0'`:
```cpp
char huruf = 'B';            // petik tunggal = 1 karakter
char kata[] = "Belajar";     // petik ganda = string
char jurusan[15] = "Informatika";
```
**Boolean** (hal. 18): `true` (1) / `false` (0).

### 5. Konversi tipe (casting)
```cpp
float a = 29.51;
int b = int(a);      // b = 29 (bagian desimal dipotong, bukan dibulatkan)
char c = 'A';
int k = (int) c;     // k = 65 (kode ASCII 'A')
```

## Istilah penting
| Istilah | Arti |
|---------|------|
| Tipe data | Jenis data berdasarkan isi dan sifatnya |
| Variabel | Tempat menyimpan satu nilai bertipe tertentu, isinya bisa berubah |
| Konstanta | Nilai yang ditetapkan sejak awal dan tidak berubah |
| Pengenal (identifier) | Nama variabel/konstanta |
| lvalue / rvalue | Sisi kiri (harus variabel) / sisi kanan (nilai) dari `=` |
| Modulus `%` | Sisa hasil bagi |
| Unsigned | Tipe tanpa tanda negatif |
| ASCII | Kode angka untuk tiap karakter (`'A'` = 65) |

## Sering keluar di ujian / mudah keliru
- `#define` **tidak pakai `=` dan `;`**; `const` pakai keduanya.
- `=` (assign) ≠ `==` (perbandingan).
- `int(29.51)` = **29** (dipotong).
- Ukuran tipe di slide adalah versi compiler 16-bit lama (`int` 2 byte). Di compiler modern `int` = 4 byte. **Kalau kuis bertanya ukuran, ikuti slide** (kuis P02 dapat 80 — cek lagi soal ukuran tipe).
- `'A'` (petik tunggal, char) vs `"A"` (petik ganda, string).
- `%` hanya untuk bilangan bulat.

## Pertanyaan untuk dicek ke dosen
- Ukuran tipe data di ujian mengikuti tabel slide (int = 2 byte) atau standar modern (int = 4 byte)?
- Slide menulis `unsigned long` sampai "4,294,967,595" dan `long` "2.147.435.647" — sepertinya salah ketik dari 4.294.967.295 dan 2.147.483.647.

## Sumber
- `AP1.02 - Tipe Data.pdf` hal. 2–19 (teks: `arsip/teks-materi/AP1.02 - Tipe Data.pdf.md`)
