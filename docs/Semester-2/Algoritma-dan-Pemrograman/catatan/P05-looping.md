# P05 — Looping (Perulangan)

Tanggal: 2026-11-19 · Sumber utama: [`AP05 - Modul PDF - Looping.pdf`](../materi/AP05%20-%20Modul%20PDF%20-%20Looping.pdf), pendukung `AP05 - Modul PPT - Looping.pdf` (slide 15–16 untuk do-while)

## Ringkasan 3 kalimat
*Looping* menjalankan sekelompok perintah berulang kali **selama kondisi benar**, sehingga kode lebih singkat, mudah diubah, dan mampu mengolah data banyak. Setiap loop punya tiga unsur: **inisialisasi, kondisi, perubahan**; lupa perubahan → *infinite loop*. Pilih `for` bila jumlah putaran pasti, `while` bila belum pasti, `do-while` bila isi loop harus jalan minimal sekali; `break` keluar dari loop, `continue` melompati satu putaran.

## Konsep kunci

### 1. Istilah dasar (modul hal. 2–3)
- **Iterasi** = satu kali putaran. **Badan loop** = perintah yang diulang (di dalam `{ }`).
- **Intuisi**: push-up 10 kali → ada *pekerjaan yang diulang* + *aturan kapan berhenti* (= kondisi).

| Unsur | Contoh | Fungsi |
|-------|--------|--------|
| Inisialisasi | `int i = 1;` | nilai awal penghitung |
| Kondisi | `i <= 5` | loop jalan selama benar |
| Perubahan | `i++` | mengubah penghitung tiap putaran |

### 2. `for` — jumlah putaran diketahui
```cpp
for (inisialisasi; kondisi; perubahan) { ... }
```
Urutan kerja: (1) inisialisasi **sekali** → (2) cek kondisi → (3) jalankan badan → (4) perubahan → kembali ke (2).
```cpp
int total = 0;                     // akumulator mulai dari 0
for (int i = 1; i <= 10; i++)
    total = total + i;             // 1+2+...+10 = 55
```
| putaran | i | total sebelum | total sesudah |
|---------|---|---------------|---------------|
| 1 | 1 | 0 | 1 |
| 2 | 2 | 1 | 3 |
| 3 | 3 | 3 | 6 |
| … | … | … | … |
| 10 | 10 | 45 | 55 |

### 3. `while` — jumlah putaran belum pasti
```cpp
inisialisasi;
while (kondisi) {
    ...
    perubahan;      // harus ditulis sendiri → rawan infinite loop
}
```
Kondisi dicek **di awal** → bila sejak awal salah, badan **tidak jalan sama sekali**.

**Sentinel** = nilai penanda berhenti (mis. 0):
```cpp
cin >> angka;                  // baca pertama SEBELUM loop
while (angka != 0) {
    total += angka; banyak++;
    cin >> angka;              // baca berikutnya di akhir badan
}
// input 10 20 5 0 → banyak = 3, total = 35 (0 tidak ikut dijumlah)
```

### 4. `do-while` — minimal sekali (slide 15–16)
```cpp
do {
    cout << "Masukkan nilai (0-100): ";
    cin >> nilai;
} while (nilai < 0 || nilai > 100);   // titik koma WAJIB
```
Kondisi dicek **di akhir** → walau kondisi sejak awal salah, isi tetap jalan 1 kali. Cocok untuk **menu** dan **validasi input**.

### 5. Perbandingan
| | `for` | `while` | `do-while` |
|-|-------|---------|------------|
| Jumlah putaran | sudah diketahui | belum pasti | belum pasti |
| Cek kondisi | di awal | di awal | **di akhir** |
| Minimal dijalankan | 0 kali | 0 kali | **1 kali** |
| Contoh | cetak 1–10 | baca data sampai 0 | validasi input, menu |

Ketiganya bisa saling menggantikan — pilih yang paling mudah dibaca.

### 6. `break` & `continue`
| Perintah | Efek |
|----------|------|
| `break` | keluar dari loop **sepenuhnya** |
| `continue` | lewati sisa putaran ini, lanjut ke putaran berikutnya |
```cpp
for (int i = 1; i <= 9; i++) {
    if (i % 2 == 0) continue;   // lewati genap
    cout << i << " ";           // 1 3 5 7 9
}
```

### 7. Nested loop (pengantar; detail di P06)
Total iterasi = putaran luar × putaran dalam (3 × 4 = 12).

### 8. Pola akumulator & faktorial
```cpp
long long faktorial = 1;          // mulai 1, BUKAN 0 (x*0 = 0)
for (int i = 1; i <= n; i++)
    faktorial *= i;               // 5! = 120; long long karena cepat besar
```
Kompleksitas semua contoh loop tunggal di atas: **O(n)**.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Looping / perulangan | Struktur yang mengulang perintah selama kondisi benar |
| Iterasi | Satu kali putaran loop |
| Badan loop | Blok perintah yang diulang |
| Penghitung (counter) | Variabel yang mengendalikan jumlah putaran |
| Akumulator | Variabel penampung hasil (mis. `total`) |
| Sentinel | Nilai penanda berhenti |
| Infinite loop | Loop tanpa akhir karena kondisi tak pernah salah |
| Off-by-one | Kurang/lebih satu putaran karena salah `<` / `<=` |

## Sering keluar di ujian / mudah keliru (modul hal. 8)
| Kesalahan | Contoh | Perbaikan |
|-----------|--------|-----------|
| Lupa ubah penghitung | `while (i <= 5) { cout << i; }` | tambah `i++` |
| Kondisi tak pernah salah | `for (int i = 1; i > 0; i++)` | perbaiki kondisi |
| Titik koma salah tempat | `for (...); { ... }` | hapus `;` → kalau tidak, badan loop kosong |
| Off-by-one | `i < 5` untuk 1–5 | `i <= 5` |
| Lupa `;` pada do-while | `} while (i <= 5)` | `} while (i <= 5);` |

- Loop yang memeriksa kondisi **setelah** badan = **do-while**.
- Akumulator penjumlahan mulai **0**, perkalian mulai **1**.
- Program macet karena infinite loop → **Ctrl+C**.

Kunci PG modul: 1B (looping), 2C (do-while), 3C (`1 2 3`), 4A (break), 5A (12 kali).

## Latihan cepat
```cpp
int s = 0;
for (int i = 1; i <= 5; i++) s = s + i;
cout << s;
```
<details><summary>Jawaban</summary>15</details>

## Pertanyaan untuk dicek ke dosen
- Contoh program 3 (do-while) tidak muncul di modul PDF, hanya di slide — apakah ada versi modul yang lengkap?

## Sumber
- `AP05 - Modul PDF - Looping.pdf` hal. 1–10 (teks: `arsip/teks-materi/AP05 - Modul PDF - Looping.pdf.md`)
- `AP05 - Modul PPT - Looping.pdf` slide 15–16 (do-while)
- Kuis Sesi #5 sudah dikerjakan (grade 100).
