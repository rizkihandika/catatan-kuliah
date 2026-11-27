# P06 — Rank Matriks

Tanggal: 2026-11-27 · Sumber: [`PPT ALE 6.pdf`](../materi/PPT%20ALE%206.pdf) (11 halaman), video sesi 6 (YouTube, belum ditonton)

## Ringkasan 3 kalimat
**Rank** matriks A, ditulis r(A), adalah jumlah maksimum baris (atau kolom) yang **linier independen**, yaitu yang tidak bisa dinolkan lewat transformasi elementer. Cara mencarinya: pilih **pivot**, pakai transformasi elementer (P05) untuk menolkan elemen lain sampai bentuknya eselon, lalu **hitung baris yang tidak nol**. Baris yang bisa dijadikan nol semua berarti baris itu cuma "kombinasi" baris lain, jadi tidak ikut dihitung.

## Konsep kunci

### 1. Intuisi dulu
Bayangkan tiap baris matriks itu satu "informasi". Kalau ada baris yang ternyata cuma gabungan baris lain (mis. baris 3 = baris 1 + baris 2, atau baris 1 = 2 × baris 2), baris itu **tidak membawa informasi baru**: datanya duplikat.

> Rank = berapa baris yang **benar-benar independen** (benar-benar baru, bukan hasil racikan baris lain).

Analogi gamer: punya 3 *skill*, tapi skill ketiga cuma kombo skill 1 + skill 2. Jumlah skill "unik" kamu tetap 2. Itu rank-nya.

Contoh cepat:
```
| 1  2 |      baris 2 = 2 × baris 1  →  cuma 1 baris unik  →  rank = 1
| 2  4 |
```

### 2. Definisi formal (hal. 3)
- **Rank** r(A) = banyaknya vektor yang **linier independen** paling banyak yang dibentuk oleh vektor-vektor kolom A (slide menulis "matriks X ... kolom dari A", maksudnya matriks yang sama).
- Versi praktis dari slide: rank = **jumlah maksimum baris/kolom yang tidak dapat dinolkan**.
- Untuk menolkan dipakai serangkaian **transformasi elementer** baris (B) atau kolom (K), lihat P05.
- Fakta penting: rank baris = rank kolom, jadi boleh pakai OBE (baris) saja. Untuk matriks m × n berlaku **r(A) ≤ min(m, n)**. *(dua fakta ini tambahan, bukan dari slide)*

### 3. Pivot (hal. 4)
**Pivot** = elemen "eksekutor" yang dipakai untuk menolkan elemen lain di kolom yang sama. Tips: pilih pivot bernilai **1 atau −1**, supaya pengalinya bilangan bulat dan hitungannya gampang (slide juga begitu: Contoh 1 pakai −1, Contoh 2 pakai 1).

### 4. Langkah mencari rank (metode OBE, hal. 4–10)
1. Pilih pivot (sebaiknya ±1) di satu kolom.
2. Pakai B₍ᵢⱼ₎⁽ᵃ⁾ (baris i + a × baris pivot j) untuk menolkan elemen lain di kolom pivot.
3. Pindah ke kolom berikutnya, pilih pivot baru dari baris yang **belum** dipakai sebagai pivot, lalu ulangi.
4. Berhenti kalau sudah berbentuk eselon (tangga) atau tidak ada lagi yang bisa dinolkan.
5. **Rank = jumlah baris yang tidak nol semua.**

Kompleksitas (info tambahan): eliminasi Gauss untuk matriks n × n butuh sekitar O(n³) operasi.

### 5. Metode minor/determinan (tambahan, TIDAK ada di slide)
Untuk matriks persegi n × n: kalau **det(A) ≠ 0**, maka rank = n (penuh). Kalau det = 0, rank < n, lalu cek minor (determinan sub-matriks) ukuran lebih kecil. Berguna buat **mengecek** jawaban OBE, misalnya di Contoh 1 det(A) = −114 ≠ 0, jadi rank 3 cocok.

## Contoh dikerjakan

