# P04 — Jenis-Jenis Matriks

Tanggal: 2026-11-13 · Sumber: [`PPT ALE 4.pdf`](../materi/PPT%20ALE%204.pdf), video "Jenis Matriks" (Bu Ira, ±6 menit)

## Ringkasan 3 kalimat
Matriks diberi nama berdasarkan **bentuk** (bujursangkar) dan **pola nol** pada elemennya (nol, diagonal, segitiga atas/bawah). Turunan matriks diagonal dibedakan dari isi diagonalnya: semua 1 → **identitas**, semua sama (bukan 0/1) → **skalar**. Matriks **simetris** adalah matriks bujursangkar yang transposenya sama dengan dirinya sendiri (Aᵀ = A).

## Konsep kunci

### 1. Diagonal utama
Pada matriks bujursangkar n × n, elemen a₁₁, a₂₂, …, aₙₙ disebut **diagonal utama** (dari kiri atas ke kanan bawah). Matriks bujursangkar n × n disebut berordo **n**.

### 2. Tabel jenis matriks
| Jenis | Syarat | Contoh |
|-------|--------|--------|
| **Nol** | semua elemen 0 (boleh tidak bujursangkar) | `[[0,0],[0,0]]` |
| **Bujursangkar** | jumlah baris = jumlah kolom | `[[1,4],[2,3]]` |
| **Diagonal** | bujursangkar, semua elemen **di luar** diagonal utama = 0 | `diag(2, 5, 3)` |
| **Identitas / satuan (I)** | diagonal, semua elemen diagonal = **1** | `diag(1, 1, 1)` |
| **Skalar** | diagonal, elemen diagonal **sama** (bukan 0/1) | `diag(4, 4, 4)` |
| **Segitiga atas** | bujursangkar, semua elemen **di bawah** diagonal = 0 | `[[3,2,1],[0,4,5],[0,0,4]]` |
| **Segitiga bawah** | bujursangkar, semua elemen **di atas** diagonal = 0 | `[[3,0,0],[1,4,0],[6,9,4]]` |
| **Simetris** | bujursangkar, **Aᵀ = A** (aᵢⱼ = aⱼᵢ) | `[[1,2,0],[2,3,1],[0,1,1]]` |
| **Transpose** | Aᵀ (n × m): baris ke-i → kolom ke-i | — |

### 3. Hubungan antarjenis (intuisi "himpunan bersarang")
```
bujursangkar ⊃ segitiga atas/bawah ⊃ diagonal ⊃ skalar
                                       diagonal ⊃ identitas
```
- Matriks diagonal **sekaligus** segitiga atas dan segitiga bawah.
- Identitas dan skalar **sekaligus** diagonal, dan juga simetris.

### 4. Sifat penting
- Nol: A + 0 = A (ordo sama), A·0 = 0·A = 0.
- Identitas: **A·I = I·A = A** (peran seperti angka 1 pada perkalian bilangan).
- Simetris: cerminan terhadap diagonal utama → cek aᵢⱼ = aⱼᵢ.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Diagonal utama | Elemen a₁₁, a₂₂, …, aₙₙ |
| Ordo n | Ukuran matriks bujursangkar n × n |
| Upper triangular | Segitiga atas |
| Lower triangular | Segitiga bawah |
| Identity matrix (I) | Matriks satuan |

## Sering keluar di ujian / mudah keliru
- **Segitiga atas** = nol-nya ada **di bawah** diagonal (yang "terisi" bagian atas). Jangan terbalik.
- Matriks nol **tidak harus** bujursangkar; diagonal, identitas, skalar, segitiga, simetris **harus** bujursangkar.
- Matriks skalar vs identitas: skalar → diagonal sama tapi **bukan 1**; identitas → semua 1.
- Diagonal boleh punya elemen diagonal 0? Menurut definisi slide, syaratnya hanya elemen di luar diagonal = 0 (video menyebut diagonal "bukan 0"). Kalau ditanya, pakai contoh dengan diagonal tak-nol supaya aman.
- Tugas 1 no. 3 meminta 3 contoh matriks nol, diagonal, segitiga atas — variasikan ordo (2×2, 3×3, 4×4, juga nol non-bujursangkar).

## Pertanyaan untuk dicek ke dosen
- Apakah matriks diagonal dengan sebagian elemen diagonal 0 (mis. diag(2, 0, 3)) tetap dihitung matriks diagonal?

## Sumber
- `PPT ALE 4.pdf` hal. 3–11 (teks: `arsip/teks-materi/PPT ALE 4.pdf.md`)
- Transkrip video `arsip/transkrip/9163780-Jenis-Matriks.md`
