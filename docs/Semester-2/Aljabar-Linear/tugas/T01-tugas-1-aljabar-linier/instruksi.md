# T01 — Tugas 1 Aljabar Linier

- **Tenggat**: 2026-11-29 23:30 WIB (tidak ada perpanjangan)
- **Jenis**: Mandiri, individu — **kumpulkan dalam PDF** di menu "TUGAS 1" (Sesi #5)
- **Sumber**: post Edlink 9317994 + `../../materi/Tugas 1 - Aljabar Linier.docx`
- **Materi pendukung**: `PPT ALE 2.pdf` (vektor, dot product), `PPT ALE 3.pdf` (operasi matriks), `PPT ALE 4.pdf` (jenis matriks)

## Soal
**1.** Jika a = [-2, 3, 0] dan b = [3, -5, 2], tentukan:
a) a + b  b) 3a − 5b  c) a · b  d) |a + b|

**2.** Diketahui:
```
A = | 2  5  3 |   B = |  5  6 -3 |   C = | -4  2 |   D = | 3  7  3 |
    | 1 -4 -1 |       | -2  1  4 |       |  9  3 |       | 1  1  5 |
    | 8  3  2 |       |  2  2  7 |       | -2  5 |
   (3×3)              (3×3)              (3×2)             (2×3)
```
Tentukan: a) A + B  b) A · B  c) B · C  d) C · D  e) A · D

**3.** Buat masing-masing 3 contoh: matriks nol, matriks diagonal, matriks segitiga atas.

> Catatan: susunan matriks di atas direkonstruksi dari rumus Word di file .docx — cocokkan sekali lagi dengan file aslinya sebelum mengerjakan.

## Petunjuk (bukan jawaban)
- **No. 1** — operasi per komponen. `a·b = a1b1 + a2b2 + a3b3` hasilnya **skalar**. `|v| = √(v1² + v2² + v3²)`. Soal 1 identik dengan contoh di slide ALE 2 hal. terakhir.
- **No. 2** — sebelum mengalikan, **cek ordo dulu**: (p×q)·(m×n) hanya terdefinisi jika q = m, hasilnya p×n. Kalau tidak terdefinisi, tulis alasannya — itu juga jawaban.
  - Elemen baris i kolom j dari AB = baris i dari A "dot" kolom j dari B.
  - Perkalian matriks tidak komutatif (AB ≠ BA umumnya).
- **No. 3** — definisi di ALE 4: diagonal = bujursangkar, di luar diagonal utama 0; segitiga atas = semua elemen *di bawah* diagonal 0. Variasikan ordo (2×2, 3×3, 4×4) supaya contohnya tidak monoton. Matriks nol boleh non-bujursangkar.

## Checklist
- [ ] Kerjakan di kertas / Word / LaTeX, tulis langkah (bukan hanya hasil)
- [ ] Cek ulang tiap perkalian matriks (boleh verifikasi pakai kalkulator/NumPy, tapi tulis caranya sendiri)
- [ ] Header: nama, NIM, kelas IF102, matkul
- [ ] Export PDF → unggah di Edlink sebelum 2026-11-29 23:30
- [ ] Ubah status di `deadline.md`
