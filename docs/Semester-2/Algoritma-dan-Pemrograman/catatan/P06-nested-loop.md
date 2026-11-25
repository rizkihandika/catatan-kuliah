# P06 — Nested Loop (Loop Bersarang)

Tanggal: 2026-11-26 · Sumber utama: [`AP06 - Nested Loop - PDF.pdf`](../materi/AP06%20-%20Nested%20Loop%20-%20PDF.pdf)

## Ringkasan 3 kalimat
*Nested loop* adalah loop di dalam badan loop lain: **setiap satu langkah loop luar, loop dalam berjalan penuh** sampai selesai. Loop luar biasanya mengatur **baris**, loop dalam mengatur **kolom**, dan total iterasi = putaran luar × putaran dalam. Bentuk pola (persegi, segitiga, piramida, tabel perkalian) ditentukan oleh **batas loop dalam**, apa yang dicetak, dan letak `endl`.

## Konsep kunci

### 1. Intuisi: jam dinding (hal. 4)
Jarum jam bergeser 1 langkah (loop luar) → jarum menit berputar penuh 60 kali (loop dalam). Data dunia nyata berbentuk baris × kolom: kursi bioskop, tabel nilai, piksel gambar.

### 2. Cara kerja
```cpp
for (int i = 1; i <= 3; i++)        // loop luar
    for (int j = 1; j <= 2; j++)    // loop dalam
        cout << i << "," << j << " ";
// 1,1 1,2 2,1 2,2 3,1 3,2
```
| putaran | i | j | tampil |
|---------|---|---|--------|
| 1 | 1 | 1 | 1,1 |
| 2 | 1 | 2 | 1,2 (j habis, i naik) |
| 3 | 2 | 1 | 2,1 |
| 4 | 2 | 2 | 2,2 |
| 5 | 3 | 1 | 3,1 |
| 6 | 3 | 2 | 3,2 (selesai) |

### 3. Menghitung jumlah iterasi (hal. 5)
| Kasus | Hitungan | Total |
|-------|----------|-------|
| Persegi 4 × 6 | 4 × 6 | 24 |
| Segitiga n = 5 | 1+2+3+4+5 | 15 = n(n+1)/2 |
| 3 loop × 10 | 10 × 10 × 10 | 1.000 |

Kompleksitas: dua loop bersarang ukuran n → **O(n²)**; tiga → **O(n³)**. Makin dalam, makin lambat.

### 4. Pola-pola (hal. 6–10)
| Pola | Loop luar | Batas loop dalam | Dicetak |
|------|-----------|------------------|---------|
| Persegi | `i = 1..3` | `j <= 5` (tetap) | `"* "` |
| Segitiga siku-siku | `i = 1..5` | **`j <= i`** | `"* "` |
| Segitiga terbalik | `i = 5..1` (turun, `i--`) | `j <= i` | `"* "` |
| Segitiga angka A | `i = 1..4` | `j <= i` | `j` → 1 / 1 2 / 1 2 3 |
| Segitiga angka B | `i = 1..4` | `j <= i` | `i` → 1 / 2 2 / 3 3 3 |
| Piramida | `i = 1..n` | spasi `s <= n - i`, bintang `j <= 2*i - 1` | `" "` lalu `"*"` |
| Tabel perkalian | `i = 1..5` | `j <= 5` | `i * j << "\t"` |

```cpp
// Piramida tinggi 4: dua loop dalam di bawah satu loop luar
for (int i = 1; i <= 4; i++) {
    for (int s = 1; s <= 4 - i; s++) cout << " ";    // spasi: 3,2,1,0
    for (int j = 1; j <= 2*i - 1; j++) cout << "*";   // bintang: 1,3,5,7
    cout << endl;                                     // pindah baris SETELAH loop dalam
}
```

### 5. Letak `endl` (hal. 7)
| Letak | Hasil |
|-------|-------|
| Di dalam loop dalam | semua bintang ke bawah (15 baris) ✗ |
| **Setelah loop dalam** | persegi 3 × 5 ✓ |
| Setelah semua loop | satu baris panjang ✗ |

### 6. `break`/`continue` di nested loop (hal. 11)
Hanya berlaku untuk **loop terdalam** yang sedang berjalan; loop luar tetap jalan.
```cpp
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 5; j++) {
        if (j == 3) break;      // hanya keluar dari loop j
        cout << j << " ";
    }
    cout << endl;
}
// 1 2  (3 baris)
```

## Istilah penting
| Istilah | Arti |
|---------|------|
| Nested loop | Loop di dalam badan loop lain |
| Loop luar | Mengatur baris / putaran besar (biasanya `i`) |
| Loop dalam | Berjalan penuh tiap kali loop luar berganti (biasanya `j`) |
| `\t` | Karakter tab, merapikan kolom |
| Menelusuri (tracing) | Mencatat nilai i dan j langkah demi langkah di kertas |

## Sering keluar di ujian / mudah keliru (hal. 11)
| Kesalahan | Akibat | Perbaikan |
|-----------|--------|-----------|
| Variabel sama di kedua loop | loop dalam merusak `i` milik loop luar | `i` luar, `j` dalam |
| `endl` di dalam loop dalam | bintang jadi satu kolom | `endl` setelah loop dalam |
| Batas dalam tetap `j <= 5` | jadi persegi, bukan segitiga | `j <= i` |
| Salah `<` vs `<=` | kurang/lebih satu putaran | telusuri dengan ukuran kecil |
| Lupa `{ }` | hanya satu perintah ikut loop | beri kurung kurawal |

- Soal hitung iterasi: luar 10 × dalam 10 = **100**.
- Bedakan cetak `i` vs `j` pada segitiga angka.

## Latihan cepat (tebak output, hal. 12)
```cpp
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) cout << i;
    cout << endl;
}
```
<details><summary>Jawaban</summary>

```
1
22
333
```
</details>

## Pertanyaan untuk dicek ke dosen
- Apakah soal UTS akan meminta menulis pola (piramida/belah ketupat) dari nol, atau cukup menebak output?

## Sumber
- `AP06 - Nested Loop - PDF.pdf` hal. 1–13 (teks: `arsip/teks-materi/AP06 - Nested Loop - PDF.pdf.md`)
- Slide `AP06 - Nested Loop - PPT.pdf` belum dibandingkan per slide (isi sejalan dengan modul).
