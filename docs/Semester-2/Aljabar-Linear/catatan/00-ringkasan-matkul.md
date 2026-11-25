# Ringkasan Matkul — Aljabar Linear (P01–P05)

> Dosen: Ir. Endah Tri Esti Handayani (slide disusun oleh Fesa A. S. N. Haq, video oleh Bu Ira) · Arsip: [../arsip/README.md](../arsip/README.md) · Transkrip video: [../arsip/transkrip/](../arsip/transkrip/README.md) · Teks slide: ../arsip/teks-materi/ *(ada di Edlink)*
> **Tugas 1** (vektor & matriks) tenggat **2026-11-29 23:30**, status: **belum dikumpulkan**. Lihat [../tugas/T01-tugas-1-aljabar-linier/instruksi.md](../tugas/T01-tugas-1-aljabar-linier/instruksi.md).
> ⚠️ Link YouTube di post P03 ("video pembelajaran tentang matriks") ternyata berisi video **ICT Literacy Sesi 3** (Penerapan TIK di berbagai sektor), jadi salah link dari dosen. Vicon P01–P04 tidak ada rekamannya di Edlink; hanya vicon P05 yang terekam dan sudah ditranskrip.

## Peta besar
Urutan semester (RPS/ALE 1): **vektor → matriks → sistem persamaan linear (SPL) → ruang vektor**.
- **Bab matriks** dibagi 7 bagian: pengertian & operasi → jenis → transformasi elementer → matriks elementer & rank → determinan (Laplace, minor/kofaktor) → adjoin → invers.
- **Bab SPL**: bagan solusi berdasarkan rank, SPL homogen, dan SPL nonhomogen.
- **Bab ruang vektor**: bebas/bergantung linier, kombinasi linier, basis, dimensi.