### Contoh 1: rank 3 (hal. 4–7)
```
      |  4  -5   3 |
A =   | -1   3   2 |   ← pivot: baris 2 kolom 1 (nilai −1)
      |  3   2  -5 |
```
**Langkah 1:** nolkan kolom 1 di baris 1 dan 3 memakai pivot −1.
- B₍₁₂₎⁽⁴⁾: baris 1 + 4·baris 2 = (4 + 4·(−1), −5 + 4·3, 3 + 4·2) = **(0, 7, 11)**
- B₍₃₂₎⁽³⁾: baris 3 + 3·baris 2 = (3 + 3·(−1), 2 + 3·3, −5 + 3·2) = **(0, 11, 1)**
```
      |  0   7  11 |
   ~  | -1   3   2 |
      |  0  11   1 |
```
Slide berhenti di sini dan menyimpulkan "tidak ada baris yang dapat dinolkan" → **rank = 3**.

**Langkah 2 (pelengkap, bukan dari slide):** biar yakin, nolkan kolom 2 di baris 3 dengan tipe 4, B₍₃₎⁽⁷⁾₍₁₎⁽⁻¹¹⁾ (7·baris 3 − 11·baris 1):
```
7·(0, 11, 1) − 11·(0, 7, 11) = (0, 77 − 77, 7 − 121) = (0, 0, −114)   ← tetap tidak nol
```
Tiga baris tidak nol → **r(A) = 3**. ✔ Dicek `numpy.linalg.matrix_rank` = 3, det(A) = −114.

### Contoh 2: rank 2 (hal. 7–10)
```
      |  4  -2   2 |
A =   | -1   3   2 |
      |  1   2   3 |   ← pivot: baris 3 kolom 1 (nilai 1)
```
**Langkah 1:** nolkan kolom 1 di baris 1 dan 2.
- B₍₁₃₎⁽⁻⁴⁾: baris 1 + (−4)·baris 3 = (4 − 4, −2 − 8, 2 − 12) = **(0, −10, −10)**
- B₍₂₃₎⁽¹⁾: baris 2 + 1·baris 3 = (−1 + 1, 3 + 2, 2 + 3) = **(0, 5, 5)**
```
      |  0  -10  -10 |
   ~  |  0    5    5 |
      |  1    2    3 |
```
**Langkah 2:** B₍₁₂₎⁽²⁾: baris 1 + 2·baris 2 = (0, −10 + 10, −10 + 10) = **(0, 0, 0)**
```
      |  0   0   0 |   ← berhasil dinolkan
   ~  |  0   5   5 |
      |  1   2   3 |
```
Baris 1 bisa dinolkan, baris 2 & 3 tidak → **r(A) = 2**. ✔ numpy: rank 2, det = 0.

> Catatan: di hal. 7 baris 1 ditulis (2, −1, 1), tapi di hal. 8–10 dihitung dengan (4, −2, 2). Rank-nya tetap 2 untuk keduanya (sudah dicek numpy), karena (4, −2, 2) = 2 × (2, −1, 1), dan mengalikan baris dengan skalar ≠ 0 tidak mengubah rank.

### Contoh 3: matriks tidak persegi (buatan sendiri, dicek numpy)
```
      | 1  2  -1  3 |
A =   | 2  4   1  0 |   (3 × 4, jadi rank maksimal = 3)
      | 3  6   0  3 |
```
- B₍₂₁₎⁽⁻²⁾: baris 2 − 2·baris 1 = (0, 0, 3, −6)
- B₍₃₁₎⁽⁻³⁾: baris 3 − 3·baris 1 = (0, 0, 3, −6)
- B₍₃₂₎⁽⁻¹⁾: baris 3 − baris 2 = (0, 0, 0, 0)

Dua baris tidak nol → **r(A) = 2** ✔ (numpy: 2). Memang dari awal baris 3 = baris 1 + baris 2.

### Cek cepat pakai Python
```python
import numpy as np
A = np.array([[4, -5, 3], [-1, 3, 2], [3, 2, -5]])
print(np.linalg.matrix_rank(A))   # 3, pakai SVD di belakang layar, kira-kira O(n^3)
```

## Istilah penting
| Istilah | Arti |
|---------|------|
| Rank, r(A) | Jumlah maksimum baris/kolom yang linier independen |
| Linier independen | Tidak ada yang bisa ditulis sebagai kombinasi linier yang lain |
| Pivot | Elemen "eksekutor" untuk menolkan elemen lain sekolom |
| Menolkan | Membuat elemen/baris jadi 0 lewat transformasi elementer |
| Bentuk eselon baris | Bentuk "tangga": tiap baris diawali nol lebih banyak dari baris atasnya |
| Rank penuh | r(A) = min(m, n); untuk persegi n × n berarti det ≠ 0 |

