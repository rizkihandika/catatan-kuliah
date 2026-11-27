# Panduan Langkah — Tugas 1 Aljabar Linier

Tenggat **Minggu 2026-11-29 23:30** (target upload ≤ 17:00). Estimasi ± 2–2,5 jam.
Soal sudah dicocokkan dengan [`Tugas 1 - Aljabar Linier.docx`](../../materi/Tugas%201%20-%20Aljabar%20Linier.docx) (2026-11-27): susunan A, B, C, D di `instruksi.md` **benar**.

Isi file ini: cara mengerjakan dengan **contoh angka lain** (bukan soalmu), lalu **angka pengecek** supaya kamu tahu jawabanmu benar tanpa dikasih jawabannya.

---

## Soal 1 — Vektor (ALE 2)

**Intuisi**: vektor = daftar angka; hampir semua operasinya dikerjakan **per komponen**. Hanya *dot product* dan panjang yang hasilnya satu angka (skalar).

| Operasi | Rumus | Contoh: p = [1, −4, 2], q = [−3, 2, 5] |
|---|---|---|
| p + q | [p₁+q₁, p₂+q₂, p₃+q₃] | [1+(−3), −4+2, 2+5] = **[−2, −2, 7]** |
| 2p − 3q | kalikan skalar dulu, baru kurangi | [2, −8, 4] − [−9, 6, 15] = **[11, −14, −11]** |
| p · q | p₁q₁ + p₂q₂ + p₃q₃ (skalar) | (1)(−3) + (−4)(2) + (2)(5) = −3 − 8 + 10 = **−1** |
| \|p + q\| | √(x² + y² + z²) dari vektor p+q | √((−2)² + (−2)² + 7²) = √57 ≈ **7,55** |

Jebakan: tanda minus saat `− 5b` (minus kali minus = plus); kuadrat bilangan negatif selalu positif; jangan tulis hasil dot product sebagai vektor.

## Soal 2 — Operasi matriks (ALE 3)

**Langkah 0 untuk tiap perkalian — cek ordo dulu:**
`(m×n) · (p×q)` terdefinisi **hanya jika n = p**, hasilnya **m×q**.
Tulis cek ini di jawabanmu, misalnya: "A (3×3) · B (3×3): 3 = 3 → terdefinisi, hasil 3×3".
Kalau tidak terdefinisi, jawabannya adalah **"tidak dapat dihitung" + alasan ordo**. Itu jawaban lengkap, bukan soal yang dilewati.

**Penjumlahan** (ordo harus sama): elemen seletak dijumlah.

**Perkalian**: elemen baris *i* kolom *j* = (baris *i* matriks kiri) · (kolom *j* matriks kanan).
Contoh 2×2: P = [[1, 2], [3, −1]], Q = [[0, 4], [−2, 1]]
- (PQ)₁₁ = 1·0 + 2·(−2) = −4  (PQ)₁₂ = 1·4 + 2·1 = 6
- (PQ)₂₁ = 3·0 + (−1)(−2) = 2  (PQ)₂₂ = 3·4 + (−1)·1 = 11
- PQ = [[−4, 6], [2, 11]]

Contoh beda ordo: E (2×3) = [[1, 0, 2], [−1, 3, 1]], F (3×2) = [[2, 1], [0, −1], [4, 3]] → hasil 2×2
- (EF)₁₁ = 1·2 + 0·0 + 2·4 = 10, dst. → EF = [[10, 7], [2, −1]]

Cara kerja rapi: tulis tiap elemen sebagai penjumlahan (mis. `c₁₂ = 2·6 + 5·1 + 3·2`), baru hasilnya. Dosen biasanya menilai langkah.

## Soal 3 — Jenis matriks (ALE 4)

| Jenis | Syarat | Tips variasi |
|---|---|---|
| Matriks nol | semua elemen 0, ordo bebas | pakai ordo berbeda: 2×2, 2×3, 3×3 |
| Matriks diagonal | **bujursangkar**, semua elemen di luar diagonal utama = 0 | 2×2, 3×3, 4×4; diagonalnya boleh ada 0 atau negatif |
| Segitiga atas | **bujursangkar**, semua elemen **di bawah** diagonal utama = 0 | isi elemen di atas diagonal dengan angka bebas |

Beri label ordo tiap contoh, dan buat sendiri, jangan menyalin contoh slide.

---

## Angka pengecek (bukan jawaban)

Kerjakan dulu, baru cocokkan. Kalau tidak cocok, cari salah hitungnya di elemen yang disebut.

| Soal | Cek |
|---|---|
| 1a a + b | jumlah ketiga komponennya = **1** |
| 1b 3a − 5b | jumlah ketiga komponennya = **3** |
| 1c a · b | bilangan **negatif dua digit** |
| 1d \|a + b\| | hasilnya **bilangan bulat** (akarnya kuadrat sempurna) |
| 2a A + B | jumlah semua elemen = **41**; elemen baris 1 kolom 1 = **7** |
| 2b A · B | jumlah semua elemen = **144**; elemen (1,1) = **6**; trace (jumlah diagonal) = **8** |
| 2c B · C | ordo hasil 3×2; jumlah semua elemen = **122**; elemen (1,1) = **40** |
| 2d C · D | ordo hasil 3×3; jumlah semua elemen = **109**; elemen (1,1) = **−10** |
| 2e A · D | cek ordonya baik-baik dulu |

Boleh juga verifikasi sendiri pakai NumPy (`A @ B`) atau kalkulator matriks online, tapi di PDF tetap tulis langkah manualnya.

## Checklist kumpul
- [ ] Header: nama, NIM, kelas IF102, Aljabar Linier, Tugas 1
- [ ] Setiap soal: tulis soal → langkah → hasil (kotak/tebal)
- [ ] Tulisan tangan difoto/di-scan rapi **atau** diketik di Word (Insert → Equation → Matrix)
- [ ] Gabung jadi **1 PDF** (mis. `Tugas1_AljabarLinier_<Nama>_<NIM>.pdf`)
- [ ] Upload di Edlink menu "TUGAS 1" (Sesi #5) ≤ Minggu 17:00 → buka lagi, pastikan status "sudah dikumpulkan"
- [ ] Bilang ke aku "Aljabar sudah dikumpulkan" → kupindahkan ke Selesai di `deadline.md`