Kenapa penting di Informatika? Kata dosen di vicon P05, matriks itu **array data 2D**. Pengolahan citra/*computer vision* pada dasarnya memanipulasi matriks.

---

## P01 — Pendahuluan
Sumber: `PPT ALE 1.pdf`, RPS `.docx`. Peta isi semester dan daftar referensi (Kusumawati 2014, Andari 2017, Wijayanti dkk. 2018, …). Vicon pertama: 2026-10-23 malam.

## P02 — Vektor di Ruang Dimensi n
Sumber: `PPT ALE 2.pdf`

- **Intuisi**: vektor = panah. Punya **besar (panjang)** dan **arah**. Notasi u = AB (dari A ke B).
- **Bentuk komponen**: u = (a, b) = a**i** + b**j**. Panjangnya |u| = √(a² + b²). Di R³: |u| = √(a² + b² + c²).
- **Kesamaan**: u = v ⇔ besar & arah sama ⇔ komponennya sama.
- **Operasi**:
  - Penjumlahan (aturan segitiga/jajaran genjang): (a, b) + (c, d) = (a+c, b+d).
  - Pengurangan: u − v = u + (−v).
  - Perkalian skalar: m·u = (ma, mb). Arahnya searah kalau m > 0, berlawanan kalau m < 0.
- **Sifat**: komutatif, asosiatif, ada identitas 0, tertutup, **ketidaksamaan segitiga** |u + v| ≤ |u| + |v|, |mu| = |m||u|, distributif.
- **Dot product** (hasilnya **skalar**):
  - a·b = |a||b| cos γ = a₁b₁ + a₂b₂ + a₃b₃.
  - a·b > 0 → sudut lancip.
  - a·b = 0 → **ortogonal** (tegak lurus, 90°).
  - a·b < 0 → sudut tumpul.
  - Sudut antara dua vektor: cos γ = (a·b) / (|a||b|).
- **Contoh slide** (sama dengan soal Tugas 1 no. 1): a = [−2, 3, 0], b = [3, −5, 2] → hitung a+b, 3a−5b, a·b, |a+b|, |3a−5b|.

## P03 — Matriks (pengertian & operasi)
Sumber: `PPT ALE 3.pdf`

- **Matriks** = susunan elemen dalam baris & kolom (array 2D). A = (aᵢⱼ) berordo **m × n** (m baris, n kolom). aᵢⱼ = elemen di baris i, kolom j.
- **Kesamaan**: A = B jika ordonya sama dan aᵢⱼ = bᵢⱼ untuk semua i, j.
- **Transpose** Aᵀ (n × m): baris ke-i dari A menjadi kolom ke-i. Sifat-sifatnya: (A+B)ᵀ = Aᵀ+Bᵀ, (Aᵀ)ᵀ = A, k·Aᵀ = (kA)ᵀ, **(AB)ᵀ = BᵀAᵀ**.
- **Penjumlahan/pengurangan**: hanya untuk ordo yang **sama**, dihitung elemen per elemen.
- **Skalar × matriks**: kalikan setiap elemen dengan k.
- **Matriks × matriks**:
  - A(p×q) · B(m×n) hanya terdefinisi kalau **q = m**, hasilnya **p×n**.
  - Elemen (i, j) hasil = baris i dari A *dot* kolom j dari B.
  ```
  [a b] [p q]   [ap+br  aq+bs]
  [c d]·[r s] = [cp+dr  cq+ds]
  ```
- **Hukum perkalian**:
  - Distributif: A(B+C) = AB + AC.
  - Asosiatif: A(BC) = (AB)C.
  - **Tidak komutatif**: AB ≠ BA (umumnya).
  - AB = 0 tidak berarti A = 0 atau B = 0.
  - AB = AC tidak berarti B = C.

## P04 — Jenis Matriks
Sumber: `PPT ALE 4.pdf`, video "Jenis Matriks" (6 menit)

| Jenis | Syarat | Catatan |
|---|---|---|
| Nol | semua elemen 0 | A + 0 = A, A·0 = 0·A = 0. Boleh tidak bujursangkar |
| Bujursangkar | baris = kolom (ordo n) | diagonal utama a₁₁, a₂₂, …, aₙₙ |
| Diagonal | bujursangkar, di luar diagonal utama = 0 | |
| Identitas (I) | diagonal, semua elemen diagonal = 1 | A·I = I·A = A |
| Skalar | diagonal, elemen diagonal sama (bukan 0/1) | mis. diag(5, 5, 5) |
| Segitiga atas | bujursangkar, semua elemen **di bawah** diagonal = 0 | |
| Segitiga bawah | bujursangkar, semua elemen **di atas** diagonal = 0 | |
| Simetris | bujursangkar, **Aᵀ = A** (aᵢⱼ = aⱼᵢ) | |
| Transpose | Aᵀ berordo n × m | baris ↔ kolom |

## P05 — Transformasi Elementer
Sumber: `PPT ALE 5.pdf`, video "Transformasi Elementer" (11 menit), **rekaman vicon 2026-11-22** (15 menit)

- **Intuisi**: "operasi yang boleh dilakukan" pada baris/kolom matriks. Nanti dipakai untuk mencari rank, invers, dan menyelesaikan SPL (eliminasi). Notasi **B** = operasi baris, **K** = operasi kolom.

| # | Operasi | Notasi | Yang berubah |
|---|---|---|---|
| 1 | Tukar baris/kolom i dengan j | B₍ᵢⱼ₎ / K₍ᵢⱼ₎ | baris i **dan** j (bertukar tempat, tidak ada yang hilang) |
| 2 | Kalikan baris/kolom i dengan skalar a | B₍ᵢ₎⁽ᵃ⁾ / K₍ᵢ₎⁽ᵃ⁾ | hanya baris i |
| 3 | Baris i + a × baris j | B₍ᵢⱼ₎⁽ᵃ⁾ / K₍ᵢⱼ₎⁽ᵃ⁾ | **hanya baris i** (baris j tetap) |
| 4 | a × baris i + b × baris j | B₍ᵢ₎⁽ᵃ⁾₍ⱼ₎⁽ᵇ⁾ / K… | hanya baris i |

- Penekanan dosen di vicon: pada tipe 3 & 4, **baris/kolom j tidak berubah**, yang diganti hanya baris/kolom ke-i. Pada tipe 1 keduanya berubah karena ditukar.
- **Contoh tipe 3 dari slide**: B₍₃₂₎⁽⁻²⁾ → baris 3 baru = baris 3 + (−2)·baris 2: (1 + (−2)·3, 2 + (−2)·1, 1 + (−2)(−2), 2 + (−2)·1) = **(−5, 0, 5, 0)**.
- **Contoh tipe 4 dari slide**: baris 3 × 2 + baris 2 × 4 → **(14, 8, −6, 8)**. Untuk kolom: K₃ × 4 + K₂ × 3 → **(−13, −5, 10, 20)**.
- Latihan bersama di vicon: baris 1 × 4 + baris 2 × (−3), yang berubah hanya baris 1.

---

## Yang perlu diingat (UTS & Tugas 1)
1. Rumus panjang vektor, operasi komponen, dan **dot product** (beserta tanda/sudutnya, ortogonal).
2. **Syarat ordo** untuk penjumlahan dan perkalian matriks, cara hitung baris × kolom, AB ≠ BA, (AB)ᵀ = BᵀAᵀ.
3. Definisi tiap **jenis matriks** (bisa membuat contoh sendiri, seperti Tugas 1 no. 3).
4. 4 tipe **transformasi elementer**, notasi B/K, dan baris mana yang berubah.
5. Selanjutnya (P06+): matriks elementer, ekivalen, **rank**, lalu determinan.
