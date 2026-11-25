# P05 — Jenis Data, Konversi Data & Sistem Bilangan

Sumber: [`Modul PTKI 05 - Jenis data, Konversi data dan sistem bilangan.pdf`](../materi/Modul%20PTKI%2005%20-%20Jenis%20data%2C%20Konversi%20data%20dan%20sistem%20bilangan.pdf) (hal. 2–6). Kuis Sesi 5: 5 soal / 30 menit, tenggat 2026-11-24 12:00.

## 1. Jenis data
| Dasar | Jenis | Ciri | Contoh |
|-------|-------|------|--------|
| Nilai | **Diskrit** | bilangan asli/cacah (hasil menghitung) | jumlah karyawan |
| | **Kontinu** | berada dalam interval (hasil mengukur, "kira-kira") | berat badan, suhu |
| Sumber | **Internal** | dari dalam organisasi | modal, jumlah produksi |
| | **Eksternal** | dari luar organisasi | daya beli masyarakat |
| Cara memperoleh | **Primer** | dikumpulkan sendiri langsung (wawancara, observasi) | kuesioner sendiri |
| | **Sekunder** | dari pihak/studi lain, dokumen, arsip | data BPS |
| Waktu | **Cross section** | satu titik waktu | survei kuesioner |
| | **Time series (berkala)** | dari waktu ke waktu | harga sembako per bulan |
| Sifat | **Kualitatif** | bukan angka | kualitas pelayanan |
| | **Kuantitatif** | angka | harga saham, pendapatan |

## 2. Tipe data primitif (pemrograman)
| Tipe | Ukuran | Jangkauan |
|------|--------|-----------|
| byte | 8 bit | −128 … 127 |
| short | 16 bit | −32.768 … 32.767 |
| int | 32 bit | ±2,1 miliar (−2³¹ … 2³¹−1) |
| long | 64 bit | −2⁶³ … 2⁶³−1 |
| char | 16 bit | 1 karakter Unicode |
| float | 32 bit | ±3.4e38 |
| double | 64 bit | ±1.7e308 |
| boolean | — | true/false |

> Modul menulis double 54 bit dan short ±32767 — yang standar (Java) adalah 64 bit dan −32768…32767. Kalau kuis mengikuti modul, ingat versi modul juga.

## 3. Sistem bilangan
| Sistem | Radiks | Digit | Contoh |
|--------|--------|-------|--------|
| Desimal | 10 | 0–9 | 76₁₀ |
| Biner | 2 | 0, 1 | 11001₂ |
| Oktal | 8 | 0–7 | 137₈ |
| Heksadesimal | 16 | 0–9, A–F (A=10 … F=15) | 4C₁₆ |

Hafalkan tabel 0–15: `1010₂ = 12₈ = A₁₆ = 10`, `1111₂ = 17₈ = F₁₆ = 15`.

## 4. Konversi
**Intuisi**: tiap digit = "berapa banyak" pangkat radiks di posisi itu.

- **Desimal → basis r**: bagi terus dengan r, catat sisa, baca sisa dari **bawah ke atas**.
  - 76 ÷ 16 = 4 sisa 12 (C) → 4 ÷ 16 = 0 sisa 4 → **4C₁₆**
  - 25 → biner: 25/2=12 s1, 12/2=6 s0, 6/2=3 s0, 3/2=1 s1, 1/2=0 s1 → **11001₂**
- **Basis r → desimal**: jumlahkan digit × r^posisi.
  - 137₈ = 1·64 + 3·8 + 7 = **95**
  - 4C₁₆ = 4·16 + 12 = **76**
- **Biner ↔ oktal/heksa** (jalan pintas): kelompokkan biner per **3 bit** (oktal) atau **4 bit** (heksa) dari kanan.
  - 1011 0110₂ → B6₁₆ ; 10 110 110₂ → 266₈

## Latihan cepat
1. 45₁₀ = …₂ = …₁₆
2. 1110 1010₂ = …₁₆ = …₁₀
3. 2F₁₆ = …₁₀
4. Data harga BBM tiap bulan 2020–2025 termasuk jenis data apa? (2 kategori)

<details><summary>Jawaban</summary>

1. 101101₂ = 2D₁₆ 2. EA₁₆ = 234 3. 47 4. time series + kuantitatif (juga sekunder bila dari BPS)
</details>
