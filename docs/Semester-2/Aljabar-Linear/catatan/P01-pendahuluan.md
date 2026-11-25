# P01 — Pendahuluan Aljabar Linear

Tanggal: 2026-10-23 · Sumber: `materi/PPT ALE 1.pdf`, RPS (`materi/RPS_ALJABAR LINIER_TI_UNSIA_AMRM (2).docx`)

## Ringkasan 3 kalimat
Pertemuan pertama memetakan isi semester menjadi empat bab: **vektor → matriks → sistem persamaan linear (SPL) → ruang vektor**. Bab matriks adalah yang terpanjang (7 bagian: dari pengertian sampai invers), dan menjadi alat utama untuk menyelesaikan SPL. Bagi Informatika, matriks = *array* 2D, dasar pengolahan citra, grafika, dan machine learning.

## Konsep kunci

### 1. Peta materi (slide 2–8)
| Bab | Isi |
|-----|-----|
| 1. Vektor | pengertian, operasi, vektor di ruang dimensi n |
| 2. Matriks | **B1** pengertian, kesamaan, operasi, transpose · **B2** jenis matriks, transformasi elementer, matriks ekivalen · **B3** transformasi elementer · **B4** matriks elementer, ruang baris/kolom, **rank** · **B5** determinan ordo 2 & 3, sifat, minor/kofaktor, **ekspansi Laplace**, matriks singular/non-singular · **B6** adjoin · **B7** invers |
| 3. SPL | bagan solusi berdasarkan rank & jumlah variabel, SPL **homogen**, SPL **nonhomogen** |
| 4. Ruang vektor | definisi, bebas linier vs bergantung linier, kombinasi linier, basis, dimensi |

### 2. Kaitan antarbab (intuisi)
```
vektor  ──(disusun berjajar)──▶ matriks ──(transformasi elementer, rank,
                                            determinan, invers)──▶ solusi SPL
                                                                       │
                                     ruang vektor ◀──(generalisasi)────┘
```
Hampir semua alat di bab matriks (transformasi elementer, rank, invers) ujungnya dipakai untuk **menyelesaikan SPL**.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Vektor | Besaran yang punya besar dan arah |
| Matriks | Susunan bilangan dalam baris dan kolom |
| SPL | Sistem persamaan linear (beberapa persamaan linear sekaligus) |
| Rank | Banyaknya baris/kolom yang bebas linier dalam matriks |
| Determinan | Nilai skalar dari matriks bujursangkar; 0 → matriks singular |
| Ruang vektor | Himpunan vektor yang tertutup terhadap penjumlahan & perkalian skalar |

## Sering keluar di ujian / mudah keliru
- UTS (perkiraan 2026-12-11) kemungkinan mencakup vektor, operasi matriks, jenis matriks, transformasi elementer, dan mungkin rank/determinan (P06–P07).
- Slide hal. 6 menulis "SPL: Bagian 6 Adjoin, Bagian 7 Invers" — itu salin-tempel dari bab matriks; isi SPL yang benar ada di hal. 7.

## Pertanyaan untuk dicek ke dosen
- Materi P06–P07 (sebelum UTS) sampai mana: rank saja atau sudah determinan?

## Sumber
- `PPT ALE 1.pdf` hal. 1–9 (teks: `arsip/teks-materi/PPT ALE 1.pdf.md`)
- Vicon P01 tidak ada rekamannya di Edlink.
