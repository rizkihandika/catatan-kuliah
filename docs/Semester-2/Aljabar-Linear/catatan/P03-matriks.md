# P03 — Matriks (Pengertian, Transpose, Operasi)

Tanggal: 2026-11-06 · Sumber: [`PPT ALE 3.pdf`](../materi/PPT%20ALE%203.pdf)

## Ringkasan 3 kalimat
Matriks adalah susunan elemen dalam **baris dan kolom** (data 2 dimensi), ditulis A = (aᵢⱼ) berordo m × n. Penjumlahan/pengurangan hanya untuk ordo **sama** (elemen per elemen), perkalian skalar mengalikan setiap elemen, dan perkalian dua matriks A(p×q)·B(m×n) hanya terdefinisi bila **q = m** dengan hasil p×n. Perkalian matriks **tidak komutatif** (AB ≠ BA), dan transpose memenuhi (AB)ᵀ = BᵀAᵀ.

## Konsep kunci

### 1. Pengertian & notasi (slide 2–5)
- **Intuisi**: tabel angka, atau *array* 2D di pemrograman (`int A[m][n]`).
- A = (aᵢⱼ)ₘₓₙ: **m baris, n kolom**; aᵢⱼ = elemen baris i, kolom j.
- Disebut juga: entri / unsur / elemen.
- **Kesamaan**: A = B jika ordo sama **dan** aᵢⱼ = bᵢⱼ untuk setiap i, j.

### 2. Transpose (slide 6)
Aᵀ (n × m): baris ke-i dari A menjadi kolom ke-i dari Aᵀ.
```
A = | 1  2  3 |      Aᵀ = | 1  4 |
    | 4  5  6 |           | 2  5 |
     (2×3)                | 3  6 |   (3×2)
```
Sifat: (A + B)ᵀ = Aᵀ + Bᵀ · (Aᵀ)ᵀ = A · k(Aᵀ) = (kA)ᵀ · **(AB)ᵀ = BᵀAᵀ** (urutannya terbalik!)

### 3. Penjumlahan, pengurangan, skalar (slide 7–9)
- Syarat jumlah/kurang: **ordo sama**; operasikan elemen yang posisinya sama.
- Skalar: k·A → setiap elemen dikali k. Contoh slide: 5·[[2, 3],[4, 5]] dengan tanda negatif → semua elemen dikali 5.

### 4. Perkalian matriks × matriks (slide 10–11)
- **Syarat**: A(p×**q**) · B(**m**×n) → **q = m** (kolom A = baris B). Hasil: **p × n**.
- Jembatan keledai: tulis ordo berjajar `(p×q)(q×n)` — angka **tengah** harus sama, angka **luar** jadi ordo hasil.
- Elemen (i, j) hasil = **baris i dari A** "dot" **kolom j dari B**.

Contoh dikerjakan (bukan soal tugas):
```
A = |  1  0  2 |   (2×3)      B = | 3  1 |   (3×2)
    | -1  3  1 |                  | 2  1 |
                                  | 1  0 |
AB (2×2):
c11 = 1·3 + 0·2 + 2·1   = 5      c12 = 1·1 + 0·1 + 2·0   = 1
c21 = -1·3 + 3·2 + 1·1  = 4      c22 = -1·1 + 3·1 + 1·0  = 2
AB = | 5  1 |
     | 4  2 |
```
BA juga terdefinisi (3×2 · 2×3 → **3×3**) — ordonya saja sudah beda dari AB.

### 5. Hukum perkalian (slide 12)
| Hukum | Berlaku? |
|-------|----------|
| Distributif A(B + C) = AB + AC | ✓ |
| Asosiatif A(BC) = (AB)C | ✓ |
| Komutatif AB = BA | ✗ (umumnya tidak) |
| AB = 0 ⇒ A = 0 atau B = 0 | ✗ (bisa keduanya ≠ 0) |
| AB = AC ⇒ B = C | ✗ (belum tentu) |

Bukti AB ≠ BA:
```
A = |1 2|  B = |0 1|   AB = |2 1|   BA = |3 4|
    |3 4|      |1 0|        |4 3|        |1 2|
```

## Istilah penting
| Istilah | Arti |
|---------|------|
| Ordo | Ukuran matriks, m × n (baris × kolom) |
| Elemen aᵢⱼ | Isi matriks di baris i, kolom j |
| Transpose Aᵀ | Matriks hasil menukar baris menjadi kolom |
| Skalar | Bilangan tunggal pengali matriks |
| Komutatif | Urutan operasi bisa ditukar tanpa mengubah hasil |

## Sering keluar di ujian / mudah keliru
- **Cek ordo dulu** sebelum mengalikan. Kalau tidak terdefinisi, tulis alasannya (itu juga jawaban).
- Ordo hasil = baris matriks kiri × kolom matriks kanan.
- (AB)ᵀ = **Bᵀ Aᵀ**, bukan AᵀBᵀ.
- Penjumlahan matriks beda ordo → tidak terdefinisi.
- Paling sering salah: tanda minus saat menjumlahkan hasil kali baris × kolom — tulis tiap suku.

## Pertanyaan untuk dicek ke dosen
- Video YouTube di post P03 ("video pembelajaran tentang matriks") ternyata berisi **ICT Literacy Sesi 3** — apakah ada link video matriks yang benar?

## Sumber
- `PPT ALE 3.pdf` hal. 2–12 (teks: `arsip/teks-materi/PPT ALE 3.pdf.md`)
- Transkrip `arsip/transkrip/9060300-Materi-Sesi-3-1.md` = video ICT Literacy (salah link), tidak dipakai.
- Dipakai di Tugas 1 no. 2 (lihat `tugas/T01-tugas-1-aljabar-linier/`).
