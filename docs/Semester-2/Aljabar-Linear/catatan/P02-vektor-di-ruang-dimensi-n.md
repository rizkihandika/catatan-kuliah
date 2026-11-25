# P02 — Vektor di Ruang Dimensi n

Tanggal: 2026-10-30 · Sumber: `materi/PPT ALE 2.pdf`

## Ringkasan 3 kalimat
Vektor adalah ruas garis berarah yang punya **besar (panjang)** dan **arah**, ditulis sebagai pasangan/tripel bilangan seperti u = (a, b) atau u = (a, b, c). Operasi vektor (jumlah, kurang, kali skalar) dilakukan **per komponen**, dan panjangnya dihitung dengan |u| = √(a² + b² + …). *Dot product* a·b menghasilkan **skalar** yang tandanya menunjukkan sudut antarvektor: positif → lancip, nol → **ortogonal**, negatif → tumpul.

## Konsep kunci

### 1. Pengertian & notasi (slide 2–3)
- **Intuisi**: vektor = panah dari titik A ke titik B; u = AB.
- Notasi: ū, **u** (tebal), atau *u* (miring).
- R²: u = (a, b) = a**i** + b**j** (kombinasi vektor satuan **i**, **j**).
- Panjang: |u| = √(a² + b²); di R³: |u| = √(a² + b² + c²).

### 2. Kesamaan vektor (slide 4–5)
u = (a, b) dan v = (c, d) sama ⇔ **besar dan arah sama** ⇔ a = c dan b = d.
Kemungkinan: sama besar & arah (sama) · sama besar beda arah · sama arah beda besar · beda semua.

### 3. Operasi (slide 6–8)
| Operasi | Rumus | Catatan |
|---------|-------|---------|
| Jumlah | (a, b) + (c, d) = (a+c, b+d) | aturan segitiga / jajaran genjang |
| Kurang | u − v = u + (−v) = (a−c, b−d) | |
| Kali skalar | m·(a, b) = (ma, mb) | m > 0 searah, m < 0 berlawanan arah; panjang jadi \|m\| kali |
| Panjang hasil | \|u ± v\| = √((a±c)² + (b±d)²) | hitung vektornya dulu, baru panjangnya |

### 4. Sifat operasi (slide 9–10)
- Komutatif a + b = b + a · Asosiatif (a + b) + c = a + (b + c)
- Ada identitas 0 · Tertutup (hasil jumlah tetap vektor)
- **Ketidaksamaan segitiga**: |u + v| ≤ |u| + |v|
- 1u = u, 0u = 0, m0 = 0; jika mu = 0 maka m = 0 atau u = 0
- (mn)u = m(nu), **|mu| = |m||u|**, (−m)u = −(mu) = m(−u)
- Distributif: (m + n)u = mu + nu, m(u + v) = mu + mv; u + (−u) = 0

### 5. Dot product / inner product (slide 12–13)
- **Intuisi**: seberapa "searah" dua vektor.
- a·b = |a||b| cos γ = a₁b₁ + a₂b₂ + a₃b₃ → hasilnya **skalar**, bukan vektor.
- cos γ = (a·b) / (|a||b|)

| a·b | Sudut γ | Nama |
|-----|---------|------|
| > 0 | 0° < γ < 90° | lancip |
| = 0 | γ = 90° | **ortogonal** (tegak lurus) |
| < 0 | 90° < γ < 180° | tumpul |

### 6. Contoh dikerjakan (bukan soal tugas)
u = (1, 2, −2), v = (3, 0, 4)
- u + v = (4, 2, 2) → |u + v| = √(16 + 4 + 4) = √24 = 2√6
- 2u − v = (2 − 3, 4 − 0, −4 − 4) = (−1, 4, −8)
- u·v = 1·3 + 2·0 + (−2)·4 = **−5** → sudut tumpul
- |u| = √(1 + 4 + 4) = 3, |v| = √(9 + 0 + 16) = 5 → cos γ = −5/15 = **−1/3**

> Contoh di slide 14 (a = [−2, 3, 0], b = [3, −5, 2]) **sama persis dengan Tugas 1 no. 1** — kerjakan sendiri dengan langkah seperti di atas.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Vektor | Ruas garis berarah dengan besar dan arah tertentu |
| Skalar | Bilangan biasa (hanya besar, tanpa arah) |
| Komponen | Bilangan penyusun vektor, mis. a dan b pada (a, b) |
| Vektor satuan i, j | Vektor panjang 1 searah sumbu x dan y |
| Panjang / norma \|u\| | Besar vektor |
| Dot product | Perkalian titik, hasilnya skalar |
| Ortogonal | Dua vektor tegak lurus (dot product = 0) |

## Sering keluar di ujian / mudah keliru
- Dot product hasilnya **skalar**; jangan ditulis sebagai vektor.
- |u + v| ≠ |u| + |v| (secara umum) — hitung vektor jumlahnya dulu.
- Kali skalar negatif membalik arah, tapi panjang tetap |m| kali.
- Hati-hati tanda minus: 3a − 5b = 3a + (−5)b, kalikan setiap komponen.

## Pertanyaan untuk dicek ke dosen
- Apakah cross product (perkalian silang) juga masuk materi? Slide hanya membahas dot product.

## Sumber
- `PPT ALE 2.pdf` hal. 2–14 (teks: `arsip/teks-materi/PPT ALE 2.pdf.md`)
- Tidak ada video/vicon terekam untuk P02.
