# P05 — Transformasi Elementer

Tanggal: 2026-11-20 · Sumber: [`PPT ALE 5.pdf`](../materi/PPT%20ALE%205.pdf), video "Transformasi Elementer", rekaman vicon Sesi 5 (2026-11-22, ±15 menit)

## Ringkasan 3 kalimat
Transformasi elementer adalah operasi yang "boleh dilakukan" pada baris (notasi **B**) atau kolom (notasi **K**) suatu matriks. Ada empat tipe: **tukar**, **kali skalar**, **tambah dengan kelipatan baris/kolom lain**, dan **kombinasi dua kelipatan**. Pada tipe 3 dan 4 hanya baris/kolom ke-**i** yang berubah, baris/kolom ke-j tetap; alat ini nanti dipakai untuk mencari rank, invers, dan menyelesaikan SPL.

## Konsep kunci

### 1. Matriks contoh di slide (dipakai di semua contoh)
```
      | 4  -3  -1  3 |   ← baris 1
A =   | 3   1  -2  1 |   ← baris 2
      | 1   2   1  2 |   ← baris 3
      | 2   4   2  4 |   ← baris 4
```

### 2. Empat tipe transformasi (slide 3–11)
| Tipe | Notasi | Arti | Yang berubah |
|------|--------|------|--------------|
| 1 | B₍ᵢⱼ₎ / K₍ᵢⱼ₎ | **tukar** baris/kolom i dengan j | baris i **dan** j (bertukar tempat) |
| 2 | B₍ᵢ₎⁽ᵃ⁾ / K₍ᵢ₎⁽ᵃ⁾ | **kalikan** baris/kolom i dengan skalar a | hanya i |
| 3 | B₍ᵢⱼ₎⁽ᵃ⁾ / K₍ᵢⱼ₎⁽ᵃ⁾ | baris i **+ a × baris j** | **hanya i** (j tetap) |
| 4 | B₍ᵢ₎⁽ᵃ⁾₍ⱼ₎⁽ᵇ⁾ / K… | **a × baris i + b × baris j** | **hanya i** |

Tanda `~` dibaca "ekuivalen dengan" (hasil transformasi).

### 3. Contoh dari slide (dicek ulang)
| Operasi | Hasil |
|---------|-------|
| B₍₃₁₎ (tukar baris 3 & 1) | baris 1 = (1, 2, 1, 2), baris 3 = (4, −3, −1, 3) |
| K₍₂₃₎ (tukar kolom 2 & 3) | kolom 2 = (−1, −2, 1, 2), kolom 3 = (−3, 1, 2, 4) |
| B₍₃₎⁽²⁾ (baris 3 × 2) | baris 3 = (2, 4, 2, 4) |
| K₍₃₎⁽³⁾ (kolom 3 × 3) | kolom 3 = (−3, −6, 3, 6) |
| B₍₃₂₎⁽⁻²⁾ (baris 3 + (−2)·baris 2) | baris 3 = (1−6, 2−2, 1+4, 2−2) = **(−5, 0, 5, 0)** |
| K₍₂₁₎⁽²⁾ (kolom 2 + 2·kolom 1) | kolom 2 = (−3+8, 1+6, 2+2, 4+4) = **(5, 7, 4, 8)** |
| B₍₃₎⁽²⁾₍₂₎⁽⁴⁾ (2·baris 3 + 4·baris 2) | baris 3 = (2+12, 4+4, 2−8, 4+4) = **(14, 8, −6, 8)** |
| K₍₃₎⁽⁴⁾₍₂₎⁽³⁾ (4·kolom 3 + 3·kolom 2) | kolom 3 = (−4−9, −8+3, 4+6, 8+12) = **(−13, −5, 10, 20)** |

### 4. Latihan di vicon (dikerjakan bersama)
B₍₁₎⁽⁴⁾₍₂₎⁽⁻³⁾ — 4·baris 1 + (−3)·baris 2, hanya baris 1 berubah:
```
baris 1 baru = (4·4 + 3·(−3), 4·(−3) + 1·(−3), 4·(−1) + (−2)·(−3), 4·3 + 1·(−3))
             = (16 − 9, −12 − 3, −4 + 6, 12 − 3)
             = (7, −15, 2, 9)
```

### 5. Kenapa penting (kata dosen di vicon)
Matriks = *array* data; pengolahan citra/*computer vision* memanipulasi matriks. Transformasi elementer adalah dasar **eliminasi Gauss** untuk mencari rank, invers, dan solusi SPL (materi P06+).

## Istilah penting
| Istilah | Arti |
|---------|------|
| Transformasi elementer | Operasi dasar pada baris/kolom matriks |
| B (baris) / K (kolom) | Notasi operasi pada baris / kolom |
| `~` | Ekuivalen (hasil transformasi) |
| Matriks ekivalen | Matriks yang diperoleh lewat transformasi elementer |

## Sering keluar di ujian / mudah keliru
- **Tipe 3 & 4: baris j TIDAK berubah** (penekanan dosen). Hanya tipe 1 (tukar) yang mengubah dua baris.
- Urutan indeks: B₍₃₂₎⁽⁻²⁾ → yang **diubah baris 3**, pengalinya ditempel ke **baris 2**.
- Tipe 4: kalikan dulu baris i dengan a, baru tambah b × baris j.
- Jangan tertukar B (baris, horizontal) dan K (kolom, vertikal).
- Tulis tiap suku perkalian, terutama yang negatif.

## Latihan cepat
Dari matriks A di atas, hitung B₍₂₁₎⁽⁻¹⁾ (baris 2 − baris 1).
<details><summary>Jawaban</summary>

baris 2 = (3−4, 1+3, −2+1, 1−3) = (−1, 4, −1, −2); baris lain tetap.
</details>

## Pertanyaan untuk dicek ke dosen
- Slide 12 ("contoh lain, silahkan dikerjakan") — apakah akan dibahas atau masuk UTS?

## Sumber
- `PPT ALE 5.pdf` hal. 3–12 (teks: `arsip/teks-materi/PPT ALE 5.pdf.md`)
- Transkrip vicon `arsip/transkrip/9318653-Video-Konferensi-Sesi-5Transformasi-Elementer.md`
- Transkrip video `arsip/transkrip/9294973-Transformasi-Elementer.md` (belum dibaca penuh)