## Sering keluar di ujian / mudah keliru
- **Yang dihitung baris TIDAK nol**, bukan baris yang nol. Rank 2 di Contoh 2 = 3 baris − 1 baris nol.
- **Jangan berhenti terlalu cepat.** Sebelum menyimpulkan "tidak bisa dinolkan", lanjutkan eliminasi sampai bentuk eselon (lihat langkah pelengkap Contoh 1).
- Baris yang dipakai jadi pivot **tidak diubah** (sama seperti aturan tipe 3/4 di P05). Yang berubah hanya baris tujuan.
- Teliti tanda negatif: 3 + 3·(−1), bukan 3 + 3·1.
- Matriks m × n: rank **≤ min(m, n)**. Matriks 3 × 5 tidak mungkin rank 4.
- Matriks nol rank-nya **0**. Matriks yang semua barisnya kelipatan satu baris rank-nya **1**.
- Cek silang: matriks persegi dengan det ≠ 0 berarti rank penuh; det = 0 berarti rank < n.
- Tips kuis: lirik dulu apakah ada baris yang kelipatan baris lain atau jumlah dua baris lain. Itu sinyal rank turun dan bisa menghemat waktu.

## Latihan cepat
Tentukan rank tiap matriks.

1. `A = [[1, 2, 3], [2, 4, 6], [1, 0, 1]]`
2. `B = [[1, 1, 1], [1, 2, 3], [1, 3, 6]]`
3. `C = [[2, 4, 6], [1, 2, 3], [-3, -6, -9]]`
4. `D = [[1, 2, 0, 1], [2, 4, 1, 3], [3, 6, 1, 4]]` (3 × 4)
5. Konsep: matriks nol 2 × 3 rank-nya berapa? Dan rank maksimum matriks 3 × 5?

<details><summary>Kunci jawaban (semua dicek numpy.linalg.matrix_rank)</summary>

1. **r(A) = 2.** B₍₂₁₎⁽⁻²⁾ → baris 2 = (0, 0, 0); B₍₃₁₎⁽⁻¹⁾ → baris 3 = (0, −2, −2). Ada 2 baris tidak nol. (det = 0)
2. **r(B) = 3.** B₍₂₁₎⁽⁻¹⁾ → (0, 1, 2); B₍₃₁₎⁽⁻¹⁾ → (0, 2, 5); B₍₃₂₎⁽⁻²⁾ → (0, 0, 1). Tiga baris tidak nol. (det = 1 ≠ 0)
3. **r(C) = 1.** Baris 1 = 2 × baris 2 dan baris 3 = −3 × baris 2, jadi dua baris bisa dinolkan.
4. **r(D) = 2.** B₍₂₁₎⁽⁻²⁾ → (0, 0, 1, 1); B₍₃₁₎⁽⁻³⁾ → (0, 0, 1, 1); B₍₃₂₎⁽⁻¹⁾ → (0, 0, 0, 0). (baris 3 = baris 1 + baris 2)
5. Matriks nol → **rank 0**. Matriks 3 × 5 → rank maksimum **3** (= min(3, 5)).
</details>

## Pertanyaan untuk dicek ke dosen
- Contoh 2: matriks di hal. 7 baris 1 = (2, −1, 1), di hal. 8–10 = (4, −2, 2). Mana yang dimaksud? (rank sama-sama 2)
- Contoh 1: apakah di ujian cukup berhenti di langkah 1 seperti slide, atau harus sampai bentuk eselon?
- Apakah metode minor/determinan juga boleh dipakai di UTS?

## Sumber
- `PPT ALE 6.pdf`: hal. 1–2 (judul), hal. 3 (definisi rank), hal. 4 (pivot + soal Contoh 1), hal. 5–7 (pengerjaan Contoh 1, kesimpulan rank 3, soal Contoh 2), hal. 8–10 (pengerjaan Contoh 2, rank 2), hal. 11 (penutup). Teks diekstrak dengan `pypdf` + `pdftotext -layout`.
- Video sesi 6 (belum ditonton): https://www.youtube.com/watch?v=5mB5K7Ri97c&list=PLvOuFZ_J_esh0ri5O6yGfdvu3_upiPav9&index=6
- Bagian bertanda "tambahan"/"pelengkap" (fakta rank ≤ min(m,n), metode determinan, langkah 2 Contoh 1, Contoh 3, latihan) bukan dari slide; semua angka rank dicek dengan `numpy.linalg.matrix_rank`.
- Prasyarat: [P05 — Transformasi Elementer](P05-transformasi-elementer.md)
